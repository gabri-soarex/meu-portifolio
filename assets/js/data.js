/* ============================================================
   ✏️  EDITE ESTE ARQUIVO COM SUAS INFORMAÇÕES
   Todo o conteúdo do site vem daqui — não precisa mexer no HTML.
   Listas vazias (ex.: experience: []) escondem a seção automaticamente.
   ============================================================ */
window.PORTFOLIO = {
  name: "Gabriel Soares Campos",
  logo: "<gabriel.soares />",
  // Frases que alternam com efeito de digitação no topo
  roles: ["DevOps Engineer", "Cloud AWS", "Infraestrutura como Código", "CI/CD & Automação"],
  summary:
    "Transformo processos manuais em pipelines automatizados e infraestrutura em código. Focado em AWS, Terraform e CI/CD para entregar software com mais velocidade e confiança.",

  // Foto do GitHub (se não carregar, usa a imagem padrão em assets/img/avatar.svg)
  avatar: "https://github.com/gabri-soarex.png",

  // Caminho do seu currículo em PDF (coloque em assets/). Deixe "" para esconder o botão.
  cv: "",

  email: "gagasoares077@gmail.com",

  socials: [
    { type: "github", url: "https://github.com/gabri-soarex" },
    { type: "linkedin", url: "https://www.linkedin.com/in/gabriel-soares7" },
    { type: "email", url: "mailto:gagasoares077@gmail.com" },
  ],

  about: [
    "Sou o Gabriel, profissional DevOps de Garça, interior de São Paulo, apaixonado por automação e computação em nuvem. Gosto de olhar para um processo repetitivo e pensar: \"como faço isso rodar sozinho?\" — seja um deploy, a criação de um ambiente ou a configuração de uma infraestrutura inteira.",
    "Meu foco hoje é a AWS: provisiono recursos com Terraform, construo pipelines de CI/CD e busco sempre ambientes reproduzíveis, seguros e fáceis de manter.",
  ],

  facts: [
    { label: "Localização", value: "Garça · SP" },
    { label: "Foco", value: "Cloud · AWS" },
    { label: "Especialidade", value: "DevOps & Automação" },
  ],

  skills: [
    {
      group: "Cloud · AWS",
      icon: "☁️",
      wide: true, // card ocupa 2 colunas em telas grandes
      items: [
        "EC2", "ECS", "ECR", "Lambda",
        "S3", "CloudFront", "Route 53", "ACM",
        "Load Balancers (ALB/NLB)", "Auto Scaling", "VPC", "IAM",
        "RDS", "CloudWatch",
      ],
    },
    { group: "Infraestrutura como Código", icon: "🏗️", items: ["Terraform"] },
    { group: "CI/CD", icon: "🔁", items: ["CI/CD", "GitLab CI/CD", "Git"] },
    { group: "Automação", icon: "⚙️", items: ["Automação", "Scripts", "Deploy automatizado"] },
    { group: "Mensageria & Cache", icon: "📨", items: ["Redis", "RabbitMQ", "EMQX"] },
  ],

  // category = usada nos filtros. image opcional (ex.: "assets/img/projeto1.png"), senão usa o emoji.
  projects: [
    {
      title: "Meu Portfólio — Gabriel Soares",
      description:
        "Este site! Portfólio responsivo em HTML, CSS e JavaScript puros, sem frameworks, com tema claro/escuro, filtros de projetos e conteúdo centralizado em um único arquivo de dados. Publicado no GitHub Pages.",
      tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      category: "Web",
      emoji: "💼",
      image: "assets/img/projetos/portfolio.jpg",
      repo: "https://github.com/gabri-soarex/portifolio",
      demo: "https://gabri-soarex.github.io/portifolio/",
    },
    {
      title: "FK Eventos",
      description:
        "Site para uma produtora de festas de Garça-SP: agenda de próximos eventos, histórico de festas, galeria e carrinho de ingressos que fecha o pedido direto no WhatsApp, já com a ficha do pedido pronta.",
      tech: ["Next.js", "React", "Carrinho", "WhatsApp"],
      category: "Web",
      emoji: "🎉",
      image: "assets/img/projetos/fk-eventos.jpg",
      repo: "",
      demo: "https://eventosfk.com.br/",
    },
    {
      title: "Catálogo Camargo's Móveis",
      description:
        "Catálogo online para uma loja de móveis de escritório em Garça-SP, com mais de 15 anos de mercado: vitrine de produtos por categoria, informações da loja, localização e contato rápido pelo WhatsApp.",
      tech: ["HTML", "CSS", "JavaScript"],
      category: "Web",
      emoji: "🪑",
      image: "assets/img/projetos/camargos-moveis.jpg",
      repo: "",
      demo: "https://catalogocamargosmoveis.com.br/",
    },
    // Adicione mais projetos copiando o bloco acima. Exemplo:
    // {
    //   title: "Infra com Terraform",
    //   description: "VPC, EC2 e RDS provisionados com Terraform, com state remoto no S3.",
    //   tech: ["Terraform", "AWS"],
    //   category: "IaC",
    //   emoji: "🏗️",
    //   repo: "https://github.com/gabri-soarex/NOME-DO-REPO",
    //   demo: "",
    // },
  ],

  // Certificados: coloque o PDF e uma imagem (miniatura) em assets/certificados/.
  // type: "Participação", "Curso", "Certificação"... | verify: link de validação (opcional)
  // featured: true → card grande em destaque com borda dourada
  certificates: [
    // Quando passar na CLF-C02, descomente este bloco (card dourado em destaque),
    // preencha a data, o PDF/selo em assets/certificados/ e o link do Credly em verify.
    // {
    //   featured: true,
    //   title: "AWS Certified Cloud Practitioner",
    //   code: "CLF-C02",
    //   org: "Amazon Web Services",
    //   description:
    //     "Certificação oficial da AWS que valida conhecimentos em conceitos de nuvem, serviços principais da AWS, segurança, arquitetura, preços e suporte.",
    //   status: "Certificado",
    //   date: "DD/MM/AAAA",
    //   hours: "",
    //   type: "Certificação",
    //   image: "assets/certificados/aws-clf-c02.svg",
    //   file: "",
    //   verify: "https://www.credly.com/badges/SEU-BADGE",
    // },
    {
      title: "AWS Cloud Practitioner Essentials",
      org: "AWS Training & Certification",
      date: "04/11/2026",
      hours: "",
      type: "Curso",
      image: "assets/certificados/aws-cloud-practitioner-essentials.jpg",
      file: "assets/certificados/aws-cloud-practitioner-essentials.pdf",
      verify: "",
    },
    {
      title: "Capacita+: Construa com o Gemini",
      org: "Google Cloud",
      date: "25/09/2026",
      hours: "2h",
      type: "Participação",
      image: "assets/certificados/capacita-gemini.jpg",
      file: "assets/certificados/capacita-gemini.pdf",
      verify: "",
    },
    {
      title: "EducaTech 2026 — 1º Simpósio Regional das Etecs e Fatecs",
      org: "Centro Paula Souza · Marília",
      date: "27/10/2026",
      hours: "10h",
      type: "Participação",
      image: "assets/certificados/educatech-2026.jpg",
      file: "assets/certificados/educatech-2026.pdf",
      verify: "https://www.even3.com.br/documentos",
    },
  ],

  // Adicione experiências/formação/certificações. Enquanto vazio, a seção fica oculta.
  // Exemplo: { period: "2025 — Atual", title: "Estagiário DevOps", org: "Empresa X", description: "O que você fez." },
  experience: [],

  contactText:
    "Estou aberto a oportunidades em DevOps e Cloud. Se quiser conversar sobre uma vaga, projeto ou trocar ideia sobre AWS e automação, me chama!",
};
