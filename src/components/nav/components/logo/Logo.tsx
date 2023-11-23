import "./logo.scss"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to="/">
      <div className="container-icon">
        <img className="logo" src="../../../../../public/logo/logo_tdt.png" alt="TDT" />
        <h1 className="logo-title">
          TDT
        </h1>
      </div>
    </Link>
  )
}

export default Logo