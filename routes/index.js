/**
 * @author: Manoj Venkateswararaja
 * @version: 1.0.0
 * @date: December 29, 2018
 * @Description: This would be the routes file where all the API definitions and implementations are described.
 */

"use strict";

var express = require("express"),
  path = require("path"),
  request = require("request"),
  router = express.Router();

const cors = require("cors");
//var Promise = require('es6-promise').Promise;

const registerValidation = require("../validations/registerValidation");
const loginValidation = require("../validations/loginValidation");
const finduservalidation = require("../validations/finduservalidation");

router.get("/", function(request, response, next) {
  response.render("index", {
    title: "Express"
  });
});
router.post("/userregistration", cors(), (request, response) => {
  registerValidation.userregister(request, function(error, result) {
    console.log("err", error);
    if (error) {
      response.status(error.status).json({
        message: error.message
      });
    } else {
      response.status(result.status).json({
        message: result.message
      });
    }
  });
});
router.post("/userlogin", cors(), (request, response) => {
  loginValidation.userlogin(request, function(error, result) {
    console.log("err", error);
    if (error) {
      response.status(error.status).json({
        message: error.message
      });
    } else {
      response.status(result.status).json({
        message: result.message
      });
    } 
  });
});
router.post("/finduser", cors(), (request, response) => {
  finduservalidation.finduser(request, function(error, result) {
    console.log("err", error);
    if (error) {
      response.status(error.status).json({
        message: error.message
      });
    } else {
      response.status(result.status).json({
        message: result.message
      });
    }
  });
});

module.exports = router;
