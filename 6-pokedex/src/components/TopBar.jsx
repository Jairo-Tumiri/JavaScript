import "./TopBar.scss";
import pokeball from "../img/pokeball.png";
import pokeballColor from "../img/pokeballColor.png";
export default function TopBar() {
  return (
    <div className="title">
      <div className="titleLeft">
      <p>Pokedex</p>
      <div className="caughtSeen">
        <div className="caught">
          <img src={pokeballColor} 
          alt="pokeball" 
          style={{width: "30px", marginRight: "10px"}}
          />
          <p>438</p>
        </div>
        <div className="seen">
          <img src={pokeball} 
          alt="pokeball" 
          style={{width: "30px", marginRight: "10px" }}/>
          <p>649</p>
        </div>
      </div>
      </div>
    </div>
  )
}
