$(function(){

	abrirJanela();
	verificarCliqueFechar();

	function abrirJanela(){
		$('.btn').click(function(e){
			e.stopPropagation();
			$('.bg').fadeIn();
		});
	}

	function verificarCliqueFechar(){
		var el = $('body, .closebtn');

		el.click(function(){
			$('.bg').fadeOut();
		})

		$('.form').click(function(e){
			e.stopPropagation();
		})
	}

	$('form#form1').submit(function(e){
		e.preventDefault();
		var nome = $('input[name=nome]').val();
		var telefone = $('input[name=telefone]').val();
		var email = $('input[name=telefone]').val();

		if (!verificarNome(nome)) {
			aplicarCampoInvalido($('input[name=nome]'));
		}else{
			alert('Enviado com Sucesso');
		}

	})

	function verificarNome(nome){
		if(nome == ''){
			return false;
		}

		//Contando a quantidade de espaços e os respectivos valores.
		var amount = nome.split(' ').length;
		var splitStr = nome.split(' ');

		if(amount >= 2){
			for(var i = 0; i < amount; i++){
				if(splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
					
				}else{
					
					return false;
				}
			}
		}else{
			

			return false;

		}
	}


	function aplicarCampoInvalido(el){
		el.css('color','red');
		el.css('border','2px solid red');
		el.val('Campo Invalido!');
	}

	function resetarCampoinvalido(el){
		el.css('color','#ccc');
		el.css('border','1px solid #ccc');
		el.val('');
	}

	$('input[type=text').focus(function(){
		resetarCampoinvalido($(this));
	})
	

});
