"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var fs = require('fs');

var users = require('./MOCK_DATA (1).json');

var app = express();
var PORT = 8000; //Middlewares

app.use(express.urlencoded({
  extended: false
})); //Routes

app.get('/api/users', function (req, res) {
  return res.json(users);
});
app.get('/users', function (req, res) {
  var html = "\n    <ul>\n        ".concat(users.map(function (user) {
    return "<li>".concat(user.first_name, "</li>");
  }).join(''), "\n    </ul>\n    ");
  res.send(html);
});
app.post('/api/users', function (req, res) {
  var body = req.body;
  users.push(_objectSpread({}, body, {
    id: users.length + 1
  }));
  fs.writeFile('./MOCK_DATA (1).json', JSON.stringify(users), function (err, data) {
    return res.json({
      status: " pending"
    });
  });
  console.log(body);
});
app.route('/api/users/:id').get(function (req, res) {
  var id = Number(req.params.id);
  var user = users.find(function (user) {
    return user.id === id;
  });
  return res.json(user);
}).patch(function (req, res) {
  res.json({
    status: " pending"
  });
})["delete"](function (req, res) {
  var body = req.body;
  console.log(body);
  var user = users.find(function (user) {
    return user.id === body.id;
  });
  users.pop(user);
  res.json({
    status: " success"
  });
}); //Server started on 8000

app.listen(PORT, function () {
  console.log("Server started on ".concat(PORT));
});
//# sourceMappingURL=server.dev.js.map
