import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {

  // STATE: todos store karega
  const [todos, setTodos] = useState([]);

  // Load todos (first time)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data) setTodos(data);
  }, []);

  // Save todos (jab bhi change ho)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // ADD TODO
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // DELETE TODO
  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // TOGGLE COMPLETE
  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-gray-800 p-5 rounded w-[400px]">

        <h1 className="text-white text-xl text-center mb-3">
          Todo App
        </h1>

        {/* child components */}
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />

      </div>
    </div>
  );
}

export default App;