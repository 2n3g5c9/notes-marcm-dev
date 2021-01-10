import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

const HeroSection = ({ md }: HeroSectionProps): ReactElement => {
  const { title, hashtag, subtitle } = md.frontmatter

  return (
    <div className="bg-hero bg-secondary max-w-full mx-auto my-0 pt-0 px-4 pb-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-26 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl">
                <span className="inline">{title}&nbsp;</span>
                <span className="text-accent inline">#{hashtag}</span>
              </h1>
              <p className="mt-3 text-base text-secondary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {subtitle}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-tertiary bg-accent hover:bg-accentHover md:py-4 md:text-lg md:px-10"
                  >
                    Read the notes
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-accentDark bg-accentLight hover:bg-accentLightHover md:py-4 md:text-lg md:px-10"
                  >
                    More about me
                  </Link>
                </div>
              </div>
            </div>
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
      hashtag: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

HeroSection.propTypes = heroSectionPropTypes

const heroSectionDefaultProps = {
  md: {
    frontmatter: {
      title: 'Title',
      subtitle: 'Subtitle',
      hashtag: 'Hashtag',
    },
  },
}

HeroSection.defaultProps = heroSectionDefaultProps

type HeroSectionProps = InferPropTypes<
  typeof heroSectionPropTypes,
  typeof heroSectionDefaultProps
>
