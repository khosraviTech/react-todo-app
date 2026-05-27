import todosSlice from "../redux/todosSlice";
import { useDispatch } from "react-redux";

export default function RemoveItem({ item }) {
  let dispatch = useDispatch();
  let { remove } = todosSlice.actions;

  return (
    <div>
      <button
        onClick={() => dispatch(remove(item))}
        className="
        hover:bg-red-700 hover:border-red-700   cursor-pointer
        w-9
        h-full
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
