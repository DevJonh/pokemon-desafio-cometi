import { useState } from "react";
import * as Styles from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <Styles.Container
      type="text"
      placeholder="Search Pokémon"
      value={search}
      onChange={(e) => setSearch(e.currentTarget.value)}
    />
  );
};

export default Search;
