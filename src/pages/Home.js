import React, { Component } from 'react';
import { Title } from '../components/Title';
import { Table } from '../components/Table';
import { Subtitle } from '../components/Subtitle';

export class Home extends Component {
	state = { sessionId: 12345, rounds: [] };
	// localStorage.setItem('sessionId', 12345);

	fetchGameData(sessionId) {
		fetch(`http://localhost:8080/game?sessionId=${sessionId}`)
			.then((response) => response.json())
			.then((data) => {
				if (!!data.game) {
					this.setState({ rounds: data.game.rounds });
				}
			});
	}

	componentDidMount() {
		this.fetchGameData(12345);
	}

	playRound = () => {
		fetch(
			`http://localhost:8080/game/play?sessionId=${this.state.sessionId}`,
			{
				method: 'post',
			}
		).then(() => this.fetchGameData(12345));
	};

	clearSessionGame = () => {
		fetch(`http://localhost:8080/game?sessionId=${this.state.sessionId}`, {
			method: 'delete',
        });
        this.setState({rounds: []})
	};

	render() {
		const columnNames = [
			'Round Nº',
			'Player 1 chose',
			'Player 2 chose',
			'Winner',
		];

		return (
			<div>
				<Title>Rock, Paper, Scissors</Title>
				<Subtitle>WebApp Game</Subtitle>
				<div class="buttons">
					<button onClick={this.playRound} className="button is-info">
						Play Round
					</button>
					<button
						onClick={this.clearSessionGame}
						className="button is-warning"
					>
						Reset Party!
					</button>
				</div>
				<div className="table-wrapper">
					<Table
						columnNames={columnNames}
						data={this.state.rounds}
					></Table>
				</div>
			</div>
		);
	}
}
