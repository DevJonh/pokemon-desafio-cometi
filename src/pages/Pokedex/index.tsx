import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import ModalDetails from "../../components/ModalDetails";
import MyPokemons from "../../components/MyPokemons";
import TitleFilter from "../../components/TitleFilter";
import { useAuth } from "../../store/useAuth";

import * as Styles from "./styles";

const Pokedex = () => {
  const { myPokemons, isLoading } = useAuth();
  return (
    <Styles.Container>
      <Loading />
      <ModalDetails />
      <Header />
      <Styles.Content>
        <TitleFilter title="Minha Pokédex" />
        {myPokemons.length === 0 && !isLoading ? (
          <h4>Você não possui nenhum pokémon na sua pokédex :(</h4>
        ) : (
          <MyPokemons />
        )}
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
};

export default Pokedex;
