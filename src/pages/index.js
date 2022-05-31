import { Link } from 'gatsby'
import React from "react"
import Layout from '../pages/Layout'


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home page???</title>
      <h1>Home Page!!!</h1>
      <div >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/test">Test</Link>
      </div>
      <Layout pageTitle="Home Page"></Layout>
    </main>
  )
}

export default IndexPage
