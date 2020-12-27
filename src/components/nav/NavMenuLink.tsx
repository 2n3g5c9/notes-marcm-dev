import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

interface Props {
  to: string
  text: string
}

const NavMenuLink = ({ to, text }: Props): ReactElement => {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
      activeClassName="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
      aria-label={text}
    >
      {text}
    </Link>
  )
}

NavMenuLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}

NavMenuLink.defaultProps = {
  to: `#`,
  text: `Placeholder`,
}

export default NavMenuLink
