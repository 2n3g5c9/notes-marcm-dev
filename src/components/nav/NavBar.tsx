import PropTypes from 'prop-types'
import React, { ReactElement, useState } from 'react'
import { Link } from 'gatsby'

import { NavDarkToggle, NavLink, NavMenuLink, NavMenuToggle } from '@components'
import { LogoSVG } from '@images'

interface Props {
  title: string
}

const NavBar = ({ title }: Props): ReactElement => {
  const [isToggled, setIsToggled] = useState(false)

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link to="/" aria-label="Home" className="flex-shrink-0">
              <LogoSVG className="lg:block h-8 w-auto" alt={title} />
            </Link>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <NavLink to="/" text="Home" />
                <NavLink to="#" text="Notes" />
                <NavLink to="#" text="About" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <NavDarkToggle />
            <NavMenuToggle isToggled={isToggled} setIsToggled={setIsToggled} />
          </div>
        </div>
      </div>
      <div className={`${isToggled ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavMenuLink to="/" icon="🏡" text="Home" />
          <NavMenuLink to="#" icon="📝" text="Notes" />
          <NavMenuLink to="#" icon="👨🏻‍💻" text="About️" />
        </div>
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  title: PropTypes.string,
}

NavBar.defaultProps = {
  title: `Title`,
}

export default NavBar
