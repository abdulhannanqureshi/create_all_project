<?php

/*
 * Template Name: Home Page
 * description: >-
  Page template without sidebar
 */
 
?>

<?php get_header(); ?>

<?php

$slider_section = get_field( "slider_section", get_the_ID() );
$section_after_slider = get_field( "section_after_slider", get_the_ID() );
$section_counter = get_field( "section_counter", get_the_ID() );
$slider_section_our_services = get_field( "slider_section_our_services", get_the_ID() );
$add_common_footer = get_field( "add_common_footer", get_the_ID() );
$section_in_house_maintenance = get_field( "section_in_house_maintenance", get_the_ID() );



?>

<section class="home-slider-wrap">
<?php foreach ($slider_section as $key => $slide) { ?>
   <div  class="home-banner">
      <div class="slide_cont" style="background-image: url(<?php echo $slide['image_url']; ?>);">
         <div class="banner-content wow bounceInUp">
            <?php if(!empty($slide["heading_small"])){echo '<h4 class="text-center m-0">'.$slide["heading_small"].'</h4>';} ?>
            <?php if(!empty($slide["heading_big"])){echo '<h1 class="text-center m-0">'.$slide["heading_big"].'</h1>';} ?>
            
            <?php if(!empty($slide["buttons"])){ ?>
            <div class="banner-btn-wrap mt-4">
               <?php
               for($i=0; $i<count($slide["buttons"]); $i++){
                  $slide_buttons = $slide["buttons"][$i];
                  $mr_classes = 'mr-0 mr-md-3 mb-4 mb-md-0';
                  if($i >= count($slide["buttons"]))
                     $mr_classes = '';
                  echo '<a href="'.$slide_buttons["url"].'" class="btn btn-outline-primary '.$mr_classes.'">'.$slide_buttons["text"].'</a>';
               }
               ?>
            </div>
            <?php } ?>
         </div>
         <div class="banner-down-arrow text-center">
            <a href="#about_section" >
            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/down-arrow.png">
            </a>
         </div>
      </div>
   </div>
<?php } ?>
</section>
<section class="about-section text-center  wow bounceInUp" id="about_section">
   <div class="container">
      <?php echo $section_after_slider['content']; ?>
      <?php if($section_after_slider['add_button']){echo '<a href="'.$section_after_slider["button"]["url"].'"  class="btn btn-primary">'.$section_after_slider["button"]["text"].'</a>';} ?>	
   </div>
</section>
<section class="counter-section">
   <div class="container-fluid">
      <div class="row">
      <?php foreach ($section_counter as $key => $counter) { ?>
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
      <h2 class="text-center m-0">Our Services</h2>
      <div class="service-slider-wrap text-center">
      <?php
      foreach ($slider_section_our_services as $key => $slide) {
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

         speed: 200,

         slidesToShow: 3,

         slidesToScroll: <?php echo count($slider_section_our_services);?>,

         infinite: true,

         lazyLoad: 'ondemand',

         prevArrow: false,
         
         nextArrow: false,

         responsive: [

             {

                 breakpoint: 1024,

                 settings: {

                 slidesToShow: 3,

                     slidesToScroll: 3,

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



		 $('.home-slider-wrap').slick({

         dots: false,

          prevArrow: '<span class="left"><i class="fas fa-chevron-left"></i></span>',

         nextArrow: '<span class="right"><i class="fas fa-chevron-right"></i></span>',

         speed: 300,

         slidesToShow: 1,

         slidesToScroll: 1,

         infinite: true,

         lazyLoad: 'ondemand',

        autoplay: true,

        autoplaySpeed: 5000,

      

     });

     new WOW().init();

      $("select option:selected").css('backgroundColor');







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

jQuery('a[href^="#about_section"]').on('click', function(event) {



    var target = $(this.getAttribute('href'));



    if( target.length ) {

        event.preventDefault();

        jQuery('html, body').stop().animate({

            scrollTop: target.offset().top

        }, 1000);

    }



});

</script>

<script type="text/javascript">

   new WOW().init();

</script>
<?php get_footer(); ?>
