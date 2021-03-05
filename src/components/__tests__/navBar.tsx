import React from 'react'
import renderer from 'react-test-renderer'

import { NavBar } from '@components'

jest.mock('gatsby-plugin-mdx', () => {
  return {
    // eslint-disable-next-line react/display-name
    MDXRenderer: ({ children }: { children: React.ReactNode }) => {
      return <div>{children}</div>
    },
  }
})

describe('NavBar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NavBar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
