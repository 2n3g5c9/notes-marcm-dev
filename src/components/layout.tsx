// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import { ThemeProvider } from '@context/themeContext'
import { Banner, NavBar, Footer } from '@components'
import { InferPropTypes } from '@shared/types'

const Layout = ({ children, data }: LayoutProps): ReactElement => (
  <ThemeProvider>
    <NavBar title={data.site.siteMetadata.title} />
    <Banner
      text={data.site.siteMetadata.banner.text}
      slug={data.site.siteMetadata.banner.slug}
    />
    <main className="max-w-full mx-auto overflow-hidden relative">
      <div className="max-w-6xl mx-auto my-7 sm:my-8 px-8 sm:px-12 xl:px-8">
        {children}
      </div>
    </main>
    <Footer
      author={data.site.siteMetadata.author}
      urls={data.site.siteMetadata.urls}
    />
  </ThemeProvider>
)

const MyLayout = ({ children }: ChildrenProps): ReactElement => (
  <StaticQuery
    query={layoutQuery}
    render={data => <Layout data={data} children={children} />}
  />
)

export default MyLayout

const childrenPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

type ChildrenProps = InferProps<typeof childrenPropTypes>

const layoutPropTypes = {
  children: childrenPropTypes.children,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        author: PropTypes.string,
        urls: PropTypes.objectOf(PropTypes.string),
        banner: PropTypes.shape({
          text: PropTypes.string,
          slug: PropTypes.string,
        }),
      }),
    }),
  }),
}

Layout.propTypes = layoutPropTypes

const layoutDefaultProps = {
  data: {
    site: {
      siteMetadata: {
        title: 'This is a default title',
        author: 'Default author',
        urls: {
          github: 'https://github.com/',
          keybase: 'https://keybase.io/',
          linkedIn: 'https://linkedin.com/',
        },
        banner: {
          text: 'This is a default text just to fill the space.',
          slug: '#',
        },
      },
    },
  },
}

Layout.defaultProps = layoutDefaultProps

type LayoutProps = InferPropTypes<
  typeof layoutPropTypes,
  typeof layoutDefaultProps
>

export const layoutQuery = graphql`
  query {
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
  }
`
