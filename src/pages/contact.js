import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <h1>Contact</h1>
      <p>
        This is the contact page where I can give you some comic reading
        recomendations.
      </p>
      <Link to="/">Go Home</Link>
    </Layout>
  )
}

export default Contact
