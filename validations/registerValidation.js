/**
 * @author: Manoj Venkateswararaja
 * @version: 1.0.0
 * @date: December 29, 2018
 * */

const Utils = require("../Utils/util");
const registerfunction = require("../functions/register");
const nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "outlook",
  auth: {
    user: "sachin.kalamkar@rapidqube.com",
    pass: "svarrggk1@Home"
  }
});
module.exports = {
  userregister: userregister
};
function userregister(req, callback) {
  console.log(req.body);
  var name = req.body.name;
  console.log("name", name);
  var number = req.body.number;
  console.log("number", number);
  var emailid = req.body.email;
  console.log("emailid", emailid);
  var address = req.body.address;
  console.log("address", address);
  var emId = req.body.emiratedid;
  console.log("emId", emId);
  var other = req.body.others;
  console.log("others", other);
  var deviceID = req.body.deviceid;
  console.log("deviceid", deviceID);
  var password = req.body.password;
  console.log("deviceid", password);

  if (
    !emailid ||
    !name ||
    !address ||
    !emId ||
    !other ||
    !number ||
    !deviceID ||
    !password
  ) {
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
    var username = emailid;
    var status_of_registration = true;
    var value = {
      emailid: emailid,
      name: name,
      number: number,
      address: address,
      emId: emId,
      other: other,
      deviceID: deviceID,
      username: username,
      status_of_registration: status_of_registration,
      password: password
    };
    console.log("value", value);
    registerfunction
      .register(value)
      .then(async function(result) {
        console.log("result", result);
        callback("", result);
      })
      .catch(function(err) {
        callback(err, "");
      });
  }
}
