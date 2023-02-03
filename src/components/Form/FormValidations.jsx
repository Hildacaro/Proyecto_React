import React from "react";
import { useForm, Controller } from "react-hook-form";

import "./Form.css";

//Form Hilda
const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const customSubmit = (data) => {
    // console.log(data);
    alert("Validation exitosa");
  };

  return (
    <>
    

      <form onSubmit={handleSubmit(customSubmit)} className="form-react">
      <h2>Contáctanos</h2>
        <div className="form-control">
          <label>Nombre</label>
          <input
            type="text"
            {...register("name", {
              required: true,
              maxLength: 8,
            })}
          />
          {errors.name?.type === "required" && (
            <small className="fail">El campo no puede estar vacío</small>
          )}
          {errors.name?.type === "maxLength" && (
            <small className="fail">El máximo de caracateres es 8</small>
          )}
        </div>

        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
            })}
          />
          {errors.email?.type === "required" && (
            <small className="fail">El campo no puede estar vacío</small>
          )}
          {errors.email?.type === "pattern" && (
            <small className="fail">
              {" "}
              El correo solo puede contener letras, numeros, puntos, guiones y
              guion bajo.
            </small>
          )}
        </div>

        <div className="form-control">
          <label>Mensaje</label>
          <input
            type="text"
            {...register("message", {
              required: true,
              minLength: 5,
              maxLength: 200,
            })}
          />
          {errors.message?.type === "required" && (
            <small className="fail">El campo no puede estar vacío</small>
          )}
          {errors.message?.type === "minLength" && (
            <small className="fail">El mínimo de caracteres debe ser 5</small>
          )}
          {errors.message?.type === "maxLength" && (
            <small className="fail">El máximo de caracteres debe ser 200</small>
          )}
        </div>

        <div className="form-check form-switch">
          <label>Acepto término y condiciones</label>
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input className="form-check-input" type="checkbox" {...field} />
            )}
          />
        </div>

        <div className="form-check">
          <label>
            Acepta si quieres recibir noticias de nuestra Newletters
          </label>
          <Controller
            name="checkbox"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input className="form-check-input" type="checkbox" {...field} />
            )}
          />
        </div>

        <div className="form">
          <button type="submit">Send</button>
        </div>
      </form>
    </>
  );
};

export default FormValidation;
