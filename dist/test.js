"use strict";

var _signin = _interopRequireDefault(require("./signin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var S = new _signin["default"]('UhodHlONGcwYUE1ODJYNlRVTW9rM0prZHVSS3ZGQUZDRWt5NDJ3bUpOVWFIejVmRUFBQUFBJCQAAAAAAAAAAAEAAACzxGtidGh1b2NkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqSFl8akhZfY');
S.login().then(function (e) {
  console.log(e);
  S.getAllTieba().then(console.log);
});