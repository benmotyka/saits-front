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

const projectsData = [
  {
    onClick: () => window.open("https://www.saferinternet.pl/dbi/o-dbi.html"),
    image: "/img/project-safety-day.svg",
    header: "Dzień bezpiecznego Internetu",
    description:
      "Co roku, 9 lutego, organizujemy spotkanie na którym omawiamy najważniejsze kwestie związane z tematem dnia",
  },
  {
    onClick: () =>
      window.open("https://www.youtube.com/channel/UCoUdn059OkXrwJ8qHBlD9eA"),
    image: "/img/project-youtube-channel.svg",
    header: "Kanał YouTube",
    description:
      "Prowadzimy kanał na platformie YouTube, na którym publikujemy nowe materiały związane z bezpieczeństwem w sieci",
  },
  {
    image: "/img/project-security.svg",
    header: "Projekty edukacyjne",
    description:
      "Pomagamy osobom nie związanym w branżą w podnoszeniu kompetencji z szeroko pojętego bezpieczeństwa IT",
  },
];
const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Działalność</ProjectsH1>
      <ProjectsWrapper>
        {projectsData.map((item) => (
          <Tilt className="Tilt" options={{ max: 10, scale: 1.05 }}>
            <ProjectsCard key={item.header} onClick={item.onClick}>
              <ProjectsLogo src={item.image} />
              <ProjectsH2>{item.header}</ProjectsH2>
              <ProjectsP>{item.description}</ProjectsP>
            </ProjectsCard>
          </Tilt>
        ))}
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
