import { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "./data/firebase";
import Todo from "./components/todo/Todo";
import Header from "./components/header/Header";
import AddTodo from "./components/addTodo/AddTodo";
// import Option from "./components/option/Option";

export default function App() {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  const [addTypeTodo, setAddTypeTodo] = useState("");
  const [active, setActive] = useState(false);
  useEffect(() => {
    const q = query(collection(db, "todos"));
    // snapshot: es para actualizar la base de datos en tiempo real
    const unsub = onSnapshot(q, (querySnapshot) => {
      const todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleClose = () => {
    setData({});
    setActive(!active);
  };

  return (
    <>
      <Header
        handleClose={handleClose}
        setAddTypeTodo={setAddTypeTodo}
        setData={setData}
        data={data}
      />
      <main>
        <div className="main-todos">
          {todos.map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        </div>
      </main>
      <AddTodo
        active={active}
        handleClose={handleClose}
        addTypeTodo={addTypeTodo}
        data={data}
        setData={setData}
      />
    </>
  );
}
