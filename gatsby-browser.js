// Serif font
import '@fontsource/playfair-display/700.css'

// Sans font
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'

// Mono font
import '@fontsource/dm-mono/400.css'

// CSS
import './src/assets/css/global.css'

// Wrap Root Element
import { wrapRootElement as wrap } from './src/wrap-root-element'

export const onServiceWorkerUpdateReady = () => {
  window.location.reload()
}

export const wrapRootElement = wrap
