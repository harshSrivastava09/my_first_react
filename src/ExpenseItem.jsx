import React,{useState} from 'react'
// import ExpenseDate from "./ExpenseDate"
import "./Expense.css"
const ExpenseItem = (props)=>{
    const [title,setTitle] = useState(props.title)
    const expenseDate = props.date.toISOString()
    const expensePrice = props.price
    const clickHandler = ()=>{
        setTitle("Updated!!!!")
    }
    return (
        <>
        <div className="container-card">
        <input type="text"/>
        </div>
        <div className="container">
       <span class="card-date">{expenseDate}</span>
          <span class="card-title">{title}</span>
          <span class="card-price">{expensePrice}</span>
        
        <div class="card-action">
          <button onClick={clickHandler}>Change title</button>
        </div>
        </div>
        </>
    )
}
export default ExpenseItem