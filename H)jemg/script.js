alert("Bem-vindo!"); 

// Solicita ao usuário a entrada dos valores de base e expoente
let base = parseInt(prompt("Digite o valor da base (inteiro e positivo):"), 10);
let expoente = parseInt(prompt("Digite o valor do expoente (inteiro e positivo):"), 10);

// Verifica se os valores são números válidos
if (isNaN(base) || isNaN(expoente) || base < 0 || expoente < 0) {
    alert("Por favor, insira valores inteiros e positivos.");
} else {
    let e = 0;
    while (e <= expoente) {
        let resultado = Math.pow(base, e);
        document.body.innerHTML += `<p> ${base}^${e} = ${resultado} </p>`;
        e++;
    }
}
 
