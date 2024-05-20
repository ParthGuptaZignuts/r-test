import React from "react";

const List = ({ listofTodo, deleteTodo , editTodo }) => {
  const deleteButton = (index) => {
    deleteTodo(index);
  };

  const editButton = (index) =>{
    editTodo(index);
  }

  return (
    <>
      {listofTodo.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.input}</p>
            <button onClick={() => deleteButton(index)}>delete</button>
            <button onClick={() => editButton(index)}>Edit</button>
          </div>
        );
      })}
    </>
  );
};

export default List;
