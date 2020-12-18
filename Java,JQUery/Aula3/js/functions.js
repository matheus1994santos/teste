$(function(){

	$.ajax({
		'url':'conteudo.html',
		//data'method':'post',
		//data:{'nome':'guilherme','idade';'23'}
	}).done(function(data){
		$('#container').append(data);
	});

});
