import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <h1>Welcome to my portfolio</h1>
      <p>My name is Yenisbel, a frontend developer living in the Bay Area</p>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
    
  )
}

export default IndexPage
