alert("bem-vindo!"); 
/*Elaborar um programa que apresente o resultado inteiro da divisão de dois
números quaisquer. Para a elaboração do programa, não utilizou em hipótese
alguma o conceito do operador aritmético ” / ”. A solução deve ser alcançada
com a utilização de looping. Ou seja, o programa deve apresentar como
resultado (quociente) quantas vezes o divisor cabe no dividendo.*/

function divisaoInteira(dividendo, divisor) {
    if (divisor === 0) {
        return "Erro: divisão por zero.";
    }

    let quociente = 0;

    // Utilizando do-while
    do {
        dividendo -= divisor; // Subtrai o divisor do dividendo
        quociente++; // Incrementa o quociente
    } while (dividendo >= divisor);

    return quociente;
}

// Exemplos de uso
alert(divisaoInteira(10, 3)); // Saída esperada: 3
alert(divisaoInteira(15, 4)); // Saída esperada: 3
alert(divisaoInteira(20, 7)); // Saída esperada: 2
alert(divisaoInteira(7, 2)); // Saída esperada: 3
alert(divisaoInteira(0, 5)); // Saída esperada: 0
alert(divisaoInteira(10, 0)); // Saída esperada: "Erro: divisão por zero."

