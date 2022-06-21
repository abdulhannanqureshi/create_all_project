	<!--Footer S -->
	<footer>
    	<div class="footer-wrapper graphic-wrapper">
            <!-- Page Scroll S -->
            <div class="page-top">
                <button><img src="./assets/img/icon_arrow.png" alt="Arrow"></button>
            </div>
            <!-- Page Scroll E -->
            <!-- Graphic S -->
                <div class="graphic-inner pos-r0-b42">
                    <img src="./assets/img/icon/icon_half_sqr.png" alt="Icon Graphic">
                </div>
            <!-- Graphic E -->
            <!--Footer Wave Image S -->
        	<p class="footer-top-wave">
                <img  class="home-foot" src="./assets/img/img_foot_wave.png" alt="Wave">
                <img class="about-foot" src="./assets/img/img_about_foot_wave.png" alt="Wave">
                <img class="annual-foot" src="./assets/img/img_annual_foot.png" alt="Wave">
                <img class="blog-foot" src="./assets/img/img_foot_wave_blog.png" alt="Wave">
                <img class="fitness-foot" src="./assets/img/img_foot_wave_fitnes.png" alt="Wave">
                <img class="management-foot" src="./assets/img/img_foot_wave_manage.png" alt="Wave">
                <img class="psychological-foot" src="./assets/img/img_foot_wave_psychologi.png" alt="Wave">
                <img class="contact-foot" src="./assets/img/img_foot_wave_contact.png" alt="Wave">
                <img class="medical-foot" src="./assets/img/img_foot_wave_medical.png" alt="Wave">
                <img class="seminars-foot" src="./assets/img/img_foot_wave_seminars.png" alt="Wave">
                <img class="sports-foot" src="./assets/img/img_foot_wave_sports.png" alt="Wave">
            </p>
            <!--Footer Wave Image E -->
			<div class="container">
        		<div class="row">
        			<div class="col-md-4 col-lg-4 mb-3 mb-lg-0">
        				<h2 class="mb-3 small-title">QUICK LINKS</h2>
        				<ul class="foot-links">
        					<li><a href="index.php">Home</a></li>
        					<li><a href="about.php">About</a></li>
        					<li><a href="services.php">Services</a></li>
        					<li><a href="blog.php">Blog</a></li>
        					<li><a href="contact.php">Contact</a></li>
        				</ul>
        			</div>
        			<div class="col-md-4 col-lg-4 mb-3 mb-lg-0">
        				<h2 class="mb-3 small-title">REGISTERED ADDRESS</h2>
        				<p class="common-mid-text">144, Bizz Bay Mall, Opposite Clover Palasides, MohamMad Wadi, Pune (H)-411060 Maharashtra- India</p>
        			</div>
        			<div class="col-md-4 col-lg-4 mb-3 mb-lg-0 email-foot-wrapper">
                        <div>
                            <h2 class="mb-3 small-title">EMAIL CONNECT</h2>
            				<p><a class="common-mid-text" href="mailto:info@vigour360.com">info@vigour360.com</a></p>
                        </div>
        			</div>
				</div>
        	</div>
        	<div class="copyright-wrapper">
        		<img class="footer-waves-img" src="./assets/img/img_wave.png" alt="Wave">
                <div class="copy-right">
            	   <img class="footer-dots-img" src="./assets/img/img_dots.png" alt="Dots">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 ">  
                                <div class="inner-copy-right">
                                    <p>© 2020 <a href="javascript:void(0)"> vigour360.com</a></p>
                	        		<p>Designed by <a href="http://www.thecatspajamas.in/#!/home"> thecatspajamas</a> & Developed by <a href="https://www.chapter247.com/"> Chapter247</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
        	</div>
		</div>
	</footer>
    <!--Footer E -->
	<!--Loadder S-->
    <div class="loader-wrapper">
        <div class="inner-loader"> 
            <img src="./assets/img/icon_bell_loader.svg" alt="Loader">
        </div>
    </div>
    <!--Loadder E-->
</div><!-- /#wrapper -->
<script src="assets/js/jquery.min.js"></script>  <!-- For jquery library ! jQuery v2.1.3 -->
<script src="assets/js/popper.min.js"></script> <!-- for popper min js v1.14.7 -->
<script src="assets/js/bootstrap.js"></script> <!-- for Bootstrap js v4.3.1 -->
<script src="assets/js/slick.min.js"></script> <!-- for slick slider js -->
<script src="assets/js/waypoints.min.js"></script> <!-- for Counter js -->
<script src="assets/js/jquery.counterup.min.js"></script> <!-- for Counter js -->
<script src="assets/js/jquery.validate.min.js"></script> <!-- for valition  -->
<script>
	$(document).ready(function(){
		$('.navbar-toggle button').click(function(){
			$('.header-links').slideToggle(300);
		});
        var getUrl = window.location.pathname;
        var getPath = getUrl.split("/");
        var getFinalPath = getPath[getPath.length - 1];
        var getFullFinalPath = getFinalPath.slice(0,getFinalPath.length - 4);
        console.log("sss", getFinalPath);
        $("body").addClass(getFullFinalPath)
        // For active link
        $('.header-links').find('a').each(function() {
            $(this).toggleClass('active', $(this).attr('href') == getFinalPath);
        });
    });
</script>
<script>
    // For Banner 
	$('.banner-wrapper').slick({
		dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
  		autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
	});
    // For Sticky Header 
    $(window).scroll(function(){
        var sticky = $('.header-inner'),
        scroll = $(window).scrollTop();
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    // For Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
    // For Page Scroll
    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $('.page-top button').fadeIn();
        } else {
            $('.page-top button').fadeOut();
        }
    });
    $('.page-top button').click(function(){
        $("html, body").animate({scrollTop: 0}, 500);
    });
    // For Loadder 
    $(window).load(function(){
        $('.loader-wrapper').fadeOut();
    });
</script>
<!-- <script>
    $('#contactForm').validate({
        ignore: [],
        onfocusout: function(element) {
        this.element(element);
        },
        errorClass: 'error_validate',
        errorElement:'span',
        highlight: function(element, errorClass) {
            $(element).removeClass(errorClass);
        }
        
    });
</script> -->
</body>
</html>