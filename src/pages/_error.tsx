import PropTypes from "prop-types";

const Error = ({ statusCode }: any) => <p>Error</p>;

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
};

export default Error;
