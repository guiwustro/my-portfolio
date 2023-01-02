interface IHomePageInfo {
  header: {
    home: string;
    technologies: string;
    projects: string;
    contact: string;
    colors: {
      darkBlue: string;
      green: string;
      salmon: string;
    };
  };
  "see-project": string;
  hello: string;
  "full-stack-developer": string;
  "about-me": string;
  "change-theme": string;
  "see-more-projects": string;
  "see-code": string;
  techs: string;
  projects: string;
  projects_description: string[];
  contact: {
    title: string;
    description: string;
    "label-name": string;
    "label-subject": string;
    "label-message": string;
    submitMessage: string;
    errorSubmit: string;
    sucessSubmit: string;
  };
  "projects-info": string;
  footer: string;
}
interface IHomePageInfoProps {
  en: IHomePageInfo;
  default: IHomePageInfo;
}

export const homePageInfo: IHomePageInfoProps = {
  en: {
    header: {
      home: "Home",
      technologies: "Technologies",
      projects: "Projects",
      contact: "Contact",
      colors: {
        darkBlue: "Blue",
        green: "Green",
        salmon: "Salmon",
      },
    },
    "see-project": "See Project",
    hello: "Hello, I'm",
    "full-stack-developer": "Full-stack Developer",
    "about-me":
      "Undergraduate civil engineer, I develop modern web-sites, focused on performance, responsiveness, animations and SEO.",
    "change-theme": "Change theme",
    "see-more-projects": "To see more projects, get in touch.",
    "see-code": "See code",
    techs: "Technologies",
    projects: "Projects",

    projects_description: [
      "Application of a PET Hotel that allows the user to make reservations for their pet, being able to choose personalized services for their pet",
      "The application allows the user to place an order from several restaurants, being able to filter restaurants according to their dietary restrictions until finalizing their order.",
      "It is an application developed for the user to manage the technologies learned and the projects created.",
      "It is a single-page e-commerce application, which has a showcase with products with add-to-cart buttons, a shopping cart and a filter bar, a search field.",
      "It is an expense control platform, where it is possible to register a description, an amount and the type of that amount (input or output)",
    ],

    contact: {
      title: "Contact",
      description:
        "I'm interested in freelance project opportunities and job opportunities. But if you have any questions or doubts, you can message me!",
      "label-name": "Name",
      "label-subject": "Subject",
      "label-message": "Message",
      submitMessage: "Submit",
      errorSubmit: "Fill in all information!",
      sucessSubmit: "E-mail sent successfully!",
    },
    "projects-info": "Click on the project for more details.",
    footer: "© Copyright 2022 by Guilherme Wustro.",
  },
  default: {
    header: {
      home: "Início",
      technologies: "Tecnologias",
      projects: "Projetos",
      contact: "Contato",
      colors: {
        darkBlue: "Azul",
        green: "Verde",
        salmon: "Salmão",
      },
    },
    "see-project": "Ver projeto",
    hello: "Olá, eu sou",
    "full-stack-developer": "Desenvolvedor full-stack",
    "about-me":
      "Engenheiro civil de graduação, desenvolvo web-sites modernos, concentrados em performance, responsividade, animações e SEO.",
    "change-theme": "Trocar tema",
    "see-more-projects": "Para ver mais projetos, entre em contato.",
    "see-code": "Ver código",
    techs: "Tecnologias",
    projects: "Projetos",

    projects_description: [
      "Aplicação de um PET Hotel onde permite ao usuário fazer reservas para o seu animalzinho de estimação, podendo escolher serviços personalizados para o seu pet.",
      "A aplicação permite o usuário fazer um pedido de diversos restaurantes, podendo filtrar restaurantes de acordo com suas restrições alimentares até finalizar o seu pedido.",
      "É uma aplicação desenvolvida para o usuário gerenciar as tecnologias aprendidas e os projetos criados.",
      "É uma aplicação de página única de um e-commerce, o qual possui uma vitrine com produtos com botões de adicionar ao carrinho, um carrinho de compras e uma barra de filtros, um campo de pesquisa.",
      "É uma plataforma de controle de gastos, onde é possível registrar uma descrição, um valor e o tipo desse valor (entrada ou saída).",
      "A ideia desse projeto é simular uma comunidade, onde todos os membros cadastrados podem consumir, criar, atualizar e deletar publicações de texto. Foi desenvolvido utilizando Programação Orientada a Objetos.",
    ],
    contact: {
      title: "Contato",
      description:
        "Eu estou interessado em oportunidades projetos freelance e oportunidades de emprego. Mas se você tiver qualquer questão ou dúvida, pode me mandar mensagem!",
      "label-name": "Nome",
      "label-subject": "Assunto",
      "label-message": "Mensagem",
      submitMessage: "Enviar",
      errorSubmit: "Preencha todas as informações",
      sucessSubmit: "E-mail enviado com sucesso!",
    },
    "projects-info": "Clique nos projetos para mais detalhes",
    footer: "© Copyright 2022 por Guilherme Wustro.",
  },
};
