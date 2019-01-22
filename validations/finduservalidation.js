/**
 * @author: Manoj Venkateswararaja
 * @version: 1.0.0
 * @date: December 29, 2018
 * */

const Utils = require("../Utils/util");
const finduserfunction = require("../functions/login");

module.exports = {
  finduser: finduser
};
function finduser(req, callback) {
  console.log(req.body);
  var deviceid = req.body.deviceId;
  console.log("deviceid", deviceid);

  if (!deviceid) {
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
      deviceid: deviceid
    };
    console.log("value", value);
    finduserfunction
      .finduser(value)
      .then(async function(result) {
        console.log("result", result);
        callback("", result);
      })
      .catch(function(err) {
        callback(err, "");
      });
  }
}
