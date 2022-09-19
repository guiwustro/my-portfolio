import React from "react";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

  const onSubmit = () => {
    return;
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor=""></label>
          <input type="text" {...register("name")} />
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
