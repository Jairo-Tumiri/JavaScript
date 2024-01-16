import { useState } from "react";
import { ADDDICCIONARY } from "../../data/dicionarios";
import IconNote from "../icons/IconNote";
import IconVideo from "../icons/IconVideo";
import IconImage from "../icons/IconImage";
import HeaderLi from "./HeaderLi";

export default function Header({ handleClose, setAddTypeTodo, setData, data }) {
  const [activeClass, setActiveClass] = useState("");
  const handleClick = (e) => {
    setActiveClass(e);
    setAddTypeTodo(e);
    setData({});
    handleClose();
  };
  return (
    <header className="header-component">
      <h1 className="header-component-title">
        <span>NOTE </span>
        <span> UI</span>
      </h1>
      <ul className="header-component-ul">
        {ADDDICCIONARY.map((item, i) => {
          return (
            <HeaderLi key={i} handleClick={handleClick} item={item}>
              {item.type === "note" ? (
                <IconNote />
              ) : item.type === "video" ? (
                <IconVideo />
              ) : item.type === "img" ? (
                <IconImage />
              ) : (
                <></>
              )}
            </HeaderLi>
          );
        })}
      </ul>
    </header>
  );
}
