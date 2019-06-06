module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',

    `gatsby-plugin-react-helmet`
  ],
  siteMetadata: {
    title: "区块链 + 学分银行",
    description: `致力于教育产业链`,
    author: `@ZhangTao`
  },
  pathPrefix: "/scb-chain-intro"
};
