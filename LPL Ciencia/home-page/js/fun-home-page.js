$(document).ready(function() {
  $(".image-astro1").mouseover(function(){
    $(this).prev().fadeTo("slow", 8);
  }).mouseout(function(){
    $(this).prev().fadeTo("slow", 0);
  });

