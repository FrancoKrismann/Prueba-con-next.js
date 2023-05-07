function laCajaDePandora(numero){
    if(numero % 2 === 0) {  
        return numero.toString(2);  
    } else {  
        return numero.toString(16);  
    }
}

function miInformacion() {
    return {
      nombre: "Aldana",
      edad: 37,
      nacionalidad: "Argentina"
    };
}