import React, { Component } from 'react';
import { Title } from '../components/Title';
import { Table } from '../components/Table';
import { NavigationButton } from '../components/NavigationButton';

export class GameHistory extends Component {
	state = { history: {} };

	fetchGameHistory() {
		fetch('http://localhost:8080/history')
			.then((response) => response.json())
			.then((data) => {
				if (!!data) {
					this.setState({ history: data });
				}
			});
	}

	componentDidMount() {
		this.fetchGameHistory();
	}

	render() {
		const columnNames = [
			'Total played rounds',
			'Total Player 1 wins',
			'Total Player 2 wins',
			'Total Draws',
		];

		const dataDefinition = [
			'TOTAL_ROUNDS',
			'PLAYER_ONE_WINS',
			'PLAYER_TWO_WINS',
			'NUM_DRAWS'
		]

		return (
			<div>
				<Title>Game History</Title>
				<NavigationButton
						buttonClass={'button is-primary'}
						path={'/'}
					>
						Go to Home
					</NavigationButton>
				<div className="table-wrapper">
					<Table
						columnNames={columnNames}
						data={[this.state.history]}
						dataDefinition={dataDefinition}
					></Table>
				</div>
			</div>
		);
	}
}
