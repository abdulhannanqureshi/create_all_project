<?php
//Single Property View
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
// measurement unit will change by drop down -----------S-----------.
$mes_unit = current_measurement_unit();
$total_area = convert_measurement(get_field( "total_area", get_the_ID() ));
$property_dimension = get_field( "dimension", get_the_ID() );
$property_length = convert_measurement($property_dimension["length"]);
$property_width = convert_measurement($property_dimension["width"]);
//-------------E------------


// currency converter --------S-----------
$property_price = convert_currency(get_field( "price", get_the_ID() ));
$currency_unit = current_currency_unit();
// ---------------E------------------

$property_name = get_the_title(get_the_ID());
$property_image_full = '';
$property_imge_thumb = '';
foreach (get_field( "image_gallery", get_the_ID() ) as $key => $image_url) {
	$property_image_full .= '<div class="property-detail-img"><img src="'.$image_url.'"></div>';
	$property_imge_thumb .= '<div class="property-thumb-img"><img src="'.$image_url.'"></div>';
}


$property_area = $total_area.' Sq '.$mes_unit;


if(!empty($property_dimension["length"]) && !empty($property_dimension["width"])){
	$property_area .= ' ('.$property_length.''.$mes_unit.' X '.$property_width.''.$mes_unit.')';
}


$property_address = get_field( "address", get_the_ID() );

if(!empty($property_address["address_line"]))
	$property_name .= ' ,'.$property_address["address_line"];

$property_name .= ' ,'.$property_address["city"];
$property_name .= ' ,'.$property_address["country"];
$property_name .= ' ,('.$property_address["zip_code"].')';


?>

<div class="inner-page-wrap property-detail-page">
        <section class="inner-banner">

    		<div class="banner-content wow bounceInUp">

    			<h1 class="text-center m-0">Property Detail</h1>

    		</div>

    	</section>
        
        <section class="property-detail-title">
            <div class="container">
                <div class="d-md-flex align-items-center justify-content-between text-center text-md-left">
                    <div class="property-title-text">
                        <h3><?php echo $property_name; ?></h3>
                        <h5 class="property-price mt-2 mb-0 mt-md-0 text-uppercase"><?php echo $property_price; ?> <?php echo $currency_unit; ?></h5>
                    </div>
                    <div class="property-title-cta mt-4 mt-md-0">
                        <a href="javascript:void(0);" class="btn btn-primary" data-toggle="modal" data-target="#enquiryModal">Enquire Now</a>
                    </div>
                </div>    
            </div>
        </section>
        <section class="property-detailsection">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="property-detailslider">
                            <?php echo $property_image_full; ?>
                        </div>
                        <div class="property-detailthumb">
                            <?php echo $property_imge_thumb; ?>
                        </div>
                    </div>
                    
                    <div class="col-md-6">
                        <div class="d-flex align-items-center justify-content-between">
                            <h4><?php echo $property_name; ?></h4>
                            <div class="dropdown dropup">
	                            <a href="javascript:void(0);" class="share-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	                                <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/share.png" >
	                            </a>
	                            <div class="dropdown-menu socail-wrapper" aria-labelledby="dropdownMenuButton" >
								    <a class="dropdown-item" href="#">
								    	<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon_facebook.png" alt="Facebook">
								    </a>
								    <a class="dropdown-item" href="#">
								    	<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon_instagram.png" alt="Instagram">
								    </a>
								    <a class="dropdown-item" href="#">
								    	<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon_twitter.png" alt="Twitter">
								    </a>
								    <a class="dropdown-item" href="#">
								    	<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/icon_whatsapp.png" alt="whatsUp">
								    </a>
								  </div>
	                        </div>
                        </div>
                        <div class="property-detail-content">
                            <div class="amenity-wrap d-flex align-items-center mt-3 mb-2">
									<div class="amenity d-flex align-items-center">
										<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bed-dark.png"><span><?php echo get_field( "beds", get_the_ID() ); ?>bd</span>
									</div>
									<div class="amenity d-flex align-items-center">
										<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/home-dark.png"><span><?php echo $property_area; ?></span>
									</div>
    							</div>
    							<div class="property-detail-listing">
    							    <ul>
    							        <?php
    							        	foreach (get_field( "property_features", get_the_ID() ) as $key => $feature) {
    							        		echo '<li>'.$feature["feature"].'</li>';
    							        	}
    							        ?>
    							    </ul>
    							   
    							</div>
    							<div class="map-wrap">
    							    <?php echo get_field( "map_location", get_the_ID() ); ?>
    							</div>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
<?php
$terms = get_the_terms( $post->ID, 'property_type' );

