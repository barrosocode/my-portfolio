import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: "#ffffff",
                    "&:hover": {
                        color: "#bbbbbb",
                    },
                },
            },
        },
    },
});

export default theme;
