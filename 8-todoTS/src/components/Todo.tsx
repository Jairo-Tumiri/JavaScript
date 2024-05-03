import { type TodoId, type Todo as TodoType } from "../type";

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void;
  handleCompleted: ({
    id,
    completed,
  }: Pick<TodoType, "id" | "completed">) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  handleCompleted,
}) => {
  const hadleChangecheckbox = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    handleCompleted({ id, completed: event.target.checked });
  };
  return (
    <div className="view">
      <input
        className="toggle"
        checked={completed}
        type="checkbox"
        onChange={hadleChangecheckbox}
      />
      <label>{title}</label>
      <button
        className="destroy"
        onClick={() => {
          onRemoveTodo({ id });
        }}
      />
    </div>
  );
};
