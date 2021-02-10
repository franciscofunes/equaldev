module.exports = {
  siteMetadata: {
    title: `EqualDev - Diseño de Páginas web`,
    description: `Diseño y desarrollo de páginas webs, landing pages, ecommerce, Planes de Hosting Profesional para empresas y emprendedores, casillas de correo, alojamiento de páginas web, seguridad, confiabilidad. `,
    author: `@Equaldev`,
    social: [
      {
        url: "https://github.com/franciscofunes",
        name: "GitHub",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `video`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-theme-contact`,
      options: {
        contactPath: "/contact",
        successPath: "/thanks",
      },
    },
  ],
}
