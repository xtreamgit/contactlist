/**
 * Created by Hector on 10/30/16.
 */

var express = require('express');
var app = express();

/** app.get('/', function (req, res) {
    res.send("Hello world from server.js")
});
*/


app.use (express.static( __dirname + "/public"));


app.listen(3000);
console.log("Server running on [port 3000");
