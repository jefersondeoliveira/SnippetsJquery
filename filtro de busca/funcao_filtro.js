$(function(){
	
	$(":text").keyup(function(){  // Verificando a cada letra digitada
		
		buscarPor = $(this).val(); // Recuperando valor do input
		
		if(buscarPor == '')   // Verificando se o input nao ta vazio
		{
			$("tr").fadeIn();  // Se tiver mostra todos os itens da tabela
		}

		$("tr:not(:contains("+buscarPor+"))").not("tr:first").fadeOut();  //Esconde todas as 'tr' que nao contenhao a palavra buscada, exeto a primeira linha
		$("tr:contains("+buscarPor+")").not("tr:first").fadeIn(); //Mostra todas as 'tr' que tenham o conteudo digitado, exeto a primeira linha
		
		

	})
	
	
});