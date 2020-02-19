import React from "react"
import { Link } from "gatsby"

import Layout from "@src/layouts/master"
import Image from "@comps/image"

import Container from "@comps/core/Container"

const IndexPage = () => (
  <Layout title="Home">
    <Container>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/404/">Go to page 2</Link>
    </Container>
  </Layout>
)

export default IndexPage
