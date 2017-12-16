import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'


class CountriesList extends Component{

	constructor(){
		super();
		this.state = {
			list: []
		}
	}

	componentDidMount(){
		const url = `${window.apiHost}/get`;
		axios.get(url)
		.then((response)=>{
			console.log(response);
			this.setState({
				list: response.data
			})
		});
	}

	render(){
		console.log(this.state.list);
		const displaying = this.state.list.map((countries,index)=>{
			const imagesToUse = countries.image;
			return(
				<div key={index}>
					<img src={`../images/${imagesToUse}.jpg`} />
					<div className="col-sm-12"> NAME: {countries.name}</div>
					<div className="col-sm-12 productDivider"> POPULATION: ${countries.population}</div>
				</div>
			)
		})
		return(
			<div>
				<h1>country list will be displayed</h1>
				<div className="css-class-for-future">
					{displaying}
				</div>
			</div>
		)
	}
}

function mapStateToProps(state){
	return{
		add: state.add
	}
}

// export default CountriesList;
export default connect(mapStateToProps)(CountriesList);