import PropTypes from "prop-types";

// import { withTranslation } from "../../i18nt";

const Error = ({ statusCode }: any) => (
  <p>
    {/* {statusCode
      ? t("error-with-status", { statusCode })
      : t("error-without-status")} */}
  </p>
);

Error.getInitialProps = async ({ res, err }: any) => {
  let statusCode = null;
  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }
  return {
    namespacesRequired: ["common"],
    statusCode,
  };
};

Error.defaultProps = {
  statusCode: null,
};

Error.propTypes = {
  statusCode: PropTypes.number,
  t: PropTypes.func.isRequired,
};

export default Error;

// export default withTranslation("common")(Error);
