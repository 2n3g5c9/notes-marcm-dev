import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

const Banner = ({ text, shorttext }: BannerProps): ReactElement => {
  return (
    <div className="relative bg-accent">
      <div className="max-w-7xl mx-auto py-3 pl-8 sm:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-tertiary text-sm sm:text-base">
            <span className="md:hidden">{shorttext ? shorttext : text}</span>
            <span className="hidden md:inline">{text}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner

const BannerPropTypes = {
  text: PropTypes.string.isRequired,
  shorttext: PropTypes.string,
}

Banner.propTypes = BannerPropTypes

const BannerDefaultProps = {
  text: 'This is a default text just to fill the space.',
}

Banner.defaultProps = BannerDefaultProps

type BannerProps = InferPropTypes<
  typeof BannerPropTypes,
  typeof BannerDefaultProps
>
