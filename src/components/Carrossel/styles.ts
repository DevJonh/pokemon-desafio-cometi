import styled from "styled-components";

interface IStylesProps {
  color?: string;
  text?: string;
}

export const Container = styled.div`
  position: relative;
  max-width: 95%;
  border-radius: 3px;
  margin: 5rem auto 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1.5rem;
  row-gap: 3.75rem;
  justify-content: center;
  @media only screen and (max-width: 850px) {
    flex-wrap: wrap;
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
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

    bottom: -1.2rem;
    left: 12%;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  &:hover {
    div {
      opacity: 1;
      visibility: visible;
    }
  }
  @media only screen and (max-width: 850px) {
    width: 14rem;

    &:nth-last-child(2),
    &:nth-last-child(3) {
      margin-top: 6rem;
    }
    p {
      left: 18%;
    }
  }
  @media only screen and (max-width: 450px) {
    &:nth-last-child(2),
    &:nth-last-child(3),
    &:nth-last-child(4) {
      margin-top: 6rem;
    }
  }
  @media only screen and (max-width: 280px) {
    &:nth-last-child(2),
    &:nth-last-child(3),
    &:nth-last-child(4),
    &:nth-last-child(5) {
      margin-top: 6rem;
    }
  }
`;

export const Index = styled.span`
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
  left: 40%;
`;

export const Type = styled.span<IStylesProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4rem;
  height: 1.5rem;
  text-align: center;
  padding: 6px auto;
  border: 1px solid #000;
  border-radius: 3px;
  font-size: 0.9rem;

  position: absolute;
  bottom: 0.7rem;
  right: 35%;
  z-index: 5;

  background-color: ${({ color }) => color};
  color: ${({ text }) => text};

  &::first-letter {
    text-transform: uppercase;
  }

  @media only screen and (max-width: 850px) {
    right: 32%;
    bottom: 0.9rem;
  }
`;

export const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  background-color: #524153;
  color: #fff;
  border: 1px solid #000;
  transition: 0.5s;
  &:hover {
    filter: brightness(85%);
  }

  &:disabled {
    background-color: #999;
    border: none;
    cursor: initial;
    &:hover {
      filter: brightness(100%);
    }
  }
  @media only screen and (max-width: 850px) {
    position: absolute;
    &.left {
      left: -0.5rem;
      bottom: 50%;
    }
    &.right {
      right: -0.5rem;
      bottom: 50%;
    }
  }
  @media only screen and (max-width: 450px) {
    &.left {
      left: -0.5rem;
      bottom: 50%;
    }
    &.right {
      right: -0.5rem;
      bottom: 50%;
    }
  }
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
