// Imports
import CircleImage from "@/components/circle-image";
import {Divider, Typography} from "@mui/material";
import {Fragment} from "react";
import Grid from "@mui/material/Grid2";
import Experiencia from "@/components/experiencias";
import Projeto from "@/components/projetos";
import Contato from "@/components/contato";
import Footer from "@/components/footer";

const empresas = [
    {
        name: "Jabátec",
        tecnology: ["PHP", "Laravel", "Next.js", "Node.js", "Docker", "Typescript"],
        description: "Durante o período nessa empresa, participei de dois projetos. O primeiro tratava-se de um sistema administrativo para uma rede de parques aquáticos, entre outras coisas, o sistema incluía um sistema de captura facial e integração com sistema de catracas por reconhecimento facial.",
    },
    {
        name: "NCDD",
        tecnology: ["PHP", "Laravel", "Node.js"],
        description: "Durante esse período, participei de vários projetos, entre eles, destacam-se a API para um sistema de ensino financeiro, que incluía consumo de API externa, tratamento e exibição de dados do mercado financeiro; e um sistema para gerenciamento de licitações da Universidade Federal Rural do Semi árido (Ufersa).",
    },
];

const projetos = [
    {
        name: "Servclub",
        tecnology: ["PHP", "Laravel", "Next.js", "Typescript", "Docker"],
        description: "Sistema integrado, envolvendo aplicativo, sistema administrativo Saas, API e integração com sistema de catracas por reconhecimento facial. O sistema foi desenvolvido para uma rede de parques aquáticos e inclui gerenciamento de contratos, usuários, eventos e planos. Nesse projeto, atuei no desenvolvimento da interface da plataforma web, da API e do sistema de reconhecimento facial.",
        image: "/plataforma-servclub.png",
        link: "https://servclube.vercel.app/dashboard/",
    },
    {
        name: "Plataforma II SIT - Cang",
        tecnology: ["PHP", "Laravel", "Bootstrap"],
        description: "Projeto de pesquisa e extensão desenvolvido em equipe durante o período de estudos no IFRN campus Canguaretama. Trata-se de um sistema para divulgação de evento acadêmico, gerenciamento de trabalhos enviados e geração de certificados. Nesse projeto, atuei no desenvolvimento da interface do sistema.",
        image: "/ii-sit-image.png",
        link: "https://eventos.ifrn.edu.br/sitcang/",
    },
    {
        name: "Tatour",
        tecnology: ["PHP", "Laravel", "Bootstrap"],
        description: "Sistema para venda de passeios turísticos. Plataforma de E-commerce com agendamento e gerenciamento de passeios e integração com sistema de pagamentos. Nesse projeto, participei com desenvolvimento de parte da API e parte da interface do sistema.",
        image: "/tatour-image.png",
        link: "https://www.tatour.com.br/",
    },
];

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
                        {projetos.map((projeto, index) => (
                            <Grid key={index} size={{xs: 12, md: 6}}>
                                <Projeto {...projeto} />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} textAlign={"center"} id={"contato"} marginTop={5}>
                        <Grid>
                            <Typography variant="h2" textAlign="center">
                                Contato
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} marginTop={5}>
                        <Grid size={{xs: 12, md: 10, lg: 8}}>
                            <Contato />
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
