import React, { useState, FormEvent, ChangeEvent } from "react";
import "../auth.scss";
import FormInputs from "../../../components/form/formInputs/FormInputs";

interface Values {
  email: string;
  password: string;
  nombre: string;
}

const Register: React.FC = () => {
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
    nombre: "",
  });

  const inputs = [
    {
      id: 1,
      name: "nombre",
      type: "nombre",
      placeholder: "Nombre",
      errorMessage: "",
      label: "Nombre",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Ingrese un email valido!",
      label: "Email",
      required: true,
    },

    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-form">
      <form onSubmit={handleSubmit}>
        <h4>Registrarse</h4>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name as keyof Values]}
            onChange={onChange}
          />
        ))}
        <button className="button-submit" type="submit">
          Iniciar sesion
        </button>
      </form>
    </div>
  );
};

export default Register;
