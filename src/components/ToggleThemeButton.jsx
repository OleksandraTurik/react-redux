import React, { useContext } from "react";
import { Button, Grid } from "@mui/material";
import ThemeContext from "../context/ThemeContext";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../store/actions/actions";
import { amber} from '@mui/material/colors';


export const ToggleThemeButton = () => {
  const { theme } = useContext(ThemeContext);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  const ThemeIcon = () => {
    if (theme === "dark") return <DarkModeOutlinedIcon/>;
    return <Brightness5OutlinedIcon />;
  };

  return (
    <Grid item xs={12}>
      <Button onClick={handleClick}>
        <ThemeIcon />
      </Button>
    </Grid>
  );
};
