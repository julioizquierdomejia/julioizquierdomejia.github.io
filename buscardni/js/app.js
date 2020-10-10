
$(document).ready(function()
{
	$.get( "https://www.sigesin.conareme.org.pe/controlador/r3n13c.php?dni=06813928", function( data ) {
	  $( ".result" ).html( data );
	  alert( "Load was performed." );
	});
	
});