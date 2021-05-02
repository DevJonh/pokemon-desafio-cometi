import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { usePokemon } from "../../store/usePokemon";

import * as Styles from "./styles";

const Pagination = () => {
  const { page, setSelectedPage, totalPage, setSearchPokemon } = usePokemon();
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    if (page < 1) {
      let pageTemp = [page, page + 1, page + 2];
      setItems(pageTemp);
    } else if (page === totalPage - 1) {
      let pageTemp = [page - 2, page - 1, page];
      setItems(pageTemp);
    } else if (page >= 1 || page + 1 < totalPage) {
      let pageTemp = [page - 1, page, page + 1];
      setItems(pageTemp);
    }
  }, [totalPage, page]);

  return (
    <Styles.Container>
      <Styles.Button
        className="previous"
        onClick={() => {
          setSelectedPage(page - 1);
          setSearchPokemon("");
        }}
        disabled={page <= 0 ? true : false}
      >
        <MdKeyboardArrowLeft size={32} />
      </Styles.Button>

      <Styles.Pages>
        {items.map((item) => (
          <button
            className={item === page ? "active" : ""}
            disabled={
              item + 1 === totalPage && page === item + 1
                ? true
                : item === page
                ? true
                : false
            }
            key={item}
            onClick={() => {
              setSelectedPage(item);
              setSearchPokemon("");
            }}
          >
            {item >= totalPage + 1 ? item : item + 1}
          </button>
        ))}
      </Styles.Pages>

      <Styles.Button
        disabled={page === totalPage - 1 ? true : false}
        className="next"
        onClick={() => {
          setSelectedPage(page + 1);
          setSearchPokemon("");
        }}
      >
        <MdKeyboardArrowRight size={32} />
      </Styles.Button>
    </Styles.Container>
  );
};

export default Pagination;
