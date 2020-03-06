 $(document).ready(function(){
$('.carusel').slick({
    autoplay: false,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
  });

  if ($('.slick-slide').hasClass('slick-active')) {
    $('.carusel_block_sale__text').addClass('animated fadeInUp');
    $('.carusel_block_sale__text_p').addClass('animated fadeInUp delay-1s');
  } else {
    $('.carusel_block_sale__text').removeClass('animated fadeInUp');
     $('.carusel_block_sale__text_p').removeClass('animated fadeInUp delay-1s');
  }

  $(".carusel").on("beforeChange", function() {
    
    $('.carusel_block_sale__text').removeClass('animated fadeInUp').hide();
    setTimeout(() => {    
      $('.carusel_block_sale__text').addClass('animated fadeInUp').show();
    }, 1000);
 // class p
      $('.carusel_block_sale__text_p').removeClass('animated fadeInUp delay-1s').hide();
    setTimeout(() => {    
      $('.carusel_block_sale__text_p').addClass('animated fadeInUp delay-1s').show();
    }, 1000);  //4000
  })


});