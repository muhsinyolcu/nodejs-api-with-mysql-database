var express = require("express");
var app = express();
var mysql = require("mysql");
var config = require("../public/dbconfig");

var bodyParser = require("body-parser");
const { FetchProducts } = require("../public/sql.queries");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports.fetchProductsV1 = function(req, res) {
  try {
    var con = mysql.createConnection(config.DatabaseConfigurations);
    con.connect(function(err) {
      if (!err) {
        con.query(FetchProducts, function(error, result, fields) {
          if (error) {
            res.status(500).json({
              message: "Error",
              result: error
            });
          } else {
            res.status(200).json({
              message: "OK",
              result: result
            });
          }
        });
        con.end();
      } else {
        console.log(
          "There is an Error while connection to Database - fetchProductsV1"
        );

        res.status(500).json({
          message: "Error",
          result: err
        });
      }
    });
  } catch (ex) {
    res.status(500).json({
      message: "Error",
      result: ex
    });
  }
};
