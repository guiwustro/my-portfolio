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
      "Aplica????o de um PET Hotel onde permite ao usu??rio fazer reservas para o seu animalzinho de estima????o, podendo escolher servi??os personalizados para o seu pet.",
    "about-project": [
      "A aplica????o representa um pet hotel, pensado para pais e m??es de pets que precisam se ausentar e n??o t??m onde deixar os seus animais, com a liberdade criativa, foi criado um hotel que permite ao usu??rio fazer uma reserva para o seu animalzinho de estima????o, podendo escolher servi??os personalizados desde nata????o at?? SPA. Para realiza????o desse projeto front-end foi criado uma API para o armazenamento dos dados do servidor.",
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
      "Registro e login de um usu??rio",
      "Login do usu??rio atrav??s de uma conta do google",
      "Cria????o, edi????o e remo????o de um pet",
      "Dashboard contendo as informa????es do usu??rios, seus pets e suas reservas",
      "Realiza????o de uma reserva em uma determinada data, podendo escolher entre 3 tipos de quartos",
      "Sele????o de servi??os personalizados para o pet na cria????o de uma reserva",
      "Site em duas l??nguas (Portugu??s e Ingl??s)",
      "Responsivo para todas as telas",
      "Possibilidade de cancelamento e avalia????o das reservas",
      "P??gina sobre n??s - mostrando informa????es do hotel e dos desenvolvedores da aplica????o",
    ],
    images: [MeAuHome],
  },
  {
    "project-name": "HealthyGo",
    "github-link": "https://github.com/guiwustro/healthy-go-project",
    "project-url": "https://healthygo.vercel.app/home/",
    description:
      "A aplica????o permite o usu??rio fazer um pedido de diversos restaurantes, podendo filtrar restaurantes de acordo com suas restri????es alimentares at?? finalizar o seu pedido.",
    "about-project": [
      "Alimentar-se bem ?? saber fazer boas escolhas e a miss??o da Healthygo ?? te ajudar nessa decis??o t??o importante! O projeto foi inspirado com o objetivo de facilitar a vida das pessoas com restri????es alimentares: os com intoler??ncia a lactose, gl??ten, vegetarianos e veganos.",
      "A aplica????o permite o usu??rio fazer um pedido de diversos restaurantes os quais se encaixam nessas restri????es. Al??m de possuir filtros, para facilitar o usu??rio, podendo escolher quais restaurantes possuem essa categoria aliment??cia.",
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
      "P??gina inicial com os restaurantes da API a amostra, para o usu??rios deslogado;",
      "P??gina para Login, onde o usu??rio pode logar com as credenciais do Google;",
      "P??gina para Cadastro de usu??rio;",
      "N??o ?? poss??vel adicionar produtos ao carrinho deslogado, sendo enviado feedbacks ao usu??rio quando tenta adicionar produtos ao carrinho deslogado, indicando o Login;",
      "Usu??rio logado pode editar perfil, tendo suas informa????es salvas na API, al??m de adicionar endere??os e remove-los;",
      "Usu??rio tem a op????o de pegar o endere??o atrav??s da localiza????o atual, os dados s??o retirados da API Geolocation/DB;",
      "Usu??rio logado pode adicionar produtos ao carrinho atrav??s dos restaurantes, podendo adicionar produtos de diversos restaurantes. O Frete ?? calculado numa taxa fixa por restaurante;",
      "Usu??rio logado pode manipular seu carrinho (adicionando, diminuindo e removendo produtos) atrav??s do pr??prio carrinho;",
      "Usu??rio logado pode finalizar seu pedido, redirecionando para a p??gina de CheckOut, onde h?? campos para o registro de Cart??o de D??bito/Cr??dito, al??m do resumo do pedido do usu??rio;",
      "Depois do preenchimento dos dados do cart??o e sele????o de um Endere??o, e clicado no bot??o Finalizar pedido, o usu??rio ?? notificado com uma mensagem de Sucesso e o carrinho ?? esvaziado",
      "Feedback ao usu??rio (notifica????es de erro) caso falte alguma informa????o a preencher no checkout;",
      "O carrinho do usu??rio fica salvo na API , ou seja, enquanto o usu??rio, ou seja, o carrinho estar?? l?? at?? remover os produtos ou o usu??rio finalizar o pedido;",
      "P??gina com os pedidos do usu??rio;",
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
      "?? uma aplica????o desenvolvida para o usu??rio gerenciar as tecnologias aprendidas e os projetos criados.",
    "about-project": [
      "A aplica????o tem o objetivo de facilitar a organiza????o de um usu??rio ao estudar novas tecnologias. ?? poss??vel, atrav??s dela, registrar novas tecnologias aprendidas, registrando seu n??vel (b??sico, intermedi??rio ou avan??ado), tamb??m sendo capaz de editar e remove-las. A plataforma, permite tamb??m ao usu??rio fazer o registro e atualiza????o de seus projetos.",
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
      "P??gina para o usu??rio criar uma conta;",
      "Valida????o dos dados ao se registrar, a senha possui requisitos m??nimos para ser criada e todos os campos s??o obrigat??rios. Tudo isso ?? notificado pela aplica????o ao fazer a cria????o de uma nova conta;",
      "Notifica????es de feedback ao usu??rio ao criar uma conta, fazer login, cria????o, altera????o ou remo????o de novas tecnologias e proejtos;",
      "Login do usu??rio na plataforma, verificando se o usu??rio j?? est?? cadastrado;",
      "O usu??rio ?? capaz de inserir novas tecnologias e novos projetos;",
      "O usu??rio ?? capaz de alterar e remover as tecnologias e os projetos j?? existentes;",
      "Responsivo para todas as telas.",
    ],
    images: [kenzieHubHome, kenzieHubLogin, kenzieHubRegister],
  },
  {
    "project-name": "Hamburgueria da Kenzie",
    "github-link": "https://github.com/guiwustro/kenzie-burguer",
    "project-url": "https://hamburgueria-kenzie-guiwustro.vercel.app/",
    description:
      "?? uma aplica????o de p??gina ??nica de um e-commerce, o qual possui uma vitrine com produtos com bot??es de adicionar ao carrinho, um carrinho de compras e uma barra de filtros, um campo de pesquisa.",
    "about-project": [
      "A aplica????o conta com um tema escuro al??m do tema claro, para o usu??rio escolher, e o tema fica salvo na p??gina do usu??rio, ou seja, caso o usu??rio selecione o modo escuro, a pr??xima vez que ele conectar na p??gina continuar?? sendo esse modo.",
      "O carrinho de compras s?? ?? vis??vel ao usu??rio quando algum produto ?? adicionado ao carrinho. Dentro dele o usu??rio ?? capaz de aumentar, diminuir a quantidade do produto atrav??s dos bot??es + e - ou remover o produto. ?? feito automaticamente o c??lculo ao cliente do carrinho a cada adi????o, diminui????o ou remo????o de produto.",
    ],
    techs: ["React", "CSS", "Axios", "Styled Components", "ContextAPI"],
    features: [
      "Vitrine com os produtos do e-commerce;",
      " Bot??o com a op????o de adicionar ao carrinho em cada produto do e-commerce;",
      " Campo de pesquisa funcional para pesquisar por categoria ou nome do produto;",
      " Op????o de aumentar, diminuir quantidade e remover pelo carrinho de compras;",
      " C??lculo total do carrinho de compras;",
      " Op????o de remover todos os produtos do carrinho;",
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
      "?? uma plataforma de controle de gastos, onde ?? poss??vel registrar uma descri????o, um valor e o tipo desse valor (entrada ou sa??da).",
    "about-project": [
      "?? uma plataforma de controle de gastos, onde ?? poss??vel registrar uma descri????o, um valor e o tipo desse valor (entrada ou sa??da).",
      "O usu??rio ?? capaz de filtrar suas despesas e entradas, e o valor total ?? calculado dinamicamente de acordo com o filtro selecionado.",
    ],
    techs: ["React", "Axios", "Context API"],
    features: [
      "Formul??rio para o usu??rio registrar uma nova entrada/sa??da;",
      "Filtro de despesas e entradas;",
      "Calculo din??mico do valor total de acordo com o que est?? sendo filtrado (todos, entradas ou despesas);",
      "Op????o de remover entrada/despesa inserida;",
      "Responsivo para todas as telas;",
      "Dark-mode;",
    ],
    images: [nuKenzieLight, nuKenzieDark, nuKenzieHome],
  },
];

export default dataProjects;
