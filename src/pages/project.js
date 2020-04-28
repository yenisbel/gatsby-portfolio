import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import projectStyles from "./project.module.scss"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout> 
      <h1>Projects</h1>
      <ol className={projectStyles.projects}>
        {data.allMarkdownRemark.edges.map(project => {
          return(
            <li className={projectStyles.project}>
              <h2>
                <Link to={`project/${project.node.fields.slug}`}>
                  {project.node.frontmatter.title}
                </Link> 
              </h2>
              <p>Stack used: {project.node.frontmatter.stack}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default ProjectPage