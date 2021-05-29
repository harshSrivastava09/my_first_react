import React from 'react'
import "./App.css"
import ExpenseItem from './ExpenseItem'
const App = ()=>{
    const ExpenseItems =[
        {title:"Car wash",price:"433Rs",date:new Date()},
        {title:"Table",price:"1200Rs",date:new Date()},
        {title:"Almira",price:"10000Rs",date:new Date()},
        {title:"Mangos",price:"250Rs",date:new Date()}
    ]

    return (
        <>
        <ExpenseItem
            date = {ExpenseItems[0].date}
            title = {ExpenseItems[0].title}
            price = {ExpenseItems[0].price}
        />
        <ExpenseItem
            date = {ExpenseItems[1].date}
            title = {ExpenseItems[1].title}
            price = {ExpenseItems[1].price}
        />
        <ExpenseItem
            date = {ExpenseItems[2].date}
            title = {ExpenseItems[2].title}
            price = {ExpenseItems[2].price}
        />
        <ExpenseItem
            date = {ExpenseItems[3].date}
            title = {ExpenseItems[3].title}
            price = {ExpenseItems[3].price}
        />
        </>
    )
}
export default App