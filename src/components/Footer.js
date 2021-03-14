import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {ReactComponent as Speaker} from './../img/Speaker.svg';
import {ReactComponent as Vtex} from './../img/Vtex.svg';
import {ReactComponent as Logo} from './../img/logoBlanco.svg';
import {ReactComponent as Punto} from './../img/puntoLogoMin.svg';

const Footer = () => {
    return (
        <>
            <SiteFooter>
                <ContenedorFooter>
                    <ElementosFooter>
                        <h3>Localização</h3>
                        <Separador />
                        <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
                        <p>Alphavile SP</p>
                        <p>brasil@corebiz.ag</p>
                        <p>+55 11 3090 1039</p>
                    </ElementosFooter>

                    <ElementosFooter>
                        <Boton lineado> <FontAwesomeIcon icon={faEnvelope} /> ENTRE EM CONTACTO</Boton>
                        <Boton> <Speaker /> FALE COM O NOSSO CONSULTOR ONLINE</Boton>
                    </ElementosFooter>

                    <ElementosFooter flex>
                        <Elementos>
                            <p>Created By</p>
                            <ElementosFooter>
                                <Logo />
                                <Punto />
                            </ElementosFooter>
                        </Elementos>
                        <Elementos>
                            <p>Powered By</p>
                            <Vtex />
                        </Elementos>
                    </ElementosFooter>
                </ContenedorFooter>
            </SiteFooter>
            <BgFooter />
        </>
    );
}

const SiteFooter = styled.div`
    width: 100%;
    padding: 50px 0;
    background-color: #000;
`;

const ContenedorFooter = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 360px){
        flex-direction: column;
    }
`;

const ElementosFooter = styled.div`
    margin: 0 0 20px 0;
    display: ${(props) => props.flex ? 'flex' : 'block'};

    p{
        color: #FFF;
        font-family: Nunito;
        font-weight: 400;
        font-size: 13px;
        line-height: 12px;
        margin-bottom: 5px;
    }
`;

const Separador = styled.div`
    width: 45px;
    border-bottom: 5px solid #FFF;
    margin: 15px 0;
`;

const Boton = styled.button`
    background-color: #FFF;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 195px;
    border: none;
    height: 38px;
    margin: 10px 0;
    font-family: Nunito;
    font-weight: 600;
    font-size: 12px;
    line-height: ${(props) => props.lineado ? '16.37px' : '12px'};

    svg{
        margin: ${(props) => props.lineado ? '0 0 0 10px' : '0 0 0 20px'};
    }
`;

const Elementos = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`;

const BgFooter = styled.div`
    height: 10px;
    width: 100%;
    background-color: #C0C0C0;
`;
 
export default Footer;