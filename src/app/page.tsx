// Imports
import CircleImage from "@/components/circle-image";
import {Divider, Typography} from "@mui/material";
import {Fragment} from "react";
import Grid from "@mui/material/Grid2";
// Imports de componentes
import Experiencia from "@/components/experiencias";
import ComponentCarousel from "@/components/components-carousel";
import Footer from "@/components/footer";
// Imports de dados
import listEmpresas from "@/data/empresas";

const empresas = listEmpresas();

// Main page
export default function Home() {
    return (
        <Fragment>
            {/*Grid Pai*/}
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}}>
                <Grid size={{xs: 12, sm: 12, md: 10}}>
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}}>
                        <Grid>
                            <CircleImage image="/profile.png" />
                        </Grid>

                        <Grid>
                            <Typography variant="h2" textAlign="center">
                                Gabriel Barroso Faustino Gomes
                            </Typography>
                        </Grid>
                        <Grid size={12}>
                            <Divider sx={{color: "#ffffff"}} />
                        </Grid>
                    </Grid>
                    {/* PHP + Laravel, Python + Django, Next.js, */}
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} marginTop={5}>
                        <Grid size={{xs: 12, md: 10, lg: 8}}>
                            <Typography textAlign={"center"} variant="h6">
                                Bem vindo ao meu portfólio! <br />
                                Me chamo Gabriel Barroso, tenho 24 anos e sou desenvolvedor full stack. Dentre as minhas hard skills estão PHP + Laravel, Python + Django, Next.js, Node.js, Typescript, HTML5, CSS3, Git e metodologia ágil SCRUM . <br />
                                Aqui você irá encontrar algumas informações sobre minha experiência no mercado e sobre alguns projetos que já desenvolvi utilizando algumas dessas tecnologias. Espero que goste!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} id={"empresas"} marginTop={5}>
                        <Grid>
                            <Typography variant="h2" textAlign="center">
                                Empresas
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} marginTop={5}>
                        {empresas.map((empresa, index) => (
                            <Grid size={{xs: 12, md: 6, lg: 4}} key={index}>
                                <Experiencia {...empresa} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} id={"projetos"} marginTop={5}>
                        <Grid>
                            <Typography variant="h2" textAlign="center">
                                Projetos
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} marginTop={5}>
                        <ComponentCarousel />
                        {/* {projetos.map((projeto, index) => (
                            <Grid key={index} size={{xs: 12, md: 6}}>
                                <Projeto {...projeto} />
                            </Grid>
                        ))} */}
                    </Grid>
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} id={"contato"} marginTop={5}>
                        <Grid>
                            <Typography variant="h6">
                                Caso deseje conversar comigo, me acione por algum dos contatos abaixo! <br />É só clicar e você será direcionado.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container style={{minWidth: "100%"}}>
                <Grid size={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Fragment>
    );
}
