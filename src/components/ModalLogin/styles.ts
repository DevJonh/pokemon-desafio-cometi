import styled from "styled-components";

interface IModal {
  open: boolean;
}

export const Container = styled.div<IModal>`
  position: fixed;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.25);
  z-index: 7;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.3s;

  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
`;

export const Wrapper = styled.div`
  position: relative;
  background-color: #e0d7ec;
  width: 30%;
  height: 80vh;
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.2rem;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #004483;
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    color: #fff;
    height: 1rem;
  }

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
  img {
    width: 70%;
  }
`;

export const Form = styled.form`
  width: 70%;
  div {
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem 0 0.5rem 0.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 2px solid #000;
    & + div {
      margin-top: 1rem;
    }
    input {
      flex: 1 1 100%;
      margin-left: 0.3rem;
      padding-left: 0.3rem;
      height: 2.5rem;
      outline: none;
    }
  }

  p {
    font-size: 0.75rem;
    text-align: right;
    margin-top: 0.3rem;

    strong {
      background: none;
      padding: 0;
      font-size: 0.75rem;
      color: #18903f;
      cursor: pointer;
      transition: 0.3s;
      font-weight: 500;

      &:hover {
        color: #3aa05b;
      }
    }
  }

  button {
    width: 100%;
    margin-top: 1rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    border: 2px solid #000;
    background-color: #3aa05b;
    color: #fff;
    letter-spacing: 0.2rem;
    font-weight: 500;
    font-size: 1rem;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: #18903f;
    }
  }
`;
