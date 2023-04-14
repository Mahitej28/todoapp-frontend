import { useEffect, useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { addtodo, getalltodo, updatetodo, deletetodo } from './utils/HandleApi';

function App() {

  const [todo, settodo] = useState([])
  const [text, settext] = useState("")
  const [isUpdate, setisUpadte] = useState(false)
  const [todoid, settodoid] = useState("")

  useEffect(()=>{
    getalltodo(settodo)
  },[])

  const updateMode = (_id, text) => {
    setisUpadte(true)
    settext(text)
    settodoid(_id)
  }

  return (
    <div className="App">
     <div className="container">

      <h1>✍️ ToDo App</h1>

      <div className="top">

        <input type="text"  placeholder="Add Task" value={text} onChange={(e)=>settext(e.target.value)}/>
        <button className="add" onClick={isUpdate ? ()=>updatetodo(todoid,text, settext, settodo, setisUpadte) : ()=>addtodo(text, settext, settodo)}>
          {isUpdate ?"Update" : "Add"}
        </button>

      </div>

      <div className="list">
        {todo.map((item)=> 
        (<Todo key={item._id} 
          text={item.text}
          updateMode={()=>updateMode(item._id)}
          deleteToDo={()=>deletetodo(item._id, settodo)}/>))
        }
      </div>
     </div>
    </div>
  );
}

export default App;
