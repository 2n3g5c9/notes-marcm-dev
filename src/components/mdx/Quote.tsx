import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import { CharacterSVG } from '@assets/images'

const Quote = ({ children }: QuoteProps): ReactElement => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 self-center mb-4">
        <CharacterSVG className="text-primary h-32 mr-10 sm:h-36 lg:mr-0" />
      </div>
      <div className="flex justify-center self-center md:flex-grow">
        <div>
          <svg
            className="text-accent opacity-20 absolute transform h-9 w-9 -translate-x-6 -translate-y-1 sm:h-10 sm:w-10 sm:-translate-x-6 sm:-translate-y-2"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
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
