<?php
/* ----------------- currency conversion cron S ---------------------- */
//currency_conversion_data_update();
function currency_conversion_data_update () {
	
	$api_result = currency_convert_api();

	if($api_result->result == 'success'){
		$rates = array();
		foreach ($api_result->conversion_rates as $currency => $price) {
			array_push($rates, $currency.'(=)'.$price);
		}

    update_option("unified-currency-conversion-rates",implode('(,)', $rates));
		update_option("unified-currency-update-date",date("Y-m-d h:i A"));
	}
}
add_action('cron_action_currency_conversion_data_update', 'currency_conversion_data_update');

function currency_convert_api(){
	$api_key = 'fc4c13515caa1029a2c5bcc8';
	$req_url = 'https://v6.exchangerate-api.com/v6/'.$api_key.'/latest/AED';
	$response_json = file_get_contents($req_url);

	return json_decode($response_json);
}
/* ----------------- currency conversion cron E ---------------------- */




/* ---------------- currency conversion S ------------------------ */

/*###### set currency unit to cookie #######*/
$currency_unit_array = get_currency_unit_list();

if(isset($_GET["currency-unit"]) && !empty($_GET["currency-unit"]) && in_array($_GET["currency-unit"], $currency_unit_array)){
  setcookie("site-currency-unit", $_GET["currency-unit"], time() + (86400 * 0.25), "/");
}


/*###### current currency unit #######*/
function current_currency_unit(){
	$currency_unit_array = get_currency_unit_list();
	if(isset($_GET["currency-unit"]) && !empty($_GET["currency-unit"]) && in_array($_GET["currency-unit"], $currency_unit_array)){
		return $_GET["currency-unit"];
	}else{
		if(isset($_COOKIE["site-currency-unit"]) && !empty($_COOKIE["site-currency-unit"])){
			return $_COOKIE["site-currency-unit"];
		}else{
			return get_base_currency_unit();
		}
	}
}

/*###### convert currency unit #######*/
function convert_currency($val){
	$currency_unit = current_currency_unit();
	$conversion_rates = get_currency_conversion_rate();

	$new_val = $val * $conversion_rates[$currency_unit];
	return number_format($new_val,2);
}

/*###### currency conversion rate for search form #######*/
function convert_in_base_currency($val){
  $conversion_rates = get_currency_conversion_rate();
  $currency_unit = current_currency_unit();

  $new_val = $val / $conversion_rates[$currency_unit];

  return round($new_val,2);
}

/*###### base currency unit #######*/
function get_base_currency_unit(){ return 'AED'; }

/*###### currency unit list #######*/
function get_currency_unit_list(){ return array("AED"=>"AED","USD"=>"USD"); }

/*###### currency conversion rate #######*/
function get_currency_conversion_rate(){
	$currency_conversion_rate = array();
	$rate_array = explode('(,)', get_option('unified-currency-conversion-rates'));

	foreach ($rate_array as $key => $value) {
		$temp = explode('(=)', $value);
		$currency_conversion_rate[$temp[0]] = round($temp[1],5);
	}

	return $currency_conversion_rate;
}

/* ---------------- currency conversion E ------------------------ */






/* ---------------- measurement unit S ------------------------ */

/*###### set measurement unit to cookie #######*/
$mess_unit_array = get_measurement_unit_list();

if(isset($_GET["mes-unit"]) && !empty($_GET["mes-unit"]) && in_array($_GET["mes-unit"], $mess_unit_array)){
  setcookie("site-mes-unit", $_GET["mes-unit"], time() + (86400 * 0.25), "/");
}

/*###### measurement unit list #######*/
function get_measurement_unit_list(){ return array("Feets"=>"ft","Meters"=>"m","Yards"=>"yd"); }

/*###### current measurement unit #######*/
function current_measurement_unit(){
	$mess_unit_array = get_measurement_unit_list();
	if(isset($_GET["mes-unit"]) && !empty($_GET["mes-unit"]) && in_array($_GET["mes-unit"], $mess_unit_array)){
		return $_GET["mes-unit"];
	}else{
		if(isset($_COOKIE["site-mes-unit"]) && !empty($_COOKIE["site-mes-unit"])){
			return $_COOKIE["site-mes-unit"];
		}else{
			return 'ft';
		}
	}
}

