function Form({ addTask, setNewTask, newTask }) {
  return (
    <>
      <form>
        <input onChange={(e) => setNewTask(e.target.value)}></input>
        <button type="reset" onClick={() => addTask(newTask)}>
          Add Task
        </button>
      </form>
    </>
  );
}
export default Form;
