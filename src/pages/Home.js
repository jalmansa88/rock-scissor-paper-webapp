import React, { Component } from 'react';
import { Title } from '../components/Title';
import { Table } from '../components/Table';
import { Subtitle } from '../components/Subtitle';
import { NavigationButton } from '../components/NavigationButton';
import { ActionButton } from '../components/ActionButton';

export class Home extends Component {
	state = { sessionId: 0, rounds: [] };

	componentDidMount() {
		let sessionId = localStorage.getItem('sessionId');
		if(!sessionId) {
			sessionId = this.generateSessionId();
		}
		localStorage.setItem('sessionId', sessionId)
		this.setState({sessionId})
		this.fetchGameData(sessionId);
	}

	fetchGameData(sessionId) {
		fetch(`http://localhost:8080/game?sessionId=${sessionId}`)
			.then((response) => response.json())
			.then((data) => {
				if (!!data.game) {
					this.setState({ rounds: data.game.rounds });
				}
			});
	}

	generateSessionId = () => Math.floor(Math.random() * 1000);

	playRound = () => {
		fetch(
			`http://localhost:8080/game/play?sessionId=${this.state.sessionId}`,
			{
				method: 'post',
			}
		).then(() => this.fetchGameData(this.state.sessionId));
	};

	clearSessionGame = () => {
		fetch(`http://localhost:8080/game?sessionId=${this.state.sessionId}`, {
			method: 'delete',
		});
		this.setState({ rounds: [] });
	};

	render() {
		const columnNames = ['Player 1 chose', 'Player 2 chose', 'Winner'];

		const dataDefinition = ['P1_HAND', 'P2_HAND', 'WINNER'];

		return (
			<div>
				<Title>Rock, Paper, Scissors</Title>
				<Subtitle>WebApp Game</Subtitle>
				<div className="buttons is-centered">
					<ActionButton
						onClick={this.playRound}
						buttonClass={'button is-info'}
					>
						Play Round
					</ActionButton>
					<ActionButton
						onClick={this.clearSessionGame}
						buttonClass={'button is-warning'}
					>
						Reset Party!
					</ActionButton>
					<NavigationButton
						buttonClass={'button is-primary'}
						path={'/history'}
					>
						Go to History
					</NavigationButton>
				</div>
				Total rounds played: {this.state.rounds.length}
				<div className="table-wrapper">
					<Table
						columnNames={columnNames}
						dataDefinition={dataDefinition}
						data={this.state.rounds}
					></Table>
				</div>
			</div>
		);
	}
}
