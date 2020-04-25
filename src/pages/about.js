import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const AboutPage = () => {
  return(
    <div>
      <Header />
      <h1>About me</h1>
      <p>Passionate about back/front-end applications, living on the Bay Area. 
        Volunteering in community education through Google CS for youth</p>
      <p>Want to work with me? <Link to="/contact">Reach out</Link></p>
    </div>
  )
}
export default AboutPage
