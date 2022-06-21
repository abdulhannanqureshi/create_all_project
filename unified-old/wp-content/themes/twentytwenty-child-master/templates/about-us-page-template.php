<?php

/*
 * Template Name: About Us Page
 * description: >-
  Page template without sidebar
 */
 
?>

<?php get_header(); ?>

<?php
$section1 = get_field( "section_first", get_the_ID() );
$section2 = get_field( "section_second", get_the_ID() );
$section3 = get_field( "section_third", get_the_ID() );
$section4 = get_field( "section_fourth", get_the_ID() );
$add_common_footer = get_field( "add_common_footer", get_the_ID() );
$section_in_house_maintenance = get_field( "section_in_house_maintenance", get_the_ID() );
?>

	<section class="inner-banner" style="background-image: url(<?php echo $section1["banner_image"]; ?>);">
		<div class="banner-content wow bounceInUp">
			<?php
			if(!empty($section1["small_heading"])){
				echo '<h4 class="text-center m-0">'.$section1["small_heading"].'</h4>';
			}
			?>
			<?php
			if(!empty($section1["big_heading"])){
				echo '<h1 class="text-center m-0">'.$section1["big_heading"].'</h1>';
			}
			?>
			
			<div class="banner-btn-wrap mt-4">
				<?php
				for($i=0; $i<count($section1["buttons"]); $i++){
					$button = $section1["buttons"][$i];

					$classes = 'mr-0 mr-md-3 mb-4 mb-md-0';
					if($i == (count($section1["buttons"]) - 1))
						$classes = '';

					$button_url = 'javascript:void(0);';
					if(!empty($button["url"]))
						$button_url = $button["url"];
					
					echo '<a href="'.$button_url.'" class="btn btn-outline-primary '.$classes.'">'.$button['text'].'</a>';
				}
				?>
			</div>

		</div>
	</section>
	<section class="about-section text-center  wow bounceInUp">
		<div class="container">
			<?php echo $section2["content"]; ?>

			<?php if($section2["add_button"]){ ?>
				<a href="<?php if(!empty($section2['button']['url'])){echo $section2['button']['url'];}else{echo 'javascript:void(0)';} ?>"  class="btn btn-primary"><?php echo $section2['button']['text']; ?></a>
			<?php } ?>	
		</div>
	</section>
	<section class="counter-section">
   <div class="container-fluid">
      <div class="row">
      <?php foreach ($section3 as $key => $counter) { ?>
         <div class="col-md-3">
            <div class="count-wrap text-center">
               <div class="count-bg">
                  <h3 class="m-0"><?php echo $counter["counter_number"]; ?></h3>
               </div>
               <p class="m-0"><?php echo $counter["counter_heading"]; ?></p>
            </div>
         </div>
      <?php } ?>
      </div>
   </div>
</section>
<section class="service-section text-center wow bounceInUp">
   <div class="containe-fluid">
	<h2 class="text-center m-0">Why We Are Best</h2>
	<p class="sub-heading">Vivamus sed augue id odio condimentum tempor a ac libero. In eu neque sed odio</p>
      <div class="service-slider-wrap text-center">
      <?php
      foreach ($section4 as $key => $slide) {
         $single_slide = $slide['slide'];
         for($i=0; $i<count($single_slide); $i++){
            $extra_class = '';
            if($i > 0)
               $extra_class = 'text-center';

            echo '<div class="service-card '.$extra_class.'">
            <div class="service-icon">
               <img src="'.$single_slide[$i]["icon_image"].'">
            </div>
            <h4>'.$single_slide[$i]["heading"].'</h4>
            <p>'.$single_slide[$i]["text"].'</p>
         </div>';
         }
      }
      ?>         
      </div>
   </div>
