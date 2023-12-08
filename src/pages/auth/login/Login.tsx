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
import Notification from "../../../utilities/notifications/Notifications";
import { Notify } from "../../../models/types";

const API_URL = "https://api-movies-tdt.vercel.app/api/auth/login";

interface Values {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [notify, setNotify] = useState<Notify>({
    menssage: "",
    status: false,
    success: true,
  });
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
      required: true,
    },
  ];

  const handleSuccess = (response: ApiResponse) => {
    dispatch(createUser(response));

    setNotify({
      menssage: "Bienvenido",
      status: true,
      success: true,
    });
    navigate("/");
  };

  const handleError = (error: string): void => {
    setNotify({
      menssage: "Error!!!",
      status: true,
      success: false,
    });
    console.error(`Error fetching data: ${error}`);
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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="container-form ">
      <Notification notify={notify} />
      <Spinner spinner={spinner} />
      <form onSubmit={handleSubmit}>
        <header className="">
          <h4 className="font-bold text-3xl">Iniciar sesión</h4>
        </header>
        {inputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name as keyof Values]}
            onChange={onChange}
          />
        ))}
        <button className="button-submit hover:bg-gray-100" type="submit">
          Iniciar sesion
        </button>

        <Link className="text-white flex gap-5 mb-5" to="/auth/register">
          <span>Tienes cuenta ?</span>
          <button>Retgistrarse</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
