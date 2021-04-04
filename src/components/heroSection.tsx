import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import { ButtonLink } from '@components/atoms'
import { ButtonLeftSVG, ButtonRightSVG, ShapeSVG } from '@assets/images'

const HeroSection = ({ frontmatter }: HeroSectionProps): ReactElement => {
  const { title, subtitle } = frontmatter

  return (
    <div className="left-1/2 ml-50-screen -mt-8 px-4 sm:px-14 py-10 sm:py-14 lg:py-8 relative w-screen">
      <div className="content-center items-center m-auto flex max-w-6xl lg:w-full z-10">
        <div className="flex-grow max-w-4xl lg:max-w-2xl my-auto px-3 lg:py-12 lg:pl-8">
          <div className="sm:text-center lg:text-left">
            <div className="animate-fade-in-down">
              <h1 className="font-bold font-serif text-3xl sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="sm:max-w-xl mt-3 sm:mt-5 md:mt-5 sm:mx-auto lg:mx-0 text-base sm:text-lg text-secondary">
                {subtitle}
              </p>
            </div>
            <div className="sm:flex font-medium sm:justify-center lg:justify-start mt-7 sm:mt-8 sm:space-x-6 space-y-3 sm:space-y-0 text-base">
              <div className="relative">
                <ButtonLeftSVG className="absolute animate-left-splash h-5 left-0 -m-3 text-primary" />
                <ButtonLink text="Read the notes" slug="/notes" />
                <ButtonRightSVG className="absolute animate-right-splash h-5 -m-3 right-0 text-primary" />
              </div>
              <ButtonLink text="More about me" slug="/about" alt={true} />
            </div>
          </div>
        </div>
        <ShapeSVG className="hidden xlish:block pl-8 text-primary w-1/3" />
      </div>
    </div>
  )
}

export default HeroSection

const heroSectionPropTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }),
}

HeroSection.propTypes = heroSectionPropTypes

const heroSectionDefaultProps = {
  frontmatter: {
    title: 'This is a default title',
    subtitle: 'This is a default subtitle',
  },
}

HeroSection.defaultProps = heroSectionDefaultProps

type HeroSectionProps = InferPropTypes<
  typeof heroSectionPropTypes,
  typeof heroSectionDefaultProps
>
