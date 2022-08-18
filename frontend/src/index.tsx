import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import AppMenu from "./AppMenu";
import { theme } from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline></CssBaseline>
    <React.StrictMode>
      <AppMenu />
      {/**<BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
