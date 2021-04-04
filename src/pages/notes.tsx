import React, { ReactElement } from 'react'
import { graphql } from 'gatsby'
import PropTypes, { InferProps } from 'prop-types'

import { Layout, NoteSummary, SEO } from '@components'
import { NotesHeading, NoteSummaries } from '@components/atoms'

const NotesPage = ({ data: { mdx } }: NotesPageProps): ReactElement => (
  <Layout>
    <SEO title="Notes" />
    <NotesHeading
      title="Notes 📝"
      subtitle="Things worth sharing with complete beginners."
    />
    <NoteSummaries>
      {mdx.edges.map(({ node }, id) => (
        <NoteSummary
          title={node.frontmatter.title}
          summary={node.frontmatter.summary}
          category={node.frontmatter.category}
          readingTime={node.fields.readingTime.text}
          slug={`/notes/${node.slug}`}
          key={id}
        />
      ))}
    </NoteSummaries>
  </Layout>
)

const NotePropTypes = PropTypes.shape({
  node: PropTypes.shape({
    slug: PropTypes.string,
    frontmatter: PropTypes.objectOf(PropTypes.string),
    fields: PropTypes.shape({
      readingTime: PropTypes.shape({
        text: PropTypes.string,
      }),
    }),
  }),
})

const NotesPagePropTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      edges: PropTypes.arrayOf(NotePropTypes),
    }),
  }),
}

export default NotesPage

NotesPage.propTypes = NotesPagePropTypes

type NotesPageProps = InferProps<typeof NotesPagePropTypes>

export const pageQuery = graphql`
  query {
    mdx: allMdx(
      filter: { fileAbsolutePath: { regex: "/notes/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          slug
          frontmatter {
            title
            summary
            category
            date
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
