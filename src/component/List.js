import Todo from "../component/Todo";

function List({ todos, setTodos }) {
  return (
    <div>
      {/*todolist_working*/}
      <h2 className="title">Working..📖</h2>
      <div className="todo-working">
        {todos.map((todo) => {
          return (
            !todo.isDone && (
              <Todo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              ></Todo>
            )
          );
        })}
      </div>

      {/*todolist_done*/}
      <h2 className="title">Done..🌝</h2>
      <div className="todo-working">
        {todos.map((todo) => {
          return (
            todo.isDone && (
              <Todo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              ></Todo>
            )
          );
        })}
      </div>
    </div>
  );
}
export default List;
