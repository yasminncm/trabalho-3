alert("bem-vindo!"); 
/*
Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente
no final o total do somatório e a média dos valores lidos.
*/
let i=0,somatorio=0;
while(i<10){
let valor=parseInt(prompt('informe o valor:'));
somatorio=somatorio+valor
i++
}
media=somatorio/10
document.body.innerHTML+=`${somatorio} e media:${media}`