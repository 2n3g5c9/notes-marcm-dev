import React, { ReactElement } from 'react'
import PropTypes, { InferProps } from 'prop-types'

import { CopyButton } from '@components'
import Children from 'react-children-utilities'

const BlockQuote = ({ children }: BlockQuoteProps): ReactElement => (
  <div className="bg-secondary border-primary border-l-2 sm:border-l-4 font-mono inline-block my-2 px-4 py-3 relative text-secondary text-xs sm:text-sm sm:w-auto w-full">
    <div className="overflow-x-auto whitespace-pre">{children}</div>
    <CopyButton text={Children.onlyText(children)} />
  </div>
)

export default BlockQuote

const blockQuotePropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

BlockQuote.propTypes = blockQuotePropTypes

type BlockQuoteProps = InferProps<typeof blockQuotePropTypes>
