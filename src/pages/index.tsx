// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import { HeroSection, Layout, SEO } from '@components'

const IndexPage = ({ data }: IndexPageProps): ReactElement => (
  <Layout {...data.site}>
    <SEO title="Home" />
    <HeroSection {...data} />
  </Layout>
)

const indexPagePropTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        urls: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
      }).isRequired,
    }),
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(PropTypes.object),
    }),
  }),
}

export default IndexPage

IndexPage.propTypes = indexPagePropTypes

type IndexPageProps = InferPropTypes<typeof indexPagePropTypes>

export const pageQuery = graphql`
  query {
    site: site {
      siteMetadata {
        title
        author
        email
        bannerText
        urls {
          github
          keybase
          linkedIn
        }
      }
    }
    md: markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      frontmatter {
        title
        subtitle
        images {
          light {
            childImageSharp {
              fixed(quality: 100, width: 365) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
          dark {
            childImageSharp {
              fixed(quality: 100, width: 365) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`
