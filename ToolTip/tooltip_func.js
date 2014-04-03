$(function(){
	
	//selecionando todos os elementos que tiver o atributo rel=tooltip
	$("*[rel=tooltip]").hover(function(e){ //Ao passar o mouse fazer...
			
			text = $(this).attr('title'); //Recuperando valor do title=""
			
			$("body").append('<div class="tooltip">'+text+'</div>'); //Adicionando a div do tooltip no body da pagina
			
			$(this).attr({title:''}); // Modifica o atributo title depois de adicionalo pra nao exibir o tille padrao
			
			$(".tooltip").css({ //modificando css da div class tooltip
								top: e.pageY - 50, //Recupera a posicao do elemento que recebe o tooltip e coloca a div tooltip -50 de distancia na vertical
							   left: e.pageX + 20  //Recupera a posicao do elemento que recebe o tooltip e coloca a div tooltip +20 de distancia na horizontal
							  }).fadeIn();
			
	
	}, function(){ //Ao retirar o mouse fazer...
		
		$(".tooltip").remove(); //Remove a div class tooltip
		$(this).attr({title:text}); // Reseta o atributo title
		
	}).mousemove(function(e){ //funcao para enquanto move o mouse
		
			$(".tooltip").css({ //modificando css da div class tooltip
								top: e.pageY - 50, //Recupera a posicao do elemento que recebe o tooltip e coloca a div tooltip -50 de distancia na vertical
							   left: e.pageX + 20  //Recupera a posicao do elemento que recebe o tooltip e coloca a div tooltip +20 de distancia na horizontal
							  });
	
	});
	
});