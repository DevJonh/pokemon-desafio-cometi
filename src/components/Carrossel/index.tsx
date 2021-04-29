import * as Styles from "./styles";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface ICardPokemonProps {
  img: string;
  type: string;
  cod: number;
  name: string;
}

const Carrossel = ({ img, type, cod, name }: ICardPokemonProps) => {
  return (
    <>
      <Styles.Container>
        <Styles.Icon>
          <MdKeyboardArrowLeft size={"1.5rem"} />
        </Styles.Icon>
        <Styles.ContainerImage>
          <img src={img} alt="" />
          <Styles.Index>
            <span>{cod}</span>
          </Styles.Index>
          <Styles.Type>{type}</Styles.Type>
          <p>{name}</p>
        </Styles.ContainerImage>
        <Styles.ContainerImage>
          <img src={img} alt="" />
          <Styles.Index>
            <span>{cod}</span>
          </Styles.Index>
          <Styles.Type>{type}</Styles.Type>
          <p>{name}</p>
        </Styles.ContainerImage>
        <Styles.ContainerImage>
          <img src={img} alt="" />
          <Styles.Index>
            <span>{cod}</span>
          </Styles.Index>
          <Styles.Type>{type}</Styles.Type>
          <p>{name}</p>
        </Styles.ContainerImage>
        <Styles.ContainerImage>
          <img src={img} alt="" />
          <Styles.Index>
            <span>{cod}</span>
          </Styles.Index>
          <Styles.Type>{type}</Styles.Type>
          <p>{name}</p>
        </Styles.ContainerImage>
        <Styles.ContainerImage>
          <img src={img} alt="" />
          <Styles.Index>
            <span>{cod}</span>
          </Styles.Index>
          <Styles.Type>{type}</Styles.Type>
          <p>{name}</p>
        </Styles.ContainerImage>
        <Styles.Icon>
          <MdKeyboardArrowRight size={"1.5rem"} />
        </Styles.Icon>
      </Styles.Container>
    </>
  );
};

export default Carrossel;
