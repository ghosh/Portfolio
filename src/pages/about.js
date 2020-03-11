import React from 'react'

import Layout from '@src/layouts/master'
import Container from '@core/Container'
import Header from '@mods/common/Header'

const NotFoundPage = () => (
  <Layout title="About">

    <Header />
    <Container>
      <h1>About</h1>
      <p>This si the abor age</p>
    </Container>
  </Layout>
)

export default NotFoundPage
