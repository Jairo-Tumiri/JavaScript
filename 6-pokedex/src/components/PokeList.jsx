import { useEffect, useState } from "react";
import "./PokeList.scss";
import PokemonCard from "./PokemonCard";
export default function PokeList() {
  const [allPokemon, setAllPokemon] = useState([]);
  const getAllPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    );
    const data = await response.json();
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();
        setAllPokemon((currentList) => [...currentList, data]);
        await allPokemon.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };
  useEffect(() => {
    getAllPokemon();
  },[]);
  return (
    <div className="appContainer">
      <div className="pokemonContainer">
        <div className="allContainer">
          {allPokemon.map((pokemonStats) => (
            <PokemonCard
              key={pokemonStats.id + Math.random()}
              id={pokemonStats.id.toString().padStart(3, "0")}
              name={pokemonStats.name}
              image={
                pokemonStats.sprites.other[`official-artwork`].front_default
              }
              type={pokemonStats.types[0].type.name}
              weight={pokemonStats.weight}
              height={pokemonStats.height}
              stats={pokemonStats.stats
                .map((stat) => stat.base_stat)
                .slice(0, 3)}
              statsName={pokemonStats.stats
                .map((stat) => stat.stat.name)
                .slice(0, 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
