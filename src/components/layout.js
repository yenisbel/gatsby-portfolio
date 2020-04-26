import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = (props) => {
  return (
    <div>
      <Header/>
      <p>{props.children}</p>
      <Footer/>
    </div>
  )

}

export default Layout