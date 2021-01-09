import React from 'react'
import renderer from 'react-test-renderer'

import { ToggleContent } from '@components'

jest.mock('gatsby-plugin-mdx', () => {
  return {
    // eslint-disable-next-line react/display-name
    MDXRenderer: ({ children }: { children: React.ReactNode }) => {
      return <div>{children}</div>
    },
  }
})

describe('ToggleContent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ToggleContent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})