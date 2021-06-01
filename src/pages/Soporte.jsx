import React from "react";
import "./Soporte.css";
import { Link } from "react-router-dom";
import Boton from "../components/Boton/Boton";

export default function Soporte() {
  return (
    <>
      <div className="main-ayuda">
        <div className="main-title">
          <h1>Soporte</h1>
        </div>
        <div className="form-pic">
          <div className="form-left">
            <form>
              <div className="text-form">
                <h5>Nombre:</h5>
              </div>
              <input type="text" name="full-w" id="name" required />
              <div className="text-form">
                <h5>Email:</h5>
              </div>
              <input type="email" name="full-w" id="email" required />
              <div className="text-form">
                <h5>Tipo de soporte:</h5>
              </div>
              <select name="full-w" id="select" required>
                <option value="none" disabled>
                  Seleccionar
                </option>
                <option value="soporte">Soporte</option>
                <option value="bug">Error de pagina</option>
                <option value="problema">Problema</option>
                <option value="orientacion">Orientacion</option>
              </select>
              <div className="text-form">
                <h5>Comentario:</h5>
              </div>
              <textarea name="coment" id="coment" cols="60" rows="5"></textarea>
            </form>
          </div>
          <div className="right">
            <div className="text-right">
              <h3>
                Tienes problemas o quieres sugerir una idea? llena el formulario
                y responderemos lo antes posible.
              </h3>
            </div>
            <div className="right-pic"></div>
          </div>
        </div>
        <div className="main-title">
          <Link to="#">
            <Boton type="submit" value="Enviar >"/>
          </Link>
        </div>
      </div>
    </>
  );
}
