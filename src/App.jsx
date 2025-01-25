import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);


  const handleEdit = () => {

  }
  const handleDelete = (e) => {
    let id = e.target.name;
    let copyTodo = [...listTodo];

    let todoindex = copyTodo.findIndex(listtodo => listtodo.id == id);
    copyTodo.splice(todoindex, 1)
    setListTodo(copyTodo) 
    
  }
  const handleAdd = () => {
    setListTodo([...listTodo, {id:uuidv4() ,todo, isCompleted: false }])
    setTodo("")
    console.log(listTodo)
  }
  const handleChange = (e) => {
    setTodo(e.target.value);
  }
  
  const handleComplete = (e) => {
    let id = e.target.name;
    let copyTodo = [...listTodo];
    let todoindex = copyTodo.findIndex(listtodo => listtodo.id == id);
    copyTodo[todoindex].isCompleted = !copyTodo[todoindex].isCompleted
    setListTodo(copyTodo) 
  }


  return (
    <div className=' bg-cyan-800 h-screen text-slate-300 font-serif'>
      <Navbar />
      <div className="container mx-auto border-solid border-red-700 border-2">
        <div className="text-center font-bold text-4xl mt-12">TASK MASTER</div>
        <div className="todoadder flex my-7 gap-3 justify-center mt-8 align-middle">
          <input onChange={handleChange} value={todo} type="text" className='w-1/3 rounded-lg h-9 bg-slate-900 opacity-60' />
          <button onClick={handleAdd} className='bg-slate-900 h-9 px-4 rounded-lg'>Add</button>
        </div>
        <div className="datetime flex justify-center gap-2">
          <div className="date">21/1/25,</div>
          <div className="time">9:00am</div>
        </div>
        <div className="todos">
          {listTodo.map(item => {
            return <div key = {item.id} className="todos flex justify-center align-middle mt-5 gap-2">
              <input type="checkbox" onChange={handleComplete} value={item.isCompleted} name={item.id} id="" />

              <div className="text w-1/3 rounded-lg h-9 bg-slate-900 opacity-60 text-center">
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}
                </div>
              </div>
              <div className="buttons">
                <button className="edit bg-slate-900 h-9 px-4 rounded-lg">Edit</button>
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
