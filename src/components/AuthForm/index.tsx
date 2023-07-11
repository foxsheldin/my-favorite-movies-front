import React, { useEffect, useState } from "react";
import { GraphQLErrors } from "@apollo/client/errors";
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
import { useSignInMutation } from "@api/graphql/hooks/mutations/useSignInMutation";

const AuthForm = () => {
  const { t } = useTranslation();

  const [authError, setAuthError] = useState<GraphQLErrors | undefined>();
  const navigate = useNavigate();
  const { signInMutation, loading, error } = useSignInMutation();

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      navigate("/panel");
    }
  }, [localStorage]);

  const onFormSubmit = async (formData: IAuthFormData) => {
    try {
      setAuthError(undefined);
      const response = await signInMutation(formData);
      localStorage.setItem(
        "access_token",
        response.data?.signIn.access_token ?? ""
      );
      navigate("/panel");
    } catch {
      setAuthError(error?.graphQLErrors);
    }
  };

  return (
    <Form
      onSubmit={onFormSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {authError &&
            authError.map((error) => (
              <CustomizedTypography variant="body1">
                {error.message}
              </CustomizedTypography>
            ))}
          <WrappedPaper>
            <Field<string>
              name="email"
              validate={composeValidators(
                required,
                minLength3,
                forbiddenСharacters
              )}
              render={({ input, meta }) => (
                <TextFieldSizeWrapper
                  {...input}
                  type="email"
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
            <Button variant="contained" type="submit" disabled={loading}>
              {t("authorization.signIn")}
            </Button>
          </WrappedPaper>
        </form>
      )}
    />
  );
};

export default AuthForm;
