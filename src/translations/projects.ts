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
      "O deploy da API pode estar off-line por isso algumas funcionalidades n??o estar??o funcionando!",
    "see-code": "Ver c??digo",
    projects: [
      {
        "project-name": "Me Au Pet Hotel",
        "github-link": "https://github.com/guiwustro/me-au-front-end",
        "project-url": "https://me-au.vercel.app/",
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
      },
      {
        "project-name": "Kenzie Hub",
        "github-link": "https://github.com/guiwustro/kenzie-hub",
        "project-url": "https://kenzie-hub-guiwustro.vercel.app/",
        description:
          "?? uma aplica????o desenvolvida para o usu??rio gerenciar as tecnologias aprendidas e os projetos criados.",
        "about-project": [
          "?? uma aplica????o desenvolvida para o usu??rio gerenciar as tecnologias aprendidas, escolhendo o n??vel de entendimento da tecnologia (b??sico, intermedi??rio ou avan??ado). Al??m da adi????o de novas tecnologias na plataforma, o usu??rio ?? capaz de editar e remover tecnologias.",
          "A aplica????o tamb??m conta com uma p??gina de Login e Registro para novos usu??rios, tendo seus dados salvos numa API.",
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
          "Bot??o com a op????o de adicionar ao carrinho em cada produto do e-commerce;",
          "Campo de pesquisa funcional para pesquisar por categoria ou nome do produto;",
          "Op????o de aumentar, diminuir quantidade e remover pelo carrinho de compras;",
          "C??lculo total do carrinho de compras;",
          "Op????o de remover todos os produtos do carrinho;",
          "Responsivo para qualquer tela;",
          "Dark-mode.",
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
      },
      {
        "project-name": "Blog",
        "github-link": "https://github.com/guiwustro/blog",
        "project-url": "https://guiwustro.github.io/blog/",
        description:
          "A ideia desse projeto ?? simular uma comunidade, onde todos os membros cadastrados podem consumir, criar, atualizar e deletar publica????es de texto. Foi desenvolvido utilizando Programa????o Orientada a Objetos.",
        "about-project": [
          "O projeto conta com 3 p??ginas, uma para registro, outra para login e por ??ltimo, a p??gina principal, onde ?? poss??vel criar, editar e deletar mensagens.",
          "Na p??gina de registro, o usu??rio ?? capaz de fazer registro caso preencha os campos corretamente, caso n??o for preenchido corretamente algum campo, ?? disparado um erro ao usu??rio. Logo ap??s o registro, o usu??rio ?? direcionado a p??gina principal, n??o havendo a necessidade de passar pelo Login. Caso o usu??rio j?? tenha uma conta criada, ?? poss??vel acessar pela p??gina de Login.",
          "A p??gina do blog, conta com as ??ltimas mensagens enviadas pelos usu??rios. Nela o usu??rio ?? capaz de enviar mensagens, editar a mensagem j?? enviada e tamb??m deleta-la. Tamb??m h?? um bot??o de Logout para o usu??rio desconectar de sua conta.",
        ],
        techs: ["JavaScript", "CSS - Metodologia BEM", "HTML"],
        features: [
          "P??gina de registro do usu??rio contando com 4 campos (nome de usu??rio, e-mail, foto de perfil e senha);",
          "P??gina de login;",
          "Redirecionamento autom??tico ao blog ap??s o registro ou realiza????o do login;",
          "P??gina do blog com exibi????o das ??ltimas mensagens enviadas pelos usu??rios ativos do blog;",
          "Campo para cria????o de uma nova mensagem;",
          "Possibilidade de edi????o da mensagem realizada pelo usu??rio;",
          "Possibilidade de remo????o da mensagem do usu??rio;",
          "Responsivo para todas as telas.",
        ],
      },
      {
        "project-name": "E-commerce single-page",
        "github-link": "https://github.com/guiwustro/e-commerce-single-page",
        "project-url": "https://guiwustro.github.io/e-commerce-single-page/",
        description:
          "?? uma aplica????o de p??gina ??nica de um e-commerce, o qual possui uma vitrine com produtos com bot??es de adicionar ao carrinho, um carrinho de compras,uma barra de filtros e um campo de pesquisa.",
        "about-project": [
          "O projeto possui uma vitrine de produtos, o qual ?? poss??vel adicionar o produto ao carrinho clicando no bot??o Comprar.",
          "O carrinho de compras s?? ?? vis??vel ao usu??rio quando algum produto ?? adicionado ao carrinho. Dentro dele o usu??rio ?? capaz de aumentar, diminuir a quantidade do produto atrav??s dos bot??es + e - ou remover o produto. ?? feito automaticamente o c??lculo ao cliente do carrinho a cada adi????o, diminui????o ou remo????o de produto. O n??mero de produtos do carrinho ?? atualizado automaticamente tamb??m no ??cone de carrinho na barra de navega????o.",
          "O projeto tamb??m conta com uma barra de pesquisa por produto e categoria, e uma barra de filtros de categorias.",
        ],
        techs: ["JavaScript", "CSS - Metodologia BEM", "HTML"],
        features: [
          "Vitrine com os produtos do e-commerce;",
          "Bot??o com a op????o de adicionar ao carrinho em cada produto do e-commerce;",
          "Campo de pesquisa funcional para pesquisar por categoria ou nome do produto;",
          "Barra de filtros por categoria;",
          "Op????o de aumentar, diminuir quantidade e remover pelo carrinho de compras;",
          "C??lculo total do carrinho de compras;",
          "Op????o de remover todos os produtos do carrinho;",
          "Responsivo para qualquer tela;",
        ],
      },
      {
        "project-name": "Oregon Trail",
        "github-link": "https://github.com/guiwustro/oregon-trail-game",
        "project-url": "https://guiwustro.github.io/oregon-trail-game/",
        description:
          "Baseado no jogo The Oregon Trail, ?? uma aplica????o em que o usu??rio monta sua pr??pria carro??a, escolhe quantos vag??es ela ter?? , e nela consegue adicionar tr??s tipos de viajantes. Cada viajante possui a????es espec??ficas, podendo ser a de ca??ar comida, comer e/ou curar. Desenvolvido utilizando Programa????o Orientada a Objetos. ",
        "about-project": [
          "Essa aplica????o ?? composta por duas p??ginas, a primeira, o usu??rio deve escolher, o n??mero de vag??es que a carro??a dever?? ter e assim que escolhida, o usu??rio ?? redirecionado para p??gina do jogo.",
          "Na p??gina do jogo, o usu??rio ?? capaz de adicionar novos viajantes ao vag??o. ?? disparado um erro, caso o usu??rio n??o digite um nome para o viajante, digite um nome com mais de 15 caracteres ou tente adicionar viajantes sem possuir vagas na carro??a.",
          "Cada tipo de viajante tem seu cart??o personalizado, tendo a????es espec??ficas para cada tipo de viajante.",
          "A aplica????o possui um espa??o espec??fico em que mostra o Status da carro??a, ou seja, o n??mero de viajantes doentes, a comida total e as vagas restantes.",
        ],
        techs: ["JavaScript", "CSS -Metodologia BEM", "HTML"],
        features: [
          "Escolha do n??mero de vag??es (at?? 20);",
          "Formul??rio para o usu??rio cadastrar novos viajantes;",
          "Modais de notifica????o ao usu??rio, avisando ao usu??rio em casos de: viajante adicionado n??o possui nome definido, possui mais de 15 caract??res ou n??o h?? mais espa??o na carro??a;",
          "Uma vitrine contendo todos os viajantes adicionados;",
          "Card personalizado acordo com o tipo do viajante adicionado;",
          "A????o de comer e ca??ar para o viajante comum;",
          "A????o de comer, ca??ar e transferir comida para o Ca??ador;",
          "A????o de comer, ca??ar e curar outro viajante para o Doutor;",
          "Responsivo para todas as telas;",
          "Modais de notifica????o ao usu??rio em caso de transfer??ncia de comida sem ter a comida suficiente, comer doente, entre outros;",
          "Bot??o para voltar ao menu inicial para criar outra carro??a do zero, escolhendo uma nova quantidade de vag??es.",
        ],
      },
    ],
  },
};
