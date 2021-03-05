import React, { ReactElement } from 'react'
import { Switch } from '@headlessui/react'

import { ThemeContext } from '@context/themeContext'
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
      className="bg-accent border-2 border-transparent cursor-pointer duration-200 ease-in-out flex-shrink-0 h-6 inline-flex focus:outline-none relative rounded-full transition-colors w-11"
    >
      <span className="sr-only">Toggle Dark Mode</span>
      <span
        className={`${
          theme === 'light' ? 'translate-x-5' : 'translate-x-0'
        } bg-white duration-200 ease-in-out inline-block h-5 relative ring-0 rounded-full shadow transform transition w-5`}
      >
        <span
          className={`${
            theme === 'light'
              ? 'duration-100 ease-out opacity-0'
              : 'duration-200 ease-in opacity-100'
          } absolute flex h-full inset-0 items-center justify-center transition-opacity w-full`}
          aria-hidden="true"
        >
          <MoonSVG className="h-3 text-accent w-3" />
        </span>
        <span
          className={`${
            theme === 'light'
              ? 'duration-200 ease-in opacity-100'
              : 'duration-100 ease-out opacity-0'
          } absolute flex h-full inset-0 items-center justify-center transition-opacity w-full`}
          aria-hidden="true"
        >
          <SunSVG className="h-3 text-accent w-3" />
        </span>
      </span>
    </Switch>
  )
}

export default NavDarkToggle
