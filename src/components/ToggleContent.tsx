import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

import { useToggle } from '@hooks'

interface Props {
  text: string
  altText: string
  children: any // eslint-disable-line
}

const ToggleContent = ({ text, altText, children }: Props): ReactElement => {
  const [isToggled, setIsToggled] = useToggle(false)

  return (
    <>
      <button
        onClick={setIsToggled}
        className="text-primary text-sm sm:text-base"
      >
        {isToggled ? '▼' : '▶'}&nbsp;&nbsp;
        {isToggled && altText ? altText : text}
      </button>
      <div className={`${isToggled ? 'block' : 'hidden'}`}>{children}</div>
    </>
  )
}

ToggleContent.propTypes = {
  text: PropTypes.string.isRequired,
  altText: PropTypes.string,
  children: PropTypes.any.isRequired,
}

export default ToggleContent
