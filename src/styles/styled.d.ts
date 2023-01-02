import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      text: string;
      body: string;
      "text-white": string;
      "border-color": string;
      "background-image": string;
      "primary-color-200": string; //header
      "primary-color-250": string; //borders
      "primary-color-500": string; //Project name
      "primary-color-700": string; //title Eu sou
      "tooltip-background": string;
      "primary-color-see-website": string;
      "background-project-image": string;
      "primary-color-gradient": string;
      "footer-color": string;
      "hover-color-github": string;

      "color-name-before": string;
      "color-name-after": string;

      "text-shadow-before": string;
      "text-shadow-after": string;
    };
  }
}
