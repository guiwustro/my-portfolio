import { i18n } from "../../../i18n.js";
import BrazilFlag from "../../assets/icons/brazil-flag.svg";
import UsaFlag from "../../assets/icons/usa-flag.svg";
import {
  ActualLanguageContainer,
  BackGroundMenu,
  MenuContainer,
  TranslationContainer,
} from "./styles";

const TranslationMenu = () => {
  // const [actualLanguage, setActualLanguage]
  console.log(i18n.language);

  return (
    <TranslationContainer>
      <ActualLanguageContainer>
        {i18n.language === "pt" ? (
          <>
            <BrazilFlag />
            <button>Português-BR</button>
          </>
        ) : (
          <>
            <UsaFlag />
            <button>English</button>
          </>
        )}
      </ActualLanguageContainer>
      <MenuContainer>
        <div>
          <BrazilFlag />

          <button
            onClick={() => {
              i18n.changeLanguage("pt");
            }}
          >
            Português-BR
          </button>
        </div>
        <div>
          <UsaFlag />
          <button
            onClick={() => {
              i18n.changeLanguage("en");
            }}
          >
            English
          </button>
        </div>
      </MenuContainer>
    </TranslationContainer>
  );
};

export default TranslationMenu;