</section>
<section class="feature-property-section wow bounceInUp">
   <div class="container-fluid">
      <h2 class="text-center m-0">Feature Property</h2>
      <div class="tab-listing mb-5 mt-4">
         <div class="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Buy</a>
            <a class="nav-item nav-link justify-content-center" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Rent</a>
         </div>
      </div>
      <div class="tab-content" id="nav-tabContent">
         <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="top-shape">
               <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/net.png">
            </div>
            <div class="row">
               <div class="col-md-4">
                  <a href="javascript:void(0;)">
                     <div class="property-card">
                        <div class="property-img">
                           <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/property-1.jpg">
                        </div>
                        <div class="property-detail">
                           <div class="property-title  align-items-center justify-content-between">
                              <h5 class="m-0">Burj Khalifa</h5>
                           </div>
                           <p class="m-0">Downtown Dubai, Dubai</p>
                           <div class="amenity-wrap d-flex align-items-center mt-2 mb-2">
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bed.png"><span>3bd</span>
                              </div>
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home.png"><span>1200 Sq ft</span>
                              </div>
                           </div>
                           <h5 class="property-price mt-2 mb-0 mt-md-0 text-uppercase">480000 AED</h5>
                        </div>
                     </div>
                  </a>
               </div>
               <div class="col-md-4">
                  <a href="javascript:void(0);">
                     <div class="property-card">
                        <div class="property-img">
                           <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/property-2.jpg">
                        </div>
                        <div class="property-detail">
                           <div class="property-title  align-items-center justify-content-between">
                              <h5 class="m-0">Villa Firenze</h5>
                           </div>
                           <p class="m-0">Sharjah, Dubai</p>
                           <div class="amenity-wrap d-flex align-items-center mt-2 mb-2">
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bed.png"><span>3bd</span>
                              </div>
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home.png"><span>1200 Sq ft</span>
                              </div>
                           </div>
                           <h5 class="property-price mt-2 mb-0 mt-md-0 text-uppercase">50000 AED</h5>
                        </div>
                     </div>
                  </a>
               </div>
               <div class="col-md-4">
                  <a href="javascript:void(0);">
                     <div class="property-card">
                        <div class="property-img">
                           <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/property-3.jpg">
                        </div>
                        <div class="property-detail">
                           <div class="property-title  align-items-center justify-content-between">
                              <h5 class="m-0">Villa Firenze</h5>
                           </div>
                           <p class="m-0">Downtown, Dubai</p>
                           <div class="amenity-wrap d-flex align-items-center mt-2 mb-2">
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bed.png"><span>3bd</span>
                              </div>
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home.png"><span>1200 Sq ft</span>
                              </div>
                           </div>
                           <h5 class="property-price mt-2 mb-0 mt-md-0 text-uppercase">50000 AED</h5>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="bottom-shape">
               <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/net.png">
            </div>
            <div class="feature-property-btn text-center mt-5 mb-4">
               <a href="javascript:void(0);"  class="btn btn-primary">View All</a>
            </div>
         </div>
         <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div class="top-shape">
               <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/net.png">
            </div>
            <div class="row">
               <div class="col-md-4">
                  <a href="javascript:void(0;)">
                     <div class="property-card">
                        <div class="property-img">
                           <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/property-1.jpg">
                        </div>
                        <div class="property-detail">
                           <div class="property-title  align-items-center justify-content-between">
                              <h5 class="m-0">Burj Khalifa</h5>
                           </div>
                           <p class="m-0">Downtown Dubai, Dubai</p>
                           <div class="amenity-wrap d-flex align-items-center mt-2 mb-2">
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bed.png"><span>3bd</span>
                              </div>
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home.png"><span>1200 Sq ft</span>
                              </div>
                           </div>
                           <h5 class="property-price mt-2 mb-0 mt-md-0 text-uppercase">480000 AED</h5>
                        </div>
                     </div>
                  </a>
               </div>
               <div class="col-md-4">
                  <a href="javascript:void(0);">
                     <div class="property-card">
                        <div class="property-img">
                           <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/property-2.jpg">
                        </div>
                        <div class="property-detail">
                           <div class="property-title  align-items-center justify-content-between">
                              <h5 class="m-0">Villa Firenze</h5>
                           </div>
                           <p class="m-0">Sharjah, Dubai</p>
                           <div class="amenity-wrap d-flex align-items-center mt-2 mb-2">
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bed.png"><span>3bd</span>
                              </div>
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home.png"><span>1200 Sq ft</span>
                              </div>
                           </div>
                           <h5 class="property-price mt-2 mb-0 mt-md-0 text-uppercase">50000 AED</h5>
                        </div>
                     </div>
                  </a>
               </div>
               <div class="col-md-4">
                  <a href="javascript:void(0);">
                     <div class="property-card">
                        <div class="property-img">
                           <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/property-3.jpg">
                        </div>
                        <div class="property-detail">
                           <div class="property-title  align-items-center justify-content-between">
                              <h5 class="m-0">Villa Firenze</h5>
                           </div>
                           <p class="m-0">Downtown, Dubai</p>
                           <div class="amenity-wrap d-flex align-items-center mt-2 mb-2">
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bed.png"><span>3bd</span>
                              </div>
                              <div class="amenity d-flex align-items-center">
                                 <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home.png"><span>1200 Sq ft</span>
                              </div>
                           </div>
                           <h5 class="property-price mt-2 mb-0 mt-md-0 text-uppercase">50000 AED</h5>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
            <div class="bottom-shape">
               <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/net.png">
            </div>
            <div class="feature-property-btn text-center mt-5 mb-4">
               <a href="javascript:void(0);"  class="btn btn-primary">View All</a>
            </div>
         </div>
      </div>
   </div>
