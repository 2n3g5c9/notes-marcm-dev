// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

import { CopyButton } from '@components'
import { InferPropTypes } from '@shared/types'
import Children from 'react-children-utilities'

const BlockQuote = ({ children }: BlockQuoteProps): ReactElement => {
  return (
    <div className="relative inline-block w-full sm:w-auto overflow-x-auto whitespace-pre my-2 px-4 py-3 border-l-2 sm:border-l-4 bg-secondary text-xs sm:text-sm text-secondary font-mono">
      <CopyButton text={Children.onlyText(children)} />
      {children}
    </div>
  )
}

export default BlockQuote

const blockQuotePropTypes = {
  children: PropTypes.node.isRequired,
}

BlockQuote.propTypes = blockQuotePropTypes

type BlockQuoteProps = InferPropTypes<typeof blockQuotePropTypes>
