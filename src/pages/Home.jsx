import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Boton from "../components/Boton/Boton";

export default function home() {
  return (
    <div>
      <div className="mainfondo">
        <div className="fondo">
          <div className="up">
            <div className="logonombre"></div>
            <h1>Ingresar como:</h1>
          </div>
          <div className="down">
            <div className="medicoinicio">
              <div className="logomedico"></div>
              <Link to="/login_medico">
                <Boton type="submit" value="Medico" />
              </Link>
            </div>
            <div className="pacienteinicio">
              <div className="logopaciente"></div>
              <Link to="/login_paciente">
                <Boton type="submit" value="Paciente" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
