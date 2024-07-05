import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const TodoList = () => {
    let [inputData,setInputData]=useState("")
    let[item,setItem]=useState([])
    let[editindex,setEditindex]=useState(null)

    let addItem=()=>{
             if(inputData===""){
                alert("Please Enter Your Task")
             }else if(editindex!=null){
                item[editindex]=inputData
                console.log(inputData);
                setEditindex(null)
                setInputData("")
             }
             else{

                 setItem([...item,inputData])
                 setInputData("")
             }
        
    }
    let edititems=(id)=>{
        console.log(id);
        console.log(item[id]);
        setInputData(item[id])
        setEditindex(id)


    }

    let deleteitem=(id)=>{
        console.log(id);
        console.log(item[id]);
        let newitem=item.filter((val,index)=>{
           return id!==index;
 
        })
        setItem(newitem)
    }
  return (
    <>
    <section className="Todowrapper">
        <aside>
            <h1>Welcome to TodoList App</h1>
        </aside>
        <form onSubmit={(e)=>e.preventDefault()} className='TodoForm'>
            <input type="text" 
            placeholder='What is your task today?'
            className='todo-input' 
            value={inputData}  
            onChange={(e)=>setInputData(e.target.value)}/>
            <button onClick={addItem}  className='todo-btn'>Add Task</button>
        </form>
        <article  >
            {item.map((val,ind)=>{
               return(
              <div key={ind} className='Todo'>
                <span>{val}</span>
                {/* <button onClick={()=>edititems(ind)} className='edit-icon'><MdEditDocument color='white' /></button>
                <button onClick={()=>deleteitem(ind)} className='delete-icon'><MdDelete color='white' /></button> */}
                <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => edititems(ind)} />
                <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteitem(ind)} />
            </div>
               )
            })}
            
        </article>
        <aside >
            <button className='removeAll' onClick={()=>setItem([])}>Remove All</button>
        </aside>
    </section>
    </>
  )
}

export default TodoList