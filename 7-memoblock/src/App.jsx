import { useState, useEffect } from "react";
import Tablero from "./components/tablero/Tablero";

const emojiList = [..."🍕🍔🍟🍿🌭🧂🥓🥚"];

export default function App() {
  const [memoEmojis, setMemoEmojis] = useState([]);
  useEffect(()=>{
    const barajadoEmojiLista = barajearArray([...emojiList, ...emojiList]);
    barajearArray(emojiList)
    setMemoEmojis(barajadoEmojiLista.map((emoji,i)=>({index: i, emoji, flipped: false})))
  },[])
  const barajearArray = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  return (
    <div>
      <Tablero memoBlock={memoEmojis}/>
    </div>
  );
}
