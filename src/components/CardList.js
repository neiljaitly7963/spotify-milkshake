import React from 'react';
import Card from './Card';
const CardList = ({userPlaylist}) => {
	
	return(
		<div>
			{
				userPlaylist.map(playlist => {
				return  (
					<Card 
						key={playlist.id} 
						name={playlist.name} 
						image={playlist.images[0].url}
					/>
				)
				})
			}
		</div>
	)
}

export default CardList;