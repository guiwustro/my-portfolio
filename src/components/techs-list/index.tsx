import { withTranslation } from "../../../i18n";

const TechsList = ({ t }: { t: any }) => {
  return <div>{t("techs")}</div>;
};

TechsList.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(TechsList);
