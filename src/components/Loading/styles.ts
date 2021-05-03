import styled from "styled-components";

interface ILoadProps {
  load: boolean;
}

export const Container = styled.div<ILoadProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: ${({ load }) => (load ? 1 : 0)};
  visibility: ${({ load }) => (load ? "visible" : "hidden")};
`;
export const Content = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
`;
