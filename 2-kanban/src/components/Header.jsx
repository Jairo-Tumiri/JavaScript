import { useState } from "react";
import style from "./Header.module.css";
export default function Header({ data, setData }) {
  const [estado, setEstado] = useState(false);
  const [optionTitle, setOptionTitle] = useState({ title: "Estado de tarea" });
  const [task, setTask] = useState({}); //[{title: "Tarea 1", status: 0}
  const handleSelect = () => {
    setEstado(!estado);
  };
  const handleOption = (e) => {
    const select = e.target.textContent;
    const selectOption = data.filter((op) => {
      if (op.title === select) return op;
    });
    setEstado(!estado);
    setOptionTitle(...selectOption);
  };
  const handleForm = (e) => {
    setTask({
      ...task,
      id: e.target.name + Math.floor(Math.random() * 100000),
      [e.target.name]: e.target.value,
    });
  };
  const handlePush = () => {
    data.map((option) => {
      if (optionTitle.title === option.title) option.tasks.push(task);
      setData([...data]);
    });
  };

  return (
    <>
      <header className={style.header}>
        <h1 className={style.headerTitle}>Kanban UI</h1>
        <div className={style.container}>
          <div className="container__item">
            <form
              className={style.form}
              onChange={(e) => {
                e.preventDefault();
              }}
            >
              <div className={style.formInput}>
                <input
                  type="text"
                  name="title"
                  className={style.formField}
                  placeholder="Escribe tu tarea"
                  onChange={handleForm}
                />
                <button
                  type="button"
                  className={style.btn}
                  onClick={handlePush}
                >
                  AGREGAR
                </button>
              </div>

              <div className={style.selectOption} onClick={handleSelect}>
                <span className={style.select}>
                  <p>{optionTitle.title}</p>
                </span>
                <ul className={estado ? style.on : style.off}>
                  {data.map((option) => {
                    return (
                      <li key={option.id} onClick={handleOption}>
                        <span className="option">{option.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
