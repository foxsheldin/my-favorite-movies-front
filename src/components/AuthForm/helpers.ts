/* TODO: А нельзя ли перевод сделать реактивным? */

import i18next, { DefaultTFuncReturn } from "i18next";

export const composeValidators =
  (
    ...validators: ((value: string) => DefaultTFuncReturn | null | undefined)[]
  ) =>
  (value: string) =>
    validators.reduce(
      (error: DefaultTFuncReturn | null | undefined, validator) =>
        error || validator(value),
      undefined
    );

export const required = (
  value: string
): DefaultTFuncReturn | null | undefined =>
  value ? undefined : i18next.t("error.validate.required");

export const minLength8 = (
  value: string
): DefaultTFuncReturn | null | undefined =>
  value.length > 7 ? undefined : i18next.t("error.validate.minLength8");

export const minLength3 = (
  value: string
): DefaultTFuncReturn | null | undefined =>
  value.length > 2 ? undefined : i18next.t("error.validate.minLength3");

export const forbiddenСharacters = (
  value: string
): DefaultTFuncReturn | null | undefined =>
  !value.match(/([!#$%&\,\~\'\s]|\.{2,})/gi)
    ? undefined
    : i18next.t("error.validate.forbiddenСharacters");
