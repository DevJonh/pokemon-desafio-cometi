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

const Carrossel = () => {
  const [page, setPage] = useState(1);
  const { PokemonsGallery, setPokemonDetails } = usePokemon();

  const itemsExibir = useMemo(() => {
    const { result, totalPage } = paginationObject(PokemonsGallery, page, 5);

    return {
      result,
      totalPage,
    };
  }, [PokemonsGallery, page]);

  return (
    <>
      <Styles.Container>
        <Styles.Icon
          onClick={() => (page - 1 !== 0 ? setPage(page - 1) : setPage(page))}
          disabled={page - 1 === 0 ? true : false}
        >
          <MdKeyboardArrowLeft size={"1.5rem"} />
        </Styles.Icon>
        {itemsExibir.result.map((item) => (
          <Styles.ContainerImage key={item.id}>
            <Styles.Details>
              <button onClick={() => setPokemonDetails(item.id)}>
                <MdVisibility size={"1.5rem"} color={"#fff"} />
              </button>
              <button>
                <MdAdd size={"1.5rem"} color={"#fff"} />
              </button>
            </Styles.Details>
            <img src={item.sprites.front_default} alt="" />
            <Styles.Index>
              <span>{item.id}</span>
            </Styles.Index>
            <Styles.Type>
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
        >
          <MdKeyboardArrowRight size={"1.5rem"} />
        </Styles.Icon>
      </Styles.Container>
    </>
  );
};

export default Carrossel;
