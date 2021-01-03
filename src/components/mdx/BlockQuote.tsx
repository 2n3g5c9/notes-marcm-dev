import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

const BlockQuote = ({ children }: BlockQuoteProps): ReactElement => {
  return (
    <div className="inline-block w-full sm:w-auto overflow-x-auto whitespace-pre my-2 px-4 py-3 border-l-2 sm:border-l-4 bg-secondary text-xs sm:text-sm text-secondary font-mono">
      <>{children}</>
    </div>
  )
}

export default BlockQuote

const blockQuotePropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

BlockQuote.propTypes = blockQuotePropTypes

type BlockQuoteProps = InferPropTypes<typeof blockQuotePropTypes>
