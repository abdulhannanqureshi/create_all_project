<?php

/*
 * Template Name: Property Management Page
 * description: >-
  Page template without sidebar
 */
 
?>

<?php get_header(); ?>

<?php
$banner_section = get_field( "banner_section", get_the_ID() );
$welcome_section = get_field( "section_second", get_the_ID() );
$prop_manag_section = get_field( "property_management", get_the_ID() );
$add_common_footer = get_field( "add_common_footer", get_the_ID() );
?>

<div class="inner-page-wrap">
	<section class="inner-banner" style="background-image: url(<?php echo $banner_section['banner_image'];?>);">
		<div class="banner-content wow bounceInUp">
			<h1 class="text-center m-0"><?php echo $banner_section['banner_heading'];?></h1>
		</div>
	</section>
	<?php if(!empty($welcome_section['heading']) && !empty($welcome_section['content'])){ ?>
	<section class="about-section text-center  wow bounceInUp">
		<div class="container">
			<h2><?php echo $welcome_section['heading']; ?></h2>
			<?php echo $welcome_section['content']; ?>
		</div>
	</section>
	<?php } ?>
    <section class="inhouse-maintenance-section wow bounceInUp">
		<div class="container">
			<h2 class="text-center m-0"><?php echo $prop_manag_section['heading']; ?></h2>
			<?php if(!empty($prop_manag_section['sub_title'])){ ?>
			<div class="small-title text-center"  style="color: #6d7c90;">
				<?php echo $prop_manag_section['sub_title']; ?></div>
			<?php } ?>
			<div class="inhouse-grid-wrap mt-5">
				<div class="row">
					<div class="col-md-8 col-lg-7">
						<?php
							$left_1 = $prop_manag_section['left_first_section'];
							$left_2 = $prop_manag_section['left_second_section'];
							$left_3 = $prop_manag_section['left_third_section'];
							$right_1 = $prop_manag_section['right_first_section'];
							$right_2 = $prop_manag_section['right_second_section'];
						?>
						<div class="maintenance-tile-one">
							<div class="maintenance-img">
								<img src="<?php echo $left_1['background_image']?>">
							</div>
							<a href="<?php if(!empty($left_1['url'])){echo $left_1['url'];}else{echo 'javascript:void(0);';}?>" class="maintenance-tile-content">
						       <?php
						       if(!empty($left_1['heading'])){echo '<h4>'.$left_1['heading'].'</h4>';};
						       ?>
    						</a>    
						</div>
						<div class="row">
							<div class="col-md-6">
								<div class="maintenance-tile-second h-220">
									<div class="maintenance-img">
									    <img src="<?php echo $left_2['background_image']?>">
									</div>
								    <a href="<?php if(!empty($left_2['url'])){echo $left_2['url'];}else{echo 'javascript:void(0);';}?>" class="maintenance-tile-content">
						               <?php
								       if(!empty($left_2['heading'])){echo '<h4>'.$left_2['heading'].'</h4>';};
								       ?>
    						        </a>  
								</div>
							</div>
							<div class="col-md-6">
								<div class="maintenance-tile-second h-220">
									<div class="maintenance-img">
									    <img src="<?php echo $right_1['background_image']?>">
									</div>
								    <a href="<?php if(!empty( $right_1['url'])){echo $right_1['url'];}else{echo 'javascript:void(0);';}?>" class="maintenance-tile-content">
						               <?php
								       if(!empty( $right_1['heading'])){echo '<h4>'. $right_1['heading'].'</h4>';};
								       ?>
    						        </a>  
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4 col-lg-5">
						<div class="maintenance-tile-one">
							<div class="maintenance-img">
								<img src="<?php echo $left_3['background_image']?>">
							</div>
							<a href="<?php if(!empty($left_3['url'])){echo $left_3['url'];}else{echo 'javascript:void(0);';}?>" class="maintenance-tile-content">
						       <?php
						       if(!empty($left_3['heading'])){echo '<h4>'.$left_3['heading'].'</h4>';};
						       ?>
    						</a>    
						</div>
						<div class="maintenance-tile-one h-220 mb-0">
							<div class="maintenance-img">
								<img src="<?php echo $right_2['background_image']?>">
							</div>
							<a href="<?php if(!empty($right_2['url'])){echo $right_2['url'];}else{echo 'javascript:void(0);';}?>" class="maintenance-tile-content">
						       <?php
						       if(!empty($right_2['heading'])){echo '<h4>'.$right_2['heading'].'</h4>';};
						       ?>
    						</a>    
						</div>
					</div>
				</div>
			</div>
		</div>	
	</section>
	<?php if($add_common_footer){echo common_footer();} ?>
</div>

<script type="text/javascript">

new WOW().init();

</script>

<?php get_footer(); ?>