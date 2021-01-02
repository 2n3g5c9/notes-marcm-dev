import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

const NavLink = ({ to, text }: NavLinkProps): ReactElement => {
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

export default NavLink

const navLinkPropTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

NavLink.propTypes = navLinkPropTypes

const navLinkDefaultProps = {
  to: `#`,
  text: `Placeholder`,
}

NavLink.defaultPropTypes = navLinkDefaultProps

type NavLinkProps = InferPropTypes<
  typeof navLinkPropTypes,
  typeof navLinkDefaultProps
>
