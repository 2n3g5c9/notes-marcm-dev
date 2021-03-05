import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import Confetti from 'react-dom-confetti'

import { useToggle } from '@hooks'
import { copyToClipboard } from '@shared/utils'
import { InferPropTypes } from '@shared/types'

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#DC3030', '#F6D001'],
}

const CopyButton = ({ text }: CopyButtonProps): ReactElement => {
  const [isCopied, setIsCopied] = useToggle(false)

  return (
    <button
      className="absolute bg-primary font-sans m-2 px-2 py-1 right-0 rounded select-none top-0"
      onClick={() => {
        copyToClipboard(text)
        setIsCopied()
        setTimeout(() => setIsCopied(), config.duration)
      }}
    >
      <Confetti active={isCopied} config={config} />
      {isCopied ? '🎉 Copied!' : 'Copy'}
    </button>
  )
}

export default CopyButton

const copyButtonPropTypes = {
  text: PropTypes.string,
}

CopyButton.propTypes = copyButtonPropTypes

const copyButtonDefaultProps = {
  text: 'There was nothing to copy.',
}

CopyButton.defaultProps = copyButtonDefaultProps

type CopyButtonProps = InferPropTypes<
  typeof copyButtonPropTypes,
  typeof copyButtonDefaultProps
>
