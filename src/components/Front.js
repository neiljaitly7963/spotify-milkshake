import React from 'react';
import './Front.css';

const Front = () => {
	return(
		<div className="flex-wrapper">
			

				<div className="text">
					<small className="text-color">Recently Played</small>
					<h1 className="heading text-color">Jump back in</h1>
					<h3 className="text-color">Pick up your music right where you left off.</h3>
				</div>

				<div className="album-grid">
					<div className="album"></div>
					<div className="album"></div>
					<div className="album"></div>
					<div className="album"></div>
					<div className="album"></div>
					<div className="album"></div>
				</div>

		
		</div>
		)
}

export default Front;