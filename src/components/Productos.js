import React from 'react';
import styled from 'styled-components';
import '../App.css';
import { ContenedorLista, ListaProductos, Productos, ProductosInfo, Puntuacion} from '../elements/ShoppingList';
import Boton from '../elements/Boton';
import {ReactComponent as Star} from './../img/Estrella.svg';
import {ReactComponent as EmptyStar} from './../img/EstrellaVacia.svg';
import convertidorMoneda from '../functions/ConvertidorMoneda';

const ShoppingKart = ({productos, agregarProducto}) => {
    // console.log(productos);
    
    return (
        <>
            <ContenedorLista>
                <h2>Mais Vendidos</h2>
                <Separador />
                <ListaProductos> 
                    {productos.lenght !== 0 ?
                        productos.map((producto) => {           //MAPEO LOS PRODUCTOS PARA MOSTRAR CADA UNO EN UNA LISTA
                            return(
                                    <Productos key={producto.productId}>
                                        <img src={producto.imageUrl} alt="" />
                                        <ProductosInfo id={producto.productId}>
                                            <p>{producto.productName}</p>
                                                <Puntuacion>
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <Star />
                                                    <EmptyStar />
                                                </Puntuacion>
                                            {producto.listPrice !== null ? <span className="precio-promo">de {convertidorMoneda(producto.listPrice)}</span> : <br/>}
                                            <h2>por {convertidorMoneda(producto.price)}</h2>
                                            {producto.installments[0] ?
                                                <span>o em {producto.installments[0].quantity} de {convertidorMoneda(producto.installments[0].value)}</span> : <br/>
                                            }
                                            <Boton venta onClick={() => agregarProducto(producto.productId)}>COMPRAR</Boton>
                                        </ProductosInfo>
                                    </Productos>
                            );
                        })
                    :
                        'Cargando Productos...'
                    }
                </ListaProductos>
            </ContenedorLista>
        </>
    );
}

const Separador = styled.div`
    width: 65px;
    border-bottom: 4.29px solid #C0C0C0;
    position: absolute;
    left: 191px;
    top: 560px;

    @media(max-width: 360px){
        left: 10px;
        top: 560px;
    }
`;
 
export default ShoppingKart;