</section>
<?php if($add_common_footer){echo common_footer();} ?>
<section class="inhouse-maintenance-section wow bounceInUp">
   <div class="container">
      <h2 class="text-center m-0"><?php echo $section_in_house_maintenance["heading"]; ?></h2>
      <p class="sub-heading text-center"><?php echo $section_in_house_maintenance["sub_heading"]; ?></p>
      <div class="inhouse-grid-wrap mt-5">
         <div class="row">
            <div class="col-md-6">
               <div class="maintenance-tile-one">
                  <div class="maintenance-img">
                     <img src="<?php echo $section_in_house_maintenance['left_first_section']['background_image']; ?>">
                  </div>
                  <a href="<?php echo $section_in_house_maintenance['left_first_section']['url']; ?>" class="maintenance-tile-content">
                     <h4><?php echo $section_in_house_maintenance['left_first_section']['heading']; ?></h4>
                     <span class="btn btn-outline-primary" href="/new-in-house-maintenance"><?php echo $section_in_house_maintenance['left_first_section']['button_text']; ?></span>
                  </a>
               </div>
               <div class="row">
                  <div class="col-md-6">
                     <div class="maintenance-tile-second">
                        <div class="maintenance-img">
                           <img src="<?php echo $section_in_house_maintenance['left_second_section_']['background_image']; ?>">
                        </div>
                        <a href="<?php echo $section_in_house_maintenance['left_second_section_']['url']; ?>" class="maintenance-tile-content">
                           <h4><?php echo $section_in_house_maintenance['left_second_section_']['heading']; ?></h4>
                        </a>
                     </div>
                  </div>
                  <div class="col-md-6">
                     <div class="maintenance-tile-second">
                        <div class="maintenance-img">
                           <img src="<?php echo $section_in_house_maintenance['left_third_section']['background_image']; ?>">
                        </div>
                        <a href="<?php echo $section_in_house_maintenance['left_third_section']['url']; ?>" class="maintenance-tile-content">
                           <h4><?php echo $section_in_house_maintenance['left_third_section']['heading']; ?></h4>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-md-6">
               <div class="maintenance-tile-third">
                  <div class="maintenance-img">
                     <img src="<?php echo $section_in_house_maintenance['right_section']['background_image']; ?>">
                  </div>
                  <a href="<?php echo $section_in_house_maintenance['right_section']['url']; ?>" class="maintenance-tile-content">
                     <h4><?php echo $section_in_house_maintenance['right_section']['heading']; ?></h4>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<script type="text/javascript">
	$(document).ready(function(){
		 $('.service-slider-wrap').slick({
         dots: true,
         speed: 800,
         slidesToShow: 3,
         slidesToScroll: <?php echo count($section4);?>,
         infinite: true,
         lazyLoad: 'ondemand',
         arrow:false,
         responsive: [
             {
                 breakpoint: 1024,
                 settings: {
                 slidesToShow: 3,
                     slidesToScroll: 1,
                     infinite: true,
                     dots: false
                 }
             },
                 {
                 breakpoint: 991,
                  settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,                      
                 }
             },
             {
                 breakpoint: 600,
                 settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,                      
                 }
             },
             {
                 breakpoint: 480,
                 settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 
                }
             }
         ]
     });
     new WOW().init();

	});
</script>
<script>
jQuery(window).scroll(startCounter);
function startCounter() {
    var hT = jQuery('.count-bg').offset().top,
        hH = jQuery('.count-bg').outerHeight(),
        wH = jQuery(window).height();
    if (jQuery(window).scrollTop() > hT+hH-wH) {
        jQuery(window).off("scroll", startCounter);
        jQuery('.count-bg').each(function () {
            var $this = jQuery(this);
            jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.ceil(this.Counter) + '');
                }
            });
        });
    }
}
</script>
<script type="text/javascript">

new WOW().init();

</script>

<?php get_footer(); ?>