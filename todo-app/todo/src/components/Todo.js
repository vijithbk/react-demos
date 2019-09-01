import React from 'react';
import ReactDOM from 'react-dom';

const Todo = ({todo, remove}) => {
	return (<li onClick={remove}>{todo.text}</li>);
};

export default Todo;