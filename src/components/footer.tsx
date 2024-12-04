// Imports
import {Link, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CopyrightIcon from "@mui/icons-material/Copyright";

// Compoent
const Footer = () => {
    return (
        // <Card>
        <Grid container>
            <Grid container spacing={5} alignContent={"center"} justifyContent={"center"} style={{minWidth: "100%"}} padding={2}>
                {/* LinkedIn */}
                <Grid container spacing={1}>
                    <Grid>
                        <LinkedInIcon />
                    </Grid>
                    <Grid>
                        <Typography>
                            <Link href="https://www.linkedin.com/in/gabriel-barroso-fg" underline={"none"} target="blank">
                                www.linkedin.com/in/gabriel-barroso-fg
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>

                {/* Email */}
                <Grid container spacing={1}>
                    <Grid>
                        <EmailIcon />
                    </Grid>
                    <Grid>
                        <Typography>
                            <Link href="gabrielbarrosofg@yahoo.com.br" underline={"none"} target="blank">
                                gabrielbarrosofg@yahoo.com.br
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>

                {/* WhatsApp */}
                <Grid container spacing={1}>
                    <Grid>
                        <WhatsAppIcon />
                    </Grid>
                    <Grid>
                        <Typography>
                            <Link href="https://wa.me/558491075701?text=Olá,%20Barroso,%20cheguei%20aqui%20pelo%20seu%20portfolio" underline={"none"} target="blank">
                                84 9 9107-5701
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={1} alignContent={"center"} justifyContent={"center"} style={{minWidth: "100%"}}>
                <Grid>
                    <CopyrightIcon />
                </Grid>
                <Grid>
                    <Typography> Gabriel Barroso Faustino Gomes</Typography>
                </Grid>
            </Grid>
        </Grid>
        // </Card>
    );
};

// Export
export default Footer;
