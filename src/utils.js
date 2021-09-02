function mostrarClienteImporte(aPagos){
    aPagos.forEach(e => {
        console.log("Cliente: ",e.cliente,", pago: ",e.importe)
    });
}

function ordenarClientes(aPagos){
    const retorno = aPagos.sort(function(a, b){
        var nombreA = a.cliente.toUpperCase();
        var nombreB = b.cliente.toUpperCase();
        if(nombreA < nombreB){
            return -1
        }
        else if(nombreA > nombreB){
            return 1
        }
        else{
            return 0
        }
    })
    return retorno
}

function aumentoImporte(aPagos){
    var aumento = aPagos.map(e => e.importe * 1.30)
    var retorno = aPagos
    for (let i = 0; i < retorno.length; i++) {
        retorno[i].importe = aumento[i];
    }
    return retorno
}

export default{
    mostrarClienteImporte,
    ordenarClientes,
    aumentoImporte,
}