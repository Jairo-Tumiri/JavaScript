import { useState } from "react";
import TopBar from "./components/TopBar";
import PokeList from "./components/PokeList";
import BottomBar from "./components/BottomBar";
export default function App() {
  return (
    <div>
      <TopBar />
      <PokeList />
      <BottomBar />
    </div>
  );
}
