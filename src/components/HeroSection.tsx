// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import { Link } from 'gatsby'
import Img from 'gatsby-image'

import { ThemeContext } from '@context/ThemeContext'

const HeroSection = ({ md }: HeroSectionProps): ReactElement => {
  const { title, subtitle, images } = md.frontmatter
  const { theme } = React.useContext(ThemeContext)

  function isDark() {
    return theme === 'dark'
  }

  return (
    <div className="bg-hero bg-secondary max-w-full px-4 md:px-14 py-10 sm:py-12 md:py-14 lg:py-20 xl:py-9">
      <div className="max-w-6xl mx-auto pb-5 relative overflow-hidden">
        <div className="flex content-center max-w-6xl relative z-10 lg:max-w-3xl lg:w-full">
          <div className="flex-grow m-auto px-3 lg:px-8">
            <div className="sm:text-center lg:text-left">
              <h1 className="font-bold font-serif text-primary text-4xl sm:text-5xl lg:text-6xl">
                <span className="inline">{title}&nbsp;</span>
              </h1>
              <p className="mt-3 text-base text-secondary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-lg lg:mx-0">
                {subtitle}
              </p>
              <div className="text-base font-medium mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="#"
                    className="w-full flex items-center justify-center border border-transparent rounded-md text-tertiary bg-accent hover:bg-hover-accent px-8 py-3 lg:py-3.5 lg:text-lg"
                  >
                    Read the notes
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center border border-transparent rounded-md text-dark-accent bg-light-accent hover:bg-hover-light px-8 py-3 lg:py-3.5 lg:text-lg"
                  >
                    More about me
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none animate-wiggle w-6 hidden xl:block">
            {images ? (
              <Img
                fixed={
                  isDark()
                    ? images[1].dark.childImageSharp.fixed
                    : images[0].light.childImageSharp.fixed
                }
              />
            ) : null}
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
      images: PropTypes.arrayOf(PropTypes.object),
    }),
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
