// Imports

import {Card, Chip, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import BusinessIcon from "@mui/icons-material/Business";

interface EmpresaInterface {
    name: string;
    tecnology: string[];
    description: string;
}

// Component
const Experiencia = (e: EmpresaInterface) => {
    return (
        <Card>
            <Grid container spacing={5} marginTop={3} marginBottom={3} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} padding={2}>
                <Grid>
                    <BusinessIcon />
                </Grid>
                <Grid>
                    <Typography>{e.name ?? "Nome Empresa"}</Typography>
                </Grid>
                <Grid size={12}>
                    <Grid container spacing={2} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"}>
                        <Grid size={12}>
                            <Typography>Tecnologias:</Typography>
                        </Grid>
                        {e.tecnology.map((t, index) => (
                            <Grid key={index}>
                                <Chip label={t} variant="outlined" />
                                {/* <Typography key={index}>{t ?? "Tecnologias"}</Typography> */}
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Typography>{e.description ?? "Descrição"}</Typography>
                </Grid>
            </Grid>
        </Card>
    );
};
// Export
export default Experiencia;
