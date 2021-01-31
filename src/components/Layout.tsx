// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import { ThemeProvider } from '@context/ThemeContext'
import { Banner, NavBar, Footer } from '@components'

// Serif font
import '@fontsource/playfair-display/700.css'

// Sans font
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'

// Mono font
import '@fontsource/dm-mono/400.css'

const Layout = ({ children, siteMetadata }: LayoutProps): ReactElement => {
  return (
    <ThemeProvider>
      <NavBar title={siteMetadata.title} />
      <main>
        <Banner text={siteMetadata.bannerText} />
        {children}
      </main>
      <Footer author={siteMetadata.author} urls={siteMetadata.urls} />
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
