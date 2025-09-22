"use client";

import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState({ id: null, name: "", task: "" });

  const [forms, setForms] = useState([]);

  const formData = (e) => {
    setTodos({ ...todos, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todos);
    setForms([...forms, todos]);
    console.log(forms);
    setTodos({ id: "", name: "", task: "" });
  };

  const Delete = (id) => {
      const remainingEntry = forms.filter(ids => ids.id != id);
      console.log(remainingEntry)
      setForms(remainingEntry) 
  }

  return (
    <div className="p-3">
      <h1>
        Hello, From Todo app using NextJs and it is still under construnction
        mode....
      </h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          className="border-1 border-gray-300"
          placeholder="id"
          onChange={(e) => formData(e)}
          name="id"
          value={todos.id}
        />
        <input
          type="text"
          required
          className="border-1 border-gray-300"
          placeholder="name"
          onChange={(e) => formData(e)}
          name="name"
          value={todos.name}
        />
        <input
          type="text"
          required
          className="border-1 border-gray-300"
          placeholder="task"
          onChange={(e) => formData(e)}
          name="task"
          value={todos.task}
        />
        <button>Add Todo</button>
      </form>

      {forms.map((item, index) => {
        return (
          <div key={index} className="border p-2 mt-2 flex rounded-md border-gray-700 justify-between">
            <div>
              <h1>ID: {item.id}</h1>
              <h1>Name: {item.name}</h1>
              <h1>Task: {item.task}</h1>
            </div>
            <button onClick={() => Delete(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
