<?php

/*
 * Template Name: Buy Page
 * description: >-
  Page template without sidebar
 */
 
?>

<?php get_header(); ?>

<?php
$section1 = get_field( "section_first", get_the_ID() );
$section2 = get_field( "section_second", get_the_ID() );
$section3 = get_field( "section_third", get_the_ID() );
$add_common_footer = get_field( "add_common_footer", get_the_ID() );
?>

<div class="inner-page-wrap">

	<section class="inner-banner" style="background-image: url(<?php echo $section1['banner_image'];?>);">

		<div class="banner-content wow bounceInUp">

			<h1 class="text-center m-0"><?php echo $section1['banner_heading'];?></h1>

		</div>

	</section>

	<?php if(!empty($section2['heading']) && !empty($section2['content'])){ ?>
	<section class="about-section text-center  wow bounceInUp">

		<div class="container">

			<h2><?php echo $section2['heading']; ?></h2>

			<?php echo $section2['content']; ?>

		</div>

	</section>
	<?php } ?>

    <section class="inhouse-maintenance-section wow bounceInUp">

		<div class="container">

			<h2 class="text-center m-0"><?php echo $section3['heading']; ?></h2>
			<?php if(!empty($section3['sub_heading'])){ ?>
			<p class="sub-heading text-center"  style="color: #6d7c90;"><?php echo $section3['sub_heading']; ?></p>
			<?php } ?>

			<div class="inhouse-grid-wrap mt-5">

				<div class="row">

				<div class="col-md-6">
					<?php

					$left_1 = $section3['left_first_section'];
					$left_2 = $section3['left_second_section'];
					$right = $section3['right_section'];

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

						<div class="col-md-12">

							<div class="maintenance-tile-second">

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

				

					</div>

				</div>

				<div class="col-md-6">

					<div class="maintenance-tile-third">

					    <div class="maintenance-img">

						    <img src="<?php echo $right['background_image']?>">

						</div>

						    <a href="<?php if(!empty($right['url'])){echo $left_3['url'];}else{echo 'javascript:void(0);';}?>" class="maintenance-tile-content">
						       <?php
						       if(!empty($right['heading'])){echo '<h4>'.$right['heading'].'</h4>';};
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