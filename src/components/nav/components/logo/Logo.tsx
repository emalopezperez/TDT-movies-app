import "./logo.scss";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="container-icon">
        <img
          className="logo"
          src="https://res.cloudinary.com/dqgiva2nz/image/upload/v1701493700/logo_tdt_miwt6u.png"
          alt="TDT"
        />
        <h1 className="logo-title">TDT</h1>
      </div>
    </Link>
  );
};

export default Logo;
