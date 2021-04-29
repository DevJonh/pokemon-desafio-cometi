import styled from "styled-components";

export const Container = styled.div`
  max-width: 95%;
  border-radius: 3px;
  margin: 5rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1.5rem;
  row-gap: 3.75rem;
  justify-content: center;
`;

export const ContainerImage = styled.div`
  position: relative;
  max-width: 100%;
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

    bottom: -1.2rem;
    left: 12%;
    &::first-letter {
      text-transform: uppercase;
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

export const Type = styled.span`
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
  bottom: 0.7rem;
  right: 35%;
  z-index: 5;

  &::first-letter {
    text-transform: uppercase;
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
`;
