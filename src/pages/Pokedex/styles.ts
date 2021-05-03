import styled from "styled-components";

export const Content = styled.section`
  position: relative;
  width: 100%;
  max-width: 70rem;
  background-color: #d4c3a3;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
  border-radius: 0 0 12px 12px;
  padding-bottom: 8rem;
  margin: 0 auto 7rem;

  h4 {
    margin-top: 3rem;
    font-size: 1.2rem;
    padding-left: 3.25rem;
    font-weight: 500;
    color: #535662;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
