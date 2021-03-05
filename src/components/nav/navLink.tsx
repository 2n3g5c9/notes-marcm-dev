import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { InferPropTypes } from '@shared/types'

const NavLink = ({ to, text }: NavLinkProps): ReactElement => (
  <Link
    to={to}
    className="hover:bg-gray-700 font-medium px-3 py-2 text-sm text-gray-300 hover:text-white rounded-md"
    activeClassName="bg-gray-900 font-medium px-3 py-2 text-sm text-white rounded-md"
    aria-label={text}
  >
    {text}
  </Link>
)

export default NavLink

const navLinkPropTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
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
