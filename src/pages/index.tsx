import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Layout, Image, SEO } from '@components'

interface Props {
  data?: any // eslint-disable-line
}

const IndexPage = ({ data }: Props): ReactElement => (
  <Layout {...data.site}>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div className="max-w-xs mb-6">
      <Image />
    </div>
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
  }
`
