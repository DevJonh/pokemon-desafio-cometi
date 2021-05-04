import styled, { css } from "styled-components";

interface IStylesProps {
  gallery: boolean;
  color?: string;
  text?: string;
}

export const Container = styled.section`
  position: relative;
  border-radius: 3px;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 3.75rem;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  width: 14rem;
  height: 12.6rem;
  border-radius: 3px;
  background-color: #b4adbe;
  border: 2px solid #000;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    width: 75%;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9.3rem;
    height: 2.5rem;
    font-size: 1rem;

    background-color: #7e7394;
    border: 2px solid #000;
    border-radius: 12px;
    color: #fff;
    text-align: center;

    position: absolute;
    z-index: 2;

    bottom: -1.3rem;
    left: 3rem;
  }

  &:hover {
    div {
      opacity: 1;
      visibility: visible;
    }
  }
  @media only screen and (max-width: 450px) {
    width: 12.5rem;

    p {
      left: 1.7rem;
    }
  }
  @media only screen and (max-width: 280px) {
    width: 11rem;
    img {
      width: 100%;
    }
    p {
      left: 0.7rem;
    }
  }
`;

export const Index = styled.span<IStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.9rem;
  height: 2.9rem;
  border-radius: 1rem;
  background-color: #535662;
  border: 2px solid #000;
  transform: rotate(-43deg);

  & span {
    color: #fff;
    transform: rotate(43deg);
  }

  position: absolute;
  top: -1.5rem;
  left: -1.5rem;

  ${({ gallery }) =>
    gallery &&
    css`
      left: 6.5rem;
    `}
`;

export const Type = styled.span<IStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 100%;
  width: 4rem;
  height: 1.5rem;
  text-align: center;
  padding: 6px 0.5rem;
  border: 1px solid #000;
  border-radius: 3px;
  font-size: 0.9rem;

  position: absolute;
  top: -0.9rem;
  right: 2rem;

  background-color: ${({ color }) => color};
  color: ${({ text }) => text};

  ${({ gallery }) =>
    gallery &&
    css`
      top: auto;
      bottom: 0.5rem;
      right: 6rem;
      z-index: 3;
    `};
`;

export const Details = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.24);

  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s linear;

  visibility: hidden;
  opacity: 0;

  button {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:nth-child(1) {
      transition: 0.4s;
      background-color: #49dbdf;
    }
    &:nth-child(2) {
      transition: 0.4s;
      background-color: #3aa05b;
    }

    & + button {
      margin-left: 1.5rem;
    }

    &:nth-child(1):hover {
      background-color: #1fb7bb;
    }
    &:nth-child(2):hover {
      background-color: #18903f;
    }
  }
`;
