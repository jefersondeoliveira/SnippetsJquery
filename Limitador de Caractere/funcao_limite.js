$(function(){
	
	$("textarea").bind("input paste keyup", function(){ // Selecionando parametro e definindo eventos
		var maximo = 50;                               // Limite de Caractere
		var restante = maximo - $(this).val().length;   // Contando quandos caracteres restao
		
		if(restante < 0)								// Verificando se o restante e menor que 0
		{
			var texto = $(this).val().substr(0, maximo); // Recortando apenas o texto que nao exede o limite de 0 ao maximo
			$(this).val(texto);							 // Modificando o valor da textarea para apenas o que foi recortado acima
			restante = 0;								
		}
		
		$(".contagem").text(restante);					//Modificando o valor contido na classe contagem
		
		
	});
	
});