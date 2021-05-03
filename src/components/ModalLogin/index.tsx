import { MdClear, MdPerson, MdVpnKey } from "react-icons/md";
import { useAuth } from "../../store/useAuth";
import * as Styles from "./styles";

import logo from "../../assets/logo.svg";
import { FormEvent, useState } from "react";

const ModalLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apelido, setApelido] = useState("");

  const { openModalLogin, setOpenModal, Login, Register } = useAuth();
  const [isRegistration, setIsRegistration] = useState(false);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Login(email, password);
    setTimeout(() => {
      setEmail("");
      setPassword("");
    }, 2000);
  };
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    Register(apelido, email, password);
    setTimeout(() => {
      setEmail("");
      setPassword("");
      setApelido("");
    }, 2000);
  };

  return (
    <Styles.Container open={openModalLogin}>
      {isRegistration ? (
        <Styles.Wrapper>
          <button onClick={() => setOpenModal(false)} className="icon">
            <MdClear size={"1.5rem"} />
          </button>
          <img src={logo} alt="" />
          <Styles.Form onSubmit={(e) => handleRegister(e)}>
            <div>
              <MdPerson />
              <input
                value={apelido}
                onChange={(e) => setApelido(e.currentTarget.value)}
                type="text"
                placeholder="Apelido"
              />
            </div>
            <div>
              <MdPerson />
              <input
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                type="email"
                placeholder="E-mail"
              />
            </div>
            <div>
              <MdVpnKey />
              <input
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                type="password"
                placeholder="Senha"
              />
            </div>
            <p>
              Já tem Login?{" "}
              <strong onClick={() => setIsRegistration(false)}>
                Entre aqui
              </strong>
            </p>

            <button type="submit">CADASTRAR</button>
          </Styles.Form>
        </Styles.Wrapper>
      ) : (
        <Styles.Wrapper>
          <button onClick={() => setOpenModal(false)} className="icon">
            <MdClear size={"1.5rem"} />
          </button>
          <img src={logo} alt="" />
          <Styles.Form onSubmit={(e) => handleLogin(e)}>
            <div>
              <MdPerson />
              <input
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                type="email"
                placeholder="E-mail"
              />
            </div>
            <div>
              <MdVpnKey />
              <input
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                type="password"
                placeholder="Senha"
              />
            </div>
            <p>
              Ainda não tem Login?{" "}
              <strong onClick={() => setIsRegistration(true)}>
                Cadastre-se
              </strong>
            </p>

            <button type="submit">LOGIN</button>
          </Styles.Form>
        </Styles.Wrapper>
      )}
    </Styles.Container>
  );
};

export default ModalLogin;
