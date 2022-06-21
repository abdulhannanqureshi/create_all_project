<?php
//Property List By Taxonomy
?>


<?php

if(isset($_GET["currency-unit"]) && in_array($_GET["currency-unit"], get_currency_unit_list()) && ((isset($_GET["min-price"]) && !empty($_GET['min-price'])) || (isset($_GET["max-price"]) && !empty($_GET['max-price']))) ){
 
 $last_C_unit = $_COOKIE["site-currency-unit"];

  if($last_C_unit == get_base_currency_unit()){

    if(isset($_GET["min-price"]) && !empty($_GET['min-price']))
      $_GET["min-price"] = convert_currency($_GET["min-price"]);
    if(isset($_GET["max-price"]) && !empty($_GET['max-price']))
      $_GET["max-price"] = convert_currency($_GET["max-price"]);

  }elseif($_GET["currency-unit"] == get_base_currency_unit()){

    $conversion_rates = get_currency_conversion_rate();
    if(isset($_GET["min-price"]) && !empty($_GET['min-price'])){
      $_GET["min-price"] = round($_GET["min-price"] / $conversion_rates[$last_C_unit] , 2);
    }
    if(isset($_GET["max-price"]) && !empty($_GET['max-price'])){
      $_GET["max-price"] = round($_GET["max-price"] / $conversion_rates[$last_C_unit] , 2);
    }
  }else{
    $conversion_rates = get_currency_conversion_rate();
    $last_C_rate = $conversion_rates[$last_C_unit];
    $new_C_rate = $conversion_rates[$_GET['currency-unit']];

    if(isset($_GET["min-price"]) && !empty($_GET['min-price'])){
      $_GET["min-price"] = round(($_GET["min-price"] * round($new_C_rate/$last_C_rate , 4)) , 2);
    }
    if(isset($_GET["max-price"]) && !empty($_GET['max-price'])){
      $_GET["max-price"] = round(($_GET["max-price"] * round($new_C_rate/$last_C_rate , 4))  , 2);
    }
  }

  if(!empty($_GET["min-price"]))
    $_GET["min-price"] = (float)(str_replace(",", "", $_GET["min-price"]));
  if(!empty($_GET["max-price"]))
    $_GET["max-price"] = (float)(str_replace(",", "", $_GET["max-price"]));
  
  unset($_GET["currency-unit"]);

  $page_redirect = (explode("?", (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]"))[0];

  $query_val = array();
  foreach ($_GET as $name => $value) {
    if($name != "currency-unit")
      array_push($query_val, $name."=".$value);
  }
  $page_redirect = $page_redirect.'?'.implode("&", $query_val);

  
  ?>
  <script>
      location.replace("<?php echo $page_redirect; ?>");
  </script>
  <?php
}

?>


<?php get_header(); ?>
<style type="text/css">
	.inner-banner{
		background: url(http://unified.c247.website/wp-content/uploads/2020/09/rent-banner.jpg);
		background-repeat: no-repeat;
	    background-size: cover;
	    background-position: center;
	}
</style>
<?php

$current_cat = get_queried_object();
$mes_unit = current_measurement_unit();
$currency_unit = current_currency_unit();


$all_property = array();
$show_property = array();

$result = new WP_Query( array(
    'post_type' => 'property',
    'posts_per_page' => -1,
  	'orderby' => 'date',
  	'order'   => 'DESC',
  	'post_status' => 'publish',
    'tax_query' => array(
        array (
            'taxonomy' => $current_cat->taxonomy,
            'field' => 'slug',
            'terms' => $current_cat->slug,
        )
    ),
) );

if ( $result->have_posts() ) :
	while ( $result->have_posts() ) : $result->the_post();
		$all_property[$post->ID] = get_post_meta($post->ID,'price');
	endwhile;
endif;
wp_reset_query();



global $wpdb;

/* ---------------- search Query ------------------------- */
$form_fields = array("area","min-price","max-price","beds");
$not_set_form = array();
foreach ($form_fields as $key => $value) {
  if(!isset($_GET[$value]))
    array_push($not_set_form, $value);
}

if(count($not_set_form) == count($form_fields) || empty($all_property)){
  $for_filter = $all_property;
}else{
  foreach ($not_set_form as $key => $value) {
    $_GET[$value] = '';
  }

  $post_id_in = array();
  foreach ($all_property as $key => $value) {
    array_push($post_id_in, $key);
  }

  $beds = 0;
  if(!empty($_GET['beds']))
    $beds = $_GET['beds'];

  $min_price = 0;
  if(!empty($_GET['min-price']))
    $min_price = convert_in_base_currency($_GET['min-price']);

  // price check query add.
  if(!empty($_GET['max-price'])){
    $max_price = convert_in_base_currency($_GET['max-price']);
    $search_query = "SELECT `post_id` FROM `".$wpdb->prefix."postmeta` WHERE `post_id` IN(".implode(",", $post_id_in).") AND ((`meta_key` LIKE 'price' AND `meta_value` >= ".$min_price.") AND (`meta_key` LIKE 'price' AND `meta_value` <= ".$max_price."))";
  }else{
    $search_query = "SELECT `post_id` FROM `".$wpdb->prefix."postmeta` WHERE `post_id` IN(".implode(",", $post_id_in).") AND (`meta_key` LIKE 'price' AND `meta_value` >= ".$min_price.")";
  }

  //beds check query add.
  $search_query = "SELECT `post_id` FROM `".$wpdb->prefix."postmeta` WHERE `post_id` IN(".$search_query.") AND (`meta_key` LIKE 'beds' AND `meta_value` >= ".$beds.")";

  $area = $_GET["area"];
  if(!empty($_GET["area"])){
    $search_query = "SELECT `post_id` FROM `".$wpdb->prefix."postmeta` WHERE `post_id` IN(".$search_query.") AND ((`meta_key` LIKE 'address_city' AND `meta_value` LIKE '".$area."') OR (`meta_key` LIKE 'address_country' AND `meta_value` LIKE '".$area."') OR (`meta_key` LIKE 'address_zip_code' AND `meta_value` LIKE '".$area."'))";
  }

  //echo $search_query;

  $search_result = $wpdb->get_results($search_query);
  $serach_property_res = array();
  foreach ($search_result as $key => $value) {
    array_push($serach_property_res, $value->post_id);
  }

$temp = array();
if(!empty($serach_property_res)){
  $args = array(
  'post_type' => 'property',
  'orderby' => 'date',
  'order'   => 'DESC',
  'post_status' => 'publish',
  'post__in'      => $serach_property_res
  );

  $result = new WP_Query($args);
  if ( $result->have_posts() ) :
  while ( $result->have_posts() ) : $result->the_post();
    $temp[$post->ID] = get_post_meta($post->ID,'price');
  endwhile;
  endif;
  wp_reset_query();
}

  $for_filter = $temp;
}




/* ---------------- filter Query ------------------------- */

// format -> Name => value
$filter_options = array("Newest Property"=>"new","Oldest Property"=>"old","Price(High to Low)"=>"price_des","Price(Low to High)"=>"price_asc");



if(isset($_GET["sort-by"]) && !empty($_GET["sort-by"]) && in_array($_GET["sort-by"], $filter_options) && $_GET["sort-by"] != 'new'){
  if($_GET["sort-by"] == 'old'){
    $temp = array();
    foreach ($for_filter as $ID => $price) {
      array_push($temp, $ID);
    }
    $show_property = array_reverse($temp);
  }elseif ($_GET["sort-by"] == 'price_des') {
    arsort($for_filter);
    foreach ($for_filter as $ID => $price) {
      array_push($show_property, $ID);
    }
  }else{
    asort($for_filter);
    foreach ($for_filter as $ID => $price) {
      array_push($show_property, $ID);
    }
  }
}else{
  foreach ($for_filter as $ID => $price) {
    array_push($show_property, $ID);
  }
}



/*------------ pagination calculation ---------------*/

$total_property = count($show_property);

$property_per_page = 3;

$current_page = ($_GET['page'] == 0) ? 1 : $_GET['page'];

$total_page = (int)($total_property/$property_per_page);
if(count($show_property) % $property_per_page > 0){
  $total_page++;
}

if($current_page == 1){
  $min_pro = 0;
  $max_pro = $property_per_page;
}else{
  $min_pro = ($current_page - 1) * $property_per_page;
  $max_pro = $current_page * $property_per_page;
}

if($max_pro > count($show_property)){
  $max_pro = count($show_property);
}


$sort_form_action = get_site_url().'/property-type/'.$current_cat->slug;

if(isset($_GET["page"]) && !empty($_GET["page"]) && $current_page > $total_page){
  $get_array = array();
  unset($_GET["page"]);
  //unset($_GET["sort-by"]);
  foreach ($_GET as $key => $value) {
    array_push($get_array, $key."=".$value);
  }
  if($total_page > 1)
    array_push($get_array, 'page='.$total_page.'');
  $redirect_max_page = $sort_form_action.'?'.implode("&", $get_array);
?>
<script>
    location.replace("<?php echo $redirect_max_page; ?>");
</script>
<?php
}
?>
    <div class="inner-page-wrap">
        <section class="inner-banner">

    		<div class="banner-content wow bounceInUp">

    			<h1 class="text-center m-0"><?php echo $current_cat->description; ?></h1>

    		</div>

    	</section>
      <?php
        $property_for = get_all_property_type();
        $price_list = get_field( "price_list", 282 );
        $bedrooms_count = get_field( "bedrooms", 282 );

        $selected_area = $_GET['area'];
        $selected_bed = $_GET['beds'];
        $selected_min = $_GET['min-price'];
        $selected_max = $_GET['max-price'];
      ?>
      <section class="search-addon-section property-search" id="inline-search-form"> hannan 
         <div class="input-group-prepend">
            <select class="form-control" name="property_type" id="business_type">
              <?php
              echo '<option value="'.get_site_url().'/property/">All</option>';
              foreach ($property_for as $slug => $value) {
                echo '<option value="'.$value["url"].'">'.$value["name"].'</option>';
              }
              ?>
            </select>  
          </div>    
          <input type="text" class="form-control" placeholder="City, Country or Postcode" name="area" value="<?php echo $selected_area; ?>">
            <div class="input-group-append">
             <select class="form-control" id="bedroom_type" name="beds">
                <option selected hidden disabled value="" <?php if(empty($selected_bed)){ echo "selected"; }?>>Bedrooms</option>
                <?php
                for($i=0; $i<=$bedrooms_count; $i++){
                  $selected_show = '';
                  if($selected_bed == $i && !empty($selected_bed))
                    $selected_show = 'selected';
                  echo '<option value="'.$i.'" '.$selected_show.'>'.$i.' +</option>';
                }
                ?>
              </select>
              <select class="form-control" id="min_price" name="min-price">
                <option selected hidden disabled value="" <?php if(empty($selected_min)){ echo "selected"; }?>>Min Price</option>
                <?php
                for ($i=0; $i < (count($price_list)-3) ; $i++) {
                  $selected_show = '';
                  $price_val = (float)(str_replace(",", "", convert_currency($price_list[$i]["option_value"])));
                  if($selected_min == $price_val)
                    $selected_show = 'selected';
                  echo '<option value="'.$price_val.'" '.$selected_show.'>'.number_format($price_val,2).' AED</option>';
                }
                ?>
              </select>  
              <select class="form-control" id="max_price" name="max-price">
                <option selected hidden disabled value="" <?php if(empty($selected_max)){ echo "selected"; }?>>Max Price</option>
                <?php
                for ($i=3; $i < count($price_list); $i++) { 
                  $selected_show = '';
                  $price_val = (float)(str_replace(",", "", convert_currency($price_list[$i]["option_value"])));
                  if($selected_max == $price_val)
                    $selected_show = 'selected';
                  echo '<option value="'.$price_val.'" '.$selected_show.'>'.number_format($price_val,2).' AED</option>';
                }
                ?>
              </select> 
              <button class="btn btn-primary inline-submit" type="button" id="button-addon2">Search</button>
            </div>

      </section>


<section class="listing-section text-center mt-5 wow bounceInUp">
  <div class="container">
      <h2 class="text-center">Feature Property</h2>
    <?php if(!empty($show_property)) { ?>
      <div class="search-filter-section d-flex align-items-center justify-content-between mb-2">
          <div class="search-result">
              <?php echo $total_property; ?> <?php if ($total_property > 1){echo "Properties";}else{echo "Property";} ?> Found
          </div>
          <div class="search-sort d-flex align-items-center">
            <label>Sort By:</label>
            <form action="<?php echo $sort_form_action; ?>" id="sort-form">
              <?php
              if(isset($_GET)){
                foreach ($_GET as $name => $value) {
                  if($name != "sort-by" && $name != "page")
                    echo '<input type="hidden" name="'.$name.'" value="'.$value.'">';
                }
              }
              ?>
               <select class="form-control" id="sort_by" name="sort-by">
                <?php
                foreach ($filter_options as $name => $value) {
                  $selected_filter = '';
                  if($_GET["sort-by"] == $value){
                    $selected_filter = 'selected';
                  }
                  echo '<option value="'.$value.'" '.$selected_filter.'>'.$name.'</option>';
                }
                ?>
              </select>
            </form>              
          </div>
      </div>
      <div class="row">
      <?php
      for($i=$min_pro; $i<$max_pro; $i++){
        $propery_id = $show_property[$i];
        if (has_post_thumbnail( $propery_id ) )
          $pro_img_url = (wp_get_attachment_image_src( get_post_thumbnail_id( $propery_id ), 'full' ))[0];
        else
          $pro_img_url= get_stylesheet_directory_uri().'/assets/img/property-placeholder.png';

        $pro_add = get_field( "address", $propery_id );

        // price will convert
        $pro_price = convert_currency(get_field( "price", $propery_id ));

        // mesurment unit will convert
        $pro_area = convert_measurement(get_field( "total_area", $propery_id ));


      ?>
        <div class="col-md-4">
          <a href="<?php echo get_permalink($propery_id); ?>">
            <div class="property-card">
              <div class="property-img">
                <img src="<?php echo $pro_img_url; ?>">
              </div>

              <div class="property-detail">
                <div class="property-title  align-items-center justify-content-between">
                  <h5 class="m-0"><?php echo get_the_title($propery_id); ?></h5>
                </div>
                <p class="m-0"><?php echo $pro_add["city"]; ?>, <?php echo $pro_add["country"]; ?></p>
                <div class="amenity-wrap d-flex align-items-center mt-2 mb-2">
                  <div class="amenity d-flex align-items-center">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bed.png"><span><?php echo get_field( "beds", $propery_id ); ?>bd</span>
                  </div>
                  <div class="amenity d-flex align-items-center">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home.png"><span><?php echo $pro_area; ?> Sq <?php echo $mes_unit; ?></span>
                  </div>
                </div>
                <h5 class="property-price mt-2 mb-0 mt-md-0 text-uppercase"><?php echo $pro_price; ?> <?php echo $currency_unit; ?></h5>
              </div>

            </div>
          </a>
        </div>
      <?php } ?>
      </div>
      <div class="pagination">
        <?php
        if($total_page > 1){
            $pagi_link = $sort_form_action.'?page=';
            if(isset($_GET["sort-by"]) && !empty($_GET["sort-by"])){
                
                $pagi_link = $sort_form_action."?";
                $get_array = array();
                unset($_GET["page"]);
                foreach ($_GET as $key => $value) {
                    array_push($get_array, $key."=".$value);
                }
                
                $pagi_link = $pagi_link.''.implode("&", $get_array).'&page=';
            }
            if($current_page != 1){
                echo '<a class="prev page-numbers" href="'.$pagi_link.''.($current_page - 1).'"><i class="fas fa-angle-left"></i></a>';
            }

            for($i=1; $i<= $total_page; $i++){
                if($current_page == $i){
                    echo '<span aria-current="page" class="page-numbers current">'.$i.'</span>';
                }else{
                    echo '<a class="page-numbers" href="'.$pagi_link.''.$i.'">'.$i.'</a>';
                }
            }

            if($current_page != $total_page){
                echo '<a class="next page-numbers" href="'.$pagi_link.''.($current_page + 1).'"><i class="fas fa-angle-right"></i></a>';
            }
        }
        ?>
      </div>
  <?php }else{ ?>
      <div class="row no_property_found">
        <div class="col-sm-12">
          <center><h4>No Property Found.</h4></center>
        </div>
      </div>
  <?php } ?>
  </div> 
</section>
        
  <?php echo common_footer(); ?>

</div>
<script type="text/javascript">
	new WOW().init();
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
</script>

<script>
  jQuery(document).ready(function(){
    jQuery('#sort-form').find('select[name="sort-by"]').change(function(){
      /*jQuery('#sort-form').trigger("submit");*/
      var redirect_url = jQuery('#sort-form').attr("action");
      var query_string = [];
      jQuery('#sort-form').find('input').each(function(){
        query_string.push(''+jQuery(this).attr('name')+'='+jQuery(this).val());
      });
      query_string.push(''+jQuery(this).attr('name')+'='+jQuery(this).val());
      
      window.location.href = redirect_url+"?"+query_string.join("&");
    });
  });
</script>
<?php get_footer(); ?>