import React from 'react'

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = React.useState(initialValue)

  const toggle = React.useCallback(() => {
    setValue(v => !v)
  }, [])

  return [value, toggle]
}

export default useToggle
