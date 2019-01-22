/**
 * @author: Manoj Venkateswararaja
 * @version: 1.0.0
 * @date: December 29, 2018
 * */

const Utils = require("../Utils/util");
const loginfunction = require("../functions/login");

module.exports = {
  userlogin: userlogin
};
function userlogin(req, callback) {
  console.log(req.body);
  var username = req.body.username;
  console.log("username", username);
  var password = req.body.password;
  console.log("password", password);
  var deviceId = req.body.deviceid;
  console.log("deviceId", deviceId);
  if (!username || !password || !deviceId) {
    console.log("ifcondition");
    var getErrMsg = Utils.getErrorMessage(lang, "ERROR_EA01");
    var error = {
      code: getErrMsg.code,
      message: getErrMsg.message
    };
    var err = {
      status: 400,
      message: error
    };
    callback(err);
  } else {
    var value = {
      username: username,
      password: password,
      deviceId: deviceId
    };
    console.log("value", value);
    loginfunction
      .login(value)
      .then(async function(result) {
        console.log("result", result);
        callback("", result);
      })
      .catch(function(err) {
        callback(err, "");
      });
  }
}
