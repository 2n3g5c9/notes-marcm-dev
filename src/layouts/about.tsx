import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout, SEO } from '@components'
import { InferPropTypes } from '@shared/types'

const AboutLayout = ({ data }: AboutLayoutProps): ReactElement => {
  return (
    <Layout siteMetadata={data.site.siteMetadata}>
      <SEO title="About" />
      <div className="max-w-full mx-auto relative overflow-hidden">
        <div className="max-w-6xl mx-auto my-7 px-8 flex items-center justify-between sm:my-8 sm:px-12 xl:px-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold leading-7 text-primary sm:text-3xl sm:truncate">
              {data.mdx.frontmatter.title}
            </h1>
          </div>
          <div className="flex">
            <a
              href={data.mdx.frontmatter.contact}
              className="m-auto inline-flex items-center px-3 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-tertiary bg-accent hover:bg-accent-hover sm:px-4 sm:py-2"
              aria-label="Get in touch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto my-6 px-8 sm:my-7 sm:px-12 xl:px-8">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
    </Layout>
  )
}

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
    site: PropTypes.shape({
      siteMetadata: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
    mdx: PropTypes.shape({
      body: PropTypes.any,
      frontmatter: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
}

const aboutLayoutDefaultProps = {
  data: {
    site: {
      siteMetadata: {
        title: 'Title',
        author: 'Author',
        email: 'author@domain.com',
        urls: {},
      },
    },
    mdx: {
      body: '',
      frontmatter: {
        title: 'Title',
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
