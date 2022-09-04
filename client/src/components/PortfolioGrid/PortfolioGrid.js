import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import Main from "../../layouts/Main";
import Container from "../../components/Container";
import { Hero, Main as MainSection } from "./components";

const PortfolioGrid = () => {
  const theme = useTheme();
  return (
    <Container>
      <Hero />
      <MainSection />
    </Container>
  );
};

export default PortfolioGrid;
