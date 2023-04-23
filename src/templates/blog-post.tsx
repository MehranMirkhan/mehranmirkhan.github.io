import * as React from "react";
import { Link, graphql } from "gatsby";

import { MainLayout } from "src/components/Layout";
import Element from "src/components/Element";

import "src/styles/markdown.scss";

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}: any) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  return (
    <MainLayout>
      <div className="flex flex-col gap-6 md:px-8 lg:px-24 py-6">
        <Element.Segment title={post.frontmatter.title}>
          <article className="blog" dangerouslySetInnerHTML={{ __html: post.html }}></article>
        </Element.Segment>
      </div>
      {/* <h1>Title: {post.frontmatter.title}</h1>
      <h1>Date: {post.frontmatter.date}</h1>
      <section
        dangerouslySetInnerHTML={{ __html: post.html }}
        itemProp="articleBody"
      /> */}
    </MainLayout>
    // <div>
    //   <article
    //     className="blog-post"
    //     itemScope
    //     itemType="http://schema.org/Article"
    //   >
    //     <header>
    //       <h1 itemProp="headline">{post.frontmatter.title}</h1>
    //       <p>{post.frontmatter.date}</p>
    //     </header>
    //     <section
    //       dangerouslySetInnerHTML={{ __html: post.html }}
    //       itemProp="articleBody"
    //     />
    //     <hr />
    //     <footer>{/* <Bio /> */}</footer>
    //   </article>
    //   <nav className="blog-post-nav">
    //     <ul
    //       style={{
    //         display: `flex`,
    //         flexWrap: `wrap`,
    //         justifyContent: `space-between`,
    //         listStyle: `none`,
    //         padding: 0,
    //       }}
    //     >
    //       <li>
    //         {previous && (
    //           <Link to={previous.fields.slug} rel="prev">
    //             ← {previous.frontmatter.title}
    //           </Link>
    //         )}
    //       </li>
    //       <li>
    //         {next && (
    //           <Link to={next.fields.slug} rel="next">
    //             {next.frontmatter.title} →
    //           </Link>
    //         )}
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
