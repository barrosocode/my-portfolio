// Imports
import {Link, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Compoent
const Footer = () => {
    return (
        // <Card>
        <Grid container padding={2}>
            <Grid container spacing={5} alignContent={"center"} justifyContent={"center"} style={{minWidth: "100%"}}>
                {/* LinkedIn */}
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
                {/* Email */}
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
                {/* WhatsApp */}
                <Grid>
                    <WhatsAppIcon />
                </Grid>
                <Grid>
                    <Typography>
                        <Link href="https://wa.me/qr/F7KWBWL7XSXPI1" underline={"none"} target="blank">
                            84 9 9107-5701
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={5} alignContent={"center"} justifyContent={"center"} style={{minWidth: "100%"}}>
                <Grid>
                    <Typography>Desenvolvido por Gabriel Barroso Faustino Gomes</Typography>
                </Grid>
            </Grid>
        </Grid>
        // </Card>
    );
};

// Export
export default Footer;
