export function createTodo(text, completed = false) {
  return {
    id: crypto.randomUUID(),
    text,
    completed
  };
}

export function getFilteredTodos(todos, filter) {
  if (filter === 'active') {
    return todos.filter((todo) => !todo.completed);
  }

  if (filter === 'completed') {
    return todos.filter((todo) => todo.completed);
  }

  return todos;
}
