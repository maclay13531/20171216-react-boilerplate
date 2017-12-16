import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import NavBar from './containers/NavBar';
import CountriesList from './components/countriesList';
import CountriesAdd from './components/countriesAdd';

class App extends Component {
  render() {
    return (
    	<Router>
			<div className="App">
				<CountriesList />
				<CountriesAdd />
			</div>
		</Router>
    );
  }
}

export default App;
