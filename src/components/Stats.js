import React from "react"
import styled from "styled-components"
import { HiChartBar } from "react-icons/hi"
import { HiOutlineSparkles } from "react-icons/hi"
import { HiLightBulb } from "react-icons/hi"
import { HiPuzzle } from "react-icons/hi"

const StatsData = [
  {
    icon: (
      <HiChartBar
        css={`
          color: #047bf1;
        `}
      />
    ),
    title: "Crecimiento",
    desc:
      "Nos interesa que tu negocio crezca, La cantidad estimada de usuarios que consumen todo tipo de productos y servicios mediante el Internet tuvo un aumento de un 45% en la ultima década, es fundamental poseer un sitio web atractivo y fluido para competir en el mercado. ",
  },
  {
    icon: (
      <HiOutlineSparkles
        css={`
          color: #f3a82e;
        `}
      />
    ),
    title: "Experiencia",
    desc:
      "Somos un grupo de profesionales orientados principalmente al diseño web y con una amplia experiencia en lo que hacemos. Todos nuestros proyectos son un desafío y un búsqueda continua de superar las expectativas de nuestros clientes",
  },
  {
    icon: (
      <HiLightBulb
        css={`
          color: #f34f2e;
        `}
      />
    ),
    title: "Creatividad",
    desc:
      "Cada proyecto web debe ser completamente diferente, transmitiendo los valores y las características de la marca en cuestión, de ahí que se valore tanto a la creatividad para obtener ideas innovadoras que resalten por encima del resto",
  },
  {
    icon: (
      <HiPuzzle
        css={`
          color: #3af576;
        `}
      />
    ),
    title: "Diferentes alternativas",
    desc:
      "Segun sus necesidades ofrecemos paquetes corporativos de Marketing Digital, incluyendo servicio especializado de publicidad en Google Adwords y Remarketing con asesoramiento personalizado, como también campañas de Email Marketing y publicidad en redes sociales, tanto Facebook como Instagram.",
  },
]
const Stats = () => {
  return (
    <StatsContainer>
        <TopLine>Misión</TopLine>
      <Heading>¿Quiénes Somos?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => {
          return (
            <StatsBox key={index}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
            </StatsBox>
          )
        })}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const StatsContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
`

const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`
const StatsBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`

const Title = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
`

const Description = styled.p`
`
