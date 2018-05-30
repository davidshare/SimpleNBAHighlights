import React, { Component } from 'react'

//Components
import Featured from './featured'

class Home extends Component{
	constructor(props){
		super(props)

		this.state ={
			home:''
		}
	}

	render(){
		return(
			<Featured />
		)
	}
}

export default Home