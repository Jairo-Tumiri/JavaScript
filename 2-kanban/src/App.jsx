import Header from "./components/Header";
import Kanban from "./components/Kanban";
import mockData from "./mockData";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(mockData);
  useEffect(() => {
    setData(mockData);
  }, [mockData]);
  return (
    <>
      <Header data={data} setData={setData} />
      <Kanban data={data} setData={setData} />
    </>
  );
}

export default App;
