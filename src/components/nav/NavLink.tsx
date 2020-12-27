import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

interface Props {
  to: string
  text: string
}

const NavLink = ({ to, text }: Props): ReactElement => {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      activeClassName="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      aria-label={text}
    >
      {text}
    </Link>
  )
}

NavLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
}

NavLink.defaultProps = {
  to: `#`,
  text: `Placeholder`,
}

export default NavLink
