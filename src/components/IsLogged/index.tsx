import { useState } from "react";
import {
  MdArrowDropDown,
  MdDonutLarge,
  MdPowerSettingsNew,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/useAuth";
import * as Styles from "./styles";

const IsLogged = () => {
  const { setOpenModal, userLogged, Logout } = useAuth();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {!userLogged ? (
        <Styles.BtnLogin onClick={() => setOpenModal(true)}>
          Login
        </Styles.BtnLogin>
      ) : (
        <Styles.User onClick={() => setOpenMenu(!openMenu)} menu={openMenu}>
          <h3>
            {userLogged} <MdArrowDropDown size={"1.5rem"} />
          </h3>
          <ul>
            <li>
              <Link to="/pokedex">
                Minha Pokedex <MdDonutLarge />
              </Link>
            </li>
            <li onClick={() => Logout()}>
              Logout <MdPowerSettingsNew />
            </li>
          </ul>
        </Styles.User>
      )}
    </>
  );
};

export default IsLogged;
