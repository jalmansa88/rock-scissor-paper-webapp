import React, { Component } from 'react';

export class Table extends Component {
	render() {
        const { columnNames, dataDefinition, data } = this.props;

		let tableHeader;
		if (!!columnNames) {
			tableHeader = (
				<thead>
					<tr>
						{columnNames.map((colum, index) => {
							return <th key={index}>{colum}</th>;
						})}
					</tr>
				</thead>
			);
		}

		let tableBody;
		if (data && dataDefinition) {
			tableBody = (
				<tbody>
					{data.map((row, index) => {
						return (
							<tr key={index}>
								{dataDefinition.map((def, index) => {
									return <td>{row[dataDefinition[index]]}</td>
								})}
							</tr>
						);
					})}
				</tbody>
			);
		}

		return (
			<table className="table is-hoverable is-striped">
				{tableHeader}
				{tableBody}
			</table>
		);
	}
}
