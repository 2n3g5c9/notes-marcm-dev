import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import { ThemeContext } from '@context/themeContext'

const HeroSection = ({ frontmatter }: HeroSectionProps): ReactElement => {
  const { title, subtitle } = frontmatter
  const { theme } = React.useContext(ThemeContext)

  const isDark = () => {
    return theme === 'dark'
  }

  return (
    <div className="bg-hero bg-secondary left-1/2 ml-50-screen -mt-8 px-4 sm:px-14 py-8 sm:py-14 lg:py-8 relative w-screen">
      <div className="content-center m-auto flex max-w-6xl lg:w-full z-10">
        <div className="flex-grow max-w-4xl lg:max-w-3xl my-auto px-3 lg:py-12 lg:pl-8">
          <div className="sm:text-center lg:text-left">
            <h1 className="font-bold font-serif text-primary text-4xl sm:text-5xl lg:text-6xl">
              <span className="inline">{title}&nbsp;</span>
            </h1>
            <p className="sm:max-w-xl mt-3 sm:mt-5 md:mt-5 sm:mx-auto lg:mx-0 text-base sm:text-lg text-secondary">
              {subtitle}
            </p>
            <div className="sm:flex font-medium sm:justify-center lg:justify-start mt-5 sm:mt-8 text-base">
              <div className="rounded-md shadow">
                <Link
                  to="/notes"
                  className="bg-accent hover:bg-hover-accent border border-transparent flex items-center justify-center px-8 py-3 lg:py-3.5 rounded-md text-tertiary lg:text-lg w-full"
                >
                  Read the notes
                </Link>
              </div>
              <div className="sm:ml-3 mt-3 sm:mt-0">
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
        <div className="animate-wiggle flex-none hidden pr-8 xlish:block">
          {'images' in frontmatter ? (
            <GatsbyImage
              image={
                isDark()
                  ? getImage(frontmatter.images[1].dark)
                  : getImage(frontmatter.images[0].light)
              }
              alt="Animated image"
            />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default HeroSection

const heroSectionPropTypes = {
  frontmatter: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({
        light: PropTypes.any,
        dark: PropTypes.any,
      })
    ),
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
