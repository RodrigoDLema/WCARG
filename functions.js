'use strict';


function esAccesible(results,seleccionados) {
    //console.log("Cantidad repetidas  " + seleccionados)

    let resultado = seleccionados.filter((item,index)=>{
    return seleccionados.indexOf(item) === index;
    })

    console.log("Los códigos con error son:  ")

    for (i = 0; i < resultado.length; i++) {
        console.log(resultado[i])
    } 

    if (resultado.length > 8){
            console.log(results.pageUrl + " NO ES ACCESIBLE")
    }
    else {
            console.log(results.pageUrl + " ES ACCESIBLE")
    }      
}




module.exports = {
        "esAccesible":esAccesible
}    