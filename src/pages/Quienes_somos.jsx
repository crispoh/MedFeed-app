import React from "react";
import "./Quienes_somos_contacto.css";
import { Link } from "react-router-dom";
import Boton from "../components/Boton/Boton";

export default function Quienes_somos() {
  return (
    <div className="fondo-solid">
      <div className="up-contacto">
        <h1>Quienes somos</h1>
      </div>
      <div className="down-contacto">
        <div className="contact-text">
          Bienvenidos a MEDFEED somos una aplicación para gestionar procesos
          administrativos y documentación personal de toda persona que se
          encuentra ingresado en un recinto sanitario público, en el cual podrá
          hacer ingreso para consultar información en cualquier horario, tanto
          el profesional como el paciente. La aplicación web se encuentra
          habilitada para que los médicos simultáneamente puedan estar
          ingresando nuevos datos a la plataforma, durante el momento de la
          consulta o posterior a esta. De esta forma, se garantiza una base de
          datos ordenada y completa.
        </div>
        <div className="contact-text">
          <p id="pegado">Objetivo MedFeed</p>Mediante MedFeed el médico como
          principal objetivo podrá tener al alcance toda la información del
          historial clínico de los pacientes, a su vez tendrá acceso a otras
          áreas, como, por ejemplo, una guía farmacéutica especificada para
          calcular peso/dosis según requiera.
        </div>
        <div className="contact-text">
          Por otra parte, el paciente puede hacer ingreso mediante Rut y clave,
          donde encontrará su diagnóstico actualizado, receta médica otorgada,
          medicamentos y horarios de consumo.
        </div>
      </div>
      <div className="devolver">
        <Link to="/">
          <Boton type="submit" value="Volver al inicio >" />
        </Link>
      </div>
    </div>
  );
}
