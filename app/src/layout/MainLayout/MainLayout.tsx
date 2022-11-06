import React, { ReactNode } from "react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";
import styled from "styled-components";

interface Props {
  children?: ReactNode;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  heigth: 100%;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  min-height: 87vh;
  & > * {
    margin: 1rem;
  }
`;

export const MainLayout = ({ children }: Props) => (
  <Container>
    <Navbar>
      <div>Task app</div>
      <div>Bank transactions</div>
    </Navbar>
    <Content>{children}</Content>
    <Footer>Author: Karolina Makuch</Footer>
  </Container>
);
