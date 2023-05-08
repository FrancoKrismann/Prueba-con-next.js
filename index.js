function laCajaDePandora(num) {
    if (num % 2 === 0) {
      // es par, convertir a binario
      return num.toString(2);
    } else {
      // es impar, convertir a hexadecimal
      return num.toString(16);
    }
  }
  
  function gonza() {
    return {
      nombre: "Gonza",
      edad: 34, 
      nacionalidad: "Argentino"
    };
  }