import React, { createContext, useState, useContext } from "react";
import axios from "../services/axios";
import { IPokemon, IPokemonDetails, IResultPokemon } from "../types/apiType";

interface IPokemonContext {
  pokemonSearch: string;
  totalPage: number;
  pokemonsSearch: IPokemon | null;
  Pokemons: IPokemon[];
  PokemonsGallery: IPokemon[];
  filter: IResultPokemon[];
  page: number;
  search: string;
  pokemonDetail: IPokemonDetails;
  openModal: boolean;
  setSearchPokemon(s: string): void;
  setSelectedPage(n: number): void;
  setModal(b: boolean): void;
  setPages(n: number, divider: boolean): void;
  setSelectedSearch(n: string): void;
  setFilters(n: IResultPokemon[]): void;
  setPokemonS(pokemon: IPokemon | null): void;
  setPokemonPage(pokemon: IResultPokemon[]): void;
  setPokemonDetails(id: number): void;
  setPokemonsGallery(pokemonGallery: IResultPokemon[]): void;
}

const PokemonContext = createContext<IPokemonContext>({} as IPokemonContext);

const PokemonProvider: React.FC<any> = ({ children }) => {
  const [Pokemons, setPokemons] = useState<IPokemon[]>([] as IPokemon[]);
  const [pokemonsSearch, setPokemonsSearch] = useState<IPokemon | null>(null);
  const [PokemonsGallery, setPokemonGallery] = useState<IPokemon[]>(
    [] as IPokemon[]
  );
  const [pokemonSearch, setPokemonSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [searchActual, setSearchActual] = useState("Selecione o tipo");
  const [filter, setFilter] = useState<IResultPokemon[]>(
    [] as IResultPokemon[]
  );
  const [openModal, setOpenModal] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState<IPokemonDetails>(
    {} as IPokemonDetails
  );

  const setSelectedPage = (n: number) => {
    setPage(n);
  };
  const setSelectedSearch = (n: string) => {
    setSearchActual(n);
  };
  const setFilters = (filter: IResultPokemon[]) => {
    setFilter(filter);
  };
  const setPokemonPage = (pokemon: IResultPokemon[]) => {
    let dataTemp: IPokemon[] = [] as IPokemon[];

    pokemon.forEach(async (pok, i) => {
      let { id, name, sprites, types }: IPokemon = await axios
        .get(pok.url)
        .then<IPokemon>(({ data }) => data);

      dataTemp.push({ id, name, sprites, types });

      if (pokemon.length === i + 1) {
        dataTemp = dataTemp.sort((a, b) =>
          a.id < b.id ? -1 : a.id > b.id ? 1 : 0
        );
        setPokemons(dataTemp);
      }
    });
  };
  const setPokemonsGallery = (pokemonGallery: IResultPokemon[]) => {
    let dataTemp: IPokemon[] = [] as IPokemon[];

    pokemonGallery.forEach(async (pok, i) => {
      let { id, name, sprites, types }: IPokemon = await axios
        .get(pok.url)
        .then<IPokemon>(({ data }) => data);

      dataTemp.push({ id, name, sprites, types });

      if (pokemonGallery.length === i + 1) {
        dataTemp = dataTemp.sort((a, b) =>
          a.id < b.id ? -1 : a.id > b.id ? 1 : 0
        );
        setPokemonGallery(dataTemp);
      }
    });
  };

  const setPokemonDetails = async (id: number) => {
    const data: IPokemonDetails = await axios
      .get(`/pokemon/${id}`)
      .then((res) => res.data);

    const {
      abilities,
      height,
      weight,
      species,
      sprites,
      name,
      stats,
      types,
    } = data;
    setPokemonDetail({
      abilities,
      height,
      weight,
      species,
      sprites,
      name,
      stats,
      types,
    });
    if (pokemonDetail.sprites) setOpenModal(true);
  };

  const setModal = (b: boolean) => setOpenModal(b);

  const setPages = (n: number, divider: boolean) => {
    if (!divider) {
      setTotalPage(n);
    } else {
      setTotalPage(Math.ceil(n / 6));
    }
  };

  const setSearchPokemon = (s: string) => {
    setPokemonSearch(s);
  };
  const setPokemonS = (pokemon: IPokemon | null) => {
    setPokemonsSearch(pokemon);
  };

  return (
    <PokemonContext.Provider
      value={{
        openModal,
        pokemonDetail,
        pokemonSearch,
        pokemonsSearch,
        totalPage,
        Pokemons,
        PokemonsGallery,
        filter,
        page,
        search: searchActual,
        setSelectedPage,
        setSelectedSearch,
        setFilters,
        setPokemonPage,
        setPokemonsGallery,
        setPages,
        setSearchPokemon,
        setPokemonS,
        setPokemonDetails,
        setModal,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

const usePokemon = (): IPokemonContext => {
  const context = useContext(PokemonContext);

  return context;
};

export { PokemonProvider, usePokemon };
