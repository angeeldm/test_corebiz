import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from './../img/logo.svg';
import {ReactComponent as Punto} from './../img/PuntoLogo.svg';
import {ReactComponent as MenuMovil} from '../img/movilMenu.svg';
import {Buscador, ContenedorBuscador, Icono} from './../elements/Buscador';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import {Carrito, Contador} from './../elements/Carrito';

const Header = ({contador}) => {
    return (
        <ContenedorHeader>
            <NavMovil />
                
            <ContenedorLogo>
                <Logotipo />
                <PuntoLogo />
            </ContenedorLogo>
                
            <ContenedorBuscador>
                <Buscador placeholder="O que está procurando?"></Buscador>
                <Icono />
            </ContenedorBuscador>

            <ContenedorElementos ocultar>
                <FontAwesomeIcon icon={faUser} />
                <p>Minha Conta</p>
            </ContenedorElementos>

            <ContenedorElementos>
                <Carrito />
                <Contador>
                    <p>{contador}</p>
                </Contador>
            </ContenedorElementos>
            
        </ContenedorHeader>
    );
}

const ContenedorHeader = styled.div`
    height: 80px;
    background-color: #FFF;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
`;

const ContenedorLogo = styled.div`
    width: 171px;
    display: flex;
    align-items: flex-end;
    margin: 0;
`;

const Logotipo = styled(Logo)`
    height: 41px;
    width: 170.14px;
`;

const PuntoLogo = styled(Punto)`
    height: 9.05px;
    width: 9.05px;
    left: 171.95001220703125px;
    top: 31.95587158203125px;
`;

const NavMovil = styled(MenuMovil)`
    margin: 10px 0 0 15px;

    @media(min-width: 520px){
        display: none;
    }
`;

const ContenedorElementos = styled.div`
    margin: 0;
    width: 100px;
    height: 18px;
    display: flex;

    @media(max-width: 768px){
        display: ${(props) => props.ocultar? 'none' : ''};
    }
`;

 
export default Header;