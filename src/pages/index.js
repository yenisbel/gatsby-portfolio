import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../styles/index.scss'
import Head from "../components/head"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Software Engineer</h1>
      <p>My name is Yenisbel, a software developer living in the Bay Area, 
        with experience in fullstack solutions and Apis integrations. 
        In my spare time I contribute to open source projects. To see what I've been 
        up to lately, check-out my <a href="https://github.com/yenisbel">github</a></p>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
    
  )
}

export default IndexPage
