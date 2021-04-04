import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Layout, SEO } from '@components'
import { NoteHeading, NoteBody } from '@components/atoms'
import { InferPropTypes } from '@shared/types'

const NoteLayout = ({ data: { site, mdx } }: NoteLayoutProps): ReactElement => {
  const { title, summary, category } = mdx.frontmatter

  return (
    <Layout {...site}>
      <SEO title={title} />
      <NoteHeading title={title} summary={summary} category={category} />
      <NoteBody>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </NoteBody>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    site: site {
      siteMetadata {
        title
        author
        urls {
          github
          keybase
          linkedIn
        }
        banner {
          text
          slug
        }
      }
    }
    mdx: mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        summary
        category
        date
      }
    }
  }
`

export default NoteLayout

const NoteLayoutPropTypes = {
  data: PropTypes.shape({
    site: PropTypes.object,
    mdx: PropTypes.shape({
      body: PropTypes.any,
      frontmatter: PropTypes.objectOf(PropTypes.string),
    }),
  }),
}

const NoteLayoutDefaultProps = {
  data: {
    site: {
      siteMetadata: {
        title: 'This is a default title',
        author: 'Default author',
        email: 'author@domain.com',
      },
    },
    mdx: {
      body: 'This is default body.',
      frontmatter: {
        title: 'This is a default title',
        summary: 'This is a default summary for a default article.',
        category: 'Default',
        slug: 'default',
      },
    },
  },
}

NoteLayout.defaultProps = NoteLayoutDefaultProps

type NoteLayoutProps = InferPropTypes<
  typeof NoteLayoutPropTypes,
  typeof NoteLayoutDefaultProps
>
