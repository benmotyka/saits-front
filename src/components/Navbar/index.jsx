import React, {useState, useEffect} from "react";
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from "./NavbarElements"
import {IconContext} from 'react-icons/lib'

const Navbar = ({toggle}) => {

const [scrollNav, setScrollNav] = useState(false);

const changeNav = () => {
  if(window.scrollY >= 80) {
    setScrollNav(true);
  }else{
    setScrollNav(false);
  }
}

useEffect(() => {
  window.addEventListener("scroll", changeNav);
}, [])

const toggleHome = () => {
  scroll.scrollToTop()
}
  return (
    <>

      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
         {/* <NavLogo to="home">Saits</NavLogo> */}
         <NavLogo onClick={toggleHome}><img src="img/logo.png" width="130px"alt="" /></NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars/>
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>O nas</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="conference" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Konferencja</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="projects" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Działalność</NavLinks>
              </NavItem>
              {/* <NavItem>
                  <NavLinks to="gallery">Galeria</NavLinks>
              </NavItem> */}
            </NavMenu>
            {/* <NavBtn>
                <NavBtnLink to ="/login">Logowanie</NavBtnLink>
            </NavBtn> */}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
