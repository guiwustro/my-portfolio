interface IHomePageInfo {
  header: {
    home: string;
    technologies: string;
    projects: string;
    contact: string;
  };
  "see-project": string;
  hello: string;
  "front-end-developer": string;
  "about-me": string;
  techs: string;
  projects: string;
  projects_description: string[];
  contact: {
    title: string;
    description: string;
    "label-name": string;
    "label-subject": string;
    "label-message": string;
  };
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
    },
    "see-project": "See Project",
    hello: "Hello, I'm",
    "front-end-developer": "Front-End Developer",
    "about-me":
      "Undergraduate civil engineer, I develop modern web-sites, focused on performance, responsiveness, animations and SEO.",
    techs: "Technologies",
    projects: "Projects",
    projects_description: [
      "The application allows the user to place an order from several restaurants, being able to filter restaurants according to their dietary restrictions until finalizing their order.",
      "It is an application developed for the user to manage the technologies learned and the projects created.",
      "It is a single-page e-commerce application, which has a showcase with products with add-to-cart buttons, a shopping cart and a filter bar, a search field.",
      "It is an expense control platform, where it is possible to register a description, an amount and the type of that amount (input or output)",
      "The idea of this project is to simulate a community, where all registered members can consume, create, update and delete text publications. It was developed using Object Oriented Programming.",
      "It is a single-page e-commerce application, which has a showcase with products with add-to-cart buttons, a shopping cart, a filter bar and a search field.",
      "Based on the game The Oregon Trail, it's an application in which the user rides his own wagon, chooses how many wagons it will have, and in it he can add three types of travelers. Each traveler has specific actions, which can be to hunt for food, eat and /or cure. Developed using Object Oriented Programming.",
    ],
    contact: {
      title: "Contact",
      description:
        "I'm interested in freelance project opportunities and job opportunities. But if you have any questions or doubts, you can message me!",
      "label-name": "Name",
      "label-subject": "Subject",
      "label-message": "Message",
    },
  },
  default: {
    header: {
      home: "Início",
      technologies: "Tecnologias",
      projects: "Projetos",
      contact: "Contato",
    },
    "see-project": "Ver projeto",
    hello: "Olá, eu sou",
    "front-end-developer": "Desenvolvedor front-end",
    "about-me":
      "Engenheiro civil de graduação, desenvolvo web-sites modernos, concentrados em performance, responsividade, animações e SEO.",
    techs: "Tecnologias",
    projects: "Projetos",
    projects_description: [
      "A aplicação permite o usuário fazer um pedido de diversos restaurantes, podendo filtrar restaurantes de acordo com suas restrições alimentares até finalizar o seu pedido.",
      "É uma aplicação desenvolvida para o usuário gerenciar as tecnologias aprendidas e os projetos criados.",
      "É uma aplicação de página única de um e-commerce, o qual possui uma vitrine com produtos com botões de adicionar ao carrinho, um carrinho de compras e uma barra de filtros, um campo de pesquisa.",
      "É uma plataforma de controle de gastos, onde é possível registrar uma descrição, um valor e o tipo desse valor (entrada ou saída).",
      "A ideia desse projeto é simular uma comunidade, onde todos os membros cadastrados podem consumir, criar, atualizar e deletar publicações de texto. Foi desenvolvido utilizando Programação Orientada a Objetos.",
      "É uma aplicação de página única de um e-commerce, o qual possui uma vitrine com produtos com botões de adicionar ao carrinho, um carrinho de compras,uma barra de filtros e um campo de pesquisa",
      "Baseado no jogo The Oregon Trail, é uma aplicação em que o usuário monta sua própria carroça, escolhe quantos vagões ela terá , e nela consegue adicionar três tipos de viajantes. Cada viajante possui ações específicas, podendo ser a de caçar comida, comer e/ou curar. Desenvolvido utilizando Programação Orientada a Objetos.",
    ],
    contact: {
      title: "Contato",
      description:
        "Eu estou interessado em oportunidades projetos freelance e oportunidades de emprego. Mas se você tiver qualquer questão ou dúvida, pode me mandar mensagem!",
      "label-name": "Nome",
      "label-subject": "Assunto",
      "label-message": "Mensagem",
    },
  },
};
