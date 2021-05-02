import styled from "styled-components";

interface IContainerModalProps {
  modal: boolean;
}

export const Container = styled.div<IContainerModalProps>`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: opacity 0.3s linear;

  opacity: ${({ modal }) => (modal ? 1 : 0)};
  visibility: ${({ modal }) => (modal ? "visible" : "hidden")};
`;

export const Wrapper = styled.div`
  position: relative;
  background-color: #e0d7ec;
  width: 90%;
  height: 90vh;
  border-radius: 1rem;
  padding: 1rem;

  button.icon {
    position: absolute;
    top: 1rem;
    right: 1rem;

    cursor: pointer;
    background: none;

    transition: 0.3s;

    &:hover {
      color: #940000;
    }
  }

  button.icon2 {
    position: absolute;
    bottom: 2.5rem;
    right: 1rem;

    cursor: pointer;
    z-index: 7;

    background-color: #3aa05b;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    color: #fff;
    transition: 0.3s;

    &:hover {
      background-color: #18903f;
    }
  }
`;

export const BgImage = styled.div`
  width: 11rem;
  height: 12rem;
  background-color: #b4adbe;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: 11rem 1fr;
  column-gap: 2rem;
`;

export const HeaderTitle = styled.div`
  h2 {
    margin-top: 0.3rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
    font-size: 1.3rem;
    color: #222;

    &::after {
      content: "";
      width: 80%;
      height: 2px;
      display: block;
      background-color: #b4adbe;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 1rem;
    & + p {
      margin-top: 0.7rem;
    }
    strong {
      font-size: 0.95rem;
      letter-spacing: 0.15rem;
      color: #005c5f;
    }
  }
`;

export const Content = styled.div`
  margin-top: 1.7rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
`;

export const ContentTable = styled.table`
  th {
    color: #004483;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
  tr {
    td {
      padding-left: 0.5rem;
      strong {
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
    }
    padding: 1rem;
  }
  tbody tr {
    &:nth-child(odd) {
      background-color: #fff;
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  position: absolute;

  bottom: 0;
  left: 0;
  text-align: center;
  padding: 0.7rem;

  background-color: #7e7394;

  text-transform: uppercase;
  letter-spacing: 0.2rem;
  color: #fff;
  border-radius: 0 0 1rem 1rem;
`;
