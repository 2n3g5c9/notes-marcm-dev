import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { AboutSection, Layout, SEO } from '@components'

interface Props {
  data?: any // eslint-disable-line
}

const AboutPage = ({ data }: Props): ReactElement => (
  <Layout {...data.site}>
    <SEO title="About" />
    <AboutSection {...data} />
  </Layout>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site: site {
      siteMetadata {
        email
      }
    }
  }
`
