import React from 'react';
import Photo from './Photo/Photo';
import classes from './PhotosList.module.css';


const PhotoList = props => {

	return (
			<ul className={classes.list}>
				{props.photos.map(photo => {
					return <Photo url={photo.url} id={photo.id} key={photo.id} onPhotoAddModal={props.onPhotoAddModal} />
				})}
			</ul>
	)
}

export default PhotoList