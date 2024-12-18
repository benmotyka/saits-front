import React, { useState } from "react";
import { Button } from "../Button/styles";
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
} from "./styles";
import { ArrowForward, ArrowRight } from "../HeroSection/styles";
import { ArrowDown } from "../ArrowButtons/ArrowDown";
import { AiOutlineArrowDown as ArrowDownIcon } from "react-icons/ai";

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
                  <ArrowDown
                    to={to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    exact="true"
                    aria-label="Przewiń w dół do następnej sekcji"
                  >
                    <ArrowDownIcon></ArrowDownIcon>
                  </ArrowDown>
                  <Button
                    hidden={btnHidden}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    dark={darkText}
                    big="true"
                    fontbig="true"
                    onClick={() =>
                      window.open("https://konf.sasit.prz.edu.pl/")
                    }
                    aria-label="Przejdź do strony konferencji"
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
