import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import {
  FormGroup,
  Container,
  FormGroupArea,
  ContainerMaxWidth,
} from "./styles";

const ContactMe = () => {
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
        <h1></h1>
        <p></p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="formGroup--inline">
            <FormGroup>
              <input placeholder=" " type="text" {...register("name")} />
              <label></label>
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
            <label></label>
            <span></span>
          </FormGroup>
          <FormGroupArea>
            <textarea placeholder=" " {...register("message")} />
            <label></label>
            <span></span>
          </FormGroupArea>
          <button>alterar</button>
        </form>
      </Container>
    </ContainerMaxWidth>
  );
};

export default ContactMe;
