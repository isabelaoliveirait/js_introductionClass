// o "prompt" exibe uma caixa de pergunta ao usuario
var idade = prompt("Qual sua idade");
if (idade >= 18){
	alert("maior de idade");

}else{
	alert("menor de idade");

};

// laços de repetição

var count = 0;
while(count <5){
	console.log(count);
	//count = count + 1;
	count++

}

// estrutura de repetição for
/*
var count1;

for(count1=0; count1 <=5; count1++){
	alert(count1);
}; */

// trabalhar com data

var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());