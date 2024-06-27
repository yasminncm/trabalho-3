alert("bem-vindo!"); 
/*
Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.
*/

//apresentar no final o somatório dos valores pares existentes entre 1 a 500
let somaPares = 0;
for (let i = 1;i <= 500; i++){
   if(i % 2 == 0){
        somaPares=somaPares+i;
  }

}
alert(somaPares);

