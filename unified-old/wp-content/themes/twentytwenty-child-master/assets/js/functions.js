function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
  	
  	if((lat != '' || lat != null) && (long != '' || long != null)){
  		jQuery.ajax({
			url: MyAjax.ajaxurl,
			type: "POST",
			data: {action: "get_zip_by_lat_long" , lat:lat, long:long},
			dataType: "json",
			success: function(response){
				if(response.status){
					jQuery("#popup-search-form").find('input[name="area"]').val(response.zip);
				}else{
					alert('something went wrong please try again later.');
				}
			}
		});
  	}else{
  		alert('something went wrong please try again later.');
  	}
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      alert("User denied the request for Geolocation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location information is unavailable.");
      break;
    case error.TIMEOUT:
      alert("The request to get user location timed out.");
    case error.UNKNOWN_ERROR:
      alert("An unknown error occurred.");
  }
}

jQuery(document).ready(function(){
/* ------------------- currency and measurement unit converter S ----------------- */	
	jQuery('#measurement_unit_converter select[name="mes-unit"] , #currency_unit_converter select[name="currency-unit"]').change(function(){
		var form_obj = jQuery(this).parents('form');
		var form_action = form_obj.attr("action");
		var query_string = form_obj.find('input[name="query_string"]').val();
		if(query_string == '')
			window.location.href = form_action+'?'+jQuery(this).attr('name')+'='+jQuery(this).val();
		else
			window.location.href = form_action+'?'+query_string+'&'+jQuery(this).attr('name')+'='+jQuery(this).val();

	});
/* ------------------- currency and measurement unit converter E ----------------- */


	jQuery(".property-search").find('select[name="min-price"]').change(function(){
		var _this = jQuery(this);
		jQuery(this).parents('.property-search').find('select[name="max-price"] option').each(function(){
			var option_val = jQuery(this).val();
			
			if(option_val == ''){
				//
			}else if(parseFloat(option_val) <= parseFloat(_this.val())){
				jQuery(this).prop('disabled', true);
				jQuery(this).prop('hidden', true);
			}else{
				jQuery(this).prop('disabled', false);
				jQuery(this).prop('hidden', false);
			}

			if(option_val != '' && jQuery(this).is(':selected') && parseFloat(option_val) <= parseFloat(_this.val())){
				jQuery(this).prop('selected', false);
			}
		});
	});
	jQuery(".property-search").find('select[name="max-price"]').change(function(){
		var _this = jQuery(this);
		jQuery(this).parents('.property-search').find('select[name="min-price"] option').each(function(){
			var option_val = jQuery(this).val();
			if(option_val == ''){
				//
			}else if(parseFloat(option_val) >= parseFloat(_this.val())){
				jQuery(this).prop('disabled', true);
				jQuery(this).prop('hidden', true);
			}else{
				jQuery(this).prop('disabled', false);
				jQuery(this).prop('hidden', false);
			}
			if(option_val != '' && jQuery(this).is(':selected') && parseFloat(option_val) >= parseFloat(_this.val())){
				jQuery(this).prop('selected', false);
			}
		});
	});
	jQuery("#popup-search-form").submit(function(e){
		e.preventDefault();
		var property_type = jQuery(this).find('input[name="property_type"]:checked').val();
		var area = jQuery(this).find('input[name="area"]').val();
		var min_price = jQuery(this).find('select[name="min-price"]').val();
		var max_price = jQuery(this).find('select[name="max-price"]').val();
		var beds = jQuery(this).find('select[name="beds"]').val();

		if(min_price == null)
			min_price = '';
		if(max_price == null)
			max_price = '';
		if(beds == null)
			beds = '';

		window.location.href = property_type+'?'+'area='+area+'&min-price='+min_price+'&max-price='+max_price+'&beds='+beds;
	});

	jQuery("#inline-search-form").find('.inline-submit').click(function(e){
		e.preventDefault();
		var _this = jQuery(this).parents("#inline-search-form");
		var property_type = jQuery(_this).find('select[name="property_type"]').val();
		var area = jQuery(_this).find('input[name="area"]').val();
		var min_price = jQuery(_this).find('select[name="min-price"]').val();
		var max_price = jQuery(_this).find('select[name="max-price"]').val();
		var beds = jQuery(_this).find('select[name="beds"]').val();

		if(min_price == null)
			min_price = '';
		if(max_price == null)
			max_price = '';
		if(beds == null)
			beds = '';

		window.location.href = property_type+'?'+'area='+area+'&min-price='+min_price+'&max-price='+max_price+'&beds='+beds;
	});


	/*--------------(enquiry form) S ----------------*/
	
	jQuery("#enquiry_form").find('input,textarea').focus(function(){
		jQuery(this).parent().find(".error").remove();
	});
	jQuery("#enquiryModal").find("#enquiry_form").submit(function(e){
		e.preventDefault();
		var valid = true;
		jQuery(this).find(".error").remove();

		jQuery(this).find('input,textarea').each(function(){
			var this_val = (jQuery(this).val()).trim();
			if(this_val == ''){
				jQuery(this).parent().append('<span class="error">'+jQuery(this).attr("placeholder")+' required field.</span>');
				valid = false;
			}
		});

		var email = jQuery(this).find('input[name="email"]');

		if(!validEmail((email.val()).trim())){
			valid = false;
			email.parent().append('<span class="error">Please enter valid '+email.attr("placeholder")+'.</span>');
		}
		
		var phone = jQuery(this).find('input[name="phone"]');

		if(((phone.val()).trim()).length < 12 ){
			valid = false;
			phone.parent().append('<span class="error">Please enter valid '+phone.attr("placeholder")+'.</span>');
		}

		if(valid){
			jQuery.ajax({
				url: MyAjax.ajaxurl,
				type: "POST",
				data: {action: "enquiry_mail_action" , data : jQuery(this).serializeArray()},
				dataType: "json",
				success: function(response){
					//
				}
			});
		}
	});
	
	function validEmail(email) {
	    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
	    if (testEmail.test(email))
	    	return true;
	    else
	    	return false;
	}

	jQuery(".numbers_only").keypress(function(evt) { 
	      
		// Only ASCII charactar in that range allowed 
		var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
		
		if((jQuery(this).val()).length > 12){
			return false;
		}else{
			if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
			    return false; 
			else{
			    var phone = jQuery(this).val();
			    
			    if(phone.length == 3){
			        str = phone.substr(0, 3) + '-' + phone.substr(3, 6);
			        jQuery(this).val(str);
			    }
			    if(phone.length == 7){
			        str = phone.substr(0, 11) + '-' + phone.substr(11, 3);
			        jQuery(this).val(str);
			    }
			    
			    return true;
			}
		}
	});

	/*--------------(enquiry form) E ----------------*/
});