import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const ProjectPage = () => {
  const data = useStaticQuery(graphql`
    query{
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              stack
              title
            }
          }
        }
      }
    }
  `)

  return (
    <Layout> 
      <h1>Projects</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(project => {
          return(
            <li>
              <h2>{project.node.frontmatter.title}</h2>
              <p>Stack used: {project.node.frontmatter.stack}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectPage