import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

//Components
import Home from './home'
import Header from './header'
import Footer from './footer'

class App extends Component{
	render(){
		return (
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Home} />
					<Footer />
				</div>
			</BrowserRouter>
		)
	}
}

export default App