// Imports
import {Link, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import {Fragment, MouseEvent} from "react";

// Component
const Menu = () => {
    const handleSmoothScroll = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault(); // Evita o comportamento padrão de navegação

        if (targetId === "#") {
            // Caso especial: Retornar ao topo da página
            window.scrollTo({top: 0, behavior: "smooth"});
        } else {
            // Rolagem suave para a seção correspondente
            const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo pelo ID
            if (targetElement) {
                targetElement.scrollIntoView({behavior: "smooth"}); // Faz o scroll suave
            }
        }
    };

    return (
        <Fragment>
            <Grid container spacing={5} justifyContent={"center"} sx={{margin: 3, padding: 1}}>
                <Grid>
                    <Typography variant="h5">
                        <Link href="#" underline="none" onClick={(e) => handleSmoothScroll(e, "#")}>
                            Início
                        </Link>
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5">
                        <Link href="#sobre" underline="none" onClick={(e) => handleSmoothScroll(e, "#empresas")}>
                            Empresas
                        </Link>
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5">
                        <Link href="#projetos" underline="none" onClick={(e) => handleSmoothScroll(e, "#projetos")}>
                            Projetos
                        </Link>
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant="h5">
                        <Link href="#contato" underline="none" onClick={(e) => handleSmoothScroll(e, "#contato")}>
                            Contato
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Fragment>
    );
};

// Export
export default Menu;
