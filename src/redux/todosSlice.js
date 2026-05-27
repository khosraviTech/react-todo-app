import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todosSlice = createSlice({
  name: "todos",

  initialState: {
    todos:JSON.parse(localStorage.getItem('todos')) || []
  },


  reducers: {
    add: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem('todos',JSON.stringify(state.todos))
      // log the action
      console.log(
        state.todos.map((item) =>
          console.log(`add action done :
            {id:${item.id},name: ${item.name}}`),
        ),
      );
    },

    edit: (state, action) => {
      
      state.todos.forEach((item) => {
        if (item.id === action.payload.id) {
          console.log(`item before: {id: ${item.id}, name: ${item.name}}`);
          item.name = action.payload.name;
          console.log(`item after:  {id: ${item.id}, name: ${item.name}}`);
        }
      });
      localStorage.setItem('todos',JSON.stringify(state.todos))
    },

    

    remove: (state, action) => {
      let remainTodos = state.todos.filter((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
      console.log(`remove action done :
            {id:${action.payload.id},name: ${action.payload.name}} removed`);

      state.todos = remainTodos;
      localStorage.setItem('todos',JSON.stringify(state.todos))
    },

  },
  
});
export default todosSlice;
