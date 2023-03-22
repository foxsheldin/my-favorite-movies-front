import React, { useEffect, useState } from "react";
import { Field, Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";
import { IAuthFormData } from "./types";
import {
  TextFieldSizeWrapper,
  CustomizedTypography,
  WrappedPaper,
} from "./styles";
import {
  composeValidators,
  minLength3,
  minLength8,
  required,
  forbiddenСharacters,
} from "./helpers";

const AuthForm = () => {
  const { t } = useTranslation();

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
      setAuthError(t("error.authorization.wrongLoginOrPassword"));
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
          <WrappedPaper>
            <Field<string>
              name="username"
              validate={composeValidators(
                required,
                minLength3,
                forbiddenСharacters
              )}
              render={({ input, meta }) => (
                <TextFieldSizeWrapper
                  {...input}
                  label={t("authorization.login")}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            />
            <Field<string>
              name="password"
              validate={composeValidators(required, minLength8)}
              render={({ input, meta }) => (
                <TextFieldSizeWrapper
                  {...input}
                  type="password"
                  label={t("authorization.password")}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            />
            <Button variant="contained" type="submit">
              {t("authorization.signIn")}
            </Button>
          </WrappedPaper>
        </form>
      )}
    />
  );
};

export default AuthForm;
