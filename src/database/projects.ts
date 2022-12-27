import healthyGoAboutUs from "../assets/images/projects/healthy-go/healthyGoAboutUs.jpg";
import healthyGoCart from "../assets/images/projects/healthy-go/healthyGoCart.jpg";
import healthyGoCheckout from "../assets/images/projects/healthy-go/healthyGoCheckOut.jpg";
import healthyGoHome from "../assets/images/projects/healthy-go/healthyGoHome.jpg";
import healthyGoLogin from "../assets/images/projects/healthy-go/healthyGoLogin.jpg";
import healthyGoProfile from "../assets/images/projects/healthy-go/healthyGoProfile.jpg";
import healthyGoRegister from "../assets/images/projects/healthy-go/healthyGoRegister.jpg";
import healthyGoRestaurant from "../assets/images/projects/healthy-go/healthyGoRestaurant.jpg";
import healthyGoSuccess from "../assets/images/projects/healthy-go/healthyGoSuccess.jpg";
import kenzieBurguerDark from "../assets/images/projects/kenzie-burguer/HomePage-DarkTheme-EmptyCart.jpg";
import kenzieBurguerDark2 from "../assets/images/projects/kenzie-burguer/HomePage-DarkTheme.jpg";
import kenzieBurguerLight from "../assets/images/projects/kenzie-burguer/HomePage-LightTheme-EmptyCart.jpg";
import kenzieBurguerLight2 from "../assets/images/projects/kenzie-burguer/HomePage-LightTheme.jpg";
import kenzieHubHome from "../assets/images/projects/kenzie-hub/Home-tela-grande.png";
import kenzieHubLogin from "../assets/images/projects/kenzie-hub/kenzie-hub-login.png";
import kenzieHubRegister from "../assets/images/projects/kenzie-hub/Register-1440px.png";
import MeAuHome from "../assets/images/projects/me-au/Home.jpg";
import nuKenzieHome from "../assets/images/projects/nu-kenzie/home-page-1440px.png";
import nuKenzieLight from "../assets/images/projects/nu-kenzie/main-page-1440px-light-mode.png";
import nuKenzieDark from "../assets/images/projects/nu-kenzie/main-page-1440px.png";

