import { Field, Form } from "react-final-form";
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { IAuthFormData } from "./types";
import { useNavigate } from "react-router-dom";
import {
  CustomizedTextField,
  CustomizedTypography,
  CustomizedPaper,
} from "./styles";
import {
  composeValidators,
  minLength3,
  minLength8,
  required,
  forbiddenСharacters,
} from "./helpers";

const AuthForm = () => {
  const [authError, setAuthError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("DB_auth_user")) {
      navigate("/panel");
    }
  }, [localStorage]);

  const onFormSubmit = (data: IAuthFormData) => {
    setAuthError(null);
    if (
      localStorage.getItem("DB_user") === data.username &&
      localStorage.getItem("DB_user_password") === data.password
    ) {
      localStorage.setItem("DB_auth_user", data.username);
      navigate("/panel");
    } else {
      setAuthError("Неверный логин или пароль");
    }
  };

  return (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {authError && (
            <CustomizedTypography variant="body1">
              {authError}
            </CustomizedTypography>
          )}
          <CustomizedPaper>
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
            <Button variant="contained" type="submit">
              Войти
            </Button>
          </CustomizedPaper>
        </form>
      )}
    />
  );
};

export default AuthForm;
