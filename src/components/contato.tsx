// Imports
import {Button, Card, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";

// Component
const Contato = () => {
    return (
        <Card>
            <Grid container padding={5} rowSpacing={2}>
                <Grid container spacing={5} style={{minWidth: "100%"}}>
                    <Grid size={"grow"}>
                        <Typography variant={"h5"}>Nome:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Grid>
                </Grid>
                <Grid container spacing={5} style={{minWidth: "100%"}}>
                    <Grid size={"grow"}>
                        <Typography variant={"h5"}>Email:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Grid>
                </Grid>
                <Grid container spacing={5} style={{minWidth: "100%"}}>
                    <Grid size={"grow"}>
                        <Typography variant={"h5"}>Telefone:</Typography>
                        <TextField variant="outlined" fullWidth />
                    </Grid>
                </Grid>
                <Grid container spacing={5} style={{minWidth: "100%"}}>
                    <Grid size={"grow"}>
                        <Typography variant={"h5"}>Mensagem:</Typography>
                        <TextField multiline rows={5} variant="outlined" fullWidth />
                    </Grid>
                </Grid>
                <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}}>
                    <Grid size={2}>
                        <Button variant="contained" fullWidth>
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
};

// Export
export default Contato;
