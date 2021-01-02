import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

interface Props {
  children: any // eslint-disable-line
}

const BlockQuote = ({ children }: Props): ReactElement => {
  return (
    <div className="inline-block whitespace-pre my-2 px-4 py-3 border-l-2 sm:border-l-4 bg-secondary text-xs sm:text-sm text-secondary font-mono">
      {children}
    </div>
  )
}

BlockQuote.propTypes = {
  children: PropTypes.any.isRequired,
}

export default BlockQuote
