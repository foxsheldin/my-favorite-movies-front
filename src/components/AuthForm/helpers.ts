export const composeValidators =
  (...validators: ((value: string) => string | undefined)[]) =>
  (value: string) =>
    validators.reduce(
      (error: string | undefined, validator) => error || validator(value),
      undefined
    );

export const required = (value: string): string | undefined =>
  value ? undefined : "Заполните поле";

export const minLength8 = (value: string): string | undefined =>
  value.length > 7 ? undefined : "Минимум 8 символов";

export const minLength3 = (value: string): string | undefined =>
  value.length > 2 ? undefined : "Минимум 3 символа";

export const forbiddenСharacters = (value: string): string | undefined =>
  !value.match(/([!#$%&\,\~\'\s]|\.{2,})/gi)
    ? undefined
    : "Нельзя использовать пробел, более одного знака точки(.) и символы !#$%&~=,'";
