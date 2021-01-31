import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

const NavLink = ({ to, text }: NavLinkProps): ReactElement => {
  return (
    <Link
      to={to}
      className="font-medium text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md px-3 py-2"
      activeClassName="font-medium text-white text-sm bg-gray-900 rounded-md px-3 py-2"
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
