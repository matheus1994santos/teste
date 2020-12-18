$(function(){
	var indiceAtual = 0;
	// length= diz quantos elementos tem, e trabalha na quantidade de elemento daquele elemento
	var indiceMaximo = $('.slider img').length;
	var delay = 5000;
	initslider();
	cliqueSlider();

	console.log(indiceMaximo);

	function initslider(){
		// $('.slider img').each(function(i){
		// 	if(i == 0){
		// 		$(this).fadeIn();
		// 	}else{

		// 	}
		// }) --- mesma coisa que o de baixo  /// eq()=indice ou pegar elementa 1 ou 2 ou 33
		for(var i = 0; i < indiceMaximo; i++){
			if(i == 0){
				$('.bullets-nav').append('<span style="background: #069;"></span>');
			}else{
				$('.bullets-nav').append('<span></span>');
			}
		}

		$('.slider img').eq(0).fadeIn();
		setInterval(function(){
			alternarSlider();
		},delay);
	}

	function cliqueSlider(){
		$('.bullets-nav span').click(function(){
			$('.slider img').eq(indiceAtual).stop().fadeOut(2000);
			indiceAtual = $(this).index();
			$('.slider img').eq(indiceAtual).stop().fadeIn(2000);
			$('.bullets-nav span').css('background-color','#ccc');
			$(this).css('background-color','#069');
		})
	}

	function alternarSlider(){
		$('.slider img').eq(indiceAtual).stop().fadeOut(2000);
		indiceAtual+=1;
		if(indiceAtual == indiceMaximo)
		indiceAtual = 0;
			$('.bullets-nav span').css('background-color','#ccc');
			$('.bullets-nav span').eq(indiceAtual).css('background-color','#069');
		$('.slider img').eq(indiceAtual).stop().fadeIn(2000);
	}

});
