import * as Styles from "./styles";

import logo from "../../assets/logo.svg";
import logoCometi from "../../assets/logo_cometi.svg";
import Search from "../Search";

const Header = () => {
  return (
    <Styles.Container>
      <img src={logo} alt="" />
      <Search />
      <img src={logoCometi} alt="" />
    </Styles.Container>
  );
};

export default Header;
