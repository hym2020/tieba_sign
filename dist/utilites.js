"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.join");

require("core-js/modules/es.array.map");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _request = _interopRequireDefault(require("request"));

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UA = {
  'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:57.0) Gecko/20100101 Firefox/57.0'
};

var myRequest = function myRequest(bduss) {
  var cookieJar = _request["default"].jar();

  cookieJar.setCookie(_request["default"].cookie("BDUSS=".concat(bduss)), 'https://baidu.com');
  cookieJar.setCookie(_request["default"].cookie("BDUSS=".concat(bduss)), 'http://tieba.baidu.com');

  var myCls = /*#__PURE__*/function () {
    function myCls() {
      _classCallCheck(this, myCls);
    }

    _createClass(myCls, [{
      key: "getMethod",
      value: function getMethod(url) {
        var isSign = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return new Promise(function (resolve, reject) {
          (0, _request["default"])({
            url: url,
            headers: _objectSpread({}, UA),
            method: 'GET',
            jar: cookieJar,
            maxRedirects: 20
          }, function (err, res, body) {
            if (err) return reject(err);else resolve({
              text: function text() {
                return body;
              },
              json: function json() {
                return JSON.parse(body);
              },
              jq: function jq() {
                return _cheerio["default"].load(body, {
                  xmlMode: true
                });
              }
            });
          });
        });
      }
    }, {
      key: "postMethod",
      value: function postMethod(url, data) {
        return new Promise(function (resolve, reject) {
          (0, _request["default"])({
            url: url,
            headers: _objectSpread(_objectSpread({}, UA), {}, {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }),
            method: 'POST',
            jar: cookieJar,
            body: Object.keys(data).map(function (e) {
              return "".concat(encodeURIComponent(e), "=").concat(encodeURIComponent(data[e]));
            }).join('&')
          }, function (err, res, body) {
            if (err) return reject(err);else resolve({
              text: function text() {
                return body;
              },
              json: function json() {
                return JSON.parse(body);
              },
              jq: function jq() {
                return _cheerio["default"].load(body, {
                  xmlMode: true
                });
              }
            });
          });
        });
      }
    }]);

    return myCls;
  }();

  return new myCls();
};

var _default = myRequest;
exports["default"] = _default;