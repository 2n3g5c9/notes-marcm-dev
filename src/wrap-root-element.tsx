// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import * as DesignSystem from './components/mdx/designSystem'

const shortcodes = {
  a: DesignSystem.a,
  blockquote: DesignSystem.blockquote,
  h1: DesignSystem.h1,
  h2: DesignSystem.h2,
  inlineCode: DesignSystem.inlineCode,
  li: DesignSystem.li,
  p: DesignSystem.p,
  ul: DesignSystem.ul,
}

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={shortcodes}>{element}</MDXProvider>
)
