import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.75rem;
  align-items: center;
  & > * {
    margin: 0.1rem;
  }
`;
