import "./menu.scss";
import { Link } from "react-router-dom";

interface MenuItem {
  name: string;
  href: string;
  current?: boolean;
}

const navigation: MenuItem[] = [
  { name: "Inicio", href: "/", current: true },
  { name: "Series", href: "/category/series", current: false },
  { name: "Peliculas", href: "/category/movies", current: false },
  { name: "Novedades", href: "/s", current: false },
];

const Menu = () => {
  return (
    <ul className="container-menu">
      {navigation.map((item) => (
        <li key={item.name}>
          <Link to={item.href} className={item.current ? "active" : ""}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
