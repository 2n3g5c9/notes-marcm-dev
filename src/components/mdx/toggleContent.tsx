import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

import { useToggle } from '@hooks'
import { InferPropTypes } from '@shared/types'

const ToggleContent = ({
  text,
  altText,
  children,
}: ToggleContentProps): ReactElement => {
  const [isToggled, setIsToggled] = useToggle(false)

  return (
    <>
      <button onClick={setIsToggled} className="text-left text-sm sm:text-base">
        {isToggled ? '🔽' : '▶️'}&nbsp;&nbsp;
        {isToggled && altText ? altText : text}
      </button>
      <div className={`${isToggled ? 'block' : 'hidden'}`}>
        <>{children}</>
      </div>
    </>
  )
}

export default ToggleContent

const toggleContentPropTypes = {
  text: PropTypes.string,
  altText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

ToggleContent.propTypes = toggleContentPropTypes

const toggleContentDefaultProps = {
  text: 'Show placeholder',
  altText: 'Hide placeholder',
}

ToggleContent.defaultProps = toggleContentDefaultProps

type ToggleContentProps = InferPropTypes<
  typeof toggleContentPropTypes,
  typeof toggleContentDefaultProps
>
