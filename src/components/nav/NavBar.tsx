import React, { ReactElement, useState } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'
import { Link } from 'gatsby'
import Hamburger from 'hamburger-react'

import { NavDarkToggle, NavLink, NavMenuLink } from '@components'
import { LogoSVG } from '@images'

const NavBar = ({ title }: NavBarProps): ReactElement => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" aria-label="Home" className="flex-shrink-0">
              <LogoSVG className="lg:block h-8 w-auto" alt={title} />
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to="/" text="Home" />
                <NavLink to="#" text="Notes (Coming Soon)" />
                <NavLink to="/about" text="About" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <NavDarkToggle />
            <div
              className={`${
                isToggled ? 'text-white' : 'text-gray-400'
              } ml-3 -mr-2 sm:hidden`}
            >
              <Hamburger
                rounded
                toggled={isToggled}
                toggle={setIsToggled}
                direction="right"
                size={20}
                label="Toggle menu"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`${isToggled ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavMenuLink to="/" icon="🏡" text="Home" />
          <NavMenuLink to="#" icon="📝" text="Notes (Coming Soon)" />
          <NavMenuLink to="/about" icon="👨🏻‍💻" text="About️" />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

const navBarPropTypes = {
  title: PropTypes.string,
}

NavBar.propTypes = navBarPropTypes

const navBarDefaultProps = {
  title: `Title`,
}

NavBar.defaultProps = navBarDefaultProps

type NavBarProps = InferPropTypes<
  typeof navBarPropTypes,
  typeof navBarDefaultProps
>
