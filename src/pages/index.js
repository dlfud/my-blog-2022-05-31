import React from "react"
import {Link} from 'gatsby'
import Layout from '../pages/Layout'


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home page???</title>
      <h1>Home Page!!!</h1>
      <Link to="/about">About</Link>
      <Layout pageTitle="Home Page"></Layout>
    </main>
  )
}

export default IndexPage
