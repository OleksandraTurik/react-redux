import { createTheme } from "@mui/material/styles";

export const currentTheme = (theme) => {
    return createTheme({
        palette: {
            mode: theme
        }
    })
}

