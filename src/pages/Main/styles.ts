import styled from "styled-components";

export const Content = styled.section`
  width: 100%;
  max-width: 70rem;
  background-color: #d4c3a3;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  border-radius: 0 0 12px 12px;
  padding-bottom: 4.3rem;
  margin: 0 auto;
`;
export const Container = styled.section`
  border-radius: 3px;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 3.75rem;
  justify-content: center;
`;
