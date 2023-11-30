import "./error.scss";
import { XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  menssage: string;
};

const Error: React.FC<Props> = ({ menssage }) => {
  return (
    <div className="error">
      <XMarkIcon className="error-icon" />
      <p>{menssage}</p>
    </div>
  );
};

export default Error;
