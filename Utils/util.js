const errorMessegeEN = require("../messages/messageEN.json");

module.exports = {
  getErrorMessage: getErrorMessage
};
function getErrorMessage(errorId) {
  console.log("errorid", errorId);

  return {
    code: errorId,
    // message: Lang != "hi" ? errorMessegeEN[errorId] : errorMessegeHN[errorId]
    message: errorMessegeEN[errorId]
  };
}
