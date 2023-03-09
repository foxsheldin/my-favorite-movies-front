import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { IAuthFormData } from "./AuthPage.types";
const logo = require("../../assets/image/wordpress-logo.webp");

const AuthPage = () => {
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("DB_user", "admin");
    localStorage.setItem("DB_user_password", "12345678");
  }, []);

  const onFormSubmit = (data: IAuthFormData) => {
    setAuthError(null);
    if (
      localStorage.getItem("DB_user") === data.username &&
      localStorage.getItem("DB_user_password") === data.password
    ) {
      navigate("/panel");
    } else {
      setAuthError("Неверный логин или пароль");
    }
  };

  const onForgotPasswordClick = () => {
    console.log("Забыли пароль");
  };

  const CustomizedContainer = styled(Container)`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    justify-content: center;
  `;

  const CustomizedTextField = styled(TextField)`
    width: 350px;
  `;

  const CustomizedFormControl = styled(FormControl)`
    flex-direction: row;
    justify-content: space-between;
  `;

  const CustomizedTypography = styled(Typography)`
    color: red;
    text-align: center;
  `;

  const composeValidators =
    (...validators: ((value: string) => string | undefined)[]) =>
    (value: string) =>
      validators.reduce(
        (error: string | undefined, validator) => error || validator(value),
        undefined
      );

  const required = (value: string): string | undefined =>
    value ? undefined : "Заполните поле";
  const minLength8 = (value: string): string | undefined =>
    value.length > 7 ? undefined : "Минимум 8 символов";
  const minLength3 = (value: string): string | undefined =>
    value.length > 2 ? undefined : "Минимум 3 символа";
  const forbiddenСharacters = (value: string): string | undefined =>
    !value.match(/([!#$%&\,\~\'\s]|\.{2,})/gi)
      ? undefined
      : "Нельзя использовать пробел, более одного знака точки(.) и символы !#$%&~=,'";

  return (
    <CustomizedContainer>
      <img src={logo} width={150} height={150} />
      <Form
        onSubmit={onFormSubmit}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            {authError && (
              <CustomizedTypography variant="body1">
                {authError}
              </CustomizedTypography>
            )}
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                padding: "20px",
                rowGap: "15px",
              }}
            >
              <Field<string>
                name="username"
                validate={composeValidators(
                  required,
                  minLength3,
                  forbiddenСharacters
                )}
                render={({ input, meta }) => (
                  <CustomizedTextField
                    {...input}
                    label="Имя пользователя или e-mail"
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              />
              <Field<string>
                name="password"
                validate={composeValidators(required, minLength8)}
                render={({ input, meta }) => (
                  <CustomizedTextField
                    {...input}
                    type="password"
                    label="Пароль"
                    error={meta.touched && !!meta.error}
                    helperText={meta.touched && meta.error}
                  />
                )}
              />
              <CustomizedFormControl>
                <Field<boolean>
                  name="rememberMe"
                  type="checkbox"
                  defaultValue={false}
                  render={({ input }) => (
                    <FormControlLabel
                      control={<Checkbox {...input} />}
                      label="Запомнить меня"
                    />
                  )}
                />
                <Button variant="contained" type="submit">
                  Войти
                </Button>
              </CustomizedFormControl>
            </Paper>
            <Button type="button" size="small" onClick={onForgotPasswordClick}>
              Забыли пароль?
            </Button>
          </form>
        )}
      />
    </CustomizedContainer>
  );
};

export default AuthPage;
