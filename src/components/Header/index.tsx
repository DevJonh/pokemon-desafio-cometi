import * as Styles from "./styles";

import logo from "../../assets/logo.svg";
import logoCometi from "../../assets/logo_cometi.svg";

import Search from "../Search";
import IsLogged from "../IsLogged";
import ModalLogin from "../ModalLogin";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <ModalLogin />
      <Styles.Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Search />
        <IsLogged />
        <img src={logoCometi} alt="" />
      </Styles.Container>
    </>
  );
};

export default Header;
