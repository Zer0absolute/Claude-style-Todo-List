import { useState } from 'react';

export default function TodoInput({ onAddTodo }) {
  const [value, setValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onAddTodo(value);
    setValue('');
  }

  return (
    <form className="todo-input-row" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a task..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="primary-button" type="submit">
        Add
      </button>
    </form>
  );
}
