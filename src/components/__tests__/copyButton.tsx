import React from 'react'
import renderer from 'react-test-renderer'

import { CopyButton } from '@components'

describe('CopyButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<CopyButton />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
