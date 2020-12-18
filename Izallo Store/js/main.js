$(function() {
   $('#slider').cycle({
      fx: 'cover',
      speed: 500000,
      timeout: 1000,
      next: '#slider',
      prev: '#ant',
      pager: '',  
   })
});

$(function() {
   $('#slider2').cycle({
      fx: 'curtainX', 
    sync:  false, 
    delay: -1000   
   })
});

$(function() {
   $('#slider3').cycle({
      fx: 'cover',
      speed: 5000,
      timeout: 2000,
      next: '#slider3',
      prev: '#ant',
      pager: '',   
   })
});

$("#slideshow").craftyslide({
  'width': 640,
  'height': 400,
  'pagination': false,
  'fadetime': 500,
  'delay': 4000, 

});

