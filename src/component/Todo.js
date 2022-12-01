function Todo({ todo, todos, setTodos }) {
  const handleDelete = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const onSubmitHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
      })
    );
  };

  return (
    <div className={todo.isDone ? "square-style doneBox" : "square-style"}>
      <h2>{todo.title}</h2>
      <p>{todo.text}</p>
      <button className="delete_btn" onClick={() => handleDelete(todo.id)}>
        삭제
      </button>
      <button className="done_btn" onClick={() => onSubmitHandler(todo.id)}>
        {todo.isDone === false ? "완료" : "취소"}
      </button>
    </div>
  );
}
export default Todo;
