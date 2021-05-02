import { useState } from "react";
import { usePokemon } from "../../store/usePokemon";
import * as Styles from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");
  const { filter, setSearchPokemon } = usePokemon();

  const handleSearch = (e: string) => {
    if (e === "Enter") {
      const isType = filter.filter(
        (fill) => fill.name === search.toLowerCase() && fill.name
      );

      if (isType.length > 0) {
        alert("Por favor pesquise pelo nome do Pokémon!");
        setSearch("");
      } else {
        setSearchPokemon(search);
        setSearch("");
      }
    }
  };

  return (
    <Styles.Container
      type="text"
      placeholder="Search Pokémon"
      value={search}
      onChange={(e) => setSearch(e.currentTarget.value)}
      onKeyUp={(e) => handleSearch(e.key)}
    />
  );
};

export default Search;
