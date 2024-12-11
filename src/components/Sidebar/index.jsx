import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer
      isOpen={isOpen}
      onClick={toggle}
      aria-label="Menu nawigacyjne"
      aria-modal="true"
      role="dialog"
    >
      <Icon onClick={toggle} aria-label="Zamknij menu">
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu role="menu">
          <SidebarLink
            to="about"
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
            role="menuitem"
            aria-label="Przejdź do sekcji O nas"
          >
            O nas
          </SidebarLink>
          <SidebarLink
            to="conference"
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
            role="menuitem"
            aria-label="Przejdź do sekcji Konferencja"
          >
            Konferencja
          </SidebarLink>
          <SidebarLink
            to="projects"
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
            role="menuitem"
            aria-label="Przejdź do sekcji Działalność"
          >
            Działalność
          </SidebarLink>
          <SidebarLink
            to="contact"
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
            role="menuitem"
            aria-label="Przejdź do sekcji Kontakt"
          >
            Kontakt
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
