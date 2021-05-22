// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'

const getInitialTheme = _ => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme')
    if (typeof storedPrefs === 'string') {
      return storedPrefs
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (userMedia.matches) {
      return 'light'
    }
  }

  return 'light'
}

export const ThemeContext = React.createContext<Partial<Props>>({})

export const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = React.useState(getInitialTheme)

  const rawSetTheme = colorTheme => {
    const root = window.document.documentElement
    const isDark = colorTheme === 'dark'

    root.classList.remove(isDark ? 'light' : 'dark')
    root.classList.add(colorTheme)

    localStorage.setItem('color-theme', colorTheme)
  }

  if (initialTheme) {
    rawSetTheme(initialTheme)
  }

  React.useEffect(
    _ => {
      rawSetTheme(theme)
    },
    [theme]
  )

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
