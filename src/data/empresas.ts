export default function listEmpresas() {
    const empresas = [
        {
            name: "Centro de Tecnologia - UFRN",
            tecnology: ["Python", "Django", "Next.js", "Docker", "Typescript"],
            description: "No Setor de Suporte de TI do Centro de Tecnologia da UFRN contribuí significativamente para o desenvolvimento de sistemas que aumentaram a produtividade e facilitaram a rotina dos servidores e alunos atendidos pelo nosso setor. Dentre eles, destaca-se o desenvolvimento de um sistema para gerenciamento das solicitações de manutenção em ar condicionado, bem como o arquivamento de histórico de manutenção dos dispositivos.",
        },
        {
            name: "Jabátec",
            tecnology: ["PHP", "Laravel", "Next.js", "Node.js", "Docker", "Typescript", "MySQL"],
            description: "Durante o período nessa empresa, participei de dois projetos. O primeiro tratava-se de um sistema administrativo para uma rede de parques aquáticos, entre outras coisas, o sistema incluía um sistema de captura facial e integração com sistema de catracas por reconhecimento facial.",
        },
        {
            name: "NCDD",
            tecnology: ["PHP", "Laravel", "Node.js", "MySQL"],
            description: "Durante esse período, participei de vários projetos, entre eles, destacam-se a API para um sistema de ensino financeiro, que incluía consumo de API externa, tratamento e exibição de dados do mercado financeiro; e um sistema para gerenciamento de licitações da Universidade Federal Rural do Semi árido (Ufersa).",
        },
    ];

    return empresas;
}
