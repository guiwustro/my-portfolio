import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import emailjs from "@emailjs/browser";
import { yupResolver } from "@hookform/resolvers/yup";
import { IHomepageProps } from "pages";
import * as yup from "yup";

import { homePageInfo } from "../../translations/home";
import {
  FormGroup,
  Container,
  FormGroupArea,
  ContainerMaxWidth,
  SubmitButton,
} from "./styles";

const ContactMe = ({ locale }: IHomepageProps) => {
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
  const {
    "label-message": message,
    "label-name": name,
    "label-subject": subject,
    description,
    title,
    submitMessage,
    errorSubmit,
    sucessSubmit,
  } = homePageInfo[locale].contact;
  const onSubmit = (data: any) => {
    emailjs
      .send("service_i5z3n3g", "template_z7hgswm", data, "_LtrfipZj8-bIIOTE")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          toast(sucessSubmit, {
            hideProgressBar: true,
            autoClose: 2000,
            style: { backgroundColor: "#557A95", color: "white" },

            type: "success",
          });
        },
        function (error) {
          console.log("FAILED...", error);
        },
      );
  };
  const onError = () => {
    toast(errorSubmit, {
      hideProgressBar: true,
      style: { backgroundColor: "#557A95", color: "white" },
      autoClose: 2000,
      type: "error",
    });
  };
  return (
    <ContainerMaxWidth>
      <Container>
        <h1 id="contact">{title}</h1>
        <p>{description}</p>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className="formGroup--inline">
            <FormGroup>
              <input placeholder=" " type="text" {...register("name")} />
              <label>{name}</label>
              <span></span>
            </FormGroup>
            <FormGroup errors={!!errors.email}>
              <input placeholder=" " type="text" {...register("email")} />
              <label>E-mail</label>
              <span></span>
            </FormGroup>
          </div>
          <FormGroup>
            <input placeholder=" " type="text" {...register("subject")} />
            <label>{subject}</label>
            <span></span>
          </FormGroup>
          <FormGroupArea errors={!!errors.message}>
            <textarea placeholder=" " {...register("message")} />
            <label>{message}</label>
            <span></span>
          </FormGroupArea>
          <SubmitButton>
            <button>{submitMessage}</button>
          </SubmitButton>
        </form>
      </Container>
    </ContainerMaxWidth>
  );
};

export default ContactMe;
