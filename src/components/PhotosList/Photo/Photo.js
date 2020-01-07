import React from 'react';
import classes from './Photo.module.css';

const Photo = props => {
	return (
		<li className={classes.item}>
			<img src={props.url}
				 className={classes.picture}
				 alt='Фото'
				 width='229'
				 height='142'
				 onClick={() => {props.onPhotoAddModal(props.id)}}
			/>
		</li>
	)
		
}

export default Photo