import React from "react";
import { Button, ButtonGroup } from "@mui/material";
import { useTranslation } from "react-i18next";
import { languages } from "@constants/languages";
import { TLanguageTypes } from "@constants/languages.types";

const ChangeLanguageButton = () => {
  const { i18n } = useTranslation();

  return (
    <ButtonGroup>
      {Object.keys(languages).map((language) => (
        <Button
          key={language}
          onClick={() => i18n.changeLanguage(language)}
          disabled={i18n.resolvedLanguage === language}
        >
          {languages[language as TLanguageTypes].nativeName}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default ChangeLanguageButton;
