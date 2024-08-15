import "../styles/Navbar.css";
import React from 'react';
import {Link} from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="nav-items">
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/works">Works</Link></li>
			</ul>
		</nav>
	);
}