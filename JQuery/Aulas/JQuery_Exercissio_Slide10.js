$(document).ready(function(){
	//Todo Texto do Documento em Itálio
	$("div").css("font-style", "italic")
	//Sublinhar o Primeiro Nome
	$("#lined").css("text-decoration", "underline")
	//Negrito os Alunos
	$(".alunos").css("font-weight", "bold")
	//Adicionar "Professor "
	$("#prof").before("Professor: ")

	$(".alunos").html("<ul><li>Pedro</li><li>Pedro</li><li>Tiago</li><li>Mariana</li><li>Gorgulho</li><li>Telmo</li></ul>")

	$("#prof").css("background", "black"; "font-color", "white")
});

$(window).on("load",function(){
	$("img").attr("src", "../Imagens/pedro.jpg");
});