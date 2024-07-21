import Todo from "./Todo";

const Todos = ({ todos, completedTask ,removetodo}) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} completedTask={completedTask} removetodo={removetodo}></Todo>
      ))}
    </div>
  );
};

export default Todos;
