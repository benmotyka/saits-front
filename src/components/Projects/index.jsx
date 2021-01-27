import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsLogo,
  ProjectsH2,
  ProjectsP,
} from "./ProjectsElements";
import { ArrowDown } from "../ArrowButtons/ArrowDown";
import { AiOutlineArrowDown as ArrowDownIcon } from "react-icons/ai";

import Tilt from "react-tilt";

const Projects = () => {


  return (
    //needs code refactor
    <ProjectsContainer id="projects">
      <ProjectsH1>Działalność</ProjectsH1>

      <ProjectsWrapper>
        <Tilt className="Tilt" options={{ max: 10, scale: 1.05 }}>
          <ProjectsCard
            onClick={() =>
              window.open("https://www.saferinternet.pl/dbi/o-dbi.html")
            }
          >
            <ProjectsLogo src="/img/project-safety-day.svg" />
            <ProjectsH2>Dzień bezpiecznego Internetu</ProjectsH2>
            <ProjectsP>
              Co roku, 9 lutego, organizujemy spotkanie na którym omawiamy
              najważniejsze aspekty związane z tematem dnia
            </ProjectsP>
          </ProjectsCard>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 10, scale: 1.05 }}>
          <ProjectsCard
            onClick={() =>
              window.open(
                "https://www.youtube.com/channel/UCoUdn059OkXrwJ8qHBlD9eA"
              )
            }
          >
            <ProjectsLogo src="/img/project-youtube-channel.svg" />
            <ProjectsH2>Kanał YouTube</ProjectsH2>
            <ProjectsP>
              Prowadzimy również kanał na platformie YouTube, na którym
              reguralnie publikujemy nowe materiały związane z bezpieczeństwem w
              sieci
            </ProjectsP>
          </ProjectsCard>
        </Tilt>
        <Tilt className="Tilt" options={{ max: 10, scale: 1.05 }}>
          <ProjectsCard>
            <ProjectsLogo src="/img/project-security.svg" />
            <ProjectsH2>Projekty edukacyjne</ProjectsH2>
            <ProjectsP>
              Pomagamy osobom nie związanym w branżą w podnoszeniu kompetencji z
              szeroko pojętego bezpieczeństwa IT
            </ProjectsP>
          </ProjectsCard>
        </Tilt>
      </ProjectsWrapper>
      <ArrowDown
        to="contact"
        smooth={true}
        duration={500}
        offset={-80}
        spy={true}
        exact="true"
      >
        <ArrowDownIcon></ArrowDownIcon>
      </ArrowDown>
    </ProjectsContainer>
  );
};

export default Projects;
