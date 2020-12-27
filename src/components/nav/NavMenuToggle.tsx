import React, { ReactElement } from 'react'

import { MenuOpenSVG, MenuCloseSVG } from '@images'
import PropTypes from 'prop-types'

interface Props {
  isToggled: boolean
  setIsToggled: any // eslint-disable-line
}

const NavMenuToggle = ({ isToggled, setIsToggled }: Props): ReactElement => (
  <div
    className="ml-3 -mr-2 flex sm:hidden"
    onClick={() => setIsToggled(!isToggled)}
  >
    <button
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-insest focus:ring-white"
      aria-expanded="false"
    >
      <span className="sr-only">Open menu</span>
      <MenuOpenSVG
        className={`${isToggled ? 'hidden' : 'block'} h-6 w-6`}
        aria-hidden={isToggled}
      />
      <MenuCloseSVG
        className={`${isToggled ? 'block' : 'hidden'} h-6 w-6`}
        aria-hidden={!isToggled}
      />
    </button>
  </div>
)

NavMenuToggle.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  setIsToggled: PropTypes.func.isRequired,
}

export default NavMenuToggle
