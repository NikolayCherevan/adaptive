var mySwiper = new Swiper ('.swiper-container', {

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

})

function myFunction(x) {
  x.classList.toggle("change");
}

$( document ).ready(function(){
	  $( ".burger" ).click(function(){
	    $( ".nav-mobile" ).slideToggle();
	  });
	});
