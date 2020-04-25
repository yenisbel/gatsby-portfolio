import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

const IndexPage = () => {
  return(
    <div>
      <Header />
      <h1>Welcome to my portfolio</h1>
      <p>My name is Yenisbel, a frontend developer</p>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
      <Footer/>
    </div>
  )
}

export default IndexPage
