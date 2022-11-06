import styled from "styled-components";
import { ColorSacramento, ColorWhite } from "../../../styles/colors";
import { FontWeightSemibold } from "../../../styles/fonts";

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${ColorSacramento};
  justify-content: center;
  padding: 0.75rem 2rem;
  color: ${ColorWhite};
  font-weight: ${FontWeightSemibold};
`;
