import { useDispatch } from "react-redux";
import RemoveItem from "./RemoveItem";
import { useState } from "react";
import todosSlice from "../redux/todosSlice";


export default function TodoItem({ item }) {


  let dispatch = useDispatch();

  let [editing, setEditing] = useState(false);
  let [value, setValue] = useState(item);
  let { edit } = todosSlice.actions;
  let { remove } = todosSlice.actions;


  if (editing === false) {
    return (
      <div className=" 
       flex justify-center
       
       text-white
       border-white  border-2 rounded-4xl
        m-5">
        <h3 className="pl-4 pt-2"
        >{value.name}</h3>

        <button
          onClick={() => setEditing(true)}
          className="rounded-bl-3xl 
          rounded-tl-3xl
          font-medium
          w-15
          p-2 
          hover:bg-blue-700   cursor-pointer
         bg-blue-600 
         text-white text-right ml-auto "
        >
          Edit
        </button>

        {/* <RemoveItem item={item} /> */}
        <button
          onClick={() => dispatch(remove(item))}
          className="
        hover:bg-red-700 hover:border-red-700   cursor-pointer
        w-9
        
        font-extrabold 
        border-5 border-red-600 rounded-r-full
         bg-red-600
         text-white "
        >
          X
        </button>

      </div>

    );
  }



  else if (editing === true) {
    return (
      <div className="
      flex justify-center
      relative
       text-white
       border-white  border-2 rounded-4xl
        m-5
        outline-0">

        <input
          className="
         pt-2 pb-2 w-full
         rounded-4xl
         border-2
         text-center
         outline-0
         
        "
          type="text"
          value={value.name}
          onChange={(e) => setValue({ id: value.id, name: e.target.value })}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              dispatch(edit(value));
              setEditing(false)
            }
          }}
        />

      </div>




    )
  }


}
