import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);

  useEffect(() => {
    let todostring = localStorage.getItem("todos")
    if(todostring){
      let copytodos = JSON.parse(todostring)
      console.log(copytodos)
      setListTodo(copytodos)
    }
  }, [])
  

  

  const handleEdit = (e) => {
    let id = e.target.name;
    let t = listTodo.filter(i=>i.id == id);
    setTodo(t[0].todo)
    let copytodos = listTodo.filter(item=>{
      return item.id!= id;
    })
    setListTodo(copytodos)
  }


  const handleDelete = (e) => {
    let id = e.target.name;
    setListTodo((prevList)=>{
      let copyTodo = [...prevList];

      let todoindex = prevList.findIndex(listtodo => listtodo.id == id);
      copyTodo.splice(todoindex, 1)
      console.log(copyTodo)
      localStorage.setItem("todos", JSON.stringify(copyTodo))
      return copyTodo
    }) 
  }


  const handleAdd = () => {
    setListTodo((prevList)=>{
      const newlist = [...prevList, {id:uuidv4() ,todo, isCompleted: false }]
      console.log(newlist)
      localStorage.setItem("todos", JSON.stringify(newlist))
      return newlist
    })
    setTodo("")
  }


  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  
  const handleComplete = (e) => {
    let id = e.target.name;
    setListTodo((prevList) =>{
      let copyTodo = [...prevList];
      return copyTodo
    }) 
    let copyTodo = [...listTodo]
    let todoindex = copyTodo.findIndex(listtodo => listtodo.id == id);
    copyTodo[todoindex].isCompleted = !copyTodo[todoindex].isCompleted
    localStorage.setItem("todos", JSON.stringify(copyTodo))
  }


  return (
    <div className=' bg-cyan-800 h-screen text-slate-300 font-serif'>
      <Navbar />
      <div className="container mx-auto border-solid border-red-700 border-2">
        <div className="text-center font-bold text-4xl mt-12">TASK MASTER</div>
        <div className="todoadder flex my-7 gap-3 justify-center mt-8 align-middle">
          <input onChange={handleChange} value={todo} type="text" className='w-1/3 rounded-lg h-9 bg-slate-900 opacity-60' />
          <button onClick={handleAdd} disabled={todo.length<=1} className='bg-slate-900 h-9 px-4 rounded-lg'>Add</button>
        </div>
        <div className="datetime flex justify-center gap-2">
          <div className="date">21/1/25,</div>
          <div className="time">9:00am</div>
        </div>
        <div className="todos">
          {listTodo.length ==0 && <div className="text-center mt-4 text-lg" >All tasks completed</div> }
          {listTodo.map(item => {
            return <div key = {item.id} className="todos flex justify-center align-middle mt-5 gap-2">

              <input type="checkbox" onChange={handleComplete} checked={item.isCompleted} name={item.id} id="" />

              <div className="text w-1/3 rounded-lg h-9 bg-slate-900 opacity-60 text-center">
                
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons">
                <button onClick={handleEdit} name = {item.id} className="edit bg-slate-900 h-9 px-4 rounded-lg">Edit</button>
                <button onClick={handleDelete} name = {item.id} className="delete bg-slate-900 h-9 px-4 rounded-lg">Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
