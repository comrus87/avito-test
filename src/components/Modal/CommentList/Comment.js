import React from 'react';
import classes from './Comment.module.css';


const Comment = props => {
	return (
		<div className={classes.container}>
			<span className={classes.date}>
				{new Date(props.date).toLocaleString().slice(0,-10)}
			</span>
			<span className={classes.text}> {props.text} </span>
		</div>
	)
}

export default Comment