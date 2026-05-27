import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  let todos =useSelector((state)=> state.todos)
 
  return (
    <div className="
    p-1 m-3">
      <ul>
        {
          
          todos.map(
            (item,index)=>
              <li key={index}>
                <TodoItem item={item}/>
              </li>
          )
          
        }
      </ul>      
    </div>
  );
}
