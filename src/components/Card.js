import React from 'react';
import './Card.css';

const Card = ({name, image}) => {
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow'>
			<img alt='photo1' src={image} classname='album-art' />
			<div>
				<h2>{name}</h2>
			</div>
		</div>
		)
}

export default Card;