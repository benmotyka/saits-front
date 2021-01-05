import React from 'react'
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectsCard, ProjectsLogo, ProjectsH2, ProjectsP} from "./ProjectsElements"

const Projects = () => {
    return (
        <ProjectsContainer id="projects">
            <ProjectsH1>Działalność</ProjectsH1>
            <ProjectsWrapper>
            <ProjectsCard onClick={() => window.open("https://www.saferinternet.pl/dbi/o-dbi.html")}>
                    <ProjectsLogo src="/img/project-safety-day.svg"/>
                    <ProjectsH2>Dzień bezpiecznego Internetu</ProjectsH2>
                    <ProjectsP>Co roku, 9 lutego, organizujemy spotkanie na którym omawiamy najważniejsze aspekty związane z tematem dnia</ProjectsP>
                </ProjectsCard>
                <ProjectsCard onClick={() => window.open("https://youtube.com")}>
                    <ProjectsLogo src="/img/project-youtube-channel.svg"/>
                    <ProjectsH2>Kanał YouTube</ProjectsH2>
                    <ProjectsP>Prowadzimy również kanał na platformie YouTube, na który reguralnie publikujemy nowe materiały związane z bezpieczeństwem w sieci</ProjectsP>
                </ProjectsCard>
                <ProjectsCard onClick={() => window.open("https://pl.wikipedia.org/wiki/Projekt_socjalny")}>
                    <ProjectsLogo src="/img/project-security.svg"/>
                    <ProjectsH2>Projekt społeczny</ProjectsH2>
                    <ProjectsP>Pomagamy osobom nie związanym w branżą w podnoszeniu kompetencji z szeroko pojętego bezpieczeństwa IT</ProjectsP>
                </ProjectsCard>
                
            </ProjectsWrapper>
        </ProjectsContainer>
    )
}

export default Projects; 