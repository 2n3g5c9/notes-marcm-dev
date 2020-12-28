import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

import { GitHubSVG, KeybaseSVG, LinkedInSVG } from '@images'

interface Props {
  urls: {
    github: string
    keybase: string
    linkedIn: string
  }
}

const Footer = ({ urls }: Props): ReactElement => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href={urls.keybase}
            aria-label="Keybase"
            className="text-secondary hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Keybase</span>
            <KeybaseSVG className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href={urls.github}
            aria-label="GitHub"
            className="text-secondary hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <GitHubSVG className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href={urls.linkedIn}
            aria-label="LinkedIn"
            className="text-secondary hover:text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInSVG className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-secondary">
            &copy; 2020 Marc Molina. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  urls: PropTypes.shape({
    github: PropTypes.string,
    keybase: PropTypes.string,
    linkedIn: PropTypes.string,
  }),
}

Footer.defaultProps = {
  urls: {
    github: `#`,
    keybase: `#`,
    linkedIn: `#`,
  },
}

export default Footer
