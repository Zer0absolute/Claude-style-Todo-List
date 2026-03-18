export default function TodoHeader({ remainingCount, completedCount }) {
  return (
    <header className="todo-header">
      <div>
        <p className="eyebrow">Workspace</p>
        <h1>Todo list</h1>
      </div>
      <div className="stats">
        <div className="stat-pill">
          <span>{remainingCount}</span>
          <small>left</small>
        </div>
        <div className="stat-pill stat-pill-muted">
          <span>{completedCount}</span>
          <small>done</small>
        </div>
      </div>
    </header>
  );
}
