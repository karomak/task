import styled from "styled-components";
import { ColorOrange, ColorRed } from "../../../styles/colors";
import { FontWeightSemibold } from "../../../styles/fonts";

export const StyledError = styled.div`
  font-size: 0.75rem;
  color: ${ColorRed};
  font-weight: ${FontWeightSemibold};
`;

export const StyledWarning = styled.div`
  font-size: 0.75rem;
  color: ${ColorOrange}
  font-weight: ${FontWeightSemibold};
`;
