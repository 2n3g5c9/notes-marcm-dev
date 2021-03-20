import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import PropTypes, { InferProps } from 'prop-types'

import { HeroSection, Layout, SEO } from '@components'

const IndexPage = ({ data: { md } }: IndexPageProps): ReactElement => (
  <Layout>
    <SEO title="Home" />
    <HeroSection {...md} />
  </Layout>
)

const indexPagePropTypes = {
  data: PropTypes.shape({
    md: PropTypes.object,
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
        #        images {
        #          light {
        #            childImageSharp {
        #              gatsbyImageData(
        #                width: 365
        #                quality: 90
        #                placeholder: NONE
        #                formats: [AUTO, WEBP, AVIF]
        #              )
        #            }
        #          }
        #          dark {
        #            childImageSharp {
        #              gatsbyImageData(
        #                width: 365
        #                quality: 90
        #                placeholder: NONE
        #                formats: [AUTO, WEBP, AVIF]
        #              )
        #            }
        #          }
        #        }
      }
    }
  }
`
