import React from "react";
import { graphql } from "gatsby";

import { MainLayout } from "src/components/Layout";
import Element from "src/components/Element";

export default ({ data, location }: any) => {
  const posts: any[] = []; //data.allMarkdownRemark.nodes;
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 md:px-8 lg:px-24 py-6">
        {posts.length === 0 ? <NoBlog /> : <BlogPosts posts={posts} />}
      </div>
    </MainLayout>
  );
};

export const NoBlog = () => (
  <Element.Segment>
    <h1>No blog posts yet...</h1>
  </Element.Segment>
);

export const BlogPosts = ({ posts }: { posts: any[] }) => (
  <div>
    {posts.map((post: any) => (
      <Element.Segment title={post.frontmatter.title}>
        <div className="text-center -translate-y-4 text-sm text-gray-500">
          {post.frontmatter.date}
        </div>
        {post.excerpt}
      </Element.Segment>
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
