import { MdDelete, MdVisibility } from "react-icons/md";
import { useAuth } from "../../store/useAuth";
import { usePokemon } from "../../store/usePokemon";
import * as Styles from "./styles";
const MyPokemons = () => {
  const { setPokemonDetails } = usePokemon();
  const { myPokemons, RemovePokemon, userLogged } = useAuth();

  const removePokemon = (id: number) => {
    if (!userLogged) {
      alert("Realize um Login para adicionar um Pokémon! ;)");
    } else {
      RemovePokemon(id);
    }
  };

  return (
    <Styles.Container>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Ação</th>
        </tr>
      </thead>
      <tbody>
        {myPokemons.map(({ idPokemon, img, name, type }) => (
          <tr key={idPokemon}>
            <td>
              <div>
                <img src={img} alt="" />
              </div>
            </td>
            <td>{name.charAt(0).toUpperCase() + name.slice(1)}</td>
            <td>
              <Styles.Type>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Styles.Type>
            </td>
            <td>
              <button onClick={() => setPokemonDetails(idPokemon)}>
                <MdVisibility size={"1.5rem"} color={"#fff"} />
              </button>
              <button onClick={() => removePokemon(idPokemon)}>
                <MdDelete size={"1.5rem"} color={"#fff"} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Styles.Container>
  );
};

export default MyPokemons;
