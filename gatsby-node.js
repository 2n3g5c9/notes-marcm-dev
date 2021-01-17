const path = require('path')

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@assets/images': path.resolve(__dirname, 'src/assets/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  })

  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const about = await graphql(`
    query {
      mdx(fileAbsolutePath: { regex: "/about/" }) {
        frontmatter {
          slug
        }
      }
    }
  `)

  if (about.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  createPage({
    path: about.data.mdx.frontmatter.slug,
    component: path.resolve(`./src/layouts/about.tsx`),
  })
}
