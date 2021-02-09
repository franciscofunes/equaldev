import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"

const Clientes = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-1", "testimonial-2"] }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <div>
      <ClientesContainer>
        <TopLine>Clientes</TopLine>
        <Description>Los Testimonios de nuestros clientes</Description>
        <ContentWrapper>
          <ColumnOne>
            <Testimonial>
              <IoMdCheckmarkCircleOutline css={`color: rgb(204,51,255); font-size:2rem; margin-bottom:1rem`} />
              <h3>Flavia</h3>
              <cite>
                {""}
                "Creativos que supieron captar perfectamente la idea de lo que queríamos hacer. Intuitivos porque con una idea que les trasladamos supieron ampliar y trasladar al trabajo que han desempeñado. <br></br><br></br>
                Hablan algo y escuchan mucho. Nosotros estamos contentos con Distintiva porque les consideramos unos buenos profesionales"
              </cite>
            </Testimonial>
            <Testimonial>
              <FaRegLightbulb css={`color: orange; font-size:2rem; margin-bottom:1rem`}/>
              <h3>Rodolfo</h3>
              <cite>
                "El diseño se ajusta totalmente a lo que buscamos. Una imagen atractiva y limpia en un diseño funcional, cómodo e intuitivo. Todo con una atención personalizada gracias a la cual se han podido entender las necesidades de mi despacho."
              </cite>
            </Testimonial>
          </ColumnOne>
          <ColumnTwo>
            {data.allFile.edges.map((image, key) => (
              <Images key={key} fluid={image.node.childImageSharp.fluid} />
            ))}
          </ColumnTwo>
        </ContentWrapper>
      </ClientesContainer>
    </div>
  )
}

export default Clientes

const ClientesContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
  height: 100%;
`

const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`

const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }
  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 10px;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  border-radius: 10px;
  height: 100%;
`
