import React from 'react'
import {Link} from 'react-router-dom'
import './Inicio.css'
import Boton from '../components/Boton/Boton'

export default function home() {
    return (
        <>

        <div className="main-box">
            <div className="box1">
                <div className="box1-center">
                    <div className="box1-text">
                        <h1>MedFeed</h1>
                        <h5>Tu ficha medica online</h5>
                            <Link to="/quienes_somos"><Boton type="submit" value="M&aacute;s Informaci&oacute;n >" /></Link>             
                    </div>
                    <div className="box1-image"></div>
                </div>
            </div>
            <div className="box2">
                <div className="box2-image"></div>
                <div className="box2-text">
                        <h1>Ingresa como Paciente</h1>
                        <h5>Con el perfil dado por su médico ingrese y acceda a múltiples beneficios en la comodidad de su hogar, oficina o donde desee, beneficios como perfil médico, visualizar recetas médicas, resultados de exámenes digitales y agendar una nueva visita. Todo esto y mucho más 24/7 donde quieras!</h5>
                        <Link to="/login_paciente"><Boton type="submit" value="Ingresar >" /></Link>
                </div>
            </div>
            <div className="box3">
                <div className="box3-text">
                        <h1>Ingresa como Medico</h1>
                        <h5>Inscríbete como medico y genera tu propia base de datos con tus pacientes, en donde podrás tener comunicación, subir sus fichas, modificarlas y datos de cada paciente. ¡Además, con diferentes beneficios todo a un clic de distancia! </h5>
                        <Link to="/login_medico"><Boton type="submit" value="Ingresar >" /></Link>
                </div>
                <div className="box3-image"></div>
            </div>
        </div>
        </>
    )
}