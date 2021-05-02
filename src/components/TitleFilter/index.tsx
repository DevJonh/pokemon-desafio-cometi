import { usePokemon } from "../../store/usePokemon";
import * as Styles from "./styles";

interface ITitleFilter {
  title?: string;
}

const TitleFilter = ({ title }: ITitleFilter) => {
  const { filter, search, setSelectedSearch, setSearchPokemon } = usePokemon();

  return (
    <Styles.Container>
      {!title ? (
        <div>
          <span>filter</span>
          <select
            defaultValue={"Selecione o tipo"}
            onChange={(e) => {
              setSelectedSearch(e.target.value);
              setSearchPokemon("");
            }}
          >
            <option value={search}>Selecione o tipo</option>
            {filter.map((fill) => (
              <option key={fill.name} value={fill.name}>
                {fill.name}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div>
          <h3>{title}</h3>
        </div>
      )}
    </Styles.Container>
  );
};

export default TitleFilter;
