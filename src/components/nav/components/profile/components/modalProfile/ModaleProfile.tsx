import "./modalProfile.scss";
import { useSelector, useDispatch } from "react-redux";
import { AppStore } from "../../../../../../redux/store";
import { logout } from "../../../../../../redux/states/user";
import { useNavigate, Link } from "react-router-dom";

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
    <div className="modal bg-black/80">
      <h4>{userInfo.email}</h4>
      <Link
        className="btn-profile inset-0 bg-gray-500 bg-opacity-25 transition-opacity shadow-2xl"
        to="/user-profile">
        Mi perfil
      </Link>

      <button onClick={handleLogout} className="logout ">
        Cerrar sesión
      </button>
    </div>
  );
};

export default ModalProfile;
