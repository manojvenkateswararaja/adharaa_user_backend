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
  userlogin: userlogin
};
function userlogin(req, callback) {
  console.log(req.body);
  var name = req.body.name;
  console.log("name", name);
  var number = req.body.mobilenumber;
  console.log("number", number);
  var emailid = req.body.emailId;
  console.log("emailid", emailid);
  var address = req.body.Address;
  console.log("address", address);
  var emId = req.body.emiratedId;
  console.log("emId", emId);
  var other = req.body.others;
  console.log("others", other);
  var deviceID = req.body.deviceid;
  console.log("deviceid", deviceID);

  if (
    !emailid ||
    !name ||
    !address ||
    !emId ||
    !other ||
    !number ||
    !deviceID
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
    var password = Math.random()
      .toString(36)
      .slice(-8);
    console.log("else", password);
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
        await transporter.sendMail(
          {
            from: "sachin.kalamkar@rapidqube.com",
            to: value.emailid,
            subject: "Registration confirmation",
            text:
              "Hello " +
              value.username +
              '\n\nYou are successfully registered.\n Your Username is : "' +
              value.username +
              '"\nYour password is : "' +
              value.password +
              '"\n\nThanks and Regards,\n' +
              "Adhaara."
          },
          function(error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          }
        );
        console.log("result", result);
        callback("", result);
      })
      .catch(function(err) {
        callback(err, "");
      });
  }
}
