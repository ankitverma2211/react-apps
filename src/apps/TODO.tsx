import { totalmem } from 'os';
import {useState} from 'react';

const TODO: React.FC = ()=>{
    let [todo, setTodo] = useState('');
    let [todoList, setTodoList] = useState<string[]>([])
    const addTodo = ()=>{
        setTodo('');
        setTodoList([...todoList, todo])
    }
    const taskCompleted = (doneTodo:string)=>{
        setTodoList([...todoList.filter(todo=> todo != doneTodo)])
    }
    return <div>
        <input value={todo} onChange={e=>setTodo(e.target.value)}/>
        <button onClick={addTodo}>Add Todo</button>
        <div>
            <p>TodoList</p>
            <ul>
                {todoList.map((todo,index)=> <li key={index}>{todo} <button onClick={()=>taskCompleted(todo)}>Done</button></li>)}
            </ul>
        </div>
    </div>
}

export default TODO;