function laCajaDePandora(num){
    if (num % 2 === 0) {
        // El número es par
        return num.toString(2); // Convierte a binario
      } else {
        // El número es impar
        return num.toString(16); // Convierte a hexadecimal
      }
    }

function gonzaS() {
    return {
        nombre:'Gonza S',
        edad: 26,
        nacionalidad: 'Argentino'
    }
}