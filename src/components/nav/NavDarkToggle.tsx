import React, { ReactElement } from 'react'
import { Switch } from '@headlessui/react'

import { ThemeContext } from '@context/ThemeContext'
import { MoonSVG, SunSVG } from '@assets/images'

const NavDarkToggle = (): ReactElement => {
  const { theme, setTheme } = React.useContext(ThemeContext)

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <Switch
      checked={theme === 'light'}
      onChange={handleThemeToggle}
      className="bg-accent relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`${
          theme === 'light' ? 'translate-x-5' : 'translate-x-0'
        } relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200`}
      >
        <span
          className={`${
            theme === 'light'
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200'
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <MoonSVG className="h-3 w-3 text-accent" fill="currentColor" />
        </span>
        <span
          className={`${
            theme === 'light'
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100'
          } absolute inset-0 h-full w-full flex items-center justify-center transition-opacity`}
          aria-hidden="true"
        >
          <SunSVG className="h-3 w-3 text-accent" fill="currentColor" />
        </span>
      </span>
    </Switch>
  )
}

export default NavDarkToggle
