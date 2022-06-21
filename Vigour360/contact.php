<?php require_once('./header.php'); ?> 
<article>
	<!--Banner S-->
	<section class="about-banner">
		<!-- Graphic S -->
		<div class="graphic-inner pos-l17-t0">
			<img class="icon-hight-rs-30" src="./assets/img/icon/icon_line_cirlce.png" alt="Icon Graphic">
		</div>
		<div class="graphic-inner pos-r12-t0">
			<img class="icon-hight-rs-30" src="./assets/img/icon/icon_trig_sqr_con.png" alt="Icon Graphic">
		</div>
		<div class="graphic-inner pos-l12-t50">
			<img class="icon-hight-rs-70" src="./assets/img/icon/icon_banner_white_dots.png" alt="Icon Graphic">
		</div>
		<div class="graphic-inner banner-icon">
			<img src="./assets/img/icon/icon_banner_left_con.png" alt="Icon Graphic">
		</div>
		<div class="graphic-inner banner-icon-btm">
			<img src="./assets/img/icon/icon_banner_btm_line.png" alt="Icon Graphic">
		</div>
		<!-- Graphic E -->
		<div class="banner-all-inner anual-banner-wrapper">
			<img src="assets/img/inner-banner/img_banner_contact.jpg" alt="Contact">
		</div>
	</section>
	<!--Banner E-->
	<!--Annual Health S-->
	<section class="section-wrapper annual-health-wrapper graphic-wrapper pb-3">
		<!-- Graphic S -->
		<div class="graphic-inner pos-l-t">
			<img src="./assets/img/icon/icon_bighalf_left_con.png" alt="Icon Graphic">
		</div>
		<div class="graphic-inner pos-r0-b36">
			<img src="./assets/img/icon/icon_tri_center_dots.png" alt="Icon Graphic">
		</div>
		<!-- Graphic E -->
		<div class="container p-lr-55">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 contact-wrapper">
					<div class="mb-4 mb-md-5 text-center">
						<h2 class="title">CONTACT US</h2>
					</div>
					<form id="contactForm" method="post">
						<div class="form-group">
							<label class="custom-label">First & Last Name? <span>*</span></label>
							<input type="text" class="form-control custom-field required" name="first-name" data-rule-required="true" data-msg-required="Please enter first & last name.">
						</div>
						<div class="form-group">
							<label class="custom-label">Mobile Number <span>*</span></label>
							<input type="tel" class="form-control only_numbers custom-field required" name="mobile" maxlength="10" data-rule-required="true" data-rule-number="true" data-msg-required="Please enter mobile number">
						</div>
						<div class="form-group">
							<label class="custom-label">Email ID <span>*</span></label>
							<input type="email" class="form-control custom-field required" name="email" data-rule-required="true" data-msg-required="Please enter email id">
						</div>
						<div class="form-group">
							<label class="custom-label">Business Name</label>
							<input type="text" class="form-control custom-field" name="business-name">
						</div>
						<div class="form-group">
							<label class="custom-label">Business URL</label>
							<input type="text" class="form-control custom-field" name="business-url">
						</div>
						<div class="form-group">
							<label class="custom-label">Message <span>*</span></label>
							<textarea name="message" class="form-control custom-field required" cols="100" rows="7" data-rule-required="true" data-msg-required="Please enter message"></textarea>
						</div>
						<p class="text-center mt-4 mt-md-5">
							<button name="submit" type="submit" class="common-btn">SHOOT!</button>
						</p>
					</form>
				</div>
			</div>
		</div>
	</section>
	<!--Annual Health E-->
</article>

<?php require_once('./footer.php'); ?> 
<script>
	jQuery(document).ready(function(){
		jQuery(".only_numbers").keypress(function (e) {
	     //if the letter is not digit then display error and don't type anything
	     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
	    }
	   });
		jQuery("#contactForm").submit(function(e){
			e.preventDefault();
			var _this = jQuery(this);
			var valid = true;
			_this.find('.error_validate').remove();
			_this.find(".required").each(function(){
				var input_val = (jQuery(this).val()).trim();

				if(input_val == ''){
					valid = false;
					jQuery(this).parent().append('<span class="error_validate common">'+jQuery(this).attr("data-msg-required")+'</span>');
				}
			});
			if((_this.find('input[type="email"]').val()).trim() != '' && isEmail(_this.find('input[type="email"]').val())){
				valid = false;
				_this.parent().append('<span class="error_validate common">Please Enter Valid Email.</span>');
			}

			if(valid){
				jQuery(".loader-wrapper").show();
				jQuery.ajax({
			        url: "contact-form.php",
			        type: "POST",
			        data:  _this.serializeArray(),
			        dataType  : 'json',
			        success: function (response) {
			        	_this.find('.error_validate').remove();
			        	if(response.status){
			        		var this_parent = _this.parents('.contact-wrapper');
			        		this_parent.empty();
			        		this_parent.append('<div id="thank-you" class="thankyou-wrapper"><img src="assets/img/icon_succ.png" alt="Right"><h2 class="title">Thank You!</h2><p class="common-big-text">For getting in touch one of our executive will get in touch with you. </p><p><a href="index.php" class="common-btn mt-3">Back to Home</a></p></div>');
			        		jQuery("#thank-you").show();
			        	}else{
			        		
			        		if(response.key == ''){
			        			_this.prepend('<span class="error_validate common">'+response.message+'</span>');
			        		}else{
			        			_this.find('input[name="'+response.key+'"]').parent().append('<span class="error_validate">'+response.message+'</span>');
			        		}
			        	}
			        	jQuery(".loader-wrapper").hide();
			        }
			    });
			}
		});

		function isEmail(email) {
		  var regex = /^([a-zA-Z0-9_.+-])+\@@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		  return regex.test(email);
		}
	});
</script>