import React from 'react';
import ReactDOM from 'react-dom';

const Todo = ({todo, remove}) => {
	return (<li>{todo.text}</li>);
};

export default Todo;