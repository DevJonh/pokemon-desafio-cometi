import styled from "styled-components";

export const Container = styled.input`
  flex: 1;
  max-width: 62%;
  height: 3rem;
  filter: drop-shadow(0, 3px 6px rgba(0, 0, 0, 0.161));
  border-radius: 6px;
  padding: 0 0.7rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  @media only screen and (max-width: 850px) {
    max-width: 45%;
  }
  @media only screen and (max-width: 600px) {
    max-width: 30%;
  }
  @media only screen and (max-width: 450px) {
    max-width: 100%;
    grid-area: search;
  }
  @media only screen and (max-width: 281px) {
    height: 10px;
    margin: 1rem auto;
  }
`;
