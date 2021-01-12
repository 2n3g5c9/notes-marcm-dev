import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { HeroSection, Layout, SEO } from '@components'

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
        author: string
        email: string
        banner: string
        githubUrl: string
        keybaseUrl: string
        linkedInUrl: string
      }
    }
    md: {
      frontmatter: {
        title: string
        subtitle: string
        hashtag: string
      }
    }
  }
}

const IndexPage = ({ data }: Props): ReactElement => (
  <Layout {...data.site}>
    <SEO title="Home" />
    <HeroSection {...data} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.objectOf(PropTypes.string),
    }),
    md: PropTypes.shape({
      frontmatter: PropTypes.objectOf(PropTypes.string),
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site: site {
      siteMetadata {
        title
        author
        email
        bannerText
        githubUrl
        keybaseUrl
        linkedInUrl
      }
    }
    md: markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      frontmatter {
        title
        subtitle
        hashtag
      }
    }
  }
`
