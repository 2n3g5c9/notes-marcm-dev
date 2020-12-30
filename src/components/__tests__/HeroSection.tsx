import React from 'react'
import renderer from 'react-test-renderer'

import { HeroSection } from '@components'

describe('HeroSection', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<HeroSection />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
