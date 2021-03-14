const convertidorMoneda = (cantidad) => {               //FUNCION PARA CONVERTIR LA CANTIDAD RECIBIDA EN UN VALOR MONETARIO
    return new Intl.NumberFormat(
        'es-br',
        {style: 'currency', currency: 'BRL', minimumFractionDigits: 0}
    ).format(cantidad);
}
 
export default convertidorMoneda;