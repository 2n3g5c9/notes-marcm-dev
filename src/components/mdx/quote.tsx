import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

import { InferPropTypes } from '@shared/types'
import { CharacterSVG, QuoteSVG } from '@assets/images'

const Quote = ({ children }: QuoteProps): ReactElement => {
  return (
    <div className="flex mt-6 sm:mt-7">
      <div className="flex-shrink-0 mb-0 sm:mb-4 self-center">
        <CharacterSVG className="h-32 sm:h-36 mr-10 lg:mr-0" />
      </div>
      <div className="flex md:flex-grow justify-center self-center">
        <div>
          <QuoteSVG className="absolute h-9 sm:h-10 opacity-20 transform -translate-x-6 -translate-y-1 sm:-translate-y-2 w-9 sm:w-10" />
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
