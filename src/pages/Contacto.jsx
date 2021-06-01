import React from "react";
import "./Quienes_somos_contacto.css";
import { Link } from "react-router-dom";
import Boton from "../components/Boton/Boton";

export default function Contacto() {
  return (
    <div className="fondo-solid">
      <div className="up-contacto">
        <h1>Contacto</h1>
      </div>
      <div className="down-contacto">
        <div className="contact-text">
          En MEDFEED estamos interesados en conocer tus experiencias al utilizar
          nuestra plataforma, además de recibir sugerencias y/o reclamos.
          Contamos con la opción de un formulario donde podrás completar con tus
          datos y el tipo de mensaje que deseas enviar.
        </div>
        <div className="contact-text">
          <p id="pegado">Página Web</p>
          Completa con tus datos en el <a href="/ayuda">formulario</a>
        </div>
        <div className="contact-text">
          Todos los reclamos son asociados al cumplimiento de los derechos de
          los pacientes según la Ley Número 20.584, y la respuesta a los mismos
          se entrega en un plazo de 15 días hábiles, contando desde el primer
          día hábil siguiente a su recepción.
        </div>
      </div>
      <div className="devolver">
        <Link to="/">
          <Boton type="submit" value="Ir al inicio >" />
        </Link>
      </div>
    </div>
  );
}
