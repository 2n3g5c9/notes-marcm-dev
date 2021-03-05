import React from 'react'
import renderer from 'react-test-renderer'

import { Quote } from '@components'

jest.mock('gatsby-plugin-mdx', () => {
  return {
    // eslint-disable-next-line react/display-name
    MDXRenderer: ({ children }: { children: React.ReactNode }) => {
      return <div>{children}</div>
    },
  }
})

describe('Quote', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Quote>Test</Quote>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
