import React from 'react'
import renderer from 'react-test-renderer'

import { BlockQuote } from '@components'

jest.mock('gatsby-plugin-mdx', () => {
  return {
    // eslint-disable-next-line react/display-name
    MDXRenderer: ({ children }: { children: React.ReactNode }) => {
      return <div>{children}</div>
    },
  }
})

describe('BlockQuote', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BlockQuote>Test</BlockQuote>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
