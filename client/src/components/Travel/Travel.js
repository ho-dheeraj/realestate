import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Container from "../../common/Container";
import CityIllustration from "../../svg/illustrations/City";
import { About, Destinations, Form, Hero, Services } from "./components";
import Main from "../../layouts/Main/Main";

const Travel = () => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"), {
    defaultMatches: true,
  });

  return (
    <Main>
      <Box
        position={"relative"}
        minHeight={450}
        overflow={"hidden"}
        borderBottom={`10px solid ${theme.palette.primary.dark}`}
      >
        <Container position={"relative"} zIndex={2}>
          <Hero />
        </Container>
        <Box
          width={"100%"}
          height={"auto"}
          maxWidth={{ xs: "100%", md: "50%" }}
          maxHeight={450}
          position={"absolute"}
          bottom={-24}
          right={0}
          zIndex={1}
          data-aos={"fade-down"}
        >
          <CityIllustration width={"100%"} height={isLg ? 450 : "100%"} />
        </Box>
      </Box>
      <Container>
        <About />
      </Container>
      <Container>
        <Destinations />
      </Container>
      <Container>
        <Services />
      </Container>
      <Box borderBottom={`10px solid ${theme.palette.primary.dark}`}>
        <Container>
          <Form />
        </Container>
      </Box>
    </Main>
  );
};

export default Travel;
