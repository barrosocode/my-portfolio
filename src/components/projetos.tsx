// Imports
import {Card, Chip, Link, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import CircleImage from "./circle-image";

interface ProjetoInterface {
    name: string;
    tecnology: string[];
    description: string;
    image: string;
    link: string;
}

// Component
const Projeto = (p: ProjetoInterface) => {
    return (
        <Card sx={{borderRadius: 3}}>
            <Grid container spacing={3} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} padding={2}>
                <Grid size={4}>
                    <CircleImage image={p.image} />
                    <Typography variant="h5">{p.name}</Typography>
                </Grid>
                <Grid size={8}>
                    <Grid padding={2}>
                        <Typography fontSize={18}>{p.description}</Typography>
                    </Grid>
                    <Grid container spacing={2} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} padding={2}>
                        {p.tecnology.map((t, index) => (
                            <Grid key={index}>
                                <Chip label={t} variant="outlined" />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"}>
                <Grid size={12}>
                    <Typography>
                        Link para o projeto:{" "}
                        <Link href={p.link} underline={"none"} sx={{color: "black"}} target="blank">
                            {p.link}
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    );
};

// Export
export default Projeto;
