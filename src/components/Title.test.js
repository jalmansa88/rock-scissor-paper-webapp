import React from 'react'
import {shallow} from 'enzyme'
import { Title } from './Title'

it ('should render the Title', () => {
    const wrapper = shallow(<Title>A Title</Title>)
    const h1Element = wrapper.find('h1')
    const result = h1Element.text()

    expect(result).toBe('A Title')
})