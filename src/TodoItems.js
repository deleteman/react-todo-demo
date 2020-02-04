import React, { Component, useState } from 'react'
import TodoItem from './TodoItem'


const TodoItems = ({entries, deleteItem}) => {
	const createTasks = (item) => {
	  	
	    return <TodoItem key={item.key} text={item.text}/>
	}
  
	const todoentries = entries || []  
    const listitems = todoentries.map( createTasks.bind(this))

    return (<ul className="theList">{listitems}</ul>)
}

export default TodoItems