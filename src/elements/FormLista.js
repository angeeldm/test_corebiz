import styled, {css} from "styled-components";

const ContenedorFormulario = styled.div`
    margin: 0 auto;
    width: 100%;
    background-color: #F2F2F2;
    height: 146px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media(max-width: 360px){
        height: 276px;
    }

    h2{
        font-family: Lato;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: 22px;
        margin-bottom: 16px;
        text-align: center;
    }
`;

const Formulario = styled.form`
    display: flex;
    align-items: flex-start;

    @media(max-width: 360px){
        justify-content: center;
        flex-direction: column;
    }
`;

const BoxInput = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    h3{
        color: #000;
        font-family: Lato;
        font-weight: 700;
        font-size: 14px;
        line-height: 14px;
    }

    p{
        font-family: Lato;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        margin-bottom: 20px;
    }
`;

const Input = styled.input`
    padding: 15px 85px 15px 15px;
    border: none;
    border-radius: 5px;
    margin-right: 8px;
    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;

    ${props => props.valido === 'true' && css`
        border: 1px solid #BDBDBD;
    `}

    ${props => props.valido === 'false' && css`
        border: 1px solid #D7182A;
    `}

    @media(max-width: 360px){
        margin: 0 0 20px 0;
        width: 100%;
    }
`;

const Alerta = styled.p`
    margin: 0;
    color: #D7182A;
    font-size: 12px;
    font-family: Lato;
    font-weight: 400;
    display: none;

    ${props => props.alerta === 'false' && css`
        display: block;
    `}

    ${props => props.alerta === 'true' && css`
        display: none;
    `}
`;

export {ContenedorFormulario, Formulario, BoxInput, Input, Alerta};

