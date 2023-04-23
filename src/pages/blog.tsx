import React from "react";
import { graphql } from "gatsby";

import { MainLayout } from "src/components/Layout";
import Element from "src/components/Element";

export default ({ data, location }: any) => {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <MainLayout>
      {posts.length === 0 ? <NoBlog /> : <BlogPosts posts={posts} />}
    </MainLayout>
  );
};

export const NoBlog = () => (
  <Element.Segment>
    <h1>No blog posts yet...</h1>
  </Element.Segment>
);

export const BlogPosts = ({ posts }: any) => (
  <div>
    {posts.map((post: any) => (
      <Element.Segment>{JSON.stringify(post)}</Element.Segment>
    ))}
  </div>
);

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
