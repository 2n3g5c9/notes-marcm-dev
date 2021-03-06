import React from 'react'
import renderer from 'react-test-renderer'

import { ToggleContent } from '@components'

describe('ToggleContent', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ToggleContent />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
