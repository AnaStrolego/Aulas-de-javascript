//var produtos = [ 'creme hidratante corporal', 'perfume', 'creme hidratante para cabelo', 'hidratante labial' ];
//document.write( produtos.length );

//var numero = [ 5, 10, 15, 20, 25];
//document.write( numeros.length );

// a variavel serve para determinar o momento de saida do loop
var sair = false;
// recebe o valor digitado pelo usuario que será adicionado em nomes
var digitado;
// vetor ou array que contém os nomes dogitados pelo usuario
const nomes = [];

//enquanto sair for igual a falso, tudo oq for digitado pelo usuario será adicionado na variavel nomes ate o usuario digitar o "s" 
while (sair == false){
    //variavel que serve para determinar oq será digitado pelo usuario
    digitado = window.prompt("digite um nome ou s pra sair");
    // se oq for digitado pelo usuario for igual a "s"
    if(digitado == "s"){
        //oq for digitado pelo usuario for verdadeiro, vai sair 
        sair = true;
    }else{ // se n for igual a "s", nomes digitados pelo usuario vao er adicionados na variavel nome 
        nomes.push(digitado);
    }
}// após os nomes serem digitados e o "s" os nomes vão aparecer depois dessa escrita
document.write("os nomes digitados foram: " + nomes);