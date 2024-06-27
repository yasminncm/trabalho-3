alert("bem-vindo!"); 
/*Elaborar um programa que efetue a leitura de valores positivos inteiros, até que
um valor negativo seja informado. Ao final devem ser apresentados o maior e o
menor valores informados pelo usuário.*/

let maior = Number.MIN_SAFE_INTEGER; // Inicializa com o menor valor possível para comparação
let menor = Number.MAX_SAFE_INTEGER; // Inicializa com o maior valor possível para comparação
let valor;

do {
    valor = parseInt(prompt("Digite um valor positivo inteiro (ou um valor negativo para encerrar):"));

    if (valor >= 0) {
        // Verifica se o valor digitado é maior que o atual maior
        if (valor > maior) {
            maior = valor;
        }

        // Verifica se o valor digitado é menor que o atual menor
        if (valor < menor) {
            menor = valor;
        }
    }
} while (valor >= 0);

// Exibe o maior e o menor valor informados
if (maior === Number.MIN_SAFE_INTEGER && menor === Number.MAX_SAFE_INTEGER) {
    alert("Nenhum valor positivo foi digitado.");
} else {
    document.body.innerHTML += `<p>\nMaior valor informado: ${maior} </p>`;
    document.body.innerHTML += `<p>Menor valor informado: ${menor} </p>`;
}


