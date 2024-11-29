"use client";

// Imports
import {Card, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {useParams} from "next/navigation";

// Corpo da página

const Teste = () => {
    const params = useParams();
    return (
        <Card sx={{margin: 10, padding: 3}}>
            <Grid container spacing={5}>
                <Grid size={{xs: 12, md: 6, lg: 4}} sx={{borderWidth: 1}}>
                    <Typography>Teste</Typography>
                    <Typography>{params.n}</Typography>
                </Grid>
                <Grid size={{xs: 12, md: 6, lg: 4}} sx={{borderWidth: 1}}>
                    <Typography>Teste</Typography>
                    <Typography>{params.n}</Typography>
                </Grid>
                <Grid size={{xs: 12, md: 6, lg: 4}} sx={{borderWidth: 1}}>
                    <Typography>Teste</Typography>
                    <Typography>{params.n}</Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

// Exportando a página

export default Teste;
