//função Menu acima.

$(".b1 li").click(function(e){
	e.preventDefault();
  $(".sub-menu").slideToggle();
});



$(function(){
	var header = $('header');
	var lmarca = $('#logomarca');
	var menu   = $('#menu');
	var mpai   = $('#menu-pai');
	var smenu  = $('#sub-menu');
	var amenu  = $('#sub-menu li');

	smenu.css('background-color','rgb(220,220,220)');
	amenu.css({"font-size":"18px"});
});