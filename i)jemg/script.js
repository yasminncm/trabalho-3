alert("bem-vindo!"); 
/*
Escreva um programa que apresente a série de Fibonacci até o décimo quinto
termo. A série de Fibonacci é formada pela sequência: 1, 1, 2, 3, 5, 8, 13, 21, 34,
... etc. Esta série se caracteriza pela soma de um termo posterior com o seu
anterior subseqüente.
*/
let termo= 1;
let anterior = 0; //inicial
let posterior = 1; //proximo
let resultado = 1;
while (termo<16){
document.body.innerHTML+=`<span>${resultado},</span>`
//0+1=1
resultado=(posterior + anterior); //1
anterior=posterior; //1
posterior=resultado;
termo++
}

