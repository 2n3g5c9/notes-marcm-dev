import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

interface Props {
  children: any // eslint-disable-line
}

const BlockQuote = ({ children }: Props): ReactElement => {
  return (
    <div className="whitespace-pre inline-block my-2 px-4 py-3 rounded bg-secondary font-mono text-xs sm:text-sm text-secondary">
      {children}
    </div>
  )
}

BlockQuote.propTypes = {
  children: PropTypes.any.isRequired,
}

export default BlockQuote
