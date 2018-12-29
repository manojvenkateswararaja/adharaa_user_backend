/**
 * @author: Manoj Venkateswararaja
 * @version: 1.0.0
 * @date: December 29, 2018
 * */
const Utils = require("../Utils/util");
const user = require("../models/register");
// const user = require('../models/fetchdata');

module.exports = {
  register: register
};
async function register(value) {
  return new Promise(async (resolve, reject) => {
    console.log("Entering into login fun");

    const newUser = new user({
      name: value.name,
      number: value.number,
      address: value.address,
      emId: value.emId,
      emailid: value.emailid,
      other: value.other,
      deviceID: value.deviceID,
      username: value.username,
      status_of_registration: value.status_of_registration,
      password: value.password
    });
    newUser
      .save()
      .then(() =>
        resolve({
          status: 201,
          message: Utils.getErrorMessage("SUCCESSREG")
        })
      )
      .catch(err => {
        if (err.code == 11000) {
          reject({
            status: 401,
            message: Utils.getErrorMessage("ERROR_REG")
          });
        } else {
          reject({
            status: 500,
            message: Utils.getErrorMessage("ERROR_REG")
          });
        }
      });
  });
}
