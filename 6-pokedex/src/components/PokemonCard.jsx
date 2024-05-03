import "./PokemonCard.scss";
import pokeball from "../img/pokeball.png";
import { useState } from "react";
export default function PokemonCard(prop) {
  const { id, name, image , type,height,weight,statsName,stats } = prop;
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="container">
      {isShow && (
        <div className="show">
          <div className="statContainerTitle">
            <p>{name}</p>
          </div>
          <img
            src={image}
            alt={name}
            className="imgTitle"
            style={{ width: "200px" }}
          />
          <div
            className="statContainerStats"
            style={{ display: "flex", width: "100%" }}
          >
            <div className="statContainer">
              <p>Type</p>
              <p>{type}</p>
            </div>
            <div className="statContainer">
              <p>Height</p>
              <p>{height}</p>
            </div>
            <div className="statContainer">
              <p>Weight</p>
              <p>{weight}</p>
            </div>
          </div>
          <div className="statContainerAttack">
            <div className="statContainerAttackName">
              {
                statsName.map((statName, i) => (
                  <p key={i*Math.random()}>{statName}</p>
                ))
              }
            </div>
            <div className="statContainerAttackNum">
              { 
                stats.map((statNum, i) => (<p key={i*Math.random()}>{statNum}</p>) )
              }
            </div>
          </div>
        </div>
      )}
      <div
        className="right"
        onMouseEnter={() => {
          setIsShow(true);
        }}
        onMouseLeave={() => {
          setIsShow(false);
        }}
      >
        <img
          src={image}
          alt={name}
          style={{ maxHeight: "50px", marginRight: "10px", width: "50px" }}
        />
        <p style={{ width: "270px" }}>No. {id}</p>
        <p>{name}</p>
        <img
          src={pokeball}
          alt="pokeball"
          style={{ marginLeft: "auto", width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
}
