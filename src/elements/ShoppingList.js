import styled from "styled-components";

const ContenedorLista = styled.div`
    max-width: 1200px;
    padding: 25px 0 20px 0;
    margin: 0 auto;
    width: 95%;
`;

const ListaProductos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    align-items: end;
    justify-items: center;

    @media(max-width: 380px){
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Productos = styled.li`
    width: 216px;
    list-style: none;
    margin: 0;

    :hover{
        background-color: #E6E8EA;
    }

    img{
        width: 100%;
    }

    @media(min-width: 360px){
        width: 132px
    }
`;

const ProductosInfo = styled.div`
    margin: 0 auto;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-family: Nunito;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 25px;
        text-align: center;
        color: #000;
    }

    p{
        text-align: center;
    }

    span{
        font-family: Nunito;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 15px;
        text-align: center;
        color: #7A7A7A;
        width: 216px;
    }
`;

const Puntuacion = styled.div`
    display: flex;
    margin: 10px 0 20px 0;
    padding: 0 50px;
`;

export {ContenedorLista, ListaProductos, Productos, ProductosInfo, Puntuacion};