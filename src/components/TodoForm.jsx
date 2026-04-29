import { useState } from "react";

function TodoForm({ addTodo }) {

  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
      
      <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 bg-gray-700 text-white rounded"
      />

      <button className="bg-blue-500 px-3 rounded text-white">
        Add
      </button>

    </form>
  );
}

export default TodoForm;