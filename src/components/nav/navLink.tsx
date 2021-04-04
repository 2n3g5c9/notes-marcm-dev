import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { InferPropTypes } from '@shared/types'

const NavLink = ({ to, text }: NavLinkProps): ReactElement => (
  <Link
    to={to}
    className="font-medium mx-4 my-2 p-1 text-sm"
    activeClassName="border-b-2 border-accent"
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
