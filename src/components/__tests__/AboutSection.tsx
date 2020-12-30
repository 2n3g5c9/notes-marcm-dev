import React from 'react'
import renderer from 'react-test-renderer'

import { AboutSection } from '@components'

describe('AboutSection', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AboutSection />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
