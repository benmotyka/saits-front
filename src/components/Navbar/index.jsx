import React from "react";
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from "./NavbarElements"

const Navbar = ({toggle}) => {

  return (
    <>
      <Nav>
        <NavbarContainer>
         {/* <NavLogo to="home">Saits</NavLogo> */}
         <NavLogo to="home"><img src="img/logo.png" width="130px"alt="" /></NavLogo>
          <MobileIcon onClick={toggle}>
              <FaBars/>
          </MobileIcon>
          <NavMenu>
              <NavItem>
                  <NavLinks to="about">O nas</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="conference">Konferencja</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="projects">Projekty</NavLinks>
              </NavItem>
              <NavItem>
                  <NavLinks to="gallery">Galeria</NavLinks>
              </NavItem>
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
