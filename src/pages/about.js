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
        volunteering in the community for youth education through Google CS First.
        To see what I've been up to lately, check-out my <a href="https://github.com/yenisbel" target="_blank" rel="noopener noreferrer">github</a> and <a href="https://docs.google.com/document/d/e/2PACX-1vT69srXo4B2BnMBDy2KW_CHGExlmbRWiTmx2RFz2Q_l4E0aXM5nveRc-IEDgKy-GxUOs_vLwFuS05t7/pub" target="_blank" rel="noopener noreferrer">resume</a>.
      </p>
      <p>Want to work together? <Link to="/contact">Reach out</Link></p>
    </Layout>
  )
}
export default AboutPage
