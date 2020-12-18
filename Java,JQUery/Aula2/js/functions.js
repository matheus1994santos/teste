/*$(function(){
	$('window').scroll(function(e){
		e.preventDefault();
	})
})*/ //para Scroll não aparecer evento Scroll no Console.


$(function(){
	/*
	var timer;

	$('a').click(function(e){
		//e.preventDefault(); ou
		//return false;
	})

	$(window).scroll(function(){
		//evento de quando o Scroll ocorre
	})

	$(window).resize(function(){
		//evento de quando o redimensionamos a tela
		//console.log("Minha tela está sendo redimensionada");
		clearTimeout(timer);
		timer = setTimeout(function(){
			location.href = "http://localhost/Java,JQUery/Aula2/";
		},1000)
	})
	*/

	$('.box').click(function(e){
		e.stopPropagation();
	})

	$('body').click(function(){
		$('.box').css('background-color','green');// so altera se clicar fora da box.
	})

});
