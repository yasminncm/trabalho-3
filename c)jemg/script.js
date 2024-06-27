alert("bem-vindo!"); 
/* Apresentar o total da soma obtida dos cem primeiros números inteiros
(1+2+3+4+5+6+7+...97+98+99+100).
*/
let soma=0;
for(let i=1;i<=100;i++){
 soma=soma+i
//0+1 1+2 3+3 6+4 10+5
}
document.body.innerHTML +=`<p>${soma}</p>`;