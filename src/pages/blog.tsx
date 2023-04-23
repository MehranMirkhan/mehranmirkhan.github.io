import React from "react";
import { Link, graphql } from "gatsby";

import { MainLayout } from "src/components/Layout";
import Element from "src/components/Element";

export default ({ data }: any) => {
  const posts: any[] = data.allMarkdownRemark.nodes;
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 md:px-8 lg:px-24 py-6">
        {posts.length === 0 ? <NoBlog /> : <BlogPosts posts={posts} />}
      </div>
      {/* All the styles used in blog-post.tsx must be used here or else they won't work :| */}
      <div
        hidden
        className="mt-12 pl-4 pr-4 w-10 h-10 pl-0 border-2 rounded-lg shadow-lg hover:shadow-gray-500 py-1"
      />
    </MainLayout>
  );
};

export const NoBlog = () => (
  <Element.Segment>
    <h1>No blog posts yet...</h1>
  </Element.Segment>
);

export const BlogPosts = ({ posts }: { posts: any[] }) => (
  <>
    {posts
      .filter((post) => !post.frontmatter.hidden)
      .map((post: any, index) => (
        <Link key={index} to={`/blog${post.fields.slug}`}>
          <Element.Segment
            title={post.frontmatter.title}
            className="hover:shadow-gray-600"
          >
            <div className="text-center -translate-y-4 text-sm text-gray-500">
              {post.frontmatter.date}
            </div>
            <div>{post.excerpt}</div>
          </Element.Segment>
        </Link>
      ))}
  </>
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
          hidden
        }
      }
    }
  }
`;
