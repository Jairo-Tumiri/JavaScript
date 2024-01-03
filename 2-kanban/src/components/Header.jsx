import { useState } from "react";
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
      <header className="header">
        <h1 className="header-title">Kanban UI</h1>
        <div className="container">
          <div className="container__item">
            <form
              className="form"
              onChange={(e) => {
                e.preventDefault();
              }}
            >
              <div className="form-input">
                <input
                  type="text"
                  name="title"
                  className="form__field"
                  placeholder="Escribe tu tarea"
                  onChange={handleForm}
                />
                <button
                  type="button"
                  className="btn btn--primary btn--inside uppercase"
                  onClick={handlePush}
                >
                  AGREGAR
                </button>
              </div>

              <div className="select--option" onClick={handleSelect}>
                <span className="select">
                  <p>{optionTitle.title}</p>
                </span>
                <ul className={estado ? "on" : "off"}>
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
