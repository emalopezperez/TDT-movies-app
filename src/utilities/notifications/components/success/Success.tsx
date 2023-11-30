import "./success.scss";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  menssage: string;
};

const Success: React.FC<Props> = ({ menssage }) => {
  return (
    <div className="success">
      <CheckCircleIcon className="icons" />
      <p>{menssage}</p>
    </div>
  );
};

export default Success;
