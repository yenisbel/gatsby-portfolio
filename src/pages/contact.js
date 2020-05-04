import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import MyForm from "../components/myform"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>Contact me</h1>
      <p>The best way to reach me is via email at: <a href="mailto: yenisbelv@gmail.com" target="_blank" rel="noopener noreferrer">yenisbelv@gmail.com</a></p>
      <MyForm />
    </Layout>
    
  )
}

export default ContactPage