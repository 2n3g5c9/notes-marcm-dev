const config = require('./src/config')
const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: config.siteUrl,
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.name,
    email: config.email,
    urls: config.urls,
    banner: config.banner,
  },
  plugins: [
    // Gatsby & React
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.name,
        short_name: config.name,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1024,
              quality: 95,
              withWebp: true,
              withAvif: true,
            },
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: [{ regex: '^/notes/.+' }],
        height: 3,
        color: `#666666`,
      },
    },
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-preload-fonts`,
      options: {
        crossOrigin: `anonymous`,
      },
    },
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
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        backgroundColor: `transparent`,
        disableBgImageOnAlpha: true,
        linkImagesToOriginal: false,
      },
    },
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'home',
        path: `${__dirname}/content/home`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'about',
        path: `${__dirname}/content/about`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notes',
        path: `${__dirname}/content/notes`,
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
    // TypeScript
    `gatsby-plugin-typescript`,
    // CSS
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ['src/assets/css/global.css'],
        content: [
          path.join(process.cwd(), 'src/**/!(*.d).{js,ts,jsx,tsx,mdx}'),
        ],
        purgeCSSOptions: {
          safelist: [/bg-red-[5-70]0/, /text-red-[5-70]0/],
        },
      },
    },
    // Security
    {
      resolve: 'gatsby-plugin-sri',
      options: {
        hash: 'sha256',
        crossorigin: false,
      },
    },
    // Analytics
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-G11QYKS7W4', // Google Analytics
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          respectDNT: true,
        },
      },
    },
  ],
}
