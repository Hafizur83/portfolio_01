$(document).ready(function(){
    //   Scroll To Top Script
    var topbtn = document.getElementById("topbtn");
     $('#topbtn').click(function(){
        window.scrollTo({top: 0, behavior:"smooth"});
    });
    
    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            topbtn.style.display = "block"
        }else{
            topbtn.style.display = "none"
        }
    }
	//   Smooth Scroll Script
    $('#header a').smoothScroll();

	// MIXIT UP
		var mixer = mixitup('.contain');
    //  Mobile Menu
   $(document).on('click','.navbar-btn , .mobile-menu li a',function(){
       if($('#header').hasClass("mobile-nav-active")){
            $('#header').removeClass('mobile-nav-active')
       }else{
           $('#header').addClass('mobile-nav-active')
       }
    });
});