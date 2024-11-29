// Imports
import {Link, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {Fragment} from "react";

// Component
const Menu = () => {
    return (
        <Fragment>
            <Grid container spacing={10} justifyContent={"center"} sx={{margin: 3, padding: 1}}>
                <Grid>
                    <Typography variant="h5">
                        <Link href="/" underline="none">
                            Index
                        </Link>
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5">
                        <Link href="/admin" underline="none">
                            Sobre
                        </Link>
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5">
                        <Link underline="none">Projetos</Link>
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5">
                        <Link underline="none">Contato</Link>
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
    );
};

// Export
export default Menu;
