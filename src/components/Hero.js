import React from "react"
import styled from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/video.mp4"

const Hero = () => {
  return (
    <HomeContainer>
      <HomeBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HomeBg>
      <HomeContent>
        <HomeItems>
          <HomeH1>DISEÑO WEB PREMIUM</HomeH1>
          <HomeP>Calidad y efectividad</HomeP>
          <Button primary="true" big="true" round="true" to="/servicios">
            Planes
          </Button>
        </HomeItems>
      </HomeContent>
    </HomeContainer>
  )
}

export default Hero

const HomeContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        regba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, regba(0, 0, 0, 0.2) 0%, transperent 100%);
  }
`

const HomeBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HomeContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const HomeItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
  font-weight: bold;
`

const HomeH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`

const HomeP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */ 
  letter-spacing: .15em; /* Adjust as needed */
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width:63%;
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: rgb(204,51,255);
    }
  }
`
