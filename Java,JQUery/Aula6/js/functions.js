$(function(){

	verificarCliqueMenu();

	function verificarCliqueMenu(){
		$('a').click(function(){
			var href = $(this).attr('href');
			$.ajax({
				'beforeSend':function(){
					console.log('Estamos chamndo beforeSend');
				},
				'timeout':10000,
				'url':href,
				'erro':function(){
					console.log("ocorreu um erro");
				},
				'success':function(data){
					console.log(data);
					// $('#container').append(data); ou
					$('#container').html(data);
				}
			})
			return false;
		})
	}

});
