import { shallow } from 'enzyme';
import React from 'react';
import { Table } from './Table';

describe('Test suite for Action Button', () => {
	it('it should render Table', () => {
		const columnNames = ['COL1', 'COL2'];
		const dataDefinition = ['DATA_COL1', 'DATA_COL2'];
		const data = [
			{
				DATA_COL1: 'something',
				DATA_COL2: 'other thing',
			},
		];

		const wrapper = shallow(
			<Table
				columnNames={columnNames}
				dataDefinition={dataDefinition}
				data={data}
			></Table>
        );

        const table = wrapper.find('table')
        expect(table).toBeTruthy()
        expect(wrapper.find('td').getElements().length).toBe(2)
        expect(wrapper.find('td').at(0).text()).toBe('something')
        expect(wrapper.find('td').at(1).text()).toBe('other thing')
	});
});
