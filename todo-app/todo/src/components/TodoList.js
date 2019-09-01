import React from 'react';
import ReactDOM from 'react-dom';

import Todo from './Todo'

const TodoList = ({todos, remove}) => {
	const todoNode = todos.map(todo => {
		return (
			<Todo todo={todo} key={todo.id} remove={remove} />
		)
	});
	return (
		<ul>{todoNode}</ul>
	);
}

export default TodoList;