(function($){
	
	$.fn.watermark = function(parametros){
		var  padrao
			,vall
			,$elemento
			,$elementoEmFoco
			,$elementoForaDeFoco
			,padroes = {
				 corMarcaDagua    : '#bbbbbb'
				,estiloMarcaDagua : 'italic'
				,corTexto         : '#000000'
				,estiloTexto      : 'normal'
				,valorPadrao      : 'pesquisar...'
			}
		
		padrao = $.extend({},padroes,parametros);
		
		return this.each(function(){
			
			$elemento = $(this);
			
			if($elemento.is('input:text') || $elemento.is('textarea') ){
				
				$elemento.css({
					 color     : padrao.corMarcaDagua
					,fontStyle: padrao.estiloMarcaDagua
				});
				
				vall = ($elemento.val() != '')?$elemento.val():padrao.valorPadrao;
				$elemento.val(vall).attr('rel',vall); 
				
				$elemento.focus(function(){
					$elementoEmFoco = $(this);
					$elementoEmFoco.css({
						 color:padrao.corTexto
						,fontStyle:padrao.estiloTexto
					});
					
					if($elementoEmFoco.val() == $elementoEmFoco.attr('rel')){
						$elementoEmFoco.val('');
					}
					
				});
				
				$elemento.blur(function(){
					$elementoForaDeFoco = $(this);
					if($elementoForaDeFoco.val() == '' || $elementoForaDeFoco.val() == $elementoForaDeFoco.attr('rel')){
						$elementoForaDeFoco.css({
					 		 color     : padrao.corMarcaDagua
							,fontStyle : padrao.estiloMarcaDagua
						});
						
					$elementoForaDeFoco.val($elementoForaDeFoco.attr('rel'));
					
					}
				});
				
			}
			
		});
		
	}
	
})(jQuery);
