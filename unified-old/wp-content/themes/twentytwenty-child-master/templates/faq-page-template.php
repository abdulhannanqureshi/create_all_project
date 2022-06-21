<?php

/*
* Template Name: Faq Page
* description: >-
 Page template without sidebar
*/

?>
<?php get_header(); ?>

<?php
$banner_section = get_field( "banner_section", get_the_ID());
$faq_section = get_field( "faq_section", get_the_ID());
$add_common_footer = get_field( "add_common_footer", get_the_ID() );
?>
<div class="inner-page-wrap">
	<section class="inner-banner" style="background-image: url(<?php echo $banner_section['banner_image'];?>);">
		<div class="banner-content wow bounceInUp">
			<h1 class="text-center m-0"><?php echo $banner_section['heading'];?></h1>
		</div>
	</section>
	<section class="pt-5 wow bounceInUp">
		<div class="container">
			<h2 class="text-center"><?php echo $faq_section['heading']; ?></h2>
			<div class="accordion" id="accordionExample">
				<?php foreach ($faq_section["faqs"] as $key => $value): ?>
					<div class="faq-wrapper">
					    <div id="heading<?php echo $key ?>">
					        <h3 class="small-title collapsed" data-toggle="collapse" data-target="#collapse<?php echo $key ?>" aria-expanded="true" aria-controls="collapse<?php echo $key ?>">
					        	<?php echo $value["heading"] ?>
					        </h3>
					    </div>
					    <div id="collapse<?php echo $key ?>" class="collapse" aria-labelledby="heading1" data-parent="#accordionExample">
					        <div class="inner-faq">
					           <?php echo $value["content"] ?>
					        </div>
					    </div>
					</div>
				<?php endforeach; ?>
	        </div>
		</div>
	</section>
	<?php if($add_common_footer){echo common_footer();} ?>
</div>
<script type="text/javascript">
	new WOW().init();
</script>
<?php get_footer(); ?>