import * as Styles from "./styles";

interface ITitleFilter{
  title?: string
}

const TitleFilter = ({title}:ITitleFilter) => {
  return (
    <Styles.Container>
      {!title ? (
      <div>
        <span>filter</span>
        <select name="" id="">
          <option value="Selecione um filtro" selected>
            Selecione um filtro
          </option>
          <option value="Fire">Fire</option>
          <option value="Eletric">Eletric</option>
        </select>
      </div>

      ): (
      <div>
        <h3>{title}</h3>
      </div>

      )}
    </Styles.Container>
  );
};

export default TitleFilter;
