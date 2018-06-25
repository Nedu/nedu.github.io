import React from 'react'
import Link from 'gatsby-link'
import '../styles/blog.css'

const BlogPage = ({data}) => (
  <div className="blogPage">
    <div className="blog">
        {data.allMarkdownRemark.edges.map(post => (
            <div key={ post.node.id } className="blogPost">
                <h3>{ post.node.frontmatter.title }</h3>
                <small>Posted by { post.node.frontmatter.author } on { post.node.frontmatter.date }</small>
                <hr />
                <p>{post.node.excerpt}</p>
                <Link className="skilltag demo" to={post.node.frontmatter.path}>Read More</Link>
            </div>
        ))}
    </div>
  </div>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    excerpt(pruneLength: 100)
                    id
                    frontmatter {
                        path
                        title
                        date
                        author
                    }
                }
            }
        }
    }
`

export default BlogPage
