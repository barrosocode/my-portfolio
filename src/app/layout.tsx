"use client";

import "./globals.css";
import Menu from "../components/menu";
import Grid from "@mui/material/Grid2";
import {ReactNode} from "react";
import {ThemeProvider} from "@mui/material";
import theme from "@/theme/theme";
import "./globals.css";

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout = ({children}: RootLayoutProps) => {
    return (
        <html lang="en">
            <body>
                <ThemeProvider theme={theme}>
                    {/* Menu fixado no topo */}
                    <Grid
                        sx={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            zIndex: 1000,
                            backgroundColor: theme.palette.background.default,
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        <Menu />
                    </Grid>

                    {/* Espaçamento para compensar o menu fixo */}
                    <Grid container spacing={5} sx={{paddingTop: 10, padding: 3}}>
                        {children}
                    </Grid>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
