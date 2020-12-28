import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { HeroSection, Layout, SEO } from '@components'

interface Props {
  data?: any // eslint-disable-line
}

const IndexPage = ({ data }: Props): ReactElement => (
  <Layout {...data.site}>
    <SEO title="Home" />
    <HeroSection {...data} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site: site {
      siteMetadata {
        title
        author
        email
        githubUrl
        linkedInUrl
      }
    }
    home: markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
      html
      frontmatter {
        title
        hashtag
        subtitle
      }
    }
  }
`
