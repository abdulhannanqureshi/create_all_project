<?php

/*
 * Template Name: Faq Page
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
	<?php if($add_common_footer){echo common_footer();} ?>
</div>

<script type="text/javascript">

new WOW().init();

</script>

<?php get_footer(); ?>