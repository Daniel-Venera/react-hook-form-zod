import { createTheme, Snackbar, ThemeProvider } from "@mui/material";
import { Container, StyledEngineProvider } from "@mui/system";
import { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/global.scss";
import Header from "./components/layout/Header";
import Loader from "./components/layout/Loader";
import "./index.css";
import Form from "./pages/CreateAccountForm";

export const fallBackLoader = {
  fallback: <Loader />,
};

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "2rem",
    },
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1rem",
    },
  },
});

const App: FunctionComponent = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Container maxWidth='sm' className='pt-12'>
            <Routes>
              <Route element={<Form />} path='/'></Route>
            </Routes>
          </Container>
          <Snackbar />
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
