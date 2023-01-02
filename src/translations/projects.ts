interface IProject {
  "project-name": string;
  "github-link": string;
  "project-url": string;
  description: string;
  "about-project": string[];
  techs: string[];
  features: string[];
}

interface IProjectInfo {
  "see-website": string;
  techs: string;
  features: string;
  "about-project": string;
  projects: IProject[];
  "deploy-api-message": string;
  "see-code": string;
}

export interface IProjectsInfo {
  en: IProjectInfo;
  default: IProjectInfo;
}

export const projectsInfo: IProjectsInfo = {
  en: {
    "see-website": "See website",
    techs: "Technologies",
    features: "Features",
    "about-project": "About project",
    "deploy-api-message":
      "The API deploy may be offline so some functionality will not be working!",
    "see-code": "See code",
    projects: [
      {
        "project-name": "Me Au Pet Hotel",
        "github-link": "https://github.com/guiwustro/me-au-front-end",
        "project-url": "https://me-au.vercel.app/",
        description:
          "Application of a PET Hotel which allows the user to make reservations for their pet, being able to choose personalized services for their pet.",
        "about-project": [
          "The application represents a pet hotel, designed for parents of pets who need to be away and have nowhere to leave their animals, with creative freedom, a hotel was created that allows the user to make a reservation for their pet, being able to choose personalized services from swimming to SPA. To carry out this front-end project, an API was created to store data from the server.",
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
          "Registration and login of a user",
          "User login via a google account",
          "Creating, editing and removing a pet",
          "Dashboard containing user information, their pets and their reservations",
          "Making a reservation on a given date, being able to choose between 3 types of rooms",
          "Selection of personalized services for the pet when creating a reservation",
          "Site in two languages (Portuguese and English)",
          "Responsive for all screens",
          "Possibility of cancellation and evaluation of reservations",
          "About us page - showing information from the hotel and application developers",
        ],
      },
      {
        "project-name": "HealthyGo",
        "github-link": "https://github.com/guiwustro/healthy-go-project",
        "project-url": "https://healthygo.vercel.app/home/",
        description:
          "The application allows the user to place an order from several restaurants, being able to filter restaurants according to their dietary restrictions until finalizing their order.",
        "about-project": [
          "Eating well is knowing how to make good choices and Healthygo's mission is to help you in this important decision! The project was inspired with the objective of making life easier for people with dietary restrictions: those with lactose intolerance, gluten, vegetarians and vegans.",
          "The application allows the user to place an order from several restaurants that fit these restrictions. In addition to having filters, to facilitate the user, being able to choose which restaurants have this food category.",
        ],
        techs: [
          "React",
          "TypeScript",
          "Axios",
          "ContextAPI",
          "Styled Components",
          "React Router DOM",
          "Hot-Toastify",
          "Framer motion",
          "react-google-auth",
          "react-input-mask",
        ],
        features: [
          "Home page with sample API restaurants, for logged out users;",
          "Login page, where the user can log in with Google credentials;",
          "User Registration Page;",
          "It is not possible to add products to the offline cart, feedback is sent to the user when he tries to add products to the offline cart, indicating the Login;",
          "Logged in user can edit profile, having their information saved in the API, in addition to adding addresses and removing them;",
          "User has the option to get the address through the current location, the data is taken from the Geolocation/DB API;",
          "Logged in user can add products to cart through restaurants, being able to add products from different restaurants. Shipping is calculated at a fixed rate per restaurant;",
          "Logged in user can manipulate their cart (adding, decreasing and removing products) through the cart itself;",
          "Logged-in user can finalize their order, redirecting to the CheckOut page, where there are fields for the Debit/Credit Card registration, in addition to the summary of the user's order;",
          "After filling in the card details and selecting an Address, and clicking on the Finish Order button, the user is notified with a Success message and the cart is emptied",
          "Feedback to the user (error notifications) if any information is missing to be filled in at checkout;",
          "The user's cart is saved in the API, that is, while the user, that is, the cart will be there until the products are removed or the user finishes the order;",
          "Page with user requests;",
          "Responsive for all screens between 320px and 4k;",
          " Dark-Mode;",
        ],
      },
      {
        "project-name": "Kenzie Hub",
        "github-link": "https://github.com/guiwustro/kenzie-hub",
        "project-url": "https://kenzie-hub-guiwustro.vercel.app/",
        description:
          "It is an application developed for the user to manage the technologies learned and the projects created.",
        "about-project": [
          "It is an application developed for the user to manage the technologies learned, choosing the level of understanding of the technology (basic, intermediate or advanced). In addition to adding new technologies to the platform, the user is able to edit and remove technologies.",
          "The application also has a Login and Registration page for new users, having their data saved in an API.",
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
          "Page for the user to create an account;",
          "Data validation when registering, the password has minimum requirements to be created and all fields are mandatory. All this is notified by the application when creating a new account;",
          "User feedback notifications when creating an account, logging in, creating, changing or removing new technologies and projects;",
          "User login on the platform, checking if the user is already registered;",
          "The user is able to insert new technologies and new projects;",
          "The user is able to change and remove existing technologies and designs;",
          "Responsive for all screens.",
        ],
      },
      {
        "project-name": "Hamburgueria da Kenzie",
        "github-link": "https://github.com/guiwustro/kenzie-burguer",
        "project-url": "https://hamburgueria-kenzie-guiwustro.vercel.app/",
        description:
          "It is a single-page e-commerce application, which has a showcase with products with add-to-cart buttons, a shopping cart and a filter bar, a search field.",
        "about-project": [
          "The application has a dark theme in addition to the light theme, for the user to choose, and the theme is saved on the user's page, that is, if the user selects the dark mode, the next time he connects to the page it will continue to be this one. mode.",
          "The shopping cart is only visible to the user when a product is added to the cart. Within it, the user is able to increase, decrease the quantity of the product through the + and - buttons or remove the product. The customer is automatically calculated from the cart with each addition, decrease or removal of a product.",
        ],
        techs: ["React", "CSS", "Axios", "Styled Components", "ContextAPI"],
        features: [
          "Showcase with e-commerce products;",
          " Button with the option to add to cart on each e-commerce product;",
          " Functional search field to search by category or product name;",
          "Option to increase, decrease quantity and remove by shopping cart;",
          " Shopping cart total calculation;",
          "Option to remove all products from cart;",
          " Responsive for any screen;",
          "Dark mode.",
        ],
      },
      {
        "project-name": "Nu Kenzie",
        "github-link": "https://github.com/guiwustro/nu-kenzie",
        "project-url": "https://nu-kenzie-guiwustro.vercel.app/",
        description:
          "It is an expense control platform, where it is possible to register a description, an amount and the type of that amount (input or output).",
        "about-project": [
          "It is an expense control platform, where it is possible to register a description, an amount and the type of that amount (input or output).",
          "The user is able to filter their expenses and entries, and the total amount is dynamically calculated according to the selected filter.",
        ],
        techs: ["React", "Axios", "Context API"],
        features: [
          "Form for the user to register a new input/output;",
          "Input and expense filter;",
          "Dynamic calculation of the total amount according to what is being filtered (all, entries or expenses);",
          "Option to remove input/expense entered;",
          "Responsive for all screens;",
          "Dark-mode;",
        ],
      },
      {
        "project-name": "Blog",
        "github-link": "https://github.com/guiwustro/blog",
        "project-url": "https://guiwustro.github.io/blog/",
        description:
          "The idea of this project is to simulate a community, where all registered members can consume, create, update and delete text publications. It was developed using Object Oriented Programming.",
        "about-project": [
          "The project has 3 pages, one for registration, another for login and finally, the main page, where you can create, edit and delete messages.",
          "On the registration page, the user is able to register if he fills in the fields correctly, if a field is not filled in correctly, an error is triggered to the user. Soon after the registration, the user is directed to the main page, with no need to go through the Login. If the user already has an account created, it is possible to access the Login page.",
          "The blog page has the latest messages sent by users. In it the user is able to send messages, edit the message already sent and also delete it. There is also a Logout button for the user to disconnect from his account.",
        ],
        techs: ["JavaScript", "CSS - Metodologia BEM", "HTML"],
        features: [
          "User registration page with 4 fields (username, email, profile picture and password);",
          "Login Page;",
          "Automatic redirection to the blog after registration or login;",
          "Blog page displaying the latest posts sent by active blog users;",
          "Field for creating a new message;",
          "Possibility of editing the message performed by the user;",
          "Possibility to remove user message;",
          "Responsive for all screens.",
        ],
      },
      {
        "project-name": "E-commerce single-page",
        "github-link": "https://github.com/guiwustro/e-commerce-single-page",
        "project-url": "https://guiwustro.github.io/e-commerce-single-page/",
        description:
          "It is a single-page e-commerce application, which has a showcase with products with add-to-cart buttons, a shopping cart, a filter bar and a search field.",
        "about-project": [
          "The project has a product showcase, which you can add the product to the cart by clicking the Buy button.",
          "The shopping cart is only visible to the user when a product is added to the cart. Within it, the user is able to increase, decrease the quantity of the product through the + and - buttons or remove the product. The customer is automatically calculated cart with each addition, decrease or removal of a product. The number of products in the cart is automatically updated also in the cart icon in the navigation bar.",
          "The project also has a search bar by product and category, and a bar of category filters.",
        ],
        techs: ["JavaScript", "CSS - Metodologia BEM", "HTML"],
        features: [
          "Showcase with e-commerce products;",
          "Button with the option to add to cart on each e-commerce product;",
          "Functional search field to search by category or product name;",
          "Filter bar by category;",
          "Option to increase, decrease quantity and remove by shopping cart;",
          "Shopping cart total calculation;",
          "Option to remove all products from cart;",
          "Responsive to any screen;",
        ],
      },
      {
        "project-name": "Oregon Trail",
        "github-link": "https://github.com/guiwustro/oregon-trail-game",
        "project-url": "https://guiwustro.github.io/oregon-trail-game/",
        description:
          "Based on the game The Oregon Trail, it's an application in which the user rides his own wagon, chooses how many wagons it will have, and in it he can add three types of travelers. Each traveler has specific actions, which can be to hunt for food, eat and /or cure. Developed using Object Oriented Programming.",
        "about-project": [
          "This application consists of two pages, the first, the user must choose, the number of wagons that the wagon must have and once chosen, the user is redirected to the game page.",
          "On the game page, the user is able to add new travelers to the wagon. An error is thrown if the user does not enter a name for the traveller, enter a name longer than 15 characters or try to add travelers without having spaces in the wagon .",
          "Each type of traveler has its personalized card, with specific actions for each type of traveler.",
          "The application has a specific space where it shows the Status of the wagon, that is, the number of sick travelers, the total food and the remaining spaces.",
        ],
        techs: ["JavaScript", "CSS -Metodologia BEM", "HTML"],
        features: [
          "Choose the number of wagons (up to 20);",
          "Form for the user to register new travelers;",
          "User notification modes, warning the user in cases of: added traveler has no defined name, has more than 15 characters or there is no more space in the cart;",
          "A showcase containing all added travelers;",
          "Customized card according to the type of traveler added;",
          "Action of eating and hunting for the common traveler;",
          "Action of eating, hunting and transferring food to the Hunter;",
          "Action of eating, hunting and healing another traveler for the Doctor;",
          "Responsive for all screens;",
          "User notification modes in case of food transfer without having enough food, eating sick, among others;",
          "Button to return to the start menu to create another wagon from scratch, choosing a new amount of wagons.",
        ],
      },
    ],
  },
  default: {
    "see-website": "Ver site",
    techs: "Tecnologias",
    features: "Funcionalidades",
    "about-project": "Sobre o projeto",
    "deploy-api-message":
      "O deploy da API pode estar off-line por isso algumas funcionalidades não estarão funcionando!",
    "see-code": "Ver código",
    projects: [
      {
        "project-name": "Me Au Pet Hotel",
        "github-link": "https://github.com/guiwustro/me-au-front-end",
        "project-url": "https://me-au.vercel.app/",
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
          "Axios",
          "ContextAPI",
          "Styled Components",
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
      },
      {
        "project-name": "Kenzie Hub",
        "github-link": "https://github.com/guiwustro/kenzie-hub",
        "project-url": "https://kenzie-hub-guiwustro.vercel.app/",
        description:
          "É uma aplicação desenvolvida para o usuário gerenciar as tecnologias aprendidas e os projetos criados.",
        "about-project": [
          "É uma aplicação desenvolvida para o usuário gerenciar as tecnologias aprendidas, escolhendo o nível de entendimento da tecnologia (básico, intermediário ou avançado). Além da adição de novas tecnologias na plataforma, o usuário é capaz de editar e remover tecnologias.",
          "A aplicação também conta com uma página de Login e Registro para novos usuários, tendo seus dados salvos numa API.",
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
          "Botão com a opção de adicionar ao carrinho em cada produto do e-commerce;",
          "Campo de pesquisa funcional para pesquisar por categoria ou nome do produto;",
          "Opção de aumentar, diminuir quantidade e remover pelo carrinho de compras;",
          "Cálculo total do carrinho de compras;",
          "Opção de remover todos os produtos do carrinho;",
          "Responsivo para qualquer tela;",
          "Dark-mode.",
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
      },
      {
        "project-name": "Blog",
        "github-link": "https://github.com/guiwustro/blog",
        "project-url": "https://guiwustro.github.io/blog/",
        description:
          "A ideia desse projeto é simular uma comunidade, onde todos os membros cadastrados podem consumir, criar, atualizar e deletar publicações de texto. Foi desenvolvido utilizando Programação Orientada a Objetos.",
        "about-project": [
          "O projeto conta com 3 páginas, uma para registro, outra para login e por último, a página principal, onde é possível criar, editar e deletar mensagens.",
          "Na página de registro, o usuário é capaz de fazer registro caso preencha os campos corretamente, caso não for preenchido corretamente algum campo, é disparado um erro ao usuário. Logo após o registro, o usuário é direcionado a página principal, não havendo a necessidade de passar pelo Login. Caso o usuário já tenha uma conta criada, é possível acessar pela página de Login.",
          "A página do blog, conta com as últimas mensagens enviadas pelos usuários. Nela o usuário é capaz de enviar mensagens, editar a mensagem já enviada e também deleta-la. Também há um botão de Logout para o usuário desconectar de sua conta.",
        ],
        techs: ["JavaScript", "CSS - Metodologia BEM", "HTML"],
        features: [
          "Página de registro do usuário contando com 4 campos (nome de usuário, e-mail, foto de perfil e senha);",
          "Página de login;",
          "Redirecionamento automático ao blog após o registro ou realização do login;",
          "Página do blog com exibição das últimas mensagens enviadas pelos usuários ativos do blog;",
          "Campo para criação de uma nova mensagem;",
          "Possibilidade de edição da mensagem realizada pelo usuário;",
          "Possibilidade de remoção da mensagem do usuário;",
          "Responsivo para todas as telas.",
        ],
      },
      {
        "project-name": "E-commerce single-page",
        "github-link": "https://github.com/guiwustro/e-commerce-single-page",
        "project-url": "https://guiwustro.github.io/e-commerce-single-page/",
        description:
          "É uma aplicação de página única de um e-commerce, o qual possui uma vitrine com produtos com botões de adicionar ao carrinho, um carrinho de compras,uma barra de filtros e um campo de pesquisa.",
        "about-project": [
          "O projeto possui uma vitrine de produtos, o qual é possível adicionar o produto ao carrinho clicando no botão Comprar.",
          "O carrinho de compras só é visível ao usuário quando algum produto é adicionado ao carrinho. Dentro dele o usuário é capaz de aumentar, diminuir a quantidade do produto através dos botões + e - ou remover o produto. É feito automaticamente o cálculo ao cliente do carrinho a cada adição, diminuição ou remoção de produto. O número de produtos do carrinho é atualizado automaticamente também no ícone de carrinho na barra de navegação.",
          "O projeto também conta com uma barra de pesquisa por produto e categoria, e uma barra de filtros de categorias.",
        ],
        techs: ["JavaScript", "CSS - Metodologia BEM", "HTML"],
        features: [
          "Vitrine com os produtos do e-commerce;",
          "Botão com a opção de adicionar ao carrinho em cada produto do e-commerce;",
          "Campo de pesquisa funcional para pesquisar por categoria ou nome do produto;",
          "Barra de filtros por categoria;",
          "Opção de aumentar, diminuir quantidade e remover pelo carrinho de compras;",
          "Cálculo total do carrinho de compras;",
          "Opção de remover todos os produtos do carrinho;",
          "Responsivo para qualquer tela;",
        ],
      },
      {
        "project-name": "Oregon Trail",
        "github-link": "https://github.com/guiwustro/oregon-trail-game",
        "project-url": "https://guiwustro.github.io/oregon-trail-game/",
        description:
          "Baseado no jogo The Oregon Trail, é uma aplicação em que o usuário monta sua própria carroça, escolhe quantos vagões ela terá , e nela consegue adicionar três tipos de viajantes. Cada viajante possui ações específicas, podendo ser a de caçar comida, comer e/ou curar. Desenvolvido utilizando Programação Orientada a Objetos. ",
        "about-project": [
          "Essa aplicação é composta por duas páginas, a primeira, o usuário deve escolher, o número de vagões que a carroça deverá ter e assim que escolhida, o usuário é redirecionado para página do jogo.",
          "Na página do jogo, o usuário é capaz de adicionar novos viajantes ao vagão. É disparado um erro, caso o usuário não digite um nome para o viajante, digite um nome com mais de 15 caracteres ou tente adicionar viajantes sem possuir vagas na carroça.",
          "Cada tipo de viajante tem seu cartão personalizado, tendo ações específicas para cada tipo de viajante.",
          "A aplicação possui um espaço específico em que mostra o Status da carroça, ou seja, o número de viajantes doentes, a comida total e as vagas restantes.",
        ],
        techs: ["JavaScript", "CSS -Metodologia BEM", "HTML"],
        features: [
          "Escolha do número de vagões (até 20);",
          "Formulário para o usuário cadastrar novos viajantes;",
          "Modais de notificação ao usuário, avisando ao usuário em casos de: viajante adicionado não possui nome definido, possui mais de 15 caractéres ou não há mais espaço na carroça;",
          "Uma vitrine contendo todos os viajantes adicionados;",
          "Card personalizado acordo com o tipo do viajante adicionado;",
          "Ação de comer e caçar para o viajante comum;",
          "Ação de comer, caçar e transferir comida para o Caçador;",
          "Ação de comer, caçar e curar outro viajante para o Doutor;",
          "Responsivo para todas as telas;",
          "Modais de notificação ao usuário em caso de transferência de comida sem ter a comida suficiente, comer doente, entre outros;",
          "Botão para voltar ao menu inicial para criar outra carroça do zero, escolhendo uma nova quantidade de vagões.",
        ],
      },
    ],
  },
};
