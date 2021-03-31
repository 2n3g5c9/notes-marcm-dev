import React from 'react'
import renderer from 'react-test-renderer'

import { BlockInfo } from '@components'

describe('BlockInfo', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BlockInfo />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
