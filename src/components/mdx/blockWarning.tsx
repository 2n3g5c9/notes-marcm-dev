import React, { ReactElement } from 'react'
import PropTypes, { InferProps } from 'prop-types'

import { ThemeContext } from '@context/themeContext'

const BlockWarning = ({ children }: BlockWarningProps): ReactElement => {
  const { theme } = React.useContext(ThemeContext)

  const isDark = () => {
    return theme === 'dark'
  }

  return (
    <div
      className={`${
        isDark()
          ? 'bg-yellow-800 border-yellow-600'
          : 'bg-yellow-100 border-yellow-300'
      } border-l-2 sm:border-l-4 font-sans inline-block my-2 px-4 py-3 relative text-primary text-xs sm:text-sm sm:w-auto w-full`}
    >
      {children}
    </div>
  )
}

export default BlockWarning

const blockWarningPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

BlockWarning.propTypes = blockWarningPropTypes

type BlockWarningProps = InferProps<typeof blockWarningPropTypes>
