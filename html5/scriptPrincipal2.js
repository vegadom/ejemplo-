$(document).on("ready",configurarApp);

function configurarApp ()

{
	var canvas = document.getElementById("miCanvas");
	var ctx = canvas.getContext(2d);
	canvas.width = canvas.availWidth;
	dibujaFooter(canvas,ctx)
}
function dibujaFooter(canvas,contexto)
{
	
	contexto.moveTo(0,0);
	contexto.quadraticCurveto(0,0,canvas.width,canvas.height)
	contexto.stroke();
}