import styled, { css } from "styled-components";

interface IStylesProps {
  gallery: boolean;
}

export const ContainerImage = styled.div`
  position: relative;
  width: max-content;
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
    &::first-letter {
      text-transform: uppercase;
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
  width: 3.25rem;
  height: 1.5rem;
  background-color: #f25d52;
  text-align: center;
  padding: 6px auto;
  border: 1px solid #000;
  border-radius: 3px;
  font-size: 0.9rem;

  position: absolute;
  top: -0.9rem;
  right: 2rem;

  &::first-letter {
    text-transform: uppercase;
  }

  ${({ gallery }) =>
    gallery &&
    css`
      top: auto;
      bottom: 0.5rem;
      right: 6rem;
      z-index: 3;
    `}
`;
