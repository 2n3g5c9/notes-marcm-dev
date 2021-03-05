import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { InferPropTypes } from '@shared/types'

const Banner = ({ text, shortText, slug }: BannerProps): ReactElement => {
  return (
    <div className="bg-accent relative">
      <div className="max-w-7xl mx-auto pl-8 sm:px-8 py-3">
        <div className="pr-16 sm:px-16 sm:text-center">
          <p className="font-medium text-sm sm:text-base text-tertiary">
            <Link to={slug} className="md:hidden">
              {shortText ? shortText : text}{' '}
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link to={slug} className="hidden md:inline">
              {text} <span aria-hidden="true">&rarr;</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner

const BannerPropTypes = {
  text: PropTypes.string,
  shortText: PropTypes.string,
  slug: PropTypes.string,
}

Banner.propTypes = BannerPropTypes

const BannerDefaultProps = {
  text: 'This is a default text just to fill the space.',
  slug: '#',
}

Banner.defaultProps = BannerDefaultProps

type BannerProps = InferPropTypes<
  typeof BannerPropTypes,
  typeof BannerDefaultProps
>
