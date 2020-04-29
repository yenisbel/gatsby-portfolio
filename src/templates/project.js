import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Head from "../components/head"
// template for apply on those pages of Projects

// rendering page after postdata

export const query = graphql`
  query($slug: String!){
    markdownRemark(fields: {slug: {eq: $slug } }) {
      frontmatter{
        title
        stack
      }
      html
    }
  }
`

const Project = (props) => {
  return (
    <Layout>
      <Head title={props.data.markdownRemark.frontmatter.title}/>
      <h2>{props.data.markdownRemark.frontmatter.title}</h2>
      <p>{props.data.markdownRemark.frontmatter.stack}</p>
      <div dangerouslySetInnerHTML = {{ __html: props.data.markdownRemark.html }}></div>
       
    </Layout>
  )
}
export default Project
