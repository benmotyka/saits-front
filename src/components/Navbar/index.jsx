import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./styles";

const navbarItems = [
  {
    href: "about",
    text: "O nas",
  },
  {
    href: "conference",
    text: "Konferencja",
  },
  {
    href: "projects",
    text: "Działalność",
  },
  {
    href: "contact",
    text: "Kontakt",
  },
];

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);

    return () => window.removeEventListener("scroll");
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo onClick={toggleHome}>
          <img src="img/logo.png" width="130px" alt="" />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          {navbarItems.map((item) => (
            <NavItem key={item.href}>
              <NavLinks
                to={item.href}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                {item.text}
              </NavLinks>
            </NavItem>
          ))}
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
