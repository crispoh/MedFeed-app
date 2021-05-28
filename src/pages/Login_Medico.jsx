import React from 'react';
import './Login_Medico_Paciente.css'
import {Link} from 'react-router-dom'
import Boton from '../components/Boton/Boton'

export default function Login_Medico() {
    return (
        <>
        <div className="fondo-login">
                <div className="img-medico"></div>
                    <div className="box-login">
                    <div className="titulo-login"> <h2>Medico</h2> </div>
                        <form className="formulario-login">
                            <div className="text-login"> <h6>Email:</h6></div>
                            <input type="email" name="paciente@gmail.com" />
                            <div className="text-login"> <h6>Contrase&ntilde;a:</h6></div>
                            <input type="password" name="**********" />
                        </form>   
                    <div className="boton-login"><Link to="/#"><Boton type="submit" value="Ingresar"/></Link></div>
                </div>
            </div>
        </>
    )
}