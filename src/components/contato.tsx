// Imports
import {Button, Card, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";

// Component
const Contato = () => {
    return (
        <Card>
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} padding={3}>
                <Grid size={2}>
                    <Typography variant={"h5"}>Nome:</Typography>
                </Grid>
                <Grid size={"grow"}>
                    <TextField variant="outlined" fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} padding={3}>
                <Grid size={2}>
                    <Typography variant={"h5"}>Email:</Typography>
                </Grid>
                <Grid size={"grow"}>
                    <TextField variant="outlined" fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} padding={3}>
                <Grid size={2}>
                    <Typography variant={"h5"}>Telefone:</Typography>
                </Grid>
                <Grid size={"grow"}>
                    <TextField variant="outlined" fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} padding={3}>
                <Grid size={2}>
                    <Typography variant={"h5"}>Mensagem:</Typography>
                </Grid>
                <Grid size={"grow"}>
                    <TextField multiline rows={5} variant="outlined" fullWidth />
                </Grid>
            </Grid>
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} padding={3}>
                <Grid size={2}>
                    <Button variant="contained" fullWidth>
                        Enviar
                    </Button>
                </Grid>
            </Grid>
        </Card>
    );
};

// Export
export default Contato;
