import styled from "styled-components";
import {ReactComponent as Search} from './../img/search.svg';

const Buscador = styled.input`
    border: none;
    width: 223.38px;
    height: 16px;
    font-family: Nunito;
    font-weight: 400;
    color: #7A7A7A;
    font-size: 13px;
    line-height: 18px;
    margin: 0;
`;

const ContenedorBuscador = styled.div`
    width: 718px;
    border-bottom: 1px solid #7A7A7A;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    margin: 0;

    @media(max-width: 360px){
        display: none;
    }
`;

const Icono = styled(Search)`
    width: 18px;
    height: 18px;
    margin: 0;
`;

export {Buscador, ContenedorBuscador, Icono};