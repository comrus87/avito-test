import React from 'react';
import classes from './Modal.module.css';
import CommentForm from './CommentForm/CommentForm';
import CommentList from './CommentList/CommentList';


const Modal = props => {

	const onSubmit = formData => {
		props.postComment(props.photoId, formData.name, formData.comment);
	}

	return (
		<div className={classes.modal}>
			<button className={classes.btnClose} onClick={props.closeModal} aria-label='Закрыть'></button>
			<div className={classes.modalContainer}>
				<div className={classes.firstColumn}>
					<img className={classes.modalPicture} 
						 src={props.modalPhotoUrl} 
						 width='331' 
						 height='205' 
						 alt='Увеличенное фото' />
					<CommentForm onSubmit={onSubmit} />
				</div>
				<CommentList comments={props.comments} />
			</div>
		</div>
	)
}

export default Modal