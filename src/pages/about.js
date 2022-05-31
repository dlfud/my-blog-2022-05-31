import React from "react"
import {Link} from 'gatsby'
import Layout from '../components/Layout'

function AboutPage(){
    return(
        <main>
            <titile>자기소개</titile>
            <h1>자기소개 페이지 입니다.</h1>
            <div >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/test">Test</Link>
            </div>
            
            <Layout pageTitle="About Me"></Layout>
        </main>
    );
}

export default AboutPage;