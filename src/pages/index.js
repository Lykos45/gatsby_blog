import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Welcome!</h1>
    <h2>My name is Carlos and this my blog!</h2>
    <p>
      This is my blog page that I created for practice and to use for future
      reference. I am a student at DCCCD and hope to become a frontend web
      developer. I also love collecting and reading comic books.
    </p>
    <p>
      Need a comic suggestion? <Link to="/contact">Click here!</Link>
    </p>
  </Layout>
)

export default IndexPage
