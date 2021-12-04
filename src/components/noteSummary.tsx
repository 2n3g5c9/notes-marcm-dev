import React, { ReactElement } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { ThemeContext } from '@context/themeContext'
import { InferPropTypes } from '@shared/types'
import { categoryBg, categoryText } from '@shared/utils'

const NoteSummary = ({
  title,
  summary,
  category,
  timeToRead,
  slug,
}: NoteSummaryProps): ReactElement => {
  const { theme } = React.useContext(ThemeContext)

  return (
    <div>
      <div className="inline-block text-xs sm:text-sm">
        <span
          className={`font-medium inline-flex items-center px-3 py-1 rounded-full ${categoryBg(
            category,
            theme
          )} ${categoryText(category, theme)}`}
        >
          {category}
        </span>
        <span className="px-2 text-secondary" aria-hidden="true">
          ⏱
        </span>
        <span className="text-secondary">{timeToRead} min read</span>
      </div>
      <Link to={slug} className="block mt-3">
        <p className="font-semibold text-xl sm:text-2xl ">{title}</p>
        <p className="mt-3 text-secondary text-sm sm:text-base">{summary}</p>
      </Link>
      <div className="mt-3">
        <Link to={slug} className="font-semibold text-sm sm:text-base">
          Read full note
        </Link>
      </div>
    </div>
  )
}

export default NoteSummary

const NoteSummaryPropTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  category: PropTypes.string,
  timeToRead: PropTypes.number,
  slug: PropTypes.string,
}

NoteSummary.propTypes = NoteSummaryPropTypes

const NoteSummaryDefaultProps = {
  title: 'Default title',
  summary: 'This is a default summary for a default article.',
  category: 'Default',
  timeToRead: 1,
  slug: '#',
}

NoteSummary.defaultProps = NoteSummaryDefaultProps

type NoteSummaryProps = InferPropTypes<
  typeof NoteSummaryPropTypes,
  typeof NoteSummaryDefaultProps
>
