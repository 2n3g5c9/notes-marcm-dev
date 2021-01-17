/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import './src/assets/css/global.css'
import { wrapRootElement as wrap } from './src/wrap-root-element'

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}

export const wrapRootElement = wrap