/*###### measurement unit conversion #######*/
function convert_measurement($val){
	switch (current_measurement_unit()) {
		case 'm':
			//meter conversion return
			$new_val = $val * 0.3048;
			break;

		case 'yd':
			//yard conversion return
			$new_val = $val * 0.333333;
			break;
		
		default:
			// default feet return
			$new_val = $val;
			break;
	}

	if(is_float($new_val))
		return number_format($new_val,2);
	else
		return number_format($new_val);
}

/* ---------------- measurement unit E ------------------------ */


/* enqueue scripts and style from parent theme */        
function twentytwenty_styles() {
	//wp_enqueue_style( 'parent', get_template_directory_uri() . '/style.css' );

	/* ------------- child theme css and js file ----------------- */
	
    wp_enqueue_style( 'bootstrap-min-css', get_stylesheet_directory_uri() . '/assets/css/bootstrap.min.css' );
    wp_enqueue_style( 'style-child-css', get_stylesheet_directory_uri() . '/assets/css/style.css' );
    wp_enqueue_style( 'slick-css', get_stylesheet_directory_uri() . '/assets/css/slick.css' );
    wp_enqueue_style( 'slick-theme-css', get_stylesheet_directory_uri() . '/assets/css/slick-theme.css' );
    wp_enqueue_style( 'all-css', get_stylesheet_directory_uri() . '/assets/css/all.css' );
    wp_enqueue_style( 'animate-min-css', get_stylesheet_directory_uri() . '/assets/css/animate.min.css' );
    
    wp_enqueue_style( 'custom-child-css', get_stylesheet_directory_uri() . '/assets/css/custom.css' );





    wp_enqueue_script( 'jQuery-min-js', get_stylesheet_directory_uri().'/assets/js/jquery.min.js' );
    wp_print_scripts( 'jQuery-min-js' );

    wp_enqueue_script( 'popper-min-js', get_stylesheet_directory_uri().'/assets/js/popper.min.js' );
    wp_print_scripts( 'popper-min-js' );

    wp_enqueue_script( 'bootstrap-min-js', get_stylesheet_directory_uri().'/assets/js/bootstrap.min.js' );
    wp_print_scripts( 'bootstrap-min-js' );

    wp_enqueue_script( 'slick-min-js', get_stylesheet_directory_uri().'/assets/js/slick.min.js' );
    wp_print_scripts( 'slick-min-js' );

    wp_enqueue_script( 'wow-min-js', get_stylesheet_directory_uri().'/assets/js/wow.min.js' );
    wp_print_scripts( 'wow-min-js' );

    wp_enqueue_script( 'functions-js', get_stylesheet_directory_uri().'/assets/js/functions.js' );
    wp_localize_script( 'functions-js', 'MyAjax', array( 'ajaxurl' => admin_url( 'admin-ajax.php')));
    wp_print_scripts( 'functions-js' );
}
add_action( 'wp_enqueue_scripts', 'twentytwenty_styles');

function get_site_custom_logo(){
    $logo = get_theme_mod( 'custom_logo' );
    $image = wp_get_attachment_image_src( $logo , 'full' );
    return $image[0];
}

function register_my_menu() {
  register_nav_menu('header-menu',__( 'Header Menu' ));
  //register_nav_menu('footer-right',__( 'Footer Menu' ));
}
add_action( 'init', 'register_my_menu' );


add_action( 'init', 'Unified_INIT' );    

