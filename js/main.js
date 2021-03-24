/*var nome = "Ednavan";
var idade = 5;
var idade2 = 3;
var frase = "Brasil é melhor time"
//alert(idade + idade2)
console.log(nome);
console.log(idade * idade2);
console.log(frase.toLocaleLowerCase("Brasil","Argentina"))
*/


//CRIANDO LISTAS

//var lista = ["maça", "Pêra", "laranja"]
//lista.push("uva")//adicionando elemento na lista
//lista.pop("uva")
//console.log (lista.toString())
//console.log(lista.join("--"))//adiciona espaçamento as letras
//alert (lista[1]) //comand que imprime apenas um único nome da lista

//var frutas = {nome:"maça", cor:"vermelha"}
//console.log(fruta.nome);
//alert(fruta.cor)



//CONDIÇÕES
//var idade = prompt("Qual a sua idade")
//if(idade >= 18){
  //  alert("Maior de idade");

//}else{

   // alert("Menor de idade");
//}

    

//ESTRUTURA DE REPETIÇÃO
//var count = 0;
//while (count <= 5){
  //  console.log(count);
    //alert(count);
    //count++;
//}

//DEFININDO DATA
//var d = new Date();

//alert (d.getHours() + ":" +  d.getMinutes() + ":" + d.getSeconds());


/*
//Funções
function soma (n1, n2){

    return n1 + n2;
}
*/

/*
function validadeIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade");
console.log(validadeIdade(idade));
alert(soma(5,2));

*/

function botao(){
    document.getElementById("agradecimento").innerHTML = "obrigado por clicar";
    console.log(document.getElementById("agradecimento"));


}
function redirecionar(){
    window.open("https://remotar.com.br/")
    
}
function trocar(){
    document.getElementById("mouseremove").innerHTML = "Obrigado";
    
    //alert("trocar texto")
}