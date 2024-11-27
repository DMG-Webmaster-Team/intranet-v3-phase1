import { createContext } from "react";
import { useTranslation } from "react-i18next";

const LangContext = createContext();

const LangProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
      <LangContext.Provider
        value={{
          changeLanguage,
        }}
      >

        {children}
      </LangContext.Provider>
  );
};

export { LangContext, LangProvider };
