import { ImCross } from "react-icons/im";
const Todo = ({ id, text, isCompleted, completedTask, removetodo }) => {
  return (
    <div className="todo">
      {/* {isCompleted ? (
        <input type="checkbox" checked onClick={() => completedTask(id)} />
      ) : (
        <input type="checkbox" onClick={() => completedTask(id)} />
      )} */}
      <div className="todo_title">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => completedTask(id)}
        />
        <p className={`${isCompleted ? "completed" : ""}`}>{text}</p>
      </div>
      <div className="cross_btn" onClick={() => removetodo(id)}>
        <ImCross />
      </div>
      {/* <p>isCompleted: {isCompleted ? "true" : "false"}</p> */}
    </div>
  );
};

export default Todo;
