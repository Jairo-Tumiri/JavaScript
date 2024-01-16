import { actionAdd } from "../../hooks/getFirebase";
import { ATRIBUTOS, DICCIONARY } from "../../data/dicionarios";
import AddTodoInputAtribute from "./AddTodoInputAtribute";
import IconClose from "../icons/IconClose";
export default function AddTodo({
  active,
  handleClose,
  addTypeTodo,
  data,
  setData,
}) {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const pushData = async () => {
    // const { title, subtitle, texto, urlimg, urlvideo } = data;
    if (addTypeTodo === "Nota") {
      const DATA = { ...data, typeTodo: "note" };
      await actionAdd(DATA);
    } else if (addTypeTodo === "Video") {
      const DATA = { ...data, typeTodo: "video" };
      await actionAdd(DATA);
    } else if (addTypeTodo === "Imagen") {
      const DATA = { ...data, typeTodo: "img" };
      await actionAdd(DATA);
    }
    handleClose();
  };
  return (
    <div className={`actionform ${!active ? "off-form" : "on-form"}`}>
      <span className="actionform-close" onClick={handleClose}>
        <IconClose />
      </span>
      <div className="form">
        <h2>Add {addTypeTodo}</h2>
        <br />
        <form action="" className="form-cont">
          {DICCIONARY.map((item, i) => {
            if (item.name === addTypeTodo) {
              return (
                <AddTodoInputAtribute
                  key={i}
                  atribute={item.atributos}
                  atributes={ATRIBUTOS}
                  handleChange={handleChange}
                  name={item.name}
                ></AddTodoInputAtribute>
              );
            }
          })}
          <span className="mybtn" onClick={pushData}>
            <p>Agregar</p>
          </span>
        </form>
      </div>
    </div>
  );
}
