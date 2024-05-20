import React from "react";
import InputField from "./InputField";
import List from "./List";

const App = () => {
  const [todo, setTodo] = React.useState([]);
  const [editId, setEditId] = React.useState(null);

  const addTodo = (data) => {
    const newTodo = [...todo, data];
    setTodo(newTodo);
    localStorage.setItem("todolist", JSON.stringify(newTodo));
  };

  const updateTodo = (id, data) => {
    const updatedTodo = todo.map((item, index) => (index === id ? data : item));
    setTodo(updatedTodo);
    localStorage.setItem("todolist", JSON.stringify(updatedTodo));
    setEditId(null); 
  };

  const deleteitemfromTodo = (id) => {
    const updatedTodo = todo.filter((item, index) => index !== id);
    setTodo(updatedTodo);
    localStorage.setItem("todolist", JSON.stringify(updatedTodo));
  };

  const edititemfromTodo = (id) => {
    setEditId(id);
  };

  React.useEffect(() => {
    const storedTodos = localStorage.getItem("todolist");
    if (storedTodos) {
      setTodo(JSON.parse(storedTodos));
    }
  }, []);

  return (
    <>
      <InputField addTodo={addTodo} updateTodo={updateTodo} id={editId} todolist={todo} />
      <hr />
      {todo.length === 0 ? (
        "No Todos"
      ) : (
        <List listofTodo={todo} deleteTodo={deleteitemfromTodo} editTodo={edititemfromTodo} />
      )}
    </>
  );
};

export default App;
