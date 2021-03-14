import React from 'react';
import styled from 'styled-components';
import ImageBanner from './../img/image-banner.png';
import SombraBanner from './../img/Banner.png';

const Banner = () => {
    return (
        <ContenedorBanner>
            <Sombra>
                <Enunciado>
                    <span>Olá, o que você está buscando?</span>
                    <h1>Criar ou migrar seu <br/>e-commerce?</h1>
                </Enunciado>
            </Sombra>
            <Imagen>
            <Enunciado ocultar>
                    <span>Olá, o que você está buscando?</span>
                    <h1>Criar ou migrar seu <br/>e-commerce?</h1>
                </Enunciado>
            </Imagen>
            <ContenedorSlider>
                <Slider activo />
                <Slider />
                <Slider />
                <Slider />
            </ContenedorSlider>
        </ContenedorBanner>
    );
}

const ContenedorBanner = styled.div`
    width: 100%;
    height: 430px;
`;

const Imagen = styled.div`
    background-image: url(${ImageBanner});
    background-position: center;
    background-size: cover;
    width: 50%;
    height: 430px;
    margin: 0;
    position: absolute;
    z-index: 0;
    left: 759px;
    top: 80px;

    @media(max-width: 360px){
        position: absolute;
        z-index: 1;
        left: 0;
        top: 90px;
        width: 100%;
    }
`;

const Sombra = styled.div`
    width: 65.1%;
    height: 430px;
    margin: 0;
    position: absolute;
    z-index: 1;
    background-image: url(${SombraBanner});
    left: -153px;

    @media(max-width: 768px){
        display: none;
    }
`;

const Enunciado = styled.div`
    position: absolute;
    z-index: 2;
    left: 380px;
    top: 150px;
    width: 522px;
    height: 147px;
    display: ${(props) => props.ocultar ? 'none' : ''};

    @media(max-width: 360px){
        z-index: 1;
        left: 0;
        top: 0;
        display: ${(props) => props.ocultar ? 'flex' : 'none'};
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.55);
    }
`;

const ContenedorSlider = styled.div`
    width: 100px;
    height: 20px;
    position: absolute;
    z-index: 2;
    left: 760px;
    top: 470px;
    display: flex;
    justify-content: space-between;

    @media(max-width: 360px){
        z-index: 1;
        left: 140px;
        top: 490px;
        width: 20%;
        
    }
`;

const Slider = styled.div`
    background-color: ${(props) => props.activo ? '#F8475F' : '#BDBDBD'};
    width: 10px;
    height: 10px;
    border-radius: 50%;
`;

export default Banner;