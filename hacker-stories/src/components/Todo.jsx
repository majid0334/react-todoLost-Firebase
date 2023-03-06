import React, { useState } from "react";

function Todo(props) {
  const [input, setInput] = useState("");
  const { isEditing, setisEdeting } = useState(false);
 

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editTodo(props.id, input);
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const defaultTemplete = (
    <form onSubmit={handleSubmit}>
      <input
        type="checkbox"
        id={props.id}
        defaultChecked={props.completed}
        onChange={() => props.toggleCompleted(props.id)}
      />
      {props.desc}
      <div className="btn-group">
        <button type="button" onClick={() => setisEdeting(true)}>
          Edit
        </button>
        <button type="button" onClick={() => props.deleteTodo(props.id)}>
          Delete
        </button>
      </div>
    </form>
  );

  const editTemplete = (
    <form onSubmit={handleSubmit}>
      <label>New name for todo: {props.desc}</label>
      <input type="text" id={props.id} onChange={handleChange} value={input} />
      {props.desc}
      <div className="btn-group">
        <button type="button" onClick={() => setisEdeting(false)}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );

  return (
    <div>
      <li>{isEditing ? editTemplete : defaultTemplete}</li>
    </div>
  );
}

export default Todo;
