import React, {useState} from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroP, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight } from "./HeroElements"
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
                <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} dark="true" big="true" fontBig="true" >
                        O nas {hover?<ArrowForward/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
