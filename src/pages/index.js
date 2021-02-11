import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "./../components/Hero"
import Servicios from "./../components/Servicios"
import Clientes from "./../components/Clientes"
import Stats from "./../components/Stats"
import Form from "./../components/Form"



const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero></Hero>
    <Servicios heading="Elegí tu plan"></Servicios>
    <Stats/>
    <Clientes />
    <Form/>

  </Layout>
)

export default IndexPage
