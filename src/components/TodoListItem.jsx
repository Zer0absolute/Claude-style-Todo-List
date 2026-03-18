export default function TodoListItem({ todo, onToggleTodo, onDeleteTodo }) {
  return (
    <li className="todo-item">
      <label className="todo-main">
        <input
          className="todo-checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
        />
        <span className={todo.completed ? 'todo-text completed' : 'todo-text'}>
          {todo.text}
        </span>
      </label>
      <button
        type="button"
        className="delete-button"
        aria-label={`Delete ${todo.text}`}
        onClick={() => onDeleteTodo(todo.id)}
      >
        ×
      </button>
    </li>
  );
}
