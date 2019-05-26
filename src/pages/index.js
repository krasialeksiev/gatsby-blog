import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby Blog.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/blog/">Go to Blog page</Link>
    <br />
    <Link to="/about/">Go to About page</Link>
    <br />
    <Link to="/contact/">Go to Contact page</Link>
  </Layout>
)

export default IndexPage
