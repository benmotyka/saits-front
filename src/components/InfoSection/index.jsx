import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from "../Button/ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./InfoElements";
import { ArrowForward, ArrowRight } from "../HeroSection/HeroElements";

const InfoSection = ({
  dark,
  id,
  imgStart,
  topLine,
  headline,
  description,
  src,
  alt,
  buttonText,
  darkText,
  to,
  btnHidden,
  btnLink,
}) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <InfoContainer dark={dark} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine} </TopLine>
                <Heading dark={darkText}>{headline}</Heading>
                <Subtitle dark={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    hidden={btnHidden}
                    href={to}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    dark={dark}
                    big="true"
                    fontBig="true"
                    onClick={() => window.open("https://konf.sasit.prz.edu.pl/")}
                  >
                    {buttonText} {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={src} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
