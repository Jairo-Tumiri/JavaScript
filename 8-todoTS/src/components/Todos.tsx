import { type TodoId, type ListOfProps, type Todo as TodoType } from "../type";
import { Todo } from "./Todo";
interface Props {
  todos: ListOfProps;
  onRemoveTodo: ({ id }: TodoId) => void;
  handleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todos: React.FC<Props> = ({ todos, onRemoveTodo,handleCompleted }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={`${todo.completed ? "completed" : ""}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            handleCompleted={handleCompleted}
          />
        </li>
      ))}
    </ul>
  );
};
