import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import { InferPropTypes } from '@shared/types'

const NavMenuLink = ({ to, icon, text }: NavMenuLinkProps): ReactElement => (
  <Link
    to={to}
    className="block font-medium px-3 py-2 text-base hover:text-white"
    activeClassName="bg-accent block font-medium px-3 py-2 rounded text-base text-tertiary"
    aria-label={text}
  >
    {icon}&nbsp;&nbsp;{text}
  </Link>
)

export default NavMenuLink

const navMenuLinkPropTypes = {
  to: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
}

NavMenuLink.propTypes = navMenuLinkPropTypes

const navMenuLinkDefaultProps = {
  to: `#`,
  icon: `🟢`,
  text: `Placeholder`,
}

NavMenuLink.defaultProps = navMenuLinkDefaultProps

type NavMenuLinkProps = InferPropTypes<
  typeof navMenuLinkPropTypes,
  typeof navMenuLinkDefaultProps
>
