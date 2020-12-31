import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'

interface Props {
  site: {
    siteMetadata: {
      email: string
    }
  }
  about: {
    frontmatter: {
      title: string
    }
    html: any // eslint-disable-line
  }
}

const AboutSection = ({ site, about }: Props): ReactElement => {
  const { email } = site.siteMetadata
  const { title } = about.frontmatter

  return (
    <div className="max-w-full mx-auto relative overflow-hidden">
      <div className="max-w-7xl mx-auto my-6 sm:my-8 px-8 flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-primary sm:text-3xl sm:truncate">
            {title}
          </h2>
        </div>
        <div className="flex">
          <a
            href={'mailto:' + email}
            className="m-auto inline-flex items-center px-3 sm:px-4 py-1 sm:py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-tertiary bg-accent hover:bg-accentHover"
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-6 sm:my-8 px-8">
        <div dangerouslySetInnerHTML={{ __html: about.html }} />
      </div>
    </div>
  )
}

AboutSection.propTypes = {
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
  about: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
    }),
    html: PropTypes.any,
  }),
}

AboutSection.defaultProps = {
  site: {
    siteMetadata: {
      email: '',
    },
  },
  about: {
    frontmatter: {
      title: 'Title',
    },
    html: 'Content',
  },
}

export default AboutSection
