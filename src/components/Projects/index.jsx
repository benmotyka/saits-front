
import React from 'react'
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsLogo, ProjectsH2, ProjectsP} from "./ProjectsElements";
import { animateScroll as scroll } from 'react-scroll';
import { ArrowDown } from "../ArrowButtons/ArrowDown";
import { AiOutlineArrowDown as ArrowDownIcon } from "react-icons/ai";

const Projects = () => {

    const toogleFooter = () => {
        // eslint-disable-next-line no-restricted-globals
        scroll.scrollToBottom();
    }

    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Działalność</ProjectsH1>
            <ProjectsWrapper>
            <ProjectsCard onClick={() => window.open("https://www.saferinternet.pl/dbi/o-dbi.html")}>
                    <ProjectsLogo src="/img/project-safety-day.svg"/>
                    <ProjectsH2>Dzień bezpiecznego Internetu</ProjectsH2>
                    <ProjectsP>Co roku, 9 lutego, organizujemy spotkanie na którym omawiamy najważniejsze aspekty związane z tematem dnia</ProjectsP>
                </ProjectsCard>
                <ProjectsCard onClick={() => window.open("https://www.youtube.com/channel/UCoUdn059OkXrwJ8qHBlD9eA")}>
                    <ProjectsLogo src="/img/project-youtube-channel.svg"/>
                    <ProjectsH2>Kanał YouTube</ProjectsH2>
                    <ProjectsP>Prowadzimy również kanał na platformie YouTube, na którym reguralnie publikujemy nowe materiały związane z bezpieczeństwem w sieci</ProjectsP>
                </ProjectsCard>
                <ProjectsCard>
                    <ProjectsLogo src="/img/project-security.svg"/>
                    <ProjectsH2>Projekty edukacyjne</ProjectsH2>
                    <ProjectsP>Pomagamy osobom nie związanym w branżą w podnoszeniu kompetencji z szeroko pojętego bezpieczeństwa IT</ProjectsP>
                </ProjectsCard>
                
            </ProjectsWrapper>
            <ArrowDown
          onClick={toogleFooter}
          smooth={true}
          duration={500}
          offset={-80}
          spy={true}
          exact="true"
        >
          <ArrowDownIcon></ArrowDownIcon>
        </ArrowDown>
        </ProjectsContainer>
    )
}

export default Projects; 