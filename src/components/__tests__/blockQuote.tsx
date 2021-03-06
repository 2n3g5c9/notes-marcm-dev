import React from 'react'
import renderer from 'react-test-renderer'

import { BlockQuote } from '@components'

describe('BlockQuote', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BlockQuote />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
