// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import 'fontsource-dm-sans/400.css'
import 'fontsource-dm-sans/500.css'
import 'fontsource-dm-sans/700.css'
import 'fontsource-dm-serif-display/400.css'
import 'fontsource-dm-mono/400.css'

import { ThemeProvider } from '@context/ThemeContext'
import { Banner, NavBar, Footer } from '@components'

const Layout = ({ children, siteMetadata }: LayoutProps): ReactElement => {
  return (
    <ThemeProvider>
      <NavBar title={siteMetadata.title} />
      <Banner text={siteMetadata.bannerText} />
      <main>
        <>{children}</>
      </main>
      <Footer
        author={siteMetadata.author}
        urls={{
          github: siteMetadata.githubUrl,
          keybase: siteMetadata.keybaseUrl,
          linkedIn: siteMetadata.linkedInUrl,
        }}
      />
    </ThemeProvider>
  )
}

export default Layout

const layoutPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  siteMetadata: PropTypes.objectOf(PropTypes.string).isRequired,
}

Layout.propTypes = layoutPropTypes

type LayoutProps = InferPropTypes<typeof layoutPropTypes>
