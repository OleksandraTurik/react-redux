
import Goals from "./components/Goals";
import { Grid, Typography } from "@mui/material";
import Form from './components/Form'

import "./App.css";
import {  useSelector } from "react-redux";
import { Container } from "@mui/material";

function App() {
  
  const goals = useSelector(state => state.goalsList.goals);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Form />
        </Grid>
        <Grid>
          <Typography variant="h5">Goals list</Typography>
          <Goals goals={goals} />
        </Grid>
      </Grid>
    </Container>
    
  );
}

export default App;
