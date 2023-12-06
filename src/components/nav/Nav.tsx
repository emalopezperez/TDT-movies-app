import { useState, useEffect } from "react";
import "./nav.scss";
import Logo from "./components/logo/Logo";
import Menu from "./components/menu/Menu";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import SidebarMenu from "./components/sidebarMenu/SidebarMenu";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const openSidebarMenu = () => {
    setToggleMenu(true);
  };

  const closeSidebarMenu = () => {
    setToggleMenu(false);
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`container ${scrolled ? "scrolled" : ""}`}>
      <nav className="container-nav">
        <div className="container-navigation">
          <Logo />
          <Menu />
        </div>
        <Search />

        <Profile />
      </nav>

      <nav className="container-mobile">
        <Logo />
        <Search />

        {toggleMenu ? (
          <XMarkIcon onClick={closeSidebarMenu} className="icon-menu" />
        ) : (
          <Bars3Icon onClick={openSidebarMenu} className="icon-menu" />
        )}
      </nav>

      <div className={`sidebar-container ${toggleMenu ? "visible" : ""}`}>
        <SidebarMenu />
      </div>
    </header>
  );
};

export default Nav;
