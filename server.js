/**
 * Created by Hector on 10/30/16.
 */

var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

/** app.get('/', function (req, res) {
    res.send("Hello world from server.js")
});
*/


app.use (express.static( __dirname + "/public"));
app.get('/contactlist', function (req, res) {
    console.log("I received a GET request");

    person1 = {
        name: 'Tim',
        email: 'tim@example.com',
        phone: '(810) 555-3443'
    };
    person2 = {
        name: 'Jonas',
        email: 'jonas@example.com',
        phone: '(252) 555-8743'
    };
    person3 = {
        name: 'Rick',
        email: 'gorick@example.com',
        phone: '(310) 555-6789'
    };
    person4 = {
        name: 'Fabian',
        email: 'fabguy@example.com',
        phone: '(513) 555-2385'
    };
    person5 = {
        name: 'Luc',
        email: 'lucteam@example.com',
        phone: '(619) 555-6550'
    };

    var contactlist = [person1, person2, person3, person4, person5];
    res.json(contactlist);

});

app.listen(3000);
console.log("Server running on [port 3000");
