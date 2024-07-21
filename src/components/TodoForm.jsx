import { useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      toast.error("plz fill input", {
        autoClose: 2000,
      });
      return;
    }
    const todo = {
      id: uuid(),
      text: text,
      iscompleted: false,
    };
    addTodo(todo);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        type="text"
        className="todoForm_input"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
