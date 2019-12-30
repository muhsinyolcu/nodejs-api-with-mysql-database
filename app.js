var express = require("express");
var app = express();
var cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//CORS CONFIGURATIONS
// var corsWhiteList = [
//   "http://localhost:8081",
// ];
// var corsOptions = {
//   origin: function(origin, callback) {
//     if (corsWhiteList.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
// };
app.use(cors());
app.options("*", cors());

//Routes
app.use(require("./routes/index.routes"));

app.listen(process.env.PORT, () => {
  console.log(`App Running on ${process.env.HOST_URL}`);
});
