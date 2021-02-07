import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from './../components/Hero';

const IndexPage = () => (
  <Layout>
    <SEO title="Inicio" />
    <Hero></Hero>
  </Layout>
)

export default IndexPage
