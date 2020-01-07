import React from 'react';
import {reduxForm, Field} from 'redux-form';
import classes from './CommentForm.module.css';
import {required} from './../../../utils/validators/validators';

let CommentForm = props => {
	return (
		<form className={classes.form} onSubmit={props.handleSubmit}>
			<Field className={classes.input} 
						 placeholder={'Ваше имя'} 
						 name={'name'} 
						 component={'input'}
						 validate={[required]}
			/>
			<Field className={classes.input} 
						 placeholder={'Ваш комментарий'} 
						 name={'comment'} 
						 component={'input'}
						 validate={[required]}
			/>
		<button className={classes.btnForm} aria-label='Отправить комментарий'> Оставить комментарий </button>
		</form>
	)
		
}

export default reduxForm({form: 'comment'})(CommentForm);