import Goals from "./components/Goals";
import { Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Form from "./components/Form";
import { useSelector } from "react-redux";
import { Container, CssBaseline} from "@mui/material";
import ThemeContext from "./context/ThemeContext";
import {currentTheme} from './themePalietes'
import { ToggleThemeButton } from "./components/ToggleThemeButton";


import "./App.css";

function App() {
  const { theme } = useSelector((state) => state.themeReducer);
  console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={currentTheme(theme)}>
        <Container>
        <CssBaseline />
          <Grid
            style={{ marginTop: 10, marginBottom: 10 }}
            container
            spacing={3}
          >
            <CssBaseline />
            <ToggleThemeButton />
            <Grid item xs={12}>
            <CssBaseline />
              <Form />
            </Grid>
            <Grid item xs={5} sm={6}> 
            <CssBaseline />
              <Typography variant="h5">Goals list</Typography>
              <Goals />
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