function Unified_INIT() {

    /* ------------------- property enquiry type post S ---------------------- */
    register_post_type( 'unified_enquiry_list',
        array(
            'labels' => array(
                'name' => __( 'Enquiry' ),
                'singular_name' => __( 'Enquiry' )
            ),
            'public' => false,
            'hierarchical' => false,
            'show_ui' => true,
            'supports' => array( 'title'),
            'rewrite' => array( 'with_front' => false ),
        )
    );
    /* ------------------- property enquiry type post E ---------------------- */  

    /* ------------------- custom html block type post S ---------------------- */
    register_post_type( 'unified_html_block',
        array(
            'labels' => array(
                'name' => __( 'HTML Blocks' ),
                'singular_name' => __( 'HTML Blocks' )
            ),
            'public' => false,
            'hierarchical' => false,
            'show_ui' => true,
            'supports' => array( 'title'),
            'rewrite' => array( 'with_front' => false ),
        )
    );
    /* ------------------- custom html block type post E ---------------------- */  


    /* ------------------- Real Estate type post S ---------------------- */
    $labels = array(
    'name'               => __('Real Estate'),
    'singular_name'      => __('Real Estate'),
    'add_new'            => __("New Property"),
    'add_new_item'       => __( 'New Property' ),
    'edit_item'          => __( 'Edit Property' ),
    'new_item'           => __( 'New Property' ),
    'all_items'          => __( 'All Property' ),
    'view_item'          => __( 'View Property' ),
    'search_items'       => __( 'Search Property' ),
    'not_found'          => __( 'No Property found' ),
    'not_found_in_trash' => __( 'No Property found in the Trash' ), 
    'parent_item_colon'  => ’,
    'menu_name'          => 'Real Estate'
  );
  $args = array(
    'labels'        => $labels,
    'public'        => true,
    'show_ui' => true,
    'menu_position' => 5,
    'hierarchical' => true,
    'supports'      => array( 'title','thumbnail'),
    'has_archive'   => true,
  );
  register_post_type( 'property', $args );

  $labels = array(
    'name' => __("Property Type"),
    'singular_name' => __("Property Type"),
    'search_items' =>  __( 'Search Property Type' ),
    'all_items' => __( 'All Property Type' ),
    'parent_item' => __( 'Parent Property Type' ),
    'parent_item_colon' => __( 'Parent Property Type:' ),
    'edit_item' => __( 'Edit Property Type' ), 
    'update_item' => __( 'Update Property Type' ),
    'add_new_item' => __( 'Add New Property Type' ),
    'new_item_name' => __( 'New Property Type Name' ),
    'menu_name' => __( 'Property Type' ),
  ); 
  register_taxonomy(
    'property_type',  // The name of the taxonomy. Name should be in slug form (must not contain capital letters or spaces).
    'property',             // post type name
    array(
        'hierarchical' => true,
        'labels' => $labels, // display name
        'query_var' => true,
        'show_admin_column' => true,
        'show_ui' => true,
        'rewrite' => array(
        	'slug' => 'property-type',
            'with_front' => true  // Don't display the category base before
        )
    )
  );
    /* ------------------- Real Estate type post E ---------------------- */    

}



/*function my_acf_google_map_api( $api ){
  
  $api['key'] = 'AIzaSyBIVqGeDqfd0HdGqQAb9Olnw5pZITz_9i0';
  
  return $api;
  
}*/

//add_filter('acf/fields/google_map/api', 'my_acf_google_map_api');

