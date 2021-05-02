import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 6.8rem;
  border-bottom: 1px solid #707070;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  div {
    margin: 0 3.25rem;
    span {
      display: block;
      color: #535662;
      font-size: 0.75rem;
    }
    h3 {
      font-size: 1.3rem;
      line-height: 1.9rem;
      color: #535662;
      font-weight: 500;
    }
  }

  select {
    border-radius: 3px;
    color: #535662;
    width: 12.5rem;
    height: 2.8rem;
    border: 1px solid #707070;
  }
`;
