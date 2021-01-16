import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import { NotesSVG } from '@components'

const HeroSection = ({ md }: HeroSectionProps): ReactElement => {
  const { title, subtitle } = md.frontmatter

  return (
    <div className="bg-hero bg-secondary max-w-full px-4 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto pb-5 relative overflow-hidden">
        <div className="flex content-center max-w-6xl relative z-10 lg:max-w-3xl lg:w-full">
          <div className="flex-grow px-4 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-normal text-primary font-serif sm:text-5xl md:text-6xl">
                <span className="inline">{title}&nbsp;</span>
              </h1>
              <p className="mt-3 text-base text-secondary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {subtitle}
              </p>
              <div className="text-base font-medium mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="#"
                    className="w-full flex items-center justify-center border border-transparent rounded-md text-tertiary bg-accent hover:bg-accentHover px-8 py-3 md:py-3.5 md:text-lg"
                  >
                    Read the notes
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center border border-transparent rounded-md text-accentDark bg-accentLight hover:bg-accentLightHover px-8 py-3 md:py-3.5 md:text-lg"
                  >
                    More about me
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none w-8 hidden xl:block">
            <NotesSVG />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

const heroSectionPropTypes = {
  md: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

HeroSection.propTypes = heroSectionPropTypes

const heroSectionDefaultProps = {
  md: {
    frontmatter: {
      title: 'Title',
      subtitle: 'Subtitle',
    },
  },
}

HeroSection.defaultProps = heroSectionDefaultProps

type HeroSectionProps = InferPropTypes<
  typeof heroSectionPropTypes,
  typeof heroSectionDefaultProps
>
