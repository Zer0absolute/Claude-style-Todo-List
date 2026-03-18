import { useMemo, useState } from 'react';
import { createTodo, getFilteredTodos } from './todoUtils.js';
import TodoHeader from './components/TodoHeader.jsx';
import TodoInput from './components/TodoInput.jsx';
import TodoFilters from './components/TodoFilters.jsx';
import TodoList from './components/TodoList.jsx';

const initialTodos = [
  createTodo('Plan the week'),
  createTodo('Write project notes'),
  createTodo('Review priorities', true)
];

export default function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState('all');

  const filteredTodos = useMemo(() => {
    return getFilteredTodos(todos, filter);
  }, [todos, filter]);

  const remainingCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - remainingCount;

  function addTodo(text) {
    const nextText = text.trim();

    if (!nextText) {
      return;
    }

    setTodos((current) => [createTodo(nextText), ...current]);
  }

  function toggleTodo(id) {
    setTodos((current) =>
      current.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((current) => current.filter((todo) => todo.id !== id));
  }

  function clearCompleted() {
    setTodos((current) => current.filter((todo) => !todo.completed));
  }

  return (
    <main className="app-shell">
      <section className="todo-card">
        <TodoHeader remainingCount={remainingCount} completedCount={completedCount} />
        <TodoInput onAddTodo={addTodo} />
        <TodoFilters
          activeFilter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          completedCount={completedCount}
        />
        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
        />
      </section>
    </main>
  );
}
