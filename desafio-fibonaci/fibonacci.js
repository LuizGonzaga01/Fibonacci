function verificarFibonacci() {
    const numero = parseInt(document.getElementById("numero").value);
 
    let a = 0;
    let b = 1;
  
    while (b <= numero) {
      if (b === numero) {
        document.getElementById("resultado").innerHTML = `${numero} pertence à sequência de Fibonacci.`;
        return;
      }
  
      const temp = b;
      b = a + b;
      a = temp;
    }

    document.getElementById("resultado").innerHTML = `${numero} não pertence à sequência de Fibonacci.`;
  }
  