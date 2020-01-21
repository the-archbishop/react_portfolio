import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar/Navbar';
import Landing from './components/Layout/Landing/Landing';
import './App.css';

function App() {
	return (
		<Fragment>
			<Router>
				<Navbar />
				<Route exact path='/' component={Landing} />
			</Router>
		</Fragment>
	);
}

export default App;
