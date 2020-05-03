import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return(
    <Layout>
      <Head  title="About" />
      <h1>About me</h1>
      <p>My name is Yenisbel, a software developer living in the Bay Area, 
        with experience in fullstack solutions and Apis integrations. 
        In my spare time I contribute to open source projects, 
        volunteering in the community for youth education through Google CS First
        To see what I've been up to lately, check-out my <a href="https://github.com/yenisbel">github</a>.
      </p>
      <p>Want to work together? <Link to="/contact">Reach out</Link></p>
    </Layout>
  )
}
export default AboutPage
