import styled from "styled-components";
import { ColorMalachite, ColorWhite } from "../../../styles/colors";
import { FontWeightSemibold } from "../../../styles/fonts";

export const Button = styled.button`
  background-color: ${ColorMalachite};
  border-radius: 1px;
  border-spacing: 0;
  border: none;
  color: ${ColorWhite};
  display: flex;
  font-size: 0.75rem;
  font-weight: ${FontWeightSemibold};
  justify-content: space-evenly;
  align-items: center;
  outline: none;
  padding: 0 1.8rem;
  height: 28px;
  text-decoration: none;
  text-indent: 0;
  &:disabled {
    opacity: 0.7;
  }
`;
