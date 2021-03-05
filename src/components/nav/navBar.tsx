import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Hamburger from 'hamburger-react'

import { NavDarkToggle, NavLink, NavMenuLink } from '@components'
import { LogoSVG } from '@assets/images'
import { useToggle } from '@hooks'
import { InferPropTypes } from '@shared/types'

const NavBar = ({ title }: NavBarProps): ReactElement => {
  const [isToggled, setIsToggled] = useToggle(false)

  return (
    <nav className="bg-gray-800">
      <div className="max-w-6xl mx-auto px-4-safe sm:px-6-safe lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" aria-label="Home" className="flex-shrink-0">
              <LogoSVG className="lg:block h-8 w-auto" alt={title} />
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to="/" text="Home" />
                <NavLink to="/notes" text="Notes" />
                <NavLink to="/about" text="About" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <NavDarkToggle />
            <div
              className={`${
                isToggled ? 'text-white' : 'text-gray-400'
              } sm:hidden ml-3 -mr-2`}
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
          <NavMenuLink to="/notes" icon="📝" text="Notes" />
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
  title: 'This is a default title',
}

NavBar.defaultProps = navBarDefaultProps

type NavBarProps = InferPropTypes<
  typeof navBarPropTypes,
  typeof navBarDefaultProps
>
