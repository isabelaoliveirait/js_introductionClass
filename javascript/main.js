
var nome = "Isa";
var idade = 14
var idade2 = 14;
var frase = "Japão é o melhor time do mundo";
alert("Bem vindo! " + nome + " você tem " + idade + " anos" + " mas sabemos que o javascript soma inteiros então idade com idade é: ");
alert(idade + idade2)

console.log(frase.replace("Japão", "Brasil"));

function clicou() {
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
	//window.open("http://training-wheels-protocol.herokuapp.com/login");
	window.location.href = "http://training-wheels-protocol.herokuapp.com/login";
}

function trocar(){
	document.getElementById("mousemover").innerHTML = "Obrigado por passar o mouse";
//	alert("trocar texto");
}