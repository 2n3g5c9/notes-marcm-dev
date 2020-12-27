import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { ReactElement } from 'react'

interface Props {
  siteTitle: string
}

const Header = ({ siteTitle }: Props): ReactElement => (
  <nav className="bg-purple-800 mb-6">
    <div className="max-w-screen-lg mx-auto my-0 px-4 py-6">
      <h1 className="m-0">
        <Link to="/" className="text-white no-underline">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
