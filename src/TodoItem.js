import React, { Component, useState } from 'react'
import Toggle from '@bit/deleteman.toggler.toggle';


const TodoItem = ({text, itemKey}) => {

 	const [iClass, setIClass] = useState("white")

  	const toggleBackground = status => {
  		setIClass(status ? "white" : "black")
  	}

  	const toggleProps = {
  		action: toggleBackground,
  		buttonText: "Select"
  	}

    return <li className={iClass} key={itemKey} >{text}<Toggle {...toggleProps}/></li>
}

export default TodoItem