import React, {useState} from 'react';
import {ContenedorFormulario, Formulario, BoxInput, Input, Alerta} from '../elements/FormLista';
import Boton from '../elements/Boton';


const Newsletter = () => {
    const [nombre, setNombre] = useState({campo: '', valido: null});
    const [email, setEmail] = useState({campo: '', valido: null});
    const [alerta, setAlerta] = useState('');
    const [btn, setBtn] = useState(true);
    const [validado, setValidado] = useState(false);

    const handleChange = e => {                     //RECIBIMOS EL CAMBIO EN EL INPUT Y LOS MOSTRAMOS EN PANTALLA
        if(e.target.name === 'nombre'){
            setNombre({campo: e.target.value});
        } else{
            setEmail({campo: e.target.value});
        }
    }

    const handleSubmit = async e => {               //FUNCION PARA ENVIAR LOS VALORES DEL INPUT AL API
        e.preventDefault();
        
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: 
                    JSON.stringify({
                        email: email.campo,
                        name: nombre.campo
                    }),  
            }
            console.log(config);

            const resp = await fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', config);
            const datajson = await resp.json();

            console.log(datajson);
        } catch (error) {
            console.log(error);
        }

        setNombre('');                      //RESETEAMOS LOS CAMPOS DEL INPUT LUEGO DE HACER EL ENVIO
        setEmail('');
        setValidado(true);
    }

    const validacion = () => {                      //FUNCIONES PARA VALIDAR LOS INPUTS
        const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;              //CORROBORA QUE SEA UN MAIL EL ESCRITO EN EL CAMPO
        
        if(expresionRegular.test(email.campo)){
            setEmail({...email, valido: 'true'})
            setAlerta('true');
        } else {
            setEmail({...email, valido: 'false'});
            setAlerta('false');
        }

        if(nombre.campo === '') {
            setNombre({...nombre, valido: 'false'});
            setAlerta('false');
        } else {
            setNombre({...nombre, valido: 'true'});
            setAlerta('true');
        }

        if(nombre.valido === 'true' && email.valido === 'true'){
           setBtn(false);
        }
    }

    

    if(validado === false){
        return (
            <ContenedorFormulario>
                <h2>Participe de nossas news com promoções e novidades!</h2>
                    <Formulario onSubmit={handleSubmit}>
                        <BoxInput>
                            <Input type="text" name="nombre" placeholder="Digite seu nome" value={nombre.campo} onChange={handleChange} onKeyUp={validacion} onBlur={validacion} valido={nombre.valido}/>
                            <Alerta alerta={alerta}>Preencha com seu nome completo</Alerta>
                        </BoxInput>
                        <BoxInput>
                            <Input type="email" name="email" placeholder="Digite seu email" value={email.campo} onChange={handleChange} onKeyUp={validacion} onBlur={validacion} valido={email.valido}/>
                            <Alerta alerta={alerta}>Preencha com um e-mail válido</Alerta>
                        </BoxInput>
                        <Boton disabled={btn}>Eu quero!</Boton>
                    </Formulario>
            </ContenedorFormulario>
        );
    } else{
        return(
            <ContenedorFormulario>
                <BoxInput>
                    <h3>Seu e-mail foi cadastrado com sucesso!</h3>
                    <p>A partir de agora você receberá as novidade e ofertas exclusivas.</p>
                    <Boton onClick={() => setValidado(false)}>Cadastrar novo e-mail</Boton>
                </BoxInput>
            </ContenedorFormulario>
        );
    }
}
 
export default Newsletter;