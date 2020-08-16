import { shallow } from 'enzyme'
import React from 'react'
import { Subtitle } from './Subtitle'

it ('should render the Title', () => {
    const wrapper = shallow(<Subtitle>A Subtitle</Subtitle>)
    const h3Element = wrapper.find('h3')
    const result = h3Element.text()

    expect(result).toBe('A Subtitle')
})