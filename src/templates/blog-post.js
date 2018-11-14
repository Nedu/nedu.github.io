import React from 'react'
import Link from 'gatsby-link'
import '../styles/blog.css'
import "katex/dist/katex.min.css"

export default function Template({data}) {
    const post = data.markdownRemark 

    return (
        <div className="blogPage">
            <div className="blog">
                <Link to="/blog" className="skilltag demo">Go back</Link>
                <h1>{ post.frontmatter.title }</h1>
                <h4>Posted by { post.frontmatter.author } on { post.frontmatter.date }</h4>
                <hr />
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`