import React from "react";
import { useTheme } from "@mui/material/styles";
import Travel from "./components/Travel/Travel";
import Main from "./layouts/Main/Main";
import Page from "./components/Page";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyPatner from "./components/MyPatner/MyPatner";

const App = () => {
  const theme = useTheme();
  return (
    <Page>
      <Main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Travel />} />
            <Route path="/patner" element={<MyPatner />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </Page>
  );
};

export default App;
