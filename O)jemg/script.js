alert("bem-vindo!"); 
/*Elaborar um programa que apresente como resultado o valor da fatorial dos
valores ímpares situados na faixa numérica de 1 a 10.*/

let resultadoFatorial = 1;

// Itera sobre os números ímpares de 1 a 10 e calcula o fatorial
let i = 1;
do {
    let fatorial = 1;
    let j = 1;
    do {
        fatorial *= j;
        j++;
    } while (j <= i);
    
    resultadoFatorial *= fatorial;
    i += 2;
} while (i <= 10);

// Exibindo o resultado
document.body.innerHTML += `<p> O valor da fatorial dos valores ímpares de 1 a 10 é: ${resultadoFatorial} </p>`;


