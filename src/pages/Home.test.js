import { shallow } from 'enzyme';
import React from 'react';
import { Subtitle } from '../components/Subtitle';
import { Table } from '../components/Table';
import { Title } from '../components/Title';
import { Home } from './Home';

describe('Home test suite', () => {
	it('Should render Title component', () => {
		const wrapper = shallow(<Home />);
		const title = wrapper.find(Title);
		expect(title.exists()).toBe(true);
	});

	it('Should render Subtitle component', () => {
		const wrapper = shallow(<Home />);
		const subtitle = wrapper.find(Subtitle);
		expect(subtitle.exists()).toBe(true);
	});

	it('Should render Table component', () => {
		const wrapper = shallow(<Home />);
		const table = wrapper.find(Table);
		expect(table.exists()).toBe(true);
	});
});
