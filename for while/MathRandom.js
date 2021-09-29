var numero = Math.random() * 100

while(numero < 90){
  console.log(numero)
  numero = Math.random() * 100
}
console.log(numero)
console.log("Acabouuuuuuuuu")

/*var litro = 2

for(var i = 1; i < litro; i++){
  console.log("foi sim")
}

console.log("acabouuu")*/

/*var contador = 0;
while (contador < 5) {
  console.log(contador);
  ++contador;
}

var contador = 0;
while (contador < 5) {
  if (contador === 3) {
    break;
  }
  console.log(contador);
  ++contador;
}*/
/*var contador = 0;

while (contador < 100) {
  if (contador % 3 === 0 && contador % 5 ===0){
    console.log(`${contador} - ping-pong`)
  }
  else if (contador % 3 === 0) {
    console.log(`${contador} - ping` );
  }else if(contador % 5 === 0 ){
    console.log(`${contador} - pong`)
  }
  ++contador;
}*/

/*for(var i = 0; i < 10; i++){
  console.log(i)
}*/

//var numeros = 38;
/*for(var i = 0; i < numeros.length; i++){
console.log(numeros[i])
}*/

//com decremento
/*for(var i = numeros; i > 18;  i- 18 ){
  console.log(`Irá precisar de  ${i} baldes ! `)
}*/
/*
function calcular(total) {
  let lata0_5 = (lata2_5 = lata3_6 = lata18 = 0);

  while (true) {
    if (total >= 18) {
      total -= 18;
      lata18 += 1;
    } else if (total >= 3.6) {
      total -= 3.6;
      lata3_6 += 1;
    } else if (total >= 2.5) {
      total -= 2.5;
      lata2_5 += 1;
    } else if (total >= 0.5) {
      total -= 0.5;
      lata0_5 += 1;
    } else {
      break;
    }
  }
  console.log(`Será necessário:${lata18} latas de 18L  `);
  console.log(`Será necessário:${lata3_6} latas de 3.6L  `);
  console.log(`Será necessário:${lata2_5} latas de 2.5L  `);
  console.log(`Será necessário:${lata0_5} latas de 0.5L  `);
}
calcular(50)*/

