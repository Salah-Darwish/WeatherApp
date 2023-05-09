import i18n from "../langs";
export default function getErrorMessage(error) {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.message
  ) {
    return error.response.data.message;
  }
  return i18n.t("errors.generalError");
}
