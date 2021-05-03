import styled from "styled-components";

interface IMenuProps {
  menu: boolean;
}

export const BtnLogin = styled.button`
  background-color: #7e7394;
  height: 2.5rem;
  width: 6rem;
  color: #fff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  border: 2px solid #000;

  cursor: pointer;
  transition: 0.3s;

  font-size: 1rem;
  letter-spacing: 0.1rem;

  &:hover {
    background-color: #b4adbe;
  }
`;

export const User = styled.div<IMenuProps>`
  position: relative;
  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
  }
  ul {
    list-style: none;
    position: absolute;
    top: 2.2rem;
    right: -1.7rem;
    z-index: 3;
    background-color: #e0d7ec;
    padding: 0.2rem 0.5rem;

    height: ${({ menu }) => (menu ? "auto" : 0)};
    opacity: ${({ menu }) => (menu ? 1 : 0)};
    visibility: ${({ menu }) => (menu ? "visible" : "hidden")};

    li {
      width: 9rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      color: #222;
      cursor: pointer;
      transition: 0.3s;
      a {
        text-decoration: none;
        color: #222;
        transition: 0.3s;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &:hover {
          color: #18903f;
        }
      }
      & + li {
        margin-top: 0.5rem;
      }

      &:hover {
        color: #18903f;
      }

      svg {
        margin-left: 0.3rem;
      }
    }
  }
`;
