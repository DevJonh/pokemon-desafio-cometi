import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background-color: #524153;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 850px) {
    padding: 1rem;
    img {
      width: 10rem;
    }
  }

  @media only screen and (max-width: 450px) {
    display: grid;
    grid-template-areas:
      "logo1 vazio logo2"
      "search search login";

    row-gap: 1.5rem;
    img {
    }
    .logo1 {
      grid-area: logo1;
    }
    .logo2 {
      grid-area: logo2;
    }
  }

  @media only screen and (max-width: 280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 19rem;
  }
`;
