import React, { createContext, useState, useContext } from "react";
import firebase from "../config/firebase";
import "firebase/auth";
import { useEffect } from "react";
import { IMyPokemons, IPokemon, IPokemonDetails } from "../types/apiType";

interface IAuthContext {
  isLoading: boolean;
  myPokemons: Array<IMyPokemons>;
  userLogged: string | null;
  islogged: boolean;
  openModalLogin: boolean;
  setOpenModal(b: boolean): void;
  Logout(): void;
  RemovePokemon(id: number): void;
  AddPokemon(element: IPokemon[] | IPokemonDetails, id: number): void;
  Login(email: string, password: string): void;
  Register(apelido: string, email: string, password: string): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC<any> = ({ children }) => {
  const [openModalLogin, setOpenModalLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [myPokemons, setMyPokemons] = useState<Array<IMyPokemons>>(
    [] as IMyPokemons[]
  );
  const [islogged, setIslogged] = useState(false);
  const [userLogged, setUserLogged] = useState(() =>
    localStorage.getItem("@pokemon:user")
      ? localStorage.getItem("@pokemon:user")
      : ""
  );

  useEffect(() => {
    const name = localStorage.getItem("@pokemon:user");
    if (name) {
      setUserLogged(name);
    } else {
      setUserLogged(null);
    }
  }, [islogged]);

  useEffect(() => {
    if (true) {
      GetMyPokemon();
    }
  }, [islogged]);

  const Login = async (email: string, password: string) => {
    setIsLoading(true);
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        firebase
          .firestore()
          .collection("users")
          .where("email", "==", res.user?.email)
          .get()
          .then((res) => {
            const name = res.docs[0].data().name;
            const email = res.docs[0].data().email;
            alert("Usuário Logado");
            localStorage.setItem("@pokemon:user", name);
            localStorage.setItem("@pokemon:email", email);
            setIsLoading(false);
            setIslogged(true);
            setOpenModalLogin(false);
          });
      })
      .catch((e) => {
        if (e.code === "auth/invalid-email") {
          alert("Por favor insira um email válido!");
        }
        if (e.code === "auth/user-not-found") {
          alert("Usuário não cadastrado.");
        }
        if (e.code === "auth/wrong-password") {
          alert("Email/Senha inválido.");
        }
        setIsLoading(false);
        setIslogged(false);
        setOpenModalLogin(true);
      });
  };

  const Register = async (apelido: string, email: string, password: string) => {
    setIsLoading(true);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        firebase
          .firestore()
          .collection("users")
          .add({ email: res.user?.email, name: apelido, created: new Date() })
          .then((res) => {
            localStorage.setItem("@pokemon:user", apelido);
            localStorage.setItem("@pokemon:email", email);
            setIsLoading(false);
            setIslogged(true);
            setOpenModalLogin(false);
            alert("Usuário Cadastrado com sucesso");
          });
      })
      .catch((e) => {
        if (e.code === "auth/invalid-email") {
          alert("Por favor insira um email válido!");
        }
        if (e.code === "auth/email-already-in-use") {
          alert("Usuário já existe.");
        }
        if (e.code === "auth/weak-password") {
          alert("Insira uma senha de no mínimo 6 caracteres");
        }
        setIsLoading(false);
        setIslogged(false);
        setOpenModalLogin(true);
      });
  };

  const Logout = async () => {
    localStorage.removeItem("@pokemon:user");
    localStorage.removeItem("@pokemon:email");
    setIslogged(false);
    setUserLogged(null);
    setMyPokemons([]);
    setIsLoading(false);
  };

  const setOpenModal = (b: boolean) => {
    setOpenModalLogin(b);
  };

  const GetMyPokemon = async () => {
    setIsLoading(true);
    const data: Array<any> = [];

    const email = localStorage.getItem("@pokemon:email");

    if (email) {
      await firebase
        .firestore()
        .collection("pokedex")
        .where("user", "==", email)
        .get()
        .then(({ docs }) => {
          docs.forEach((doc) => {
            data.push(doc.data());
          });
        });
    }
    setIsLoading(false);

    if (data.length > 0) {
      setMyPokemons(data);
    }
  };

  const AddPokemon = async (
    element: IPokemon[] | IPokemonDetails,
    id: number
  ) => {
    setIsLoading(true);

    if (Array.isArray(element)) {
      const pokemon = element.filter((el) => el.id === id && el);

      const email = localStorage.getItem("@pokemon:email");

      if (email) {
        await firebase
          .firestore()
          .collection("pokedex")
          .add({
            idPokemon: pokemon[0].id,
            name: pokemon[0].name,
            img: pokemon[0].sprites.front_default,
            types: {
              name: pokemon[0].types[0].type.name,
              color: pokemon[0].types[0].color,
              text: pokemon[0].types[0].text,
            },
            added: new Date(),
            user: email,
          })
          .then(async (res) => {
            await GetMyPokemon();
            alert(
              `${
                pokemon[0].name.charAt(0).toUpperCase() +
                pokemon[0].name.slice(1)
              } foi adicionado a sua Pokédex.`
            );
            setIsLoading(false);
          })
          .catch((e) => {
            alert("Falha ao adicionar o pokémon na sua pokédex!");
            setIsLoading(false);
          });
      } else {
        alert("Você precisa está logado!");
        setIsLoading(false);
      }
    } else {
      const email = localStorage.getItem("@pokemon:email");

      if (email) {
        firebase
          .firestore()
          .collection("pokedex")
          .add({
            idPokemon: element.id,
            name: element.name,
            img: element.sprites.front_default,
            type: element.types[0].type.name,
            added: new Date(),
            user: email,
          })
          .then(async (res) => {
            await GetMyPokemon();
            alert(
              `${
                element.name.charAt(0).toUpperCase() + element.name.slice(1)
              } foi adicionado a sua Pokédex.`
            );
            setIsLoading(false);
          })
          .catch((e) => {
            alert("Falha ao adicionar o pokémon na sua pokédex!");
            setIsLoading(false);
          });
      } else {
        alert("Você precisa está logado!");
        setIsLoading(false);
      }
    }
  };

  const RemovePokemon = async (id: number) => {
    setIsLoading(true);
    const email = localStorage.getItem("@pokemon:email");

    if (email) {
      const idDoc = await firebase
        .firestore()
        .collection("pokedex")
        .where("user", "==", email)
        .where("idPokemon", "==", id)
        .get()
        .then((res) => {
          return res.docs[0].id;
        });

      await firebase
        .firestore()
        .collection("pokedex")
        .doc(idDoc)
        .delete()
        .then(() => {
          GetMyPokemon();
          setIsLoading(false);
        })
        .catch((e) => alert("Falha na remoção do Pokémon."));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        myPokemons,
        userLogged,
        islogged,
        openModalLogin,
        setOpenModal,
        Login,
        Register,
        Logout,
        AddPokemon,
        RemovePokemon,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): IAuthContext => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
