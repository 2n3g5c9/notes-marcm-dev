const config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    siteUrl: config.siteUrl,
    description: config.siteDescription,
    author: config.name,
    email: config.email,
    githubUrl: config.githubUrl,
    keybaseUrl: config.keybaseUrl,
    linkedInUrl: config.linkedInUrl,
  },
  plugins: [
    // CSS
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        purgeOnly: ['src/styles/global.css'],
      },
    },
    // TypeScript
    `gatsby-plugin-typescript`,
    // Security
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: true,
        reportOnly: false,
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          'script-src': "'self' 'unsafe-inline'",
          'style-src': "'self' 'unsafe-inline'",
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha256',
        crossorigin: false,
      },
    },
    // Gatsby & React
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.name,
        short_name: config.name,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `src/images/icon.webp`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: config.siteUrl,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'home',
        path: `${__dirname}/content/home`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: [],
      },
    },
  ],
}