/* ------------------------------ Get HTML Blocks for pages S --------------------------- */
function news_letter_form(){
	$content = get_field( "content", 276 );
	$form_shortcode = get_field( "form_shortcode", 276 );
	return '<section class="newslatter-section">
	    <div class="container">
	       
	        <div class="newslatter-content">
	             <div class="newslatter-heading-wrap text-center mb-4">
	                '.$content.'
	            </div>
	            '.do_shortcode($form_shortcode).'
	        </div>
	    </div>
	</section>';
}
function common_footer(){
    $background_image = get_field( "background_image", 156 );
    $heading = get_field( "heading", 156 );
    $after_heading = get_field( "after_heading", 156 );
    if(!empty($after_heading)){
        $after_heading = '<p class="m-0 sub-heading w-100 text-center">'.$after_heading.'</p>';
    }
    $section_phone_number = get_field( "section_phone_number", 156 );

    if(is_front_page() || get_the_ID() == 410){
    	$common_footer = '<style type="text/css">
       .contact-section{
          background: rgb(135,10,137);
          background: url('.$background_image.'), -moz-linear-gradient(left, rgba(135,10,137,1) 34%, rgba(0,92,152,1) 130%);
          background: url('.$background_image.'), -webkit-linear-gradient(left, rgba(135,10,137,1) 34%,rgba(0,92,152,1) 130%);
          background: url('.$background_image.'), linear-gradient(to right, rgba(135,10,137,1) 34%,rgba(0,92,152,1) 130%);
       }
       </style>';
       $button_class = 'btn btn-light';
       $phone_icon = '<img src="'.get_stylesheet_directory_uri().'/assets/img/cta-call.png" class="mr-2">';
    }else{
    	$common_footer = '';
    	$button_class = 'btn btn-primary';
    	$phone_icon = '<img src="'.get_stylesheet_directory_uri().'/assets/img/cta-call-black.png" class="mr-2">';
    }
    $common_footer .= '<section class="contact-section wow bounceInUp">
       <div class="container">
          <div class="contact-content">
             <h2 class="mb-2 mb-md-0 text-center">Talk to us About Your Property Need</h2>
             '.$after_heading.'
             <div class="phone-number d-flex flex-wrap align-items-center justify-content-center w-100 mt-4 mb-4">
                <h4 class="text-center w-100 ">'.$section_phone_number["heading"].'</h4>
                '.$phone_icon.'
                <h3 class="m-0">'.$section_phone_number["number"].'</h3>
             </div>
             <div class="contact-cta-wrap">
                <a href="tel:'.$section_phone_number["number"].'" class="'.$button_class.'">'.$section_phone_number["button_text"].'</a>
             </div>
          </div>
       </div>
    </section>';

    return $common_footer;
}

/* ------------------------------ Get HTML Blocks for pages E --------------------------- */

/* ---------- all property type get S ----------- */
function get_all_property_type(){
  global $wpdb;
  $result = $wpdb->get_results("SELECT * FROM `".$wpdb->prefix."terms` WHERE `term_id` IN(SELECT `term_id` FROM `".$wpdb->prefix."term_taxonomy` WHERE `taxonomy` LIKE 'property_type')");
  $temp = array();
  foreach ($result as $key => $value) {
    $url = get_site_url().'/property-type/'.$value->slug;
    $temp[$value->slug] = array("name"=>$value->name, "url"=> $url);
  }

  return $temp;
}
/* ---------- all property type get E ----------- */




/* ----------- property enquiry S ------------------- */
function disable_new_posts() {
    // Hide sidebar link
    global $submenu;
    unset($submenu['edit.php?post_type=unified_enquiry_list'][10]);

    // Hide link on listing page
    if (isset($_GET['post_type']) && $_GET['post_type'] == 'unified_enquiry_list') {
        echo '<style type="text/css">
        #favorite-actions, .add-new-h2, .tablenav, .page-title-action { display:none; }
        </style>';
    }
}
add_action('admin_menu', 'disable_new_posts');


add_action( 'add_meta_boxes', 'cd_meta_box_add' );
function cd_meta_box_add()
{
  add_meta_box( 'enquiry_property', 'View Property', 'view_property', 'unified_enquiry_list', 'side', 'default' );
  add_meta_box( 'enquiry_inquisitor', 'Inquisitor Details', 'inquisitor_details', 'unified_enquiry_list', 'normal', 'high' );
  add_meta_box( 'enquiry_message', 'Inquisitor Message', 'inquisitor_message', 'unified_enquiry_list', 'normal', 'high' );
}

function inquisitor_details($post){
	$name = (get_post_meta($post->ID , 'inquisitor_name'))[0];
	$email = (get_post_meta($post->ID , 'inquisitor_email'))[0];
	$phone = (get_post_meta($post->ID , 'inquisitor_phone'))[0];
?>
<style type="text/css">
	.page-title-action{
		display: none;
	}
</style>
	<table style="width: 100%;">
	  <tr>
	    <td>Name</td>
	    <td><?php echo $name; ?></td>
	  </tr>
	  <tr>
	    <td>Email</td>
	    <td><?php echo $email; ?></td>
	  </tr>
	  <tr>
	    <td>Phone Number</td>
	    <td><?php echo $phone; ?></td>
	  </tr>
	</table>

<?php
}


function inquisitor_message($post){
	$message = (get_post_meta($post->ID , 'inquisitor_message'))[0];
?>
	<p><?php echo $message; ?></p>
<?php
}