export interface IProjects {
  "project-name": string;
  "github-link": string;
  "project-url": string;
  description: string;
  "about-project": string[];
  "back-end-links"?: {
    docs?: string;
    github?: string;
  };
  techs: string[];
  features: string[];
  images: string[];
}
const dataProjects: IProjects[] = [
  {
    "project-name": "Me Au Pet Hotel",
    "github-link": "https://github.com/guiwustro/me-au-front-end",
    "project-url": "https://me-au.vercel.app/",
    "back-end-links": {
      docs: "https://m4-projeto-final.github.io/me-au-docs/",
      github: "https://github.com/M4-PROJETO-FINAL/me-au-back-end",
    },
    description:
      "Aplicação de um PET Hotel onde permite ao usuário fazer reservas para o seu animalzinho de estimação, podendo escolher serviços personalizados para o seu pet.",
    "about-project": [
      "A aplicação representa um pet hotel, pensado para pais e mães de pets que precisam se ausentar e não têm onde deixar os seus animais, com a liberdade criativa, foi criado um hotel que permite ao usuário fazer uma reserva para o seu animalzinho de estimação, podendo escolher serviços personalizados desde natação até SPA. Para realização desse projeto front-end foi criado uma API para o armazenamento dos dados do servidor.",
    ],
    techs: [
      "React",
      "TypeScript",
      "Styled Components",
      "NodeJS",
      "TypeORM",
      "PostgreSQL",
      "Axios",
      "ContextAPI",
      "React Router DOM",
      "Hot-Toastify",
      "Framer motion",
      "react-google-auth",
      "react-input-mask",
    ],
    features: [
      "Registro e login de um usuário",
      "Login do usuário através de uma conta do google",
      "Criação, edição e remoção de um pet",
      "Dashboard contendo as informações do usuários, seus pets e suas reservas",
      "Realização de uma reserva em uma determinada data, podendo escolher entre 3 tipos de quartos",
      "Seleção de serviços personalizados para o pet na criação de uma reserva",
      "Site em duas línguas (Português e Inglês)",
      "Responsivo para todas as telas",
      "Possibilidade de cancelamento e avaliação das reservas",
      "Página sobre nós - mostrando informações do hotel e dos desenvolvedores da aplicação",
    ],
    images: [MeAuHome],
  },
  {
    "project-name": "HealthyGo",
    "github-link": "https://github.com/guiwustro/healthy-go-project",
    "project-url": "https://healthygo.vercel.app/home/",
    description:
      "A aplicação permite o usuário fazer um pedido de diversos restaurantes, podendo filtrar restaurantes de acordo com suas restrições alimentares até finalizar o seu pedido.",
    "about-project": [
      "Alimentar-se bem é saber fazer boas escolhas e a missão da Healthygo é te ajudar nessa decisão tão importante! O projeto foi inspirado com o objetivo de facilitar a vida das pessoas com restrições alimentares: os com intolerância a lactose, glúten, vegetarianos e veganos.",
      "A aplicação permite o usuário fazer um pedido de diversos restaurantes os quais se encaixam nessas restrições. Além de possuir filtros, para facilitar o usuário, podendo escolher quais restaurantes possuem essa categoria alimentícia.",
    ],
    techs: [
      "React",
      "TypeScript",
      "Styled Components",
      "Axios",
      "ContextAPI",
      "React Router DOM",
      "Hot-Toastify",
      "Framer motion",
      "react-google-auth",
      "react-input-mask",
    ],
    features: [
      "Página inicial com os restaurantes da API a amostra, para o usuários deslogado;",
      "Página para Login, onde o usuário pode logar com as credenciais do Google;",
      "Página para Cadastro de usuário;",
      "Não é possível adicionar produtos ao carrinho deslogado, sendo enviado feedbacks ao usuário quando tenta adicionar produtos ao carrinho deslogado, indicando o Login;",
      "Usuário logado pode editar perfil, tendo suas informações salvas na API, além de adicionar endereços e remove-los;",
      "Usuário tem a opção de pegar o endereço através da localização atual, os dados são retirados da API Geolocation/DB;",
      "Usuário logado pode adicionar produtos ao carrinho através dos restaurantes, podendo adicionar produtos de diversos restaurantes. O Frete é calculado numa taxa fixa por restaurante;",
      "Usuário logado pode manipular seu carrinho (adicionando, diminuindo e removendo produtos) através do próprio carrinho;",
      "Usuário logado pode finalizar seu pedido, redirecionando para a página de CheckOut, onde há campos para o registro de Cartão de Débito/Crédito, além do resumo do pedido do usuário;",
      "Depois do preenchimento dos dados do cartão e seleção de um Endereço, e clicado no botão Finalizar pedido, o usuário é notificado com uma mensagem de Sucesso e o carrinho é esvaziado",
      "Feedback ao usuário (notificações de erro) caso falte alguma informação a preencher no checkout;",
      "O carrinho do usuário fica salvo na API , ou seja, enquanto o usuário, ou seja, o carrinho estará lá até remover os produtos ou o usuário finalizar o pedido;",
      "Página com os pedidos do usuário;",
      "Responsivo para todas as telas entre 320px e 4k;",
      "Dark-Mode;",
    ],
    images: [
      healthyGoHome,
      healthyGoRestaurant,
      healthyGoAboutUs,
      healthyGoCart,
      healthyGoCheckout,
      healthyGoLogin,
      healthyGoProfile,
      healthyGoRegister,
      healthyGoSuccess,
    ],
  },
  {
    "project-name": "Kenzie Hub",
    "github-link": "https://github.com/guiwustro/kenzie-hub",
    "project-url": "https://kenzie-hub-guiwustro.vercel.app/",
    description:
      "É uma aplicação desenvolvida para o usuário gerenciar as tecnologias aprendidas e os projetos criados.",
    "about-project": [
      "A aplicação tem o objetivo de facilitar a organização de um usuário ao estudar novas tecnologias. É possível, através dela, registrar novas tecnologias aprendidas, registrando seu nível (básico, intermediário ou avançado), também sendo capaz de editar e remove-las. A plataforma, permite também ao usuário fazer o registro e atualização de seus projetos.",
    ],
    techs: [
      "React",
      "TypeScript",
      "Axios",
      "ContextAPI",
      "Styled Components",
      "React Router DOM",
      "Toastify",
      "Framer motion",
    ],
    features: [
      "Página para o usuário criar uma conta;",
      "Validação dos dados ao se registrar, a senha possui requisitos mínimos para ser criada e todos os campos são obrigatórios. Tudo isso é notificado pela aplicação ao fazer a criação de uma nova conta;",
      "Notificações de feedback ao usuário ao criar uma conta, fazer login, criação, alteração ou remoção de novas tecnologias e proejtos;",
      "Login do usuário na plataforma, verificando se o usuário já está cadastrado;",
      "O usuário é capaz de inserir novas tecnologias e novos projetos;",
      "O usuário é capaz de alterar e remover as tecnologias e os projetos já existentes;",
      "Responsivo para todas as telas.",
    ],
    images: [kenzieHubHome, kenzieHubLogin, kenzieHubRegister],
  },
  {
    "project-name": "Hamburgueria da Kenzie",
    "github-link": "https://github.com/guiwustro/kenzie-burguer",
    "project-url": "https://hamburgueria-kenzie-guiwustro.vercel.app/",
    description:
      "É uma aplicação de página única de um e-commerce, o qual possui uma vitrine com produtos com botões de adicionar ao carrinho, um carrinho de compras e uma barra de filtros, um campo de pesquisa.",
    "about-project": [
      "A aplicação conta com um tema escuro além do tema claro, para o usuário escolher, e o tema fica salvo na página do usuário, ou seja, caso o usuário selecione o modo escuro, a próxima vez que ele conectar na página continuará sendo esse modo.",
      "O carrinho de compras só é visível ao usuário quando algum produto é adicionado ao carrinho. Dentro dele o usuário é capaz de aumentar, diminuir a quantidade do produto através dos botões + e - ou remover o produto. É feito automaticamente o cálculo ao cliente do carrinho a cada adição, diminuição ou remoção de produto.",
    ],
    techs: ["React", "CSS", "Axios", "Styled Components", "ContextAPI"],
    features: [
      "Vitrine com os produtos do e-commerce;",
      " Botão com a opção de adicionar ao carrinho em cada produto do e-commerce;",
      " Campo de pesquisa funcional para pesquisar por categoria ou nome do produto;",
      " Opção de aumentar, diminuir quantidade e remover pelo carrinho de compras;",
      " Cálculo total do carrinho de compras;",
      " Opção de remover todos os produtos do carrinho;",
      " Responsivo para qualquer tela;",
      " Dark-mode.",
    ],
    images: [
      kenzieBurguerLight,
      kenzieBurguerDark,
      kenzieBurguerLight2,
      kenzieBurguerDark2,
    ],
  },
  {
    "project-name": "Nu Kenzie",
    "github-link": "https://github.com/guiwustro/nu-kenzie",
    "project-url": "https://nu-kenzie-guiwustro.vercel.app/",
    description:
      "É uma plataforma de controle de gastos, onde é possível registrar uma descrição, um valor e o tipo desse valor (entrada ou saída).",
    "about-project": [
      "É uma plataforma de controle de gastos, onde é possível registrar uma descrição, um valor e o tipo desse valor (entrada ou saída).",
      "O usuário é capaz de filtrar suas despesas e entradas, e o valor total é calculado dinamicamente de acordo com o filtro selecionado.",
    ],
    techs: ["React", "Axios", "Context API"],
    features: [
      "Formulário para o usuário registrar uma nova entrada/saída;",
      "Filtro de despesas e entradas;",
      "Calculo dinâmico do valor total de acordo com o que está sendo filtrado (todos, entradas ou despesas);",
      "Opção de remover entrada/despesa inserida;",
      "Responsivo para todas as telas;",
      "Dark-mode;",
    ],
    images: [nuKenzieLight, nuKenzieDark, nuKenzieHome],
  },
];

export default dataProjects;
