import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/Layout/Landing/Landing';
import './App.css';

function App() {
	return (
		<Router>
			<Fragment>
				<Route exact path='/' component={Landing} />
			</Fragment>
		</Router>
	);
}

export default App;
