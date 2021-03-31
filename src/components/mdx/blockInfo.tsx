import React, { ReactElement } from 'react'
import PropTypes, { InferProps } from 'prop-types'

import { ThemeContext } from '@context/themeContext'

const BlockInfo = ({ children }: BlockInfoProps): ReactElement => {
  const { theme } = React.useContext(ThemeContext)

  const isDark = () => {
    return theme === 'dark'
  }

  return (
    <div
      className={`${
        isDark() ? 'bg-blue-800 border-blue-600' : 'bg-blue-50 border-blue-300'
      } border-l-2 sm:border-l-4 font-sans inline-block my-2 px-4 py-3 relative text-xs sm:text-sm sm:w-auto w-full`}
    >
      ℹ️&nbsp;{children}
    </div>
  )
}

export default BlockInfo

const blockInfoPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

BlockInfo.propTypes = blockInfoPropTypes

type BlockInfoProps = InferProps<typeof blockInfoPropTypes>
