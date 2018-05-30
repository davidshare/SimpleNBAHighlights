import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>{
	
	return(
		<header>
			<div className="flex-container">
				<Link to="/" className="logo">
					<span></span>
				</Link>
				<nav>
					<Link to="/teams">Teams</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header