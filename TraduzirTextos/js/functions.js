/**
* Inicializa as funções assim que os elementos (DOM) são carregados
* @author Leonardo Souza <leonardo.souza@agenciaclick.com.br>
*/
jQuery(function() {
	BaseProject._init();
});

var BaseProject = {
	/**
	* Função de chamada das outras funções que inicializam o site
	* @author Leonardo Souza <leonardo.souza@agenciaclick.com.br>
	*/
	_init: function() {
		BaseProject._translate();
	},
	
	/**
	* Traduzir para outros idiomas
	* author: Danilo Augusto <danilo.martins@agencliaclick.com.br >
	*/
	_translate: function() {
		var arrIdioma = new Array();
		
		arrIdioma.push(new Array('en','English','Translate to English','Translating','Translation error'));
		//arrIdioma.push(new Array('pt','Português','Traduzir para português','Traduzindo','Erro ao traduzir'));
		arrIdioma.push(new Array('es','Spañol','Traducir al spañol','Traducir','Error de traducción'));
		arrIdioma.push(new Array('fr','French','Traduire en français','Traduire','Erreur de traduction'));
		arrIdioma.push(new Array('it','Italian','Traduci in italiano','Tradurre','Errore di traduzione'));
		
		var html_translate = '';
		html_translate += '<div class="opcoes_idiomas idiomas">';
			for(i=0;i<arrIdioma.length;i++){
				html_translate += '	<a href="#" class="translate_'+arrIdioma[i][0]+'" rel="'+arrIdioma[i][0]+'" title="'+arrIdioma[i][2]+'">'+arrIdioma[i][1]+'<\/a>';
			}
		html_translate += '<\/div>';
		$('.translate').each(function(){ 
			$(this).append(html_translate);
		});
		$('.opcoes_idiomas a').click(function(){
			var idioma = $(this).attr('rel');
			var containerLinks = $(this).parent();
			containerLinks.find('a').hide();
			
			for(i=0;i<arrIdioma.length;i++){
				if(idioma == arrIdioma[i][0]){
					var traduzindo = arrIdioma[i][3];
					var erro_ao_traduzier = arrIdioma[i][4]; 
				}
			}
			
			containerLinks.append('<span>'+traduzindo+'...<\/span>');
			
			containerLinks.parent().translate(idioma,{
				complete: function(){
					containerLinks.find('span').remove();
					containerLinks.find('a').show();
				},
				timeout: 20000,
				onTimeout: function(){
					containerLinks.find('span').remove();
					containerLinks.append('<span>'+erro_ao_traduzier+'<\/span>');
					window.setTimeout(function(){
						containerLinks.find('span').remove();
						containerLinks.find('a').show();
					},3000);
				}
			});
			return false;
		});
	}
};