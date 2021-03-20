// Serif font
import '@fontsource/ibm-plex-serif/700.css'

// Sans font
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/700.css'

// Mono font
import '@fontsource/ibm-plex-mono/400.css'

// CSS
import './src/assets/css/global.css'

// Wrap Root Element
import { wrapRootElement as wrap } from './src/wrap-root-element'

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}

export const wrapRootElement = wrap
