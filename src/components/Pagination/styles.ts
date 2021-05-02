import styled from "styled-components";

export const Container = styled.div`
  min-width: max-content;
  width: 32.5%;
  margin: 40px 0 40px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.8rem;

  position: absolute;
  right: 2.5rem;
  bottom: -12rem;
`;

export const Button = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: 2px solid #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  background: none;
  font-weight: 500;
  padding: 10px;
  transition: all 0.3s;
  color: #fff;
  background-color: #b4adbe;
  border-radius: 0.4rem;
  &.previous {
    margin-right: 2rem;
    :hover {
      background-color: #7e7394bb;
    }
    &:disabled {
      border: none;
      background-color: #7e7394;
      color: #aaa;
      cursor: initial;
    }
  }
  &.next {
    margin-left: 2rem;
    :hover {
      background-color: #7e7394bb;
    }
    &:disabled {
      border: none;
      background-color: #7e7394;
      color: #aaa;
      cursor: initial;
    }
  }
`;

export const Pages = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;

  button {
    width: 2.5rem;
    height: 2.5rem;
    background-color: #7e7394;
    color: #fff;
    font-size: 1.3rem;
    line-height: 2rem;

    border: 2px solid #000;
    cursor: pointer;

    border-radius: 0.4rem;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    &.active {
      background-color: #535662;
    }

    &:hover {
      background-color: #7e7394cc;
    }

    &:disabled {
      border: none;
      color: #bbb;
      cursor: initial;
      &:hover {
        background-color: #535662;
      }
    }
  }
`;
