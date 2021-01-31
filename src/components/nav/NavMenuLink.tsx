import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

const NavMenuLink = ({ to, icon, text }: NavMenuLinkProps): ReactElement => {
  return (
    <Link
      to={to}
      className="font-medium text-base text-gray-300 hover:text-white hover:bg-gray-700 rounded-md block px-3 py-2"
      activeClassName="font-medium text-base text-white bg-gray-900 rounded-md block px-3 py-2"
      aria-label={text}
    >
      {icon}&nbsp;&nbsp;{text}
    </Link>
  )
}

export default NavMenuLink

const navMenuLinkPropTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
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
