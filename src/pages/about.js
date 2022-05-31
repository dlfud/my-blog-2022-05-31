import React from "react"
import {Link} from 'gatsby'
import Layout from '../pages/Layout'

function AboutPage(){
    return(
        <main>
            <titile>자기소개</titile>
            <h1>자기소개 페이지 입니다.</h1>
            <Link to="/">Back to Home</Link>
            <Layout pageTitle="About Me"></Layout>
        </main>
    );
}

export default AboutPage;