function view_property($post){
	$property_url = get_permalink((get_post_meta($post->ID , 'post_id'))[0]);
?>
<style type="text/css">
  .button_css {
    background: #870a89;
    color: #fff;
    border-color: #870a89;
    position: relative;
    padding: 8px 50px;
    border-radius: 6px;
    font-weight: 600;
    text-decoration: none;
  }
  .button_css:hover{
    background-color: #cd2653;
    color: #ffffff;
  }
</style>
<center style="width: 100%;padding: 24px 0;"><a href="<?php echo $property_url; ?>" target="_blank" class="button_css">View Property</a></center>
<?php
}


function enquiry_mail_action(){
  $form_data = array();
  foreach ($_POST["data"] as $key => $value) {
    $form_data[$value["name"]] = $value["value"];
  }
  

  $subject = $form_data["name"]." (".get_the_title($form_data["post_id"]).")";

  $property_url = get_permalink($form_data["post_id"]);
  
  $body = '
<table style="width: 100%;">
  <tr>
    <td>Name</td>
    <td>'.$form_data["name"].'</td>
  </tr>
  <tr>
    <td>Email</td>
    <td>'.$form_data["email"].'</td>
  </tr>
  <tr>
    <td>Phone Number</td>
    <td>'.$form_data["phone"].'</td>
  </tr>
</table>
<p style="width: 100%; padding: 5px;">'.$form_data["message"].'</p>
<center style="width: 50%;padding: 24px 0;"><a href="'.$property_url.'" target="_blank" style="background: #870a89;color: #fff;border-color: #870a89;position: relative;padding: 8px 50px;border-radius: 6px;font-weight: 600;text-decoration: none;">View Property</a></center>';

  $user = get_user_by( 'ID', '1' );

  $headers = array('Content-Type: text/html; charset=UTF-8');

  //if(wp_mail( $user->user_email, $subject, $body, $headers )){
  if(wp_mail( 'rishabh.chapter247@gmail.com', $subject, $body, $headers )){
    $args = array(
        'post_title'    => $subject,
        'post_type'     => 'unified_enquiry_list',
        'post_status'   => 'publish',
        'post_author'   => 1
      );
    $new_enquiry = wp_insert_post( $args );
    add_post_meta($new_enquiry,"inquisitor_name", $form_data["name"]);
    add_post_meta($new_enquiry,"inquisitor_email", $form_data["email"]);
    add_post_meta($new_enquiry,"inquisitor_phone", $form_data["phone"]);
    add_post_meta($new_enquiry,"inquisitor_message", $form_data["message"]);
    add_post_meta($new_enquiry,"post_id", $form_data["post_id"]);
  }else{
    return false;
  }
}
add_action('wp_ajax_enquiry_mail_action', 'enquiry_mail_action');
add_action('wp_ajax_nopriv_enquiry_mail_action', 'enquiry_mail_action');


/* ----------- property enquiry E ------------------- */

/* ----------- get zip code by lat long S ------------------- */

function get_zip_by_lat_long(){
	$lat = $_POST["lat"];
	$long = $_POST["long"];

	$api_key = 'AIzaSyDHhtYajy6NDTs8spwtFFy9JhtaK1p0fSk';

	if(!empty($lat) && !empty($long)){
		$getZip = file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?latlng=".$lat.",".$long."&key=".$api_key."");
		$outputZip = json_decode($getZip);
		if(!empty($outputZip)){ 
			$addressData = $outputZip->results[0]->address_components;
			foreach($addressData as $addr){
				if($addr->types[0] == 'postal_code'){
					//Return the zipcode   
					echo json_encode(array("status" => true , "zip" => $addr->long_name));
	        		die();
				}          
			}        
			echo json_encode(array("status" => false));
			die(); 
		}else{
			echo json_encode(array("status" => false));
			die(); 
		}
	}else{
		echo json_encode(array("status" => false));
		die(); 
	}
}
add_action('wp_ajax_get_zip_by_lat_long', 'get_zip_by_lat_long');
add_action('wp_ajax_nopriv_get_zip_by_lat_long', 'get_zip_by_lat_long');

/* ----------- get zip code by lat long E ------------------- */

