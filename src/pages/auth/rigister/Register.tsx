import "../auth.scss";
import { useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FetchData } from "../../../services/fetchData";
import FormInputs from "../../../components/form/formInputs/FormInputs";
import { Fetch, Notify } from "../../../models/types";
import Notification from "../../../utilities/notifications/Notifications";
import Spinner from "../../../components/spinner/Spinner";

interface Values {
  email: string;
  password: string;
  nombre: string;
}

const API_URL = "https://api-movies-tdt.vercel.app/api/auth/signup";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [spinner, setSpinner] = useState(false);

  const [notify, setNotify] = useState<Notify>({
    menssage: "",
    status: false,
    success: true,
  });

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
      required: true,
    },
  ];

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSuccess = () => {
    setNotify({
      menssage: "Registrado",
      status: true,
      success: true,
    });

    setTimeout(() => {
      navigate("/auth/login");
    }, 900);
  };

  const handleError = (): void => {
    setNotify({
      menssage: "Error",
      status: true,
      success: false,
    });

    setTimeout(() => {
      setNotify({
        menssage: "",
        status: false,
        success: true,
      });
    }, 1000);
  };

  const handleAlways = () => {
    setSpinner(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpinner(true);

    const fetchOptions: Fetch = {
      type: "POST",
      url: API_URL,
      success: handleSuccess,
      error: handleError,
      always: handleAlways,
      body: values,
    };
    await FetchData.customFetch(fetchOptions);
  };

  return (
    <div className="container-form">
      <Spinner spinner={spinner} />
      <Notification notify={notify} />
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
        <button className="button-submit hover:bg-gray-100" type="submit">
          Registrarse
        </button>

        <Link className="text-white flex gap-5 mb-5" to="/auth/login">
          <span>Ya estas registrado ?</span>
          <button>Inisiar sesion</button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
