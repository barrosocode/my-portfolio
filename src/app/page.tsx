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
        description: "Desenvolvimento da interface do usuário e de parte da API de um sistema administrativo para gerenciamento de usuários, contratos, eventos e unidades. Integração com sistema de catracas por reconhecimento facial.",
        image: "/servclub2.png",
        link: "https://servclube.vercel.app/dashboard/",
    },
    {
        name: "Nome Projeto 2",
        tecnology: ["PHP", "Laravel", "Python"],
        description: "string urante esse período, participei de vários projetos, entre eles, destacam-se a API para um sistema de ensino financeiro, que incluía consumo de API externa, tratamen",
        image: "/servclub2.png",
        link: "string",
    },
];

// Main page
export default function Home() {
    return (
        <Fragment>
            {/*Grid Pai*/}
            <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} padding={2}>
                <Grid size={{xs: 12, md: 10}} padding={3}>
                    <Grid container spacing={5} alignItems="center" justifyContent="center" style={{minWidth: "100%"}} marginTop={5}>
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
                        {/* <Grid size={{xs: 12, md: 6}}>
                            <Projeto />
                        </Grid>
                        <Grid size={{xs: 12, md: 6}}>
                            <Projeto />
                        </Grid> */}
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

{
    /* <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Typography>Olá </Typography>
                <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
                <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
                    <li className="mb-2">
                        Get started by editing <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">src/app/page.tsx</code>.
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                        <Image className="dark:invert" src="/vercel.svg" alt="Vercel logomark" width={20} height={20} />
                        Deploy now
                    </a>
                    <a className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44" href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                        Read our docs
                    </a>
                </div>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
                    Learn
                </a>
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
                    Examples
                </a>
                <a className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                    <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
                    Go to nextjs.org →
                </a>
            </footer>
        </div> */
}
