import React from 'react'
import renderer from 'react-test-renderer'

import { NoteSummary } from '@components'

jest.mock('gatsby-plugin-mdx', () => {
  return {
    // eslint-disable-next-line react/display-name
    MDXRenderer: ({ children }: { children: React.ReactNode }) => {
      return <div>{children}</div>
    },
  }
})

describe('NoteSummary', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NoteSummary />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
