// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import * as DesignSystem from './components/mdx/DesignSystem'

const shortcodes = {
  a: DesignSystem.a,
  blockquote: DesignSystem.blockquote,
  h2: DesignSystem.h2,
  inlineCode: DesignSystem.inlineCode,
  p: DesignSystem.p,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={shortcodes}>{element}</MDXProvider>
)
