import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from '@context/ThemeContext'
import { NavBar, Footer } from '@components'

interface Props {
  children: any // eslint-disable-line
  siteMetadata: any // eslint-disable-line
}

const Layout = ({ children, siteMetadata }: Props): ReactElement => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <ThemeProvider>
      <NavBar title={siteMetadata.title} />
      <main>{children}</main>
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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteMetadata: PropTypes.object.isRequired,
}

export default Layout
