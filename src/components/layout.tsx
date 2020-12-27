import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

import { NavBar } from '@components'

interface Props {
  children: any // eslint-disable-line
  siteMetadata: any // eslint-disable-line
}

const Layout = ({ children, siteMetadata }: Props): ReactElement => {
  return (
    <>
      <NavBar title={siteMetadata.title} />
      <div className="max-w-screen-lg mx-auto my-0 pt-0 px-4 pb-6">
        <main>{children}</main>
        <footer className="mt-8">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteMetadata: PropTypes.object.isRequired,
}

export default Layout
