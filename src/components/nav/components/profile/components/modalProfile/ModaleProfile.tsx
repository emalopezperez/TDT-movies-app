import "./modalProfile.scss";
import { useSelector } from "react-redux";
import { AppStore } from "../../../../../../redux/store";
import { useDispatch } from "react-redux";
import { logout } from "../../../../../../redux/states/user";
import { useNavigate } from "react-router-dom";

interface Props {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalProfile: React.FC<Props> = ({ setOpenModal }) => {
  const userInfo = useSelector((store: AppStore) => store.user.info);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    setOpenModal(true);
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <div className="container-modal">
      <h4>{userInfo.email}</h4>
      <button onClick={handleLogout} className="logout">
        Cerrar sesión
      </button>
    </div>
  );
};

export default ModalProfile;
