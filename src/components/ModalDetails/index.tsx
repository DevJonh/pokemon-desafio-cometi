import { MdAdd, MdClear } from "react-icons/md";
import { useAuth } from "../../store/useAuth";
import { usePokemon } from "../../store/usePokemon";
import Loading from "../Loading";
import * as Styles from "./styles";

const ModalDetails = () => {
  const { openModal, setModal, pokemonDetail } = usePokemon();
  const { AddPokemon, userLogged } = useAuth();

  const addPokemon = (id: number) => {
    if (!userLogged) {
      alert("Realize um Login para adicionar um Pokémon! ;)");
    } else {
      AddPokemon(pokemonDetail, id);
    }
  };

  return pokemonDetail.name ? (
    <Styles.Container modal={openModal}>
      <Styles.Wrapper>
        <button onClick={() => setModal(false)} className="icon">
          <MdClear size={"1.5rem"} />
        </button>
        <button onClick={() => addPokemon(pokemonDetail.id)} className="icon2">
          <MdAdd size={"1.5rem"} />
        </button>
        <Styles.Header>
          <Styles.BgImage>
            <img src={pokemonDetail.sprites.front_default} alt="" />
          </Styles.BgImage>
          <Styles.HeaderTitle>
            <h2>{pokemonDetail.name}</h2>
            <p>
              <strong>Types: </strong>
              {pokemonDetail.types.map(
                ({ type }) =>
                  ` ${type.name.charAt(0).toUpperCase() + type.name.slice(1)} `
              )}
            </p>
            <p>
              <strong>Peso: </strong>
              {`${pokemonDetail.weight / 10} kg`}
            </p>
            <p>
              <strong>Height: </strong>
              {`${pokemonDetail.height * 10} cm`}
            </p>
            <p>
              <strong>Espécies: </strong>
              {pokemonDetail.species.name.charAt(0).toUpperCase() +
                pokemonDetail.species.name.slice(1)}
            </p>
          </Styles.HeaderTitle>
        </Styles.Header>
        <Styles.Content>
          <Styles.ContentTable>
            <thead>
              <tr>
                <th>Abilities</th>
              </tr>
            </thead>
            <tbody>
              {pokemonDetail.abilities.map(({ ability }) => (
                <tr key={ability.name}>
                  <td>
                    {ability.name.charAt(0).toUpperCase() +
                      ability.name.slice(1)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Styles.ContentTable>
          <Styles.ContentTable>
            <thead>
              <tr>
                <th>Stats Base</th>
              </tr>
            </thead>
            <tbody>
              {pokemonDetail.stats.map(({ base_stat, stat }) => (
                <tr key={stat.name}>
                  <td>
                    <strong>{stat.name}: </strong>
                    {base_stat}
                  </td>
                </tr>
              ))}
            </tbody>
          </Styles.ContentTable>
        </Styles.Content>
        <Styles.Footer>
          <h3>{pokemonDetail.name}</h3>
        </Styles.Footer>
      </Styles.Wrapper>
    </Styles.Container>
  ) : (
    <Styles.Container modal={openModal}>
      <Loading />
    </Styles.Container>
  );
};

export default ModalDetails;
