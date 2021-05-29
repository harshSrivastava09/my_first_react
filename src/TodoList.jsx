import React,{useState} from 'react'
import TodoLists from './TodoLists'
import Button from "@material-ui/core/Button"


const TodoList = ()=>{
    const [inputList, setInputList] = useState("buy apple")
    const [click,setClick] = useState([])
    const itemEvent = (event)=>{
        setInputList(event.target.value)
    }
    const ListOfItems = ()=>{
        setClick((oldItems)=>{
            return [...oldItems,inputList]
        })
        setInputList("");
    }
    const deleteItem = (id)=>{
        console.log("deleted");
        setClick((oldItems)=>{
            return oldItems.filter((arrEle,index)=>{
                return index !==id
            })
        })
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                <br/>
                <h1>Todo List</h1>
                <br/>
                <input type="text" placeholder="Add a items" onChange={itemEvent}/>
                <Button onClick={ListOfItems}>+</Button>
                <ol>
                    {/* <li>{inputList}</li> */}
                    {
                        click.map((items,index)=>{
                            return <TodoLists 
                            key = {index} 
                            id={index} 
                            text = {items}
                            onSelect = {deleteItem}
                            />
                        })
                    }
                </ol>
                </div>
            </div>
        </>
    )

}
export default TodoList