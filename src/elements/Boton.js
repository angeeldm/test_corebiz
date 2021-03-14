import styled from "styled-components";

const Boton = styled.button`
    background-color: ${(props) => props.disabled ? '#333' : '#000'};
    color: #FFF;
    border: none;
    padding: ${(props) => props.venta ? '7px 25px' : '15px 40px'};
    border-radius: 5px;
    cursor: pointer;
    font-family: ${(props) => props.venta ? 'Nunito' : 'Lato'};
    font-weight: 700;
    font-size: ${(props) => props.venta ? '12px' : '14px'};
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media(min-width: 360px){
        dsiplay: ${(props) => props.venta ? 'block' : ''};
    }
`;

export default Boton;