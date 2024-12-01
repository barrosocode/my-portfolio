import {createTheme, responsiveFontSizes} from "@mui/material/styles";

let theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
        background: {
            default: "#000000",
            paper: "#ffffff",
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

theme = responsiveFontSizes(theme);

export default theme;
