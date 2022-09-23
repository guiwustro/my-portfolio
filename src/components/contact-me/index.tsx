import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import { withTranslation } from "../../../i18nt";
import {
  FormGroup,
  Container,
  FormGroupArea,
  ContainerMaxWidth,
} from "./styles";

export const ContactMe = () => {
  const formSchema = yup.object().shape({
    name: yup.string(),
    email: yup.string().required().email(),
    subject: yup.string(),
    message: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });
  console.log(errors);
  const onSubmit = () => {
    return;
  };
  return (
    <ContainerMaxWidth>
      <Container>
        {/* <h1>{t("contact.title")}</h1>
        <p>{t("contact.description")}</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroup--inline">
            <FormGroup>
              <input placeholder=" " type="text" {...register("name")} />
              {/* <label>{t("contact.label-name")}</label> */}
              <span></span>
            </FormGroup>
            <FormGroup>
              <input placeholder=" " type="text" {...register("email")} />
              <label>E-mail</label>
              <span></span>
            </FormGroup>
          </div>
          <FormGroup>
            <input placeholder=" " type="text" {...register("subject")} />
            {/* <label>{t("contact.label-subject")}</label> */}
            <span></span>
          </FormGroup>
          <FormGroupArea>
            <textarea placeholder=" " {...register("message")} />
            {/* <label>{t("contact.label-message")}</label> */}
            <span></span>
          </FormGroupArea>
          <button>Enviar</button>
        </form>
      </Container>
    </ContainerMaxWidth>
  );
};

ContactMe.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

// export default withTranslation("common")(ContactMe);
