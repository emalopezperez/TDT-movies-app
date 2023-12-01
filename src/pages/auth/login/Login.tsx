import "../auth.scss";
import { useState, ChangeEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../../redux/states/user";
import { FetchData } from "../../../services/fetchData";
import FormInputs from "../../../components/form/formInputs/FormInputs";
import Spinner from "../../../components/spinner/Spinner";
import { Fetch } from "../../../models/types";
import { ApiResponse } from "../../../models/users";

const API_URL = "https://api-movies-tdt.vercel.app/api/auth/login";

interface Values {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [spinner, setSpinner] = useState(false);
  const [values, setValues] = useState<Values>({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Ingrese un email valido!",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Las contraseñas no coinciden",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSuccess = (response: ApiResponse) => {
    setSpinner(true);

    dispatch(createUser(response));
    navigate("/");
  };

  const handleError = (error: string): void => {
    console.error(`Error fetching data: ${error}`);
  };

  const handleAlways = () => {
    setSpinner(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-form">
      <Spinner spinner={spinner} />
      <form onSubmit={handleSubmit}>
        <h4>Inicias sesion</h4>
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

        <Link to="/auth/register">
          <span>Tienes cuenta ?</span>
          <button>Retgistrarse</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
