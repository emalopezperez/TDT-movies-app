import "./sidebarMenu.scss";
import { useNavigate, Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import { useSelector, useDispatch } from "react-redux";
import { AppStore } from "../../../../redux/store";
import { logout } from "../../../../redux/states/user";

interface Props {
  toggleMenu: boolean;
  setToggleMenu: (toggleMenu: boolean) => void;
}

const SidebarMenu: React.FC<Props> = ({ setToggleMenu, toggleMenu }) => {
  const userInfo = useSelector((store: AppStore) => store.user.info);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth/login");
  };

  return (
    <aside className="sidebar">
      <header>
        <Logo />
        <XMarkIcon
          onClick={() => setToggleMenu(!toggleMenu)}
          className="icon-menu"
        />
      </header>
      <Menu />
      <div className="profile-info">
        <div className="user">
          <h4>{userInfo.email}</h4>

          <Link to="/user-profile" className="button-profile ">
            <img
              className=""
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span>Mi perfil</span>
          </Link>
        </div>
        <button onClick={handleLogout} className="logout">
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default SidebarMenu;
