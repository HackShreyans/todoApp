import React, { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //todos--gettter
  //setTodo--setter
  const [Todos, setTodos] = useState(["Shreyans", "Akshay"]);
  const [todo, setTodo] = useState(""); //single elemet

  //add
  const AddNewTodo = event => {
    event.preventDefault(); //default page reload
    if (todo !== "") {
      let values = [...Todos, todo]; //append in the last item
      setTodos(values);
      toast.success(`${todo} added!`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      setTodo("");
    }
  };

  //delete
  const deleteTodo = index => {
    console.log("todo index--->", index);
    toast.warn(`${Todos[index]} is removed!`, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
    let newTodos = Todos.filter((val, index2) => index2 !== index);
    // console.log("newTodoList", newTodos);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <ToastContainer />

      <h1 className="text-center">Todo List App</h1>
      {/* form */}
      <div className="mx-auto mr-5" style={{ width: 400 }}>
        <form onSubmit={AddNewTodo} className="form-inline mt-5 ">
          <div className="form-group mx-sm-3 mb-2">
            <input
              onChange={val => setTodo(val.target.value)}
              value={todo}
              type="text"
              className="form-control"
              id="todo"
              placeholder="To do here..."
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Add
          </button>
        </form>
        <ul className="list-group">
          {Todos.map((todo, index) => (
            <li
              key={index}
              onDoubleClick={() => deleteTodo(index)}
              className="list-group-item"
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
