import React from "react"
import styled from "styled-components"
import {Link} from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Equal</h1>
          <p>
            Brindamos un servicio confiable y aseguramos el éxito para tu
            empresa.
          </p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Accesos rápidos</FooterLinkTitle>
          <FooterLink to="/">Inicio</FooterLink>
          <FooterLink to="/">¿Quiénes Somos?</FooterLink>
          <FooterLink to="/">Diseño Web</FooterLink>
          <FooterLink to="/">Nuestros Clientes</FooterLink>
          <FooterLink to="/">Contacto</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>

      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Redes Sociales</FooterLinkTitle>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Linkedin</FooterLink>
          <FooterLink to="/">Pinterest</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>¡Contactanos!</FooterLinkTitle>
          <FooterLink to="/">Tel: +54 (011) 3112 – 7022</FooterLink>
          <FooterLink to="/">Mail: f.funes@bue.edu.ar</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`

padding:5rem calc((100vw - 1100px)/2);
display: grid;
grid-template-columns: repeat(2, 1fr);
color: #000;
background: #fafafb;
`

const FooterDesc = styled.div`

padding: 0 2rem;

h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
}

@media screen and (max-width: 400px) {
    padding: 1rem;
}


`

const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);

@media screen and (max-width: 820px){
    grid-template-column: 1fr;
}
`

const FooterLinkItems = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 1rem 2rem;

@media screen and (max-width:400px){
    padding: 1rem;
}
`

const FooterLinkTitle = styled.h2`

font-size: 14px;
margin-bottom: 16px;
`

const FooterLink = styled(Link)`
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;
color: #3d3d4e;
&:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
}

`




