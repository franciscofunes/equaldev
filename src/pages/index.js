import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from './../components/Hero';
import Servicios from './../components/Servicios';
import Clientes from './../components/Clientes';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero></Hero>
    <Servicios heading="Elegí tu plan"></Servicios>
    <Clientes/>
  </Layout>
)

export default IndexPage
