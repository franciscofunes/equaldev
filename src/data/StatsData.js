import React from "react"
import { HiChartBar } from "react-icons/hi";
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