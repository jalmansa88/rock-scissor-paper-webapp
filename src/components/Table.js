import React, { Component } from 'react';

export class Table extends Component {
	render() {
        const { columnNames, data } = this.props;
        
        console.log('tabla',this.props)

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
		if (data) {
			tableBody = (
				<tbody>
					{data.map((row, index) => {
						return (
							<tr key={index}>
								<th>{index + 1}</th>
								<td>{row.P1_HAND}</td>
								<td>{row.P2_HAND}</td>
								<td>{row.WINNER}</td>
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
