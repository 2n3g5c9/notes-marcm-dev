import React from 'react'
import renderer from 'react-test-renderer'

import { NoteSummary } from '@components'

describe('NoteSummary', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NoteSummary />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
