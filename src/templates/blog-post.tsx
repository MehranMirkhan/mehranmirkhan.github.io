import * as React from "react";
import { Link, graphql } from "gatsby";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import { MainLayout } from "src/components/Layout";
import Element from "src/components/Element";

import "src/styles/markdown.scss";

const BlogPostTemplate = ({
  data: { previous, next, markdownRemark: post },
}: any) => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-6 md:px-8 lg:px-24 py-6">
        <Element.Segment title={post.frontmatter.title}>
          <div className="text-center -translate-y-4 text-gray-500 text-lg">
            {post.frontmatter.description}
          </div>
          <div className="text-center -translate-y-4 text-gray-500 text-sm">
            {post.frontmatter.date}
          </div>
          <article
            className="blog"
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <footer className="flex justify-between mt-12">
            {!!previous && !previous.frontmatter.hidden ? (
              <BlogLink post={previous} leftArrow />
            ) : (
              <div />
            )}
            {!!next && !next.frontmatter.hidden ? (
              <BlogLink post={next} rightArrow />
            ) : (
              <div />
            )}
          </footer>
        </Element.Segment>
      </div>
    </MainLayout>
  );
};

const BlogLink = ({
  post,
  leftArrow = false,
  rightArrow = false,
}: {
  post: any;
  leftArrow?: boolean;
  rightArrow?: boolean;
}) => (
  <Link to={`/blog${post.fields.slug}`}>
    <div className="flex items-center border-2 rounded-lg shadow-lg hover:shadow-gray-500 py-1">
      {leftArrow && <ChevronLeftIcon className="w-10 h-10 pl-0" />}
      <div className={`${!leftArrow && "pl-4"} ${!rightArrow && "pr-4"}`}>
        {post.frontmatter.title}
      </div>
      {rightArrow && <ChevronRightIcon className="w-10 h-10 pl-0" />}
    </div>
  </Link>
);

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
      excerpt(pruneLength: 500)
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
        hidden
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        hidden
      }
    }
  }
`;
