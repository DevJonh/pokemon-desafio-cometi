import * as Styles from "./styles";

const TitleFilter = () => {
  return (
    <Styles.Container>
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
    </Styles.Container>
  );
};

export default TitleFilter;
