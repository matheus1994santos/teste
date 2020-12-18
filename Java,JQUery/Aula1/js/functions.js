/*	$(function(){
	alert('ola mundo')
});*/

/*$(document).ready(function(){
	alert('ola mundo')
});*/

/*$(window).on('load', function(){
	alert('ola mundo')
});*/

$(function(){
	/*$('div').css('background-color','black') atacando a div*/
	/*$('.artigo1').css('background-color','#ccc')atacando a class*/
	//$('.artigo1').css('padding-bottom','20px').css('background-color','red')/*atacando os style da mesma class*/
		function validarCliquehouver(){

		$('.artigo1').click(function(){
			$('.artigo2').css('background-color','purple');
		});//com um click mudamos a cor de um elemento alterando outro

		$('.artigo1').hover(function(){
			$('.artigo2').css('background-color','red')
		},function(){
			$('.artigo2').css('background-color','rgb(100,100,100)')
		});

		}

		function validarFormulario(){
			$('select').change(function(){
				console.log("Meu select foi alterando");
			});

			$('textarea').focus(function(){
				//Executar alguma funcao quando existe foco no elemento.
				console.log("Foco!");
			}).blur(function(){
				//Executar uma funcao quando retiramos o foco.
				console.log("Retirando Foco!");
			})
		}

		$('textarea').focus(function(){
			alert('Estou dentro do textarea');
			console.log('Estou dentro do textarea');
		})

		$('textarea').blur(function(){
			alert('Estou fora do textarea');
			console.log('Estou fora do textarea');
		})


		validarFormulario();
		validarCliquehouver();
});
