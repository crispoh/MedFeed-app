import React from "react";
import "./Login_Medico_Paciente.css";
import Boton from "../components/Boton/Boton";
import { useForm } from "react-hook-form";

export default function Login_Paciente() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="fondo-login">
        <div className="img-paciente"></div>
        <div className="box-login">
          <div className="titulo-login">
            <h2>Paciente</h2>
          </div>
          <form className="main-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="formulario-login">
              <h6>Rut:</h6>
              <input
                type="text"
                name="rut"
                id="rut"
                placeholder="12345678-k"
                {...register("rut", { required: true })}
              />
              <h6>Contrase&ntilde;a:</h6>
              <input
                type="password"
                name="pass"
                placeholder="**********"
                {...register("password", { required: true })}
              />
            </div>
            <div className="boton-login">
              <Boton type="submit" value="Ingresar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
