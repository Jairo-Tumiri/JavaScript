import { actionDelete, actionQuery } from "../../hooks/getFirebase";
import { useState } from "react";
import TodoOption from "./TodoOption";
import TodoNote from "./TodoNote";
import TodoVideo from "./TodoVideo";
import TodoImg from "./TodoImg";
import TodoEdit from "./TodoEdit";
export default function Todo({ todo }) {
  const [stateContextMenu, setStateContextMenu] = useState(false);
  const [stateTodoEdit, setStateTodoEdit] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const handleContextMenu = (e) => {
    setStateContextMenu(!stateContextMenu);
  };
  const handleDelete = async (id) => {
    await actionDelete(id);
  };
  const handleEdit = async (id) => {
    const datatodo = await actionQuery(id);
    setDataUpdate(datatodo);
    setStateTodoEdit(!stateTodoEdit);
  };

  return (
    <div className="card-note">
      {todo.typeTodo === "note" ? (
        <TodoNote {...todo} handleContextMenu={handleContextMenu} />
      ) : todo.typeTodo === "video" ? (
        <TodoVideo {...todo} handleContextMenu={handleContextMenu} />
      ) : todo.typeTodo === "img" ? (
        <TodoImg {...todo} handleContextMenu={handleContextMenu} />
      ) : (
        <></>
      )}
      <TodoOption
        id={todo.id}
        stateContextMenu={stateContextMenu}
        setStateContextMenu={setStateContextMenu}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <TodoEdit
        type={todo.typeTodo}
        id={todo.id}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        setStateTodoEdit={setStateTodoEdit}
        stateTodoEdit={stateTodoEdit}
      ></TodoEdit>
    </div>
  );
}
