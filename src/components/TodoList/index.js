function TodoList({ task, handleTask }) {
  return (
    <>
      <ol>
        {task.map((e, i) => (
          <li key={i}>
            {e}
            <button onClick={() => handleTask(e)}>Task Completed</button>
          </li>
        ))}
      </ol>
    </>
  );
}
export default TodoList;
