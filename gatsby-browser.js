import './src/assets/css/global.css'
import { wrapRootElement as wrap } from './src/wrap-root-element'

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}

export const wrapRootElement = wrap
