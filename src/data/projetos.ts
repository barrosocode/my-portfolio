export default function listProjetos() {
    const projetos = [
        {
            name: "Boreas API",
            tecnology: ["Python", "Django", "Docker"],
            description: "API de sistema de gerenciamento de solicitações para manutenção em equipamentos de ar condicionado, bem como o gerenciamento de histórico de manutenção dos dispositivos.",
            image: "/imagens_de_projetos/boreas-api-image.png",
            link: "https://git.ct.ufrn.br/dev-web/boreas",
        },
        {
            name: "My Fintech",
            tecnology: ["PHP", "Laravel", "Sanctum", "Next.js", "Typescript"],
            description: "Projeto desenvolvido como desafio para vaga de desenvolvedor. Projeto de mini fintech para gerenciamento dos ganhos e despesas pessoais",
            image: "/imagens_de_projetos/my-fintech-image.png",
            link: "https://my-fintech-dashboard.vercel.app/",
        },
        // {
        //     name: "Meu chá de panela",
        //     tecnology: ["Python", "Django", "Next.js", "Typescript"],
        //     description: "Convite virtual para o meu chá de panela. Sistema com informações do evento, lista de convidados com confirmação de presença e assinatura na lista de presentes.",
        //     image: "/imagens_de_projetos/plataforma-servclub.png",
        //     link: "https://chadepanela-pied.vercel.app/",
        // },
        {
            name: "Servclub",
            tecnology: ["PHP", "Laravel", "Next.js", "Typescript", "Docker"],
            description: "Sistema integrado, envolvendo aplicativo, sistema administrativo Saas, API e integração com sistema de catracas por reconhecimento facial. O sistema foi desenvolvido para uma rede de parques aquáticos e inclui gerenciamento de contratos, usuários, eventos e planos. Nesse projeto, atuei no desenvolvimento da interface da plataforma web, da API e do sistema de reconhecimento facial.",
            image: "/imagens_de_projetos/plataforma-servclub.png",
            link: "https://servclube.vercel.app/dashboard/",
        },
        {
            name: "Tatour",
            tecnology: ["PHP", "Laravel", "Bootstrap"],
            description: "Sistema para venda de passeios turísticos. Plataforma de E-commerce com agendamento e gerenciamento de passeios e integração com sistema de pagamentos. Nesse projeto, participei com desenvolvimento de parte da API e parte da interface do sistema.",
            image: "/imagens_de_projetos/tatour-image.png",
            link: "https://tatour.com.br/",
        },
        {
            name: "Plataforma II SIT - Cang",
            tecnology: ["PHP", "Laravel", "Bootstrap"],
            description: "Projeto de pesquisa e extensão desenvolvido em equipe durante o período de estudos no IFRN campus Canguaretama. Trata-se de um sistema para divulgação de evento acadêmico, gerenciamento de trabalhos enviados e geração de certificados. Nesse projeto, atuei no desenvolvimento da interface do sistema.",
            image: "/imagens_de_projetos/ii-sit-image.png",
            link: "https://eventos.ifrn.edu.br/sitcang/",
        },
    ];

    return projetos;
}
