import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout, SEO } from '@components'
import { AboutHeading } from '@components/atoms'
import { InferPropTypes } from '@shared/types'

const AboutLayout = ({ data: { mdx } }: AboutLayoutProps): ReactElement => (
  <Layout>
    <SEO title="About" />
    <AboutHeading
      title={mdx.frontmatter.title}
      contactText="Get in touch"
      contactLink={mdx.frontmatter.contact}
    />
    <MDXRenderer>{mdx.body}</MDXRenderer>
  </Layout>
)

export const pageQuery = graphql`
  query {
    mdx: mdx(fileAbsolutePath: { regex: "/about/" }) {
      body
      frontmatter {
        title
        contact
      }
    }
  }
`

export default AboutLayout

const aboutLayoutPropTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.any,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        contact: PropTypes.string,
      }),
    }),
  }),
}

const aboutLayoutDefaultProps = {
  data: {
    mdx: {
      body: 'This is a default body.',
      frontmatter: {
        title: 'This is a default title',
        contact: '#',
      },
    },
  },
}

AboutLayout.defaultProps = aboutLayoutDefaultProps

type AboutLayoutProps = InferPropTypes<
  typeof aboutLayoutPropTypes,
  typeof aboutLayoutDefaultProps
>
