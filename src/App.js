import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { GameHistory } from './pages/GameHistory';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/history" component={GameHistory} />
					<Route component={Home} />
				</Switch>
			</div>
		);
	}
}

export default App;
