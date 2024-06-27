alert("bem-vindo!"); 
/*Elaborar um programa que apresente os resultados da soma e da média
aritmética dos valores pares situados na faixa numérica de 50 a 70.*/

let soma = 0;
let quantidade = 0;
let i = 50;

// Itera sobre os números pares de 50 a 70
do {
    if (i % 2 === 0) { // Verifica se o número é par
        soma += i; // Soma o número par à variável soma
        quantidade++; // Incrementa a quantidade de valores pares
    }
    i++;
} while (i <= 70);

// Calcula a média aritmética dos valores pares
let media = soma / quantidade;

// Exibe os resultados
document.body.innerHTML += `<p> Soma dos valores pares de 50 a 70: ${soma} </p>`;
document.body.innerHTML += `<p> Média aritmética dos valores pares de 50 a 70: ${media} </p>`;

