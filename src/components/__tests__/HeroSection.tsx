import React from 'react'
import renderer from 'react-test-renderer'

import { HeroSection } from '@components'

jest.mock('gatsby-plugin-mdx', () => {
  return {
    // eslint-disable-next-line react/display-name
    MDXRenderer: ({ children }: { children: React.ReactNode }) => {
      return <div>{children}</div>
    },
  }
})

describe('HeroSection', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeroSection />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
