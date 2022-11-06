import React, { ReactNode } from "react";
import styled from "styled-components";

const IconButtonContainer = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

export const IconButton = (onClick: any, children: ReactNode) => {
  return (
    <IconButtonContainer onClick={onClick}>{children}</IconButtonContainer>
  );
};
