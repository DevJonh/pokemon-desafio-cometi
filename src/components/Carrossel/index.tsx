import * as Styles from "./styles";
import {
  MdAdd,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdVisibility,
} from "react-icons/md";
import { usePokemon } from "../../store/usePokemon";
import { useMemo, useState } from "react";
import { paginationObject } from "../../utils/pagination";
import { useAuth } from "../../store/useAuth";

const Carrossel = () => {
  const [page, setPage] = useState(1);
  const { PokemonsGallery, setPokemonDetails } = usePokemon();

  const { userLogged, AddPokemon } = useAuth();

  const itemsExibir = useMemo(() => {
    const { result, totalPage } = paginationObject(PokemonsGallery, page, 5);

    return {
      result,
      totalPage,
    };
  }, [PokemonsGallery, page]);

  const addPokemon = (id: number) => {
    if (!userLogged) {
      alert("Realize um Login para adicionar um Pokémon! ;)");
    } else {
      AddPokemon(PokemonsGallery, id);
    }
  };

  return (
    <>
      <Styles.Container>
        <Styles.Icon
          onClick={() => (page - 1 !== 0 ? setPage(page - 1) : setPage(page))}
          disabled={page - 1 === 0 ? true : false}
          className="left"
        >
          <MdKeyboardArrowLeft size={"1.5rem"} />
        </Styles.Icon>
        {itemsExibir.result.map((item) => (
          <Styles.ContainerImage key={item.id}>
            <Styles.Details>
              <button onClick={() => setPokemonDetails(item.id)}>
                <MdVisibility size={"1.5rem"} color={"#fff"} />
              </button>
              <button onClick={() => addPokemon(item.id)}>
                <MdAdd size={"1.5rem"} color={"#fff"} />
              </button>
            </Styles.Details>
            <img src={item.sprites.front_default} alt="" />
            <Styles.Index>
              <span>{item.id}</span>
            </Styles.Index>
            <Styles.Type color={item.types[0].color} text={item.types[0].text}>
              {item.types[0].type.name.charAt(0).toUpperCase() +
                item.types[0].type.name.slice(1)}
            </Styles.Type>
            <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
          </Styles.ContainerImage>
        ))}

        <Styles.Icon
          onClick={() =>
            page + 1 !== itemsExibir.totalPage
              ? setPage(page + 1)
              : setPage(page)
          }
          disabled={page + 1 === itemsExibir.totalPage ? true : false}
          className="right"
        >
          <MdKeyboardArrowRight size={"1.5rem"} />
        </Styles.Icon>
      </Styles.Container>
    </>
  );
};

export default Carrossel;
