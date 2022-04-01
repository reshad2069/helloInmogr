import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Typography } from "@mui/material"
import HelloInmogr from "../components/HelloInmogr"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HelloInmogr />
  </Layout>
)

export default IndexPage
