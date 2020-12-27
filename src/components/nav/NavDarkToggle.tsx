import React, { useState, ReactElement } from 'react'
import { Switch } from '@headlessui/react'

import { MoonSVG, SunSVG } from '@images'

const NavDarkToggle = (): ReactElement => {
  const [isLight, setIsLight] = useState(true)

  return (
    <Switch
      checked={isLight}
      onChange={setIsLight}
      className={`${
        isLight ? 'bg-yellow-500' : 'bg-purple-800'
      } relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none`}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`${
          isLight ? 'translate-x-5' : 'translate-x-0'
        } relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
      >
        <span
          className={`${
            isLight
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200'
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <MoonSVG className="h-3 w-3 text-purple-800" fill="currentColor" />
        </span>
        <span
          className={`${
            isLight
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100'
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <SunSVG className="h-3 w-3 text-yellow-500" fill="currentColor" />
        </span>
      </span>
    </Switch>
  )
}

export default NavDarkToggle
