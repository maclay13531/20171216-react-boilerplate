import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddAction from '../actions/AddAction';

class CountriesAdd extends Component{

	constructor(){
		super();
		this.state = {
            error: "no change",
            check: "checking"
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		event.preventDefault();
		// var check = document.getElementById("country-to-add").value
		var addedData = {
			country: event.target[0].value,
		}
		if(addedData.country === ""){
			this.setState({
				error: "empty country does not exist yo"
			})
		}
		if(addedData.country === "yo" ){
			this.setState({
				check: "checked through handleSubmit"
			})
		}
		this.props.addAction(addedData);
	}

	render(){
		return(
			<div>
				<h4>adding status: {this.state.error}</h4>
				<h4>{this.state.check}</h4>
				<form onSubmit ={this.handleSubmit}>
					<input id="country-to-add" type="text" name="country" placeholder="country" />
					<button type="button">Add</button>
				</form>
			</div>
		)
	}
}

function mapStateToProps(state){
	// state = RootReducer
	return{
		// key = this.props.key will be accessible to this component
		// value = property of RootReducer
		add: state.add
	}
}

function mapDispatchToProps(dispatch){
	// dispatch is the thing that takes any action
	// and sends it out to all the reducers
	return bindActionCreators({
		addAction: AddAction
	}, dispatch)
}

// export default CountriesAdd;
export default connect(mapStateToProps, mapDispatchToProps)(CountriesAdd);