import { shallow } from 'enzyme';
import React from 'react';
import { ActionButton } from './ActionButton';

describe('Test suite for Action Button', () => {

    it('should render action button', () => {
        const wrapper = shallow(<ActionButton buttonClass={'btnClass'}>ClickMe</ActionButton>)
        expect(wrapper.find('button').hasClass('btnClass')).toBeTruthy();
        expect(wrapper.find('button').text()).toBe('ClickMe')
    })
    
    it('should call onClick function', () => {
        const mockFn = jest.fn();
        
        const wrapper = shallow(<ActionButton onClick={mockFn}>ClickMe</ActionButton>)
        const button = wrapper.find('button');
        
        button.simulate('click')
        expect(mockFn).toHaveBeenCalled();
    })
})