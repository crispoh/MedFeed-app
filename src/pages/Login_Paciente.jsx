import React from 'react';
import './Login_Medico_Paciente.css'
import {Link} from 'react-router-dom'
import Boton from '../components/Boton/Boton'

export default function Login_Paciente() {
    return (
        <>
            <div className="fondo-login">
                <div className="img-paciente"></div>
                    <div className="box-login">
                    <div className="titulo-login"> <h2>Paciente</h2> </div>
                    <form className="formulario-login">
                    <h6>Rut:</h6>
                    <input type="email" name="" />
                    <h6>Contrase&ntilde;a:</h6>
                    <input type="password" name="" />
                    </form>
                    <div className="boton-login"><Link to="/#"><Boton type="submit" value="Ingresar"/></Link></div>
                </div>
            </div>
        </>
    )
}