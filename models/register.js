/**
 * @author: Manoj Venkateswararaja
 * @version: 1.0.0
 * @date: December 29, 2018
 * */

"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registerpageSchema = mongoose.Schema({
  name: String,
  number: Number,
  address: String,
  emId: String,
  emailid: {
    type: String,
    unique: true
  },
  other: String,
  deviceID: String,
  username: String,
  status_of_registration: String,
  password: String
});

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017/digitalId', { useMongoClient: true });

mongoose.connect(
  "mongodb://manoj:Rpqb$2018@ds145304.mlab.com:45304/adharaa_user",
  { useNewUrlParser: true }
);

module.exports = mongoose.model("register", registerpageSchema);
