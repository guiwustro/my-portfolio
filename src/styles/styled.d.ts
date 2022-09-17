import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      text: string;
      body: string;
      "text-white": string;
      "border-color": string;
      "blue-200": string;
      "blue-300": string;
      "blue-500": string;
      "blue-700": string;
      "blue-250": string;
      "blue-see-website": string;
      "blue-gradient": string;
    };
  }
}
