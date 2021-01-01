// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { BlockQuote, Layout, SEO, ToggleContent } from '@components'
import PropTypes from 'prop-types'

const shortcodes = {
  BlockQuote,
  ToggleContent,

  // eslint-disable-next-line react/display-name
  h2: (props: any) => (
    <h2
      {...props}
      className="pt-2 sm:pt-4 text-xl font-bold leading-7 text-primary sm:text-2xl"
    />
  ),

  // eslint-disable-next-line react/display-name
  p: (props: any) => (
    <p {...props} className="my-3 text-primary text-sm sm:text-base" />
  ),

  // eslint-disable-next-line react/display-name
  inlineCode: (props: any) => (
    <code
      {...props}
      className="px-1.5 py-1 rounded bg-secondary text-secondary text-xs sm:text-sm"
    />
  ),
}

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
        author: string
        email: string
        githubUrl: string
        keybaseUrl: string
        linkedInUrl: string
      }
    }
    mdx: {
      body: any // eslint-disable-line
      frontmatter: {
        title: string
        contact: string
      }
    }
  }
}

const AboutLayout = ({ data }: Props) => {
  return (
    <Layout {...data.site}>
      <SEO title="About" />
      <div className="max-w-full mx-auto relative overflow-hidden">
        <div className="max-w-7xl mx-auto my-7 sm:my-8 px-8 flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-primary sm:text-3xl sm:truncate">
              {data.mdx.frontmatter.title}
            </h2>
          </div>
          <div className="flex">
            <a
              href={data.mdx.frontmatter.contact}
              className="m-auto inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-tertiary bg-accent hover:bg-accentHover"
              aria-label="Get in touch"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto my-6 sm:my-7 px-8">
          <MDXProvider components={shortcodes}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
      </div>
    </Layout>
  )
}

export default AboutLayout

AboutLayout.propTypes = {
  data: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query {
    site: site {
      siteMetadata {
        title
        author
        email
        githubUrl
        keybaseUrl
        linkedInUrl
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
