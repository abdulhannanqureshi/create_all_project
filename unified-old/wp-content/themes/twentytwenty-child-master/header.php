<?php

/**

 * Header file for the Twenty Twenty WordPress default theme.

 *

 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials

 *

 * @package WordPress

 * @subpackage Twenty_Twenty

 * @since 1.0.0

 */



?><!DOCTYPE html>



<html class="no-js" <?php language_attributes(); ?>>



	<head>



		<meta charset="<?php bloginfo( 'charset' ); ?>">

		<meta name="viewport" content="width=device-width, initial-scale=1.0" >

		<link href="https://fonts.googleapis.com/css2?family=Yantramanav:wght@300;400;500;700;900&display=swap" rel="stylesheet">


		<?php wp_head(); ?>



	</head>



	<body <?php body_class(); ?>>




		<?php

		get_template_part( 'templates/header-main' );