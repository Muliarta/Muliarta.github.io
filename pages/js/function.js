$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if (wScroll <= $('.header').height()) {
    $('.ta-front-bg').css({
      'transform' : 'translate(0px, -'+ wScroll / 15 +'%)'
    });
    $('.ta-back-bg').css({
      'transform' : 'translate(0px, '+ wScroll / 8 +'%)'
    });
    $('.ta-greeting').css({
      'transform' : 'translate(0px, '+ wScroll / 4 +'%)'
    });
    $('.ta-greeting-index').css({
      'transform' : 'translate(0px, '+ wScroll / 8 +'%)'
    });
  }

  //floating element

});
