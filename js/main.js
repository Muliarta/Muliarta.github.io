$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  if (wScroll <= $('.header').height()) {
     $('.ta-greeting-index').css({
       'transform' : 'translate(0px, '+ wScroll / 8 +'%)'
     });
   }

  //floating element

});
