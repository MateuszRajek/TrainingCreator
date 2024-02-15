import React, { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import lock from "../../assets/lock.png";
import person from "../../assets/person.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function LoginView() {
  const [LoginData, setLoginData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let formData = LoginData;
    formData = { ...formData, ...data };

    setLoginData(formData);
  };

  return (
    <section className="login__container">
      <form className="login__container__form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="login__form__title">
          Provide your <span>User Name</span> and <span>Password</span> to log in
        </h1>
        <Input className="login__form__input" register={register("userName", { required: true })} text="User Name" id="userName" type="text" icon={person} />
        {errors.userName && errors.userName.type === "required" && <p className="login__form__error-message">Please provide your User Name</p>}
        <Input className="login__form__input" register={register("password", { required: true })} text="Password" id="password" type="password" icon={lock} autocomplete="new-password" />
        {errors.password && errors.password.type === "required" && <p className="login__form__error-message">Please provide your Password</p>}
        <Link to="/dashboard">Login</Link>
      </form>
    </section>
  );
}

export default LoginView;

