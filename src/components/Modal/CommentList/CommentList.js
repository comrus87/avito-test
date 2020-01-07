import React from 'react';
import Comment from './Comment';
import classes from './CommentList.module.css';


const CommentList = props => {
	return (
		<div className={classes.commentsColumn}>
			{props.comments.map(item => {
				return <Comment key={item.id} date={item.date} text={item.text} />
			})}
		</div>
	)
		
}

export default CommentList