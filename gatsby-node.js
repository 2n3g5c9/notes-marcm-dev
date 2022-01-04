const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@assets/images': path.resolve(__dirname, 'src/assets/images'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@context': path.resolve(__dirname, 'src/context'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
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

  // Generate /about page
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
    reporter.panicOnBuild('🚨 ERROR: Creating /about page', about.errors)
    return
  }

  createPage({
    path: about.data.mdx.frontmatter.slug,
    component: path.resolve('./src/templates/about.tsx'),
  })

  // Generate /notes/* pages
  const notes = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content\/notes/" } }
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (notes.errors) {
    reporter.panicOnBuild('🚨 ERROR: Creating /notes/* pages', notes.errors)
    return
  }

  notes.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: `/notes/${node.slug}`,
      component: path.resolve('./src/templates/note.tsx'),
      context: {
        slug: node.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'notes' })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
