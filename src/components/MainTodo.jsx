import { useDispatch } from "react-redux";
import todosSlice from "../redux/todosSlice";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoList from "./todoList";

export default function MainTodo() {

  let [value, setValue] = useState("");

  let dispatch = useDispatch();
  let { add } = todosSlice.actions;

  return (
    <div
      className="w-175
      bg-blue-950
    
    text-center  
    border-4  rounded-4xl border-blue-950
    pt-4 m-20"
    >
      <h1 className=" 
      
      p-3 
      font-bold
       text-5xl text-white ">Todo List | Khosravi </h1>

      <input

        className="text-blue-500 
        w-150 h-10 m-5 mt-15
         text-center 
         border-4 rounded-2xl 
         outline-0
         placeholder-gray-300 "


        type="text"
        value={value}
        placeholder="Type your goal..."
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && value.trim()) {
            dispatch(add({ id: uuidv4(), name: value }));
            setValue("");
          }
        }}
      />

      <TodoList />
    </div>
  );
}
