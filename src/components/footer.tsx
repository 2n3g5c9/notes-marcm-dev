import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { InferPropTypes } from '@shared/types'

import { GitHubSVG, KeybaseSVG, LinkedInSVG } from '@assets/images'

const Footer = ({ author, urls }: FooterProps): ReactElement => (
  <div className="md:flex md:items-center md:justify-between max-w-6xl mx-auto px-4-safe sm:px-6-safe lg:px-8 py-6 sm:py-8">
    <div className="flex justify-center md:order-2 space-x-6">
      <a
        href={urls.keybase}
        aria-label="Keybase"
        className="hover:text-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">Keybase</span>
        <KeybaseSVG className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={urls.github}
        aria-label="GitHub"
        className="hover:text-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">GitHub</span>
        <GitHubSVG className="h-6 w-6" aria-hidden="true" />
      </a>
      <a
        href={urls.linkedIn}
        aria-label="LinkedIn"
        className="hover:text-secondary"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="sr-only">LinkedIn</span>
        <LinkedInSVG className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
    <div className="mt-8 md:mt-0 md:order-1">
      <p className="text-center text-sm sm:text-base">
        &copy; 2021 {author}. Built with{' '}
        <a
          href="https://github.com/2n3g5c9/gatsby-starter-typescript-tailwindcss"
          aria-label="Gatsby Starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          React & Gatsby
        </a>
        .
      </p>
    </div>
  </div>
)

export default Footer

const footerPropTypes = {
  author: PropTypes.string,
  urls: PropTypes.shape({
    github: PropTypes.string,
    keybase: PropTypes.string,
    linkedIn: PropTypes.string,
  }),
}

Footer.propTypes = footerPropTypes

const footerDefaultProps = {
  author: 'Random author',
  urls: {
    github: '#',
    keybase: '#',
    linkedIn: '#',
  },
}

Footer.defaultProps = footerDefaultProps

type FooterProps = InferPropTypes<
  typeof footerPropTypes,
  typeof footerDefaultProps
>
