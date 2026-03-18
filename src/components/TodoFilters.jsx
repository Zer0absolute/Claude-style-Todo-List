const filters = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' }
];

export default function TodoFilters({
  activeFilter,
  onFilterChange,
  onClearCompleted,
  completedCount
}) {
  return (
    <div className="toolbar">
      <div className="filter-group">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            className={activeFilter === filter.value ? 'filter-chip active' : 'filter-chip'}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="clear-button"
        onClick={onClearCompleted}
        disabled={completedCount === 0}
      >
        Clear completed
      </button>
    </div>
  );
}
