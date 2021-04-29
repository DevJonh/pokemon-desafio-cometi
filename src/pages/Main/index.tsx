import * as Styles from "./styles";

import CardPokemon from "../../components/CardPokemon";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import TitleFilter from "../../components/TitleFilter";

import pokemon from "../../assets/pokemon.svg";
import Carrossel from "../../components/Carrossel";

const Main = () => {
  return (
    <>
      <Header />
      <Styles.Content>
        <TitleFilter />
        <Styles.Container>
          <CardPokemon
            gallery={false}
            img={pokemon}
            name="Charmander"
            cod={14}
            type="fire"
          />
          <CardPokemon
            gallery={false}
            img={pokemon}
            name="Charmander"
            cod={14}
            type="fire"
          />
          <CardPokemon
            gallery={false}
            img={pokemon}
            name="Charmander"
            cod={14}
            type="fire"
          />
          <CardPokemon
            gallery={false}
            img={pokemon}
            name="Charmander"
            cod={14}
            type="fire"
          />
          <CardPokemon
            gallery={false}
            img={pokemon}
            name="Charmander"
            cod={14}
            type="fire"
          />
          <CardPokemon
            gallery={false}
            img={pokemon}
            name="Charmander"
            cod={14}
            type="fire"
          />
        </Styles.Container>
      </Styles.Content>
      <Carrossel img={pokemon} name="Charmander" cod={14} type="fire" />
      <Footer />
    </>
  );
};

export default Main;
