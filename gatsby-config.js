module.exports = {
  siteMetadata: {
    title: "mehranmirkhan",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-offline",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
