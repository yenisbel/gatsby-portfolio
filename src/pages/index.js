import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../styles/index.scss'
import Head from "../components/head"
import indexStyles from "./index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <div className={indexStyles.container}>
      <div className={indexStyles.scroller}>
      <div className={indexStyles.inner}>
        <span>Welcome to</span>
        <span>Yenisbel's portfolio</span>
        <span>I'm a software engineer.</span>
        <span>My goal is to <a href="https://github.com/yenisbel" className={indexStyles.blue}>build</a> <a a href="https://github.com/yenisbel" className={indexStyles.blueb}>web-apps</a>.</span>
      </div>
      </div>
      </div>
    </Layout>
    
  )
}

export default IndexPage
