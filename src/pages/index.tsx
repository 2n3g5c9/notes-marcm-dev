import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import PropTypes, { InferProps } from 'prop-types'

import { HeroSection, Layout, SEO } from '@components'

const IndexPage = ({
  data: { md, latestNote },
}: IndexPageProps): ReactElement => (
  <Layout>
    <SEO title="Home" />
    <HeroSection
      title={md.frontmatter.title}
      subtitle={md.frontmatter.subtitle}
      latestNote={latestNote.edges[0].node}
    />
  </Layout>
)

const indexPagePropTypes = {
  data: PropTypes.shape({
    md: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
      }),
    }),
    latestNote: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            slug: PropTypes.string,
            frontmatter: PropTypes.objectOf(PropTypes.string),
          }),
        })
      ),
    }),
  }),
}

export default IndexPage

IndexPage.propTypes = indexPagePropTypes

type IndexPageProps = InferProps<typeof indexPagePropTypes>

export const pageQuery = graphql`
  query {
    md: markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      frontmatter {
        title
        subtitle
      }
    }
    latestNote: allMdx(
      filter: { fileAbsolutePath: { regex: "/content\/notes/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  }
`
