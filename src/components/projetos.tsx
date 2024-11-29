// Imports

import {Card, Link, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CircleImage from "./circle-image";

// Component
const Projeto = () => {
    return (
        <Card sx={{borderRadius: 3}}>
            <Grid container spacing={3} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} padding={2}>
                <Grid size={4}>
                    <CircleImage />
                    <Typography variant="h6">Nome do projeto</Typography>
                </Grid>
                <Grid size={8}>
                    <Grid>
                        <Typography fontSize={20}>Tecnologias</Typography>
                    </Grid>
                    <Grid>
                        <Typography fontSize={18}>Nome do projeto asdf jklç asçdlfkj asdladjs poel ahdlasdkjf asldçhaskdjf açl açsljaçsldhfoa lkja sdpofh lçkjae pojalsdkf</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"}>
                <Grid size={12}>
                    <Typography>
                        Link para o projeto:{" "}
                        <Link href="https://www.google.com" underline={"none"} sx={{color: "black"}} target="blank">
                            www.google.com
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
};
// Export
export default Projeto;
