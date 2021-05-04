import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome!</h1>
    <h2>My name is Carlos and this is my blog! I am also a frontend web developer.</h2>
    <p>Need a website? <Link to="/contact">Click here!</Link></p>
  </Layout>
)

export default IndexPage
