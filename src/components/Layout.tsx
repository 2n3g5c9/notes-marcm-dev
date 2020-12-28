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
      <main>{children}</main>
      <footer className="mt-8">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  siteMetadata: PropTypes.object.isRequired,
}

export default Layout
