import React, { useState, useEffect } from 'react';

const InputField = ({ addTodo, updateTodo, id, todolist }) => {
  const [todoForm, setTodoInput] = useState({ input: '', dateandTime: '' });

  useEffect(() => {
    if (id !== null) {
      setTodoInput(todolist[id]);
    } else {
      setTodoInput({ input: '', dateandTime: '' });
    }
  }, [id, todolist]);

  const todoSubmit = (e) => {
    e.preventDefault();
    const dateandTime = new Date().toLocaleString();
    const updatedTodoForm = { ...todoForm, dateandTime };
    
    if (id !== null) {
      updateTodo(id, updatedTodoForm);
    } else {
      addTodo(updatedTodoForm);
    }

    setTodoInput({ input: '', dateandTime: '' });
  };

  const updateTodoInput = (e) => {
    const inputValue = e.target.value;
    setTodoInput(prevState => ({
      ...prevState,
      input: inputValue
    }));
  };

  return (
    <>
      <form onSubmit={todoSubmit}>
        <input
          type="text"
          value={todoForm.input}
          onChange={updateTodoInput}
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default InputField;
