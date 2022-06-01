import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from 'gatsby-plugin-image'

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="HomePage">
      <h1>HomePage</h1>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/image1.jpg"
      />
    </Layout>
  );
};

export default IndexPage;