$related_args = array(
	'post_type' => 'property',
	'posts_per_page' => 3,
	'orderby' => 'date',
	'order'   => 'DESC',
	'post_status' => 'publish',
	'post__not_in' => array( $post->ID ),
	'tax_query' => array(
        array(
            'taxonomy' => 'property_type',
            'field'    => 'term_id',
            'terms'    => array( $terms[0]->term_taxonomy_id ),
            'operator' => 'IN',
        ),
    ),
);
$related = new WP_Query( $related_args );

if ( $related->have_posts() ) :
?>
    <section class="feature-property-section wow bounceInUp" style="visibility: visible;">
		<div class="container-fluid">
			    <h2 class="text-center mb-5">Similar Properties for Rent</h2>
			  	<div class="top-shape">
			  		<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/net.png">
			  	</div>
			  	<div class="row">
			  	<?php while ( $related->have_posts() ) : $related->the_post(); ?>
			  		<?php

			  		if (has_post_thumbnail( $post->ID ) )
			  			$pro_img_url = (wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' ))[0];
			  		else
			  			$pro_img_url= get_stylesheet_directory_uri().'/assets/img/property-placeholder.png';

			  		$pro_add = get_field( "address", $post->ID );

			  		// price will convert
			  		$pro_price = convert_currency(get_field( "price", $post->ID ));

			  		// mesurment unit will convert
			  		$pro_area = convert_measurement(get_field( "total_area", $post->ID ));

			  		?>
					<div class="col-md-4">
					    <a href="<?php echo get_permalink($post->ID); ?>">
						    <div class="property-card">
								<div class="property-img">
									<img src="<?php echo $pro_img_url; ?>">
								</div>
				
    							<div class="property-detail">
    								<div class="property-title  align-items-center justify-content-between">
    									<h5 class="m-0"><?php the_title(); ?></h5>
    									
    								</div>
    								<p class="m-0"><?php echo $pro_add["city"]; ?>, <?php echo $pro_add["country"]; ?></p>
    								<div class="amenity-wrap d-flex align-items-center mt-2 mb-2">
    									<div class="amenity d-flex align-items-center">
    										<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/bed.png"><span><?php echo get_field( "beds", $post->ID ); ?>bd</span>
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
				<?php endwhile; ?>
				</div>
				<div class="bottom-shape">
			  		<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/net.png">
			  	</div>
				<div class="feature-property-btn text-center mt-5 mb-4">
					<a href="<?php echo get_site_url().'/property-type/'.$terms[0]->slug; ?>" class="btn btn-primary">View All Properties</a>
				</div>
		</div>
	</section>
<?php

endif;
wp_reset_query();

?>
	
    <?php echo news_letter_form(); ?>
    <?php echo common_footer(); ?>

	</div>

 <script type="text/javascript">
	$(document).ready(function() {
	    new WOW().init();
	    $('.property-detailslider').slick({
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,
	        fade: true,
	        asNavFor: '.property-detailthumb'
	    });
	    $('.property-detailthumb').slick({
	        slidesToShow: 3,
	        slidesToScroll: 1,
	        asNavFor: '.property-detailslider',
	        dots: true,
	        arrows: true,
	        prevArrow: '<span class="left"><i class="fas fa-chevron-left"></i></span>',
	        nextArrow: '<span class="right"><i class="fas fa-chevron-right"></i></span>',
	        centerMode: true,
	        focusOnSelect: true,
	        responsive: [{
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

	        ]
	    });
	});
	new WOW().init();
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
 </script>
<?php get_footer(); ?>

<div class="modal fade search-modal-wrap" id="enquiryModal" tabindex="-1" role="dialog" aria-labelledby="enquiryModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            Close    
            <span aria-hidden="true"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/close.png"></span>
            </button>
         </div>
         <div class="modal-body">
			<div class="search-modal-content">
				<form id="enquiry_form">
					<h2 class="text-center title clr-white">Enquire Now</h2>
					<p  class="text-center sub-descrip clr-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<div class="row">
						<div class="col-sm-12">
							<div class="form-group">
								<input type="text" class="form-control required" aria-describedby="name" placeholder="Name" name="name">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<input type="email" class="form-control required" aria-describedby="email" placeholder="Email" name="email">
							</div>
						</div>
						<div class="col-sm-6">
							<div class="form-group">
								<input type="tel" class="form-control numbers_only required" aria-describedby="Phone" placeholder="Phone Number" name="phone" maxlength="12">
							</div>
						</div>
						<div class="col-sm-12">
							<div class="form-group">
								<textarea class="form-control required" rows="3" placeholder="Message" name="message"></textarea>
							</div>
						</div>
					</div>
					<input type="hidden" name="post_id" value="<?php echo get_the_ID(); ?>">
					<button type="submit" class="btn btn-outline-primary w-100 mb-3 mt-4 mt-md-0 search-btn-lg">Submit</button>
				</form>
			</div>
         </div>
		</div>
	</div>
</div>