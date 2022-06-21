<?php

$actual_url = explode("?", (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]");
$query_string_val = array();
foreach ($_GET as $name => $value) {
  if($name != 'mes-unit' && $name != 'currency-unit')
    array_push($query_string_val, $name."=".$value);
}
$query_string_val = implode("&", $query_string_val);

/* ---------------- currency unit S ------------------------ */

$currency_unit_array = get_currency_unit_list();

$base_currency_unit = get_base_currency_unit();

unset($currency_unit_array[$base_currency_unit]);

$current_currency_unit = current_currency_unit();

/* ---------------- currency unit E ------------------------ */



/* ---------------- measurement unit S ------------------------ */

$mess_unit_array = get_measurement_unit_list();

$current_mes_unit = current_measurement_unit();

/* ---------------- measurement unit E ------------------------ */

?>

<nav class="navbar navbar-expand-lg navbar-light align-items-start">

  <a class="navbar-brand" href="<?php echo get_site_url(); ?>">

  	<img src="<?php echo get_site_custom_logo(); ?>">

  </a>

  <!--<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">-->

  <!--  <span class="navbar-toggler-icon"></span>-->

  <!--</button>-->

  <!--<div class="collapse navbar-collapse" id="navbarText">-->

    <ul class="navbar-nav ml-auto">

      <li class="nav-item active">

        <a class="nav-link"href="javascript:void(0);">

        	<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/call-icon.png">

        </a>

      </li>

      <li class="nav-item">

        <a href="javascript:void(0);" data-toggle="modal" data-target="#searchModal">

            <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/search-icon.png">

        </a>

      </li>

      <li class="nav-item currency-select">
        <form id="currency_unit_converter" action="<?php echo $actual_url[0];?>">
          <input type="hidden" name="query_string" value="<?php echo $query_string_val;?>">
          <select class="form-control" name="currency-unit">
            <?php

            $selected_currency = '';
            if($current_currency_unit == $base_currency_unit)
              $selected_currency = 'selected';

            echo '<option value="'.$base_currency_unit.'" '.$selected_currency.'>'.$base_currency_unit.'</option>';
            foreach ($currency_unit_array as $key => $value) {
              $selected_currency = '';
              if($current_currency_unit == $value)
                $selected_currency = 'selected';
              echo '<option value="'.$value.'" '.$selected_currency.'>'.$value.'</option>';
            }
            ?>
          </select>
        </form>

      </li>

      <li class="nav-item currency-select">
        <form id="measurement_unit_converter" action="<?php echo $actual_url[0];?>">
          <input type="hidden" name="query_string" value="<?php echo $query_string_val;?>">
          <select class="form-control" name="mes-unit">
            <?php
            foreach ($mess_unit_array as $name => $value) {
              $selected_mes = '';
              if($current_mes_unit == $value)
                $selected_mes = 'selected';
              echo '<option value="'.$value.'" '.$selected_mes.'>'.$name.'</option>';
            }
            ?>
          </select>
        </form>
      </li>

      <li class="nav-item">

        <a class="nav-link" href="javascript:void(0);" onclick="openNav()">

        	<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/menu-icon.png">

        </a>

      </li>

    </ul>

  <!--</div>-->

</nav>

<div id="slide-menu" class="sidenav">

  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()"><img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/close.png"></a>
  <ul class="custom-header-menu-container">
  <?php wp_nav_menu(array('container'  => '','items_wrap' => '%3$s','theme_location' => 'header-menu',)); ?>
  </ul>
</div>