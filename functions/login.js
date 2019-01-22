/**
 * @author: Manoj Venkateswararaja
 * @version: 1.0.0
 * @date: December 29, 2018
 * */
const Utils = require("../Utils/util");

const user = require("../models/register");
// const user = require('../models/fetchdata');

module.exports = {
  login: login,
  finduser: finduser
};
function login(value) {
  return new Promise((resolve, reject) => {
    console.log("Entering into login fun");
    console.log(value.username);

    user
      .find({
        emailid: value.username
      })
      .then(users => {
        console.log("users....", users);
        const dbpin = users[0].password;
        console.log(users[0].password);
        console.log(users[0]._id);
        console.log(dbpin + "   " + users[0].password);

        if (
          String(value.password) === String(dbpin) ||
          String(value.deviceId) === String(deviceID)
        ) {
          var user = {
            user: users[0],
            message: Utils.getErrorMessage("SUCCESSLOG")
          };
          resolve({
            status: 200,
            message: user
          });
        } else {
          reject({
            status: 401,
            message: Utils.getErrorMessage("ERROR_LOG")
          });
        }
      });
  });
}
function finduser(value) {
  return new Promise((resolve, reject) => {
    console.log("Entering into login fun");
    console.log(value.deviceid);

    user
      .find({
        deviceID: value.deviceid
      })
      .then(users => {
        console.log("users....", users);
        const deviceId = users[0].deviceID;
        console.log(users[0].deviceID);
        console.log(users[0]._id);
        console.log(deviceId + "   " + users[0].deviceID);

        if (String(value.deviceid) === String(deviceId)) {
          var user = {
            user: users[0],
            message: Utils.getErrorMessage("SUCCESSLOG")
          };
          resolve({
            status: 200,
            message: user
          });
        } else {
          reject({
            status: 401,
            message: Utils.getErrorMessage("ERROR_LOG")
          });
        }
      });
  });
}
