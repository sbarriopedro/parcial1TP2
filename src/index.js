import utils from './utils.js'
import fs from 'fs'

//setTimeout(()=>{console.log('Hola Mundo Asincronico!')},7000);

const aPagos = [
    {id: 1, numero: '00000002', importe : 1000, cliente:'R00001'},
    {id: 2, numero: '00000003', importe : 3000, cliente:'C00002'},
    {id: 3, numero: '00000004', importe : 2000, cliente:'R00002'},
    {id: 4, numero: '00000005', importe : 8000, cliente:'C00001'},
   ]
   
utils.mostrarClienteImporte(aPagos)

const clientesOrdenados = utils.ordenarClientes(aPagos)

console.log(clientesOrdenados)

const clienteFiltrado = (aPagos, query) => {
    return aPagos.filter(e => e.cliente.indexOf(query) !== -1)
  }
  
  console.log(clienteFiltrado(aPagos, 'R'))

const aumentoImporte = utils.aumentoImporte(aPagos)

console.log(aumentoImporte)

const datos = fs.readFileSync('./src/datos.txt', 'utf-8')
console.log(datos)

fs.appendFileSync('./src/datos.txt', 'nuevo texto\n')
console.log(datos)
