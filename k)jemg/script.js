alert("bem-vindo!"); 
/*
Elaborar um programa que efetue o cálculo e no final apresente o somatório do
número de grãos de trigo que se pode obter num tabuleiro de xadrez,
obedecendo à seguinte regra: colocar um grão de trigo no primeiro quadro e nos
quadros seguintes o dobro do quadro anterior. Ou seja, no primeiro quadro
coloca-se 1 grão, no segundo quadro colocam- -se 2 grãos (neste momento
têm-se 3 grãos), no terceiro quadro colocam- -se 4 grãos (tendo neste momento
7 grãos), no quarto quadro colocam- -se 8 grãos (tendo-se então 15 grãos) até
atingir o sexagésimo quarto quadro (Este exercício foi baseado numa situação
exposta no capítulo 16 do livro "O Homem que Calculava" de Malba Tahan, da
Editora Record).
*/
let somatorio=0
let i=1
let anterior = 1
while(i<=64){
somatorio=somatorio+anterior
anterior=anterior*2
i++
}
document.body.innerHTML +=`${somatorio}`