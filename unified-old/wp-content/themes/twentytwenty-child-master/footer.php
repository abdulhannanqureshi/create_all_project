<?php

/**

 * The template for displaying the footer

 *

 * Contains the opening of the #site-footer div and all content after.

 *

 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials

 *

 * @package WordPress

 * @subpackage Twenty_Twenty

 * @since 1.0.0

 */



?>

<?php
$currency_unit = current_currency_unit();
$section_1 = get_field( "section_first", 95 );
$section_2 = get_field( "section_second", 95 );
$section_3 = get_field( "section_third", 95 );

?>

<footer>
   <div class="container">
      <div class="row footer-content">
         <div class="col-md-4">
            <h4><?php echo $section_1["heading"]; ?></h4>
            <ul class="quick-links">
               <?php
                  foreach ($section_1["menu_links"] as $key => $value) {
                     echo '<li><a href="'.$value["link_url"].'">'.$value["link_text"].'</a></li>';
                  }
               ?>
            </ul>
         </div>
         <div class="col-md-4">
            <div class="footer-about mb-4">
               <h4><?php echo $section_2["heading_first"]; ?></h4>
               <?php echo $section_2["content_first"]; ?>
            </div>
            <div class="footer-contact">
               <h4><?php echo $section_2["heading_second"]; ?></h4>
               <?php echo $section_2["content_second"]; ?>
            </div>
            <?php if($section_2["enable_social_links"]){ ?>
               <div class="footer-social-links d-flex">
                  <?php
                     foreach ($section_2["social_links"] as $key => $value) {
                        echo '<a href="'.$value["link_url"].'" class="facebook-clr">'.$value["link_icon_html"].'</a>';
                     }
                  ?>
               </div>
            <?php } ?>
         </div>
         <div class="col-md-4">
            <h4><?php echo $section_3["heading"]; ?></h4>
            <?php echo $section_3["content"]; ?>
         </div>
      </div>
      <div class="copyright-section d-block d-md-flex justify-content-between">
         <p class="m-0">Design & Developed By <a href="http://chapter247.com/">Chapter247 Infotech</a></p>
         <p class="m-0">All Copyright Reserved 2020.</p>
      </div>
   </div>
</footer>
<!-- For Common Action Button S -->
   <div class="wrapper-foot-link">
      <ul>
         <li><a href="https://wa.me/+911234567890?text=text " ><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon_whatsapp.png" alt="Whatsapp"></a></li>
         <li><a href="tel:+910022993322" ><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon_phone.png" alt="Phone"></a></li>
         <li><a href="mailto:abc@gmail.com" ><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon_mail.png" alt="Mail"></a></li>
      </ul>
   </div>
<!-- For Common Action Button E -->

<!-- Modal -->
<div class="modal fade search-modal-wrap" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel" aria-hidden="true">
   <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            Close    
            <span aria-hidden="true"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/close.png"></span>
            </button>
         </div>
         <div class="modal-body">
            <?php
            $property_for = get_all_property_type();
            $key_count = 1;
            $price_list = get_field( "price_list", 282 );
            $bedrooms_count = get_field( "bedrooms", 282 );
            ?>
            <div class="search-modal-content">
               <form id="popup-search-form" class="property-search" method="post">
                  <div class="custom_radio">
                     <input type="radio" id="featured-0" name="property_type" value="<?php echo get_site_url().'/property/'?>" checked><label for="featured-0">All</label>
                     <?php
                     foreach ($property_for as $slug => $value) {
                        echo '<input type="radio" id="featured-'.($key_count).'" name="property_type" value="'.$value["url"].'"><label for="featured-'.($key_count).'">'.$value["name"].'</label>';
                        $key_count++;
                     }
                     ?>
                  </div>
                  <div class="input-group mb-3">
                     <input type="text" class="form-control" placeholder="City,Country or Postcode" name="area">
                     <div class="input-group-append">
                        <button class="btn btn-success" type="button" onclick="getLocation()"><i class="fas fa-map-marker-alt"></i></button>
                     </div>
                  </div>
                  <div class="searc-actions d-block text-center text-md-left d-md-flex mb-3">
                     <select class="form-control  mr-0 mr-md-3 mb-3 mb-md-0" id="minPrice" name="min-price">
                        <option selected hidden disabled value="">Min Price</option>
                        <?php
                        for ($i=0; $i < (count($price_list)-3) ; $i++) {
                           $price_val = (float)(str_replace(",", "", convert_currency($price_list[$i]["option_value"])));
                           echo '<option value="'.$price_val.'">'.number_format($price_val,2).' AED</option>';
                        }
                        ?>
                     </select>
                     <select class="form-control mr-0 mr-md-3 mb-3 mb-md-0 mb-3 mb-md-0" id="maxPrice" name="max-price">
                        <option selected hidden disabled value="">Max Price</option>
                        <?php
                        for ($i=3; $i < count($price_list); $i++) { 
                           $price_val = (float)(str_replace(",", "", convert_currency($price_list[$i]["option_value"])));
                           echo '<option value="'.$price_val.'">'.number_format($price_val,2).' AED</option>';
                        }
                        ?>
                     </select>
                     <select class="form-control" id="beds" name="beds">
                        <option selected hidden disabled value="">Bedrooms</option>
                        <?php
                        for($i=0; $i<=$bedrooms_count; $i++){
                           echo '<option value="'.$i.'">'.$i.' +</option>';
                        }
                        ?>
                     </select>
                  </div>
                  <button type="submit" class="btn btn-outline-primary w-100 mb-3 mt-4 mt-md-0 search-btn-lg">Search</button> 
                  <a href="<?php echo get_site_url().'/property/'; ?>" class="show-property-btn">Show all Properties</a>
               </form>
            </div>
         </div>
      </div>
   </div>
</div>


<script>

function openNav() {

  document.getElementById("slide-menu").style.width = "300px";

}



function closeNav() {

  document.getElementById("slide-menu").style.width = "0";

}

</script>

	<?php wp_footer(); ?>



	</body>

</html>

