import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({data}) => {

  return (
  <Layout>
    <h1>anup's blog</h1>
    <h4>{data.allMarkdownRemark.totalCount}</h4>
    {
      data.allMarkdownRemark.edges.map(({node}) => {
        return (
          <div key={node.id}>
            <Link to={node.fields.slug} >
              <h1>
                {node.frontmatter.title}-{node.frontmatter.date}
              </h1>
            </Link>
            <p>{node.excerpt}</p>
          </div>
        )
      })
    }
  </Layout>
)}


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const query = graphql`
  query {
    allMarkdownRemark(sort:{fields:[frontmatter___date], order:DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
