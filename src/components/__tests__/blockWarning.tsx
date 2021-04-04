import React from 'react'
import renderer from 'react-test-renderer'

import { BlockWarning } from '@components'

describe('BlockWarning', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BlockWarning />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
