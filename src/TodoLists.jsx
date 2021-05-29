import React from 'react'
import Button from '@material-ui/core/Button';
const TodoLists = (props)=>{
    
    return(
        <>
        <li>{props.text}</li>
        <Button onClick = {()=>
        {props.onSelect(props.id)}
        }>❎</Button>
        </>
    )
        
}
export default TodoLists