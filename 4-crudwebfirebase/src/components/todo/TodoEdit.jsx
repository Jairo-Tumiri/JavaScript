/*************************** */
import { actionEdit } from "../../hooks/getFirebase";
import { DICCIONARY, ATRIBUTOS } from "../../data/dicionarios";
import AddTodoInputAtribute from "../addTodo/AddTodoInputAtribute";
/*************************** */
export default function TodoEdit({
  dataUpdate,
  setDataUpdate,
  id,
  type,
  stateTodoEdit,
  setStateTodoEdit,
}) {
  const handleChangeUpdate = (e) => {
    setDataUpdate({ ...dataUpdate, [e.target.name]: e.target.value });
  };
  return (
    <div
      className={`todoedit-cont ${
        stateTodoEdit ? "on-todoedit" : "off-todoedit"
      }`}
    >
      {DICCIONARY.map((item, i) => {
        if (item.type === type) {
          return (
            <AddTodoInputAtribute
              key={i}
              atribute={item.atributos}
              atributes={ATRIBUTOS}
              name={item.name}
              handleChange={handleChangeUpdate}
            ></AddTodoInputAtribute>
          );
        }
      })}
      <span
        className="mybtn"
        onClick={async () => {
          const { title, subtitle, texto, urlimg, urlvideo } = dataUpdate;
          if (
            type === "note" &&
            title.length > 0 &&
            subtitle.length > 0 &&
            texto.length > 0
          ) {
            const DATA = { ...dataUpdate, typeTodo: "note" };
            await actionEdit(id, DATA);
          }
          if (type === "video" && urlvideo.length > 0 && title.length > 0) {
            const DATA = { ...dataUpdate, typeTodo: "video" };
            await actionEdit(id, DATA);
          }
          if (type === "img" && urlimg.length > 0 && title.length > 0) {
            const DATA = { ...dataUpdate, typeTodo: "img" };
            await actionEdit(id, DATA);
          }
          setStateTodoEdit(!stateTodoEdit);
          setDataUpdate({});
        }}
      >
        Editar
      </span>
    </div>
  );
}
