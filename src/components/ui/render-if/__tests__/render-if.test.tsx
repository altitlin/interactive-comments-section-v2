import React, { ComponentProps } from 'react'
import { shallow } from 'enzyme'

import { RenderIf } from '../render-if'

type RenderIfProps = ComponentProps<typeof RenderIf>

describe('RenderIf', () => {
  it('should render children if the "isTrue" prop is to set "true"', () => {
    const mockProps: RenderIfProps = {
      children: <div />,
      isTrue: true,
    }

    expect(shallow(<RenderIf {...mockProps} />).find('div')).toBeTruthy()
  })

  it('should return "null" if the "isTrue" props is to set "false"', () => {
    const mockProps: RenderIfProps = {
      children: <div />,
      isTrue: false,
    }

    expect(shallow(<RenderIf {...mockProps} />).html()).toBeNull()
  })
})
