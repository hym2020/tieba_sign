"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.find");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("regenerator-runtime/runtime");

var _fs = _interopRequireDefault(require("fs"));

var _utilites = _interopRequireDefault(require("./utilites"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var baiduLogin = function () {
  var req,
      formGroup = null;
  return /*#__PURE__*/function () {
    function _class(bduss) {
      _classCallCheck(this, _class);

      this.tbs = null;
      req = (0, _utilites["default"])(bduss);
    }

    _createClass(_class, [{
      key: "login",
      value: function () {
        var _login = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return req.getMethod('http://tieba.baidu.com/dc/common/tbs', true);

                case 3:
                  res = _context.sent;
                  res = res.json();

                  if (!(res.is_login == 1)) {
                    _context.next = 10;
                    break;
                  }

                  this.tbs = res.tbs;
                  return _context.abrupt("return", Promise.resolve(true));

                case 10:
                  return _context.abrupt("return", Promise.resolve(false));

                case 11:
                  _context.next = 17;
                  break;

                case 13:
                  _context.prev = 13;
                  _context.t0 = _context["catch"](0);
                  console.log('Login failed, ' + _context.t0.message);
                  return _context.abrupt("return", Promise.resolve(false));

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 13]]);
        }));

        function login() {
          return _login.apply(this, arguments);
        }

        return login;
      }()
    }, {
      key: "getAllTieba",
      value: function () {
        var _getAllTieba = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var res, $, targetScript;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(this.tbs === null)) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return", Promise.resolve(false));

                case 2:
                  _context2.prev = 2;
                  _context2.next = 5;
                  return req.getMethod('https://tieba.baidu.com/home/main?un=thuocd');

                case 5:
                  res = _context2.sent;
                  $ = res.jq();
                  targetScript = $($('script').toArray().find(function (e) {
                    return /ihome\/widget\/forumGroup/.test($(e).html());
                  })).html();
                  formGroup = eval("(()=>{let content;const _={Module:{use:(str,obj)=>content=obj.forumArr}};".concat(targetScript, "return content})()"));
                  return _context2.abrupt("return", Promise.resolve(formGroup.length));

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2["catch"](2);
                  console.log('Get all tieba failed: ' + _context2.t0.message);
                  return _context2.abrupt("return", Promise.resolve(false));

                case 16:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[2, 12]]);
        }));

        function getAllTieba() {
          return _getAllTieba.apply(this, arguments);
        }

        return getAllTieba;
      }()
    }, {
      key: "startSignUp",
      value: function () {
        var _startSignUp = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var allSignup, _iterator, _step, i, signup_rst;

          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!(this.tbs === null)) {
                    _context3.next = 2;
                    break;
                  }

                  return _context3.abrupt("return", Promise.resolve(false));

                case 2:
                  if (!(formGroup === null)) {
                    _context3.next = 4;
                    break;
                  }

                  return _context3.abrupt("return", Promise.resolve(false));

                case 4:
                  if (!(formGroup.length == 0)) {
                    _context3.next = 6;
                    break;
                  }

                  return _context3.abrupt("return", Promise.resolve(false));

                case 6:
                  allSignup = [];
                  _context3.prev = 7;
                  _iterator = _createForOfIteratorHelper(formGroup);
                  _context3.prev = 9;

                  _iterator.s();

                case 11:
                  if ((_step = _iterator.n()).done) {
                    _context3.next = 20;
                    break;
                  }

                  i = _step.value;
                  _context3.next = 15;
                  return req.postMethod('https://tieba.baidu.com/sign/add', {
                    ie: 'utf-8',
                    kw: i.forum_name,
                    tbs: this.tbs
                  });

                case 15:
                  signup_rst = _context3.sent;
                  signup_rst = signup_rst.json();
                  allSignup.push(_objectSpread(_objectSpread({}, signup_rst), {}, {
                    name: i.forum_name
                  }));

                case 18:
                  _context3.next = 11;
                  break;

                case 20:
                  _context3.next = 25;
                  break;

                case 22:
                  _context3.prev = 22;
                  _context3.t0 = _context3["catch"](9);

                  _iterator.e(_context3.t0);

                case 25:
                  _context3.prev = 25;

                  _iterator.f();

                  return _context3.finish(25);

                case 28:
                  return _context3.abrupt("return", Promise.resolve(allSignup));

                case 31:
                  _context3.prev = 31;
                  _context3.t1 = _context3["catch"](7);
                  console.log('Signup failed: ' + _context3.t1.message);
                  return _context3.abrupt("return", Promise.resolve(false));

                case 35:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[7, 31], [9, 22, 25, 28]]);
        }));

        function startSignUp() {
          return _startSignUp.apply(this, arguments);
        }

        return startSignUp;
      }()
    }]);

    return _class;
  }();
}();

var _default = baiduLogin;
exports["default"] = _default;