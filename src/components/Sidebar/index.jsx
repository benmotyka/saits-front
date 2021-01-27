import React from "react";
// import { IconBase } from 'react-icons/lib'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" spy={true} exact="true" offset={-80} onClick={toggle}>
            O nas
          </SidebarLink>
          <SidebarLink
            to="conference"
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Konferencja
          </SidebarLink>
          <SidebarLink
            to="projects"
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Działalność
          </SidebarLink>
          <SidebarLink
            to="contact"
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Kontakt
          </SidebarLink>
          {/* <SidebarLink to="gallery" onClick={toggle}>
                        Galeria
                    </SidebarLink> */}
        </SidebarMenu>
        {/* <SideBtnWrap>
                        <SidebarRoute to="/login">
                            Logowanie
                        </SidebarRoute>
                    </SideBtnWrap> */}
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
