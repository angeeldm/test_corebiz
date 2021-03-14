import styled from 'styled-components';
import {ReactComponent as Kart} from './../img/kart.svg';

const Carrito = styled(Kart)`
    width: 18px;
    height: 18px;
    margin: 0 5px 0 0;
`;

const Contador = styled.div`
    background-color: #F8475F;
    width: 30px;
    height: 25px;
    border-radius: 50%;
    margin: 0;
    

    p{
        color: #FFF;
        font-size: 14px;
        font-weight: 700;
        margin-left: 6px;
        margin-top: 3px;
        cursor: default;
    }
`;

export {Carrito, Contador};