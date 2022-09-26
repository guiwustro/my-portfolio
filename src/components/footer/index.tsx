import React from "react";

import { IHomepageProps } from "pages";

import { homePageInfo } from "../../translations/home";
import { Container } from "./styles";

const Footer = ({ locale }: IHomepageProps) => {
  const { footer } = homePageInfo[locale];
  return (
    <Container>
      <span>{footer}</span>
    </Container>
  );
};

export default Footer;
