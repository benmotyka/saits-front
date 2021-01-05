import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight} from "./HeroElements"
import {Button} from '../Button/ButtonElements'
const HeroSection = () => {

    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg type="video/mp4" muted autoPlay loop src="/video/hero-video2.mp4"/>

            </HeroBg>

            <HeroContent>
                <HeroP>Koło naukowe</HeroP>
                <HeroH1>Something about IT security</HeroH1>
                <HeroP>Politechniki Rzeszowskiej</HeroP>
                <HeroBtnWrapper>
                <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} smooth={true} duration={500} offset={-80} spy={true} exact="true" dark="true" big="true" fontbig="true" >
                        O nas
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
