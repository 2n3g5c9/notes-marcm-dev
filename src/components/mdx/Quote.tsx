import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import { CharacterSVG, QuoteSVG } from '@assets/images'

const Quote = ({ children }: QuoteProps): ReactElement => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 self-center mb-4">
        <CharacterSVG className="text-primary h-32 mr-10 sm:h-36 lg:mr-0" />
      </div>
      <div className="flex justify-center self-center md:flex-grow">
        <div>
          <QuoteSVG className="text-accent opacity-20 absolute transform h-9 w-9 -translate-x-6 -translate-y-1 sm:h-10 sm:w-10 sm:-translate-x-6 sm:-translate-y-2" />
          {children}
        </div>
      </div>
    </div>
  )
}

export default Quote

const quotePropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

Quote.propTypes = quotePropTypes

type QuoteProps = InferPropTypes<typeof quotePropTypes>
