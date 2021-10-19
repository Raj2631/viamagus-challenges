import React from "react";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

import Input from "../../components/Input";
import Button from "../../components/Button";

import classes from "./index.module.scss";

import treeImg from "../../assets/tree.png";
import googleImg from "../../assets/google.png";
import amazonImg from "../../assets/amazon.png";
import facebookImg from "../../assets/facebook.png";

const EMAIL_VALIDATION_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const AUTH_BUTTONS = [
  {
    title: "CONTINUE WITH GOOGLE",
    image: googleImg,
    variant: "google",
  },
  {
    title: "CONTINUE WITH FACEBOOK",
    image: facebookImg,
    variant: "facebook",
  },
];

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(
      `Entered email is: ${data.email}\nEntered password is: ${data.password}`
    );
  };

  return (
    <div className={classes.Container}>
      <Helmet>
        <title>Login Challenge</title>
      </Helmet>
      <header className={classes.Header}></header>
      <main>
        <div className={classes.MainContainer}>
          <div className={classes.AmazonImgContainer}>
            <img src={amazonImg} alt="Amazon" />
          </div>
          <div className={classes.FormContainer}>
            <h1>Login</h1>
            <img src={treeImg} className={classes.TreeImg} alt="tree" />
            <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
              <Input
                title="Email"
                register={register("email", {
                  required: {
                    value: true,
                    message: "The email field is required",
                  },
                  pattern: {
                    value: EMAIL_VALIDATION_PATTERN,
                    message: "Enter a valid Email",
                  },
                })}
                error={errors?.email}
              />
              <Input
                title="Password"
                register={register("password", {
                  required: {
                    value: true,
                    message: "The password field is required",
                  },
                })}
                error={errors.password}
                type="password"
              />

              <button className={classes.SubmitBtn} type="submit">
                Sign In
              </button>
            </form>
            <div className={classes.LinkContainer}>
              <a href="/">Forgot Password?</a>
              <a href="/">New User? Sign Up</a>
            </div>
            <p className={classes.AlignCenter}>or</p>

            {AUTH_BUTTONS.map(({ variant, title, image }) => (
              <Button variant={variant} image={image}>
                {title}
              </Button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
