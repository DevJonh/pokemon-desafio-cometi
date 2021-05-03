/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Styles from "./styles";

import CardPokemon from "../../components/CardPokemon";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TitleFilter from "../../components/TitleFilter";

import { useEffect, useState } from "react";
import axios from "../../services/axios";
import {
  IPokemon,
  IPokemons,
  IResultPokemon,
  IResultPokemonType,
} from "../../types/apiType";
import { usePokemon } from "../../store/usePokemon";
import Carrossel from "../../components/Carrossel";
import { pagination } from "../../utils/pagination";
import ModalDetails from "../../components/ModalDetails";
import Loading from "../../components/Loading";

const Main = () => {
  const [pokemon, setPokemon] = useState<IResultPokemon[]>(
    [] as IResultPokemon[]
  );
  const [pokemonGallery, setPokemonGallery] = useState<IResultPokemon[]>(
    [] as IResultPokemon[]
  );

  const {
    pokemonSearch,
    search,
    page,
    filter,
    setFilters,
    setPokemonPage,
    setPokemonS,
    setPokemonsGallery,
    setPages,
  } = usePokemon();

  useEffect(() => {
    if (pokemonSearch !== "") {
      const data: Promise<IPokemon> = axios
        .get(`/pokemon/${pokemonSearch.toLowerCase()}/`)
        .then((res) => res.data)
        .catch((e) => alert("Pokémon não encontrado :("));

      if (data) {
        data
          .then((res) => {
            setPokemonS(res);
          })
          .catch((e) => alert("Pokémon não encontrado :("));
      }
    } else if (page === 0 && search === "Selecione o tipo") {
      setPokemonS(null);
      const data: Promise<IPokemons> = axios
        .get(`/pokemon/?limit=${6}&offset=${0}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));

      if (data) {
        data.then((res) => {
          const { results, count } = res;
          setPokemon([...results]);
          setPages(count, true);
        });
      }
    } else if (page > 0 && search === "Selecione o tipo") {
      setPokemonS(null);
      const data: Promise<IPokemons> = axios
        .get(`/pokemon/?limit=${6}&offset=${6 * page}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));

      if (data) {
        data.then((res) => {
          const { results, count } = res;
          setPokemon([...results]);
          setPages(count, true);
        });
      }
    } else if (search !== "Selecione o tipo") {
      setPokemonS(null);
      const filterActual = filter.filter(
        (fill) => search === fill.name && fill.name
      );

      const data: Promise<IResultPokemonType> = axios
        .get(`/type/${filterActual[0].name}`)
        .then((res) => res.data)
        .catch((e) => console.log(e));

      if (data) {
        data.then((res) => {
          const { pokemon } = res;
          const pokeTemp: IResultPokemon[] = [] as IResultPokemon[];
          pokemon.forEach((p, i) => {
            pokeTemp.push(p.pokemon);

            if (pokemon.length === i + 1) {
              const { result, totalPage } = pagination(pokeTemp, page + 1, 6);
              setPages(totalPage, false);
              setPokemon(result);
            }
          });
        });
      }
    }
  }, [page, search, pokemonSearch]);

  useEffect(() => {
    const dataFilter: Promise<IPokemons> = axios
      .get(`/type/`)
      .then((res) => res.data)
      .catch((e) => console.log(e));

    if (dataFilter) {
      dataFilter.then((res) => {
        const { results } = res;
        setFilters([...results]);
      });
    }
  }, []);

  useEffect(() => {
    const pageRandom = Math.floor(Math.random() * 750);
    const dataFilter: Promise<IPokemons> = axios
      .get(`/pokemon/?limit=${50}&offset=${pageRandom}`)
      .then((res) => res.data)
      .catch((e) => console.log(e));

    if (dataFilter) {
      dataFilter.then((res) => {
        const { results } = res;
        setPokemonGallery([...results]);
      });
    }
  }, []);

  useEffect(() => {
    if (pokemon.length > 0) {
      setPokemonPage(pokemon);
    }
    if (pokemonGallery.length > 0) {
      setPokemonsGallery(pokemonGallery);
    }
  }, [pokemon, pokemonGallery, search]);

  return (
    <>
      <Loading />
      <ModalDetails />
      <Header />
      <Styles.Content>
        <TitleFilter />
        <CardPokemon />
      </Styles.Content>
      <Carrossel />
      <Footer />
    </>
  );
};

export default Main;
