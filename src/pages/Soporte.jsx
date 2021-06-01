import React from "react";
import "./Soporte.css";
import Boton from "../components/Boton/Boton";
import { useForm } from "react-hook-form";

export default function Soporte() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="main-ayuda">
          <h1>Soporte</h1>
        <div className="form-pic">
            <form onSubmit={handleSubmit(onSubmit)}>
             <div className="form-left">
              <h5>Nombre:</h5>
              <input
                type="text"
                name="full-w"
                id="name"
                {...register("name", { required: true })}
              />
              <h5>Email:</h5>
              <input
                type="email"
                name="full-w"
                id="email"
                {...register("email", { required: true })}
              />
              <h5>Tipo de soporte:</h5>
              <select
                name="full-w"
                id="select"
                {...register("type", { required: true })}
              >
                <option value="none">Seleccionar</option>
                <option value="soporte">Soporte</option>
                <option value="bug">Error de pagina</option>
                <option value="problema">Problema</option>
                <option value="orientacion">Orientaci&oacute;n</option>
              </select>
              <h5>Comentario:</h5>
              <textarea
                name="coment"
                id="coment"
                cols="60"
                rows="5"
                {...register("text", { required: true })}
              ></textarea>
              </div> 
              <div className="boton-login">
              <Boton type="submit" value="Enviar >" />
              </div> 
            </form>
     
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
      </div>
    </>
  );
}
