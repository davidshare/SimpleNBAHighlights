import React, { Component } from 'react'

//Components
import Featured from './featured'

const URL_HOME = 'http://localhost:3005/home';

class Home extends Component{
	constructor(props){
		super(props)

		this.state ={
			home:''
		}
	}

	componentDidMount(){
		fetch(URL_HOME, {method:'GET'})
		.then(response => response.json())
		.then(json=>{
			this.setState({
				home:json
			})
		})
	}

	render(){
		return(
			<Featured slides={this.state.slider}/>
		)
	}
}

export default Home