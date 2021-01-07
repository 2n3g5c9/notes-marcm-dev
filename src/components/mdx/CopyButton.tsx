// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

import { copyToClipboard } from '@shared'
import { InferPropTypes } from '@shared/types'

const CopyButton = ({ text }: CopyButtonProps): ReactElement => {
  const [isCopied, setIsCopied] = React.useState(false)

  return (
    <button
      className="absolute top-0 right-0 m-2 px-2 py-1 rounded bg-primary font-sans"
      onClick={() => {
        copyToClipboard(text)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 3000)
      }}
    >
      {isCopied ? '🎉 Copied!' : 'Copy'}
    </button>
  )
}

export default CopyButton

const copyButtonPropTypes = {
  text: PropTypes.string.isRequired,
}

copyButtonPropTypes.propTypes = copyButtonPropTypes

type CopyButtonProps = InferPropTypes<typeof copyButtonPropTypes>
