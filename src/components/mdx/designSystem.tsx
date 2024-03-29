import React, { ReactElement } from 'react'

import { BlockQuote } from '@components'

const blockquote = (props: never): ReactElement => <BlockQuote {...props} />

const a = (props: never): ReactElement => (
  <a
    {...props}
    className="text-secondary"
    target="_blank"
    rel="noopener noreferrer"
  />
)

const h1 = (props: never): ReactElement => (
  <h1
    {...props}
    className="font-bold leading-7 pt-4 sm:pt-6 text-xl sm:text-2xl"
  />
)

const h2 = (props: never): ReactElement => (
  <h2
    {...props}
    className="font-bold leading-7 pt-2 sm:pt-4 text-lg sm:text-xl"
  />
)

const h3 = (props: never): ReactElement => (
  <h3
    {...props}
    className="font-bold leading-7 pt-1 sm:pt-2 text-md sm:text-lg"
  />
)

const inlineCode = (props: never): ReactElement => (
  <code
    {...props}
    className="bg-secondary px-1.5 py-0.5 rounded text-secondary text-xs sm:text-sm"
  />
)

const li = (props: never): ReactElement => (
  <li {...props} className="list-disc my-2 text-sm sm:text-base" />
)

const p = (props: never): ReactElement => (
  <p {...props} className="my-2 sm:my-3 text-sm sm:text-base" />
)

const ul = (props: never): ReactElement => (
  <ul {...props} className="list-inside mb-4 text-sm sm:text-base" />
)

export { a, blockquote, h1, h2, h3, inlineCode, li, p, ul }
