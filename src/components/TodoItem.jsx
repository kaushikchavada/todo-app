function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <li className="flex justify-between bg-gray-700 p-2 mb-2 rounded">

      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer ${
          todo.completed
            ? "line-through text-gray-400"
            : "text-white"
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="bg-red-500 px-2 rounded text-white"
      >
        X
      </button>

    </li>
  );
}

export default TodoItem;