import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return(
    <Layout>
      <h1>About me</h1>
      <p>Passionate about back/front-end applications, volunteering in the community for youth education through Google CS First</p>
      <p>Want to work together? <Link to="/contact">Reach out</Link></p>
    </Layout>
  )
}
export default AboutPage
