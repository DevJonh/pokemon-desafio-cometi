import * as Styles from "./styles";

interface ICardPokemonProps {
  img: string;
  type: string;
  cod: number;
  name: string;
  gallery: boolean;
}

const CardPokemon = ({ img, type, cod, name, gallery }: ICardPokemonProps) => {
  return (
    <>
      <Styles.ContainerImage>
        <img src={img} alt="" />
        <Styles.Index gallery={gallery}>
          <span>{cod}</span>
        </Styles.Index>
        <Styles.Type gallery={gallery}>{type}</Styles.Type>
        <p>{name}</p>
      </Styles.ContainerImage>
    </>
  );
};

export default CardPokemon;
