import React, { ReactElement } from 'react'
import { BlockQuote } from '@components'

const blockquote = (props: never): ReactElement => <BlockQuote {...props} />

const a = (props: never): ReactElement => (
  <a
    {...props}
    className="text-accent"
    target="_blank"
    rel="noopener noreferrer"
  />
)

const h2 = (props: never): ReactElement => (
  <h2
    {...props}
    className="pt-1 sm:pt-2 text-xl font-bold leading-7 text-primary sm:text-2xl"
  />
)

const inlineCode = (props: never): ReactElement => (
  <code
    {...props}
    className="px-2 py-1 rounded bg-secondary text-secondary text-xs sm:text-sm"
  />
)

const p = (props: never): ReactElement => (
  <p {...props} className="my-3 text-primary text-sm sm:text-base" />
)

export { a, blockquote, h2, inlineCode, p }
