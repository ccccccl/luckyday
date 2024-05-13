(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct.bind(), module.exports.__esModule = true, module.exports["default"] = module.exports;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
  return _construct.apply(null, arguments);
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 183:
/*!*****************************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/uni-icons/components/uni-icons/icons.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "id": "2852637",
  "name": "uniui图标库",
  "font_family": "uniicons",
  "css_prefix_text": "uniui-",
  "description": "",
  "glyphs": [{
    "icon_id": "25027049",
    "name": "yanse",
    "font_class": "color",
    "unicode": "e6cf",
    "unicode_decimal": 59087
  }, {
    "icon_id": "25027048",
    "name": "wallet",
    "font_class": "wallet",
    "unicode": "e6b1",
    "unicode_decimal": 59057
  }, {
    "icon_id": "25015720",
    "name": "settings-filled",
    "font_class": "settings-filled",
    "unicode": "e6ce",
    "unicode_decimal": 59086
  }, {
    "icon_id": "25015434",
    "name": "shimingrenzheng-filled",
    "font_class": "auth-filled",
    "unicode": "e6cc",
    "unicode_decimal": 59084
  }, {
    "icon_id": "24934246",
    "name": "shop-filled",
    "font_class": "shop-filled",
    "unicode": "e6cd",
    "unicode_decimal": 59085
  }, {
    "icon_id": "24934159",
    "name": "staff-filled-01",
    "font_class": "staff-filled",
    "unicode": "e6cb",
    "unicode_decimal": 59083
  }, {
    "icon_id": "24932461",
    "name": "VIP-filled",
    "font_class": "vip-filled",
    "unicode": "e6c6",
    "unicode_decimal": 59078
  }, {
    "icon_id": "24932462",
    "name": "plus_circle_fill",
    "font_class": "plus-filled",
    "unicode": "e6c7",
    "unicode_decimal": 59079
  }, {
    "icon_id": "24932463",
    "name": "folder_add-filled",
    "font_class": "folder-add-filled",
    "unicode": "e6c8",
    "unicode_decimal": 59080
  }, {
    "icon_id": "24932464",
    "name": "yanse-filled",
    "font_class": "color-filled",
    "unicode": "e6c9",
    "unicode_decimal": 59081
  }, {
    "icon_id": "24932465",
    "name": "tune-filled",
    "font_class": "tune-filled",
    "unicode": "e6ca",
    "unicode_decimal": 59082
  }, {
    "icon_id": "24932455",
    "name": "a-rilidaka-filled",
    "font_class": "calendar-filled",
    "unicode": "e6c0",
    "unicode_decimal": 59072
  }, {
    "icon_id": "24932456",
    "name": "notification-filled",
    "font_class": "notification-filled",
    "unicode": "e6c1",
    "unicode_decimal": 59073
  }, {
    "icon_id": "24932457",
    "name": "wallet-filled",
    "font_class": "wallet-filled",
    "unicode": "e6c2",
    "unicode_decimal": 59074
  }, {
    "icon_id": "24932458",
    "name": "paihangbang-filled",
    "font_class": "medal-filled",
    "unicode": "e6c3",
    "unicode_decimal": 59075
  }, {
    "icon_id": "24932459",
    "name": "gift-filled",
    "font_class": "gift-filled",
    "unicode": "e6c4",
    "unicode_decimal": 59076
  }, {
    "icon_id": "24932460",
    "name": "fire-filled",
    "font_class": "fire-filled",
    "unicode": "e6c5",
    "unicode_decimal": 59077
  }, {
    "icon_id": "24928001",
    "name": "refreshempty",
    "font_class": "refreshempty",
    "unicode": "e6bf",
    "unicode_decimal": 59071
  }, {
    "icon_id": "24926853",
    "name": "location-ellipse",
    "font_class": "location-filled",
    "unicode": "e6af",
    "unicode_decimal": 59055
  }, {
    "icon_id": "24926735",
    "name": "person-filled",
    "font_class": "person-filled",
    "unicode": "e69d",
    "unicode_decimal": 59037
  }, {
    "icon_id": "24926703",
    "name": "personadd-filled",
    "font_class": "personadd-filled",
    "unicode": "e698",
    "unicode_decimal": 59032
  }, {
    "icon_id": "24923351",
    "name": "back",
    "font_class": "back",
    "unicode": "e6b9",
    "unicode_decimal": 59065
  }, {
    "icon_id": "24923352",
    "name": "forward",
    "font_class": "forward",
    "unicode": "e6ba",
    "unicode_decimal": 59066
  }, {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrow-right",
    "unicode": "e6bb",
    "unicode_decimal": 59067
  }, {
    "icon_id": "24923353",
    "name": "arrowthinright",
    "font_class": "arrowthinright",
    "unicode": "e6bb",
    "unicode_decimal": 59067
  }, {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrow-left",
    "unicode": "e6bc",
    "unicode_decimal": 59068
  }, {
    "icon_id": "24923354",
    "name": "arrowthinleft",
    "font_class": "arrowthinleft",
    "unicode": "e6bc",
    "unicode_decimal": 59068
  }, {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrow-up",
    "unicode": "e6bd",
    "unicode_decimal": 59069
  }, {
    "icon_id": "24923355",
    "name": "arrowthinup",
    "font_class": "arrowthinup",
    "unicode": "e6bd",
    "unicode_decimal": 59069
  }, {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrow-down",
    "unicode": "e6be",
    "unicode_decimal": 59070
  }, {
    "icon_id": "24923356",
    "name": "arrowthindown",
    "font_class": "arrowthindown",
    "unicode": "e6be",
    "unicode_decimal": 59070
  }, {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "bottom",
    "unicode": "e6b8",
    "unicode_decimal": 59064
  }, {
    "icon_id": "24923349",
    "name": "arrowdown",
    "font_class": "arrowdown",
    "unicode": "e6b8",
    "unicode_decimal": 59064
  }, {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "right",
    "unicode": "e6b5",
    "unicode_decimal": 59061
  }, {
    "icon_id": "24923346",
    "name": "arrowright",
    "font_class": "arrowright",
    "unicode": "e6b5",
    "unicode_decimal": 59061
  }, {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "top",
    "unicode": "e6b6",
    "unicode_decimal": 59062
  }, {
    "icon_id": "24923347",
    "name": "arrowup",
    "font_class": "arrowup",
    "unicode": "e6b6",
    "unicode_decimal": 59062
  }, {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "left",
    "unicode": "e6b7",
    "unicode_decimal": 59063
  }, {
    "icon_id": "24923348",
    "name": "arrowleft",
    "font_class": "arrowleft",
    "unicode": "e6b7",
    "unicode_decimal": 59063
  }, {
    "icon_id": "24923334",
    "name": "eye",
    "font_class": "eye",
    "unicode": "e651",
    "unicode_decimal": 58961
  }, {
    "icon_id": "24923335",
    "name": "eye-filled",
    "font_class": "eye-filled",
    "unicode": "e66a",
    "unicode_decimal": 58986
  }, {
    "icon_id": "24923336",
    "name": "eye-slash",
    "font_class": "eye-slash",
    "unicode": "e6b3",
    "unicode_decimal": 59059
  }, {
    "icon_id": "24923337",
    "name": "eye-slash-filled",
    "font_class": "eye-slash-filled",
    "unicode": "e6b4",
    "unicode_decimal": 59060
  }, {
    "icon_id": "24923305",
    "name": "info-filled",
    "font_class": "info-filled",
    "unicode": "e649",
    "unicode_decimal": 58953
  }, {
    "icon_id": "24923299",
    "name": "reload-01",
    "font_class": "reload",
    "unicode": "e6b2",
    "unicode_decimal": 59058
  }, {
    "icon_id": "24923195",
    "name": "mic_slash_fill",
    "font_class": "micoff-filled",
    "unicode": "e6b0",
    "unicode_decimal": 59056
  }, {
    "icon_id": "24923165",
    "name": "map-pin-ellipse",
    "font_class": "map-pin-ellipse",
    "unicode": "e6ac",
    "unicode_decimal": 59052
  }, {
    "icon_id": "24923166",
    "name": "map-pin",
    "font_class": "map-pin",
    "unicode": "e6ad",
    "unicode_decimal": 59053
  }, {
    "icon_id": "24923167",
    "name": "location",
    "font_class": "location",
    "unicode": "e6ae",
    "unicode_decimal": 59054
  }, {
    "icon_id": "24923064",
    "name": "starhalf",
    "font_class": "starhalf",
    "unicode": "e683",
    "unicode_decimal": 59011
  }, {
    "icon_id": "24923065",
    "name": "star",
    "font_class": "star",
    "unicode": "e688",
    "unicode_decimal": 59016
  }, {
    "icon_id": "24923066",
    "name": "star-filled",
    "font_class": "star-filled",
    "unicode": "e68f",
    "unicode_decimal": 59023
  }, {
    "icon_id": "24899646",
    "name": "a-rilidaka",
    "font_class": "calendar",
    "unicode": "e6a0",
    "unicode_decimal": 59040
  }, {
    "icon_id": "24899647",
    "name": "fire",
    "font_class": "fire",
    "unicode": "e6a1",
    "unicode_decimal": 59041
  }, {
    "icon_id": "24899648",
    "name": "paihangbang",
    "font_class": "medal",
    "unicode": "e6a2",
    "unicode_decimal": 59042
  }, {
    "icon_id": "24899649",
    "name": "font",
    "font_class": "font",
    "unicode": "e6a3",
    "unicode_decimal": 59043
  }, {
    "icon_id": "24899650",
    "name": "gift",
    "font_class": "gift",
    "unicode": "e6a4",
    "unicode_decimal": 59044
  }, {
    "icon_id": "24899651",
    "name": "link",
    "font_class": "link",
    "unicode": "e6a5",
    "unicode_decimal": 59045
  }, {
    "icon_id": "24899652",
    "name": "notification",
    "font_class": "notification",
    "unicode": "e6a6",
    "unicode_decimal": 59046
  }, {
    "icon_id": "24899653",
    "name": "staff",
    "font_class": "staff",
    "unicode": "e6a7",
    "unicode_decimal": 59047
  }, {
    "icon_id": "24899654",
    "name": "VIP",
    "font_class": "vip",
    "unicode": "e6a8",
    "unicode_decimal": 59048
  }, {
    "icon_id": "24899655",
    "name": "folder_add",
    "font_class": "folder-add",
    "unicode": "e6a9",
    "unicode_decimal": 59049
  }, {
    "icon_id": "24899656",
    "name": "tune",
    "font_class": "tune",
    "unicode": "e6aa",
    "unicode_decimal": 59050
  }, {
    "icon_id": "24899657",
    "name": "shimingrenzheng",
    "font_class": "auth",
    "unicode": "e6ab",
    "unicode_decimal": 59051
  }, {
    "icon_id": "24899565",
    "name": "person",
    "font_class": "person",
    "unicode": "e699",
    "unicode_decimal": 59033
  }, {
    "icon_id": "24899566",
    "name": "email-filled",
    "font_class": "email-filled",
    "unicode": "e69a",
    "unicode_decimal": 59034
  }, {
    "icon_id": "24899567",
    "name": "phone-filled",
    "font_class": "phone-filled",
    "unicode": "e69b",
    "unicode_decimal": 59035
  }, {
    "icon_id": "24899568",
    "name": "phone",
    "font_class": "phone",
    "unicode": "e69c",
    "unicode_decimal": 59036
  }, {
    "icon_id": "24899570",
    "name": "email",
    "font_class": "email",
    "unicode": "e69e",
    "unicode_decimal": 59038
  }, {
    "icon_id": "24899571",
    "name": "personadd",
    "font_class": "personadd",
    "unicode": "e69f",
    "unicode_decimal": 59039
  }, {
    "icon_id": "24899558",
    "name": "chatboxes-filled",
    "font_class": "chatboxes-filled",
    "unicode": "e692",
    "unicode_decimal": 59026
  }, {
    "icon_id": "24899559",
    "name": "contact",
    "font_class": "contact",
    "unicode": "e693",
    "unicode_decimal": 59027
  }, {
    "icon_id": "24899560",
    "name": "chatbubble-filled",
    "font_class": "chatbubble-filled",
    "unicode": "e694",
    "unicode_decimal": 59028
  }, {
    "icon_id": "24899561",
    "name": "contact-filled",
    "font_class": "contact-filled",
    "unicode": "e695",
    "unicode_decimal": 59029
  }, {
    "icon_id": "24899562",
    "name": "chatboxes",
    "font_class": "chatboxes",
    "unicode": "e696",
    "unicode_decimal": 59030
  }, {
    "icon_id": "24899563",
    "name": "chatbubble",
    "font_class": "chatbubble",
    "unicode": "e697",
    "unicode_decimal": 59031
  }, {
    "icon_id": "24881290",
    "name": "upload-filled",
    "font_class": "upload-filled",
    "unicode": "e68e",
    "unicode_decimal": 59022
  }, {
    "icon_id": "24881292",
    "name": "upload",
    "font_class": "upload",
    "unicode": "e690",
    "unicode_decimal": 59024
  }, {
    "icon_id": "24881293",
    "name": "weixin",
    "font_class": "weixin",
    "unicode": "e691",
    "unicode_decimal": 59025
  }, {
    "icon_id": "24881274",
    "name": "compose",
    "font_class": "compose",
    "unicode": "e67f",
    "unicode_decimal": 59007
  }, {
    "icon_id": "24881275",
    "name": "qq",
    "font_class": "qq",
    "unicode": "e680",
    "unicode_decimal": 59008
  }, {
    "icon_id": "24881276",
    "name": "download-filled",
    "font_class": "download-filled",
    "unicode": "e681",
    "unicode_decimal": 59009
  }, {
    "icon_id": "24881277",
    "name": "pengyouquan",
    "font_class": "pyq",
    "unicode": "e682",
    "unicode_decimal": 59010
  }, {
    "icon_id": "24881279",
    "name": "sound",
    "font_class": "sound",
    "unicode": "e684",
    "unicode_decimal": 59012
  }, {
    "icon_id": "24881280",
    "name": "trash-filled",
    "font_class": "trash-filled",
    "unicode": "e685",
    "unicode_decimal": 59013
  }, {
    "icon_id": "24881281",
    "name": "sound-filled",
    "font_class": "sound-filled",
    "unicode": "e686",
    "unicode_decimal": 59014
  }, {
    "icon_id": "24881282",
    "name": "trash",
    "font_class": "trash",
    "unicode": "e687",
    "unicode_decimal": 59015
  }, {
    "icon_id": "24881284",
    "name": "videocam-filled",
    "font_class": "videocam-filled",
    "unicode": "e689",
    "unicode_decimal": 59017
  }, {
    "icon_id": "24881285",
    "name": "spinner-cycle",
    "font_class": "spinner-cycle",
    "unicode": "e68a",
    "unicode_decimal": 59018
  }, {
    "icon_id": "24881286",
    "name": "weibo",
    "font_class": "weibo",
    "unicode": "e68b",
    "unicode_decimal": 59019
  }, {
    "icon_id": "24881288",
    "name": "videocam",
    "font_class": "videocam",
    "unicode": "e68c",
    "unicode_decimal": 59020
  }, {
    "icon_id": "24881289",
    "name": "download",
    "font_class": "download",
    "unicode": "e68d",
    "unicode_decimal": 59021
  }, {
    "icon_id": "24879601",
    "name": "help",
    "font_class": "help",
    "unicode": "e679",
    "unicode_decimal": 59001
  }, {
    "icon_id": "24879602",
    "name": "navigate-filled",
    "font_class": "navigate-filled",
    "unicode": "e67a",
    "unicode_decimal": 59002
  }, {
    "icon_id": "24879603",
    "name": "plusempty",
    "font_class": "plusempty",
    "unicode": "e67b",
    "unicode_decimal": 59003
  }, {
    "icon_id": "24879604",
    "name": "smallcircle",
    "font_class": "smallcircle",
    "unicode": "e67c",
    "unicode_decimal": 59004
  }, {
    "icon_id": "24879605",
    "name": "minus-filled",
    "font_class": "minus-filled",
    "unicode": "e67d",
    "unicode_decimal": 59005
  }, {
    "icon_id": "24879606",
    "name": "micoff",
    "font_class": "micoff",
    "unicode": "e67e",
    "unicode_decimal": 59006
  }, {
    "icon_id": "24879588",
    "name": "closeempty",
    "font_class": "closeempty",
    "unicode": "e66c",
    "unicode_decimal": 58988
  }, {
    "icon_id": "24879589",
    "name": "clear",
    "font_class": "clear",
    "unicode": "e66d",
    "unicode_decimal": 58989
  }, {
    "icon_id": "24879590",
    "name": "navigate",
    "font_class": "navigate",
    "unicode": "e66e",
    "unicode_decimal": 58990
  }, {
    "icon_id": "24879591",
    "name": "minus",
    "font_class": "minus",
    "unicode": "e66f",
    "unicode_decimal": 58991
  }, {
    "icon_id": "24879592",
    "name": "image",
    "font_class": "image",
    "unicode": "e670",
    "unicode_decimal": 58992
  }, {
    "icon_id": "24879593",
    "name": "mic",
    "font_class": "mic",
    "unicode": "e671",
    "unicode_decimal": 58993
  }, {
    "icon_id": "24879594",
    "name": "paperplane",
    "font_class": "paperplane",
    "unicode": "e672",
    "unicode_decimal": 58994
  }, {
    "icon_id": "24879595",
    "name": "close",
    "font_class": "close",
    "unicode": "e673",
    "unicode_decimal": 58995
  }, {
    "icon_id": "24879596",
    "name": "help-filled",
    "font_class": "help-filled",
    "unicode": "e674",
    "unicode_decimal": 58996
  }, {
    "icon_id": "24879597",
    "name": "plus-filled",
    "font_class": "paperplane-filled",
    "unicode": "e675",
    "unicode_decimal": 58997
  }, {
    "icon_id": "24879598",
    "name": "plus",
    "font_class": "plus",
    "unicode": "e676",
    "unicode_decimal": 58998
  }, {
    "icon_id": "24879599",
    "name": "mic-filled",
    "font_class": "mic-filled",
    "unicode": "e677",
    "unicode_decimal": 58999
  }, {
    "icon_id": "24879600",
    "name": "image-filled",
    "font_class": "image-filled",
    "unicode": "e678",
    "unicode_decimal": 59000
  }, {
    "icon_id": "24855900",
    "name": "locked-filled",
    "font_class": "locked-filled",
    "unicode": "e668",
    "unicode_decimal": 58984
  }, {
    "icon_id": "24855901",
    "name": "info",
    "font_class": "info",
    "unicode": "e669",
    "unicode_decimal": 58985
  }, {
    "icon_id": "24855903",
    "name": "locked",
    "font_class": "locked",
    "unicode": "e66b",
    "unicode_decimal": 58987
  }, {
    "icon_id": "24855884",
    "name": "camera-filled",
    "font_class": "camera-filled",
    "unicode": "e658",
    "unicode_decimal": 58968
  }, {
    "icon_id": "24855885",
    "name": "chat-filled",
    "font_class": "chat-filled",
    "unicode": "e659",
    "unicode_decimal": 58969
  }, {
    "icon_id": "24855886",
    "name": "camera",
    "font_class": "camera",
    "unicode": "e65a",
    "unicode_decimal": 58970
  }, {
    "icon_id": "24855887",
    "name": "circle",
    "font_class": "circle",
    "unicode": "e65b",
    "unicode_decimal": 58971
  }, {
    "icon_id": "24855888",
    "name": "checkmarkempty",
    "font_class": "checkmarkempty",
    "unicode": "e65c",
    "unicode_decimal": 58972
  }, {
    "icon_id": "24855889",
    "name": "chat",
    "font_class": "chat",
    "unicode": "e65d",
    "unicode_decimal": 58973
  }, {
    "icon_id": "24855890",
    "name": "circle-filled",
    "font_class": "circle-filled",
    "unicode": "e65e",
    "unicode_decimal": 58974
  }, {
    "icon_id": "24855891",
    "name": "flag",
    "font_class": "flag",
    "unicode": "e65f",
    "unicode_decimal": 58975
  }, {
    "icon_id": "24855892",
    "name": "flag-filled",
    "font_class": "flag-filled",
    "unicode": "e660",
    "unicode_decimal": 58976
  }, {
    "icon_id": "24855893",
    "name": "gear-filled",
    "font_class": "gear-filled",
    "unicode": "e661",
    "unicode_decimal": 58977
  }, {
    "icon_id": "24855894",
    "name": "home",
    "font_class": "home",
    "unicode": "e662",
    "unicode_decimal": 58978
  }, {
    "icon_id": "24855895",
    "name": "home-filled",
    "font_class": "home-filled",
    "unicode": "e663",
    "unicode_decimal": 58979
  }, {
    "icon_id": "24855896",
    "name": "gear",
    "font_class": "gear",
    "unicode": "e664",
    "unicode_decimal": 58980
  }, {
    "icon_id": "24855897",
    "name": "smallcircle-filled",
    "font_class": "smallcircle-filled",
    "unicode": "e665",
    "unicode_decimal": 58981
  }, {
    "icon_id": "24855898",
    "name": "map-filled",
    "font_class": "map-filled",
    "unicode": "e666",
    "unicode_decimal": 58982
  }, {
    "icon_id": "24855899",
    "name": "map",
    "font_class": "map",
    "unicode": "e667",
    "unicode_decimal": 58983
  }, {
    "icon_id": "24855825",
    "name": "refresh-filled",
    "font_class": "refresh-filled",
    "unicode": "e656",
    "unicode_decimal": 58966
  }, {
    "icon_id": "24855826",
    "name": "refresh",
    "font_class": "refresh",
    "unicode": "e657",
    "unicode_decimal": 58967
  }, {
    "icon_id": "24855808",
    "name": "cloud-upload",
    "font_class": "cloud-upload",
    "unicode": "e645",
    "unicode_decimal": 58949
  }, {
    "icon_id": "24855809",
    "name": "cloud-download-filled",
    "font_class": "cloud-download-filled",
    "unicode": "e646",
    "unicode_decimal": 58950
  }, {
    "icon_id": "24855810",
    "name": "cloud-download",
    "font_class": "cloud-download",
    "unicode": "e647",
    "unicode_decimal": 58951
  }, {
    "icon_id": "24855811",
    "name": "cloud-upload-filled",
    "font_class": "cloud-upload-filled",
    "unicode": "e648",
    "unicode_decimal": 58952
  }, {
    "icon_id": "24855813",
    "name": "redo",
    "font_class": "redo",
    "unicode": "e64a",
    "unicode_decimal": 58954
  }, {
    "icon_id": "24855814",
    "name": "images-filled",
    "font_class": "images-filled",
    "unicode": "e64b",
    "unicode_decimal": 58955
  }, {
    "icon_id": "24855815",
    "name": "undo-filled",
    "font_class": "undo-filled",
    "unicode": "e64c",
    "unicode_decimal": 58956
  }, {
    "icon_id": "24855816",
    "name": "more",
    "font_class": "more",
    "unicode": "e64d",
    "unicode_decimal": 58957
  }, {
    "icon_id": "24855817",
    "name": "more-filled",
    "font_class": "more-filled",
    "unicode": "e64e",
    "unicode_decimal": 58958
  }, {
    "icon_id": "24855818",
    "name": "undo",
    "font_class": "undo",
    "unicode": "e64f",
    "unicode_decimal": 58959
  }, {
    "icon_id": "24855819",
    "name": "images",
    "font_class": "images",
    "unicode": "e650",
    "unicode_decimal": 58960
  }, {
    "icon_id": "24855821",
    "name": "paperclip",
    "font_class": "paperclip",
    "unicode": "e652",
    "unicode_decimal": 58962
  }, {
    "icon_id": "24855822",
    "name": "settings",
    "font_class": "settings",
    "unicode": "e653",
    "unicode_decimal": 58963
  }, {
    "icon_id": "24855823",
    "name": "search",
    "font_class": "search",
    "unicode": "e654",
    "unicode_decimal": 58964
  }, {
    "icon_id": "24855824",
    "name": "redo-filled",
    "font_class": "redo-filled",
    "unicode": "e655",
    "unicode_decimal": 58965
  }, {
    "icon_id": "24841702",
    "name": "list",
    "font_class": "list",
    "unicode": "e644",
    "unicode_decimal": 58948
  }, {
    "icon_id": "24841489",
    "name": "mail-open-filled",
    "font_class": "mail-open-filled",
    "unicode": "e63a",
    "unicode_decimal": 58938
  }, {
    "icon_id": "24841491",
    "name": "hand-thumbsdown-filled",
    "font_class": "hand-down-filled",
    "unicode": "e63c",
    "unicode_decimal": 58940
  }, {
    "icon_id": "24841492",
    "name": "hand-thumbsdown",
    "font_class": "hand-down",
    "unicode": "e63d",
    "unicode_decimal": 58941
  }, {
    "icon_id": "24841493",
    "name": "hand-thumbsup-filled",
    "font_class": "hand-up-filled",
    "unicode": "e63e",
    "unicode_decimal": 58942
  }, {
    "icon_id": "24841494",
    "name": "hand-thumbsup",
    "font_class": "hand-up",
    "unicode": "e63f",
    "unicode_decimal": 58943
  }, {
    "icon_id": "24841496",
    "name": "heart-filled",
    "font_class": "heart-filled",
    "unicode": "e641",
    "unicode_decimal": 58945
  }, {
    "icon_id": "24841498",
    "name": "mail-open",
    "font_class": "mail-open",
    "unicode": "e643",
    "unicode_decimal": 58947
  }, {
    "icon_id": "24841488",
    "name": "heart",
    "font_class": "heart",
    "unicode": "e639",
    "unicode_decimal": 58937
  }, {
    "icon_id": "24839963",
    "name": "loop",
    "font_class": "loop",
    "unicode": "e633",
    "unicode_decimal": 58931
  }, {
    "icon_id": "24839866",
    "name": "pulldown",
    "font_class": "pulldown",
    "unicode": "e632",
    "unicode_decimal": 58930
  }, {
    "icon_id": "24813798",
    "name": "scan",
    "font_class": "scan",
    "unicode": "e62a",
    "unicode_decimal": 58922
  }, {
    "icon_id": "24813786",
    "name": "bars",
    "font_class": "bars",
    "unicode": "e627",
    "unicode_decimal": 58919
  }, {
    "icon_id": "24813788",
    "name": "cart-filled",
    "font_class": "cart-filled",
    "unicode": "e629",
    "unicode_decimal": 58921
  }, {
    "icon_id": "24813790",
    "name": "checkbox",
    "font_class": "checkbox",
    "unicode": "e62b",
    "unicode_decimal": 58923
  }, {
    "icon_id": "24813791",
    "name": "checkbox-filled",
    "font_class": "checkbox-filled",
    "unicode": "e62c",
    "unicode_decimal": 58924
  }, {
    "icon_id": "24813794",
    "name": "shop",
    "font_class": "shop",
    "unicode": "e62f",
    "unicode_decimal": 58927
  }, {
    "icon_id": "24813795",
    "name": "headphones",
    "font_class": "headphones",
    "unicode": "e630",
    "unicode_decimal": 58928
  }, {
    "icon_id": "24813796",
    "name": "cart",
    "font_class": "cart",
    "unicode": "e631",
    "unicode_decimal": 58929
  }]
};
exports.default = _default;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 198:
/*!*****************************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/uni-popup/components/uni-popup/popup.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {};
  },
  created: function created() {
    this.popup = this.getParent();
  },
  methods: {
    /**
     * 获取父元素实例
     */
    getParent: function getParent() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniPopup';
      var parent = this.$parent;
      var parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent) return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 199:
/*!**********************************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/uni-popup/components/uni-popup/i18n/index.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 200));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 201));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 202));
var _default = {
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__D160A0A",
    appName: "luckylucky",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.99",
    uniRuntimeVersion: "3.99",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__D160A0A",
      appName: "luckylucky",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"luckylucky","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 200:
/*!*********************************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/uni-popup/components/uni-popup/i18n/en.json ***!
  \*********************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"cancel\",\"uni-popup.ok\":\"ok\",\"uni-popup.placeholder\":\"pleace enter\",\"uni-popup.title\":\"Hint\",\"uni-popup.shareTitle\":\"Share to\"}");

/***/ }),

/***/ 201:
/*!**************************************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hans.json ***!
  \**************************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"确定\",\"uni-popup.placeholder\":\"请输入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 202:
/*!**************************************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hant.json ***!
  \**************************************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"確定\",\"uni-popup.placeholder\":\"請輸入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 224:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 225)();
module.exports = runtime;

/***/ }),

/***/ 225:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) {
              if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            }
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 226:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 227:
/*!******************************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/Sansnn-uQRCode/js_sdk/uqrcode/uqrcode.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = b;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 224));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 226));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
//---------------------------------------------------------------------
// uQRCode二维码生成插件 v4.0.6
// 
// uQRCode是一款基于Javascript环境开发的二维码生成插件，适用所有Javascript运行环境的前端应用和Node.js。
// 
// Copyright (c) Sansnn uQRCode All rights reserved.
// 
// Licensed under the Apache License, Version 2.0.
//   http://www.apache.org/licenses/LICENSE-2.0
// 
// github地址：
//   https://github.com/Sansnn/uQRCode
// 
// npm地址：
//   https://www.npmjs.com/package/uqrcodejs
// 
// uni-app插件市场地址：
//   https://ext.dcloud.net.cn/plugin?id=1287
// 
// 复制使用请保留本段注释，感谢支持开源！
// 
//---------------------------------------------------------------------

//---------------------------------------------------------------------
// 当前文件格式为 es，将 bundle 保留为 ES 模块文件，适用于其他打包工具以及支持 <script type=module> 标签的浏览器（别名: esm，module）
// 如需在其他环境使用，请获取环境对应的格式文件
// 格式说明：
// amd - 异步模块定义，适用于 RequireJS 等模块加载器
// cjs - CommonJS，适用于 Node 环境和其他打包工具（别名：commonjs）
// es - 将 bundle 保留为 ES 模块文件，适用于其他打包工具以及支持 <script type=module> 标签的浏览器（别名: esm，module）
// umd - 通用模块定义，生成的包同时支持 amd、cjs 和 iife 三种格式
//---------------------------------------------------------------------

function o(o) {
  this.mode = r.MODE_8BIT_BYTE, this.data = o;
}
function e(o, e) {
  this.typeNumber = o, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array();
}
o.prototype = {
  getLength: function getLength(o) {
    return this.data.length;
  },
  write: function write(o) {
    for (var e = 0; e < this.data.length; e++) {
      o.put(this.data.charCodeAt(e), 8);
    }
  }
}, e.prototype = {
  addData: function addData(e) {
    var r = new o(e);
    this.dataList.push(r), this.dataCache = null;
  },
  isDark: function isDark(o, e) {
    if (o < 0 || this.moduleCount <= o || e < 0 || this.moduleCount <= e) throw new Error(o + "," + e);
    return this.modules[o][e];
  },
  getModuleCount: function getModuleCount() {
    return this.moduleCount;
  },
  make: function make() {
    if (this.typeNumber < 1) {
      var o = 1;
      for (o = 1; o < 40; o++) {
        for (var e = v.getRSBlocks(o, this.errorCorrectLevel), r = new p(), t = 0, i = 0; i < e.length; i++) {
          t += e[i].dataCount;
        }
        for (i = 0; i < this.dataList.length; i++) {
          var n = this.dataList[i];
          r.put(n.mode, 4), r.put(n.getLength(), h.getLengthInBits(n.mode, o)), n.write(r);
        }
        if (r.getLengthInBits() <= 8 * t) break;
      }
      this.typeNumber = o;
    }
    this.makeImpl(!1, this.getBestMaskPattern());
  },
  makeImpl: function makeImpl(o, r) {
    this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
    for (var t = 0; t < this.moduleCount; t++) {
      this.modules[t] = new Array(this.moduleCount);
      for (var i = 0; i < this.moduleCount; i++) {
        this.modules[t][i] = null;
      }
    }
    this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(o, r), this.typeNumber >= 7 && this.setupTypeNumber(o), null == this.dataCache && (this.dataCache = e.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, r);
  },
  setupPositionProbePattern: function setupPositionProbePattern(o, e) {
    for (var r = -1; r <= 7; r++) {
      if (!(o + r <= -1 || this.moduleCount <= o + r)) for (var t = -1; t <= 7; t++) {
        e + t <= -1 || this.moduleCount <= e + t || (this.modules[o + r][e + t] = 0 <= r && r <= 6 && (0 == t || 6 == t) || 0 <= t && t <= 6 && (0 == r || 6 == r) || 2 <= r && r <= 4 && 2 <= t && t <= 4);
      }
    }
  },
  getBestMaskPattern: function getBestMaskPattern() {
    for (var o = 0, e = 0, r = 0; r < 8; r++) {
      this.makeImpl(!0, r);
      var t = h.getLostPoint(this);
      (0 == r || o > t) && (o = t, e = r);
    }
    return e;
  },
  createMovieClip: function createMovieClip(o, e, r) {
    var t = o.createEmptyMovieClip(e, r);
    this.make();
    for (var i = 0; i < this.modules.length; i++) {
      for (var n = 1 * i, a = 0; a < this.modules[i].length; a++) {
        var d = 1 * a;
        this.modules[i][a] && (t.beginFill(0, 100), t.moveTo(d, n), t.lineTo(d + 1, n), t.lineTo(d + 1, n + 1), t.lineTo(d, n + 1), t.endFill());
      }
    }
    return t;
  },
  setupTimingPattern: function setupTimingPattern() {
    for (var o = 8; o < this.moduleCount - 8; o++) {
      null == this.modules[o][6] && (this.modules[o][6] = o % 2 == 0);
    }
    for (var e = 8; e < this.moduleCount - 8; e++) {
      null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0);
    }
  },
  setupPositionAdjustPattern: function setupPositionAdjustPattern() {
    for (var o = h.getPatternPosition(this.typeNumber), e = 0; e < o.length; e++) {
      for (var r = 0; r < o.length; r++) {
        var t = o[e],
          i = o[r];
        if (null == this.modules[t][i]) for (var n = -2; n <= 2; n++) {
          for (var a = -2; a <= 2; a++) {
            this.modules[t + n][i + a] = -2 == n || 2 == n || -2 == a || 2 == a || 0 == n && 0 == a;
          }
        }
      }
    }
  },
  setupTypeNumber: function setupTypeNumber(o) {
    for (var e = h.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
      var t = !o && 1 == (e >> r & 1);
      this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = t;
    }
    for (r = 0; r < 18; r++) {
      t = !o && 1 == (e >> r & 1);
      this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = t;
    }
  },
  setupTypeInfo: function setupTypeInfo(o, e) {
    for (var r = this.errorCorrectLevel << 3 | e, t = h.getBCHTypeInfo(r), i = 0; i < 15; i++) {
      var n = !o && 1 == (t >> i & 1);
      i < 6 ? this.modules[i][8] = n : i < 8 ? this.modules[i + 1][8] = n : this.modules[this.moduleCount - 15 + i][8] = n;
    }
    for (i = 0; i < 15; i++) {
      n = !o && 1 == (t >> i & 1);
      i < 8 ? this.modules[8][this.moduleCount - i - 1] = n : i < 9 ? this.modules[8][15 - i - 1 + 1] = n : this.modules[8][15 - i - 1] = n;
    }
    this.modules[this.moduleCount - 8][8] = !o;
  },
  mapData: function mapData(o, e) {
    for (var r = -1, t = this.moduleCount - 1, i = 7, n = 0, a = this.moduleCount - 1; a > 0; a -= 2) {
      for (6 == a && a--;;) {
        for (var d = 0; d < 2; d++) {
          if (null == this.modules[t][a - d]) {
            var u = !1;
            n < o.length && (u = 1 == (o[n] >>> i & 1)), h.getMask(e, t, a - d) && (u = !u), this.modules[t][a - d] = u, -1 == --i && (n++, i = 7);
          }
        }
        if ((t += r) < 0 || this.moduleCount <= t) {
          t -= r, r = -r;
          break;
        }
      }
    }
  }
}, e.PAD0 = 236, e.PAD1 = 17, e.createData = function (o, r, t) {
  for (var i = v.getRSBlocks(o, r), n = new p(), a = 0; a < t.length; a++) {
    var d = t[a];
    n.put(d.mode, 4), n.put(d.getLength(), h.getLengthInBits(d.mode, o)), d.write(n);
  }
  var u = 0;
  for (a = 0; a < i.length; a++) {
    u += i[a].dataCount;
  }
  if (n.getLengthInBits() > 8 * u) throw new Error("code length overflow. (" + n.getLengthInBits() + ">" + 8 * u + ")");
  for (n.getLengthInBits() + 4 <= 8 * u && n.put(0, 4); n.getLengthInBits() % 8 != 0;) {
    n.putBit(!1);
  }
  for (; !(n.getLengthInBits() >= 8 * u || (n.put(e.PAD0, 8), n.getLengthInBits() >= 8 * u));) {
    n.put(e.PAD1, 8);
  }
  return e.createBytes(n, i);
}, e.createBytes = function (o, e) {
  for (var r = 0, t = 0, i = 0, n = new Array(e.length), a = new Array(e.length), d = 0; d < e.length; d++) {
    var u = e[d].dataCount,
      s = e[d].totalCount - u;
    t = Math.max(t, u), i = Math.max(i, s), n[d] = new Array(u);
    for (var g = 0; g < n[d].length; g++) {
      n[d][g] = 255 & o.buffer[g + r];
    }
    r += u;
    var l = h.getErrorCorrectPolynomial(s),
      c = new f(n[d], l.getLength() - 1).mod(l);
    a[d] = new Array(l.getLength() - 1);
    for (g = 0; g < a[d].length; g++) {
      var m = g + c.getLength() - a[d].length;
      a[d][g] = m >= 0 ? c.get(m) : 0;
    }
  }
  var v = 0;
  for (g = 0; g < e.length; g++) {
    v += e[g].totalCount;
  }
  var p = new Array(v),
    C = 0;
  for (g = 0; g < t; g++) {
    for (d = 0; d < e.length; d++) {
      g < n[d].length && (p[C++] = n[d][g]);
    }
  }
  for (g = 0; g < i; g++) {
    for (d = 0; d < e.length; d++) {
      g < a[d].length && (p[C++] = a[d][g]);
    }
  }
  return p;
};
for (var r = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8
  }, t = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
  }, i = 0, n = 1, a = 2, d = 3, u = 4, s = 5, g = 6, l = 7, h = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function getBCHTypeInfo(o) {
      for (var e = o << 10; h.getBCHDigit(e) - h.getBCHDigit(h.G15) >= 0;) {
        e ^= h.G15 << h.getBCHDigit(e) - h.getBCHDigit(h.G15);
      }
      return (o << 10 | e) ^ h.G15_MASK;
    },
    getBCHTypeNumber: function getBCHTypeNumber(o) {
      for (var e = o << 12; h.getBCHDigit(e) - h.getBCHDigit(h.G18) >= 0;) {
        e ^= h.G18 << h.getBCHDigit(e) - h.getBCHDigit(h.G18);
      }
      return o << 12 | e;
    },
    getBCHDigit: function getBCHDigit(o) {
      for (var e = 0; 0 != o;) {
        e++, o >>>= 1;
      }
      return e;
    },
    getPatternPosition: function getPatternPosition(o) {
      return h.PATTERN_POSITION_TABLE[o - 1];
    },
    getMask: function getMask(o, e, r) {
      switch (o) {
        case i:
          return (e + r) % 2 == 0;
        case n:
          return e % 2 == 0;
        case a:
          return r % 3 == 0;
        case d:
          return (e + r) % 3 == 0;
        case u:
          return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
        case s:
          return e * r % 2 + e * r % 3 == 0;
        case g:
          return (e * r % 2 + e * r % 3) % 2 == 0;
        case l:
          return (e * r % 3 + (e + r) % 2) % 2 == 0;
        default:
          throw new Error("bad maskPattern:" + o);
      }
    },
    getErrorCorrectPolynomial: function getErrorCorrectPolynomial(o) {
      for (var e = new f([1], 0), r = 0; r < o; r++) {
        e = e.multiply(new f([1, c.gexp(r)], 0));
      }
      return e;
    },
    getLengthInBits: function getLengthInBits(o, e) {
      if (1 <= e && e < 10) switch (o) {
        case r.MODE_NUMBER:
          return 10;
        case r.MODE_ALPHA_NUM:
          return 9;
        case r.MODE_8BIT_BYTE:
        case r.MODE_KANJI:
          return 8;
        default:
          throw new Error("mode:" + o);
      } else if (e < 27) switch (o) {
        case r.MODE_NUMBER:
          return 12;
        case r.MODE_ALPHA_NUM:
          return 11;
        case r.MODE_8BIT_BYTE:
          return 16;
        case r.MODE_KANJI:
          return 10;
        default:
          throw new Error("mode:" + o);
      } else {
        if (!(e < 41)) throw new Error("type:" + e);
        switch (o) {
          case r.MODE_NUMBER:
            return 14;
          case r.MODE_ALPHA_NUM:
            return 13;
          case r.MODE_8BIT_BYTE:
            return 16;
          case r.MODE_KANJI:
            return 12;
          default:
            throw new Error("mode:" + o);
        }
      }
    },
    getLostPoint: function getLostPoint(o) {
      for (var e = o.getModuleCount(), r = 0, t = 0; t < e; t++) {
        for (var i = 0; i < e; i++) {
          for (var n = 0, a = o.isDark(t, i), d = -1; d <= 1; d++) {
            if (!(t + d < 0 || e <= t + d)) for (var u = -1; u <= 1; u++) {
              i + u < 0 || e <= i + u || 0 == d && 0 == u || a == o.isDark(t + d, i + u) && n++;
            }
          }
          n > 5 && (r += 3 + n - 5);
        }
      }
      for (t = 0; t < e - 1; t++) {
        for (i = 0; i < e - 1; i++) {
          var s = 0;
          o.isDark(t, i) && s++, o.isDark(t + 1, i) && s++, o.isDark(t, i + 1) && s++, o.isDark(t + 1, i + 1) && s++, 0 != s && 4 != s || (r += 3);
        }
      }
      for (t = 0; t < e; t++) {
        for (i = 0; i < e - 6; i++) {
          o.isDark(t, i) && !o.isDark(t, i + 1) && o.isDark(t, i + 2) && o.isDark(t, i + 3) && o.isDark(t, i + 4) && !o.isDark(t, i + 5) && o.isDark(t, i + 6) && (r += 40);
        }
      }
      for (i = 0; i < e; i++) {
        for (t = 0; t < e - 6; t++) {
          o.isDark(t, i) && !o.isDark(t + 1, i) && o.isDark(t + 2, i) && o.isDark(t + 3, i) && o.isDark(t + 4, i) && !o.isDark(t + 5, i) && o.isDark(t + 6, i) && (r += 40);
        }
      }
      var g = 0;
      for (i = 0; i < e; i++) {
        for (t = 0; t < e; t++) {
          o.isDark(t, i) && g++;
        }
      }
      return r += 10 * (Math.abs(100 * g / e / e - 50) / 5);
    }
  }, c = {
    glog: function glog(o) {
      if (o < 1) throw new Error("glog(" + o + ")");
      return c.LOG_TABLE[o];
    },
    gexp: function gexp(o) {
      for (; o < 0;) {
        o += 255;
      }
      for (; o >= 256;) {
        o -= 255;
      }
      return c.EXP_TABLE[o];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
  }, m = 0; m < 8; m++) {
  c.EXP_TABLE[m] = 1 << m;
}
for (m = 8; m < 256; m++) {
  c.EXP_TABLE[m] = c.EXP_TABLE[m - 4] ^ c.EXP_TABLE[m - 5] ^ c.EXP_TABLE[m - 6] ^ c.EXP_TABLE[m - 8];
}
for (m = 0; m < 255; m++) {
  c.LOG_TABLE[c.EXP_TABLE[m]] = m;
}
function f(o, e) {
  if (null == o.length) throw new Error(o.length + "/" + e);
  for (var r = 0; r < o.length && 0 == o[r];) {
    r++;
  }
  this.num = new Array(o.length - r + e);
  for (var t = 0; t < o.length - r; t++) {
    this.num[t] = o[t + r];
  }
}
function v(o, e) {
  this.totalCount = o, this.dataCount = e;
}
function p() {
  this.buffer = new Array(), this.length = 0;
}
function C(o) {
  return o.setFillStyle = o.setFillStyle || function (e) {
    o.fillStyle = e;
  }, o.setFontSize = o.setFontSize || function (e) {
    o.font = "".concat(e, "px");
  }, o.setTextAlign = o.setTextAlign || function (e) {
    o.textAlign = e;
  }, o.setTextBaseline = o.setTextBaseline || function (e) {
    o.textBaseline = e;
  }, o.setGlobalAlpha = o.setGlobalAlpha || function (e) {
    o.globalAlpha = e;
  }, o.setStrokeStyle = o.setStrokeStyle || function (e) {
    o.strokeStyle = e;
  }, o.setShadow = o.setShadow || function (e, r, t, i) {
    o.shadowOffsetX = e, o.shadowOffsetY = r, o.shadowBlur = t, o.shadowColor = i;
  }, o.draw = o.draw || function (o, e) {
    e && e();
  }, o.clearRect = o.clearRect || function (e, r, t, i) {
    o.draw(!1);
  }, o;
}
function b(o, e) {
  var _this = this;
  var r = this.data = "",
    t = this.size = 200;
  this.useDynamicSize = !1, this.dynamicSize = t;
  var i = this.typeNumber = -1;
  this.errorCorrectLevel = b.errorCorrectLevel.H;
  var n = this.margin = 0;
  this.areaColor = "#FFFFFF", this.backgroundColor = "rgba(255,255,255,0)", this.backgroundImageSrc = void 0;
  var a = this.backgroundImageWidth = void 0,
    d = this.backgroundImageHeight = void 0,
    u = this.backgroundImageX = void 0,
    s = this.backgroundImageY = void 0;
  this.backgroundImageAlpha = 1, this.backgroundImageBorderRadius = 0;
  var g = this.backgroundPadding = 0;
  this.foregroundColor = "#000000", this.foregroundImageSrc = void 0;
  var l = this.foregroundImageWidth = void 0,
    h = this.foregroundImageHeight = void 0,
    c = this.foregroundImageX = void 0,
    m = this.foregroundImageY = void 0,
    f = this.foregroundImagePadding = 0;
  this.foregroundImageBackgroundColor = "#FFFFFF";
  var v = this.foregroundImageBorderRadius = 0,
    p = this.foregroundImageShadowOffsetX = 0,
    k = this.foregroundImageShadowOffsetY = 0,
    y = this.foregroundImageShadowBlur = 0;
  this.foregroundImageShadowColor = "#808080";
  var w = this.foregroundPadding = 0,
    I = this.positionProbeBackgroundColor = void 0,
    B = this.positionProbeForegroundColor = void 0,
    S = this.separatorColor = void 0,
    P = this.positionAdjustBackgroundColor = void 0,
    L = this.positionAdjustForegroundColor = void 0,
    D = this.timingBackgroundColor = void 0,
    A = this.timingForegroundColor = void 0,
    E = this.typeNumberBackgroundColor = void 0,
    T = this.typeNumberForegroundColor = void 0,
    N = this.darkBlockColor = void 0;
  this.base = void 0, this.modules = [], this.moduleCount = 0, this.drawModules = [];
  var M = this.canvasContext = void 0;
  this.loadImage, this.drawReserve = !1, this.isMaked = !1, Object.defineProperties(this, {
    data: {
      get: function get() {
        if ("" === r || void 0 === r) throw console.error("[uQRCode]: data must be set!"), new b.Error("data must be set!");
        return r;
      },
      set: function set(o) {
        r = String(o);
      }
    },
    size: {
      get: function get() {
        return t;
      },
      set: function set(o) {
        t = Number(o);
      }
    },
    typeNumber: {
      get: function get() {
        return i;
      },
      set: function set(o) {
        i = Number(o);
      }
    },
    margin: {
      get: function get() {
        return n;
      },
      set: function set(o) {
        n = Number(o);
      }
    },
    backgroundImageWidth: {
      get: function get() {
        return void 0 === a ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * a : a;
      },
      set: function set(o) {
        a = Number(o);
      }
    },
    backgroundImageHeight: {
      get: function get() {
        return void 0 === d ? this.dynamicSize : this.useDynamicSize ? this.dynamicSize / this.size * d : d;
      },
      set: function set(o) {
        d = Number(o);
      }
    },
    backgroundImageX: {
      get: function get() {
        return void 0 === u ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * u : u;
      },
      set: function set(o) {
        u = Number(o);
      }
    },
    backgroundImageY: {
      get: function get() {
        return void 0 === s ? 0 : this.useDynamicSize ? this.dynamicSize / this.size * s : s;
      },
      set: function set(o) {
        s = Number(o);
      }
    },
    backgroundPadding: {
      get: function get() {
        return g;
      },
      set: function set(o) {
        g = o > 1 ? 1 : o < 0 ? 0 : o;
      }
    },
    foregroundImageWidth: {
      get: function get() {
        return void 0 === l ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * l : l;
      },
      set: function set(o) {
        l = Number(o);
      }
    },
    foregroundImageHeight: {
      get: function get() {
        return void 0 === h ? (this.dynamicSize - 2 * this.margin) / 4 : this.useDynamicSize ? this.dynamicSize / this.size * h : h;
      },
      set: function set(o) {
        h = Number(o);
      }
    },
    foregroundImageX: {
      get: function get() {
        return void 0 === c ? this.dynamicSize / 2 - this.foregroundImageWidth / 2 : this.useDynamicSize ? this.dynamicSize / this.size * c : c;
      },
      set: function set(o) {
        c = Number(o);
      }
    },
    foregroundImageY: {
      get: function get() {
        return void 0 === m ? this.dynamicSize / 2 - this.foregroundImageHeight / 2 : this.useDynamicSize ? this.dynamicSize / this.size * m : m;
      },
      set: function set(o) {
        m = Number(o);
      }
    },
    foregroundImagePadding: {
      get: function get() {
        return this.useDynamicSize ? this.dynamicSize / this.size * f : f;
      },
      set: function set(o) {
        f = Number(o);
      }
    },
    foregroundImageBorderRadius: {
      get: function get() {
        return this.useDynamicSize ? this.dynamicSize / this.size * v : v;
      },
      set: function set(o) {
        v = Number(o);
      }
    },
    foregroundImageShadowOffsetX: {
      get: function get() {
        return this.useDynamicSize ? this.dynamicSize / this.size * p : p;
      },
      set: function set(o) {
        p = Number(o);
      }
    },
    foregroundImageShadowOffsetY: {
      get: function get() {
        return this.useDynamicSize ? this.dynamicSize / this.size * k : k;
      },
      set: function set(o) {
        k = Number(o);
      }
    },
    foregroundImageShadowBlur: {
      get: function get() {
        return this.useDynamicSize ? this.dynamicSize / this.size * y : y;
      },
      set: function set(o) {
        y = Number(o);
      }
    },
    foregroundPadding: {
      get: function get() {
        return w;
      },
      set: function set(o) {
        w = o > 1 ? 1 : o < 0 ? 0 : o;
      }
    },
    positionProbeBackgroundColor: {
      get: function get() {
        return I || this.backgroundColor;
      },
      set: function set(o) {
        I = o;
      }
    },
    positionProbeForegroundColor: {
      get: function get() {
        return B || this.foregroundColor;
      },
      set: function set(o) {
        B = o;
      }
    },
    separatorColor: {
      get: function get() {
        return S || this.backgroundColor;
      },
      set: function set(o) {
        S = o;
      }
    },
    positionAdjustBackgroundColor: {
      get: function get() {
        return P || this.backgroundColor;
      },
      set: function set(o) {
        P = o;
      }
    },
    positionAdjustForegroundColor: {
      get: function get() {
        return L || this.foregroundColor;
      },
      set: function set(o) {
        L = o;
      }
    },
    timingBackgroundColor: {
      get: function get() {
        return D || this.backgroundColor;
      },
      set: function set(o) {
        D = o;
      }
    },
    timingForegroundColor: {
      get: function get() {
        return A || this.foregroundColor;
      },
      set: function set(o) {
        A = o;
      }
    },
    typeNumberBackgroundColor: {
      get: function get() {
        return E || this.backgroundColor;
      },
      set: function set(o) {
        E = o;
      }
    },
    typeNumberForegroundColor: {
      get: function get() {
        return T || this.foregroundColor;
      },
      set: function set(o) {
        T = o;
      }
    },
    darkBlockColor: {
      get: function get() {
        return N || this.foregroundColor;
      },
      set: function set(o) {
        N = o;
      }
    },
    canvasContext: {
      get: function get() {
        if (void 0 === M) throw console.error("[uQRCode]: use drawCanvas, you need to set the canvasContext!"), new b.Error("use drawCanvas, you need to set the canvasContext!");
        return M;
      },
      set: function set(o) {
        M = C(o);
      }
    }
  }), b.plugins.forEach(function (o) {
    return o(b, _this, !1);
  }), o && this.setOptions(o), e && (this.canvasContext = C(e));
}
f.prototype = {
  get: function get(o) {
    return this.num[o];
  },
  getLength: function getLength() {
    return this.num.length;
  },
  multiply: function multiply(o) {
    for (var e = new Array(this.getLength() + o.getLength() - 1), r = 0; r < this.getLength(); r++) {
      for (var t = 0; t < o.getLength(); t++) {
        e[r + t] ^= c.gexp(c.glog(this.get(r)) + c.glog(o.get(t)));
      }
    }
    return new f(e, 0);
  },
  mod: function mod(o) {
    if (this.getLength() - o.getLength() < 0) return this;
    for (var e = c.glog(this.get(0)) - c.glog(o.get(0)), r = new Array(this.getLength()), t = 0; t < this.getLength(); t++) {
      r[t] = this.get(t);
    }
    for (t = 0; t < o.getLength(); t++) {
      r[t] ^= c.gexp(c.glog(o.get(t)) + e);
    }
    return new f(r, 0).mod(o);
  }
}, v.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]], v.getRSBlocks = function (o, e) {
  var r = v.getRsBlockTable(o, e);
  if (null == r) throw new Error("bad rs block @ typeNumber:" + o + "/errorCorrectLevel:" + e);
  for (var t = r.length / 3, i = new Array(), n = 0; n < t; n++) {
    for (var a = r[3 * n + 0], d = r[3 * n + 1], u = r[3 * n + 2], s = 0; s < a; s++) {
      i.push(new v(d, u));
    }
  }
  return i;
}, v.getRsBlockTable = function (o, e) {
  switch (e) {
    case t.L:
      return v.RS_BLOCK_TABLE[4 * (o - 1) + 0];
    case t.M:
      return v.RS_BLOCK_TABLE[4 * (o - 1) + 1];
    case t.Q:
      return v.RS_BLOCK_TABLE[4 * (o - 1) + 2];
    case t.H:
      return v.RS_BLOCK_TABLE[4 * (o - 1) + 3];
    default:
      return;
  }
}, p.prototype = {
  get: function get(o) {
    var e = Math.floor(o / 8);
    return 1 == (this.buffer[e] >>> 7 - o % 8 & 1);
  },
  put: function put(o, e) {
    for (var r = 0; r < e; r++) {
      this.putBit(1 == (o >>> e - r - 1 & 1));
    }
  },
  getLengthInBits: function getLengthInBits() {
    return this.length;
  },
  putBit: function putBit(o) {
    var e = Math.floor(this.length / 8);
    this.buffer.length <= e && this.buffer.push(0), o && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
  }
}, e.errorCorrectLevel = t, b.errorCorrectLevel = e.errorCorrectLevel, b.Error = function (o) {
  this.errMsg = "[uQRCode]: " + o;
}, b.plugins = [], b.use = function (o) {
  "function" == typeof o && b.plugins.push(o);
}, b.prototype.loadImage = function (o) {
  return Promise.resolve(o);
}, b.prototype.setOptions = function (o) {
  var _this2 = this;
  var e, r, t, i, n, a, d, u, s, g, l, h, c, m, f, v, p, C, b, k, y, w, I, B, S, P, L, D, A, E, T, N, M, z, R, _, O, F, x, H, X, Y, j, W, G, K, Q, U, $, J, q, V, Z, oo, eo, ro;
  o && (Object.keys(o).forEach(function (e) {
    _this2[e] = o[e];
  }), function () {
    var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !1;
    var t;
    t = r ? o : _objectSpread({}, o);
    for (var _o in e) {
      var i = e[_o];
      null != i && (i.constructor == Object ? t[_o] = this.deepReplace(t[_o], i) : i.constructor != String || i ? t[_o] = i : t[_o] = t[_o]);
    }
  }(this, {
    data: o.data || o.text,
    size: o.size,
    useDynamicSize: o.useDynamicSize,
    typeNumber: o.typeNumber,
    errorCorrectLevel: o.errorCorrectLevel,
    margin: o.margin,
    areaColor: o.areaColor,
    backgroundColor: o.backgroundColor || (null === (e = o.background) || void 0 === e ? void 0 : e.color),
    backgroundImageSrc: o.backgroundImageSrc || (null === (r = o.background) || void 0 === r || null === (t = r.image) || void 0 === t ? void 0 : t.src),
    backgroundImageWidth: o.backgroundImageWidth || (null === (i = o.background) || void 0 === i || null === (n = i.image) || void 0 === n ? void 0 : n.width),
    backgroundImageHeight: o.backgroundImageHeight || (null === (a = o.background) || void 0 === a || null === (d = a.image) || void 0 === d ? void 0 : d.height),
    backgroundImageX: o.backgroundImageX || (null === (u = o.background) || void 0 === u || null === (s = u.image) || void 0 === s ? void 0 : s.x),
    backgroundImageY: o.backgroundImageY || (null === (g = o.background) || void 0 === g || null === (l = g.image) || void 0 === l ? void 0 : l.y),
    backgroundImageAlpha: o.backgroundImageAlpha || (null === (h = o.background) || void 0 === h || null === (c = h.image) || void 0 === c ? void 0 : c.alpha),
    backgroundImageBorderRadius: o.backgroundImageBorderRadius || (null === (m = o.background) || void 0 === m || null === (f = m.image) || void 0 === f ? void 0 : f.borderRadius),
    backgroundPadding: o.backgroundPadding,
    foregroundColor: o.foregroundColor || (null === (v = o.foreground) || void 0 === v ? void 0 : v.color),
    foregroundImageSrc: o.foregroundImageSrc || (null === (p = o.foreground) || void 0 === p || null === (C = p.image) || void 0 === C ? void 0 : C.src),
    foregroundImageWidth: o.foregroundImageWidth || (null === (b = o.foreground) || void 0 === b || null === (k = b.image) || void 0 === k ? void 0 : k.width),
    foregroundImageHeight: o.foregroundImageHeight || (null === (y = o.foreground) || void 0 === y || null === (w = y.image) || void 0 === w ? void 0 : w.height),
    foregroundImageX: o.foregroundImageX || (null === (I = o.foreground) || void 0 === I || null === (B = I.image) || void 0 === B ? void 0 : B.x),
    foregroundImageY: o.foregroundImageY || (null === (S = o.foreground) || void 0 === S || null === (P = S.image) || void 0 === P ? void 0 : P.y),
    foregroundImagePadding: o.foregroundImagePadding || (null === (L = o.foreground) || void 0 === L || null === (D = L.image) || void 0 === D ? void 0 : D.padding),
    foregroundImageBackgroundColor: o.foregroundImageBackgroundColor || (null === (A = o.foreground) || void 0 === A || null === (E = A.image) || void 0 === E ? void 0 : E.backgroundColor),
    foregroundImageBorderRadius: o.foregroundImageBorderRadius || (null === (T = o.foreground) || void 0 === T || null === (N = T.image) || void 0 === N ? void 0 : N.borderRadius),
    foregroundImageShadowOffsetX: o.foregroundImageShadowOffsetX || (null === (M = o.foreground) || void 0 === M || null === (z = M.image) || void 0 === z ? void 0 : z.shadowOffsetX),
    foregroundImageShadowOffsetY: o.foregroundImageShadowOffsetY || (null === (R = o.foreground) || void 0 === R || null === (_ = R.image) || void 0 === _ ? void 0 : _.shadowOffsetY),
    foregroundImageShadowBlur: o.foregroundImageShadowBlur || (null === (O = o.foreground) || void 0 === O || null === (F = O.image) || void 0 === F ? void 0 : F.shadowBlur),
    foregroundImageShadowColor: o.foregroundImageShadowColor || (null === (x = o.foreground) || void 0 === x || null === (H = x.image) || void 0 === H ? void 0 : H.shadowColor),
    foregroundPadding: o.foregroundPadding,
    positionProbeBackgroundColor: o.positionProbeBackgroundColor || (null === (X = o.positionProbe) || void 0 === X ? void 0 : X.backgroundColor) || (null === (Y = o.positionDetection) || void 0 === Y ? void 0 : Y.backgroundColor),
    positionProbeForegroundColor: o.positionProbeForegroundColor || (null === (j = o.positionProbe) || void 0 === j ? void 0 : j.foregroundColor) || (null === (W = o.positionDetection) || void 0 === W ? void 0 : W.foregroundColor),
    separatorColor: o.separatorColor || (null === (G = o.separator) || void 0 === G ? void 0 : G.color),
    positionAdjustBackgroundColor: o.positionAdjustBackgroundColor || (null === (K = o.positionAdjust) || void 0 === K ? void 0 : K.backgroundColor) || (null === (Q = o.alignment) || void 0 === Q ? void 0 : Q.backgroundColor),
    positionAdjustForegroundColor: o.positionAdjustForegroundColor || (null === (U = o.positionAdjust) || void 0 === U ? void 0 : U.foregroundColor) || (null === ($ = o.alignment) || void 0 === $ ? void 0 : $.foregroundColor),
    timingBackgroundColor: o.timingBackgroundColor || (null === (J = o.timing) || void 0 === J ? void 0 : J.backgroundColor),
    timingForegroundColor: o.timingForegroundColor || (null === (q = o.timing) || void 0 === q ? void 0 : q.foregroundColor),
    typeNumberBackgroundColor: o.typeNumberBackgroundColor || (null === (V = o.typeNumber) || void 0 === V ? void 0 : V.backgroundColor) || (null === (Z = o.versionInformation) || void 0 === Z ? void 0 : Z.backgroundColor),
    typeNumberForegroundColor: o.typeNumberForegroundColor || (null === (oo = o.typeNumber) || void 0 === oo ? void 0 : oo.foregroundColor) || (null === (eo = o.versionInformation) || void 0 === eo ? void 0 : eo.foregroundColor),
    darkBlockColor: o.darkBlockColor || (null === (ro = o.darkBlock) || void 0 === ro ? void 0 : ro.color)
  }, !0));
}, b.prototype.make = function () {
  var o = this.foregroundColor,
    r = this.backgroundColor,
    t = this.typeNumber,
    i = this.errorCorrectLevel,
    n = this.data,
    a = this.size,
    d = this.margin,
    u = this.useDynamicSize;
  if (o === r) throw console.error("[uQRCode]: foregroundColor and backgroundColor cannot be the same!"), new b.Error("foregroundColor and backgroundColor cannot be the same!");
  var s = new e(t, i);
  s.addData(function (o) {
    o = o.toString();
    for (var e, r = "", t = 0; t < o.length; t++) {
      (e = o.charCodeAt(t)) >= 1 && e <= 127 ? r += o.charAt(t) : e > 2047 ? (r += String.fromCharCode(224 | e >> 12 & 15), r += String.fromCharCode(128 | e >> 6 & 63), r += String.fromCharCode(128 | e >> 0 & 63)) : (r += String.fromCharCode(192 | e >> 6 & 31), r += String.fromCharCode(128 | e >> 0 & 63));
    }
    return r;
  }(n)), s.make(), this.base = s, this.typeNumber = s.typeNumber, this.modules = s.modules, this.moduleCount = s.moduleCount, this.dynamicSize = u ? Math.ceil((a - 2 * d) / s.moduleCount) * s.moduleCount + 2 * d : a, function (o) {
    var e = o.dynamicSize,
      r = o.margin,
      t = o.backgroundColor,
      i = o.backgroundPadding,
      n = o.foregroundColor,
      a = o.foregroundPadding,
      d = o.modules,
      u = o.moduleCount,
      s = (e - 2 * r) / u,
      g = s,
      l = 0;
    i > 0 && (l = g * i / 2, g -= 2 * l);
    var h = s,
      c = 0;
    a > 0 && (c = h * a / 2, h -= 2 * c);
    for (var m = 0; m < u; m++) {
      for (var f = 0; f < u; f++) {
        var v = f * s + r,
          p = m * s + r;
        if (d[m][f]) {
          var C = c,
            b = v + c,
            k = p + c,
            y = h,
            w = h;
          d[m][f] = {
            type: ["foreground"],
            color: n,
            isBlack: !0,
            isDrawn: !1,
            destX: v,
            destY: p,
            destWidth: s,
            destHeight: s,
            x: b,
            y: k,
            width: y,
            height: w,
            paddingTop: C,
            paddingRight: C,
            paddingBottom: C,
            paddingLeft: C
          };
        } else C = l, b = v + l, k = p + l, y = g, w = g, d[m][f] = {
          type: ["background"],
          color: t,
          isBlack: !1,
          isDrawn: !1,
          destX: v,
          destY: p,
          destWidth: s,
          destHeight: s,
          x: b,
          y: k,
          width: y,
          height: w,
          paddingTop: C,
          paddingRight: C,
          paddingBottom: C,
          paddingLeft: C
        };
      }
    }
  }(this), function (o) {
    var e = o.modules,
      r = o.moduleCount,
      t = o.positionProbeBackgroundColor,
      i = o.positionProbeForegroundColor,
      n = r - 7;
    [[0, 0, 1], [1, 0, 1], [2, 0, 1], [3, 0, 1], [4, 0, 1], [5, 0, 1], [6, 0, 1], [0, 1, 1], [1, 1, 0], [2, 1, 0], [3, 1, 0], [4, 1, 0], [5, 1, 0], [6, 1, 1], [0, 2, 1], [1, 2, 0], [2, 2, 1], [3, 2, 1], [4, 2, 1], [5, 2, 0], [6, 2, 1], [0, 3, 1], [1, 3, 0], [2, 3, 1], [3, 3, 1], [4, 3, 1], [5, 3, 0], [6, 3, 1], [0, 4, 1], [1, 4, 0], [2, 4, 1], [3, 4, 1], [4, 4, 1], [5, 4, 0], [6, 4, 1], [0, 5, 1], [1, 5, 0], [2, 5, 0], [3, 5, 0], [4, 5, 0], [5, 5, 0], [6, 5, 1], [0, 6, 1], [1, 6, 1], [2, 6, 1], [3, 6, 1], [4, 6, 1], [5, 6, 1], [6, 6, 1]].forEach(function (o) {
      var r = e[o[0]][o[1]],
        a = e[o[0] + n][o[1]],
        d = e[o[0]][o[1] + n];
      d.type.push("positionProbe"), a.type.push("positionProbe"), r.type.push("positionProbe"), r.color = 1 == o[2] ? i : t, a.color = 1 == o[2] ? i : t, d.color = 1 == o[2] ? i : t;
    });
  }(this), function (o) {
    var e = o.modules,
      r = o.moduleCount,
      t = o.separatorColor;
    [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7]].forEach(function (o) {
      var i = e[o[0]][o[1]],
        n = e[r - o[0] - 1][o[1]],
        a = e[o[0]][r - o[1] - 1];
      a.type.push("separator"), n.type.push("separator"), i.type.push("separator"), i.color = t, n.color = t, a.color = t;
    });
  }(this), function (o) {
    var e = o.typeNumber,
      r = o.modules,
      t = o.moduleCount,
      i = o.foregroundColor,
      n = o.backgroundColor,
      a = o.positionAdjustForegroundColor,
      d = o.positionAdjustBackgroundColor,
      u = o.timingForegroundColor,
      s = o.timingBackgroundColor;
    var g = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]][e - 1];
    if (g) {
      var _o2 = [[-2, -2, 1], [-1, -2, 1], [0, -2, 1], [1, -2, 1], [2, -2, 1], [-2, -1, 1], [-1, -1, 0], [0, -1, 0], [1, -1, 0], [2, -1, 1], [-2, 0, 1], [-1, 0, 0], [0, 0, 1], [1, 0, 0], [2, 0, 1], [-2, 1, 1], [-1, 1, 0], [0, 1, 0], [1, 1, 0], [2, 1, 1], [-2, 2, 1], [-1, 2, 1], [0, 2, 1], [1, 2, 1], [2, 2, 1]],
        _e = g.length;
      for (var _l = 0; _l < _e; _l++) {
        var _loop = function _loop(_h) {
          var _x$y = {
              x: g[_l],
              y: g[_h]
            },
            e = _x$y.x,
            c = _x$y.y;
          e < 9 && c < 9 || e > t - 9 - 1 && c < 9 || c > t - 9 - 1 && e < 9 || _o2.forEach(function (o) {
            var t = r[e + o[0]][c + o[1]];
            t.type.push("positionAdjust"), t.type.includes("timing") ? 1 == o[2] ? t.color = a == i ? u : a : t.color = a == i && d == n ? s : d : t.color = 1 == o[2] ? a : d;
          });
        };
        for (var _h = 0; _h < _e; _h++) {
          _loop(_h);
        }
      }
    }
  }(this), function (o) {
    var e = o.modules,
      r = o.moduleCount,
      t = o.timingForegroundColor,
      i = o.timingBackgroundColor,
      n = r - 16;
    for (var _o3 = 0; _o3 < n; _o3++) {
      var a = e[6][8 + _o3],
        d = e[8 + _o3][6];
      a.type.push("timing"), d.type.push("timing"), a.color = 1 & _o3 ^ 1 ? t : i, d.color = 1 & _o3 ^ 1 ? t : i;
    }
  }(this), function (o) {
    var e = o.modules,
      r = o.moduleCount,
      t = o.darkBlockColor;
    var i = e[r - 7 - 1][8];
    i.type.push("darkBlock"), i.color = t;
  }(this), function (o) {
    var e = o.typeNumber,
      r = o.modules,
      t = o.moduleCount,
      i = o.typeNumberBackgroundColor,
      n = o.typeNumberForegroundColor;
    if (e < 7) return r;
    var a = [0, 0, 0, 0, 0, 0, 0, "000111110010010100", "001000010110111100", "001001101010011001", "001010010011010011", "001011101111110110", "001100011101100010", "001101100001000111", "001110011000001101", "001111100100101000", "010000101101111000", "010001010001011101", "010010101000010111", "010011010100110010", "010100100110100110", "010101011010000011", "010110100011001001", "010111011111101100", "011000111011000100", "011001000111100001", "011010111110101011", "011011000010001110", "011100110000011010", "011101001100111111", "011110110101110101", "011111001001010000", "100000100111010101", "100001011011110000", "100010100010111010", "100011011110011111", "100100101100001011", "100101010000101110", "100110101001100100", "100111010101000001", "101000110001101001"];
    var d = a[e] + a[e],
      u = [t - 11, t - 10, t - 9];
    [[5, u[2]], [5, u[1]], [5, u[0]], [4, u[2]], [4, u[1]], [4, u[0]], [3, u[2]], [3, u[1]], [3, u[0]], [2, u[2]], [2, u[1]], [2, u[0]], [1, u[2]], [1, u[1]], [1, u[0]], [0, u[2]], [0, u[1]], [0, u[0]], [u[2], 5], [u[1], 5], [u[0], 5], [u[2], 4], [u[1], 4], [u[0], 4], [u[2], 3], [u[1], 3], [u[0], 3], [u[2], 2], [u[1], 2], [u[0], 2], [u[2], 1], [u[1], 1], [u[0], 1], [u[2], 0], [u[1], 0], [u[0], 0]].forEach(function (o, e) {
      var t = r[o[0]][o[1]];
      t.type.push("typeNumber"), t.color = "1" == d[e] ? n : i;
    });
  }(this), this.isMaked = !0, this.drawModules = [];
}, b.prototype.getDrawModules = function () {
  if (this.drawModules && this.drawModules.length > 0) return this.drawModules;
  var o = this.drawModules = [],
    e = this.modules,
    r = this.moduleCount,
    t = this.dynamicSize,
    i = this.areaColor,
    n = this.backgroundImageSrc,
    a = this.backgroundImageX,
    d = this.backgroundImageY,
    u = this.backgroundImageWidth,
    s = this.backgroundImageHeight,
    g = this.backgroundImageAlpha,
    l = this.backgroundImageBorderRadius,
    h = this.foregroundImageSrc,
    c = this.foregroundImageX,
    m = this.foregroundImageY,
    f = this.foregroundImageWidth,
    v = this.foregroundImageHeight,
    p = this.foregroundImagePadding,
    C = this.foregroundImageBackgroundColor,
    b = this.foregroundImageBorderRadius,
    k = this.foregroundImageShadowOffsetX,
    y = this.foregroundImageShadowOffsetY,
    w = this.foregroundImageShadowBlur,
    I = this.foregroundImageShadowColor;
  i && o.push({
    name: "area",
    type: "area",
    color: i,
    x: 0,
    y: 0,
    width: t,
    height: t
  }), n && o.push({
    name: "backgroundImage",
    type: "image",
    imageSrc: n,
    mappingName: "backgroundImageSrc",
    x: a,
    y: d,
    width: u,
    height: s,
    alpha: g,
    borderRadius: l
  });
  for (var B = 0; B < r; B++) {
    for (var S = 0; S < r; S++) {
      var P = e[B][S];
      P.isDrawn || (P.type.includes("foreground") ? o.push({
        name: "foreground",
        type: "tile",
        color: P.color,
        destX: P.destX,
        destY: P.destY,
        destWidth: P.destWidth,
        destHeight: P.destHeight,
        x: P.x,
        y: P.y,
        width: P.width,
        height: P.height,
        paddingTop: P.paddingTop,
        paddingRight: P.paddingRight,
        paddingBottom: P.paddingBottom,
        paddingLeft: P.paddingLeft,
        rowIndex: B,
        colIndex: S
      }) : o.push({
        name: "background",
        type: "tile",
        color: P.color,
        destX: P.destX,
        destY: P.destY,
        destWidth: P.destWidth,
        destHeight: P.destHeight,
        x: P.x,
        y: P.y,
        width: P.width,
        height: P.height,
        paddingTop: P.paddingTop,
        paddingRight: P.paddingRight,
        paddingBottom: P.paddingBottom,
        paddingLeft: P.paddingLeft,
        rowIndex: B,
        colIndex: S
      }), P.isDrawn = !0);
    }
  }
  return h && o.push({
    name: "foregroundImage",
    type: "image",
    imageSrc: h,
    mappingName: "foregroundImageSrc",
    x: c,
    y: m,
    width: f,
    height: v,
    padding: p,
    backgroundColor: C,
    borderRadius: b,
    shadowOffsetX: k,
    shadowOffsetY: y,
    shadowBlur: w,
    shadowColor: I
  }), o;
}, b.prototype.isBlack = function (o, e) {
  var r = this.moduleCount;
  return !(0 > o || 0 > e || o >= r || e >= r) && this.modules[o][e].isBlack;
}, b.prototype.drawCanvas = function () {
  var _this3 = this;
  var o = this.isMaked,
    e = this.canvasContext,
    r = this.useDynamicSize,
    t = this.dynamicSize,
    i = this.foregroundColor,
    n = this.foregroundPadding,
    a = this.backgroundColor,
    d = this.backgroundPadding,
    u = this.drawReserve,
    s = this.margin;
  if (!o) return console.error("[uQRCode]: please execute the make method first!"), Promise.reject(new b.Error("please execute the make method first!"));
  var g = this.getDrawModules(),
    l = /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(o, r) {
        var i, n, a, d, s, l, h, c, m, f, v, p, C, k;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                e.clearRect(0, 0, t, t), e.draw(!1);
                i = 0;
              case 3:
                if (!(i < g.length)) {
                  _context.next = 48;
                  break;
                }
                n = g[i];
                _context.t0 = (e.save(), n.type);
                _context.next = _context.t0 === "area" ? 8 : _context.t0 === "tile" ? 10 : _context.t0 === "image" ? 13 : 44;
                break;
              case 8:
                e.setFillStyle(n.color), e.fillRect(n.x, n.y, n.width, n.height);
                return _context.abrupt("break", 44);
              case 10:
                a = n.x, d = n.y, s = n.width, l = n.height;
                e.setFillStyle(n.color), e.fillRect(a, d, s, l);
                return _context.abrupt("break", 44);
              case 13:
                if (!("backgroundImage" === n.name)) {
                  _context.next = 28;
                  break;
                }
                a = Math.round(n.x), d = Math.round(n.y), s = Math.round(n.width), l = Math.round(n.height);
                s < 2 * (c = Math.round(n.borderRadius)) && (c = s / 2), l < 2 * c && (c = l / 2), e.setGlobalAlpha(n.alpha), c > 0 && (e.beginPath(), e.moveTo(a + c, d), e.arcTo(a + s, d, a + s, d + l, c), e.arcTo(a + s, d + l, a, d + l, c), e.arcTo(a, d + l, a, d, c), e.arcTo(a, d, a + s, d, c), e.closePath(), e.setStrokeStyle("rgba(0,0,0,0)"), e.stroke(), e.clip());
                _context.prev = 16;
                _context.next = 19;
                return _this3.loadImage(n.imageSrc);
              case 19:
                h = _context.sent;
                e.drawImage(h, a, d, s, l);
                _context.next = 26;
                break;
              case 23:
                _context.prev = 23;
                _context.t1 = _context["catch"](16);
                throw console.error("[uQRCode]: ".concat(n.mappingName, " invalid!")), new b.Error("".concat(n.mappingName, " invalid!"));
              case 26:
                _context.next = 44;
                break;
              case 28:
                if (!("foregroundImage" === n.name)) {
                  _context.next = 44;
                  break;
                }
                a = Math.round(n.x), d = Math.round(n.y), s = Math.round(n.width), l = Math.round(n.height);
                m = Math.round(n.padding);
                s < 2 * (c = Math.round(n.borderRadius)) && (c = s / 2), l < 2 * c && (c = l / 2);
                f = a - m, v = d - m, p = s + 2 * m, C = l + 2 * m, k = Math.round(p / s * c);
                p < 2 * k && (k = p / 2), C < 2 * k && (k = C / 2), e.save(), e.setShadow(n.shadowOffsetX, n.shadowOffsetY, n.shadowBlur, n.shadowColor), k > 0 ? (e.beginPath(), e.moveTo(f + k, v), e.arcTo(f + p, v, f + p, v + C, k), e.arcTo(f + p, v + C, f, v + C, k), e.arcTo(f, v + C, f, v, k), e.arcTo(f, v, f + p, v, k), e.closePath(), e.setFillStyle(n.backgroundColor), e.fill()) : (e.setFillStyle(n.backgroundColor), e.fillRect(f, v, p, C)), e.restore(), e.save(), k > 0 ? (e.beginPath(), e.moveTo(f + k, v), e.arcTo(f + p, v, f + p, v + C, k), e.arcTo(f + p, v + C, f, v + C, k), e.arcTo(f, v + C, f, v, k), e.arcTo(f, v, f + p, v, k), e.closePath(), e.setFillStyle(m > 0 ? n.backgroundColor : "rgba(0,0,0,0)"), e.fill()) : (e.setFillStyle(m > 0 ? n.backgroundColor : "rgba(0,0,0,0)"), e.fillRect(f, v, p, C)), e.restore(), c > 0 && (e.beginPath(), e.moveTo(a + c, d), e.arcTo(a + s, d, a + s, d + l, c), e.arcTo(a + s, d + l, a, d + l, c), e.arcTo(a, d + l, a, d, c), e.arcTo(a, d, a + s, d, c), e.closePath(), e.setStrokeStyle("rgba(0,0,0,0)"), e.stroke(), e.clip());
                _context.prev = 34;
                _context.next = 37;
                return _this3.loadImage(n.imageSrc);
              case 37:
                h = _context.sent;
                e.drawImage(h, a, d, s, l);
                _context.next = 44;
                break;
              case 41:
                _context.prev = 41;
                _context.t2 = _context["catch"](34);
                throw console.error("[uQRCode]: ".concat(n.mappingName, " invalid!")), new b.Error("".concat(n.mappingName, " invalid!"));
              case 44:
                u && e.draw(!0), e.restore();
              case 45:
                i++;
                _context.next = 3;
                break;
              case 48:
                e.draw(!0), setTimeout(o, 150);
                _context.next = 56;
                break;
              case 51:
                _context.prev = 51;
                _context.t3 = _context["catch"](0);
                if (_context.t3 instanceof b.Error) {
                  _context.next = 55;
                  break;
                }
                throw _context.t3;
              case 55:
                r(_context.t3);
              case 56:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 51], [16, 23], [34, 41]]);
      }));
      return function l(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  return new Promise(function (o, e) {
    l(o, e);
  });
}, b.prototype.draw = function () {
  return this.drawCanvas();
}, b.prototype.register = function (o) {
  o && o(b, this, !0);
};

/***/ }),

/***/ 228:
/*!********************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/Sansnn-uQRCode/common/queue.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queueLoadImage = exports.queueDraw = void 0;
function Queue() {
  var waitingQueue = this.waitingQueue = [];
  var isRunning = this.isRunning = false; // 记录是否有未完成的任务

  function execute(task, resolve, reject) {
    task().then(function (data) {
      resolve(data);
    }).catch(function (e) {
      reject(e);
    }).finally(function () {
      // 等待任务队列中如果有任务，则触发它；否则设置isRunning = false,表示无任务状态
      if (waitingQueue.length) {
        var next = waitingQueue.shift();
        execute(next.task, next.resolve, next.reject);
      } else {
        isRunning = false;
      }
    });
  }
  this.exec = function (task) {
    return new Promise(function (resolve, reject) {
      if (isRunning) {
        waitingQueue.push({
          task: task,
          resolve: resolve,
          reject: reject
        });
      } else {
        isRunning = true;
        execute(task, resolve, reject);
      }
    });
  };
}

/* 队列实例，某些平台一起使用多个组件时需要通过队列逐一绘制，否则部分绘制方法异常，nvue端的iOS gcanvas尤其明显，在不通过队列绘制时会出现图片丢失的情况 */
var queueDraw = new Queue();
exports.queueDraw = queueDraw;
var queueLoadImage = new Queue();
exports.queueLoadImage = queueLoadImage;

/***/ }),

/***/ 229:
/*!********************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/Sansnn-uQRCode/common/cache.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheImageList = void 0;
var cacheImageList = [];
exports.cacheImageList = cacheImageList;

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 244:
/*!*************************************************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimation = createAnimation;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {
    (0, _classCallCheck2.default)(this, MPAnimation);
    this.options = options;
    // 在iOS10+QQ小程序平台下，传给原生的对象一定是个普通对象而不是Proxy对象，否则会报parameter should be Object instead of ProxyObject的错误
    this.animation = uni.createAnimation(_objectSpread({}, options));
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  (0, _createClass2.default)(MPAnimation, [{
    key: "_nvuePushAnimates",
    value: function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    }
  }, {
    key: "_animateRun",
    value: function _animateRun() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles
        }, config), function (res) {
          resolve();
        });
      });
    }
  }, {
    key: "_nvueNextAnimate",
    value: function _nvueNextAnimate(animates) {
      var _this2 = this;
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var styles = obj.styles,
          config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.animation.step(config);
      return this;
    }
  }, {
    key: "run",
    value: function run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);
    }
  }]);
  return MPAnimation;
}();
var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];
var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {
    var _this$animation;
    (_this$animation = this.animation)[type].apply(_this$animation, arguments);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"luckylucky","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"luckylucky","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"luckylucky","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"luckylucky","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/pages.json ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 270:
/*!************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/node_modules/dayjs/locale/zh-cn.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
!function (e, _) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = _(__webpack_require__(/*! dayjs */ 271)) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! dayjs */ 271)], __WEBPACK_AMD_DEFINE_FACTORY__ = (_),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function (e) {
  "use strict";

  function _(e) {
    return e && "object" == _typeof(e) && "default" in e ? e : {
      default: e
    };
  }
  var t = _(e),
    d = {
      name: "zh-cn",
      weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
      weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
      weekdaysMin: "日_一_二_三_四_五_六".split("_"),
      months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
      monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
      ordinal: function ordinal(e, _) {
        return "W" === _ ? e + "周" : e + "日";
      },
      weekStart: 1,
      yearStart: 4,
      formats: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "YYYY/MM/DD",
        LL: "YYYY年M月D日",
        LLL: "YYYY年M月D日Ah点mm分",
        LLLL: "YYYY年M月D日ddddAh点mm分",
        l: "YYYY/M/D",
        ll: "YYYY年M月D日",
        lll: "YYYY年M月D日 HH:mm",
        llll: "YYYY年M月D日dddd HH:mm"
      },
      relativeTime: {
        future: "%s内",
        past: "%s前",
        s: "几秒",
        m: "1 分钟",
        mm: "%d 分钟",
        h: "1 小时",
        hh: "%d 小时",
        d: "1 天",
        dd: "%d 天",
        M: "1 个月",
        MM: "%d 个月",
        y: "1 年",
        yy: "%d 年"
      },
      meridiem: function meridiem(e, _) {
        var t = 100 * e + _;
        return t < 600 ? "凌晨" : t < 900 ? "早上" : t < 1100 ? "上午" : t < 1300 ? "中午" : t < 1800 ? "下午" : "晚上";
      }
    };
  return t.default.locale(d, null, !0), d;
});

/***/ }),

/***/ 271:
/*!*********************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/node_modules/dayjs/dayjs.min.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  var t = 1e3,
    e = 6e4,
    n = 36e5,
    r = "millisecond",
    i = "second",
    s = "minute",
    u = "hour",
    a = "day",
    o = "week",
    c = "month",
    f = "quarter",
    h = "year",
    d = "date",
    l = "Invalid Date",
    $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
    y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
    M = {
      name: "en",
      weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
      months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
      ordinal: function ordinal(t) {
        var e = ["th", "st", "nd", "rd"],
          n = t % 100;
        return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
      }
    },
    m = function m(t, e, n) {
      var r = String(t);
      return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    },
    v = {
      s: m,
      z: function z(t) {
        var e = -t.utcOffset(),
          n = Math.abs(e),
          r = Math.floor(n / 60),
          i = n % 60;
        return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
      },
      m: function t(e, n) {
        if (e.date() < n.date()) return -t(n, e);
        var r = 12 * (n.year() - e.year()) + (n.month() - e.month()),
          i = e.clone().add(r, c),
          s = n - i < 0,
          u = e.clone().add(r + (s ? -1 : 1), c);
        return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
      },
      a: function a(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
      },
      p: function p(t) {
        return {
          M: c,
          y: h,
          w: o,
          d: a,
          D: d,
          h: u,
          m: s,
          s: i,
          ms: r,
          Q: f
        }[t] || String(t || "").toLowerCase().replace(/s$/, "");
      },
      u: function u(t) {
        return void 0 === t;
      }
    },
    g = "en",
    D = {};
  D[g] = M;
  var p = "$isDayjsObject",
    S = function S(t) {
      return t instanceof _ || !(!t || !t[p]);
    },
    w = function t(e, n, r) {
      var i;
      if (!e) return g;
      if ("string" == typeof e) {
        var s = e.toLowerCase();
        D[s] && (i = s), n && (D[s] = n, i = s);
        var u = e.split("-");
        if (!i && u.length > 1) return t(u[0]);
      } else {
        var a = e.name;
        D[a] = e, i = a;
      }
      return !r && i && (g = i), i || !r && g;
    },
    O = function O(t, e) {
      if (S(t)) return t.clone();
      var n = "object" == _typeof(e) ? e : {};
      return n.date = t, n.args = arguments, new _(n);
    },
    b = v;
  b.l = w, b.i = S, b.w = function (t, e) {
    return O(t, {
      locale: e.$L,
      utc: e.$u,
      x: e.$x,
      $offset: e.$offset
    });
  };
  var _ = function () {
      function M(t) {
        this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
      }
      var m = M.prototype;
      return m.parse = function (t) {
        this.$d = function (t) {
          var e = t.date,
            n = t.utc;
          if (null === e) return new Date(NaN);
          if (b.u(e)) return new Date();
          if (e instanceof Date) return new Date(e);
          if ("string" == typeof e && !/Z$/i.test(e)) {
            var r = e.match($);
            if (r) {
              var i = r[2] - 1 || 0,
                s = (r[7] || "0").substring(0, 3);
              return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
            }
          }
          return new Date(e);
        }(t), this.init();
      }, m.init = function () {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, m.$utils = function () {
        return b;
      }, m.isValid = function () {
        return !(this.$d.toString() === l);
      }, m.isSame = function (t, e) {
        var n = O(t);
        return this.startOf(e) <= n && n <= this.endOf(e);
      }, m.isAfter = function (t, e) {
        return O(t) < this.startOf(e);
      }, m.isBefore = function (t, e) {
        return this.endOf(e) < O(t);
      }, m.$g = function (t, e, n) {
        return b.u(t) ? this[e] : this.set(n, t);
      }, m.unix = function () {
        return Math.floor(this.valueOf() / 1e3);
      }, m.valueOf = function () {
        return this.$d.getTime();
      }, m.startOf = function (t, e) {
        var n = this,
          r = !!b.u(e) || e,
          f = b.p(t),
          l = function l(t, e) {
            var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
            return r ? i : i.endOf(a);
          },
          $ = function $(t, e) {
            return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n);
          },
          y = this.$W,
          M = this.$M,
          m = this.$D,
          v = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case h:
            return r ? l(1, 0) : l(31, 11);
          case c:
            return r ? l(1, M) : l(0, M + 1);
          case o:
            var g = this.$locale().weekStart || 0,
              D = (y < g ? y + 7 : y) - g;
            return l(r ? m - D : m + (6 - D), M);
          case a:
          case d:
            return $(v + "Hours", 0);
          case u:
            return $(v + "Minutes", 1);
          case s:
            return $(v + "Seconds", 2);
          case i:
            return $(v + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, m.endOf = function (t) {
        return this.startOf(t, !1);
      }, m.$set = function (t, e) {
        var n,
          o = b.p(t),
          f = "set" + (this.$u ? "UTC" : ""),
          l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o],
          $ = o === a ? this.$D + (e - this.$W) : e;
        if (o === c || o === h) {
          var y = this.clone().set(d, 1);
          y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
        } else l && this.$d[l]($);
        return this.init(), this;
      }, m.set = function (t, e) {
        return this.clone().$set(t, e);
      }, m.get = function (t) {
        return this[b.p(t)]();
      }, m.add = function (r, f) {
        var d,
          l = this;
        r = Number(r);
        var $ = b.p(f),
          y = function y(t) {
            var e = O(l);
            return b.w(e.date(e.date() + Math.round(t * r)), l);
          };
        if ($ === c) return this.set(c, this.$M + r);
        if ($ === h) return this.set(h, this.$y + r);
        if ($ === a) return y(1);
        if ($ === o) return y(7);
        var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1,
          m = this.$d.getTime() + r * M;
        return b.w(m, this);
      }, m.subtract = function (t, e) {
        return this.add(-1 * t, e);
      }, m.format = function (t) {
        var e = this,
          n = this.$locale();
        if (!this.isValid()) return n.invalidDate || l;
        var r = t || "YYYY-MM-DDTHH:mm:ssZ",
          i = b.z(this),
          s = this.$H,
          u = this.$m,
          a = this.$M,
          o = n.weekdays,
          c = n.months,
          f = n.meridiem,
          h = function h(t, n, i, s) {
            return t && (t[n] || t(e, r)) || i[n].slice(0, s);
          },
          d = function d(t) {
            return b.s(s % 12 || 12, t, "0");
          },
          $ = f || function (t, e, n) {
            var r = t < 12 ? "AM" : "PM";
            return n ? r.toLowerCase() : r;
          };
        return r.replace(y, function (t, r) {
          return r || function (t) {
            switch (t) {
              case "YY":
                return String(e.$y).slice(-2);
              case "YYYY":
                return b.s(e.$y, 4, "0");
              case "M":
                return a + 1;
              case "MM":
                return b.s(a + 1, 2, "0");
              case "MMM":
                return h(n.monthsShort, a, c, 3);
              case "MMMM":
                return h(c, a);
              case "D":
                return e.$D;
              case "DD":
                return b.s(e.$D, 2, "0");
              case "d":
                return String(e.$W);
              case "dd":
                return h(n.weekdaysMin, e.$W, o, 2);
              case "ddd":
                return h(n.weekdaysShort, e.$W, o, 3);
              case "dddd":
                return o[e.$W];
              case "H":
                return String(s);
              case "HH":
                return b.s(s, 2, "0");
              case "h":
                return d(1);
              case "hh":
                return d(2);
              case "a":
                return $(s, u, !0);
              case "A":
                return $(s, u, !1);
              case "m":
                return String(u);
              case "mm":
                return b.s(u, 2, "0");
              case "s":
                return String(e.$s);
              case "ss":
                return b.s(e.$s, 2, "0");
              case "SSS":
                return b.s(e.$ms, 3, "0");
              case "Z":
                return i;
            }
            return null;
          }(t) || i.replace(":", "");
        });
      }, m.utcOffset = function () {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, m.diff = function (r, d, l) {
        var $,
          y = this,
          M = b.p(d),
          m = O(r),
          v = (m.utcOffset() - this.utcOffset()) * e,
          g = this - m,
          D = function D() {
            return b.m(y, m);
          };
        switch (M) {
          case h:
            $ = D() / 12;
            break;
          case c:
            $ = D();
            break;
          case f:
            $ = D() / 3;
            break;
          case o:
            $ = (g - v) / 6048e5;
            break;
          case a:
            $ = (g - v) / 864e5;
            break;
          case u:
            $ = g / n;
            break;
          case s:
            $ = g / e;
            break;
          case i:
            $ = g / t;
            break;
          default:
            $ = g;
        }
        return l ? $ : b.a($);
      }, m.daysInMonth = function () {
        return this.endOf(c).$D;
      }, m.$locale = function () {
        return D[this.$L];
      }, m.locale = function (t, e) {
        if (!t) return this.$L;
        var n = this.clone(),
          r = w(t, e, !0);
        return r && (n.$L = r), n;
      }, m.clone = function () {
        return b.w(this.$d, this);
      }, m.toDate = function () {
        return new Date(this.valueOf());
      }, m.toJSON = function () {
        return this.isValid() ? this.toISOString() : null;
      }, m.toISOString = function () {
        return this.$d.toISOString();
      }, m.toString = function () {
        return this.$d.toUTCString();
      }, M;
    }(),
    k = _.prototype;
  return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function (t) {
    k[t[1]] = function (e) {
      return this.$g(e, t[0], t[1]);
    };
  }), O.extend = function (t, e) {
    return t.$i || (t(e, _, O), t.$i = !0), O;
  }, O.locale = w, O.isDayjs = S, O.unix = function (t) {
    return O(1e3 * t);
  }, O.en = D[g], O.Ls = D, O.p = {}, O;
});

/***/ }),

/***/ 272:
/*!****************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/node_modules/dayjs/plugin/dayOfYear.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
!function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  return function (e, t, n) {
    t.prototype.dayOfYear = function (e) {
      var t = Math.round((n(this).startOf("day") - n(this).startOf("year")) / 864e5) + 1;
      return null == e ? t : this.add(e - t, "day");
    };
  };
});

/***/ }),

/***/ 273:
/*!*******************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/node_modules/dayjs/plugin/relativeTime.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
!function (r, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  return function (r, e, t) {
    r = r || {};
    var n = e.prototype,
      o = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
    function i(r, e, t, o) {
      return n.fromToBase(r, e, t, o);
    }
    t.en.relativeTime = o, n.fromToBase = function (e, n, i, d, u) {
      for (var f, a, s, l = i.$locale().relativeTime || o, h = r.thresholds || [{
          l: "s",
          r: 44,
          d: "second"
        }, {
          l: "m",
          r: 89
        }, {
          l: "mm",
          r: 44,
          d: "minute"
        }, {
          l: "h",
          r: 89
        }, {
          l: "hh",
          r: 21,
          d: "hour"
        }, {
          l: "d",
          r: 35
        }, {
          l: "dd",
          r: 25,
          d: "day"
        }, {
          l: "M",
          r: 45
        }, {
          l: "MM",
          r: 10,
          d: "month"
        }, {
          l: "y",
          r: 17
        }, {
          l: "yy",
          d: "year"
        }], m = h.length, c = 0; c < m; c += 1) {
        var y = h[c];
        y.d && (f = d ? t(e).diff(i, y.d, !0) : i.diff(e, y.d, !0));
        var p = (r.rounding || Math.round)(Math.abs(f));
        if (s = f > 0, p <= y.r || !y.r) {
          p <= 1 && c > 0 && (y = h[c - 1]);
          var v = l[y.l];
          u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n, y.l, s);
          break;
        }
      }
      if (n) return a;
      var M = s ? l.future : l.past;
      return "function" == typeof M ? M(a) : M.replace("%s", a);
    }, n.to = function (r, e) {
      return i(r, e, this, !0);
    }, n.from = function (r, e) {
      return i(r, e, this);
    };
    var d = function d(r) {
      return r.$u ? t.utc() : t();
    };
    n.toNow = function (r) {
      return this.to(d(this), r);
    }, n.fromNow = function (r) {
      return this.from(d(this), r);
    };
  };
});

/***/ }),

/***/ 274:
/*!********************************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/node_modules/dayjs/plugin/quarterOfYear.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
!function (t, n) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  var t = "month",
    n = "quarter";
  return function (e, i) {
    var r = i.prototype;
    r.quarter = function (t) {
      return this.$utils().u(t) ? Math.ceil((this.month() + 1) / 3) : this.month(this.month() % 3 + 3 * (t - 1));
    };
    var s = r.add;
    r.add = function (e, i) {
      return e = Number(e), this.$utils().p(i) === n ? this.add(3 * e, t) : s.bind(this)(e, i);
    };
    var u = r.startOf;
    r.startOf = function (e, i) {
      var r = this.$utils(),
        s = !!r.u(i) || i;
      if (r.p(e) === n) {
        var o = this.quarter() - 1;
        return s ? this.month(3 * o).startOf(t).startOf("day") : this.month(3 * o + 2).endOf(t).endOf("day");
      }
      return u.bind(this)(e, i);
    };
  };
});

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!****************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/utils/utils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var formatNumber = function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : "0".concat(n);
};
var _default = {
  formatTime: function formatTime(date, format) {
    var year = new Date(date).getFullYear();
    var month = new Date(date).getMonth() + 1;
    var day = new Date(date).getDate();
    var hour = new Date(date).getHours();
    var minute = new Date(date).getMinutes();
    var second = new Date(date).getSeconds();
    if (format === 'day') {
      return "".concat([year, month, day].map(formatNumber).join('-'));
    }
    return "".concat([year, month, day].map(formatNumber).join('-'), " ").concat([hour, minute, second].map(formatNumber).join(':'));
  },
  formatNumber: function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : "0".concat(n);
  },
  getDays: function getDays(year, months) {
    // let baseUrl = process.env.NODE_ENV === 'development' ? '' : 'https://opendata.baidu.com';
    var url = 'https://opendata.baidu.com/data/inner?type=json&resource_id=52109&apiType=yearMonthData&';
    var allDays = [],
      promises = [];
    months.map(function (item, i) {
      promises.push(new Promise(function (resolve, reject) {
        wx.request({
          url: url + "query=".concat(year, "\u5E74").concat(item, "\u6708"),
          success: function success(res) {
            var data = res.data.Result[0].DisplayData.resultData.tplData.data.almanac;
            resolve(data);
          },
          fail: function fail(err) {
            console.log(err);
            reject(err);
          }
        });
      }));
    });
    return Promise.all(promises).then(function (data) {
      var _ref;
      allDays = (_ref = []).concat.apply(_ref, (0, _toConsumableArray2.default)(data));
      return allDays;
    }).catch(function (error) {
      console.log(error);
    });
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 33:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 34:
/*!****************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/store/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 35));
// 页面路径：store/index.js

var dayjs = __webpack_require__(/*! dayjs */ 271);
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  state: {
    url: 'https://opendata.baidu.com/data/inner?type=json&resource_id=52109&apiType=yearMonthData&',
    year: dayjs().year(),
    today: dayjs().format('YYYY-MM-DD'),
    fullYearMonths: ['2', '5', '8', '11'],
    fullYearDays: []
  },
  mutations: {
    setFullYearDays: function setFullYearDays(state, res) {
      state.fullYearDays = res;
    }
  }
});
var _default = store;
exports.default = _default;

/***/ }),

/***/ 35:
/*!**************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vuex3/dist/vuex.common.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * vuex v3.6.2
 * (c) 2021 Evan You
 * @license MIT
 */


function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((true)) {
      console.warn(
        "[vuex] trying to unregister module '" + key + "', which is " +
        "not registered"
      );
    }
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  if (parent) {
    return parent.hasChild(key)
  }

  return false
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype[[104,111,116,85,112,100,97,116,101].map(function (item) {return String.fromCharCode(item)}).join('')] = function (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept another params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index_cjs = {
  Store: Store,
  install: install,
  version: '3.6.2',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

module.exports = index_cjs;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 58:
/*!**************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data/hoursInfo.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhi = exports.hours = exports.gan = exports.daysInfo = exports.animals = void 0;
var gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
exports.gan = gan;
var zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
exports.zhi = zhi;
var animals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
exports.animals = animals;
var hours = ['23:00 - 00:59', '01:00 - 02:59', '03:00 - 04:59', '05:00 - 06:59', '07:00 - 08:59', '09:00 - 10:59', '11:00 - 12:59', '13:00 - 14:59', '15:00 - 16:59', '17:00 - 18:59', '19:00 - 20:59', '21:00 - 22:59'];
exports.hours = hours;
var daysInfo = [{
  _Date: "甲子",
  Yi0: "结婚 开业 祈福 安葬",
  Ji0: "乘船 造船",
  Yi1: "结婚 出行 祈福 安葬 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 酬神 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji3: "出行 赴任",
  Yi4: "结婚 交易 开业 安床 求财",
  Ji4: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi5: "结婚 交易 搬新房 开业 祈福 求子",
  Ji5: "出行 赴任 安葬 修造 开光",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "结婚 搬新房 祈福 安葬 祭祀 修造 酬神 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 交易 开业 安床 求子 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "搬家 搬新房 开业 安床 盖屋 修造 作灶 酬神 求财",
  Ji9: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi10: "结婚 出行 搬家 安葬 收养子女 求财",
  Ji10: "赴任 诉讼",
  Yi11: "结婚 搬家 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji11: "出行 赴任 求财"
}, {
  _Date: "乙丑",
  Yi0: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji1: "乘船 造船",
  Yi2: "结婚 交易 搬新房 开业 安葬 修造",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 搬新房 开业 赴任 祈福 安葬 祭祀 求子 求财",
  Ji3: "-",
  Yi4: "-",
  Ji4: "动土 修造",
  Yi5: "结婚 搬家 交易 开业 祈福 安床 盖屋 修造 求子 求财",
  Ji5: "出行 赴任",
  Yi6: "结婚 交易 搬新房 开业 安葬 求子 求财",
  Ji6: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 开光 斋醮",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 赴任 祈福 求子 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji9: "出行 赴任 修造",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬 修造",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "结婚 出行 搬新房 开业 赴任 祈福 安葬 祭祀 修造 求子 求财",
  Ji11: "-"
}, {
  _Date: "丙寅",
  Yi0: "出行 赴任 祭祀 酬神 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 修造 作灶 收养子女 求财",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 祈福 安葬 求子",
  Ji2: "赴任 动土 诉讼 修造",
  Yi3: "结婚 出行 搬家 开业 赴任 安葬 修造 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 开业 安葬",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬新房 开业 安葬 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji6: "诸事不宜",
  Yi7: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 修造 求子 斋醮",
  Ji7: "-",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "结婚 交易 搬新房 开业 祈福 安床 安葬 祭祀 求子 求财",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "结婚 出行 交易 开业 安床 祭祀 作灶 求财",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji11: "出行 赴任 修造 开光"
}, {
  _Date: "丁卯",
  Yi0: "祈福 祭祀 作灶 酬神 斋醮",
  Ji0: "出行 赴任 动土 修造",
  Yi1: "结婚 搬家 祈福 安葬 祭祀 收养子女 求子 斋醮 求财",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 搬家 搬新房 安床 安葬 修造 求财",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求子",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji4: "出行 赴任",
  Yi5: "结婚 出行 搬家 交易 搬新房 开业 赴任 祈福 安葬 修造 求子 求财",
  Ji5: "诸事不宜",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 交易 搬新房 开业 祈福 安床 安葬 祭祀 修造 求子 求财",
  Ji7: "-",
  Yi8: "搬新房 安葬 祭祀 修造 酬神 斋醮",
  Ji8: "祈福 求子",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 搬家 赴任 诉讼 修造",
  Yi11: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji11: "出行 赴任 动土 修造"
}, {
  _Date: "戊辰",
  Yi0: "结婚 交易 开业 安床 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 开光 斋醮",
  Yi1: "结婚 安葬 酬神 求财",
  Ji1: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 作灶 酬神 求子 斋醮 见贵",
  Ji2: "出行 赴任",
  Yi3: "求财",
  Ji3: "出行 赴任 祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji4: "出行 赴任 盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 作灶 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 安葬 修造 求财",
  Ji6: "赴任 诉讼 祈福 求子",
  Yi7: "结婚 出行 搬新房 赴任 祈福 安葬 修造 求子 求财",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 出行 交易 开业 安床 求子 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "己巳",
  Yi0: "结婚 出行 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji0: "诸事不宜",
  Yi1: "结婚 搬家 交易 开业 祈福 安床 盖屋 修造 求子 求财",
  Ji1: "出行 赴任",
  Yi2: "出行 赴任 祈福 祭祀 酬神 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 搬新房 安葬 求财",
  Ji3: "出行 赴任 动土 修造",
  Yi4: "结婚 出行 搬家 赴任 安葬 修造 作灶 收养子女 求财",
  Ji4: "祈福 祭祀 酬神 斋醮",
  Yi5: "结婚 搬家 交易 搬新房 开业 安葬 求子 求财",
  Ji5: "出行 赴任 修造 开光",
  Yi6: "结婚 出行 搬新房 开业 赴任 祈福 安葬 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 搬家 搬新房 祈福 安床 盖屋 安葬 祭祀 修造 作灶 酬神 求财",
  Ji7: "-",
  Yi8: "结婚 安葬 求子 求财",
  Ji8: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi9: "结婚 交易 开业 安床 求子 求财",
  Ji9: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi10: "结婚 开业 祈福 安葬",
  Ji10: "出行 赴任 求财",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "庚午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "结婚 出行 祈福 安葬 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "结婚 出行 交易 开业 赴任 安床 求财",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji4: "出行 搬家 赴任 诉讼 修造",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 安葬 求子",
  Ji5: "出行 赴任 动土 修造",
  Yi6: "结婚 搬新房 安葬 作灶 酬神 求财",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 交易 开业 安床 求子 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 搬新房 开业 赴任 祈福 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji9: "-",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "结婚 搬家 搬新房 安葬 修造 收养子女 见贵",
  Ji11: "出行 赴任 求财"
}, {
  _Date: "辛未",
  Yi0: "结婚 搬家 交易 搬新房 开业 安葬 修造",
  Ji0: "赴任 诉讼 祈福 求子",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "结婚 出行 祈福 安葬 求子 求财",
  Ji2: "动土 修造",
  Yi3: "结婚 出行 交易 开业 安床 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 安葬 修造 收养子女 求财",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 酬神 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji6: "出行 搬家 赴任 诉讼 修造",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任 动土 乘船 修造 造船",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 作灶 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 搬新房 安葬 求财",
  Ji9: "出行 赴任 修造",
  Yi10: "结婚 搬家 搬新房 安床 安葬 祭祀 修造",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 搬家 交易 开业 祈福 安床 盖屋 作灶 求子",
  Ji11: "出行 赴任 安葬 修造 开光 求财"
}, {
  _Date: "壬申",
  Yi0: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji0: "动土 修造",
  Yi1: "结婚 出行 搬新房 赴任 祈福 安葬 修造 作灶 造庙 求财",
  Ji1: "-",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 安葬 修造 酬神 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 求子 求财",
  Ji4: "-",
  Yi5: "结婚 出行 祈福 安葬 祭祀 求子 求财",
  Ji5: "-",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 修造 求子 斋醮",
  Ji7: "-",
  Yi8: "结婚 交易 搬新房 开业 安葬",
  Ji8: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi9: "结婚 交易 搬新房 开业 祈福 安葬 求子 求财",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "祈福 祭祀 作灶 酬神 斋醮",
  Ji10: "出行 赴任 动土 修造 求财",
  Yi11: "结婚 搬新房 开业 安葬 求财",
  Ji11: "出行 赴任 修造"
}, {
  _Date: "癸酉",
  Yi0: "结婚 搬新房 开业 安葬 作灶 求子 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 交易 开业 安床 求子 求财",
  Ji1: "出行 赴任 祈福 祭祀 修造 开光 斋醮",
  Yi2: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 祈福 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 开业 安葬 修造",
  Ji6: "祈福 乘船 求子",
  Yi7: "结婚 搬家 祈福 安葬 祭祀 修造 作灶 酬神 收养子女 斋醮 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji8: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 开仓 盖屋 修造 求财",
  Ji9: "乘船 造桥",
  Yi10: "结婚 搬家 安葬 收养子女 求财",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬家 交易 搬新房 开业 安葬 求子 求财",
  Ji11: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮"
}, {
  _Date: "甲戌",
  Yi0: "结婚 交易 搬新房 开业 祈福 安葬 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 修造",
  Yi1: "结婚 祈福 安葬 祭祀 酬神 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 交易 搬新房 开业 祈福 安床 安葬 求子 求财",
  Ji3: "出行 赴任 修造",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 出行 搬家 搬新房 开业 祈福 安床 盖屋 祭祀 作灶",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji6: "赴任 动土 诉讼 修造",
  Yi7: "结婚 搬新房 祈福 安葬 祭祀 修造 酬神 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 开业 赴任 安葬 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "出行 赴任 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬家 搬新房 开业 祈福 安葬 修造",
  Ji10: "乘船 造船",
  Yi11: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji11: "-"
}, {
  _Date: "乙亥",
  Yi0: "结婚 出行 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 搬家 搬新房 赴任 祈福 安床 盖屋 安葬 祭祀 修造 酬神 求财",
  Ji1: "-",
  Yi2: "结婚 交易 开业 安床 求财",
  Ji2: "出行 搬家 赴任 诉讼 祈福 修造 求子",
  Yi3: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 作灶 酬神 收养子女 斋醮 求财",
  Ji4: "动土 修造",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子 求财",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 搬家 交易 开业 安床 盖屋 修造 作灶 求子 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "出行 赴任 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "-",
  Ji9: "出行 赴任 求财",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi11: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "丙子",
  Yi0: "出行 赴任 祭祀 酬神 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 求子 求财",
  Ji2: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi3: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 求财",
  Ji3: "出行 赴任",
  Yi4: "结婚 交易 开业 安床 求子 求财",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬新房 开业 安葬 求财",
  Ji5: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "-",
  Ji7: "出行 赴任 动土 修造",
  Yi8: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji9: "-",
  Yi10: "结婚 出行 搬家 安葬 收养子女 求财",
  Ji10: "赴任 诉讼 祈福 乘船 求子",
  Yi11: "结婚 出行 求子 求财",
  Ji11: "祈福 安葬 祭祀 修造 酬神 开光 斋醮"
}, {
  _Date: "丁丑",
  Yi0: "结婚 出行 交易 开业 安床 求子 求财",
  Ji0: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi1: "结婚 出行 搬家 赴任 祈福 安葬 收养子女 求财",
  Ji1: "乘船 造船",
  Yi2: "结婚 开业",
  Ji2: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi3: "修造 作灶 酬神",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "-",
  Ji4: "动土 修造",
  Yi5: "结婚 出行 搬家 交易 开业 赴任 祈福 安床 盖屋 修造 求子 求财",
  Ji5: "-",
  Yi6: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji6: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "祭祀 修造 作灶 酬神 斋醮",
  Ji8: "出行 赴任 祈福 求子 求财",
  Yi9: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji9: "-",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬",
  Ji10: "出行 赴任 动土 修造",
  Yi11: "出行 搬家 搬新房 开业 赴任 祈福 安床 盖屋 祭祀 修造 作灶 酬神 求财",
  Ji11: "-"
}, {
  _Date: "戊寅",
  Yi0: "结婚 开业 安葬 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 出行 搬家 搬新房 开业 安床 盖屋 修造 作灶 求财",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji2: "赴任 诉讼",
  Yi3: "出行 搬新房 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬新房 赴任 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 搬家 搬新房 开业 安葬 修造",
  Ji6: "祈福 求子",
  Yi7: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 修造 酬神 求财",
  Ji7: "-",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "-",
  Ji9: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi10: "修造 作灶 酬神",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 安葬 合嵴",
  Ji11: "出行 赴任 祈福 祭祀 修造 开光 斋醮"
}, {
  _Date: "己卯",
  Yi0: "结婚 出行 祈福 安葬 祭祀 修造 作灶 酬神 求财",
  Ji0: "-",
  Yi1: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 出行 交易 开业 安床 求子 求财",
  Ji2: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi3: "搬新房 安葬 修造",
  Ji3: "乘船 造船",
  Yi4: "结婚 出行 安葬 祭祀 斋醮",
  Ji4: "赴任 诉讼 祈福 乘船 求子",
  Yi5: "结婚 出行 搬家 搬新房 赴任 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 开业 赴任 祈福 安葬 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji7: "-",
  Yi8: "结婚 安葬 求子",
  Ji8: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 祈福 安葬 祭祀 合嵴",
  Ji10: "出行 搬家 赴任 诉讼 修造",
  Yi11: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "庚辰",
  Yi0: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi1: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 出行 搬家 搬新房 赴任 安葬 祭祀 修造 作灶 酬神 斋醮 求财",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 求财",
  Ji4: "动土 乘船 修造 造桥",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji5: "-",
  Yi6: "出行 酬神 求财",
  Ji6: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 搬家 安葬 酬神 收养子女 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 搬新房 开业 赴任 祈福 求子 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji9: "-",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 出行 搬家 搬新房 赴任 安葬 修造 收养子女 求财",
  Ji11: "-"
}, {
  _Date: "辛巳",
  Yi0: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 出行 交易 开业 赴任 祈福 安床 安葬 修造 求子 求财",
  Ji1: "-",
  Yi2: "结婚 祈福 安葬 祭祀 酬神 求财",
  Ji2: "出行 赴任 动土 修造",
  Yi3: "结婚 搬家 开业 安葬 求财",
  Ji3: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi4: "修造 作灶",
  Ji4: "祈福 祭祀 酬神 斋醮",
  Yi5: "结婚 搬新房 安葬 酬神 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 祭祀 修造 求财",
  Ji6: "-",
  Yi7: "结婚 出行 搬家 搬新房 开业 祈福 安床 盖屋 安葬 祭祀 修造 作灶 求子 斋醮",
  Ji7: "-",
  Yi8: "结婚 祈福 安葬 祭祀 修造 合嵴 求子",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji9: "出行 赴任",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 乘船 求子",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "壬午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "祈福 祭祀 作灶 酬神 斋醮",
  Ji1: "动土 修造",
  Yi2: "结婚 出行 交易 开业 安床 求子 求财",
  Ji2: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi3: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 酬神 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji4: "出行 搬家 赴任 诉讼 修造",
  Yi5: "求财",
  Ji5: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi6: "结婚 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji6: "出行 赴任 盖屋 入殓 上梁",
  Yi7: "结婚 祈福 安葬 祭祀 合嵴",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji8: "祈福 求子",
  Yi9: "结婚 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji9: "出行 赴任 求财",
  Yi10: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji10: "赴任 动土 诉讼 修造",
  Yi11: "结婚 出行 赴任 祈福 安葬 求子 求财",
  Ji11: "诸事不宜"
}, {
  _Date: "癸未",
  Yi0: "结婚 出行 搬新房 开业 安葬 求子 求财",
  Ji0: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "结婚 交易 搬新房 开业 安葬 修造 求子",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 酬神 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 交易 开业 安床 求财",
  Ji6: "祈福 祭祀 求子",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 作灶 酬神 收养子女 斋醮 求财",
  Ji8: "动土 修造",
  Yi9: "-",
  Ji9: "出行 赴任 求财",
  Yi10: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬家 交易 开业 安床 盖屋 修造 作灶 求子 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "甲申",
  Yi0: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji0: "-",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 盖屋 安葬 修造 作灶 求子 求财",
  Ji1: "-",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 搬家 搬新房 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 搬新房 安葬 祭祀 修造",
  Ji4: "祈福 求子",
  Yi5: "结婚 祈福 祭祀 合嵴",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 搬家 搬新房 祈福 安葬",
  Ji6: "出行 赴任 动土 修造",
  Yi7: "结婚 出行 搬家 搬新房 开业 安床 开仓 盖屋 修造 求财",
  Ji7: "祈福 祭祀 酬神 斋醮",
  Yi8: "结婚 交易 搬新房 开业 安葬 求子",
  Ji8: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 酬神 斋醮",
  Yi9: "酬神 求财",
  Ji9: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi10: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 修造 作灶 酬神 收养子女 斋醮 求财",
  Ji10: "-",
  Yi11: "结婚 搬家 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji11: "-"
}, {
  _Date: "乙酉",
  Yi0: "结婚 出行 祈福 安葬 祭祀 作灶 求子 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji2: "祈福 求子",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 祈福 安葬 祭祀 合嵴",
  Ji4: "动土 修造",
  Yi5: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji5: "出行 赴任",
  Yi6: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi7: "修造 作灶 酬神",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi8: "出行 赴任 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 求财",
  Ji9: "乘船 造桥",
  Yi10: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji10: "盖屋 入殓 上梁",
  Yi11: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji11: "出行 赴任 动土 修造"
}, {
  _Date: "丙戌",
  Yi0: "祭祀 酬神 求财",
  Ji0: "出行 搬家 赴任 诉讼 祈福 修造 求子",
  Yi1: "结婚 搬家 安葬 修造 收养子女 求财",
  Ji1: "出行 赴任",
  Yi2: "结婚 出行 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji2: "动土 修造",
  Yi3: "结婚 祈福 安葬 祭祀 合嵴",
  Ji3: "出行 赴任 修造",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 搬家 搬新房 开业 安床 盖屋 安葬 修造 作灶 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "-",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 搬新房 安葬 修造 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 出行 安葬 祭祀 斋醮",
  Ji10: "祈福 乘船 求子 造船",
  Yi11: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 酬神 求财",
  Ji11: "安葬 修造 开光"
}, {
  _Date: "丁亥",
  Yi0: "结婚 出行 搬家 开业 赴任 安葬 求财",
  Ji0: "动土 修造",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 收养子女 求财",
  Ji1: "-",
  Yi2: "结婚 安葬 修造 合嵴",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi4: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 修造 作灶 酬神 收养子女 斋醮 求财",
  Ji4: "-",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "结婚 出行 祈福 安葬 求子 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 交易 搬新房 开业 祈福 安床 安葬 祭祀 修造 求子 求财",
  Ji7: "-",
  Yi8: "搬新房 安葬 修造",
  Ji8: "赴任 诉讼 祈福 乘船 求子",
  Yi9: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求财",
  Ji9: "诸事不宜",
  Yi10: "结婚 开业 安葬",
  Ji10: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi11: "祈福 祭祀 酬神 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "戊子",
  Yi0: "结婚 开业 安葬 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 安葬 修造 合嵴",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子 求财",
  Ji2: "出行 赴任",
  Yi3: "搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 修造 酬神 求财",
  Ji3: "出行 赴任",
  Yi4: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬新房 赴任 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "结婚 祈福 安葬 求子 求财",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 修造 作灶 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬家 安葬 收养子女 求财",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji11: "祈福 祭祀 酬神 斋醮"
}, {
  _Date: "己丑",
  Yi0: "结婚 出行 祈福 安葬 求子 求财",
  Ji0: "-",
  Yi1: "结婚 搬家 安葬 收养子女 求财",
  Ji1: "出行 赴任 乘船 造船",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 搬新房 祈福 安葬 祭祀 修造 斋醮",
  Ji3: "-",
  Yi4: "-",
  Ji4: "祈福 求子",
  Yi5: "结婚 出行 搬家 交易 开业 祈福 安床 盖屋 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 赴任 祈福 安葬 求子 求财",
  Ji6: "动土 修造",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "结婚 搬家 安葬 修造 作灶 酬神 收养子女 求财",
  Ji8: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi9: "结婚 出行 交易 开业 安床 求子 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬 祭祀 修造",
  Ji10: "出行 赴任",
  Yi11: "结婚 搬家 搬新房 开业 祈福 安床 盖屋 修造 作灶 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "庚寅",
  Yi0: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 修造 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 安葬 修造 求财",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 安葬 修造",
  Ji2: "赴任 诉讼 祈福 乘船 求子",
  Yi3: "结婚 交易 搬新房 开业 安葬 修造 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 出行 搬家 开业 赴任 祈福 安葬 斋醮 求财",
  Ji4: "动土 修造",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 祭祀 修造 作灶 酬神 求子 斋醮",
  Ji5: "-",
  Yi6: "结婚 交易 开业 安床 求子",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi7: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 酬神 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "结婚 搬家 交易 搬新房 开业 祈福 安葬 求子",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "结婚 出行 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji10: "盖屋 入殓 上梁",
  Yi11: "结婚 交易 搬新房 开业 祈福 安床 安葬 求子 求财",
  Ji11: "出行 赴任 修造"
}, {
  _Date: "辛卯",
  Yi0: "结婚 搬家 交易 搬新房 开业 祭祀 修造 作灶 酬神 斋醮",
  Ji0: "出行 赴任 祈福 求子",
  Yi1: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji2: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi3: "搬家 搬新房 开业 安床 盖屋 修造 作灶",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 出行 安葬 求子",
  Ji4: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬新房 安葬 酬神 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 祈福 安葬 祭祀 修造 酬神 见贵",
  Ji6: "出行 赴任 求财",
  Yi7: "结婚 出行 搬新房 祈福 安葬 祭祀 修造",
  Ji7: "-",
  Yi8: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 交易 开业 安床 求财",
  Ji10: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi11: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji11: "出行 赴任 动土 修造 开光"
}, {
  _Date: "壬辰",
  Yi0: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji0: "赴任 动土 修造",
  Yi1: "结婚 搬家 祈福 安葬 收养子女 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 搬家 搬新房 安葬 求财",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 出行 搬家 交易 搬新房 开业 安葬 修造 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 祈福 安床 安葬 祭祀 修造",
  Ji4: "乘船 造桥",
  Yi5: "结婚 出行 搬新房 赴任 安葬 修造 求子",
  Ji5: "祈福 祭祀 酬神 斋醮",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 搬新房 祈福 安葬 修造",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 交易 开业 安床 求财",
  Ji8: "祈福 求子",
  Yi9: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji9: "-",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 安葬 修造 求财",
  Ji11: "-"
}, {
  _Date: "癸巳",
  Yi0: "结婚 安葬 求子 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 求子 求财",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "-",
  Ji2: "出行 赴任 祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 交易 开业 安床 作灶 求子 求财",
  Ji4: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi5: "结婚 出行 搬新房 赴任 祈福 祭祀 酬神 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji6: "祈福 乘船 求子",
  Yi7: "结婚 搬家 搬新房 开业 祈福 安床 盖屋 安葬 祭祀 修造 作灶 求子 斋醮",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji9: "出行 赴任",
  Yi10: "结婚 开业 安葬",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "甲午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji1: "-",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji3: "-",
  Yi4: "结婚 安葬 祭祀 斋醮",
  Ji4: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi5: "结婚 搬家 搬新房 安葬",
  Ji5: "出行 赴任 动土 祈福 祭祀 修造 酬神 开光 斋醮",
  Yi6: "结婚 搬新房 祈福 安葬 作灶 造庙",
  Ji6: "出行 赴任 动土 修造",
  Yi7: "结婚 祈福 安葬 求子 求财",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "搬家 搬新房 开业 安床 盖屋 修造 作灶 酬神 求财",
  Ji9: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi10: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji10: "赴任 诉讼",
  Yi11: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji11: "诸事不宜"
}, {
  _Date: "乙未",
  Yi0: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求财",
  Ji0: "赴任 诉讼 盖屋 入殓 上梁",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "结婚 搬家 交易 搬新房 开业 安葬 修造",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji3: "-",
  Yi4: "-",
  Ji4: "动土 修造",
  Yi5: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 求财",
  Ji5: "出行 赴任",
  Yi6: "结婚 出行 交易 开业 安床 求子 求财",
  Ji6: "祈福 祭祀 酬神 斋醮",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任 动土 祈福 乘船 祭祀 修造 开光 造船 斋醮",
  Yi8: "结婚 出行 求子 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "-",
  Ji9: "出行 赴任 修造",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "结婚 出行 搬家 交易 开业 祈福 安床 盖屋 祭祀 修造 作灶 求子 求财",
  Ji11: "-"
}, {
  _Date: "丙申",
  Yi0: "结婚 出行 交易 开业 赴任 安床 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 搬家 搬新房 开业 赴任 祈福 安床 盖屋 修造 作灶 求子 求财",
  Ji1: "-",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 酬神 收养子女 斋醮 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 交易 开业 安床 求子",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi5: "结婚 交易 开业 安床 求子 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 搬家 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji6: "诸事不宜",
  Yi7: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 求子",
  Ji7: "祈福 祭祀 酬神 斋醮",
  Yi8: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji8: "出行 搬家 赴任 诉讼 乘船 盖屋 修造 入殓 上梁 造船",
  Yi9: "结婚 祈福 安葬 祭祀 酬神 求财",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "祭祀 修造 作灶 酬神 斋醮",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 祈福 安葬 求子 求财",
  Ji11: "出行 赴任 修造 开光"
}, {
  _Date: "丁酉",
  Yi0: "祈福 祭祀 作灶 酬神 斋醮",
  Ji0: "动土 修造",
  Yi1: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "赴任 诉讼",
  Yi5: "结婚 交易 开业 祈福 安床 求子",
  Ji5: "出行 赴任 求财",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 交易 搬新房 开业 祈福 安葬 祭祀 修造 求子",
  Ji7: "-",
  Yi8: "-",
  Ji8: "祈福 乘船 祭祀 求子",
  Yi9: "结婚 出行 搬新房 祈福 安葬 祭祀 酬神 求子 求财",
  Ji9: "乘船 造桥",
  Yi10: "结婚 安葬 收养子女 求财",
  Ji10: "出行 搬家 赴任 诉讼 修造",
  Yi11: "祈福 祭祀 酬神 求财",
  Ji11: "出行 赴任 动土 修造"
}, {
  _Date: "戊戌",
  Yi0: "结婚 安葬 收养子女 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 开光 斋醮",
  Yi1: "结婚 安葬 修造 酬神 求财",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji2: "出行 赴任",
  Yi3: "结婚 交易 搬新房 开业 祈福 安床 安葬 求子 求财",
  Ji3: "出行 赴任 修造",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 搬新房 开业 见贵",
  Ji5: "出行 赴任 安葬 修造 开光 求财",
  Yi6: "结婚 出行 交易 开业 赴任 安床 求财",
  Ji6: "祈福 求子",
  Yi7: "结婚 出行 搬新房 赴任 祈福 安葬 修造 求子 求财",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 酬神 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 出行 搬家 开业 安葬 修造",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 安葬 求子",
  Ji10: "出行 赴任 祈福 乘船 祭祀 开光 造船 斋醮",
  Yi11: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "己亥",
  Yi0: "结婚 出行 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji0: "诸事不宜",
  Yi1: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 求财",
  Ji1: "出行 赴任",
  Yi2: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 交易 搬新房 开业 赴任 祈福 安床 安葬 修造 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 搬家 赴任 安葬 祭祀 修造 作灶 酬神 收养子女 斋醮 求财",
  Ji4: "祈福 乘船 求子",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji7: "-",
  Yi8: "结婚 出行 安葬 求子 求财",
  Ji8: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi9: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 祭祀 酬神 斋醮",
  Yi11: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji11: "出行 赴任 乘船 造桥"
}, {
  _Date: "庚子",
  Yi0: "结婚 开业 祈福 安葬",
  Ji0: "出行 赴任 乘船 盖屋 入殓 上梁 造船",
  Yi1: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求财",
  Ji1: "-",
  Yi2: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 开仓 盖屋 修造 求子 见贵",
  Ji3: "-",
  Yi4: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji4: "出行 搬家 赴任 诉讼 修造",
  Yi5: "结婚 搬家 交易 搬新房 开业 安葬 求子",
  Ji5: "出行 赴任 动土 修造",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "结婚 安葬 修造 酬神 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 交易 搬新房 开业 赴任 祈福 安床 求子 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 出行 搬家 交易 搬新房 开业 赴任 祈福 安葬 修造 求子 求财",
  Ji9: "-",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "结婚 出行 搬家 搬新房 赴任 安葬 修造 收养子女 求财",
  Ji11: "祈福 祭祀 酬神 斋醮"
}, {
  _Date: "辛丑",
  Yi0: "结婚 出行 交易 开业 安床 求财",
  Ji0: "祈福 求子",
  Yi1: "安葬 修造",
  Ji1: "乘船 造船",
  Yi2: "结婚 出行 祈福 安葬 求子 求财",
  Ji2: "动土 修造",
  Yi3: "修造 作灶",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 安葬 修造 收养子女 求财",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬家 交易 开业 安床 盖屋 修造 求子 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 赴任 祈福 安葬 求子 求财",
  Ji6: "-",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 作灶 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 交易 搬新房 开业 赴任 祈福 安床 安葬 修造 求子 求财",
  Ji9: "-",
  Yi10: "结婚 搬家 搬新房 安床 安葬 祭祀 修造",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 作灶 求财",
  Ji11: "安葬 修造 开光"
}, {
  _Date: "壬寅",
  Yi0: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 求子 求财",
  Ji0: "动土 修造",
  Yi1: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求子",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "-",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 安葬 修造 酬神 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 开业 祈福 安葬 祭祀 见贵",
  Ji4: "出行 赴任 求财",
  Yi5: "结婚 出行 安葬 修造 求财",
  Ji5: "祈福 祭祀 酬神 斋醮",
  Yi6: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 出行 搬家 搬新房 赴任 祈福 安葬 祭祀 修造 收养子女 求子 斋醮 求财",
  Ji7: "-",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "结婚 交易 搬新房 开业 祈福 安葬 祭祀 求子 求财",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "结婚 出行 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji10: "动土 修造",
  Yi11: "结婚 祈福 安葬 求子 求财",
  Ji11: "出行 赴任 修造"
}, {
  _Date: "癸卯",
  Yi0: "结婚 搬新房 开业 安葬 求子 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 安葬 求子",
  Ji1: "出行 赴任 祈福 祭祀 修造 开光 斋醮",
  Yi2: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 搬家 搬新房 开业 祈福 安床 盖屋 安葬 修造 作灶 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "赴任 诉讼 盖屋 入殓 上梁",
  Yi5: "结婚 出行 赴任 祈福 祭祀 酬神 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 开业 安葬 修造",
  Ji6: "祈福 乘船 求子",
  Yi7: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji8: "动土 修造",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 交易 开业 安床 求子 求财",
  Ji10: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 开光 斋醮",
  Yi11: "结婚 交易 开业 安床 求子 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "甲辰",
  Yi0: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 修造",
  Yi1: "结婚 搬新房 祈福 安葬 求子",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 作灶 酬神 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 搬家 交易 搬新房 开业 安葬 求子",
  Ji3: "出行 赴任 祈福 祭祀 修造 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji4: "出行 赴任 祈福 乘船 求子",
  Yi5: "结婚 出行 搬家 搬新房 开业 祈福 安床 盖屋 祭祀 作灶",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 搬家 开业 安葬 求财",
  Ji6: "出行 赴任 动土 修造",
  Yi7: "结婚 出行 搬新房 赴任 祈福 安葬 修造 求子 求财",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 交易 开业 安床 求子 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "结婚 交易 开业 安床 求子 求财",
  Ji9: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji11: "-"
}, {
  _Date: "乙巳",
  Yi0: "结婚 出行 祈福 安葬 求子 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 交易 搬新房 开业 赴任 祈福 安床 安葬 修造 求子 求财",
  Ji1: "-",
  Yi2: "结婚 搬新房 安葬",
  Ji2: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi3: "结婚 搬新房 开业 祈福 安葬 求子 求财",
  Ji3: "出行 赴任 动土 修造",
  Yi4: "结婚 出行 搬家 赴任 安葬 作灶 收养子女 求财",
  Ji4: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi5: "结婚 搬新房 祈福 盖屋 安葬 修造 作灶 造庙 求财",
  Ji5: "出行 赴任 乘船 造船",
  Yi6: "结婚 搬家 搬新房 安床 安葬 修造 求子",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求子",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 交易 开业 安床 求子 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji9: "诸事不宜",
  Yi10: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji10: "盖屋 入殓 上梁",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "丙午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji1: "-",
  Yi2: "结婚 出行 交易 开业 安床 求子 求财",
  Ji2: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi3: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 开仓 盖屋 修造 求子 见贵",
  Ji3: "-",
  Yi4: "结婚 搬新房 安葬 修造 求子",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 出行 搬新房 开业 赴任 安葬 求财",
  Ji5: "祈福 祭祀 酬神 斋醮",
  Yi6: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 作灶 求子",
  Ji6: "乘船 造桥",
  Yi7: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji9: "-",
  Yi10: "结婚 出行 交易 开业 赴任 安床 求财",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 出行 赴任 祈福 求子 求财",
  Ji11: "安葬 修造 开光"
}, {
  _Date: "丁未",
  Yi0: "-",
  Ji0: "赴任 动土 诉讼 修造",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "-",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji4: "出行 赴任",
  Yi5: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 求子 求财",
  Ji5: "-",
  Yi6: "结婚 出行 交易 开业 赴任 安床 求子 求财",
  Ji6: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任 动土 修造",
  Yi8: "结婚 出行 搬家 赴任 安葬 祭祀 作灶 收养子女 求财",
  Ji8: "祈福 求子",
  Yi9: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求子 求财",
  Ji9: "-",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬",
  Ji10: "出行 赴任 动土 修造",
  Yi11: "出行 搬家 搬新房 开业 赴任 祈福 安床 盖屋 祭祀 修造 作灶 酬神 求财",
  Ji11: "-"
}, {
  _Date: "戊申",
  Yi0: "结婚 搬家 搬新房 安床 安葬 修造 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 酬神 求财",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 出行 搬新房 赴任 祈福 安葬 修造 求子 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 搬家 开业 祈福 斋醮",
  Ji5: "出行 赴任 安葬 修造 开光",
  Yi6: "结婚 搬家 交易 搬新房 开业 安葬 修造",
  Ji6: "祈福 求子",
  Yi7: "结婚 出行 搬家 搬新房 开业 安床 开仓 盖屋 安葬 修造 求子 求财",
  Ji7: "祈福 祭祀 酬神 斋醮",
  Yi8: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji8: "出行 搬家 赴任 诉讼 修造",
  Yi9: "-",
  Ji9: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi10: "修造 作灶 酬神",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬新房 安葬 修造 作灶 造庙",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "己酉",
  Yi0: "结婚 出行 搬新房 祈福 盖屋 安葬 祭祀 修造 作灶",
  Ji0: "-",
  Yi1: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "出行 赴任",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji2: "动土 修造",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 安床 求财",
  Ji4: "赴任 诉讼 祈福 乘船 求子",
  Yi5: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 开业 赴任 祈福 安葬 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji7: "-",
  Yi8: "结婚 出行 安葬 修造 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬家 安葬 收养子女 求财",
  Ji10: "出行 赴任",
  Yi11: "结婚 搬家 安葬 收养子女 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "庚戌",
  Yi0: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi1: "结婚 祈福 安葬 祭祀 酬神 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 交易 开业 安床 祭祀 作灶",
  Ji2: "出行 赴任 祈福 求子 求财",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 祈福 祭祀 修造 酬神 斋醮",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji5: "-",
  Yi6: "酬神 求财",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 安葬 修造 酬神 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 开业 赴任 祈福 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 搬家 交易 搬新房 开业 修造 作灶 求子",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji10: "盖屋 入殓 上梁",
  Yi11: "结婚 出行 搬家 搬新房 赴任 安葬 修造 收养子女 求财",
  Ji11: "-"
}, {
  _Date: "辛亥",
  Yi0: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 收养子女 求财",
  Ji1: "-",
  Yi2: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji2: "出行 搬家 赴任 诉讼 修造",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi4: "结婚 搬家 安葬 修造 作灶 酬神 收养子女 求财",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "出行 赴任 祈福 祭祀 酬神 求财",
  Ji6: "-",
  Yi7: "结婚 出行 搬家 交易 开业 祈福 安床 盖屋 祭祀 修造 作灶 求子 求财",
  Ji7: "-",
  Yi8: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji8: "赴任 诉讼 盖屋 入殓 上梁",
  Yi9: "结婚 搬新房 开业 安葬 修造 求财",
  Ji9: "出行 赴任",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 乘船 祭祀 求子",
  Yi11: "祈福 祭祀 作灶 酬神 斋醮",
  Ji11: "乘船 安葬 修造 开光 造桥"
}, {
  _Date: "壬子",
  Yi0: "结婚 搬家 交易 搬新房 开业 祈福 安葬 求子",
  Ji0: "动土 乘船 修造 造船",
  Yi1: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "-",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 安葬 修造 求子 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "出行 搬家 赴任 诉讼 修造",
  Yi5: "结婚 安葬 求子 求财",
  Ji5: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "结婚 搬家 搬新房 安葬 修造 收养子女 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 交易 开业 安床 求财",
  Ji8: "祈福 求子",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 盖屋 修造 作灶 求子 求财",
  Ji9: "-",
  Yi10: "结婚 出行 搬家 安葬 收养子女 求财",
  Ji10: "赴任 动土 诉讼 修造",
  Yi11: "结婚 出行 搬新房 开业 赴任 安葬 求财",
  Ji11: "祈福 祭祀 酬神 斋醮"
}, {
  _Date: "癸丑",
  Yi0: "结婚 出行 搬新房 开业 赴任 安葬 求子 求财",
  Ji0: "祈福 祭祀 酬神 斋醮",
  Yi1: "-",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "结婚 开业 安葬",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 搬新房 祈福 安葬 祭祀 酬神 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬家 交易 开业 祈福 安床 盖屋 祭祀 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 开业 安葬 求财",
  Ji6: "出行 搬家 赴任 诉讼 祈福 修造 求子",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 作灶 酬神 收养子女 斋醮 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 搬新房 祈福 盖屋 安葬 祭祀",
  Ji9: "出行 赴任 修造",
  Yi10: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "甲寅",
  Yi0: "结婚 搬家 搬新房 祈福 安床 安葬 修造",
  Ji0: "出行 赴任 求财",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 修造 作灶 求财",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 酬神 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 开业 赴任 安葬 求财",
  Ji4: "祈福 乘船 求子",
  Yi5: "结婚 搬家 开业 祈福 斋醮 见贵",
  Ji5: "出行 赴任 安葬 修造 开光",
  Yi6: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji6: "出行 赴任 动土 修造",
  Yi7: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 安葬 祭祀 修造 求子 求财",
  Ji7: "-",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "酬神 求财",
  Ji9: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi10: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 作灶 求子 求财",
  Ji10: "-",
  Yi11: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji11: "出行 赴任 修造"
}, {
  _Date: "乙卯",
  Yi0: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji0: "出行 赴任 盖屋 入殓 上梁",
  Yi1: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji2: "祈福 乘船 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 搬家 搬新房 开业 赴任 祈福 盖屋 安葬 修造 求子 求财",
  Ji3: "-",
  Yi4: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji4: "出行 赴任 动土 修造",
  Yi5: "结婚 搬新房 祈福 盖屋 安葬 修造 作灶 造庙 求财",
  Ji5: "出行 赴任",
  Yi6: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 交易 开业 安床 求子 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi11: "结婚 交易 搬新房 开业 祈福 安床 安葬 祭祀 求子 求财",
  Ji11: "出行 赴任 动土 修造"
}, {
  _Date: "丙辰",
  Yi0: "结婚 交易 开业 安床 祭祀 求财",
  Ji0: "出行 搬家 赴任 诉讼 祈福 修造 求子",
  Yi1: "结婚 搬家 安葬 收养子女 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 出行 搬家 交易 搬新房 开业 赴任 祈福 安葬 祭祀 作灶 酬神 求子 斋醮",
  Ji2: "动土 修造",
  Yi3: "-",
  Ji3: "出行 赴任 祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji4: "出行 赴任 祈福 乘船 祭祀 开光 造桥 斋醮",
  Yi5: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 搬家 交易 搬新房 开业 祈福 安葬 修造 求子 求财",
  Ji6: "赴任 诉讼",
  Yi7: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji7: "动土 修造",
  Yi8: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 交易 搬新房 开业 祈福 安床 安葬 祭祀 修造 求子 求财",
  Ji9: "-",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 酬神 求财",
  Ji11: "安葬 修造 开光"
}, {
  _Date: "丁巳",
  Yi0: "结婚 搬家 开业 安葬",
  Ji0: "出行 赴任 动土 修造 求财",
  Yi1: "结婚 搬家 交易 开业 祈福 安床 盖屋 修造 求子",
  Ji1: "出行 赴任 求财",
  Yi2: "结婚 交易 搬新房 开业 安葬 修造 求子",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 交易 搬新房 开业 安葬 修造 求子",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "修造 作灶",
  Ji4: "出行 赴任 祈福 祭祀 酬神 斋醮",
  Yi5: "结婚 出行 搬家 赴任 安葬 收养子女 求子 求财",
  Ji5: "祈福 乘船 祭祀 酬神 造船 斋醮",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 出行 搬新房 祈福 安葬 祭祀 修造 求子 斋醮",
  Ji7: "-",
  Yi8: "结婚 出行 交易 开业 安床 求财",
  Ji8: "赴任 诉讼 祈福 乘船 求子",
  Yi9: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji9: "-",
  Yi10: "结婚 出行 搬家 开业 祈福 安葬 祭祀 修造 斋醮",
  Ji10: "-",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "戊午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "结婚 安葬 修造 酬神 求财",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji2: "出行 赴任",
  Yi3: "出行 搬家 搬新房 开业 赴任 祈福 安床 开仓 盖屋 祭祀 修造 酬神 求财",
  Ji3: "-",
  Yi4: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi5: "结婚 搬家 搬新房 开业",
  Ji5: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi6: "结婚 搬家 交易 搬新房 开业 祭祀 修造 作灶 酬神 斋醮",
  Ji6: "祈福 乘船 求子 造桥",
  Yi7: "结婚 祈福 安葬 求子 求财",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 酬神 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 修造 作灶 求子 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬新房 安葬 修造 求财",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬新房 安葬 修造 作灶 造庙 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "己未",
  Yi0: "结婚 出行 祈福 安葬 求子 求财",
  Ji0: "赴任 诉讼",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 交易 搬新房 开业 祈福 安床 安葬 祭祀 修造 求子 求财",
  Ji3: "-",
  Yi4: "结婚 交易 搬新房 开业 安葬 修造",
  Ji4: "祈福 求子",
  Yi5: "结婚 出行 搬家 交易 搬新房 开业 赴任 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 安葬 求子 求财",
  Ji6: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi7: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji7: "出行 赴任 动土 乘船 修造 造船",
  Yi8: "结婚 搬家 安葬 修造 作灶 酬神 收养子女 求财",
  Ji8: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi9: "结婚 搬家 交易 搬新房 开业 安葬 求子",
  Ji9: "出行 赴任 祈福 祭祀 修造 酬神 斋醮",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬 祭祀 修造",
  Ji10: "出行 赴任",
  Yi11: "结婚 搬家 交易 开业 祈福 安床 盖屋 修造 作灶 求子 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "庚申",
  Yi0: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji0: "出行 赴任 盖屋 入殓 上梁",
  Yi1: "结婚 祈福 安葬 祭祀 修造 酬神 见贵",
  Ji1: "出行 赴任 求财",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 交易 搬新房 开业 安葬 修造 求子",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji4: "动土 修造",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 祭祀 修造 作灶 酬神 求子 斋醮",
  Ji5: "出行 赴任",
  Yi6: "酬神 求财",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 出行 搬家 搬新房 开业 安床 开仓 盖屋 修造 求财",
  Ji7: "祈福 祭祀 酬神 斋醮",
  Yi8: "结婚 搬新房 开业 安葬 求财",
  Ji8: "出行 搬家 赴任 诉讼 修造 开光",
  Yi9: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 求子",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "结婚 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "搬新房 安葬 修造",
  Ji11: "出行 赴任"
}, {
  _Date: "辛酉",
  Yi0: "结婚 搬家 交易 搬新房 开业 安葬 祭祀 修造 作灶 酬神 斋醮",
  Ji0: "出行 赴任 祈福 求子 求财",
  Yi1: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 祭祀 修造 求财",
  Ji2: "-",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 安床 求子 求财",
  Ji4: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 交易 开业 安床 求子 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求财",
  Ji6: "-",
  Yi7: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji7: "-",
  Yi8: "结婚 出行 交易 开业 安床 求子 求财",
  Ji8: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi9: "结婚 出行 搬新房 祈福 安葬 修造 求子 求财",
  Ji9: "乘船 造桥",
  Yi10: "结婚 搬家 安葬 收养子女 求财",
  Ji10: "出行 赴任 祈福 求子",
  Yi11: "结婚 搬家 搬新房 安葬 求财",
  Ji11: "出行 赴任 动土 修造 开光"
}, {
  _Date: "壬戌",
  Yi0: "结婚 搬家 交易 搬新房 开业 安葬 求子",
  Ji0: "出行 赴任 动土 修造 求财",
  Yi1: "结婚 搬新房 祈福 安葬 修造 作灶 造庙",
  Ji1: "出行 赴任 求财",
  Yi2: "结婚 出行 交易 开业 安床 求子 求财",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 祈福 祭祀 修造 开光 斋醮",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 出行 安葬 修造 求财",
  Ji5: "祈福 祭祀 酬神 斋醮",
  Yi6: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji6: "赴任 诉讼 盖屋 入殓 上梁",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 开业 安葬 求财",
  Ji8: "出行 赴任 祈福 求子",
  Yi9: "修造 作灶",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 出行 祈福 安葬 祭祀 求子 斋醮",
  Ji10: "乘船 造船",
  Yi11: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 求财",
  Ji11: "-"
}, {
  _Date: "癸亥",
  Yi0: "结婚 搬新房 开业 安葬 求子 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 见贵",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi2: "结婚 交易 开业 安床 求子 求财",
  Ji2: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 酬神 斋醮",
  Yi3: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji3: "出行 赴任 动土 修造",
  Yi4: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji6: "祈福 乘船 求子",
  Yi7: "结婚 搬家 交易 开业 祈福 安床 盖屋 祭祀 修造 作灶 求子 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 搬家 安葬 收养子女 求财",
  Ji8: "出行 赴任 动土 修造",
  Yi9: "结婚 出行 搬家 搬新房 赴任 安葬 求财",
  Ji9: "诸事不宜",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 祭祀 酬神 斋醮",
  Yi11: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji11: "出行 赴任 祈福 乘船 祭祀 开光 造桥 斋醮"
}];
exports.daysInfo = daysInfo;

/***/ }),

/***/ 59:
/*!*******************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/huangli/getDayInfos.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get12ShichenInfos = get12ShichenInfos;
exports.getDayInfos = getDayInfos;
exports.getHourInfos = getHourInfos;
var _X = __webpack_require__(/*! ../data1/X.js */ 60);
var _wuxing = __webpack_require__(/*! ../data1/wuxing.js */ 61);
var _getJxList = __webpack_require__(/*! ./getJxList.js */ 62);
var _constants = __webpack_require__(/*! ../data1/constants.js */ 63);
var _yijiArr = __webpack_require__(/*! ../data1/yijiArr.js */ 64);
var _c = __webpack_require__(/*! ../data1/c.js */ 65);
var _l = __webpack_require__(/*! ../data1/l.js */ 66);
var _C = __webpack_require__(/*! ../data1/C2.js */ 67);
var _mWxMap = __webpack_require__(/*! ../data1/mWxMap.js */ 68);
function getYMD(S) {
  var J = S || new Date();
  return {
    year: J.getFullYear(),
    month: J.getMonth(),
    date: J.getDate(),
    day: J.getDay(),
    hour: J.getHours(),
    miniute: J.getMinutes(),
    second: J.getSeconds()
  };
}
function leapMonth(e) {
  return 15 & _constants.lunarInfo[e - 1900];
}
function leapDays(e) {
  return leapMonth(e) ? 65536 & _constants.lunarInfo[e - 1900] ? 30 : 29 : 0;
}
function toGanZhi(e) {
  return _constants.Gan[e % 10] + _constants.Zhi[e % 12];
}
function getTerm(e, t) {
  var r = getOffsetByTerm(e, t - 1);
  return getDateObjByOffset(e, r).getDate();
}
function getTermTime(e, t) {
  var r = getOffsetByTerm(e, t - 1);
  return getDateObjByOffset(e, r);
}
function getOffsetByTerm(e, t) {
  return t < 0 ? -1 : _X.X[24 * (e - 1900) + t];
}
function getDateObjByOffset(e, t) {
  var r = new Date(e, 0, 1, 0, 0, 0, 0);
  return r.setDate(r.getDate() + t), r;
}
function cyclical(e) {
  return _constants.Gan[e % 10] + _constants.Zhi[e % 12];
}
function toChinaDay(e) {
  var s;
  switch (e) {
    case 10:
      s = "初十";
      break;
    case 20:
      s = "二十";
      break;
    case 30:
      s = "三十";
      break;
    default:
      s = _constants.nStr2[Math.floor(e / 10)], s += _constants.nStr1[e % 10];
  }
  return s;
}
function solar2lunarBase(e, t, r) {
  // console.log(e, t, r)
  if (e < 1900 || e > 2100) return -1;
  if (1900 == e && 0 == t && r < 31) return -1;
  var i,
    n,
    o = new Date(),
    c = 0;
  e = (o = e ? new Date(e, parseInt(t), r) : new Date()).getFullYear(), t = o.getMonth(), r = o.getDate(), t++;
  var f = (Date.UTC(o.getFullYear(), o.getMonth(), o.getDate()) - Date.UTC(1900, 0, 31)) / 864e5;
  for (i = 1900; i < 2101 && f > 0; i++) {
    f -= c = lYearDays(i);
  }
  f < 0 && (f += c, i--);
  var l = new Date(),
    h = !1;
  l.getFullYear() == e && l.getMonth() + 1 == t && l.getDate() == r && (h = !0);
  var d = o.getDay(),
    v = _constants.nStr1[d],
    y = i;
  n = leapMonth(i);
  var w = !1;
  for (i = 1; i < 13 && f > 0; i++) {
    n > 0 && i == n + 1 && 0 == w ? (--i, w = !0, c = leapDays(y)) : c = monthDays(y, i), 1 == w && i == n + 1 && (w = !1), f -= c;
  }
  0 == f && n > 0 && i == n + 1 && (w ? w = !1 : (w = !0, --i)), f < 0 && (f += c, --i);
  var m = i,
    S = f + 1,
    k = t - 1,
    D = toGanZhiYear(e, t - 1, r),
    A = getTerm(e, 2 * t - 1),
    T = getTerm(e, 2 * t),
    E = toGanZhi(12 * (e - 1900) + t + 11);
  r >= A && (E = toGanZhi(12 * (e - 1900) + t + 12));
  var O = !1,
    M = null;
  A === r && (O = !0, M = _constants.solarTerm[2 * t - 2]), T === r && (O = !0, M = _constants.solarTerm[2 * t - 1]);
  var C = !1,
    B = !1;
  A - 1 === r && -1 != [2, 8, 14, 20].indexOf(2 * t - 2) && (C = !0), T - 1 === r && -1 != [5, 11, 17, 23].indexOf(2 * t - 1) && (B = !0);
  var P = Date.UTC(e, k, 1, 0, 0, 0, 0) / 864e5 + 25567 + 10,
    _ = toGanZhi(P + r - 1),
    R = toAstro(t, r);
  return {
    lYear: y,
    lMonth: m,
    lDay: S,
    Animal: getAnimal(y),
    IMonthCn: (w ? "闰" : "") + toChinaMonth(m),
    IDayCn: toChinaDay(S),
    cYear: e,
    cMonth: t,
    cDay: r,
    gzYear: D,
    gzMonth: E,
    gzDay: _,
    isToday: h,
    isLeap: w,
    nWeek: d,
    ncWeek: "星期" + v,
    isTerm: O,
    Term: M,
    is4jue: C,
    is4li: B,
    astro: R
  };
}
function getStemsBranchMonthAsString(e, t) {
  return formatBranchMonthString(getStemsBranchMonth(e, t));
}
function getStemsBranchDayAsString(e) {
  return formatStemsBranchString(getStemsBranchDay(e));
}
function taiShenOfMonthDiZhi(e, t, r) {
  var code = codeForMonthDizhi(e);
  return taiShenWithCode(code, t, r);
}
function taiShenWithCode(code, e, t) {
  var r = t[code + "-" + e];
  return r || "暂无";
}
function branchIndexOfSolar(e, t) {
  return -2 == t ? getBranchDay(e) : getStemBranchHour(e, t) % 12;
}
function shaDirectionOfDateTime(e) {
  var t = -1;
  switch (e) {
    case 0:
    case 4:
    case 8:
      t = 4;
      break;
    case 1:
    case 5:
    case 9:
      t = 2;
      break;
    case 2:
    case 6:
    case 10:
      t = 0;
      break;
    case 3:
    case 7:
    case 11:
      t = 6;
  }
  return t;
}
function getStemBranchHour(e, t) {
  var r = getIntervalDays(_constants.BASE_STEMS_DATE, e),
    dt = parseInt((r + 9) % 10);
  return (6 * ((t + 2 * (dt > 4 ? dt - 5 : dt)) % 10) - 5 * t + 60) % 60;
}
function getIntervalDays(e, t) {
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.floor((t - e) / 864e5);
}
function getStemsBranchMonth(e, t) {
  var r = findPreTerm(e, t),
    n = Math.floor(12 * (e - 1899) + (r + 2) / 2 - 2);
  return (6 * ((n + 2) % 10) - 5 * ((n + 2) % 12) + 60) % 60;
}
function codeForMonthDizhi(e) {
  return {
    "子": 11,
    "丑": 12,
    "寅": 1,
    "卯": 2,
    "辰": 3,
    "巳": 4,
    "午": 5,
    "未": 6,
    "申": 7,
    "酉": 8,
    "戌": 9,
    "亥": 10
  }[e];
}
function formatBranchMonthString(e) {
  return e < 0 ? "" : _constants.Zhi[e % 12];
}
function findPreTerm(e, t) {
  var r = e - 1900;
  if (r > 0 && r < _X.X.length / 24) {
    var n = 24 * r;
    return findPreTerm1(_X.X, t, n);
  }
  return -1;
}
function findPreTerm1(e, t, r) {
  for (var n = new Array(24), o = r; o <= r + 23; o++) {
    n[o - r] = e[o];
  }
  var c = -1,
    i = 0;
  for (i = 0; i < n.length; i++) {
    if (t === n[i]) {
      c = i;
      break;
    }
    if (t < n[i]) {
      c = i - 1;
      break;
    }
  }
  return i === n.length && -1 === c && (c = i - 1), c;
}
function jianChuOfDate(e) {
  var t = new Date(1901, 0, 1),
    r = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
    n = twentyFourTermdaysOf(r),
    o = -1;
  if (2 == n.length) {
    var a = parseInt(n[0]),
      c = a % 2 == 0 ? a / 2 : a / 2 + 1;
    parseInt(n[n.length - 1]) && a % 2 == 0 && (c += 1);
    var f = Math.abs((r.getTime() - t.getTime()) / 1e3) / 86400;
    o = Math.ceil((5 + f - c) % 12);
  }
  return ["建日", "除日", "满日", "平日", "定日", "执日", "破日", "危日", "成日", "收日", "开日", "闭日"][o >= 2 ? o - 2 : o + 10];
}
function stars28OfDate(e) {
  for (var t = 365 * (e.getFullYear() - 1), i = 0; i < e.getMonth(); i++) {
    t += dayCountOfMonth(i, 0);
  }
  t += e.getDate();
  var r = 0;
  isLeapYear(e.getFullYear()) && (e.getMonth() + 1 > 3 || e.getMonth() + 1 == 3 && e.getDate() >= 1) && (r = 1);
  return ["轸水蚓宿星", "角木蛟宿星", "亢金龙宿星", "氐土貉宿星", "房日兔宿星", "心月狐宿星", "尾火虎宿星", "箕水豹宿星", "斗木獬宿星", "牛金牛宿星", "女土蝠宿星", "虚日鼠宿星", "危月燕宿星", "室火猪宿星", "壁水貐宿星", "奎木狼宿星", "娄金狗宿星", "胃土雉宿星", "昴日鸡宿星", "毕月乌宿星", "觜火猴宿星", "参水猿宿星", "井木犴宿星", "鬼金羊宿星", "柳土獐宿星", "星日马宿星", "张月鹿宿星", "翼火蛇宿星"][(t + Math.floor((e.getFullYear() - 1) / 4 - 13 + r) + 23) % 28];
}
function dayCountOfMonth(e, t) {
  switch (e + 1) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      return t ? 29 : 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 0;
}
function isLeapYear(e) {
  return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
}
function zhiShenOfMonth(e, t) {
  var r = 0;
  0 == e || 6 == e ? r = 8 : 1 == e || 7 == e ? r = 10 : 2 == e || 8 == e ? r = 0 : 3 == e || 9 == e ? r = 2 : 4 == e || 10 == e ? r = 4 : 5 != e && 11 != e || (r = 6);
  var n = t - r;
  n < 0 && (n += 12);
  return ["青龙", "明堂", "天刑", "朱雀", "金匮", "天德", "白虎", "玉堂", "天牢", "玄武", "司命", "勾陈"][n];
}
function querySAByDay(e, t, r) {
  var n = {},
    o = getStemsBranchDay(e),
    c = getStemsBranchMonth(e.getFullYear(), dayOfYear(e) - 1),
    f = getStemsBranchDayAsString(e),
    l = o % 10,
    h = o % 12,
    d = _constants.mPzStemArray[l] + " " + _constants.mPzBranchArray[h];
  n.pzbj = d;
  var v = "",
    y = "",
    w = (c + 10) % 12 + 1;
  t[w + "-" + f] && (v = t[w + "-" + f].JSYQ, y = t[w + "-" + f].XSYJ, n.jsyq = v, n.xsyj = y);
  var m = "";
  _mWxMap.mWxMap[f] && (m = _mWxMap.mWxMap[f], n.wx = m);
  var S = cxInfoOfDateTime(e, -2);
  n.cs = S;
  var k = zhiShenOfMonth(c % 12, o % 12);
  n.zhishen = k;
  n.jxList = (0, _getJxList.getJxList)(e); //12时辰干支吉凶
  var D = jianChuOfDate(e);
  n.jianchu = D;
  var A = stars28OfDate(e);
  n.stars28 = A;
  var T = getStemsBranchMonthAsString(e.getFullYear(), dayOfYear(e) - 1),
    E = getStemsBranchDayAsString(e),
    O = taiShenOfMonthDiZhi(T, E, r);
  return n.taishen = O, n;
}
function twentyFourTermdaysOf(e) {
  try {
    for (var t = e.getFullYear() - 1900, r = dayOfYear(e) - 1, n = 0, o = 0, i = 0; i < 24; i++) {
      var c = _X.X[24 * t + i];
      if (c > r) {
        n = i, o = 0;
        break;
      }
      if (c == r) {
        n = i, o = 1;
        break;
      }
    }
    return [n + 24 * t - 24, o];
  } catch (e) {
    return null;
  }
}
function dayOfYear(e) {
  for (var t = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), r = e.getDate(), n = e.getMonth(), o = e.getFullYear(), c = 0, i = 0; i < n; i++) {
    c += t[i];
  }
  return c += r, (n > 1 && o % 4 == 0 && o % 100 != 0 || o % 400 == 0) && (c += 1), c;
}
function getYJSqlFields(e) {
  var t = ["-1", "-1"],
    r = twentyFourTermdaysOf(e);
  if (2 == r.length) {
    var a = r[0],
      b = r[1],
      n = Math.floor(a % 2 == 0 ? a / 2 : a / 2 + 1);
    b > 0 && a % 2 == 0 && (n += 1);
    var o = new Date(1901, 0, 1),
      c = Math.abs(getIntervalDays(o, e));
    t[0] = (15 + c) % 60 + "", t[1] = Math.floor(Math.abs((5 + c - n) % 12)) + "";
  }
  return t;
}
function getYearWeek(e, t, r) {
  var n = new Date(e, t, r),
    o = new Date(e, 0, 1),
    c = (r = dayOfYear(n), Math.ceil((r + (o.getDay() + 1 - 1)) / 7));
  if (c > 1 && 11 === t) {
    var f = new Date(e + 1, 0, 1),
      l = f.getDay();
    l > 0 && getIntervalDays(n, f) <= l && (c = 1);
  }
  return c;
}
function getLunarHourIndex(e) {
  return (Math.floor(e / 2) + e % 2) % 12;
}
function jixiongStatusOfDateTime(e, t) {
  var r = -1,
    n = getStemsBranchDay(e);
  n > -1 && n < 60 && (r = (_constants.JXTable[n] >> 11 - getLunarHourIndex(t) & 1) > 0 ? 0 : 1);
  return getJXName(r);
}
function getStemsBranchHourAsString(e, t) {
  var r = getLunarHourIndex(t);
  return formatStemsBranchString(getStemBranchHour(e, r));
}
function getCurrentHourYJ(S, J) {
  // var S = getYMD(this.S)

  var Y = getYMD(S),
    t = Y.year,
    e = Y.month,
    n = Y.date;
  // console.log('t, e, n', t, e, n)
  // console.log('solar2lunar', solar2lunar(t, e, n))
  var r = _yijiArr.yijiArr.find(function (S) {
      return S._Date === solar2lunar(t, e, n).gzDay;
    }),
    j = getLunarHourIndex(J);
  return {
    yi: r["Yi".concat(j)].split(" "),
    ji: r["Ji".concat(j)].split(" ")
  };
}
function solar2lunar(e, t, r) {
  // console.log('e, t, r', solar2lunarBase(e, t, r))
  var base = JSON.parse(JSON.stringify(solar2lunarBase(e, t, r))),
    n = toGanZhiYear2(e, base.cMonth - 1, r, base.lYear);
  // console.log('base', base)
  return base.gzYear2 = n, base;
}
function lYearDays(e) {
  var i,
    t = 348;
  for (i = 32768; i > 8; i >>= 1) {
    t += _constants.lunarInfo[e - 1900] & i ? 1 : 0;
  }
  return t + leapDays(e);
}
function monthDays(e, t) {
  return t > 12 || t < 1 ? -1 : _constants.lunarInfo[e - 1900] & 65536 >> t ? 30 : 29;
}
function toGanZhiYear(e, t, r) {
  var n = "";
  n = t < 2 ? cyclical(e - 1900 + 36 - 1) : cyclical(e - 1900 + 36);
  var o = getTerm(e, 3);
  return 1 === t && r >= o && (n = cyclical(e - 1900 + 36)), n;
}
function toGanZhiYear2(e, t, r, n) {
  var o = toGanZhiYear(e, t, r),
    c = lunar2solarBase(e, 1, 1, 0),
    f = new Date(c.cYear, c.cMonth - 1, c.cDay),
    l = getTermTime(e, 3),
    h = solar2lunarBase(l.getFullYear(), l.getMonth(), l.getDate()),
    d = new Date(l.getTime() - 864e5),
    v = solar2lunarBase(d.getFullYear(), d.getMonth(), d.getDate()),
    y = new Date(e, t, r);
  return f.getTime() >= l.getTime() ? y.getTime() >= l.getTime() && y.getTime() < f.getTime() && (o = v.gzYear) : y.getTime() >= f.getTime() && y.getTime() <= l.getTime() && (o = h.gzYear), o;
}
function toAstro(e, t) {
  return "摩羯水瓶双鱼白羊金牛双子巨蟹狮子处女天秤天蝎射手摩羯".substr(2 * e - (t < [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22][e - 1] ? 2 : 0), 2) + "座";
}
function lunar2solarBase(e, t, r, n) {
  n = !!n;
  var o = leapMonth(e);
  if (n && o != t) return -1;
  if (2100 == e && 12 == t && r > 1 || 1900 == e && 1 == t && r < 31) return -1;
  var c = monthDays(e, t),
    f = c;
  if (n && (f = leapDays(e, t)), e < 1900 || e > 2100 || r > f) {
    return -1;
  }
  for (var l = 0, i = 1900; i < e; i++) {
    l += lYearDays(i);
  }
  var h = 0,
    d = !1;
  for (i = 1; i < t; i++) {
    h = leapMonth(e), d || h <= i && h > 0 && (l += leapDays(e), d = !0), l += monthDays(e, i);
  }
  n && (l += c);
  var v = Date.UTC(1900, 1, 30, 0, 0, 0),
    y = new Date(864e5 * (l + r - 31) + v),
    w = y.getUTCFullYear(),
    m = y.getUTCMonth(),
    S = y.getUTCDate();
  return solar2lunarBase(w, m, S);
}
function formatStemsBranchString(e) {
  return e < 0 ? "" : _constants.Gan[e % 10] + _constants.Zhi[e % 12];
}
function compassCNOfDate(e, t) {
  var r = getStemBranchHour(e, t) % 10,
    n = caiCompassValueOfStemIndex(r),
    o = xiCompassValueOfStemIndex(r),
    c = fuCompassValueOfStemIndex(r);
  return "喜神" + _constants.CompassNames[o] + " 财神" + _constants.CompassNames[n] + " 福神" + _constants.CompassNames[c];
}
function caiCompassValueOfStemIndex(e) {
  var t = -1;
  switch (e) {
    case 0:
      t = 1;
      break;
    case 1:
      t = 5;
      break;
    case 2:
    case 3:
      t = 6;
      break;
    case 4:
    case 5:
      t = 0;
      break;
    case 6:
    case 7:
      t = 2;
      break;
    case 8:
    case 9:
      t = 4;
  }
  return t;
}
function xiCompassValueOfStemIndex(e) {
  var t = -1;
  switch (e) {
    case 0:
    case 5:
      t = 1;
      break;
    case 1:
    case 6:
      t = 7;
      break;
    case 2:
    case 7:
      t = 5;
      break;
    case 3:
    case 8:
      t = 4;
      break;
    case 4:
    case 9:
      t = 3;
  }
  return t;
}
function fuCompassValueOfStemIndex(e) {
  var t = -1;
  switch (e) {
    case 0:
    case 1:
      t = 3;
      break;
    case 2:
    case 3:
      t = 2;
      break;
    case 4:
      t = 0;
      break;
    case 5:
      t = 4;
      break;
    case 6:
    case 7:
      t = 5;
      break;
    case 8:
      t = 7;
      break;
    case 9:
      t = 6;
  }
  return t;
}
function getJXName(e) {
  return e < 0 || e > _constants.JXNames.length ? "" : _constants.JXNames[e];
}
function getStemsBranchDay(e) {
  var t = getIntervalDays(_constants.BASE_STEMS_DATE, e);
  return t > 0 ? (6 * parseInt((t + 9) % 10) - 5 * parseInt((t + 3) % 12) + 60) % 60 : -1;
}
function getAnimal(e) {
  var t = (e - 1900) % 12;
  return _constants.Animals[t];
}
function toChinaMonth(e) {
  if (e > 12 || e < 1) return -1;
  var s = _constants.nStr3[e - 1];
  return s += "月";
}
function cxInfoOfDateTime(e, t) {
  var r = branchIndexOfSolar(e, t),
    n = chongIndexOfDateTime(r),
    o = shaDirectionOfDateTime(r);
  try {
    return "冲" + _constants.Animals[n] + "煞" + _constants.CompassNames[o].replace("正", "");
  } catch (e) {
    return "";
  }
}
function getBranchDay(e) {
  var t = getIntervalDays(_constants.BASE_STEMS_DATE, e);
  return t > 0 ? Math.floor((t + 3) % 12) : 0;
}
function chongIndexOfDateTime(e) {
  var t = -1;
  switch (e) {
    case 0:
      t = 6;
      break;
    case 1:
      t = 7;
      break;
    case 2:
      t = 8;
      break;
    case 3:
      t = 9;
      break;
    case 4:
      t = 10;
      break;
    case 5:
      t = 11;
      break;
    case 6:
      t = 0;
      break;
    case 7:
      t = 1;
      break;
    case 8:
      t = 2;
      break;
    case 9:
      t = 3;
      break;
    case 10:
      t = 4;
      break;
    case 11:
      t = 5;
  }
  return t;
}
function getCanlendar(currentDate) {
  console.log(497, 'currentDate', currentDate);
  var self = {};
  var S = getYMD(currentDate),
    J = S.year,
    Y = S.month,
    t = S.date,
    e = S.hour;
  S.miniute;
  self.c_hour = e;
  self.currentCanlender = solar2lunar(J, Y, t);
  self.currentCanlender.isTerm && (self.currentCanlender.termImg = _constants.k["1-".concat(self.currentCanlender.Term)]);
  self.currentCanlender.ncWeek = "周" + self.currentCanlender.ncWeek[2];
  self.currentCanlender.yearWeek = getYearWeek(J, Y, t);
  self.currentJX = querySAByDay(currentDate, _c.c, _l.l);
  var n = new Date(JSON.parse(JSON.stringify(currentDate)));
  if (e >= 23 && self.currentCanlender.isToday) {
    n.setDate(n.getDate() + 1);
    var r = querySAByDay(n, _c.c, _l.l),
      j = r.zhishen,
      y = r.taishen;
    self.currentJX.zhishen = j, self.currentJX.taishen = y;
  }
  var o = getYJSqlFields(currentDate),
    X = "".concat(o[1], "-").concat(o[0]);
  self.currentYJ = _C.C[X], (self.currentCanlender.is4jue || self.currentCanlender.is4li) && (self.currentYJ = {
    y: "-",
    j: "大事勿用 结婚 动手术 搬家 开工开业 建房 出行上任 安葬"
  });
  self.currentYJ = JSON.parse(JSON.stringify(self.currentYJ).replaceAll("-", "无"));
  var m = cxInfoOfDateTime(currentDate, getLunarHourIndex(e));
  self.currentHourYJ = {
    lunarHour: _constants.Zhi[getLunarHourIndex(e)],
    StemBranchHour: getStemsBranchHourAsString(currentDate, e),
    hour: _constants.hoursJson["1-".concat(e)],
    cs: m.substring(0, 2) + " " + m.substring(2, 4),
    caixi: compassCNOfDate(currentDate, getLunarHourIndex(e)),
    yi: getCurrentHourYJ(currentDate, e).yi,
    ji: getCurrentHourYJ(currentDate, e).ji,
    jx: jixiongStatusOfDateTime(currentDate, e)
  };
  console.log(99999, e);
  return self;
}
function getHourInfos(currentDate) {
  var S = getYMD(currentDate),
    J = S.year,
    Y = S.month,
    t = S.date,
    e = S.hour;
  var m = cxInfoOfDateTime(currentDate, getLunarHourIndex(e));

  // console.log(66666, {
  //   lunarHour: Zhi[getLunarHourIndex(e)],
  //   StemBranchHour: getStemsBranchHourAsString(currentDate, e),
  //   hour: hoursJson["1-".concat(e)],
  //   cs: m.substring(0, 2) + " " + m.substring(2, 4),
  //   caixi: compassCNOfDate(currentDate, getLunarHourIndex(e)),
  //   yi: getCurrentHourYJ(currentDate, e).yi,
  //   ji: getCurrentHourYJ(currentDate, e).ji,
  //   jx: jixiongStatusOfDateTime(currentDate, e)
  // })

  return {
    lunarHour: _constants.Zhi[getLunarHourIndex(e)],
    StemBranchHour: getStemsBranchHourAsString(currentDate, e),
    hour: _constants.hoursJson["1-".concat(e)],
    cs: m.substring(0, 2) + " " + m.substring(2, 4),
    caixi: compassCNOfDate(currentDate, getLunarHourIndex(e)),
    yi: getCurrentHourYJ(currentDate, e).yi,
    ji: getCurrentHourYJ(currentDate, e).ji,
    jx: jixiongStatusOfDateTime(currentDate, e)
  };
}
function getDayInfos(date) {
  var S = getYMD(date),
    J = S.year,
    Y = S.month,
    t = S.date;
  // solar2lunar(J, Y, t);
  return getCanlendar(date);
}
function get12ShichenInfos(date) {
  var self = {};
  var S = getYMD(date),
    J = S.year,
    Y = S.month,
    t = S.date,
    e = S.hour;
  self.currentHourYJ = {
    lunarHour: _constants.Zhi[getLunarHourIndex(e)],
    StemBranchHour: getStemsBranchHourAsString(currentDate, e),
    hour: _constants.hoursJson["1-".concat(e)],
    cs: m.substring(0, 2) + " " + m.substring(2, 4),
    caixi: compassCNOfDate(currentDate, getLunarHourIndex(e)),
    yi: getCurrentHourYJ(currentDate, e).yi,
    ji: getCurrentHourYJ(currentDate, e).ji,
    jx: jixiongStatusOfDateTime(currentDate, e)
  };
  return self;

  // return getCanlendar(date)
}

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!*******************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data1/X.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.X = void 0;
var X = [5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, 6, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 282, 297, 312, 327, 341, 356, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, 6, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 282, 297, 312, 327, 341, 356, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, 6, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 282, 297, 312, 326, 341, 356, 5, 19, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 64, 80, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 281, 297, 312, 326, 341, 356, 5, 19, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 50, 64, 80, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 281, 297, 312, 326, 341, 356, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 281, 297, 312, 326, 341, 356, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 173, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 126, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 65, 80, 95, 110, 125, 141, 157, 172, 188, 204, 220, 235, 251, 266, 281, 296, 311, 326, 341, 356, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 64, 80, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 5, 20, 35, 50, 64, 80, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 50, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 251, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 157, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 95, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, 5, 19, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 204, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 63, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 235, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 63, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 341, 355, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 4, 19, 33, 48, 63, 78, 93, 109, 124, 139, 155, 171, 187, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, 4, 19, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 187, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 340, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 340, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 310, 325, 340, 355, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 139, 155, 171, 187, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 279, 295, 310, 325, 339, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 139, 155, 171, 187, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 279, 295, 310, 325, 339, 354, 4, 19, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 234, 249, 264, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 218, 233, 249, 264, 279, 295, 310, 324, 339, 354, 4, 19, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 340, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 3, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 218, 233, 249, 264, 279, 295, 310, 324, 339, 354, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 340, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 3, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 218, 233, 249, 264, 279, 295, 310, 324, 339, 354, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 3, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 218, 233, 249, 264, 279, 294, 309, 324, 339, 354, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 3, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 170, 186, 202, 217, 233, 249, 264, 279, 294, 309, 324, 339, 354, 4, 18, 33, 48, 63, 78, 93, 108, 124, 139, 155, 171, 186, 202, 218, 233, 249, 264, 280, 295, 310, 325, 339, 354, 4, 19, 33, 48, 63, 78, 93, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 354, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 187, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 20, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 35, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 63, 79, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 296, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 341, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 356, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 219, 234, 250, 265, 280, 295, 311, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 4, 19, 34, 49, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 141, 156, 172, 188, 203, 219, 235, 250, 266, 281, 296, 311, 326, 341, 355, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 203, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355, 5, 20, 34, 49, 64, 79, 94, 110, 125, 140, 156, 172, 188, 203, 219, 235, 250, 265, 281, 296, 311, 326, 341, 355, 4, 19, 34, 48, 63, 78, 94, 109, 124, 140, 155, 171, 187, 202, 218, 234, 249, 265, 280, 295, 310, 325, 340, 355, 4, 19, 34, 49, 64, 79, 94, 109, 124, 140, 156, 171, 187, 203, 218, 234, 250, 265, 280, 295, 310, 325, 340, 355, 5, 19, 34, 49, 64, 79, 94, 109, 125, 140, 156, 172, 187, 203, 219, 234, 250, 265, 281, 296, 311, 326, 340, 355];
exports.X = X;

/***/ }),

/***/ 61:
/*!************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data1/wuxing.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wuxing = void 0;
var wuxing = {
  "甲子": "海中金",
  "乙丑": "海中金",
  "丙寅": "炉中火",
  "丁卯": "炉中火",
  "戊辰": "大林木",
  "己巳": "大林木",
  "庚午": "路旁土",
  "辛未": "路旁土",
  "壬申": "剑锋金",
  "癸酉": "剑锋金",
  "甲戌": "山头火",
  "乙亥": "山头火",
  "丙子": "涧下水",
  "丁丑": "涧下水",
  "戊寅": "城头土",
  "己卯": "城头土",
  "庚辰": "白腊金",
  "辛巳": "白腊金",
  "壬午": "杨柳木",
  "癸未": "杨柳木",
  "甲申": "泉中水",
  "乙酉": "泉中水",
  "丙戌": "屋上土",
  "丁亥": "屋上土",
  "戊子": "霹雳火",
  "己丑": "霹雳火",
  "庚寅": "松柏木",
  "辛卯": "松柏木",
  "壬辰": "长流水",
  "癸巳": "长流水",
  "甲午": "沙中金",
  "乙未": "沙中金",
  "丙申": "山下火",
  "丁酉": "山下火",
  "戊戌": "平地木",
  "己亥": "平地木",
  "庚子": "壁上土",
  "辛丑": "壁上土",
  "壬寅": "金箔金",
  "癸卯": "金箔金",
  "甲辰": "覆灯火",
  "乙巳": "覆灯火",
  "丙午": "天河水",
  "丁未": "天河水",
  "戊申": "大驿土",
  "己酉": "大驿土",
  "庚戌": "钗钏金",
  "辛亥": "钗钏金",
  "壬子": "桑拓木",
  "癸丑": "桑拓木",
  "甲寅": "大溪水",
  "乙卯": "大溪水",
  "丙辰": "沙中土",
  "丁巳": "沙中土",
  "戊午": "天上火",
  "己未": "天上火",
  "庚申": "石榴木",
  "辛酉": "石榴木",
  "壬戌": "大海水",
  "癸亥": "大海水"
};
exports.wuxing = wuxing;

/***/ }),

/***/ 62:
/*!*****************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/huangli/getJxList.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJxList = exports.getJx = void 0;
var JXTable = [3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3282, 2868, 733, 1187, 3372, 843, 3282, 2868, 709, 1202, 3372, 843, 3282, 2868, 717, 1203, 3372, 842, 3282, 2868, 717, 1203, 3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3282, 2852, 717, 1187, 3368, 843, 3282, 2868, 717, 1187, 3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3314, 2868, 717, 1203];
var BASE_STEMS_DATE = new Date(1899, 1, 4, 0, 0);
var JXNames = ["吉", "凶"];
var Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
var Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
function getStemsBranchDay(e) {
  var t = getIntervalDays(BASE_STEMS_DATE, e);
  return t > 0 ? (6 * parseInt((t + 9) % 10) - 5 * parseInt((t + 3) % 12) + 60) % 60 : -1;
}
function getLunarHourIndex(e) {
  return (Math.floor(e / 2) + e % 2) % 12;
}
function getJXName(e) {
  return e < 0 || e > JXNames.length ? "" : JXNames[e];
}
function getIntervalDays(e, t) {
  return t.setHours(0), t.setMinutes(0), t.setSeconds(0), t.setMilliseconds(0), Math.floor((t - e) / 864e5);
}
function jixiongStatusOfDateTime(e, t) {
  var r = -1,
    n = getStemsBranchDay(e);
  n > -1 && n < 60 && (r = (JXTable[n] >> 11 - getLunarHourIndex(t) & 1) > 0 ? 0 : 1);
  return getJXName(r);
}
function getStemsBranchHourAsString(e, t) {
  var r = getLunarHourIndex(t);
  return formatStemsBranchString(getStemBranchHour(e, r));
}
function formatStemsBranchString(e) {
  return e < 0 ? "" : Gan[e % 10] + Zhi[e % 12];
}
function getStemBranchHour(e, t) {
  var r = getIntervalDays(BASE_STEMS_DATE, e),
    dt = parseInt((r + 9) % 10);
  return (6 * ((t + 2 * (dt > 4 ? dt - 5 : dt)) % 10) - 5 * t + 60) % 60;
}
function getYMD(S) {
  var J = S || new Date();
  return {
    year: J.getFullYear(),
    month: J.getMonth(),
    date: J.getDate(),
    day: J.getDay(),
    hour: J.getHours(),
    miniute: J.getMinutes(),
    second: J.getSeconds()
  };
}
var getJxList = function getJxList(J) {
  var S = [];
  // this.c_hour >= 23 && this.currentCanlender.isToday && J.setDate(J.getDate() + 1);
  for (var i = 0; i < 12; i++) {
    var s = getStemsBranchHourAsString(J, 2 * i) + jixiongStatusOfDateTime(J, 2 * i);
    S.push(s);
  }
  return S;
};
exports.getJxList = getJxList;
var getJx = function getJx(J) {
  var S = getYMD(J),
    H = S.hour;
  getStemsBranchHourAsString(J, H) + jixiongStatusOfDateTime(J, H);
};
exports.getJx = getJx;

/***/ }),

/***/ 63:
/*!***************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data1/constants.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.solarTerm = exports.solarMonth = exports.nStr3 = exports.nStr2 = exports.nStr1 = exports.mPzStemArray = exports.mPzBranchArray = exports.lunarInfo = exports.k = exports.hoursJson = exports.Zhi = exports.JXTable = exports.JXNames = exports.Gan = exports.CompassNames = exports.BASE_STEMS_DATE = exports.Animals = void 0;
var Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
exports.Gan = Gan;
var Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
exports.Zhi = Zhi;
var Animals = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];
exports.Animals = Animals;
var CompassNames = ["正北", "东北", "正东", "东南", "正南", "西南", "正西", "西北"];
exports.CompassNames = CompassNames;
var solarTerm = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"];
exports.solarTerm = solarTerm;
var nStr1 = ["日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
exports.nStr1 = nStr1;
var nStr2 = ["初", "十", "廿", "卅"];
exports.nStr2 = nStr2;
var nStr3 = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "冬", "腊"];
exports.nStr3 = nStr3;
var JXNames = ["吉", "凶"];
exports.JXNames = JXNames;
var JXTable = [3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3282, 2868, 733, 1187, 3372, 843, 3282, 2868, 709, 1202, 3372, 843, 3282, 2868, 717, 1203, 3372, 842, 3282, 2868, 717, 1203, 3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3282, 2852, 717, 1187, 3368, 843, 3282, 2868, 717, 1187, 3372, 843, 3282, 2868, 717, 1203, 3372, 843, 3314, 2868, 717, 1203];
exports.JXTable = JXTable;
var BASE_STEMS_DATE = new Date(1899, 1, 4, 0, 0);
exports.BASE_STEMS_DATE = BASE_STEMS_DATE;
var mPzStemArray = ["甲不开仓财物耗散", "乙不栽植千株不长", "丙不修灶必见灾殃", "丁不剃头头必生疮", "戊不受田田主不祥", "己不破券二比并亡", "庚不经络织机虚张", "辛不合酱主人不尝", "壬不汲水更难提防", "癸不词讼理弱敌强"];
exports.mPzStemArray = mPzStemArray;
var mPzBranchArray = ["子不问卜自惹祸殃", "丑不冠带主不还乡", "寅不祭祀神鬼不尝", "卯不穿井水泉不香", "辰不哭泣必主重丧", "巳不远行财物伏藏", "午不苫盖屋主更张", "未不服药毒气入肠", "申不安床鬼祟入房", "酉不宴客醉坐颠狂", "戌不吃犬作怪上床", "亥不嫁娶不利新郎"];
exports.mPzBranchArray = mPzBranchArray;
var k = {
  "1-小寒": '',
  "1-大寒": '',
  "1-立春": '',
  "1-雨水": '',
  "1-惊蛰": '',
  "1-春分": '',
  "1-清明": '',
  "1-谷雨": '',
  "1-立夏": '',
  "1-小满": '',
  "1-芒种": '',
  "1-夏至": '',
  "1-小暑": '',
  "1-大暑": '',
  "1-立秋": '',
  "1-处暑": '',
  "1-白露": '',
  "1-秋分": '',
  "1-寒露": '',
  "1-霜降": '',
  "1-立冬": '',
  "1-小雪": '',
  "1-大雪": '',
  "1-冬至": ''
};
exports.k = k;
var solarMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
exports.solarMonth = solarMonth;
var lunarInfo = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 23232, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19195, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835, 37744, 18936, 18800, 25776, 92326, 59984, 27424, 108228, 43744, 41696, 53987, 51552, 54615, 54432, 55888, 23893, 22176, 42704, 21972, 21200, 43448, 43344, 46240, 46758, 44368, 21920, 43940, 42416, 21168, 45683, 26928, 29495, 27296, 44368, 84821, 19296, 42352, 21732, 53600, 59752, 54560, 55968, 92838, 22224, 19168, 43476, 41680, 53584, 62034, 54560];
exports.lunarInfo = lunarInfo;
var hoursJson = {
  "1-23": "23:00 - 00:59",
  "1-0": "23:00 - 00:59",
  "1-1": "01:00 - 02:59",
  "1-2": "01:00 - 02:59",
  "1-3": "03:00 - 04:59",
  "1-4": "03:00 - 04:59",
  "1-5": "05:00 - 06:59",
  "1-6": "05:00 - 06:59",
  "1-7": "07:00 - 08:59",
  "1-8": "07:00 - 08:59",
  "1-9": "09:00 - 10:59",
  "1-10": "09:00 - 10:59",
  "1-11": "11:00 - 12:59",
  "1-12": "11:00 - 12:59",
  "1-13": "13:00 - 14:59",
  "1-14": "13:00 - 14:59",
  "1-15": "15:00 - 16:59",
  "1-16": "15:00 - 16:59",
  "1-17": "17:00 - 18:59",
  "1-18": "17:00 - 18:59",
  "1-19": "19:00 - 20:59",
  "1-20": "19:00 - 20:59",
  "1-21": "21:00 - 22:59",
  "1-22": "21:00 - 22:59"
};
exports.hoursJson = hoursJson;

/***/ }),

/***/ 64:
/*!*************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data1/yijiArr.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yijiArr = void 0;
var yijiArr = [{
  _Date: "甲子",
  Yi0: "结婚 开业 祈福 安葬",
  Ji0: "乘船 造船",
  Yi1: "结婚 出行 祈福 安葬 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 酬神 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji3: "出行 赴任",
  Yi4: "结婚 交易 开业 安床 求财",
  Ji4: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi5: "结婚 交易 搬新房 开业 祈福 求子",
  Ji5: "出行 赴任 安葬 修造 开光",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "结婚 搬新房 祈福 安葬 祭祀 修造 酬神 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 交易 开业 安床 求子 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "搬家 搬新房 开业 安床 盖屋 修造 作灶 酬神 求财",
  Ji9: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi10: "结婚 出行 搬家 安葬 收养子女 求财",
  Ji10: "赴任 诉讼",
  Yi11: "结婚 搬家 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji11: "出行 赴任 求财"
}, {
  _Date: "乙丑",
  Yi0: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji1: "乘船 造船",
  Yi2: "结婚 交易 搬新房 开业 安葬 修造",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 搬新房 开业 赴任 祈福 安葬 祭祀 求子 求财",
  Ji3: "-",
  Yi4: "-",
  Ji4: "动土 修造",
  Yi5: "结婚 搬家 交易 开业 祈福 安床 盖屋 修造 求子 求财",
  Ji5: "出行 赴任",
  Yi6: "结婚 交易 搬新房 开业 安葬 求子 求财",
  Ji6: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 开光 斋醮",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 赴任 祈福 求子 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji9: "出行 赴任 修造",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬 修造",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "结婚 出行 搬新房 开业 赴任 祈福 安葬 祭祀 修造 求子 求财",
  Ji11: "-"
}, {
  _Date: "丙寅",
  Yi0: "出行 赴任 祭祀 酬神 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 修造 作灶 收养子女 求财",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 祈福 安葬 求子",
  Ji2: "赴任 动土 诉讼 修造",
  Yi3: "结婚 出行 搬家 开业 赴任 安葬 修造 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 开业 安葬",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬新房 开业 安葬 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji6: "诸事不宜",
  Yi7: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 修造 求子 斋醮",
  Ji7: "-",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "结婚 交易 搬新房 开业 祈福 安床 安葬 祭祀 求子 求财",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "结婚 出行 交易 开业 安床 祭祀 作灶 求财",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji11: "出行 赴任 修造 开光"
}, {
  _Date: "丁卯",
  Yi0: "祈福 祭祀 作灶 酬神 斋醮",
  Ji0: "出行 赴任 动土 修造",
  Yi1: "结婚 搬家 祈福 安葬 祭祀 收养子女 求子 斋醮 求财",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 搬家 搬新房 安床 安葬 修造 求财",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求子",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji4: "出行 赴任",
  Yi5: "结婚 出行 搬家 交易 搬新房 开业 赴任 祈福 安葬 修造 求子 求财",
  Ji5: "诸事不宜",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 交易 搬新房 开业 祈福 安床 安葬 祭祀 修造 求子 求财",
  Ji7: "-",
  Yi8: "搬新房 安葬 祭祀 修造 酬神 斋醮",
  Ji8: "祈福 求子",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 搬家 赴任 诉讼 修造",
  Yi11: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji11: "出行 赴任 动土 修造"
}, {
  _Date: "戊辰",
  Yi0: "结婚 交易 开业 安床 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 开光 斋醮",
  Yi1: "结婚 安葬 酬神 求财",
  Ji1: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 作灶 酬神 求子 斋醮 见贵",
  Ji2: "出行 赴任",
  Yi3: "求财",
  Ji3: "出行 赴任 祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji4: "出行 赴任 盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 作灶 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 安葬 修造 求财",
  Ji6: "赴任 诉讼 祈福 求子",
  Yi7: "结婚 出行 搬新房 赴任 祈福 安葬 修造 求子 求财",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 出行 交易 开业 安床 求子 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "己巳",
  Yi0: "结婚 出行 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji0: "诸事不宜",
  Yi1: "结婚 搬家 交易 开业 祈福 安床 盖屋 修造 求子 求财",
  Ji1: "出行 赴任",
  Yi2: "出行 赴任 祈福 祭祀 酬神 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 搬新房 安葬 求财",
  Ji3: "出行 赴任 动土 修造",
  Yi4: "结婚 出行 搬家 赴任 安葬 修造 作灶 收养子女 求财",
  Ji4: "祈福 祭祀 酬神 斋醮",
  Yi5: "结婚 搬家 交易 搬新房 开业 安葬 求子 求财",
  Ji5: "出行 赴任 修造 开光",
  Yi6: "结婚 出行 搬新房 开业 赴任 祈福 安葬 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 搬家 搬新房 祈福 安床 盖屋 安葬 祭祀 修造 作灶 酬神 求财",
  Ji7: "-",
  Yi8: "结婚 安葬 求子 求财",
  Ji8: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi9: "结婚 交易 开业 安床 求子 求财",
  Ji9: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi10: "结婚 开业 祈福 安葬",
  Ji10: "出行 赴任 求财",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "庚午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "结婚 出行 祈福 安葬 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "结婚 出行 交易 开业 赴任 安床 求财",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji4: "出行 搬家 赴任 诉讼 修造",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 安葬 求子",
  Ji5: "出行 赴任 动土 修造",
  Yi6: "结婚 搬新房 安葬 作灶 酬神 求财",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 交易 开业 安床 求子 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 搬新房 开业 赴任 祈福 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji9: "-",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "结婚 搬家 搬新房 安葬 修造 收养子女 见贵",
  Ji11: "出行 赴任 求财"
}, {
  _Date: "辛未",
  Yi0: "结婚 搬家 交易 搬新房 开业 安葬 修造",
  Ji0: "赴任 诉讼 祈福 求子",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "结婚 出行 祈福 安葬 求子 求财",
  Ji2: "动土 修造",
  Yi3: "结婚 出行 交易 开业 安床 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 安葬 修造 收养子女 求财",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 酬神 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji6: "出行 搬家 赴任 诉讼 修造",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任 动土 乘船 修造 造船",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 作灶 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 搬新房 安葬 求财",
  Ji9: "出行 赴任 修造",
  Yi10: "结婚 搬家 搬新房 安床 安葬 祭祀 修造",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 搬家 交易 开业 祈福 安床 盖屋 作灶 求子",
  Ji11: "出行 赴任 安葬 修造 开光 求财"
}, {
  _Date: "壬申",
  Yi0: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji0: "动土 修造",
  Yi1: "结婚 出行 搬新房 赴任 祈福 安葬 修造 作灶 造庙 求财",
  Ji1: "-",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 安葬 修造 酬神 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 求子 求财",
  Ji4: "-",
  Yi5: "结婚 出行 祈福 安葬 祭祀 求子 求财",
  Ji5: "-",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 修造 求子 斋醮",
  Ji7: "-",
  Yi8: "结婚 交易 搬新房 开业 安葬",
  Ji8: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi9: "结婚 交易 搬新房 开业 祈福 安葬 求子 求财",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "祈福 祭祀 作灶 酬神 斋醮",
  Ji10: "出行 赴任 动土 修造 求财",
  Yi11: "结婚 搬新房 开业 安葬 求财",
  Ji11: "出行 赴任 修造"
}, {
  _Date: "癸酉",
  Yi0: "结婚 搬新房 开业 安葬 作灶 求子 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 交易 开业 安床 求子 求财",
  Ji1: "出行 赴任 祈福 祭祀 修造 开光 斋醮",
  Yi2: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 祈福 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 开业 安葬 修造",
  Ji6: "祈福 乘船 求子",
  Yi7: "结婚 搬家 祈福 安葬 祭祀 修造 作灶 酬神 收养子女 斋醮 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji8: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 开仓 盖屋 修造 求财",
  Ji9: "乘船 造桥",
  Yi10: "结婚 搬家 安葬 收养子女 求财",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬家 交易 搬新房 开业 安葬 求子 求财",
  Ji11: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮"
}, {
  _Date: "甲戌",
  Yi0: "结婚 交易 搬新房 开业 祈福 安葬 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 修造",
  Yi1: "结婚 祈福 安葬 祭祀 酬神 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 交易 搬新房 开业 祈福 安床 安葬 求子 求财",
  Ji3: "出行 赴任 修造",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 出行 搬家 搬新房 开业 祈福 安床 盖屋 祭祀 作灶",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji6: "赴任 动土 诉讼 修造",
  Yi7: "结婚 搬新房 祈福 安葬 祭祀 修造 酬神 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 开业 赴任 安葬 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "出行 赴任 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬家 搬新房 开业 祈福 安葬 修造",
  Ji10: "乘船 造船",
  Yi11: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji11: "-"
}, {
  _Date: "乙亥",
  Yi0: "结婚 出行 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 搬家 搬新房 赴任 祈福 安床 盖屋 安葬 祭祀 修造 酬神 求财",
  Ji1: "-",
  Yi2: "结婚 交易 开业 安床 求财",
  Ji2: "出行 搬家 赴任 诉讼 祈福 修造 求子",
  Yi3: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 作灶 酬神 收养子女 斋醮 求财",
  Ji4: "动土 修造",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子 求财",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 搬家 交易 开业 安床 盖屋 修造 作灶 求子 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "出行 赴任 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "-",
  Ji9: "出行 赴任 求财",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi11: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "丙子",
  Yi0: "出行 赴任 祭祀 酬神 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 求子 求财",
  Ji2: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi3: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 求财",
  Ji3: "出行 赴任",
  Yi4: "结婚 交易 开业 安床 求子 求财",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬新房 开业 安葬 求财",
  Ji5: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "-",
  Ji7: "出行 赴任 动土 修造",
  Yi8: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji9: "-",
  Yi10: "结婚 出行 搬家 安葬 收养子女 求财",
  Ji10: "赴任 诉讼 祈福 乘船 求子",
  Yi11: "结婚 出行 求子 求财",
  Ji11: "祈福 安葬 祭祀 修造 酬神 开光 斋醮"
}, {
  _Date: "丁丑",
  Yi0: "结婚 出行 交易 开业 安床 求子 求财",
  Ji0: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi1: "结婚 出行 搬家 赴任 祈福 安葬 收养子女 求财",
  Ji1: "乘船 造船",
  Yi2: "结婚 开业",
  Ji2: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi3: "修造 作灶 酬神",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "-",
  Ji4: "动土 修造",
  Yi5: "结婚 出行 搬家 交易 开业 赴任 祈福 安床 盖屋 修造 求子 求财",
  Ji5: "-",
  Yi6: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji6: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "祭祀 修造 作灶 酬神 斋醮",
  Ji8: "出行 赴任 祈福 求子 求财",
  Yi9: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji9: "-",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬",
  Ji10: "出行 赴任 动土 修造",
  Yi11: "出行 搬家 搬新房 开业 赴任 祈福 安床 盖屋 祭祀 修造 作灶 酬神 求财",
  Ji11: "-"
}, {
  _Date: "戊寅",
  Yi0: "结婚 开业 安葬 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 出行 搬家 搬新房 开业 安床 盖屋 修造 作灶 求财",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji2: "赴任 诉讼",
  Yi3: "出行 搬新房 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬新房 赴任 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 搬家 搬新房 开业 安葬 修造",
  Ji6: "祈福 求子",
  Yi7: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 修造 酬神 求财",
  Ji7: "-",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "-",
  Ji9: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi10: "修造 作灶 酬神",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 安葬 合嵴",
  Ji11: "出行 赴任 祈福 祭祀 修造 开光 斋醮"
}, {
  _Date: "己卯",
  Yi0: "结婚 出行 祈福 安葬 祭祀 修造 作灶 酬神 求财",
  Ji0: "-",
  Yi1: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 出行 交易 开业 安床 求子 求财",
  Ji2: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi3: "搬新房 安葬 修造",
  Ji3: "乘船 造船",
  Yi4: "结婚 出行 安葬 祭祀 斋醮",
  Ji4: "赴任 诉讼 祈福 乘船 求子",
  Yi5: "结婚 出行 搬家 搬新房 赴任 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 开业 赴任 祈福 安葬 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji7: "-",
  Yi8: "结婚 安葬 求子",
  Ji8: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 祈福 安葬 祭祀 合嵴",
  Ji10: "出行 搬家 赴任 诉讼 修造",
  Yi11: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "庚辰",
  Yi0: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi1: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 出行 搬家 搬新房 赴任 安葬 祭祀 修造 作灶 酬神 斋醮 求财",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 求财",
  Ji4: "动土 乘船 修造 造桥",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji5: "-",
  Yi6: "出行 酬神 求财",
  Ji6: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 搬家 安葬 酬神 收养子女 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 搬新房 开业 赴任 祈福 求子 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji9: "-",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 出行 搬家 搬新房 赴任 安葬 修造 收养子女 求财",
  Ji11: "-"
}, {
  _Date: "辛巳",
  Yi0: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 出行 交易 开业 赴任 祈福 安床 安葬 修造 求子 求财",
  Ji1: "-",
  Yi2: "结婚 祈福 安葬 祭祀 酬神 求财",
  Ji2: "出行 赴任 动土 修造",
  Yi3: "结婚 搬家 开业 安葬 求财",
  Ji3: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi4: "修造 作灶",
  Ji4: "祈福 祭祀 酬神 斋醮",
  Yi5: "结婚 搬新房 安葬 酬神 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 祭祀 修造 求财",
  Ji6: "-",
  Yi7: "结婚 出行 搬家 搬新房 开业 祈福 安床 盖屋 安葬 祭祀 修造 作灶 求子 斋醮",
  Ji7: "-",
  Yi8: "结婚 祈福 安葬 祭祀 修造 合嵴 求子",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji9: "出行 赴任",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 乘船 求子",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "壬午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "祈福 祭祀 作灶 酬神 斋醮",
  Ji1: "动土 修造",
  Yi2: "结婚 出行 交易 开业 安床 求子 求财",
  Ji2: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi3: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 酬神 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji4: "出行 搬家 赴任 诉讼 修造",
  Yi5: "求财",
  Ji5: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi6: "结婚 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji6: "出行 赴任 盖屋 入殓 上梁",
  Yi7: "结婚 祈福 安葬 祭祀 合嵴",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji8: "祈福 求子",
  Yi9: "结婚 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji9: "出行 赴任 求财",
  Yi10: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji10: "赴任 动土 诉讼 修造",
  Yi11: "结婚 出行 赴任 祈福 安葬 求子 求财",
  Ji11: "诸事不宜"
}, {
  _Date: "癸未",
  Yi0: "结婚 出行 搬新房 开业 安葬 求子 求财",
  Ji0: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "结婚 交易 搬新房 开业 安葬 修造 求子",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 酬神 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 交易 开业 安床 求财",
  Ji6: "祈福 祭祀 求子",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 作灶 酬神 收养子女 斋醮 求财",
  Ji8: "动土 修造",
  Yi9: "-",
  Ji9: "出行 赴任 求财",
  Yi10: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬家 交易 开业 安床 盖屋 修造 作灶 求子 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "甲申",
  Yi0: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji0: "-",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 盖屋 安葬 修造 作灶 求子 求财",
  Ji1: "-",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 搬家 搬新房 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 搬新房 安葬 祭祀 修造",
  Ji4: "祈福 求子",
  Yi5: "结婚 祈福 祭祀 合嵴",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 搬家 搬新房 祈福 安葬",
  Ji6: "出行 赴任 动土 修造",
  Yi7: "结婚 出行 搬家 搬新房 开业 安床 开仓 盖屋 修造 求财",
  Ji7: "祈福 祭祀 酬神 斋醮",
  Yi8: "结婚 交易 搬新房 开业 安葬 求子",
  Ji8: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 酬神 斋醮",
  Yi9: "酬神 求财",
  Ji9: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi10: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 修造 作灶 酬神 收养子女 斋醮 求财",
  Ji10: "-",
  Yi11: "结婚 搬家 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji11: "-"
}, {
  _Date: "乙酉",
  Yi0: "结婚 出行 祈福 安葬 祭祀 作灶 求子 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji2: "祈福 求子",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 祈福 安葬 祭祀 合嵴",
  Ji4: "动土 修造",
  Yi5: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji5: "出行 赴任",
  Yi6: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi7: "修造 作灶 酬神",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi8: "出行 赴任 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 求财",
  Ji9: "乘船 造桥",
  Yi10: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji10: "盖屋 入殓 上梁",
  Yi11: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji11: "出行 赴任 动土 修造"
}, {
  _Date: "丙戌",
  Yi0: "祭祀 酬神 求财",
  Ji0: "出行 搬家 赴任 诉讼 祈福 修造 求子",
  Yi1: "结婚 搬家 安葬 修造 收养子女 求财",
  Ji1: "出行 赴任",
  Yi2: "结婚 出行 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji2: "动土 修造",
  Yi3: "结婚 祈福 安葬 祭祀 合嵴",
  Ji3: "出行 赴任 修造",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 搬家 搬新房 开业 安床 盖屋 安葬 修造 作灶 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "-",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 搬新房 安葬 修造 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 出行 安葬 祭祀 斋醮",
  Ji10: "祈福 乘船 求子 造船",
  Yi11: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 酬神 求财",
  Ji11: "安葬 修造 开光"
}, {
  _Date: "丁亥",
  Yi0: "结婚 出行 搬家 开业 赴任 安葬 求财",
  Ji0: "动土 修造",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 收养子女 求财",
  Ji1: "-",
  Yi2: "结婚 安葬 修造 合嵴",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi4: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 修造 作灶 酬神 收养子女 斋醮 求财",
  Ji4: "-",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "结婚 出行 祈福 安葬 求子 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 交易 搬新房 开业 祈福 安床 安葬 祭祀 修造 求子 求财",
  Ji7: "-",
  Yi8: "搬新房 安葬 修造",
  Ji8: "赴任 诉讼 祈福 乘船 求子",
  Yi9: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求财",
  Ji9: "诸事不宜",
  Yi10: "结婚 开业 安葬",
  Ji10: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi11: "祈福 祭祀 酬神 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "戊子",
  Yi0: "结婚 开业 安葬 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 安葬 修造 合嵴",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子 求财",
  Ji2: "出行 赴任",
  Yi3: "搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 修造 酬神 求财",
  Ji3: "出行 赴任",
  Yi4: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬新房 赴任 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "结婚 祈福 安葬 求子 求财",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 修造 作灶 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬家 安葬 收养子女 求财",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji11: "祈福 祭祀 酬神 斋醮"
}, {
  _Date: "己丑",
  Yi0: "结婚 出行 祈福 安葬 求子 求财",
  Ji0: "-",
  Yi1: "结婚 搬家 安葬 收养子女 求财",
  Ji1: "出行 赴任 乘船 造船",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 搬新房 祈福 安葬 祭祀 修造 斋醮",
  Ji3: "-",
  Yi4: "-",
  Ji4: "祈福 求子",
  Yi5: "结婚 出行 搬家 交易 开业 祈福 安床 盖屋 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 赴任 祈福 安葬 求子 求财",
  Ji6: "动土 修造",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "结婚 搬家 安葬 修造 作灶 酬神 收养子女 求财",
  Ji8: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi9: "结婚 出行 交易 开业 安床 求子 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬 祭祀 修造",
  Ji10: "出行 赴任",
  Yi11: "结婚 搬家 搬新房 开业 祈福 安床 盖屋 修造 作灶 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "庚寅",
  Yi0: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 修造 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 安葬 修造 求财",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "结婚 搬家 交易 搬新房 开业 安葬 修造",
  Ji2: "赴任 诉讼 祈福 乘船 求子",
  Yi3: "结婚 交易 搬新房 开业 安葬 修造 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 出行 搬家 开业 赴任 祈福 安葬 斋醮 求财",
  Ji4: "动土 修造",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 祭祀 修造 作灶 酬神 求子 斋醮",
  Ji5: "-",
  Yi6: "结婚 交易 开业 安床 求子",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi7: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 酬神 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "结婚 搬家 交易 搬新房 开业 祈福 安葬 求子",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "结婚 出行 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji10: "盖屋 入殓 上梁",
  Yi11: "结婚 交易 搬新房 开业 祈福 安床 安葬 求子 求财",
  Ji11: "出行 赴任 修造"
}, {
  _Date: "辛卯",
  Yi0: "结婚 搬家 交易 搬新房 开业 祭祀 修造 作灶 酬神 斋醮",
  Ji0: "出行 赴任 祈福 求子",
  Yi1: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji2: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi3: "搬家 搬新房 开业 安床 盖屋 修造 作灶",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 出行 安葬 求子",
  Ji4: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬新房 安葬 酬神 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 祈福 安葬 祭祀 修造 酬神 见贵",
  Ji6: "出行 赴任 求财",
  Yi7: "结婚 出行 搬新房 祈福 安葬 祭祀 修造",
  Ji7: "-",
  Yi8: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 交易 开业 安床 求财",
  Ji10: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi11: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji11: "出行 赴任 动土 修造 开光"
}, {
  _Date: "壬辰",
  Yi0: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji0: "赴任 动土 修造",
  Yi1: "结婚 搬家 祈福 安葬 收养子女 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 搬家 搬新房 安葬 求财",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 出行 搬家 交易 搬新房 开业 安葬 修造 求子 求财",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 祈福 安床 安葬 祭祀 修造",
  Ji4: "乘船 造桥",
  Yi5: "结婚 出行 搬新房 赴任 安葬 修造 求子",
  Ji5: "祈福 祭祀 酬神 斋醮",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 搬新房 祈福 安葬 修造",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 交易 开业 安床 求财",
  Ji8: "祈福 求子",
  Yi9: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji9: "-",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 安葬 修造 求财",
  Ji11: "-"
}, {
  _Date: "癸巳",
  Yi0: "结婚 安葬 求子 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 求子 求财",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "-",
  Ji2: "出行 赴任 祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 交易 开业 安床 作灶 求子 求财",
  Ji4: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi5: "结婚 出行 搬新房 赴任 祈福 祭祀 酬神 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji6: "祈福 乘船 求子",
  Yi7: "结婚 搬家 搬新房 开业 祈福 安床 盖屋 安葬 祭祀 修造 作灶 求子 斋醮",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji9: "出行 赴任",
  Yi10: "结婚 开业 安葬",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "甲午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji1: "-",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji3: "-",
  Yi4: "结婚 安葬 祭祀 斋醮",
  Ji4: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi5: "结婚 搬家 搬新房 安葬",
  Ji5: "出行 赴任 动土 祈福 祭祀 修造 酬神 开光 斋醮",
  Yi6: "结婚 搬新房 祈福 安葬 作灶 造庙",
  Ji6: "出行 赴任 动土 修造",
  Yi7: "结婚 祈福 安葬 求子 求财",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "搬家 搬新房 开业 安床 盖屋 修造 作灶 酬神 求财",
  Ji9: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi10: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji10: "赴任 诉讼",
  Yi11: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji11: "诸事不宜"
}, {
  _Date: "乙未",
  Yi0: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求财",
  Ji0: "赴任 诉讼 盖屋 入殓 上梁",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "结婚 搬家 交易 搬新房 开业 安葬 修造",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji3: "-",
  Yi4: "-",
  Ji4: "动土 修造",
  Yi5: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 求财",
  Ji5: "出行 赴任",
  Yi6: "结婚 出行 交易 开业 安床 求子 求财",
  Ji6: "祈福 祭祀 酬神 斋醮",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任 动土 祈福 乘船 祭祀 修造 开光 造船 斋醮",
  Yi8: "结婚 出行 求子 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "-",
  Ji9: "出行 赴任 修造",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "结婚 出行 搬家 交易 开业 祈福 安床 盖屋 祭祀 修造 作灶 求子 求财",
  Ji11: "-"
}, {
  _Date: "丙申",
  Yi0: "结婚 出行 交易 开业 赴任 安床 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 搬家 搬新房 开业 赴任 祈福 安床 盖屋 修造 作灶 求子 求财",
  Ji1: "-",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 酬神 收养子女 斋醮 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 交易 开业 安床 求子",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi5: "结婚 交易 开业 安床 求子 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 搬家 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji6: "诸事不宜",
  Yi7: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 求子",
  Ji7: "祈福 祭祀 酬神 斋醮",
  Yi8: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji8: "出行 搬家 赴任 诉讼 乘船 盖屋 修造 入殓 上梁 造船",
  Yi9: "结婚 祈福 安葬 祭祀 酬神 求财",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "祭祀 修造 作灶 酬神 斋醮",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 祈福 安葬 求子 求财",
  Ji11: "出行 赴任 修造 开光"
}, {
  _Date: "丁酉",
  Yi0: "祈福 祭祀 作灶 酬神 斋醮",
  Ji0: "动土 修造",
  Yi1: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "赴任 诉讼",
  Yi5: "结婚 交易 开业 祈福 安床 求子",
  Ji5: "出行 赴任 求财",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 交易 搬新房 开业 祈福 安葬 祭祀 修造 求子",
  Ji7: "-",
  Yi8: "-",
  Ji8: "祈福 乘船 祭祀 求子",
  Yi9: "结婚 出行 搬新房 祈福 安葬 祭祀 酬神 求子 求财",
  Ji9: "乘船 造桥",
  Yi10: "结婚 安葬 收养子女 求财",
  Ji10: "出行 搬家 赴任 诉讼 修造",
  Yi11: "祈福 祭祀 酬神 求财",
  Ji11: "出行 赴任 动土 修造"
}, {
  _Date: "戊戌",
  Yi0: "结婚 安葬 收养子女 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 开光 斋醮",
  Yi1: "结婚 安葬 修造 酬神 求财",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji2: "出行 赴任",
  Yi3: "结婚 交易 搬新房 开业 祈福 安床 安葬 求子 求财",
  Ji3: "出行 赴任 修造",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 搬新房 开业 见贵",
  Ji5: "出行 赴任 安葬 修造 开光 求财",
  Yi6: "结婚 出行 交易 开业 赴任 安床 求财",
  Ji6: "祈福 求子",
  Yi7: "结婚 出行 搬新房 赴任 祈福 安葬 修造 求子 求财",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 酬神 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 出行 搬家 开业 安葬 修造",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 安葬 求子",
  Ji10: "出行 赴任 祈福 乘船 祭祀 开光 造船 斋醮",
  Yi11: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "己亥",
  Yi0: "结婚 出行 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji0: "诸事不宜",
  Yi1: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 求财",
  Ji1: "出行 赴任",
  Yi2: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 交易 搬新房 开业 赴任 祈福 安床 安葬 修造 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 搬家 赴任 安葬 祭祀 修造 作灶 酬神 收养子女 斋醮 求财",
  Ji4: "祈福 乘船 求子",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji7: "-",
  Yi8: "结婚 出行 安葬 求子 求财",
  Ji8: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi9: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 祭祀 酬神 斋醮",
  Yi11: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji11: "出行 赴任 乘船 造桥"
}, {
  _Date: "庚子",
  Yi0: "结婚 开业 祈福 安葬",
  Ji0: "出行 赴任 乘船 盖屋 入殓 上梁 造船",
  Yi1: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求财",
  Ji1: "-",
  Yi2: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji2: "祈福 求子",
  Yi3: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 开仓 盖屋 修造 求子 见贵",
  Ji3: "-",
  Yi4: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji4: "出行 搬家 赴任 诉讼 修造",
  Yi5: "结婚 搬家 交易 搬新房 开业 安葬 求子",
  Ji5: "出行 赴任 动土 修造",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "结婚 安葬 修造 酬神 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 交易 搬新房 开业 赴任 祈福 安床 求子 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 出行 搬家 交易 搬新房 开业 赴任 祈福 安葬 修造 求子 求财",
  Ji9: "-",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "结婚 出行 搬家 搬新房 赴任 安葬 修造 收养子女 求财",
  Ji11: "祈福 祭祀 酬神 斋醮"
}, {
  _Date: "辛丑",
  Yi0: "结婚 出行 交易 开业 安床 求财",
  Ji0: "祈福 求子",
  Yi1: "安葬 修造",
  Ji1: "乘船 造船",
  Yi2: "结婚 出行 祈福 安葬 求子 求财",
  Ji2: "动土 修造",
  Yi3: "修造 作灶",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 安葬 修造 收养子女 求财",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 搬家 交易 开业 安床 盖屋 修造 求子 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 赴任 祈福 安葬 求子 求财",
  Ji6: "-",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 作灶 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 交易 搬新房 开业 赴任 祈福 安床 安葬 修造 求子 求财",
  Ji9: "-",
  Yi10: "结婚 搬家 搬新房 安床 安葬 祭祀 修造",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 作灶 求财",
  Ji11: "安葬 修造 开光"
}, {
  _Date: "壬寅",
  Yi0: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 求子 求财",
  Ji0: "动土 修造",
  Yi1: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求子",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "-",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 安葬 修造 酬神 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 开业 祈福 安葬 祭祀 见贵",
  Ji4: "出行 赴任 求财",
  Yi5: "结婚 出行 安葬 修造 求财",
  Ji5: "祈福 祭祀 酬神 斋醮",
  Yi6: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 出行 搬家 搬新房 赴任 祈福 安葬 祭祀 修造 收养子女 求子 斋醮 求财",
  Ji7: "-",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "结婚 交易 搬新房 开业 祈福 安葬 祭祀 求子 求财",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "结婚 出行 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji10: "动土 修造",
  Yi11: "结婚 祈福 安葬 求子 求财",
  Ji11: "出行 赴任 修造"
}, {
  _Date: "癸卯",
  Yi0: "结婚 搬新房 开业 安葬 求子 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 安葬 求子",
  Ji1: "出行 赴任 祈福 祭祀 修造 开光 斋醮",
  Yi2: "结婚 出行 搬家 搬新房 赴任 安床 安葬 修造 求财",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 搬家 搬新房 开业 祈福 安床 盖屋 安葬 修造 作灶 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "赴任 诉讼 盖屋 入殓 上梁",
  Yi5: "结婚 出行 赴任 祈福 祭祀 酬神 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 开业 安葬 修造",
  Ji6: "祈福 乘船 求子",
  Yi7: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji8: "动土 修造",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 交易 开业 安床 求子 求财",
  Ji10: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 开光 斋醮",
  Yi11: "结婚 交易 开业 安床 求子 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "甲辰",
  Yi0: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 修造",
  Yi1: "结婚 搬新房 祈福 安葬 求子",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 作灶 酬神 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 搬家 交易 搬新房 开业 安葬 求子",
  Ji3: "出行 赴任 祈福 祭祀 修造 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji4: "出行 赴任 祈福 乘船 求子",
  Yi5: "结婚 出行 搬家 搬新房 开业 祈福 安床 盖屋 祭祀 作灶",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 搬家 开业 安葬 求财",
  Ji6: "出行 赴任 动土 修造",
  Yi7: "结婚 出行 搬新房 赴任 祈福 安葬 修造 求子 求财",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 交易 开业 安床 求子 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "结婚 交易 开业 安床 求子 求财",
  Ji9: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji11: "-"
}, {
  _Date: "乙巳",
  Yi0: "结婚 出行 祈福 安葬 求子 求财",
  Ji0: "盖屋 入殓 上梁",
  Yi1: "结婚 出行 交易 搬新房 开业 赴任 祈福 安床 安葬 修造 求子 求财",
  Ji1: "-",
  Yi2: "结婚 搬新房 安葬",
  Ji2: "出行 搬家 赴任 诉讼 祈福 乘船 修造 求子",
  Yi3: "结婚 搬新房 开业 祈福 安葬 求子 求财",
  Ji3: "出行 赴任 动土 修造",
  Yi4: "结婚 出行 搬家 赴任 安葬 作灶 收养子女 求财",
  Ji4: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi5: "结婚 搬新房 祈福 盖屋 安葬 修造 作灶 造庙 求财",
  Ji5: "出行 赴任 乘船 造船",
  Yi6: "结婚 搬家 搬新房 安床 安葬 修造 求子",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求子",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 交易 开业 安床 求子 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji9: "诸事不宜",
  Yi10: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji10: "盖屋 入殓 上梁",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "丙午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji1: "-",
  Yi2: "结婚 出行 交易 开业 安床 求子 求财",
  Ji2: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi3: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 开仓 盖屋 修造 求子 见贵",
  Ji3: "-",
  Yi4: "结婚 搬新房 安葬 修造 求子",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 出行 搬新房 开业 赴任 安葬 求财",
  Ji5: "祈福 祭祀 酬神 斋醮",
  Yi6: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 作灶 求子",
  Ji6: "乘船 造桥",
  Yi7: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 赴任 祈福 安葬 祭祀 修造 酬神 求财",
  Ji9: "-",
  Yi10: "结婚 出行 交易 开业 赴任 安床 求财",
  Ji10: "祈福 乘船 求子",
  Yi11: "结婚 出行 赴任 祈福 求子 求财",
  Ji11: "安葬 修造 开光"
}, {
  _Date: "丁未",
  Yi0: "-",
  Ji0: "赴任 动土 诉讼 修造",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "-",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 交易 搬新房 开业 祈福 安葬 修造 求子",
  Ji4: "出行 赴任",
  Yi5: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 求子 求财",
  Ji5: "-",
  Yi6: "结婚 出行 交易 开业 赴任 安床 求子 求财",
  Ji6: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任 动土 修造",
  Yi8: "结婚 出行 搬家 赴任 安葬 祭祀 作灶 收养子女 求财",
  Ji8: "祈福 求子",
  Yi9: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求子 求财",
  Ji9: "-",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬",
  Ji10: "出行 赴任 动土 修造",
  Yi11: "出行 搬家 搬新房 开业 赴任 祈福 安床 盖屋 祭祀 修造 作灶 酬神 求财",
  Ji11: "-"
}, {
  _Date: "戊申",
  Yi0: "结婚 搬家 搬新房 安床 安葬 修造 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 酬神 求财",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 出行 搬新房 赴任 祈福 安葬 修造 求子 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 搬家 开业 祈福 斋醮",
  Ji5: "出行 赴任 安葬 修造 开光",
  Yi6: "结婚 搬家 交易 搬新房 开业 安葬 修造",
  Ji6: "祈福 求子",
  Yi7: "结婚 出行 搬家 搬新房 开业 安床 开仓 盖屋 安葬 修造 求子 求财",
  Ji7: "祈福 祭祀 酬神 斋醮",
  Yi8: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji8: "出行 搬家 赴任 诉讼 修造",
  Yi9: "-",
  Ji9: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi10: "修造 作灶 酬神",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬新房 安葬 修造 作灶 造庙",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "己酉",
  Yi0: "结婚 出行 搬新房 祈福 盖屋 安葬 祭祀 修造 作灶",
  Ji0: "-",
  Yi1: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "出行 赴任",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji2: "动土 修造",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 安床 求财",
  Ji4: "赴任 诉讼 祈福 乘船 求子",
  Yi5: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 开业 赴任 祈福 安葬 求财",
  Ji6: "动土 修造",
  Yi7: "结婚 出行 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji7: "-",
  Yi8: "结婚 出行 安葬 修造 求财",
  Ji8: "祈福 祭祀 酬神 斋醮",
  Yi9: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬家 安葬 收养子女 求财",
  Ji10: "出行 赴任",
  Yi11: "结婚 搬家 安葬 收养子女 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "庚戌",
  Yi0: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji0: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi1: "结婚 祈福 安葬 祭祀 酬神 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 交易 开业 安床 祭祀 作灶",
  Ji2: "出行 赴任 祈福 求子 求财",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 祈福 祭祀 修造 酬神 斋醮",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 修造 酬神 求子 斋醮",
  Ji5: "-",
  Yi6: "酬神 求财",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 安葬 修造 酬神 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 开业 赴任 祈福 求财",
  Ji8: "安葬 修造 开光",
  Yi9: "结婚 搬家 交易 搬新房 开业 修造 作灶 求子",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji10: "盖屋 入殓 上梁",
  Yi11: "结婚 出行 搬家 搬新房 赴任 安葬 修造 收养子女 求财",
  Ji11: "-"
}, {
  _Date: "辛亥",
  Yi0: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求财",
  Ji0: "祈福 求子",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 收养子女 求财",
  Ji1: "-",
  Yi2: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji2: "出行 搬家 赴任 诉讼 修造",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi4: "结婚 搬家 安葬 修造 作灶 酬神 收养子女 求财",
  Ji4: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "出行 赴任 祈福 祭祀 酬神 求财",
  Ji6: "-",
  Yi7: "结婚 出行 搬家 交易 开业 祈福 安床 盖屋 祭祀 修造 作灶 求子 求财",
  Ji7: "-",
  Yi8: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji8: "赴任 诉讼 盖屋 入殓 上梁",
  Yi9: "结婚 搬新房 开业 安葬 修造 求财",
  Ji9: "出行 赴任",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 乘船 祭祀 求子",
  Yi11: "祈福 祭祀 作灶 酬神 斋醮",
  Ji11: "乘船 安葬 修造 开光 造桥"
}, {
  _Date: "壬子",
  Yi0: "结婚 搬家 交易 搬新房 开业 祈福 安葬 求子",
  Ji0: "动土 乘船 修造 造船",
  Yi1: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "-",
  Yi2: "-",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 安葬 修造 求子 求财",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "出行 搬家 赴任 诉讼 修造",
  Yi5: "结婚 安葬 求子 求财",
  Ji5: "出行 赴任 动土 祈福 祭祀 修造 酬神 斋醮",
  Yi6: "-",
  Ji6: "诸事不宜",
  Yi7: "结婚 搬家 搬新房 安葬 修造 收养子女 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 出行 交易 开业 安床 求财",
  Ji8: "祈福 求子",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 祈福 安床 盖屋 修造 作灶 求子 求财",
  Ji9: "-",
  Yi10: "结婚 出行 搬家 安葬 收养子女 求财",
  Ji10: "赴任 动土 诉讼 修造",
  Yi11: "结婚 出行 搬新房 开业 赴任 安葬 求财",
  Ji11: "祈福 祭祀 酬神 斋醮"
}, {
  _Date: "癸丑",
  Yi0: "结婚 出行 搬新房 开业 赴任 安葬 求子 求财",
  Ji0: "祈福 祭祀 酬神 斋醮",
  Yi1: "-",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "结婚 开业 安葬",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 搬新房 祈福 安葬 祭祀 酬神 求子 求财",
  Ji3: "-",
  Yi4: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "结婚 出行 搬家 交易 开业 祈福 安床 盖屋 祭祀 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 开业 安葬 求财",
  Ji6: "出行 搬家 赴任 诉讼 祈福 修造 求子",
  Yi7: "-",
  Ji7: "诸事不宜",
  Yi8: "结婚 出行 搬家 赴任 祈福 安葬 祭祀 作灶 酬神 收养子女 斋醮 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 搬新房 祈福 盖屋 安葬 祭祀",
  Ji9: "出行 赴任 修造",
  Yi10: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "甲寅",
  Yi0: "结婚 搬家 搬新房 祈福 安床 安葬 修造",
  Ji0: "出行 赴任 求财",
  Yi1: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 修造 作灶 求财",
  Ji1: "祈福 祭祀 酬神 斋醮",
  Yi2: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 酬神 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 搬家 交易 搬新房 开业 赴任 安葬 修造 求子 求财",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 开业 赴任 安葬 求财",
  Ji4: "祈福 乘船 求子",
  Yi5: "结婚 搬家 开业 祈福 斋醮 见贵",
  Ji5: "出行 赴任 安葬 修造 开光",
  Yi6: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji6: "出行 赴任 动土 修造",
  Yi7: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 安葬 祭祀 修造 求子 求财",
  Ji7: "-",
  Yi8: "-",
  Ji8: "诸事不宜",
  Yi9: "酬神 求财",
  Ji9: "出行 赴任 动土 祈福 祭祀 修造 开光 斋醮",
  Yi10: "结婚 出行 交易 开业 赴任 祈福 安床 祭祀 作灶 求子 求财",
  Ji10: "-",
  Yi11: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji11: "出行 赴任 修造"
}, {
  _Date: "乙卯",
  Yi0: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji0: "出行 赴任 盖屋 入殓 上梁",
  Yi1: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji2: "祈福 乘船 祭祀 酬神 斋醮",
  Yi3: "结婚 出行 搬家 搬新房 开业 赴任 祈福 盖屋 安葬 修造 求子 求财",
  Ji3: "-",
  Yi4: "结婚 祈福 安葬 祭祀 求子 斋醮",
  Ji4: "出行 赴任 动土 修造",
  Yi5: "结婚 搬新房 祈福 盖屋 安葬 修造 作灶 造庙 求财",
  Ji5: "出行 赴任",
  Yi6: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 交易 开业 安床 求子 求财",
  Ji7: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi8: "结婚 出行 求财",
  Ji8: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi9: "-",
  Ji9: "诸事不宜",
  Yi10: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji10: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi11: "结婚 交易 搬新房 开业 祈福 安床 安葬 祭祀 求子 求财",
  Ji11: "出行 赴任 动土 修造"
}, {
  _Date: "丙辰",
  Yi0: "结婚 交易 开业 安床 祭祀 求财",
  Ji0: "出行 搬家 赴任 诉讼 祈福 修造 求子",
  Yi1: "结婚 搬家 安葬 收养子女 求财",
  Ji1: "出行 赴任 动土 修造",
  Yi2: "结婚 出行 搬家 交易 搬新房 开业 赴任 祈福 安葬 祭祀 作灶 酬神 求子 斋醮",
  Ji2: "动土 修造",
  Yi3: "-",
  Ji3: "出行 赴任 祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji4: "出行 赴任 祈福 乘船 祭祀 开光 造桥 斋醮",
  Yi5: "结婚 搬家 搬新房 开业 安床 盖屋 修造 作灶 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 搬家 交易 搬新房 开业 祈福 安葬 修造 求子 求财",
  Ji6: "赴任 诉讼",
  Yi7: "结婚 出行 搬家 赴任 安葬 收养子女 求财",
  Ji7: "动土 修造",
  Yi8: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji8: "盖屋 入殓 上梁",
  Yi9: "结婚 出行 交易 搬新房 开业 祈福 安床 安葬 祭祀 修造 求子 求财",
  Ji9: "-",
  Yi10: "-",
  Ji10: "诸事不宜",
  Yi11: "结婚 出行 搬家 搬新房 开业 祈福 安床 开仓 盖屋 祭祀 酬神 求财",
  Ji11: "安葬 修造 开光"
}, {
  _Date: "丁巳",
  Yi0: "结婚 搬家 开业 安葬",
  Ji0: "出行 赴任 动土 修造 求财",
  Yi1: "结婚 搬家 交易 开业 祈福 安床 盖屋 修造 求子",
  Ji1: "出行 赴任 求财",
  Yi2: "结婚 交易 搬新房 开业 安葬 修造 求子",
  Ji2: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi3: "结婚 交易 搬新房 开业 安葬 修造 求子",
  Ji3: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi4: "修造 作灶",
  Ji4: "出行 赴任 祈福 祭祀 酬神 斋醮",
  Yi5: "结婚 出行 搬家 赴任 安葬 收养子女 求子 求财",
  Ji5: "祈福 乘船 祭祀 酬神 造船 斋醮",
  Yi6: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji6: "盖屋 入殓 上梁",
  Yi7: "结婚 出行 搬新房 祈福 安葬 祭祀 修造 求子 斋醮",
  Ji7: "-",
  Yi8: "结婚 出行 交易 开业 安床 求财",
  Ji8: "赴任 诉讼 祈福 乘船 求子",
  Yi9: "结婚 出行 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji9: "-",
  Yi10: "结婚 出行 搬家 开业 祈福 安葬 祭祀 修造 斋醮",
  Ji10: "-",
  Yi11: "-",
  Ji11: "诸事不宜"
}, {
  _Date: "戊午",
  Yi0: "-",
  Ji0: "诸事不宜",
  Yi1: "结婚 安葬 修造 酬神 求财",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi2: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji2: "出行 赴任",
  Yi3: "出行 搬家 搬新房 开业 赴任 祈福 安床 开仓 盖屋 祭祀 修造 酬神 求财",
  Ji3: "-",
  Yi4: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji4: "出行 搬家 赴任 诉讼 盖屋 修造 入殓 上梁",
  Yi5: "结婚 搬家 搬新房 开业",
  Ji5: "祈福 安葬 祭祀 修造 酬神 开光 斋醮",
  Yi6: "结婚 搬家 交易 搬新房 开业 祭祀 修造 作灶 酬神 斋醮",
  Ji6: "祈福 乘船 求子 造桥",
  Yi7: "结婚 祈福 安葬 求子 求财",
  Ji7: "出行 赴任 修造",
  Yi8: "结婚 出行 搬新房 赴任 祈福 安葬 祭祀 酬神 求财",
  Ji8: "动土 修造",
  Yi9: "结婚 出行 搬家 搬新房 开业 赴任 安床 盖屋 修造 作灶 求子 求财",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 搬新房 安葬 修造 求财",
  Ji10: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi11: "结婚 搬新房 安葬 修造 作灶 造庙 求财",
  Ji11: "出行 赴任 祈福 祭祀 开光 斋醮"
}, {
  _Date: "己未",
  Yi0: "结婚 出行 祈福 安葬 求子 求财",
  Ji0: "赴任 诉讼",
  Yi1: "-",
  Ji1: "诸事不宜",
  Yi2: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji2: "盖屋 入殓 上梁",
  Yi3: "结婚 出行 交易 搬新房 开业 祈福 安床 安葬 祭祀 修造 求子 求财",
  Ji3: "-",
  Yi4: "结婚 交易 搬新房 开业 安葬 修造",
  Ji4: "祈福 求子",
  Yi5: "结婚 出行 搬家 交易 搬新房 开业 赴任 求子 求财",
  Ji5: "安葬 修造 开光",
  Yi6: "结婚 出行 安葬 求子 求财",
  Ji6: "动土 祈福 祭祀 修造 酬神 斋醮",
  Yi7: "结婚 搬新房 祈福 安葬 祭祀 酬神 求财",
  Ji7: "出行 赴任 动土 乘船 修造 造船",
  Yi8: "结婚 搬家 安葬 修造 作灶 酬神 收养子女 求财",
  Ji8: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi9: "结婚 搬家 交易 搬新房 开业 安葬 求子",
  Ji9: "出行 赴任 祈福 祭祀 修造 酬神 斋醮",
  Yi10: "结婚 搬家 搬新房 祈福 安床 安葬 祭祀 修造",
  Ji10: "出行 赴任",
  Yi11: "结婚 搬家 交易 开业 祈福 安床 盖屋 修造 作灶 求子 求财",
  Ji11: "出行 赴任"
}, {
  _Date: "庚申",
  Yi0: "结婚 交易 开业 祈福 安床 求子 求财",
  Ji0: "出行 赴任 盖屋 入殓 上梁",
  Yi1: "结婚 祈福 安葬 祭祀 修造 酬神 见贵",
  Ji1: "出行 赴任 求财",
  Yi2: "-",
  Ji2: "诸事不宜",
  Yi3: "结婚 交易 搬新房 开业 安葬 修造 求子",
  Ji3: "祈福 祭祀 酬神 斋醮",
  Yi4: "结婚 出行 交易 开业 赴任 祈福 安床 求子 求财",
  Ji4: "动土 修造",
  Yi5: "结婚 搬家 交易 搬新房 开业 祈福 祭祀 修造 作灶 酬神 求子 斋醮",
  Ji5: "出行 赴任",
  Yi6: "酬神 求财",
  Ji6: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi7: "结婚 出行 搬家 搬新房 开业 安床 开仓 盖屋 修造 求财",
  Ji7: "祈福 祭祀 酬神 斋醮",
  Yi8: "结婚 搬新房 开业 安葬 求财",
  Ji8: "出行 搬家 赴任 诉讼 修造 开光",
  Yi9: "结婚 搬家 交易 搬新房 开业 祈福 安葬 祭祀 求子",
  Ji9: "出行 赴任 动土 修造",
  Yi10: "结婚 交易 开业 祈福 安床 祭祀 作灶 求子 求财",
  Ji10: "出行 赴任 盖屋 入殓 上梁",
  Yi11: "搬新房 安葬 修造",
  Ji11: "出行 赴任"
}, {
  _Date: "辛酉",
  Yi0: "结婚 搬家 交易 搬新房 开业 安葬 祭祀 修造 作灶 酬神 斋醮",
  Ji0: "出行 赴任 祈福 求子 求财",
  Yi1: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji1: "出行 赴任 修造",
  Yi2: "结婚 出行 搬家 搬新房 赴任 祈福 安床 安葬 祭祀 修造 求财",
  Ji2: "-",
  Yi3: "-",
  Ji3: "诸事不宜",
  Yi4: "结婚 出行 交易 开业 安床 求子 求财",
  Ji4: "赴任 诉讼 祈福 祭祀 开光 斋醮",
  Yi5: "结婚 交易 开业 安床 求子 求财",
  Ji5: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi6: "结婚 出行 祈福 安葬 祭祀 修造 酬神 求财",
  Ji6: "-",
  Yi7: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji7: "-",
  Yi8: "结婚 出行 交易 开业 安床 求子 求财",
  Ji8: "祈福 盖屋 祭祀 入殓 酬神 上梁 斋醮",
  Yi9: "结婚 出行 搬新房 祈福 安葬 修造 求子 求财",
  Ji9: "乘船 造桥",
  Yi10: "结婚 搬家 安葬 收养子女 求财",
  Ji10: "出行 赴任 祈福 求子",
  Yi11: "结婚 搬家 搬新房 安葬 求财",
  Ji11: "出行 赴任 动土 修造 开光"
}, {
  _Date: "壬戌",
  Yi0: "结婚 搬家 交易 搬新房 开业 安葬 求子",
  Ji0: "出行 赴任 动土 修造 求财",
  Yi1: "结婚 搬新房 祈福 安葬 修造 作灶 造庙",
  Ji1: "出行 赴任 求财",
  Yi2: "结婚 出行 交易 开业 安床 求子 求财",
  Ji2: "祈福 祭祀 酬神 斋醮",
  Yi3: "结婚 交易 开业 安床 求子 求财",
  Ji3: "出行 赴任 祈福 祭祀 修造 开光 斋醮",
  Yi4: "-",
  Ji4: "诸事不宜",
  Yi5: "结婚 出行 安葬 修造 求财",
  Ji5: "祈福 祭祀 酬神 斋醮",
  Yi6: "结婚 出行 交易 开业 祈福 安床 求子 求财",
  Ji6: "赴任 诉讼 盖屋 入殓 上梁",
  Yi7: "结婚 搬家 安葬 收养子女 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 开业 安葬 求财",
  Ji8: "出行 赴任 祈福 求子",
  Yi9: "修造 作灶",
  Ji9: "祈福 祭祀 酬神 斋醮",
  Yi10: "结婚 出行 祈福 安葬 祭祀 求子 斋醮",
  Ji10: "乘船 造船",
  Yi11: "结婚 出行 搬家 搬新房 开业 赴任 安床 开仓 盖屋 修造 求财",
  Ji11: "-"
}, {
  _Date: "癸亥",
  Yi0: "结婚 搬新房 开业 安葬 求子 求财",
  Ji0: "出行 赴任 祈福 祭祀 开光 斋醮",
  Yi1: "结婚 搬家 搬新房 开业 安床 开仓 盖屋 修造 收养子女 见贵",
  Ji1: "出行 赴任 祈福 祭祀 开光 斋醮 求财",
  Yi2: "结婚 交易 开业 安床 求子 求财",
  Ji2: "出行 搬家 赴任 诉讼 祈福 祭祀 修造 酬神 斋醮",
  Yi3: "结婚 交易 开业 祈福 安床 祭祀 求子 求财",
  Ji3: "出行 赴任 动土 修造",
  Yi4: "祈福 祭祀 修造 作灶 酬神 斋醮",
  Ji4: "盖屋 入殓 上梁",
  Yi5: "-",
  Ji5: "诸事不宜",
  Yi6: "结婚 搬家 搬新房 安床 安葬 修造",
  Ji6: "祈福 乘船 求子",
  Yi7: "结婚 搬家 交易 开业 祈福 安床 盖屋 祭祀 修造 作灶 求子 求财",
  Ji7: "出行 赴任",
  Yi8: "结婚 搬家 安葬 收养子女 求财",
  Ji8: "出行 赴任 动土 修造",
  Yi9: "结婚 出行 搬家 搬新房 赴任 安葬 求财",
  Ji9: "诸事不宜",
  Yi10: "结婚 开业 安葬",
  Ji10: "祈福 祭祀 酬神 斋醮",
  Yi11: "结婚 搬家 交易 搬新房 开业 安葬 修造 求子",
  Ji11: "出行 赴任 祈福 乘船 祭祀 开光 造桥 斋醮"
}];
exports.yijiArr = yijiArr;

/***/ }),

/***/ 65:
/*!*******************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data1/c.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.c = void 0;
var c = {
  "1-甲子": {
    JSYQ: "天恩 母仓 时阳 生气 益后 青龙",
    XSYJ: "灾煞 天火 四忌 八龙 复日"
  },
  "1-乙丑": {
    JSYQ: "天恩 续世 明堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚 土符 归忌 血忌"
  },
  "1-丙寅": {
    JSYQ: "月德 天恩 月恩 四相 王日 天仓 不将 要安 五合 鸣吠对",
    XSYJ: "月建 小时 土府 往亡 天刑"
  },
  "1-丁卯": {
    JSYQ: "天德 天恩 四相 官日 吉期 不将 玉宇 五合 鸣吠对",
    XSYJ: "大时 大败 咸池 朱雀"
  },
  "1-戊辰": {
    JSYQ: "天恩 守日 天巫 福德 六仪 金堂 金匮",
    XSYJ: "厌对 招摇 九空 九坎 九焦"
  },
  "1-己巳": {
    JSYQ: "相日 宝光",
    XSYJ: "天罡 死神 月刑 月害 游祸 五虚 重日"
  },
  "1-庚午": {
    JSYQ: "时德 民日 三合 临日 天马 时阴 鸣吠",
    XSYJ: "死气 地囊 白虎"
  },
  "1-辛未": {
    JSYQ: "月德合 敬安 玉堂 普护 解神",
    XSYJ: "小耗"
  },
  "1-壬申": {
    JSYQ: "天德合 月空 驿马 天后 普护 解神 除神 鸣吠",
    XSYJ: "月破 大耗 五离 天牢"
  },
  "1-癸酉": {
    JSYQ: "阴德 福生 除神 鸣吠",
    XSYJ: "天吏 致死 五虚 五离 元武"
  },
  "1-甲戌": {
    JSYQ: "阳德 三合 天喜 天医 司命",
    XSYJ: "月厌 地火 四击 大煞 复日 大会"
  },
  "1-乙亥": {
    JSYQ: "母仓 天愿 六合 五富 圣心",
    XSYJ: "河魁 劫煞 四穷 八龙 重日 勾陈"
  },
  "1-丙子": {
    JSYQ: "月德 母仓 月恩 四相 时阳 生气 不将 益后 青龙 鸣吠对",
    XSYJ: "灾煞 天火 触水龙"
  },
  "1-丁丑": {
    JSYQ: "天德 四相 不将 续世 明堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚 八风 土符 归忌 血忌"
  },
  "1-戊寅": {
    JSYQ: "天赦 王日 天仓 要安 五合",
    XSYJ: "月建 小时 土府 往亡 天刑"
  },
  "1-己卯": {
    JSYQ: "天恩 官日 吉期 不将 玉宇 五合",
    XSYJ: "大时 大败 咸池 朱雀"
  },
  "1-庚辰": {
    JSYQ: "天恩 守日 天巫 福德 六仪 金堂 金匮",
    XSYJ: "厌对 招摇 九空 九坎 九焦"
  },
  "1-辛巳": {
    JSYQ: "月德合 天恩 相日 宝光",
    XSYJ: "天罡 死神 月刑 月害 游祸 五虚 重日"
  },
  "1-壬午": {
    JSYQ: "天德合 月空 天恩 时德 民日 三合 临日 天马 时阴 鸣吠",
    XSYJ: "死气 白虎"
  },
  "1-癸未": {
    JSYQ: "天恩 敬安 玉堂",
    XSYJ: "小耗 触水龙"
  },
  "1-甲申": {
    JSYQ: "驿马 天后 普护 解神 除神 鸣吠",
    XSYJ: "月破 大耗 复日 五离 天牢"
  },
  "1-乙酉": {
    JSYQ: "天恩 阴德 福生 除神 鸣吠",
    XSYJ: "天吏 致死 五虚 五离 元武"
  },
  "1-丙戌": {
    JSYQ: "月德 天恩 四相 阳德 三合 天喜 天医 司命",
    XSYJ: "月厌 地火 四击 大煞"
  },
  "1-丁亥": {
    JSYQ: "天德 母仓 四相 六合 五富 不将 圣心",
    XSYJ: "河魁 劫煞 重日 勾陈"
  },
  "1-戊子": {
    JSYQ: "母仓 时阳 生气 益后 青龙",
    XSYJ: "灾煞 天火"
  },
  "1-己丑": {
    JSYQ: "不将 续世 明堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚 土符 归忌 血忌"
  },
  "1-庚寅": {
    JSYQ: "王日 天仓 不将 要安 五合 鸣吠对",
    XSYJ: "月建 小时 土府 往亡 天刑"
  },
  "1-辛卯": {
    JSYQ: "月德合 官日 吉期 不将 玉宇 五合 鸣吠对",
    XSYJ: "大时 大败 咸池"
  },
  "1-壬辰": {
    JSYQ: "天德合 月空 守日 天巫 福德 六仪 金堂 金匮",
    XSYJ: "厌对 招摇 九空 九坎 九焦"
  },
  "1-癸巳": {
    JSYQ: "相日 宝光",
    XSYJ: "天罡 死神 月刑 月害 游祸 五虚 重日"
  },
  "1-甲午": {
    JSYQ: "时德 民日 三合 临日 天马 时阴 鸣吠",
    XSYJ: "死气 复日 白虎"
  },
  "1-乙未": {
    JSYQ: "敬安 玉堂",
    XSYJ: "小耗 五墓"
  },
  "1-丙申": {
    JSYQ: "月德 月恩 四相 驿马 天后 普护 解神 除神 鸣吠",
    XSYJ: "月破 大耗 五离"
  },
  "1-丁酉": {
    JSYQ: "天德 四相 阴德 福生 除神 鸣吠",
    XSYJ: "天吏 致死 五虚 五离 元武"
  },
  "1-戊戌": {
    JSYQ: "阳德 三合 天喜 天医 司命",
    XSYJ: "月厌 地火 四击 大煞"
  },
  "1-己亥": {
    JSYQ: "母仓 六合 五富 不将 圣心",
    XSYJ: "河魁 劫煞 重日 勾陈"
  },
  "1-庚子": {
    JSYQ: "母仓 时阳 生气 不将 益后 青龙 鸣吠对",
    XSYJ: "灾煞 天火 地囊"
  },
  "1-辛丑": {
    JSYQ: "月德合 不将 续世 明堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚 土符 归忌 血忌"
  },
  "1-壬寅": {
    JSYQ: "天德合 月空 王日 天仓 要安 五合 鸣吠对",
    XSYJ: "月建 小时 土府 往亡 天刑"
  },
  "1-癸卯": {
    JSYQ: "官日 吉期 玉宇 五合 鸣吠对",
    XSYJ: "大时 大败 咸池 朱雀"
  },
  "1-甲辰": {
    JSYQ: "守日 天巫 福德 六仪 金堂 金匮",
    XSYJ: "厌对 招摇 九空 九坎 九焦 复日"
  },
  "1-乙巳": {
    JSYQ: "相日 宝光",
    XSYJ: "天罡 死神 月刑 月害 游祸 五虚 重日"
  },
  "1-丙午": {
    JSYQ: "月德 月恩 四相 时德 民日 三合 临日 天马 时阴 鸣吠",
    XSYJ: "死气 白虎"
  },
  "1-丁未": {
    JSYQ: "天德 四相 敬安 玉堂",
    XSYJ: "小耗 八专"
  },
  "1-戊申": {
    JSYQ: "驿马 天后 普护 解神 除神",
    XSYJ: "月破 大耗 五离 天牢"
  },
  "1-己酉": {
    JSYQ: "天恩 阴德 福生 除神 鸣吠",
    XSYJ: "天吏 致死 五虚 五离 元武"
  },
  "1-庚戌": {
    JSYQ: "天恩 阳德 三合 天喜 天医 司命",
    XSYJ: "月厌 地火 四击 大煞 阴错"
  },
  "1-辛亥": {
    JSYQ: "月德合 天恩 母仓 六合 五富 不将 圣心",
    XSYJ: "河魁 劫煞 重日 勾陈"
  },
  "1-壬子": {
    JSYQ: "天德合 月空 天恩 母仓 时阳 生气 益后 青龙 鸣吠对",
    XSYJ: "灾煞 天火 四耗"
  },
  "1-癸丑": {
    JSYQ: "天恩 续世 明堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚 土符 归忌 血忌 八专 触水龙"
  },
  "1-甲寅": {
    JSYQ: "王日 天仓 要安 五合 鸣吠对",
    XSYJ: "月建 小时 土府 往亡 复日 八专 天刑 阳错"
  },
  "1-乙卯": {
    JSYQ: "官日 吉期 玉宇 五合 鸣吠对",
    XSYJ: "大时 大败 咸池 朱雀"
  },
  "1-丙辰": {
    JSYQ: "月德 月恩 四相 守日 天巫 福德 六仪 金堂 金匮",
    XSYJ: "厌对 招摇 九空 九坎 九焦"
  },
  "1-丁巳": {
    JSYQ: "天德 四相 相日 宝光",
    XSYJ: "天罡 死神 月刑 月害 游祸 五虚 八风 重日"
  },
  "1-戊午": {
    JSYQ: "时德 民日 三合 临日 天马 时阴",
    XSYJ: "死气 白虎"
  },
  "1-己未": {
    JSYQ: "敬安 玉堂",
    XSYJ: "小耗 八专"
  },
  "1-庚申": {
    JSYQ: "驿马 天后 普护 解神 除神 鸣吠",
    XSYJ: "月破 大耗 四废 五离 八专 天牢"
  },
  "1-辛酉": {
    JSYQ: "月德合 阴德 福生 除神 鸣吠",
    XSYJ: "天吏 致死 四废 五虚 五离 元武 三阴"
  },
  "1-壬戌": {
    JSYQ: "天德合 月空 阳德 三合 天喜 天医 司命",
    XSYJ: "月厌 地火 四击 大煞"
  },
  "1-癸亥": {
    JSYQ: "母仓 六合 五富 圣心",
    XSYJ: "河魁 劫煞 重日 勾陈"
  },
  "2-甲子": {
    JSYQ: "月德 天恩 母仓 阳德 司命",
    XSYJ: "天罡 月刑 大时 大败 咸池 天贼 四忌 八龙"
  },
  "2-乙丑": {
    JSYQ: "天恩 时阳 生气 天仓 不将 敬安",
    XSYJ: "五虚 九空 九坎 九焦 复日 勾陈"
  },
  "2-丙寅": {
    JSYQ: "天恩 四相 王日 五富 不将 普护 五合 青龙 鸣吠对",
    XSYJ: "游祸 血支 归忌"
  },
  "2-丁卯": {
    JSYQ: "天恩 月恩 四相 官日 六仪 福生 五合 明堂 鸣吠对",
    XSYJ: "月建 小时 土府 厌对 招摇"
  },
  "2-戊辰": {
    JSYQ: "天恩 守日 吉期",
    XSYJ: "月害 天刑"
  },
  "2-己巳": {
    JSYQ: "月德合 相日 驿马 天后 天巫 福德 圣心",
    XSYJ: "五虚 土符 大煞 往亡 重日 朱雀"
  },
  "2-庚午": {
    JSYQ: "月空 时德 民日 益后 金匮 鸣吠对",
    XSYJ: "河魁 死神 天吏 致死"
  },
  "2-辛未": {
    JSYQ: "阴德 三合 时阴 续世 宝光",
    XSYJ: "死气 血忌"
  },
  "2-壬申": {
    JSYQ: "天马 要安 解神 鸣吠",
    XSYJ: "劫煞 小耗 五离 白虎"
  },
  "2-癸酉": {
    JSYQ: "玉宇 除神 玉堂 鸣吠",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 五虚 五离"
  },
  "2-甲戌": {
    JSYQ: "月德 天愿 六合 金堂",
    XSYJ: "月煞 月虚 四击 天牢"
  },
  "2-乙亥": {
    JSYQ: "母仓 三合 临日 天喜 天医 不将",
    XSYJ: "四穷 八龙 复日 重日 元武"
  },
  "2-丙子": {
    JSYQ: "母仓 四相 阳德 不将 司命 鸣吠对",
    XSYJ: "天罡 月刑 大时 大败 咸池 天贼 触水龙"
  },
  "2-丁丑": {
    JSYQ: "月恩 四相 时阳 生气 不将 敬安",
    XSYJ: "五虚 八风 九空 九坎 九焦 勾陈"
  },
  "2-戊寅": {
    JSYQ: "天赦 王日 五富 普护 五合 青龙",
    XSYJ: "游祸 血支 归忌"
  },
  "2-己卯": {
    JSYQ: "月德合 天恩 官日 六仪 福生 五合 明堂",
    XSYJ: "月建 小时 土府 厌对 招摇 小会"
  },
  "2-庚辰": {
    JSYQ: "月空 天恩 守日 吉期",
    XSYJ: "月害 天刑"
  },
  "2-辛巳": {
    JSYQ: "天恩 相日 驿马 天后 天巫 福德 圣心",
    XSYJ: "五虚 土符 大煞 往亡 重日 朱雀"
  },
  "2-壬午": {
    JSYQ: "天恩 时德 民日 益后 金匮 鸣吠",
    XSYJ: "河魁 死神 天吏 致死"
  },
  "2-癸未": {
    JSYQ: "天恩 阴德 三合 时阴 续世 宝光",
    XSYJ: "死气 血忌 触水龙"
  },
  "2-甲申": {
    JSYQ: "月德 天马 要安 解神 除神 鸣吠",
    XSYJ: "劫煞 小耗 五离 白虎"
  },
  "2-乙酉": {
    JSYQ: "玉宇 除神 玉堂 鸣吠",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 五虚 复日 五离 白虎"
  },
  "2-丙戌": {
    JSYQ: "四相 六合 不将 金堂",
    XSYJ: "月煞 月虚 四击 天牢"
  },
  "2-丁亥": {
    JSYQ: "母仓 月恩 四相 三合 临日 天喜 天医 不将",
    XSYJ: "重日 元武"
  },
  "2-戊子": {
    JSYQ: "母仓 阳德 司命",
    XSYJ: "天罡 月刑 大时 大败 咸池 天贼"
  },
  "2-己丑": {
    JSYQ: "月德合 时阳 生气 天仓 不将 敬安",
    XSYJ: "五虚 九空 九坎 九焦 勾陈"
  },
  "2-庚寅": {
    JSYQ: "月空 王日 五富 不将 普护 五合 青龙 鸣吠对",
    XSYJ: "游祸 血支 归忌"
  },
  "2-辛卯": {
    JSYQ: "官日 六仪 福生 五合 明堂 鸣吠",
    XSYJ: "月建 小时 土府 厌对 招摇"
  },
  "2-壬辰": {
    JSYQ: "守日 吉期",
    XSYJ: "月害 天刑"
  },
  "2-癸巳": {
    JSYQ: "相日 驿马 天后 天巫 福德 圣心",
    XSYJ: "五虚 土符 大煞 往亡 重日 朱雀"
  },
  "2-甲午": {
    JSYQ: "月德 时德 民日 益后 金匮 鸣吠",
    XSYJ: "河魁 死神 天吏 致死"
  },
  "2-乙未": {
    JSYQ: "阴德 三合 时阴 续世 宝光",
    XSYJ: "死气 五墓 地囊 血忌 复日"
  },
  "2-丙申": {
    JSYQ: "四相 天马 要安 解神 除神 鸣吠",
    XSYJ: "劫煞 小耗 五离 白虎"
  },
  "2-丁酉": {
    JSYQ: "月恩 四相 玉宇 除神 玉堂 鸣吠",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 五虚 五离"
  },
  "2-戊戌": {
    JSYQ: "六合 金堂",
    XSYJ: "月煞 月虚 四击 天牢"
  },
  "2-己亥": {
    JSYQ: "月德合 母仓 三合 临日 天喜 天医 不将",
    XSYJ: "重日 元武"
  },
  "2-庚子": {
    JSYQ: "月空 母仓 阳德 不将 司命 鸣吠对",
    XSYJ: "天罡 月刑 大时 大败 咸池 天贼"
  },
  "2-辛丑": {
    JSYQ: "时阳 生气 天仓 敬安",
    XSYJ: "五虚 九空 九坎 九焦 勾陈"
  },
  "2-壬寅": {
    JSYQ: "王日 五富 普护 五合 青龙 鸣吠对",
    XSYJ: "游祸 血支 归忌"
  },
  "2-癸卯": {
    JSYQ: "官日 六仪 福生 五合 明堂 鸣吠对",
    XSYJ: "月建 小时 土府 厌对 招摇"
  },
  "2-甲辰": {
    JSYQ: "月德 守日 吉期",
    XSYJ: "月害 天刑"
  },
  "2-乙巳": {
    JSYQ: "相日 驿马 天后 天巫 福德 圣心",
    XSYJ: "五虚 土符 大煞 往亡 复日 重日 朱雀"
  },
  "2-丙午": {
    JSYQ: "四相 时德 民日 益后 金匮 鸣吠",
    XSYJ: "河魁 死神 天吏 致死"
  },
  "2-丁未": {
    JSYQ: "月恩 四相 阴德 三合 时阴 续世 宝光",
    XSYJ: "死气 血忌 八专"
  },
  "2-戊申": {
    JSYQ: "天马 要安 解神 除神",
    XSYJ: "劫煞 小耗 五离 白虎"
  },
  "2-己酉": {
    JSYQ: "月德合 天恩 玉宇 除神 玉堂 鸣吠",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 五虚 五离 阴道冲阳"
  },
  "2-庚戌": {
    JSYQ: "月空 天恩 六合 不将 金堂",
    XSYJ: "月煞 月虚 四击 天牢"
  },
  "2-辛亥": {
    JSYQ: "天恩 母仓 三合 临日 天喜 天医",
    XSYJ: "重日 元武"
  },
  "2-壬子": {
    JSYQ: "天恩 母仓 阳德 司命 鸣吠对",
    XSYJ: "天罡 月刑 大时 大败 咸池 天贼 四耗"
  },
  "2-癸丑": {
    JSYQ: "天恩 时阳 生气 天仓 敬安",
    XSYJ: "五虚 九空 九坎 九焦 地囊 八专 触水龙 勾陈"
  },
  "2-甲寅": {
    JSYQ: "月德 王日 五富 普护 五合 青龙 鸣吠对",
    XSYJ: "游祸 血支 归忌"
  },
  "2-乙卯": {
    JSYQ: "官日 六仪 福生 五合 明堂 鸣吠对",
    XSYJ: "月建 小时 土府 厌对 招摇 复日 阳错"
  },
  "2-丙辰": {
    JSYQ: "四相 守日 吉期",
    XSYJ: "月害 天刑"
  },
  "2-丁巳": {
    JSYQ: "月恩 四相 相日 驿马 天后 天巫 福德 圣心",
    XSYJ: "五虚 八风 土符 大煞 往亡 重日 朱雀"
  },
  "2-戊午": {
    JSYQ: "时德 民日 益后 金匮",
    XSYJ: "河魁 死神 天吏 致死"
  },
  "2-己未": {
    JSYQ: "月德合 阴德 三合 时阴 续世 宝光",
    XSYJ: "死气 血忌 八专"
  },
  "2-庚申": {
    JSYQ: "月空 天马 要安 解神 除神 鸣吠",
    XSYJ: "劫煞 小耗 四废 五离 八专 白虎"
  },
  "2-辛酉": {
    JSYQ: "玉宇 除神 玉堂 鸣吠",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 四废 五虚 五离 阴错"
  },
  "2-壬戌": {
    JSYQ: "六合 金堂",
    XSYJ: "月煞 月虚 四击 天牢"
  },
  "2-癸亥": {
    JSYQ: "母仓 三合 临日 天喜 天医",
    XSYJ: "重日 元武"
  },
  "3-甲子": {
    JSYQ: "天恩 母仓 三合 天喜 天医 天仓 不将 圣心",
    XSYJ: "四忌 八龙 地囊 归忌 天牢"
  },
  "3-乙丑": {
    JSYQ: "天恩 不将 益后",
    XSYJ: "河魁 五虚 元武"
  },
  "3-丙寅": {
    JSYQ: "月空 天恩 四相 阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命 鸣吠对",
    XSYJ: "厌对 招摇 血忌"
  },
  "3-丁卯": {
    JSYQ: "天德合 月德合 天恩 四相 官日 要安 五合 鸣吠对",
    XSYJ: "月害 天吏 致死 血支 勾陈"
  },
  "3-戊辰": {
    JSYQ: "天恩 守日 玉宇 青龙",
    XSYJ: "月建 小时 土府 月刑 五墓 复日 小会 单阴"
  },
  "3-己巳": {
    JSYQ: "阴德 相日 吉期 五富 金堂 明堂",
    XSYJ: "劫煞 五虚 重日"
  },
  "3-庚午": {
    JSYQ: "月恩 时德 民日 天巫 福德 鸣吠",
    XSYJ: "灾煞 天火 大煞 天刑"
  },
  "3-辛未": {
    JSYQ: "[无神煞]",
    XSYJ: "天罡 死神 月煞 朱雀"
  },
  "3-壬申": {
    JSYQ: "天德 月德 三合 临日 时阴 敬安 除神 金匮 鸣吠",
    XSYJ: "月厌 地火 死气 往亡 五离 孤辰"
  },
  "3-癸酉": {
    JSYQ: "六合 普护 除神 宝光 鸣吠",
    XSYJ: "大时 大败 咸池 小耗 五虚 土符 五离"
  },
  "3-甲戌": {
    JSYQ: "天马 不将 福生 解神",
    XSYJ: "月破 大耗 四击 九空 九坎 九焦 白虎"
  },
  "3-乙亥": {
    JSYQ: "母仓 不将 玉宇",
    XSYJ: "游祸 天贼 四穷 八龙 重日"
  },
  "3-丙子": {
    JSYQ: "月空 母仓 四相 三合 天喜 天医 天仓 不将 圣心 鸣吠对",
    XSYJ: "归忌 触水龙 天牢"
  },
  "3-丁丑": {
    JSYQ: "天德合 月德合 四相 不将 益后",
    XSYJ: "河魁 五虚 八风 元武"
  },
  "3-戊寅": {
    JSYQ: "天赦 阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命",
    XSYJ: "厌对 招摇 血忌 复日"
  },
  "3-己卯": {
    JSYQ: "天恩 官日 要安 五合",
    XSYJ: "月害 天吏 致死 血支 勾陈"
  },
  "3-庚辰": {
    JSYQ: "天恩 月恩 守日 玉宇 青龙",
    XSYJ: "月建 小时 土府 月刑 阴位"
  },
  "3-辛巳": {
    JSYQ: "天恩 阴德 相日 吉期 五富 金堂 明堂",
    XSYJ: "劫煞 五虚 重日"
  },
  "3-壬午": {
    JSYQ: "天德 月德 天恩 时德 民日 天巫 福德 鸣吠",
    XSYJ: "灾煞 天火 地囊 大煞 天刑"
  },
  "3-癸未": {
    JSYQ: "天恩",
    XSYJ: "天罡 死神 月煞 月虚 触水龙 朱雀"
  },
  "3-甲申": {
    JSYQ: "三合 临日 时阴 敬安 除神 金匮 鸣吠",
    XSYJ: "月厌 地火 死气 往亡 五离 行狠"
  },
  "3-乙酉": {
    JSYQ: "天愿 六合 不将 普护 除神 宝光 鸣吠",
    XSYJ: "大时 大败 咸池 小耗 五虚 土符 五离"
  },
  "3-丙戌": {
    JSYQ: "月空 四相 天马 不将 福生 解神",
    XSYJ: "月破 大耗 四击 九空 九坎 九焦 白虎"
  },
  "3-丁亥": {
    JSYQ: "天德合 月德合 母仓 四相 不将 玉堂",
    XSYJ: "游祸 天贼 重日"
  },
  "3-戊子": {
    JSYQ: "母仓 三合 天喜 天医 天仓 圣心",
    XSYJ: "归忌 复日 天牢"
  },
  "3-己丑": {
    JSYQ: "不将 益后",
    XSYJ: "河魁 五虚 元武"
  },
  "3-庚寅": {
    JSYQ: "月恩 阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命 鸣吠对",
    XSYJ: "厌对 招摇 血忌"
  },
  "3-辛卯": {
    JSYQ: "官日 要安 五合 鸣吠对",
    XSYJ: "月害 天吏 致死 血支 勾陈"
  },
  "3-壬辰": {
    JSYQ: "天德 月德 守日 玉宇 青龙",
    XSYJ: "月建 小时 土府 月刑"
  },
  "3-癸巳": {
    JSYQ: "阴德 相日 吉期 五富 金堂 明堂",
    XSYJ: "劫煞 五虚 重日"
  },
  "3-甲午": {
    JSYQ: "时德 民日 天巫 福德 鸣吠",
    XSYJ: "灾煞 天火 大煞 天刑"
  },
  "3-乙未": {
    JSYQ: "[无神煞]",
    XSYJ: "天罡 死神 月煞 月虚 朱雀"
  },
  "3-丙申": {
    JSYQ: "月空 四相 三合 临日 时阴 敬安 除神 金匮 鸣吠",
    XSYJ: "月厌 地火 死气 往亡 五离 了戾"
  },
  "3-丁酉": {
    JSYQ: "天德合 月德合 四相 六合 不将 普护 除神 宝光 鸣吠",
    XSYJ: "大时 大败 咸池 小耗 五虚 土符 五离"
  },
  "3-戊戌": {
    JSYQ: "天马 福生 解神",
    XSYJ: "月破 大耗 四击 九空 九坎 九焦 复日 白虎"
  },
  "3-己亥": {
    JSYQ: "母仓 不将 玉堂",
    XSYJ: "游祸 天贼 重日"
  },
  "3-庚子": {
    JSYQ: "母仓 月恩 三合 天喜 天医 天仓 圣心 鸣吠对",
    XSYJ: "归忌 天牢"
  },
  "3-辛丑": {
    JSYQ: "益后",
    XSYJ: "河魁 五虚 元武"
  },
  "3-壬寅": {
    JSYQ: "阴德 月德 阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命 鸣吠对",
    XSYJ: "厌对 招摇 血忌"
  },
  "3-癸卯": {
    JSYQ: "官日 要安 五合 鸣吠对",
    XSYJ: "月害 天吏 致死 血支 勾陈"
  },
  "3-甲辰": {
    JSYQ: "守日 玉宇 青龙",
    XSYJ: "月建 小时 土府 月刑 阳错"
  },
  "3-乙巳": {
    JSYQ: "阴德 相日 吉期 五富 金堂 明堂",
    XSYJ: "劫煞 五虚 重日"
  },
  "3-丙午": {
    JSYQ: "月空 四相 时德 民日 天巫 福德 鸣吠",
    XSYJ: "灾煞 天火 大煞 天刑"
  },
  "3-丁未": {
    JSYQ: "天德合 月德合 四相",
    XSYJ: "天罡 死神 月煞 月虚 八专 朱雀"
  },
  "3-戊申": {
    JSYQ: "三合 临日 时阴 敬安 除神 金匮",
    XSYJ: "月厌 地火 死气 往亡 复日 五离 孤辰"
  },
  "3-己酉": {
    JSYQ: "天恩 六合 不将 普护 除神 宝光 鸣吠",
    XSYJ: "大时 大败 咸池 小耗 五虚 土符 五离"
  },
  "3-庚戌": {
    JSYQ: "天恩 月恩 天马 福生 解神",
    XSYJ: "月破 大耗 四击 九空 九坎 九焦 白虎"
  },
  "3-辛亥": {
    JSYQ: "天恩 母仓 玉堂",
    XSYJ: "游祸 天贼 重日"
  },
  "3-壬子": {
    JSYQ: "天德 月德 天恩 母仓 三合 天喜 天医 天仓 圣心 鸣吠对",
    XSYJ: "四耗 归忌 天牢"
  },
  "3-癸丑": {
    JSYQ: "天恩 益后",
    XSYJ: "河魁 五虚 八专 触水龙 元武"
  },
  "3-甲寅": {
    JSYQ: "阳德 王日 驿马 天后 时阳 生气 六仪 续世 五合 司命 鸣吠对",
    XSYJ: "厌对 招摇 血忌 八专"
  },
  "3-乙卯": {
    JSYQ: "官日 要安 五合 鸣吠对",
    XSYJ: "月害 天吏 致死 血支 勾陈"
  },
  "3-丙辰": {
    JSYQ: "月空 四相 守日 玉宇 青龙",
    XSYJ: "月建 小时 土府 月刑"
  },
  "3-丁巳": {
    JSYQ: "天德合 月德合 四相 阴德 相日 吉期 五富 金堂 明堂",
    XSYJ: "劫煞 五虚 八风 重日"
  },
  "3-戊午": {
    JSYQ: "时德 民日 天巫 福德",
    XSYJ: "灾煞 天火 大煞 复日 天刑"
  },
  "3-己未": {
    JSYQ: "[无神煞]",
    XSYJ: "天罡 死神 月煞 月虚 八专 朱雀"
  },
  "3-庚申": {
    JSYQ: "月恩 三合 临日 时阴 敬安 除神 金匮 鸣吠",
    XSYJ: "月厌 地火 死气 四废 往亡 五离 八专 孤辰 阴错"
  },
  "3-辛酉": {
    JSYQ: "六合 普护 除神 宝光 鸣吠",
    XSYJ: "大时 大败 咸池 小耗 四废 五虚 土符 五离"
  },
  "3-壬戌": {
    JSYQ: "天德 月德 天马 福生 解神",
    XSYJ: "月破 大耗 四击 九空 九坎 九焦 白虎"
  },
  "3-癸亥": {
    JSYQ: "母仓 玉堂",
    XSYJ: "游祸 天贼 重日"
  },
  "4-甲子": {
    JSYQ: "月空 天恩 天马 不将",
    XSYJ: "天吏 致死 五虚 白虎"
  },
  "4-乙丑": {
    JSYQ: "月德合 天恩 三合 临日 天喜 天医 六仪 玉堂",
    XSYJ: "厌对 招摇 四击 归忌"
  },
  "4-丙寅": {
    JSYQ: "天德合 天恩 母仓 敬安 五合 鸣吠对",
    XSYJ: "天罡 劫煞 月害 土符 复日 天牢"
  },
  "4-丁卯": {
    JSYQ: "天恩 母仓 阴德 时阳 生气 普护 五合 鸣吠对",
    XSYJ: "灾煞 天火 元武"
  },
  "4-戊辰": {
    JSYQ: "天恩 四相 时德 阳德 福生 司命",
    XSYJ: "月煞 月虚 血支 五虚 绝阴"
  },
  "4-己巳": {
    JSYQ: "月恩 四相 王日",
    XSYJ: "月建 小时 土府 重日 勾陈 小会 纯阳 阳错"
  },
  "4-庚午": {
    JSYQ: "月德 官日 吉期 圣心 青龙 鸣吠",
    XSYJ: "大时 大败 咸池"
  },
  "4-辛未": {
    JSYQ: "天德 守日 天巫 福德 益后 明堂",
    XSYJ: "月厌 地火 九空 九坎 九焦 大煞 孤辰"
  },
  "4-壬申": {
    JSYQ: "相日 六合 五富 续世 除神 鸣吠",
    XSYJ: "河魁 死神 月刑 游祸 五虚 血忌 五离 天刑"
  },
  "4-癸酉": {
    JSYQ: "民日 三合 时阴 要安 除神 鸣吠",
    XSYJ: "死气 五离 朱雀"
  },
  "4-甲戌": {
    JSYQ: "月空 不将 玉宇 解神 金匮",
    XSYJ: "小耗 天贼"
  },
  "4-乙亥": {
    JSYQ: "月德合 驿马 天后 天仓 不将 金堂 宝光",
    XSYJ: "月破 大耗 往亡 重日"
  },
  "4-丙子": {
    JSYQ: "天德合 天马 不将 鸣吠对",
    XSYJ: "天吏 致死 四忌 七鸟 五虚 复日 触水龙 白虎"
  },
  "4-丁丑": {
    JSYQ: "三合 临日 天喜 天医 六仪 玉堂",
    XSYJ: "厌对 招摇 四击 归忌"
  },
  "4-戊寅": {
    JSYQ: "母仓 四相 敬安 五合",
    XSYJ: "天罡 劫煞 月害 土符 天牢"
  },
  "4-己卯": {
    JSYQ: "天恩 母仓 月恩 四相 阴德 时阳 生气 普护 五合",
    XSYJ: "灾煞 天火 地囊 元武"
  },
  "4-庚辰": {
    JSYQ: "月德 天恩 时德 阴德 福生 司命",
    XSYJ: "月煞 月虚 血支 五虚"
  },
  "4-辛巳": {
    JSYQ: "天德 天恩 王日",
    XSYJ: "月建 小时 土府 重日 勾陈"
  },
  "4-壬午": {
    JSYQ: "天恩 官日 吉期 圣心 青龙 鸣吠",
    XSYJ: "大时 大败 咸池"
  },
  "4-癸未": {
    JSYQ: "天恩 守日 天巫 福德 益后 明堂",
    XSYJ: "月厌 地火 九空 九坎 九焦 大煞 触水龙 孤辰"
  },
  "4-甲申": {
    JSYQ: "月空 相日 六合 五富 不将 续世 除神 鸣吠",
    XSYJ: "河魁 死神 月刑 游祸 五虚 八风 血忌 五离 天刑"
  },
  "4-乙酉": {
    JSYQ: "月德合 民日 三合 时阴 不将 要安 除神 鸣吠",
    XSYJ: "死气 五离 朱雀"
  },
  "4-丙戌": {
    JSYQ: "天德合 不将 玉宇 解神 金匮",
    XSYJ: "小耗 天贼 五墓 复日"
  },
  "4-丁亥": {
    JSYQ: "驿马 天后 天仓 不将 金堂 宝光",
    XSYJ: "月破 大耗 四穷 七鸟 往亡 重日"
  },
  "4-戊子": {
    JSYQ: "四相 天马 不将",
    XSYJ: "天吏 致死 五虚 白虎"
  },
  "4-己丑": {
    JSYQ: "月恩 四相 三合 临日 天喜 天医 六仪 玉堂",
    XSYJ: "厌对 招摇 四击 归忌"
  },
  "4-庚寅": {
    JSYQ: "月德 母仓 敬安 五合 鸣吠对",
    XSYJ: "天罡 劫煞 月害 土符 天牢"
  },
  "4-辛卯": {
    JSYQ: "天德 母仓 阴德 时阴 生气 普护 五合 鸣吠对",
    XSYJ: "灾煞 天火 元武"
  },
  "4-壬辰": {
    JSYQ: "时德 阳德 福生 司命",
    XSYJ: "月煞 月虚 血支 五虚"
  },
  "4-癸巳": {
    JSYQ: "王日",
    XSYJ: "月建 小时 土府 重日 勾陈"
  },
  "4-甲午": {
    JSYQ: "月空 天赦 官日 吉期 圣心 青龙 鸣吠",
    XSYJ: "大时 大败 咸池"
  },
  "4-乙未": {
    JSYQ: "月德合 守日 天巫 福德 益后 明堂",
    XSYJ: "月厌 地火 九空 九坎 九焦 大煞 行狠"
  },
  "4-丙申": {
    JSYQ: "天德合 天愿 相日 六合 五富 不将 续世 除神 鸣吠",
    XSYJ: "河魁 死神 月刑 游祸 五虚 血忌 复日 五离 天刑"
  },
  "4-丁酉": {
    JSYQ: "民日 三合 时阴 不将 要安 除神 鸣吠",
    XSYJ: "死气 五离 朱雀"
  },
  "4-戊戌": {
    JSYQ: "四相 不将 玉宇 解神 金匮",
    XSYJ: "小耗 天贼"
  },
  "4-己亥": {
    JSYQ: "月恩 四相 驿马 天后 天仓 金堂 宝光",
    XSYJ: "月破 大耗 往亡 重日"
  },
  "4-庚子": {
    JSYQ: "月德 天马 鸣吠对",
    XSYJ: "天吏 致死 五虚 白虎"
  },
  "4-辛丑": {
    JSYQ: "天德 三合 临日 天喜 天医 六仪 玉堂",
    XSYJ: "厌对 招摇 四击 归忌"
  },
  "4-壬寅": {
    JSYQ: "母仓 敬安 五合 鸣吠对",
    XSYJ: "天罡 劫煞 月害 土符 天牢"
  },
  "4-癸卯": {
    JSYQ: "母仓 阴德 时阳 生气 普护 五合 鸣吠对",
    XSYJ: "灾煞 天火 元武"
  },
  "4-甲辰": {
    JSYQ: "月空 时德 阳德 福生 司命",
    XSYJ: "月煞 月虚 血支 五虚 八风"
  },
  "4-乙巳": {
    JSYQ: "月德合 王日",
    XSYJ: "月建 小时 土府 重日 勾陈"
  },
  "4-丙午": {
    JSYQ: "天德合 官日 吉期 圣心 青龙 鸣吠",
    XSYJ: "大时 大败 咸池 复日 岁薄"
  },
  "4-丁未": {
    JSYQ: "守日 天巫 福德 益后 明堂",
    XSYJ: "月厌 地火 九空 九坎 九焦 大煞 八专 了戾 阴错"
  },
  "4-戊申": {
    JSYQ: "四相 相日 六合 五富 不将 续世 除神",
    XSYJ: "河魁 死神 月刑 游祸 五虚 血忌 五离 天刑"
  },
  "4-己酉": {
    JSYQ: "天恩 月恩 四相 民日 三合 时阴 要安 除神 鸣吠",
    XSYJ: "死气 地囊 五离 朱雀"
  },
  "4-庚戌": {
    JSYQ: "月德 天恩 玉宇 解神 金匮",
    XSYJ: "小耗 天贼"
  },
  "4-辛亥": {
    JSYQ: "天德 天恩 驿马 天后 天仓 金堂 宝光",
    XSYJ: "月破 大耗 往亡 重日"
  },
  "4-壬子": {
    JSYQ: "天恩 天马 鸣吠对",
    XSYJ: "天吏 致死 四废 五虚 白虎"
  },
  "4-癸丑": {
    JSYQ: "天恩 三合 临日 天喜 天医 六仪 玉堂",
    XSYJ: "厌对 招摇 四击 归忌 八专 触水龙"
  },
  "4-甲寅": {
    JSYQ: "月空 母仓 敬安 五合 鸣吠对",
    XSYJ: "天罡 劫煞 月害 土符 八专 天牢"
  },
  "4-乙卯": {
    JSYQ: "月德合 母仓 阴德 时阴 生气 普护 五合 鸣吠对",
    XSYJ: "灾煞 天火 四耗 元武"
  },
  "4-丙辰": {
    JSYQ: "天德合 时德 阳德 福生 司命",
    XSYJ: "月煞 月虚 血支 五虚 复日"
  },
  "4-丁巳": {
    JSYQ: "王日",
    XSYJ: "月建 小时 土府 重日 勾陈 阳错"
  },
  "4-戊午": {
    JSYQ: "四相 官日 吉期 圣心 青龙",
    XSYJ: "大时 大败 咸池 岁薄"
  },
  "4-己未": {
    JSYQ: "月恩 四相 守日 天巫 福德 益后 明堂",
    XSYJ: "月厌 地火 九空 九坎 九焦 大煞 八专 孤辰 阴错"
  },
  "4-庚申": {
    JSYQ: "月德 相日 六合 五富 续世 除神 鸣吠",
    XSYJ: "河魁 死神 月刑 游祸 五虚 血忌 五离 八专 天刑"
  },
  "4-辛酉": {
    JSYQ: "天德 民日 三合 时阴 要安 除神 鸣吠",
    XSYJ: "死气 五离 朱雀"
  },
  "4-壬戌": {
    JSYQ: "玉宇 解神 金匮",
    XSYJ: "小耗 天贼"
  },
  "4-癸亥": {
    JSYQ: "驿马 天后 天仓 金堂 宝光",
    XSYJ: "月破 大耗 四废 往亡 重日 阴阳交破"
  },
  "5-甲子": {
    JSYQ: "天恩 六仪 解神 金匮",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 五虚"
  },
  "5-乙丑": {
    JSYQ: "天恩 阴德 圣心 宝光",
    XSYJ: "月煞 月虚 月害 四击"
  },
  "5-丙寅": {
    JSYQ: "月德 天恩 母仓 三合 天马 天喜 天医 益后 五合 鸣吠对",
    XSYJ: "大煞 归忌 白虎"
  },
  "5-丁卯": {
    JSYQ: "天恩 母仓 续世 五合 玉堂 鸣吠对",
    XSYJ: "河魁 大时 大败 咸池 九坎 九焦 血忌 往亡 复日"
  },
  "5-戊辰": {
    JSYQ: "天恩 月恩 四相 时德 时阳 生气 要安",
    XSYJ: "五虚 九空 天牢"
  },
  "5-己巳": {
    JSYQ: "四相 王日 玉宇",
    XSYJ: "游祸 血支 重日 元武"
  },
  "5-庚午": {
    JSYQ: "阳德 官日 金堂 司命 鸣吠",
    XSYJ: "月建 小时 土府 月刑 月厌 地火 土符"
  },
  "5-辛未": {
    JSYQ: "月德合 守日 吉期 六合",
    XSYJ: "勾陈"
  },
  "5-壬申": {
    JSYQ: "月空 相日 驿马 天后 天巫 福德 除神 青龙 鸣吠",
    XSYJ: "五虚 五离"
  },
  "5-癸酉": {
    JSYQ: "民日 不将 敬安 除神 明堂 鸣吠",
    XSYJ: "天罡 死神 天吏 致死 天贼 五离"
  },
  "5-甲戌": {
    JSYQ: "三合 临日 时阴 天仓 不将 普护",
    XSYJ: "死气 天刑"
  },
  "5-乙亥": {
    JSYQ: "五富 不将 福生",
    XSYJ: "劫煞 小耗 重日 朱雀"
  },
  "5-丙子": {
    JSYQ: "月德 六仪 解神 金匮 鸣吠对",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 四忌 七鸟 五虚 触水龙"
  },
  "5-丁丑": {
    JSYQ: "阴德 圣心 宝光",
    XSYJ: "月煞 月虚 月害 复日"
  },
  "5-戊寅": {
    JSYQ: "母仓 月恩 四相 三合 天马 天喜 天医 益后 五合",
    XSYJ: "大煞 归忌 白虎"
  },
  "5-己卯": {
    JSYQ: "天恩 母仓 四相 续世 五合 玉堂",
    XSYJ: "河魁 大时 大败 咸池 九坎 九焦 血忌 往亡"
  },
  "5-庚辰": {
    JSYQ: "天恩 时德 时阳 生气 要安",
    XSYJ: "五虚 九空 天牢"
  },
  "5-辛巳": {
    JSYQ: "月德合 天恩 王日 玉宇",
    XSYJ: "游祸 血支 重日 元武"
  },
  "5-壬午": {
    JSYQ: "月空 天恩 阳德 官日 金堂 司命 鸣吠",
    XSYJ: "月建 小时 土府 月刑 月厌 地火 土符"
  },
  "5-癸未": {
    JSYQ: "天恩 守日 吉期 六合 不将",
    XSYJ: "触水龙 勾陈"
  },
  "5-甲申": {
    JSYQ: "相日 驿马 天后 天巫 福德 不将 除神 青龙 鸣吠",
    XSYJ: "五虚 八风 五离"
  },
  "5-乙酉": {
    JSYQ: "民日 不将 敬安 除神 明堂 鸣吠",
    XSYJ: "天罡 死神 天吏 致死 天贼 五离"
  },
  "5-丙戌": {
    JSYQ: "月德 三合 临日 时阴 天仓 不将 普护",
    XSYJ: "死气 五墓 天刑"
  },
  "5-丁亥": {
    JSYQ: "五富 福生",
    XSYJ: "劫煞 小耗 四穷 七鸟 复日 重日 朱雀"
  },
  "5-戊子": {
    JSYQ: "月恩 四相 六仪 解神 金匮",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 五虚"
  },
  "5-己丑": {
    JSYQ: "四相 阴德 圣心 宝光",
    XSYJ: "月煞 月虚 月害 四击"
  },
  "5-庚寅": {
    JSYQ: "母仓 三合 天马 天喜 天医 益后 五合 鸣吠对",
    XSYJ: "大煞 归忌 白虎"
  },
  "5-辛卯": {
    JSYQ: "月德合 母仓 续世 五合 玉堂 鸣吠对",
    XSYJ: "河魁 大时 大败 咸池 九坎 九焦 血忌 往亡"
  },
  "5-壬辰": {
    JSYQ: "月空 时德 时阳 生气 要安",
    XSYJ: "五虚 九空 天牢"
  },
  "5-癸巳": {
    JSYQ: "王日 玉宇",
    XSYJ: "游祸 血支 重日 元武"
  },
  "5-甲午": {
    JSYQ: "天赦 阳德 官日 金堂 司命 鸣吠",
    XSYJ: "月建 小时 土府 月刑 月厌 地火 土符"
  },
  "5-乙未": {
    JSYQ: "守日 吉期 六合 不将",
    XSYJ: "勾陈"
  },
  "5-丙申": {
    JSYQ: "月德 相日 驿马 天后 天巫 福德 不将 除神 青龙 鸣吠",
    XSYJ: "五虚 五离"
  },
  "5-丁酉": {
    JSYQ: "民日 敬安 除神 明堂 鸣吠",
    XSYJ: "天罡 死神 天吏 致死 天贼 复日 五离"
  },
  "5-戊戌": {
    JSYQ: "月恩 四相 三合 临日 时阴 天仓 不将",
    XSYJ: "死气 天刑"
  },
  "5-己亥": {
    JSYQ: "四相 五富 福生",
    XSYJ: "劫煞 小耗 重日 朱雀"
  },
  "5-庚子": {
    JSYQ: "六仪 解神 金匮 鸣吠对",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 五虚"
  },
  "5-辛丑": {
    JSYQ: "月德合 阴德 圣心 宝光",
    XSYJ: "月煞 月虚 月害 四击"
  },
  "5-壬寅": {
    JSYQ: "月空 母仓 三合 天马 天喜 天医 益后 五合 鸣吠对",
    XSYJ: "大煞 归忌 白虎"
  },
  "5-癸卯": {
    JSYQ: "母仓 续世 五合 玉堂 鸣吠对",
    XSYJ: "河魁 大时 大败 咸池 九坎 九焦 血忌 往亡"
  },
  "5-甲辰": {
    JSYQ: "时德 时阳 生气 要安",
    XSYJ: "五虚 八风 九空 地囊 天牢"
  },
  "5-乙巳": {
    JSYQ: "王日 玉宇",
    XSYJ: "游祸 血支 重日 元武"
  },
  "5-丙午": {
    JSYQ: "月德 阳德 官日 金堂 司命 鸣吠",
    XSYJ: "月建 小时 土府 月刑 月厌 地火 土符 大会 阴阳俱错"
  },
  "5-丁未": {
    JSYQ: "天愿 守日 吉期 六合",
    XSYJ: "复日 八专 勾陈"
  },
  "5-戊申": {
    JSYQ: "月恩 四相 相日 驿马 天后 天巫 福德 不将 除神 青龙",
    XSYJ: "五虚 五离"
  },
  "5-己酉": {
    JSYQ: "天恩 四相 民日 敬安 除神 明堂 鸣吠",
    XSYJ: "天罡 死神 天吏 致死 天贼 五离"
  },
  "5-庚戌": {
    JSYQ: "天恩 三合 临日 时阴 天仓 普护",
    XSYJ: "死气 天刑"
  },
  "5-辛亥": {
    JSYQ: "月德合 天恩 五富 福生",
    XSYJ: "劫煞 小耗 重日 朱雀"
  },
  "5-壬子": {
    JSYQ: "月空 天恩 六仪 解神 金匮 鸣吠对",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 四废 五虚 阴阳击冲"
  },
  "5-癸丑": {
    JSYQ: "天恩 阴德 圣心 宝光",
    XSYJ: "月煞 月虚 月害 四击 八专 触水龙"
  },
  "5-甲寅": {
    JSYQ: "母仓 三合 天马 天喜 天医 益后 五合 鸣吠对",
    XSYJ: "大煞 归忌 八专 白虎"
  },
  "5-乙卯": {
    JSYQ: "母仓 续世 五合 玉堂 鸣吠对",
    XSYJ: "河魁 大时 大败 咸池 四耗 九坎 九焦 血忌 往亡"
  },
  "5-丙辰": {
    JSYQ: "月德 时德 时阳 生气 要安",
    XSYJ: "五虚 九空 天牢"
  },
  "5-丁巳": {
    JSYQ: "王日 玉宇",
    XSYJ: "游祸 血支 复日 重日 元武"
  },
  "5-戊午": {
    JSYQ: "月德 四相 阳德 官日 金堂 司命",
    XSYJ: "月建 小时 土府 月刑 月厌 地火 土符 小会"
  },
  "5-己未": {
    JSYQ: "四相 守日 吉期 六合",
    XSYJ: "八专 勾陈"
  },
  "5-庚申": {
    JSYQ: "相日 驿马 天后 天巫 福德 除神 青龙 鸣吠",
    XSYJ: "五虚 五离 八专"
  },
  "5-辛酉": {
    JSYQ: "月德合 民日 敬安 除神 明堂 鸣吠",
    XSYJ: "天罡 死神 天吏 致死 天贼 五离"
  },
  "5-壬戌": {
    JSYQ: "月空 三合 临日 时阴 天仓 普护",
    XSYJ: "死气 地囊 天刑"
  },
  "5-癸亥": {
    JSYQ: "五富 不将 福生",
    XSYJ: "劫煞 小耗 四废 重日 朱雀"
  },
  "6-甲子": {
    JSYQ: "天德 月德 天恩 金堂 解神",
    XSYJ: "月害 大时 大败 咸池 小耗 五虚 九坎 九焦 归忌 天刑"
  },
  "6-乙丑": {
    JSYQ: "天恩",
    XSYJ: "月破 大耗 月刑 四击 九空 朱雀"
  },
  "6-丙寅": {
    JSYQ: "天恩 母仓 五富 五合 金匮 鸣吠对",
    XSYJ: "游祸"
  },
  "6-丁卯": {
    JSYQ: "天恩 母仓 三合 临日 天喜 天医 敬安 五合 宝光 鸣吠对",
    XSYJ: "大煞"
  },
  "6-戊辰": {
    JSYQ: "天恩 四相 时德 天马 普护",
    XSYJ: "天罡 五虚 五墓 白虎"
  },
  "6-己巳": {
    JSYQ: "天德合 月德合 四相 王日 驿马 天后 时阳 生气 福生 玉堂",
    XSYJ: "月厌 地火 复日 重日 阴错"
  },
  "6-庚午": {
    JSYQ: "月空 官日 六合 鸣吠",
    XSYJ: "天吏 致死 血支 往亡 天牢"
  },
  "6-辛未": {
    JSYQ: "月恩 守日 圣心",
    XSYJ: "月建 小时 土府 元武"
  },
  "6-壬申": {
    JSYQ: "阳德 相日 吉期 不将 益后 除神 司命 鸣吠",
    XSYJ: "劫煞 天贼 五虚 五离"
  },
  "6-癸酉": {
    JSYQ: "民日 天巫 福德 天仓 不将 续世 除神 鸣吠",
    XSYJ: "劫煞 天贼 五虚 五离"
  },
  "6-甲戌": {
    JSYQ: "天德 月德 不将 要安 青龙",
    XSYJ: "河魁 死神 月煞 月虚 土符"
  },
  "6-乙亥": {
    JSYQ: "阴德 三合 时阴 六仪 玉宇 明堂",
    XSYJ: "厌对 招摇 死气 重日"
  },
  "6-丙子": {
    JSYQ: "金堂 解神 鸣吠对",
    XSYJ: "月害 大时 大败 咸池 小耗 四忌 七鸟 五虚 九坎 九焦 归忌 触水龙 天刑"
  },
  "6-丁丑": {
    JSYQ: "[无神煞]",
    XSYJ: "月破 大耗 月刑 四击 九空 朱雀"
  },
  "6-戊寅": {
    JSYQ: "母仓 四相 五富 五合 金匮",
    XSYJ: "游祸"
  },
  "6-己卯": {
    JSYQ: "天德合 月德合 天恩 母仓 四相 三合 临日 天喜 天医 敬安 五合 宝光",
    XSYJ: "大煞 复日"
  },
  "6-庚辰": {
    JSYQ: "月空 天恩 时德 天马 普护",
    XSYJ: "天罡 五虚 白虎"
  },
  "6-辛巳": {
    JSYQ: "天恩 月恩 王日 驿马 天后 时阳 生气 福生 玉堂",
    XSYJ: "月厌 地火 重日"
  },
  "6-壬午": {
    JSYQ: "天恩 官日 六合 不将 鸣吠",
    XSYJ: "天吏 致死 血支 往亡 天牢"
  },
  "6-癸未": {
    JSYQ: "天恩 守日 不将 圣心",
    XSYJ: "月建 小时 土府 触水龙 元武"
  },
  "6-甲申": {
    JSYQ: "天德 月德 阳德 相日 吉期 不将 益后 除神 司命 鸣吠",
    XSYJ: "劫煞 天贼 五虚 八风 五离"
  },
  "6-乙酉": {
    JSYQ: "民日 天巫 福德 天仓 不将 续世 除神 鸣吠",
    XSYJ: "灾煞 天火 血忌 五离 勾陈"
  },
  "6-丙戌": {
    JSYQ: "要安 青龙",
    XSYJ: "河魁 死神 月煞 月虚 土符 地囊"
  },
  "6-丁亥": {
    JSYQ: "阴德 三合 时阴 六仪 玉宇 明堂",
    XSYJ: "厌对 招摇 死气 四穷 七鸟 重日"
  },
  "6-戊子": {
    JSYQ: "四相 金堂 解神",
    XSYJ: "月害 大时 大败 咸池 小耗 五虚 九坎 九焦 归忌 天刑"
  },
  "6-己丑": {
    JSYQ: "天德合 月德合 四相",
    XSYJ: "月破 大耗 月刑 四击 九空 复日 朱雀"
  },
  "6-庚寅": {
    JSYQ: "月空 母仓 五富 五合 金匮 鸣吠对",
    XSYJ: "游祸"
  },
  "6-辛卯": {
    JSYQ: "母仓 月恩 三合 临日 天喜 天医 敬安 五合 宝光 鸣吠对",
    XSYJ: "大煞"
  },
  "6-壬辰": {
    JSYQ: "时德 天马 普护",
    XSYJ: "天罡 五虚 白虎"
  },
  "6-癸巳": {
    JSYQ: "王日 驿马 天后 时阳 生气 福生 玉堂",
    XSYJ: "月厌 地火 重日"
  },
  "6-甲午": {
    JSYQ: "天德 月德 天赦 官日 六合 不将 鸣吠",
    XSYJ: "天吏 致死 血支 往亡 天牢"
  },
  "6-乙未": {
    JSYQ: "守日 不将 圣心",
    XSYJ: "月建 小时 土府 元武"
  },
  "6-丙申": {
    JSYQ: "阳德 相日 吉期 益后 除神 司命 鸣吠",
    XSYJ: "劫煞 天贼 五虚 五离"
  },
  "6-丁酉": {
    JSYQ: "民日 天巫 福德 天仓 续世 除神 鸣吠",
    XSYJ: "灾煞 天火 血忌 五离 勾陈"
  },
  "6-戊戌": {
    JSYQ: "四相 不将 要安 青龙",
    XSYJ: "河魁 死神 月煞 月虚 土符"
  },
  "6-己亥": {
    JSYQ: "天德合 月德合 四相 阴德 三合 时阴 六仪 玉宇 明堂",
    XSYJ: "厌对 招摇 死气 复日 重日"
  },
  "6-庚子": {
    JSYQ: "月空 金堂 解神 鸣吠对",
    XSYJ: "月害 大时 大败 咸池 小耗 五虚 九坎 九焦 归忌 天刑"
  },
  "6-辛丑": {
    JSYQ: "月恩",
    XSYJ: "月破 大耗 月刑 四击 九空 朱雀"
  },
  "6-壬寅": {
    JSYQ: "母仓 五富 五合 金匮 鸣吠对",
    XSYJ: "游祸"
  },
  "6-癸卯": {
    JSYQ: "母仓 三合 临日 天喜 天医 敬安 五合 宝光 鸣吠对",
    XSYJ: "大煞"
  },
  "6-甲辰": {
    JSYQ: "天德 月德 时德 天马 普护",
    XSYJ: "天罡 五虚 八风 白虎"
  },
  "6-乙巳": {
    JSYQ: "王日 驿马 天后 时阳 生气 福生 玉堂",
    XSYJ: "月厌 地火 重日"
  },
  "6-丙午": {
    JSYQ: "官日 六合 鸣吠",
    XSYJ: "天吏 致死 血支 往亡 天牢 逐阵"
  },
  "6-丁未": {
    JSYQ: "守日 圣心",
    XSYJ: "月建 小时 土府 八专 元武 阳错"
  },
  "6-戊申": {
    JSYQ: "四相 阳德 相日 吉期 不将 益后 除神 司命",
    XSYJ: "劫煞 天贼 五虚 五离"
  },
  "6-己酉": {
    JSYQ: "天德合 月德合 天恩 四相 民日 天巫 福德 天仓 续世 除神 鸣吠",
    XSYJ: "灾煞 天火 血忌 复日 五离 勾陈"
  },
  "6-庚戌": {
    JSYQ: "月空 天恩 要安 青龙",
    XSYJ: "河魁 死神 月煞 月虚 土符"
  },
  "6-辛亥": {
    JSYQ: "天恩 月恩 阴德 三合 时阴 六仪 玉宇 明堂",
    XSYJ: "厌对 招摇 死气 重日"
  },
  "6-壬子": {
    JSYQ: "天恩 金堂 解神 鸣吠对",
    XSYJ: "月害 大时 大败 咸池 小耗 四废 五虚 九坎 九焦 归忌 天刑"
  },
  "6-癸丑": {
    JSYQ: "天恩",
    XSYJ: "月破 大耗 月刑 四击 九空 八专 触水龙 朱雀 阳错阴冲"
  },
  "6-甲寅": {
    JSYQ: "天德 月德 母仓 五富 五合 金匮 鸣吠对",
    XSYJ: "游祸 八专"
  },
  "6-乙卯": {
    JSYQ: "母仓 三合 临日 天喜 天医 敬安 五合 宝光 鸣吠对",
    XSYJ: "四耗 大煞"
  },
  "6-丙辰": {
    JSYQ: "时德 天马 普护",
    XSYJ: "天罡 五虚 地囊 白虎"
  },
  "6-丁巳": {
    JSYQ: "王日 驿马 天后 时阳 生气 福生 玉堂",
    XSYJ: "月厌 地火 重日 大会 阴错"
  },
  "6-戊午": {
    JSYQ: "天愿 四相 官日 六合 不将",
    XSYJ: "天吏 致死 血支 往亡 天牢 逐阵"
  },
  "6-己未": {
    JSYQ: "天德合 月德合 四相 守日 圣心",
    XSYJ: "月建 小时 土府 复日 八专 元武 阳错"
  },
  "6-庚申": {
    JSYQ: "月空 阳德 相日 吉期 益后 除神 司命 鸣吠",
    XSYJ: "劫煞 天贼 五虚 五离 八专"
  },
  "6-辛酉": {
    JSYQ: "月恩 民日 天巫 福德 天仓 续世 除神 鸣吠",
    XSYJ: "灾煞 天火 血忌 五离 勾陈"
  },
  "6-壬戌": {
    JSYQ: "不将 要安 青龙",
    XSYJ: "河魁 死神 月煞 月虚 土符"
  },
  "6-癸亥": {
    JSYQ: "阴德 三合 时阴 六仪 玉宇 明堂",
    XSYJ: "厌对 招摇 死气 四废 重日"
  },
  "7-甲子": {
    JSYQ: "天恩 时阳 民日 三合 临日 时阴 福生 青龙",
    XSYJ: "死气"
  },
  "7-乙丑": {
    JSYQ: "天恩 母仓 明堂",
    XSYJ: "小耗 归忌"
  },
  "7-丙寅": {
    JSYQ: "月空 天恩 驿马 天后 圣心 解神 五合 鸣吠对",
    XSYJ: "月破 大耗 月刑 天刑"
  },
  "7-丁卯": {
    JSYQ: "月德合 天恩 益后 五合 鸣吠对",
    XSYJ: "天吏 致死 朱雀 五虚 七符"
  },
  "7-戊辰": {
    JSYQ: "天德合 天恩 母仓 三合 天喜 天医 续世 金匮",
    XSYJ: "月厌 地火 四击 大煞 血忌"
  },
  "7-己巳": {
    JSYQ: "天愿 六合 五富 要安 宝光",
    XSYJ: "河魁 劫煞 重日"
  },
  "7-庚午": {
    JSYQ: "天马 时阳 生气 玉宇 鸣吠",
    XSYJ: "灾煞 天火 复日 白虎"
  },
  "7-辛未": {
    JSYQ: "母仓 金堂 玉堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚"
  },
  "7-壬申": {
    JSYQ: "月德 月恩 四相 王日",
    XSYJ: "月建 小时 土符 五离 天牢"
  },
  "7-癸酉": {
    JSYQ: "天德 四相 阴德 官日 吉期 不将 除神 鸣吠",
    XSYJ: "大时 大败 咸池 九坎 九焦 往亡 五离 元武"
  },
  "7-甲戌": {
    JSYQ: "母仓 阳德 守日 天巫 福德 六仪 敬安 司命",
    XSYJ: "厌对 招摇 天狗 九空"
  },
  "7-乙亥": {
    JSYQ: "相日 普护",
    XSYJ: "天罡 死神 月害 游祸 重日 勾陈"
  },
  "7-丙子": {
    JSYQ: "月空 时德 民日 三合 临日 时阴 福生 青龙 鸣吠对",
    XSYJ: "死气 触水龙"
  },
  "7-丁丑": {
    JSYQ: "月德合 母仓 明堂",
    XSYJ: "小耗 归忌"
  },
  "7-戊寅": {
    JSYQ: "天德合 驿马 天后 圣心 解神 五合",
    XSYJ: "月破 大耗 月刑"
  },
  "7-己卯": {
    JSYQ: "天恩 益后 五合",
    XSYJ: "天吏 致死 五虚 土符 朱雀"
  },
  "7-庚辰": {
    JSYQ: "天恩 母仓 三合 天喜 天医 续世 金匮",
    XSYJ: "月厌 地火 四击 大煞 血忌 复日 大会"
  },
  "7-辛巳": {
    JSYQ: "天恩 六合 五富 要安 宝光",
    XSYJ: "河魁 劫煞 重日"
  },
  "7-壬午": {
    JSYQ: "月德 天德 月恩 四相 天马 时阳 生气 不将 玉宇 鸣吠",
    XSYJ: "灾煞 天火 白虎"
  },
  "7-癸未": {
    JSYQ: "天德 天恩 母仓 四相 不将 金堂 玉堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚 触水龙"
  },
  "7-甲申": {
    JSYQ: "王日 天仓 不将 除神 鸣吠",
    XSYJ: "月建 小时 土府 五离 天牢"
  },
  "7-乙酉": {
    JSYQ: "阴德 官日 吉期 不将 除神 鸣吠",
    XSYJ: "大时 大败 咸池 九坎 九焦 往亡 五离 元武"
  },
  "7-丁亥": {
    JSYQ: "月德合 相日 普护",
    XSYJ: "天罡 死神 月害 游祸 五虚 八风 地囊 重日 勾陈"
  },
  "7-戊子": {
    JSYQ: "天德合 时德 民日 三合 临日 时阴 福生 青龙",
    XSYJ: "死气"
  },
  "7-己丑": {
    JSYQ: "母仓 明堂",
    XSYJ: "小耗 归忌"
  },
  "7-庚寅": {
    JSYQ: "驿马 天后 圣心",
    XSYJ: "五合 鸣吠对"
  },
  "7-辛卯": {
    JSYQ: "益后 五合 鸣吠对",
    XSYJ: "天吏 致死 五虚 土符 朱雀"
  },
  "7-壬辰": {
    JSYQ: "月德 母仓 月恩 四相 三合 天喜 天医 续世 金匮",
    XSYJ: "月厌 地火 四击 大煞 血忌"
  },
  "7-癸巳": {
    JSYQ: "天德 四相 六合 五富 不将 要安 宝光",
    XSYJ: "河魁 劫煞 重日"
  },
  "7-甲午": {
    JSYQ: "天马 时阳 生气 不将 玉宇 鸣吠",
    XSYJ: "灾煞 天火 白虎"
  },
  "7-乙未": {
    JSYQ: "母仓 不将 金堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚"
  },
  "7-丙申": {
    JSYQ: "月空 王日 天仓 除神 鸣吠",
    XSYJ: "月建 小时 土府 五离 天牢"
  },
  "7-丁酉": {
    JSYQ: "月德合 阴德 官日 吉期 除神 鸣吠",
    XSYJ: "大时 大败 咸池 九坎 九焦 往亡 五离 元武"
  },
  "7-戊戌": {
    JSYQ: "天德合 母仓 阳德 守日 天巫 福德 六仪 敬安 司命",
    XSYJ: "厌对 招摇 天狗 九空"
  },
  "7-己亥": {
    JSYQ: "相日 普护",
    XSYJ: "天罡 死神 月害 游祸 五虚 重日 勾陈"
  },
  "7-庚子": {
    JSYQ: "时德 民日 三合 临日 时阴 福生 青龙 鸣吠对",
    XSYJ: "死气 四忌 九虎 复日"
  },
  "7-辛丑": {
    JSYQ: "母仓 明堂",
    XSYJ: "小耗 五墓 归忌"
  },
  "7-壬寅": {
    JSYQ: "月德 月恩 四相 驿马 天后 圣心 解神 五合 鸣吠对",
    XSYJ: "月破 大耗 月刑 天刑"
  },
  "7-癸卯": {
    JSYQ: "天德 四相 益后 五合 鸣吠对",
    XSYJ: "天吏 致死 五虚 土符 朱雀"
  },
  "7-甲辰": {
    JSYQ: "母仓 三合 天喜 天医 续世 金匮",
    XSYJ: "月厌 地火 四击 大煞 血忌 阴错"
  },
  "7-乙巳": {
    JSYQ: "六合 五富 不将 要安 宝光",
    XSYJ: "河魁 劫煞 重日"
  },
  "7-丙午": {
    JSYQ: "月空 天马 时阳 生气 玉宇 鸣吠",
    XSYJ: "灾煞 天火 白虎"
  },
  "7-丁未": {
    JSYQ: "月德合 母仓 金堂 玉堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚 八风 八专"
  },
  "7-戊申": {
    JSYQ: "天德合 天赦 王日 天仓 不将",
    XSYJ: "月建 小时 土府 五离 天牢"
  },
  "7-己酉": {
    JSYQ: "天恩 阴德 官日 吉期 除神 鸣吠",
    XSYJ: "大时 大败 咸池 九坎 九焦 往亡 五离 元武"
  },
  "7-庚戌": {
    JSYQ: "天恩 母仓 阳德 守日 天巫 福德 六仪 敬安 司命",
    XSYJ: "厌对 招摇 天狗 九空 复日"
  },
  "7-辛亥": {
    JSYQ: "天恩 相日 普护",
    XSYJ: "天罡 死神 月害 游祸 四穷 九虎 五虚 重日 勾陈"
  },
  "7-壬子": {
    JSYQ: "月德 天恩 月恩 四相 时德 民日 三合 临日 时阴 福生 青龙 鸣吠对",
    XSYJ: "死气"
  },
  "7-癸丑": {
    JSYQ: "天德 天恩 母仓 四相 明堂",
    XSYJ: "小耗 归忌 八专 触水龙"
  },
  "7-甲寅": {
    JSYQ: "驿马 天后 圣心 解神 五合 鸣吠对",
    XSYJ: "月破 大耗 月刑 四废 八专 天刑"
  },
  "7-乙卯": {
    JSYQ: "益后 五合 鸣吠对",
    XSYJ: "天吏 致死 四废 五虚 土符 朱雀 三阴"
  },
  "7-丙辰": {
    JSYQ: "月空 母仓 三合 天喜 天医 续世 金匮",
    XSYJ: "月厌 地火 四击 大煞 血忌"
  },
  "7-丁巳": {
    JSYQ: "月德合 六合 五富 要安 宝光",
    XSYJ: "河魁 劫煞 地囊 重日"
  },
  "7-戊午": {
    JSYQ: "天德合 天马 时阳 生气 不将 玉宇",
    XSYJ: "四耗 白虎"
  },
  "7-己未": {
    JSYQ: "母仓 金堂 玉堂",
    XSYJ: "月煞 月虚 血支 天贼 五虚 八专"
  },
  "7-庚申": {
    JSYQ: "王日 天仓 除神 鸣吠",
    XSYJ: "月建 小时 土府 复日 五离 八专 天牢 阳错"
  },
  "7-辛酉": {
    JSYQ: "阴德 官日 吉期 除神 鸣吠",
    XSYJ: "大时 大败 咸池 九坎 九焦 往亡 五离 元武"
  },
  "7-壬戌": {
    JSYQ: "月德 母仓 月恩 四相 阳德 守日 天巫 福德 六仪 敬安 司命",
    XSYJ: "厌对 招摇 天狗 九空"
  },
  "7-癸亥": {
    JSYQ: "天德 四相 相日 普护",
    XSYJ: "天罡 死神 月害 游祸 五虚 重日 勾陈"
  },
  "8-甲子": {
    JSYQ: "月空 天恩 时德 阳德 民日 玉宇 司命",
    XSYJ: "河魁 死神 天吏 致死 往亡"
  },
  "8-乙丑": {
    JSYQ: "月德合 天恩 母仓 三合 时阴 金堂",
    XSYJ: "死气 勾陈"
  },
  "8-丙寅": {
    JSYQ: "天恩 解神 五合 青龙 鸣吠对",
    XSYJ: "劫煞 小耗 地囊 归忌"
  },
  "8-丁卯": {
    JSYQ: "天恩 五合 明堂 鸣吠对",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 五虚"
  },
  "8-戊辰": {
    JSYQ: "天恩 母仓 六合 不将 敬安",
    XSYJ: "月煞 月虚 四击 天刑"
  },
  "8-己巳": {
    JSYQ: "三合 临日 天喜 天医 普护",
    XSYJ: "成日 朱雀"
  },
  "8-庚午": {
    JSYQ: "月德 福生 金匮 鸣吠",
    XSYJ: "天罡 大时 大败 咸池 天贼 九坎 九焦"
  },
  "8-辛未": {
    JSYQ: "母仓 阴德 时阳 生气 天仓 不将 宝光",
    XSYJ: "五虚 九空 土符 复日"
  },
  "8-壬申": {
    JSYQ: "四相 王日 天马 五富 不将 圣心 除神 鸣吠",
    XSYJ: "游祸 血支 五离 白虎"
  },
  "8-癸酉": {
    JSYQ: "月恩 四相 官日 六仪 益后 除神 除神 玉堂 鸣吠",
    XSYJ: "月建 小时 土府 月刑 厌对 招摇 五离"
  },
  "8-甲戌": {
    JSYQ: "月空 母仓 守日 吉期 续世",
    XSYJ: "月害 血忌 天牢"
  },
  "8-乙亥": {
    JSYQ: "月德合 相日 驿马 天后 天巫 福德 要安",
    XSYJ: "五虚 大煞 重日 元武"
  },
  "8-丙子": {
    JSYQ: "时德 阳德 民日 玉宇 司命 鸣吠对",
    XSYJ: "河魁 死神 天吏 致死 往亡 触水龙"
  },
  "8-丁丑": {
    JSYQ: "母仓 三合 时阴 金堂",
    XSYJ: "死气 勾陈"
  },
  "8-戊寅": {
    JSYQ: "解神 五合 青龙",
    XSYJ: "劫煞 小耗 归忌"
  },
  "8-己卯": {
    JSYQ: "天恩 五合 明堂",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 五虚 阴道冲阳"
  },
  "8-庚辰": {
    JSYQ: "月德 天恩 母仓 天愿 六合 敬安",
    XSYJ: "月煞 月虚 四击 天刑"
  },
  "8-辛巳": {
    JSYQ: "天恩 三合 临日 天喜 天医 不将 普护",
    XSYJ: "复日 重日 朱雀"
  },
  "8-壬午": {
    JSYQ: "天恩 四相 不将 福生 金匮 鸣吠",
    XSYJ: "天罡 大时 大败 咸池 天贼 九坎 九焦"
  },
  "8-癸未": {
    JSYQ: "天恩 母仓 月恩 四相 阴德 时阳 生气 天仓 不将 宝光",
    XSYJ: "五虚 九空 土符 触水龙"
  },
  "8-甲申": {
    JSYQ: "月空 王日 天马 五富 不将 圣心 除神 鸣吠",
    XSYJ: "游祸 血支 五离 白虎"
  },
  "8-乙酉": {
    JSYQ: "月德合 官日 六仪 益后 除神 玉堂 鸣吠",
    XSYJ: "月建 小时 土府 月刑 厌对 招摇 五离"
  },
  "8-丙戌": {
    JSYQ: "母仓 守日 吉期 续世",
    XSYJ: "月害 血忌 天牢"
  },
  "8-丁亥": {
    JSYQ: "相日 驿马 天后 天巫 福德 要安",
    XSYJ: "五虚 八风 大煞 重日 元武"
  },
  "8-戊子": {
    JSYQ: "时德 阳德 民日 玉宇 司命",
    XSYJ: "河魁 死神 天吏 致死 往亡"
  },
  "8-己丑": {
    JSYQ: "母仓 三合 时阴 金堂",
    XSYJ: "死气 勾陈"
  },
  "8-庚寅": {
    JSYQ: "月德 解神 五合 青龙 鸣吠对",
    XSYJ: "劫煞 小耗 归忌"
  },
  "8-辛卯": {
    JSYQ: "五合 明堂 鸣吠对",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 五虚 复日 大会"
  },
  "8-壬辰": {
    JSYQ: "母仓 四相 六合 不将 敬安",
    XSYJ: "月煞 月虚 四击 天刑"
  },
  "8-癸巳": {
    JSYQ: "月恩 四相 三合 临日 天喜 天医 不将 普护",
    XSYJ: "重日 朱雀"
  },
  "8-甲午": {
    JSYQ: "月空 不将 福生 金匮 鸣吠",
    XSYJ: "天罡 大时 大败 咸池 天贼 九坎 九焦"
  },
  "8-乙未": {
    JSYQ: "月德合 母仓 阳德 时阳 生气 天仓 宝光",
    XSYJ: "五虚 九空 土符"
  },
  "8-丙申": {
    JSYQ: "王日 天马 五富 圣心 除神 鸣吠",
    XSYJ: "游祸 血支 地囊 五离 白虎"
  },
  "8-丁酉": {
    JSYQ: "官日 六仪 益后 除神 玉堂 鸣吠",
    XSYJ: "月建 小时 土府 月刑 厌对 招摇 五离"
  },
  "7-丙戌": {
    JSYQ: "月空 母仓 阳德 守日 天巫 福德 六仪 敬安 司命",
    XSYJ: "厌对 招摇 天狗 九空"
  },
  "8-戊戌": {
    JSYQ: "母仓 守日 吉期 续世",
    XSYJ: "月害 血忌 天牢"
  },
  "8-己亥": {
    JSYQ: "相日 驿马 天后 天巫 福德 要安",
    XSYJ: "五虚 大煞 重日 元武"
  },
  "8-庚子": {
    JSYQ: "月德 时德 阳德 民日 玉宇 司命 鸣吠对",
    XSYJ: "河魁 死神 天吏 致死 四忌 九虎 往亡"
  },
  "8-辛丑": {
    JSYQ: "母仓 三合 时阴 金堂",
    XSYJ: "死气 五墓 复日 勾陈"
  },
  "8-壬寅": {
    JSYQ: "四相 解神 五合 青龙 鸣吠对",
    XSYJ: "劫煞 小耗 归忌"
  },
  "8-癸卯": {
    JSYQ: "月恩 四相 五合 明堂 鸣吠对",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 五虚"
  },
  "8-甲辰": {
    JSYQ: "月空 母仓 六合 不将 敬安",
    XSYJ: "月煞 月虚 四击 天刑"
  },
  "8-乙巳": {
    JSYQ: "月德合 三合 临日 天喜 天医 普护",
    XSYJ: "重日 朱雀"
  },
  "8-丙午": {
    JSYQ: "福生 金匮 鸣吠",
    XSYJ: "天罡 大时 大败 咸池 天贼 九坎 九焦"
  },
  "8-丁未": {
    JSYQ: "母仓 阴德 时阳 生气 天仓 宝光",
    XSYJ: "五虚 八风 九空 土符 八专"
  },
  "8-戊申": {
    JSYQ: "天赦 王日 天马 五富 不将 圣心 除神",
    XSYJ: "游祸 血支 五离 白虎"
  },
  "8-己酉": {
    JSYQ: "天恩 官日 六仪 益后 除神 玉堂 鸣吠",
    XSYJ: "月建 小时 土府 月厌 厌对 招摇 五离 小会"
  },
  "8-庚戌": {
    JSYQ: "月德 天恩 母仓 守日 吉期 续世",
    XSYJ: "月害 血忌 天牢"
  },
  "8-辛亥": {
    JSYQ: "天恩 相日 驿马 天后 天巫 福德 要安",
    XSYJ: "四穷 九虎 五虚 大煞 复日 重日 元武"
  },
  "8-壬子": {
    JSYQ: "天恩 四相 时德 阳德 民日 玉宇 司命 鸣吠对",
    XSYJ: "河魁 死神 天吏 致死 往亡"
  },
  "8-癸丑": {
    JSYQ: "天恩 母仓 月恩 四相 三合 时阴 金堂",
    XSYJ: "死气 八专 触水龙 勾陈"
  },
  "8-甲寅": {
    JSYQ: "月空 解神 五合 青龙 鸣吠对",
    XSYJ: "劫煞 小耗 四废 归忌 八专"
  },
  "8-乙卯": {
    JSYQ: "月德合 五合 明堂 鸣吠对",
    XSYJ: "月破 大耗 灾煞 天火 月厌 地火 四废 五虚 阴错"
  },
  "8-丙辰": {
    JSYQ: "母仓 六合 敬安",
    XSYJ: "月煞 月虚 四击 天刑"
  },
  "8-丁巳": {
    JSYQ: "三合 临日 天喜 天医 普护",
    XSYJ: "重日 朱雀"
  },
  "8-戊午": {
    JSYQ: "不将 福生 金匮",
    XSYJ: "天罡 大时 大败 咸池 天贼 四耗 九坎 九焦"
  },
  "8-己未": {
    JSYQ: "母仓 阴德 时阳 生气 天仓 宝光",
    XSYJ: "五虚 九空 土符 八专"
  },
  "8-庚申": {
    JSYQ: "月德 王日 天马 五富 圣心 除神 鸣吠",
    XSYJ: "游祸 血支 五离 八专 白虎"
  },
  "8-辛酉": {
    JSYQ: "官日 六仪 益后 除神 玉堂 鸣吠",
    XSYJ: "月建 小时 土府 月刑 厌对 招摇 复日 五离 阳错"
  },
  "8-壬戌": {
    JSYQ: "母仓 四相 守日 吉期 续世",
    XSYJ: "月害 血忌 天牢"
  },
  "8-癸亥": {
    JSYQ: "月恩 四相 相日 驿马 天后 天巫 福德 要安",
    XSYJ: "五虚 大煞 重日 元武"
  },
  "9-甲子": {
    JSYQ: "天恩 时德 民日 天符 福德 普护",
    XSYJ: "灾煞 天火 大煞 归忌 天牢"
  },
  "9-乙丑": {
    JSYQ: "天恩 母仓 福生",
    XSYJ: "天罡 死神 月煞 月虚 元武"
  },
  "9-丙寅": {
    JSYQ: "天德 月德 天恩 阳德 三合 临日 时阴 五合 司命 鸣吠对",
    XSYJ: "月厌 地火 死气 九坎 九焦 孤辰"
  },
  "9-丁卯": {
    JSYQ: "天恩 六合 圣心 五合 鸣吠对",
    XSYJ: "大时 大败 咸池 小耗 五虚 勾陈"
  },
  "9-戊辰": {
    JSYQ: "天恩 母仓 不将 益后 解神 青龙",
    XSYJ: "月破 大耗 四击 五墓 九空 往亡 复日"
  },
  "9-己巳": {
    JSYQ: "阴德 续世 明堂",
    XSYJ: "游祸 天贼 血忌 重日"
  },
  "9-庚午": {
    JSYQ: "月恩 三合 天喜 天医 天仓 不将 要安 鸣吠",
    XSYJ: "天刑"
  },
  "9-辛未": {
    JSYQ: "天德合 月德合 母仓 不将 玉宇",
    XSYJ: "河魁 月刑 五虚 地囊 朱雀"
  },
  "9-壬申": {
    JSYQ: "月空 四相 王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮 鸣吠",
    XSYJ: "厌对 招摇 五离"
  },
  "9-癸酉": {
    JSYQ: "四相 官日 除神 宝光 鸣吠",
    XSYJ: "月害 天吏 致死 血支 五离"
  },
  "9-甲戌": {
    JSYQ: "母仓 守日 天马",
    XSYJ: "月建 小时 土府 白虎 阴位"
  },
  "9-乙亥": {
    JSYQ: "相日 吉期 五富 敬安 玉堂",
    XSYJ: "劫煞 五虚 土符 重日"
  },
  "9-丙子": {
    JSYQ: "天德 月德 时德 民日 天巫 福德 普护 鸣吠对",
    XSYJ: "灾煞 天火 大煞 归忌 触水龙 天牢"
  },
  "9-丁丑": {
    JSYQ: "母仓 福生",
    XSYJ: "天罡 死神 月煞 月虚 元武"
  },
  "9-戊寅": {
    JSYQ: "阳德 三合 临日 时阴 五合 司命",
    XSYJ: "月厌 地火 死气 九坎 九焦 复日 孤辰"
  },
  "9-己卯": {
    JSYQ: "天恩 六合 圣心 五合",
    XSYJ: "大时 大败 咸池 小耗 五虚 勾陈"
  },
  "9-庚辰": {
    JSYQ: "天恩 母仓 月恩 不将 益后 解神 青龙",
    XSYJ: "月破 大耗 四击 九空 往亡"
  },
  "9-辛巳": {
    JSYQ: "天德合 月德合 天恩 阴德 不将 续世 明堂",
    XSYJ: "游祸 天贼 血忌 重日"
  },
  "9-壬午": {
    JSYQ: "月空 天恩 四相 三合 天喜 天医 天仓 不将 要安 鸣吠",
    XSYJ: "天刑"
  },
  "9-癸未": {
    JSYQ: "天恩 母仓 四相 不将 玉宇",
    XSYJ: "河魁 月刑 五虚 触水龙 朱雀"
  },
  "9-甲申": {
    JSYQ: "王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮 鸣吠",
    XSYJ: "厌对 招摇 五离"
  },
  "9-乙酉": {
    JSYQ: "官日 除神 宝光 鸣吠",
    XSYJ: "月害 天吏 致死 血支 五离"
  },
  "9-丙戌": {
    JSYQ: "天德 月德 母仓 守日 天马",
    XSYJ: "月建 小时 土府 白虎"
  },
  "9-丁亥": {
    JSYQ: "相日 吉期 五富 敬安 玉堂",
    XSYJ: "劫煞 五虚 八风 土符 重日"
  },
  "9-戊子": {
    JSYQ: "时德 民日 天巫 福德 普护",
    XSYJ: "灾煞 天火 大煞 归忌 复日 天牢"
  },
  "9-己丑": {
    JSYQ: "母仓 福生",
    XSYJ: "天罡 死神 月煞 月虚 元武"
  },
  "9-庚寅": {
    JSYQ: "月恩 阳德 三合 临日 时阴 五合 司命 鸣吠对",
    XSYJ: "月厌 地火 死气 九坎 九焦 行狠"
  },
  "9-辛卯": {
    JSYQ: "天德合 月德合 天愿 六合 不将 圣心 五合 鸣吠对",
    XSYJ: "大时 大败 咸池 小耗 五虚 勾陈"
  },
  "9-壬辰": {
    JSYQ: "月空 母仓 四相 不将 益后 解神 青龙",
    XSYJ: "月破 大耗 四击 九空 往亡"
  },
  "9-癸巳": {
    JSYQ: "四相 阴德 不将 续世 明堂",
    XSYJ: "游祸 天贼 血忌 重日"
  },
  "9-甲午": {
    JSYQ: "三合 天喜 天医 天仓 要安 鸣吠",
    XSYJ: "天刑"
  },
  "9-乙未": {
    JSYQ: "母仓 玉宇",
    XSYJ: "河魁 月刑 五虚 朱雀"
  },
  "9-丙申": {
    JSYQ: "天德 月德 王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮",
    XSYJ: "厌对 招摇 五离"
  },
  "9-丁酉": {
    JSYQ: "官日 除神 宝光 鸣吠",
    XSYJ: "月害 天吏 致死 血支 五离"
  },
  "9-戊戌": {
    JSYQ: "母仓 守日 天马",
    XSYJ: "月建 小时 土府 复日 白虎 小会 孤阳"
  },
  "9-己亥": {
    JSYQ: "相日 吉期 五富 敬安 玉堂",
    XSYJ: "劫煞 五虚 土符 重日"
  },
  "9-庚子": {
    JSYQ: "月恩 时德 民日 天巫 福德 普护 鸣吠对",
    XSYJ: "灾煞 天火 四忌 九虎 大煞 归忌 天牢"
  },
  "9-辛丑": {
    JSYQ: "天德合 月德合 母仓 福德",
    XSYJ: "天罡 死神 月煞 月虚 地囊 元武"
  },
  "9-壬寅": {
    JSYQ: "月空 四相 阳德 三合 临日 时阴 五合 司命 鸣吠对",
    XSYJ: "月厌 地火 死气 九坎 九焦 了戾"
  },
  "9-癸卯": {
    JSYQ: "四相 六合 不将 圣心 五合 鸣吠对",
    XSYJ: "大时 大败 咸池 小耗 五虚 勾陈"
  },
  "9-甲辰": {
    JSYQ: "母仓 益后 解神 青龙",
    XSYJ: "月破 大耗 四击 九空 往亡"
  },
  "9-乙巳": {
    JSYQ: "阴德 续世 明堂",
    XSYJ: "游祸 天贼 血忌 重日"
  },
  "9-丙午": {
    JSYQ: "天德 月德 三合 天喜 天医 天仓 要安 鸣吠",
    XSYJ: "天刑"
  },
  "9-丁未": {
    JSYQ: "母仓 玉宇",
    XSYJ: "河魁 月刑 五虚 八风 八专 朱雀"
  },
  "9-戊申": {
    JSYQ: "天赦 王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮",
    XSYJ: "厌对 招摇 复日 五离"
  },
  "9-己酉": {
    JSYQ: "天恩 官日 除神 宝光 鸣吠",
    XSYJ: "月害 天吏 致死 血支 五离"
  },
  "9-庚戌": {
    JSYQ: "天恩 母仓 月德 守日 天马",
    XSYJ: "月建 小时 土府 白虎 阳错"
  },
  "9-辛亥": {
    JSYQ: "天德合 月德合 天恩 相日 吉期 五富 敬安 玉堂",
    XSYJ: "劫煞 四穷 九虎 五虚 土符 重日"
  },
  "9-壬子": {
    JSYQ: "月空 天恩 四相 时德 民日 天巫 福德 普护 鸣吠对",
    XSYJ: "灾煞 天火 大煞 归忌 天牢"
  },
  "9-癸丑": {
    JSYQ: "天恩 母仓 四相 福生",
    XSYJ: "天罡 死神 月煞 月虚 八专 触水龙 元武"
  },
  "9-甲寅": {
    JSYQ: "阳德 三合 临日 时阴 五合 司命 鸣吠对",
    XSYJ: "月厌 地火 死气 四废 九坎 九焦 八专 孤辰 阴错"
  },
  "9-乙卯": {
    JSYQ: "六合 圣心 五合 鸣吠对",
    XSYJ: "大时 大败 咸池 小耗 四废 五虚 勾陈"
  },
  "9-丙辰": {
    JSYQ: "天德 月德 母仓 益后 解神 青龙",
    XSYJ: "月破 大耗 四击 九空 往亡"
  },
  "9-丁巳": {
    JSYQ: "阴德 续世 明堂",
    XSYJ: "游祸 天贼 血忌 重日"
  },
  "9-戊午": {
    JSYQ: "三合 天喜 天医 天仓 不将 要安",
    XSYJ: "四耗 复日 天刑"
  },
  "9-己未": {
    JSYQ: "母仓 玉宇",
    XSYJ: "河魁 月刑 五虚 八专 朱雀"
  },
  "9-庚申": {
    JSYQ: "月恩 王日 驿马 天后 时阳 生气 六仪 金堂 除神 金匮 鸣吠",
    XSYJ: "厌对 招摇 五离 八专"
  },
  "9-辛酉": {
    JSYQ: "天德合 月德合 官日 除神 宝光 鸣吠",
    XSYJ: "月害 天吏 致死 血支 五离"
  },
  "9-壬戌": {
    JSYQ: "月空 母仓 四相 守日 天马",
    XSYJ: "月建 小时 土府 白虎"
  },
  "9-癸亥": {
    JSYQ: "四相 相日 吉期 五富 敬安 玉堂",
    XSYJ: "劫煞 五虚 土符 重日"
  },
  "10-甲子": {
    JSYQ: "月德 天恩 天赦 四相 官日 天马 吉期 要安",
    XSYJ: "大时 大败 咸池 白虎"
  },
  "10-乙丑": {
    JSYQ: "天德 天恩 月恩 四相 守日 天巫 福德 玉宇 玉堂",
    XSYJ: "月厌 地火 九空 大煞 归忌 孤辰"
  },
  "10-丙寅": {
    JSYQ: "天恩 时德 相日 六合 五富 金堂 五合 鸣吠对",
    XSYJ: "河魁 死神 游祸 五虚 天牢"
  },
  "10-丁卯": {
    JSYQ: "天恩 阴德 民日 三合 时阴 五合 鸣吠对",
    XSYJ: "死气 元武"
  },
  "10-戊辰": {
    JSYQ: "天恩 阳德 解神 司命",
    XSYJ: "小耗 天贼 土符"
  },
  "10-己巳": {
    JSYQ: "月德合 驿马 天后 天仓 不将 敬安",
    XSYJ: "月破 大耗 重日 勾陈"
  },
  "10-庚午": {
    JSYQ: "天德合 月空 不将 普护 青龙 鸣吠",
    XSYJ: "天吏 致死 五虚"
  },
  "10-辛未": {
    JSYQ: "三合 临日 天喜 天医 六仪 福生 明堂",
    XSYJ: "厌对 招摇 四击 往亡"
  },
  "10-壬申": {
    JSYQ: "母仓 除神 鸣吠",
    XSYJ: "天罡 劫煞 月害 复日 五离 天刑"
  },
  "10-癸酉": {
    JSYQ: "母仓 时阳 生气 圣心 除神 鸣吠",
    XSYJ: "灾煞 天火 五离 朱雀"
  },
  "10-甲戌": {
    JSYQ: "月德 四相 益后 金匮",
    XSYJ: "月煞 月虚 血支 五虚 八风"
  },
  "10-乙亥": {
    JSYQ: "天德 月德 四相 王日 续世 宝光",
    XSYJ: "月建 小时 土府 月刑 九坎 九焦 血支 重日"
  },
  "10-丙子": {
    JSYQ: "官日 天马 吉期 要安 鸣吠对",
    XSYJ: "大时 大败 咸池 触水龙 白虎"
  },
  "10-丁丑": {
    JSYQ: "守日 天巫 福德 玉宇 玉堂",
    XSYJ: "月厌 地火 九空 大煞 归忌 孤辰"
  },
  "10-戊寅": {
    JSYQ: "时德 相日 六合 五富 金堂 五合",
    XSYJ: "河魁 死神 游祸 五虚 地囊 天牢"
  },
  "10-己卯": {
    JSYQ: "月德合 天德 阴德 民日 三合 时阴 不将 五合",
    XSYJ: "死气 元武"
  },
  "10-庚辰": {
    JSYQ: "天德合 月空 天恩 阳德 不将 解神 司命",
    XSYJ: "小耗 天贼 土符"
  },
  "10-辛巳": {
    JSYQ: "天恩 驿马 天后 天仓 不将 敬安",
    XSYJ: "月破 大耗 重日 勾陈"
  },
  "10-壬午": {
    JSYQ: "天恩 不将 普护 青龙 鸣吠",
    XSYJ: "天吏 致死 五虚 复日"
  },
  "10-癸未": {
    JSYQ: "天恩 三合 临日 天喜 天医 六仪 福生 明堂",
    XSYJ: "厌对 招摇 四击 往亡 触水龙"
  },
  "10-甲申": {
    JSYQ: "月德 母仓 四相 除神 鸣吠",
    XSYJ: "天罡 劫煞 月害 五离 天刑"
  },
  "10-乙酉": {
    JSYQ: "天德 母仓 月恩 四相 时阳 生气 圣心 除神 鸣吠",
    XSYJ: "灾煞 天火 五离 朱雀"
  },
  "10-丙戌": {
    JSYQ: "益后 金匮",
    XSYJ: "月煞 月虚 血支 五虚"
  },
  "10-丁亥": {
    JSYQ: "王日 续世 宝光",
    XSYJ: "月建 小时 土府 月刑 九坎 九焦 血忌 重日"
  },
  "10-戊子": {
    JSYQ: "官日 天马 吉期 要安",
    XSYJ: "大时 大败 咸池 白虎 岁薄"
  },
  "10-己丑": {
    JSYQ: "月德合 月空 时德 相日 六合 五富 不将 金堂 五合 鸣吠对",
    XSYJ: "河魁 死神 游祸 五虚 天牢"
  },
  "10-庚寅": {
    JSYQ: "天德合 月空 时德 相日 六合 五富 不将 金堂 五合 鸣吠对",
    XSYJ: "河魁 死神 游祸 五虚 天牢"
  },
  "10-辛卯": {
    JSYQ: "阴德 民日 三合 时阴 不将 五合 鸣吠对",
    XSYJ: "死气 元武"
  },
  "10-壬辰": {
    JSYQ: "阳德 不将 解神 司命",
    XSYJ: "小耗 天贼 五墓 土符 复日"
  },
  "10-癸巳": {
    JSYQ: "驿马 天后 天仓 不将 敬安",
    XSYJ: "月破 大耗 重日 勾陈"
  },
  "10-甲午": {
    JSYQ: "月德 四相 普护 青龙 鸣吠",
    XSYJ: "天吏 致死 五虚"
  },
  "10-乙未": {
    JSYQ: "天德 月恩 四相 三合 临日 天喜 天医 六仪 福生 明堂",
    XSYJ: "厌对 招摇 四击 往亡"
  },
  "10-丙申": {
    JSYQ: "母仓 除神 鸣吠",
    XSYJ: "天罡 劫煞 月害 五离 天刑"
  },
  "10-丁酉": {
    JSYQ: "母仓 时阳 生气 圣心 除神 鸣吠",
    XSYJ: "灾煞 天火 五离 朱雀"
  },
  "10-戊戌": {
    JSYQ: "益后 金匮",
    XSYJ: "月煞 月虚 血支 五虚 绝阳"
  },
  "10-己亥": {
    JSYQ: "月德合 王日 续世 宝光",
    XSYJ: "月建 小时 土府 月刑 九坎 九焦 血忌 重日 小会 纯阴"
  },
  "10-庚子": {
    JSYQ: "天德合 月空 官日 天马 吉期 要安 鸣吠对",
    XSYJ: "大时 大败 咸池 白虎"
  },
  "10-辛丑": {
    JSYQ: "守日 天巫 福德 玉宇 玉堂",
    XSYJ: "月厌 地火 九空 大煞 归忌 行狠"
  },
  "10-壬寅": {
    JSYQ: "天愿 时德 相日 六合 五富 不将 金堂 五合 鸣吠对",
    XSYJ: "河魁 死神 游祸 五虚 复日 天牢"
  },
  "10-癸卯": {
    JSYQ: "阴德 民日 三合 时阴 不将 五合 鸣吠对",
    XSYJ: "死气 元武"
  },
  "10-甲辰": {
    JSYQ: "月德 四相 阳德 解神 司命",
    XSYJ: "小耗 天贼 土符"
  },
  "10-乙巳": {
    JSYQ: "天德 月恩 四相 驿马 天后 天仓 敬安",
    XSYJ: "月破 大耗 重日 勾陈"
  },
  "10-丙午": {
    JSYQ: "普护 青龙 鸣吠",
    XSYJ: "天吏 致死 四废 五虚"
  },
  "10-丁未": {
    JSYQ: "三合 临日 天喜 天医 六仪 福生 明堂",
    XSYJ: "厌对 招摇 四击 往亡 八专"
  },
  "10-戊申": {
    JSYQ: "母仓 除神",
    XSYJ: "天罡 劫煞 月害 地囊 五离 天刑"
  },
  "10-己酉": {
    JSYQ: "月德 天恩 母仓 时阳 生气 圣心 除神 鸣吠",
    XSYJ: "灾煞 天火 五离 朱雀"
  },
  "10-庚戌": {
    JSYQ: "天德合 月空 天恩 益后 金匮",
    XSYJ: "月煞 月虚 血支 五虚"
  },
  "10-辛亥": {
    JSYQ: "天恩 王日 续世 宝光",
    XSYJ: "月建 小时 土府 月刑 九坎 九焦 血忌 重日"
  },
  "10-壬子": {
    JSYQ: "天恩 官日 天马 吉期 要安 鸣吠对",
    XSYJ: "大时 大败 咸池 四忌 六蛇 复日 白虎 岁薄"
  },
  "10-癸丑": {
    JSYQ: "天恩 守日 天巫 福德 玉宇 玉堂",
    XSYJ: "月厌 地火 九空 大煞 归忌 八专 触水龙 了戾 阴错"
  },
  "10-甲寅": {
    JSYQ: "月德 四相 时德 相日 六合 五富 金堂 五合 鸣吠对",
    XSYJ: "河魁 死神 游祸 五虚 八风 八专 天牢"
  },
  "10-乙卯": {
    JSYQ: "天德 月恩 四相 阳德 民日 三合 时阴 五合 鸣吠对",
    XSYJ: "死气 元武"
  },
  "10-丙辰": {
    JSYQ: "阳德 解神 司命",
    XSYJ: "小耗 天贼 土符"
  },
  "10-丁巳": {
    JSYQ: "驿马 天后 天仓 敬安",
    XSYJ: "月破 大耗 四废 重日 勾陈 阴阳交破"
  },
  "10-戊午": {
    JSYQ: "普护 青龙",
    XSYJ: "天吏 致死 五虚"
  },
  "10-己未": {
    JSYQ: "月德合 三合 临日 天喜 天医 六仪 福生 明堂",
    XSYJ: "厌对 招摇 四击 往亡 八专"
  },
  "10-庚申": {
    JSYQ: "天德合 月空 母仓 阴神 鸣吠",
    XSYJ: "天罡 劫煞 月害 五离 八专 天刑"
  },
  "10-辛酉": {
    JSYQ: "母仓 时阳 生气 圣心 除神 鸣吠",
    XSYJ: "灾煞 天火 四耗 五离 朱雀"
  },
  "10-壬戌": {
    JSYQ: "益后 金匮",
    XSYJ: "月煞 月虚 血支 五虚 复日"
  },
  "10-癸亥": {
    JSYQ: "王日 续世 宝光",
    XSYJ: "月建 小时 土府 月刑 四穷 六蛇 九坎 九焦 血忌 重日 阳错"
  },
  "11-甲子": {
    JSYQ: "天恩 天赦 月恩 四相 官日 敬安 金匮",
    XSYJ: "月建 小时 土府 月厌 地火"
  },
  "11-乙丑": {
    JSYQ: "天恩 四相 阴德 守日 吉期",
    XSYJ: "六合 普护 宝光"
  },
  "11-丙寅": {
    JSYQ: "月空 天恩 时德 相日 驿马 天后 天马 天巫 福德 福生 五合 鸣吠对",
    XSYJ: "五虚 归忌 白虎"
  },
  "11-丁卯": {
    JSYQ: "月德合 天恩 民日 不将 五合 玉堂 鸣吠对",
    XSYJ: "天罡 死神 致死 天贼"
  },
  "11-戊辰": {
    JSYQ: "天恩 三合 临日 时阴 天仓 圣心",
    XSYJ: "死气 天牢"
  },
  "11-己巳": {
    JSYQ: "五富 不将 益后",
    XSYJ: "劫煞 小耗 重日 元武"
  },
  "11-庚午": {
    JSYQ: "五富 六仪 续世 解神 司命 鸣吠",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 五虚 血忌"
  },
  "11-辛未": {
    JSYQ: "要安",
    XSYJ: "月煞 月虚 月害 四击 勾陈"
  },
  "11-壬申": {
    JSYQ: "月德 母仓 三合 天喜 天医 玉宇 除神 青龙 鸣吠",
    XSYJ: "九坎 九焦 土符 大煞 五离"
  },
  "11-癸酉": {
    JSYQ: "母仓 金堂 除神 明堂 鸣吠",
    XSYJ: "河魁 大时 大败 咸池 复日 五离"
  },
  "11-甲戌": {
    JSYQ: "月恩 四相 时阳 生气",
    XSYJ: "五虚 八风 九空 往亡 天刑"
  },
  "11-乙亥": {
    JSYQ: "四相 王日",
    XSYJ: "游祸 血支 重日 朱雀"
  },
  "11-丙子": {
    JSYQ: "月空 官日 敬安 金匮 鸣吠对",
    XSYJ: "月建 小时 土府 月厌 地火 触水龙"
  },
  "11-丁丑": {
    JSYQ: "月德合 阴德 守日 吉期",
    XSYJ: "六合 不将 普护 宝光"
  },
  "11-戊寅": {
    JSYQ: "时德 相日 驿马 天后 天马 天巫 福德 福生 五合",
    XSYJ: "五虚 归忌 白虎"
  },
  "11-己卯": {
    JSYQ: "天恩 民日 不将 五合 玉堂",
    XSYJ: "天罡 死神 月刑 天吏 致死 天贼"
  },
  "11-庚辰": {
    JSYQ: "天恩 三合 临日 时阴 天仓 不将 圣心",
    XSYJ: "死气 天牢"
  },
  "11-辛巳": {
    JSYQ: "天恩 五富 不将 益后",
    XSYJ: "劫煞 小耗 重日 元武"
  },
  "11-壬午": {
    JSYQ: "月德 天恩 阳德 六仪 续世 解神 司命 鸣吠",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 五虚 血忌"
  },
  "11-癸未": {
    JSYQ: "天恩 要安",
    XSYJ: "月煞 月虚 月害 四击 复日 触水龙 勾陈"
  },
  "11-甲申": {
    JSYQ: "母仓 月恩 四相 三合 天喜 天医 玉宇 除神 青龙 鸣吠",
    XSYJ: "九坎 九焦 土符 大煞 五离"
  },
  "11-乙酉": {
    JSYQ: "母仓 四相 金堂 除神 明堂 鸣吠",
    XSYJ: "河魁 大时 大败 咸池 五离"
  },
  "11-丙戌": {
    JSYQ: "月空 时阳 生气",
    XSYJ: "五虚 九空 往亡 天刑"
  },
  "11-丁亥": {
    JSYQ: "月德合 王日",
    XSYJ: "游祸 血支 重日 朱雀"
  },
  "11-戊子": {
    JSYQ: "官日 敬安 金匮",
    XSYJ: "月建 小耗 土府 月厌 地火 小会"
  },
  "11-己丑": {
    JSYQ: "阴德 守日 吉期",
    XSYJ: "六合 不将 普护 宝光"
  },
  "11-庚寅": {
    JSYQ: "时德 相日 驿马 天后 天马 天巫 福德 不将 福生 五合 鸣吠对",
    XSYJ: "五虚 归忌 白虎"
  },
  "11-辛卯": {
    JSYQ: "民日 不将 五合 玉堂 鸣吠对",
    XSYJ: "天罡 死神 月刑 天吏 致死 天贼 地囊"
  },
  "11-壬辰": {
    JSYQ: "月德 三合 临日 时阴 天仓 不将 圣心",
    XSYJ: "死气 五墓 天牢"
  },
  "11-癸巳": {
    JSYQ: "五富 益后",
    XSYJ: "劫煞 小耗 复日 重日 元武"
  },
  "11-甲午": {
    JSYQ: "月恩 四相 阳德 六仪 续世 解除 司命 鸣吠",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 五虚 血忌"
  },
  "11-乙未": {
    JSYQ: "四相 要安",
    XSYJ: "月煞 月虚 月害 四击 勾陈"
  },
  "11-丙申": {
    JSYQ: "月空 母仓 三合 天喜 天医 玉宇 除神 青龙 鸣吠",
    XSYJ: "九坎 九焦 土符 大煞 五离"
  },
  "11-丁酉": {
    JSYQ: "月德合 母仓 金堂 除神 明堂 鸣吠",
    XSYJ: "河魁 大时 大败 咸池 五离"
  },
  "11-戊戌": {
    JSYQ: "时阳 生气",
    XSYJ: "五虚 九空 往亡 天刑"
  },
  "11-己亥": {
    JSYQ: "王日",
    XSYJ: "游祸 血支 重日 朱雀"
  },
  "11-庚子": {
    JSYQ: "官日 敬安 金匮 鸣吠对",
    XSYJ: "月建 小时 土符 月厌 地火"
  },
  "11-辛丑": {
    JSYQ: "阴德 守日 吉期 六合 不将 普护 宝光",
    XSYJ: ""
  },
  "11-壬寅": {
    JSYQ: "月德 时德 相日 驿马 天后 天马 天巫 福德 不将 福生 五合 鸣吠对",
    XSYJ: "五虚 归忌 白虎"
  },
  "11-癸卯": {
    JSYQ: "民日 五合 玉堂 鸣吠对",
    XSYJ: "天罡 死神 月刑 天吏 致死 天贼 复日"
  },
  "11-甲辰": {
    JSYQ: "月恩 四相 三合 临日 时阴 天仓 圣心",
    XSYJ: "死气 天牢"
  },
  "11-乙巳": {
    JSYQ: "四相 五富 益后",
    XSYJ: "劫煞 小耗 重日 元武"
  },
  "11-丙午": {
    JSYQ: "月空 阳德 六仪 续世 解神 司命 鸣吠",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 四废 五虚 血忌 阴阳击冲"
  },
  "11-丁未": {
    JSYQ: "月德合 要安",
    XSYJ: "月煞 月虚 月害 四击 八专 勾陈"
  },
  "11-戊申": {
    JSYQ: "母仓 三合 天喜 天医 玉宇 除神 青龙",
    XSYJ: "九坎 九焦 土符 大煞 五离"
  },
  "11-己酉": {
    JSYQ: "天恩 母仓 金堂 除神 明堂 鸣吠",
    XSYJ: "河魁 大时 大败 咸池 五离"
  },
  "11-庚戌": {
    JSYQ: "天恩 时阳 生气",
    XSYJ: "五虚 九空 往亡 天刑"
  },
  "11-辛亥": {
    JSYQ: "天恩 王日",
    XSYJ: "游祸 血支 重日 朱雀"
  },
  "11-壬子": {
    JSYQ: "月德 天恩 官日 敬安 金匮 鸣吠对",
    XSYJ: "月建 小时 土府 月厌 地火 四忌 六蛇 大会 阴阳俱错"
  },
  "11-癸丑": {
    JSYQ: "天恩 天愿 阴德 守日 吉期 六合 普护 宝光",
    XSYJ: "复日 八专 触水龙"
  },
  "11-甲寅": {
    JSYQ: "月恩 四相 时德 相日 驿马 天后 天马 天巫 福德 福生 五合 鸣吠对",
    XSYJ: "五虚 八风 归忌 八专 白虎"
  },
  "11-乙卯": {
    JSYQ: "四相 民日 五合 玉堂 鸣吠对",
    XSYJ: "天罡 死神 月刑 天吏 致死 天贼"
  },
  "11-丙辰": {
    JSYQ: "月空 三合 临日 时阴 天仓 圣心",
    XSYJ: "死气 天牢"
  },
  "11-丁巳": {
    JSYQ: "月德合 五富 不将 益后",
    XSYJ: "劫煞 小耗 四废 重日 元武"
  },
  "11-戊午": {
    JSYQ: "阳德 六仪 续世 解神 司命",
    XSYJ: "月破 大耗 灾煞 天火 厌对 招摇 五虚 血忌"
  },
  "11-己未": {
    JSYQ: "要安",
    XSYJ: "月煞 月虚 月害 四击 八专 勾陈"
  },
  "11-庚申": {
    JSYQ: "母仓 三合 天喜 天医 玉宇 除神 青龙 鸣吠",
    XSYJ: "九坎 九焦 土符 大煞 五离 八专"
  },
  "11-辛酉": {
    JSYQ: "母仓 金堂 除神 明堂 鸣吠",
    XSYJ: "河魁 大时 大败 咸池 四耗 地囊 五离"
  },
  "11-壬戌": {
    JSYQ: "月德 时阳 生气",
    XSYJ: "五虚 九空 往亡 天刑"
  },
  "11-癸亥": {
    JSYQ: "王日",
    XSYJ: "游祸 血支 四穷 六蛇 复日 重日 朱雀"
  },
  "12-甲子": {
    JSYQ: "月空 天恩 天赦 天愿 四相 官日 六合 续世",
    XSYJ: "天吏 致死 血支 土符 归忌 血忌 天刑"
  },
  "12-乙丑": {
    JSYQ: "天德合 月德合 天恩 四相 守日 要安",
    XSYJ: "月建 小时 土府 往亡 朱雀"
  },
  "12-丙寅": {
    JSYQ: "天恩 月德 相日 吉期 不将 玉宇 五合 金匮 鸣吠对",
    XSYJ: "劫煞 天贼 五虚"
  },
  "12-丁卯": {
    JSYQ: "天恩 民日 天巫 福德 天仓 不将 金匮 五合 宝光 鸣吠对",
    XSYJ: "灾煞 天火"
  },
  "12-戊辰": {
    JSYQ: "天恩 天马",
    XSYJ: "河魁 死神 月煞 月虚 五墓 白虎"
  },
  "12-己巳": {
    JSYQ: "三合 时阴 六仪 玉堂",
    XSYJ: "厌对 招摇 死气 九坎 九焦 复日 重日"
  },
  "12-庚午": {
    JSYQ: "天德 月德 敬安 解神 鸣吠",
    XSYJ: "月害 大时 大败 咸池 小耗 五虚 天牢"
  },
  "12-辛未": {
    JSYQ: "月恩 普护",
    XSYJ: "月破 大耗 四击 九空 元武"
  },
  "12-壬申": {
    JSYQ: "母仓 阳德 五富 福生 除神 司命 鸣吠",
    XSYJ: "游祸 五离"
  },
  "12-癸酉": {
    JSYQ: "母仓 三合 临日 天喜 天医 除神 鸣吠",
    XSYJ: "地囊 大煞 五离 勾陈"
  },
  "12-甲戌": {
    JSYQ: "月空 四相 圣心 青龙",
    XSYJ: "天罡 月刑 五虚 八风"
  },
  "12-乙亥": {
    JSYQ: "天德合 月德合 四相 阴德 王日 驿马 天后 时阳 生气 益后 明堂",
    XSYJ: "月厌 地火 重日"
  },
  "12-丙子": {
    JSYQ: "官日 六合 不将 续世 鸣吠对",
    XSYJ: "天吏 致死 血支 土符 归忌 血忌 触水龙 天刑"
  },
  "12-丁丑": {
    JSYQ: "守日 不将 要安",
    XSYJ: "月建 小时 土府 往亡 朱雀"
  },
  "12-戊寅": {
    JSYQ: "时德 相日 吉期 玉堂 五合 金匮",
    XSYJ: "劫煞 天贼 五虚"
  },
  "12-己卯": {
    JSYQ: "天恩 民日 天巫 福德 天仓 不将 金堂 五合 宝光",
    XSYJ: "灾煞 天火 复日"
  },
  "12-庚辰": {
    JSYQ: "天德 月德 天恩 天马 不将",
    XSYJ: "河魁 死神 月煞 月虚 白虎"
  },
  "12-辛巳": {
    JSYQ: "天恩 月恩 三合 时阴 六仪 玉堂",
    XSYJ: "厌对 招摇 死气 九坎 九焦 重日"
  },
  "12-壬午": {
    JSYQ: "天恩 敬安 解神 鸣吠",
    XSYJ: "月害 大时 大败 咸池 小耗 五虚 天牢"
  },
  "12-癸未": {
    JSYQ: "天恩 普护",
    XSYJ: "月破 大耗 四击 九空 触水龙 元武"
  },
  "12-甲申": {
    JSYQ: "月空 母仓 四相 阳德 五富 生气 除神 司命 鸣吠",
    XSYJ: "游祸 五离"
  },
  "12-乙酉": {
    JSYQ: "天德合 月德合 母仓 四相 三合 临日 天喜 天医 除神 鸣吠",
    XSYJ: "大煞 五离 勾陈"
  },
  "12-丙戌": {
    JSYQ: "圣心 青龙",
    XSYJ: "天罡 月刑 五虚"
  },
  "12-丁亥": {
    JSYQ: "阴德 王日 驿马 天后 时阴 生气 益后 明堂",
    XSYJ: "月厌 地火 重日"
  },
  "12-戊子": {
    JSYQ: "官日 六合 续世",
    XSYJ: "天吏 致死 血支 土符 归忌 血忌 天刑 逐阵"
  },
  "12-己丑": {
    JSYQ: "守日 不将 要安",
    XSYJ: "月建 小时 土府 往亡 复日 朱雀"
  },
  "12-庚寅": {
    JSYQ: "天德 月德 时德 相日 吉期 不将 玉宇 五合 金匮",
    XSYJ: "劫煞 天贼 五虚"
  },
  "12-辛卯": {
    JSYQ: "月恩 民日 天巫 福德 天仓 不将 金堂 五合 宝光 鸣吠对",
    XSYJ: "灾煞 天火"
  },
  "12-壬辰": {
    JSYQ: "天马",
    XSYJ: "河魁 死神 月煞 月虚 白虎"
  },
  "12-癸巳": {
    JSYQ: "三合 阴德 六仪 玉堂",
    XSYJ: "厌对 招摇 死气 九坎 九焦 重日"
  },
  "12-甲午": {
    JSYQ: "月空 四相 敬安 解神 鸣吠",
    XSYJ: "月害 大时 大败 咸池 小耗 五虚 天牢"
  },
  "12-乙未": {
    JSYQ: "天德合 月德合 四相 普护",
    XSYJ: "月破 大耗 四击 九空 元武"
  },
  "12-丙申": {
    JSYQ: "母仓 阳德 五富 福生 除神 司命 鸣吠",
    XSYJ: "游祸 五离"
  },
  "12-丁酉": {
    JSYQ: "母仓 三合 临日 天喜 天医 除神 鸣吠",
    XSYJ: "大煞 五离 勾陈"
  },
  "12-戊戌": {
    JSYQ: "圣心 青龙",
    XSYJ: "天罡 月刑 五虚"
  },
  "12-己亥": {
    JSYQ: "阴德 王日 驿马 天后 时阳 生气 益后 明堂",
    XSYJ: "月厌 地火 复日 重日"
  },
  "12-庚子": {
    JSYQ: "天德 月德 官日 六合 不将 续世 鸣吠对",
    XSYJ: "天吏 致死 血支 土符 归忌 血忌 天刑"
  },
  "12-辛丑": {
    JSYQ: "月恩 守日 不将 要安",
    XSYJ: "月建 小时 土府 往亡 朱雀"
  },
  "12-壬寅": {
    JSYQ: "时德 相日 吉期 玉宇 五合 金匮 鸣吠对",
    XSYJ: "劫煞 天贼 五虚"
  },
  "12-癸卯": {
    JSYQ: "民日 天巫 福德 天仓 金堂 五合 宝光 鸣吠对",
    XSYJ: "灾煞 天火"
  },
  "12-甲辰": {
    JSYQ: "月空 四相 天马",
    XSYJ: "河魁 致死 月煞 月虚 白虎"
  },
  "12-乙巳": {
    JSYQ: "天德合 月德合 四相 三合 时阴 六仪 玉堂",
    XSYJ: "厌对 招摇 死气 九坎 九焦 重日"
  },
  "12-丙午": {
    JSYQ: "敬安 解神 鸣吠",
    XSYJ: "月害 大时 大败 咸池 小耗 四废 五虚 天牢"
  },
  "12-丁未": {
    JSYQ: "普护",
    XSYJ: "月破 大耗 四击 九空 八专 元武 阳破阴冲"
  },
  "12-戊申": {
    JSYQ: "母仓 阳德 五富 福生 除神 司命",
    XSYJ: "游祸 五离"
  },
  "12-己酉": {
    JSYQ: "天恩 母仓 三合 临日 天喜 天医 除神 鸣吠",
    XSYJ: "大煞 复日 五离 勾陈"
  },
  "12-庚戌": {
    JSYQ: "天德 月德 天恩 圣心 青龙",
    XSYJ: "天罡 月刑 五虚"
  },
  "12-辛亥": {
    JSYQ: "天恩 月恩 阴德 王日 驿马 天后 时阳 生气 益后 明堂",
    XSYJ: "月厌 地火 重日"
  },
  "12-壬子": {
    JSYQ: "天恩 官日 六合 续世",
    XSYJ: "天吏 致死 血支 四忌 六蛇 土符 归忌 血忌 天刑 逐阵"
  },
  "12-癸丑": {
    JSYQ: "天恩 守日 要安",
    XSYJ: "月建 小时 土府 往亡 八专 触水龙 朱雀 阳错"
  },
  "12-甲寅": {
    JSYQ: "月空 四相 时德 相日 吉期 玉宇 五合 金匮 鸣吠对",
    XSYJ: "劫煞 天贼 五虚 八风 八专"
  },
  "12-乙卯": {
    JSYQ: "天德合 月德合 四相 民日 天巫 福德 天仓 金堂 五合 宝光 鸣吠对",
    XSYJ: "灾煞 天火 地囊"
  },
  "12-丙辰": {
    JSYQ: "天马 不将",
    XSYJ: "河魁 死神 月煞 月虚 白虎"
  },
  "12-丁巳": {
    JSYQ: "三合 时阴 六仪 玉堂",
    XSYJ: "厌对 招摇 死气 四废 九坎 九焦 重日"
  },
  "12-戊午": {
    JSYQ: "敬安 解神",
    XSYJ: "月害 大时 大败 咸池 小耗 五虚 天牢"
  },
  "12-己未": {
    JSYQ: "普护",
    XSYJ: "月破 大耗 四击 九空 复日 八专 元武"
  },
  "12-庚申": {
    JSYQ: "天德 月德 母仓 阳德 五富 福生 除神 司命 鸣吠",
    XSYJ: "游祸 五离 八专"
  },
  "12-辛酉": {
    JSYQ: "母仓 月恩 三合 临日 天喜 天医 除神 鸣吠",
    XSYJ: "四耗 大煞 五离 勾陈"
  },
  "12-壬戌": {
    JSYQ: "圣心 青龙",
    XSYJ: "天罡 月刑 五虚"
  },
  "12-癸亥": {
    JSYQ: "阴德 王日 驿马 天后 时阳 生气 益后 明堂",
    XSYJ: "月厌 地火 四穷 六蛇 重日 大会 阴错"
  }
};
exports.c = c;

/***/ }),

/***/ 66:
/*!*******************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data1/l.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.l = void 0;
var l = {
  "1-甲子": "占门碓外东南",
  "1-乙丑": "碓磨厕外东南",
  "1-丙寅": "厨灶炉外正南",
  "1-丁卯": "仓库门外正南",
  "1-戊辰": "房床栖外正南",
  "1-己巳": "占门床外正南",
  "1-庚午": "占碓磨外正南",
  "1-辛未": "厨灶厕外西南",
  "1-壬申": "仓库炉外西南",
  "1-癸酉": "房床门外西南",
  "1-甲戌": "门鸡栖外西南",
  "1-乙亥": "碓磨床外西南",
  "1-丙子": "厨灶碓外西南",
  "1-丁丑": "仓库厕外西南",
  "1-戊寅": "房床厕外正南",
  "1-己卯": "占门厕外正南",
  "1-庚辰": "碓磨栖外正西",
  "1-辛巳": "厨灶床外正西",
  "1-壬午": "仓库碓外西北",
  "1-癸未": "房床厕外西北",
  "1-甲申": "占门炉外西北",
  "1-乙酉": "碓磨门外西北",
  "1-丙戌": "厨灶栖外西北",
  "1-丁亥": "仓库床外西北",
  "1-戊子": "房床碓外正北",
  "1-己丑": "占门厕外正北",
  "1-庚寅": "碓磨炉外正北",
  "1-辛卯": "厨灶门外正北",
  "1-壬辰": "仓库栖外正北",
  "1-癸巳": "占房床房内北",
  "1-甲午": "占门碓房内北",
  "1-乙未": "碓磨厕房内北",
  "1-丙申": "厨灶炉房内北",
  "1-丁酉": "仓库门房内北",
  "1-戊戌": "房床栖房内南",
  "1-己亥": "占门床房内南",
  "1-庚子": "占碓磨房内南",
  "1-辛丑": "厨灶厕房内南",
  "1-壬寅": "仓库炉房内南",
  "1-癸卯": "房床门房内南",
  "1-甲辰": "门鸡栖房内东",
  "1-乙巳": "碓磨床房内东",
  "1-丙午": "厨灶碓房内东",
  "1-丁未": "仓库厕房内东",
  "1-戊申": "房床炉房内东",
  "1-己酉": "占大门外东北",
  "1-庚戌": "碓磨栖外东北",
  "1-辛亥": "厨灶床外东北",
  "1-壬子": "仓库碓外东北",
  "1-癸丑": "房床厕外东北",
  "1-甲寅": "占门炉外东北",
  "1-乙卯": "碓磨门外正东",
  "1-丙辰": "厨灶栖外正东",
  "1-丁巳": "仓库床外正东",
  "1-戊午": "房床碓外正东",
  "1-己未": "占门厕外正东",
  "1-庚申": "碓磨炉外东南",
  "1-辛酉": "厨灶门外东南",
  "1-壬戌": "仓库栖外东南",
  "1-癸亥": "占房床外东南",
  "2-甲子": "占门碓外东南",
  "2-乙丑": "碓磨厕外东南",
  "2-丙寅": "厨灶炉外正南",
  "2-丁卯": "仓库门外正南",
  "2-戊辰": "房床栖外正南",
  "2-己巳": "占门床外正南",
  "2-庚午": "占碓磨外正南",
  "2-辛未": "厨灶厕外西南",
  "2-壬申": "仓库炉外西南",
  "2-癸酉": "房床门外西南",
  "2-甲戌": "门鸡栖外西南",
  "2-乙亥": "碓磨床外西南",
  "2-丙子": "厨灶碓外西南",
  "2-丁丑": "仓库厕外西南",
  "2-戊寅": "房床厕外正南",
  "2-己卯": "占门厕外正南",
  "2-庚辰": "碓磨栖外正西",
  "2-辛巳": "厨灶床外正西",
  "2-壬午": "仓库碓外西北",
  "2-癸未": "房床厕外西北",
  "2-甲申": "占门炉外西北",
  "2-乙酉": "碓磨门外西北",
  "2-丙戌": "厨灶栖外西北",
  "2-丁亥": "仓库床外西北",
  "2-戊子": "房床碓外正北",
  "2-己丑": "占门厕外正北",
  "2-庚寅": "碓磨炉外正北",
  "2-辛卯": "厨灶门外正北",
  "2-壬辰": "仓库栖外正北",
  "2-癸巳": "占房床房内北",
  "2-甲午": "占门碓房内北",
  "2-乙未": "碓磨厕房内北",
  "2-丙申": "厨灶炉房内北",
  "2-丁酉": "仓库门房内北",
  "2-戊戌": "房床栖房内南",
  "2-己亥": "占门床房内南",
  "2-庚子": "占碓磨房内南",
  "2-辛丑": "厨灶厕房内南",
  "2-壬寅": "仓库炉房内南",
  "2-癸卯": "房床门房内南",
  "2-甲辰": "门鸡栖房内东",
  "2-乙巳": "碓磨床房内东",
  "2-丙午": "厨灶碓房内东",
  "2-丁未": "仓库厕房内东",
  "2-戊申": "房床炉房内东",
  "2-己酉": "占大门外东北",
  "2-庚戌": "碓磨栖外东北",
  "2-辛亥": "厨灶床外东北",
  "2-壬子": "仓库碓外东北",
  "2-癸丑": "房床厕外东北",
  "2-甲寅": "占门炉外东北",
  "2-乙卯": "碓磨门外正东",
  "2-丙辰": "厨灶床外正东",
  "2-丁巳": "仓库床外正东",
  "2-戊午": "房床碓外正东",
  "2-己未": "占门厕外正东",
  "2-庚申": "碓磨炉外东南",
  "2-辛酉": "厨灶门外东南",
  "2-壬戌": "仓库栖外东南",
  "2-癸亥": "占房床外东南",
  "3-甲子": "占门碓外东南",
  "3-乙丑": "碓磨厕外东南",
  "3-丙寅": "厨灶炉外正南",
  "3-丁卯": "仓库门外正南",
  "3-戊辰": "房床栖外正南",
  "3-己巳": "占门床外正南",
  "3-庚午": "占碓磨外正南",
  "3-辛未": "厨灶厕外西南",
  "3-壬申": "仓库炉外西南",
  "3-癸酉": "房床门外西南",
  "3-甲戌": "门鸡栖外西南",
  "3-乙亥": "碓磨床外西南",
  "3-丙子": "厨灶碓外西南",
  "3-丁丑": "仓库厕外西南",
  "3-戊寅": "房床厕外正南",
  "3-己卯": "占门厕外正南",
  "3-庚辰": "碓磨栖外正西",
  "3-辛巳": "厨灶床外正西",
  "3-壬午": "仓库碓外西北",
  "3-癸未": "房床厕外西北",
  "3-甲申": "占门炉外西北",
  "3-乙酉": "碓磨门外西北",
  "3-丙戌": "厨灶栖外西北",
  "3-丁亥": "仓库床外西北",
  "3-戊子": "房床碓外正北",
  "3-己丑": "占门厕外正北",
  "3-庚寅": "碓磨炉外正北",
  "3-辛卯": "厨灶门外正北",
  "3-壬辰": "仓库栖外正北",
  "3-癸巳": "占房床房内北",
  "3-甲午": "占门碓房内北",
  "3-乙未": "碓磨厕房内北",
  "3-丙申": "厨灶炉房内北",
  "3-丁酉": "仓库门房内北",
  "3-戊戌": "房床栖房内南",
  "3-己亥": "占门床房内南",
  "3-庚子": "占碓磨房内南",
  "3-辛丑": "厨灶厕房内南",
  "3-壬寅": "仓库炉房内南",
  "3-癸卯": "房床门房内南",
  "3-甲辰": "门鸡栖房内东",
  "3-乙巳": "碓磨床房内东",
  "3-丙午": "厨灶碓房内东",
  "3-丁未": "仓库厕房内东",
  "3-戊申": "房床炉房内东",
  "3-己酉": "占大门外东北",
  "3-庚戌": "碓磨栖外东北",
  "3-辛亥": "厨灶床外东北",
  "3-壬子": "仓库碓外东北",
  "3-癸丑": "房床厕外东北",
  "3-甲寅": "占门炉外东北",
  "3-乙卯": "碓磨门外正东",
  "3-丙辰": "厨灶栖外正东",
  "3-丁巳": "仓库床外正东",
  "3-戊午": "房床碓外正东",
  "3-己未": "占门厕外正东",
  "3-庚申": "碓磨炉外东南",
  "3-辛酉": "厨灶门外东南",
  "3-壬戌": "仓库栖外东南",
  "3-癸亥": "占房床外东南",
  "4-甲子": "占门碓外东南",
  "4-乙丑": "碓磨厕外东南",
  "4-丙寅": "厨灶炉外正南",
  "4-丁卯": "仓库门外正南",
  "4-戊辰": "房床栖外正南",
  "4-己巳": "占门床外正南",
  "4-庚午": "占碓磨外正南",
  "4-辛未": "厨灶厕外西南",
  "4-壬申": "仓库炉外西南",
  "4-癸酉": "房床门外西南",
  "4-甲戌": "门鸡栖外西南",
  "4-乙亥": "碓磨床外西南",
  "4-丙子": "厨灶碓外西南",
  "4-丁丑": "仓库厕外西南",
  "4-戊寅": "房床厕外正南",
  "4-己卯": "占门厕外正南",
  "4-庚辰": "碓磨栖外正西",
  "4-辛巳": "厨灶床外正西",
  "4-壬午": "仓库碓外西北",
  "4-癸未": "房床厕外西北",
  "4-甲申": "占门炉外西北",
  "4-乙酉": "碓磨门外西北",
  "4-丙戌": "厨灶栖外西北",
  "4-丁亥": "仓库床外西北",
  "4-戊子": "房床碓外正北",
  "4-己丑": "占门厕外正北",
  "4-庚寅": "碓磨炉外正北",
  "4-辛卯": "厨灶门外正北",
  "4-壬辰": "仓库栖外正北",
  "4-癸巳": "占房床房内北",
  "4-甲午": "占门碓房内北",
  "4-乙未": "碓磨厕房内北",
  "4-丙申": "厨灶炉房内北",
  "4-丁酉": "仓库门房内北",
  "4-戊戌": "房床栖房内南",
  "4-己亥": "占门床房内南",
  "4-庚子": "占碓磨房内南",
  "4-辛丑": "厨灶厕房内南",
  "4-壬寅": "仓库炉房内南",
  "4-癸卯": "房床门房内南",
  "4-甲辰": "门鸡栖房内东",
  "4-乙巳": "碓磨床房内东",
  "4-丙午": "厨灶碓房内东",
  "4-丁未": "仓库厕房内东",
  "4-戊申": "房床炉房内东",
  "4-己酉": "占大门外东北",
  "4-庚戌": "碓磨栖外东北",
  "4-辛亥": "厨灶床外东北",
  "4-壬子": "仓库碓外东北",
  "4-癸丑": "房床厕外东北",
  "4-甲寅": "占门炉外东北",
  "4-乙卯": "碓磨门外正东",
  "4-丙辰": "厨灶栖外正东",
  "4-丁巳": "仓库床外正东",
  "4-戊午": "房床碓外正东",
  "4-己未": "占门厕外正东",
  "4-庚申": "碓磨炉外东南",
  "4-辛酉": "厨灶门外东南",
  "4-壬戌": "仓库栖外东南",
  "4-癸亥": "占房床外东南",
  "5-甲子": "占门碓外东南",
  "5-乙丑": "碓磨厕外东南",
  "5-丙寅": "厨灶炉外正南",
  "5-丁卯": "仓库门外正南",
  "5-戊辰": "房床栖外正南",
  "5-己巳": "占门床外正南",
  "5-庚午": "占碓磨外正南",
  "5-辛未": "厨灶厕外西南",
  "5-壬申": "仓库炉外西南",
  "5-癸酉": "房床门外西南",
  "5-甲戌": "门鸡栖外西南",
  "5-乙亥": "碓磨床外西南",
  "5-丙子": "厨灶碓外西南",
  "5-丁丑": "仓库厕外西南",
  "5-戊寅": "房床厕外正南",
  "5-己卯": "占门厕外正南",
  "5-庚辰": "碓磨栖外正西",
  "5-辛巳": "厨灶床外正西",
  "5-壬午": "仓库碓外西北",
  "5-癸未": "房床厕外西北",
  "5-甲申": "占门炉外西北",
  "5-乙酉": "碓磨门外西北",
  "5-丙戌": "厨灶栖外西北",
  "5-丁亥": "仓库床外西北",
  "5-戊子": "房床碓外正北",
  "5-己丑": "占门厕外正北",
  "5-庚寅": "碓磨炉外正北",
  "5-辛卯": "厨灶门外正北",
  "5-壬辰": "仓库栖外正北",
  "5-癸巳": "占房床房内北",
  "5-甲午": "占门碓房内北",
  "5-乙未": "碓磨厕房内北",
  "5-丙申": "厨灶炉房内北",
  "5-丁酉": "仓库门房内北",
  "5-戊戌": "房床栖房内南",
  "5-己亥": "占门床房内南",
  "5-庚子": "占碓磨房内南",
  "5-辛丑": "厨灶厕房内南",
  "5-壬寅": "仓库炉房内南",
  "5-癸卯": "房床门房内南",
  "5-甲辰": "门鸡栖房内东",
  "5-乙巳": "碓磨床房内东",
  "5-丙午": "厨灶碓房内东",
  "5-丁未": "仓库厕房内东",
  "5-戊申": "房床炉房内东",
  "5-己酉": "占大门外东北",
  "5-庚戌": "碓磨栖外东北",
  "5-辛亥": "厨灶床外东北",
  "5-壬子": "仓库碓外东北",
  "5-癸丑": "房床厕外东北",
  "5-甲寅": "占门炉外东北",
  "5-乙卯": "碓磨门外正东",
  "5-丙辰": "厨灶栖外正东",
  "5-丁巳": "仓库床外正东",
  "5-戊午": "房床碓外正东",
  "5-己未": "占门厕外正东",
  "5-庚申": "碓磨炉外东南",
  "5-辛酉": "厨灶门外东南",
  "5-壬戌": "仓库栖外东南",
  "5-癸亥": "占房床外东南",
  "6-甲子": "占门碓外东南",
  "6-乙丑": "碓磨厕外东南",
  "6-丙寅": "厨灶炉外正南",
  "6-丁卯": "仓库门外正南",
  "6-戊辰": "房床栖外正南",
  "6-己巳": "占门床外正南",
  "6-庚午": "占碓磨外正南",
  "6-辛未": "厨灶厕外西南",
  "6-壬申": "仓库炉外西南",
  "6-癸酉": "房床门外西南",
  "6-甲戌": "门鸡栖外西南",
  "6-乙亥": "碓磨床外西南",
  "6-丙子": "厨灶碓外西南",
  "6-丁丑": "仓库厕外西南",
  "6-戊寅": "房床厕外正南",
  "6-己卯": "占门厕外正南",
  "6-庚辰": "碓磨栖外正西",
  "6-辛巳": "厨灶床外正西",
  "6-壬午": "仓库碓外西北",
  "6-癸未": "房床厕外西北",
  "6-甲申": "占门炉外西北",
  "6-乙酉": "碓磨门外西北",
  "6-丙戌": "厨灶栖外西北",
  "6-丁亥": "仓库床外西北",
  "6-戊子": "房床碓外正北",
  "6-己丑": "占门厕外正北",
  "6-庚寅": "碓磨炉外正北 ",
  "6-辛卯": "厨灶门外正北",
  "6-壬辰": "仓库栖外正北",
  "6-癸巳": "占房床房内北",
  "6-甲午": "占门碓房内北",
  "6-乙未": "碓磨厕房内北",
  "6-丙申": "厨灶炉房内北",
  "6-丁酉": "仓库门房内北",
  "6-戊戌": "房床栖房内南",
  "6-己亥": "占门床房内南",
  "6-庚子": "占碓磨房内南",
  "6-辛丑": "厨灶厕房内南",
  "6-壬寅": "仓库炉房内南",
  "6-癸卯": "房床门房内南",
  "6-甲辰": "门鸡栖房内东",
  "6-乙巳": "碓磨床房内东",
  "6-丙午": "厨灶碓房内东",
  "6-丁未": "仓库厕房内东",
  "6-戊申": "房床炉房内东",
  "6-己酉": "占大门外东北",
  "6-庚戌": "碓磨栖外东北",
  "6-辛亥": "厨灶床外东北",
  "6-壬子": "仓库碓外东北",
  "6-癸丑": "房床厕外东北",
  "6-甲寅": "占门炉外东北",
  "6-乙卯": "碓磨门外正东",
  "6-丙辰": "厨灶栖外正东",
  "6-丁巳": "仓库床外正东",
  "6-戊午": "房床碓外正东",
  "6-己未": "占门厕外正东",
  "6-庚申": "碓磨炉外东南",
  "6-辛酉": "厨灶门外东南",
  "6-壬戌": "仓库栖外东南",
  "6-癸亥": "占房床外东南",
  "7-甲子": "占门碓外东南",
  "7-乙丑": "碓磨厕外东南",
  "7-丙寅": "厨灶炉外正南",
  "7-丁卯": "仓库门外正南",
  "7-戊辰": "房床栖外正南",
  "7-己巳": "占门床外正南",
  "7-庚午": "占碓磨外正南",
  "7-辛未": "厨灶厕外西南",
  "7-壬申": "仓库炉外西南",
  "7-癸酉": "房床门外西南",
  "7-甲戌": "门鸡栖外西南",
  "7-乙亥": "碓磨床外西南",
  "7-丙子": "厨灶碓外西南",
  "7-丁丑": "仓库厕外西南",
  "7-戊寅": "房床厕外正南",
  "7-己卯": "占门厕外正南",
  "7-庚辰": "碓磨栖外正西",
  "7-辛巳": "厨灶床外正西",
  "7-壬午": "仓库碓外西北",
  "7-癸未": "房床厕外西北",
  "7-甲申": "占门炉外西北",
  "7-乙酉": "碓磨门外西北",
  "7-丁亥": "仓库床外西北",
  "7-戊子": "房床碓外正北",
  "7-己丑": "占门厕外正北",
  "7-庚寅": "碓磨炉外正北",
  "7-辛卯": "厨灶门外正北",
  "7-壬辰": "仓库床外正北",
  "7-癸巳": "占房床房内北",
  "7-甲午": "占门碓房内北",
  "7-乙未": "碓磨厕房内北",
  "7-丙申": "厨灶炉房内北",
  "7-丁酉": "仓库门房内北",
  "7-戊戌": "房床栖房内南",
  "7-己亥": "占门床房内南",
  "7-庚子": "占碓磨房内南",
  "7-辛丑": "厨灶厕房内南",
  "7-壬寅": "仓库炉房内南",
  "7-癸卯": "房床门房内南",
  "7-甲辰": "门鸡栖房内东",
  "7-乙巳": "碓磨床房内东",
  "7-丙午": "厨灶碓房内东",
  "7-丁未": "仓库厕房内东",
  "7-戊申": "房床炉房内东",
  "7-己酉": "占大门外东北",
  "7-庚戌": "碓磨栖外东北",
  "7-辛亥": "厨灶床外东北",
  "7-壬子": "仓库碓外东北",
  "7-癸丑": "房床厕外东北",
  "7-甲寅": "占门炉外东北",
  "7-乙卯": "碓磨门外正东",
  "7-丙辰": "厨灶栖外正东",
  "7-丁巳": "仓库床外正东",
  "7-戊午": "房床碓外正东",
  "7-己未": "占门厕外正东",
  "7-庚申": "碓磨炉外东南",
  "7-辛酉": "厨灶门外东南",
  "7-壬戌": "仓库栖外东南",
  "7-癸亥": "占房床外东南",
  "8-甲子": "占门碓外东南",
  "8-乙丑": "碓磨厕外东南",
  "8-丙寅": "厨灶炉外正南",
  "8-丁卯": "仓库门外正南",
  "8-戊辰": "房床栖外正南",
  "8-己巳": "占门床外正南",
  "8-庚午": "占碓磨外正南",
  "8-辛未": "厨灶厕外西南",
  "8-壬申": "仓库炉外西南",
  "8-癸酉": "房床门外西南",
  "8-甲戌": "门鸡栖外西南",
  "8-乙亥": "碓磨床外西南",
  "8-丙子": "厨灶碓外西南",
  "8-丁丑": "仓库厕外西南",
  "8-戊寅": "房床厕外正南",
  "8-己卯": "占门厕外正南",
  "8-庚辰": "碓磨栖外正西",
  "8-辛巳": "厨灶床外正西",
  "8-壬午": "仓库碓外西北",
  "8-癸未": "房床厕外西北",
  "8-甲申": "占门炉外西北",
  "8-乙酉": "碓磨门外西北",
  "8-丙戌": "厨灶栖外西北",
  "8-丁亥": "仓库床外西北",
  "8-戊子": "房床碓外正北",
  "8-己丑": "占门厕外正北",
  "8-庚寅": "碓磨炉外正北",
  "8-辛卯": "厨灶门外正北",
  "8-壬辰": "仓库栖外正北",
  "8-癸巳": "占房床房内北",
  "8-甲午": "占门碓房内北",
  "8-乙未": "碓磨厕房内北",
  "8-丙申": "厨灶炉房内北",
  "8-丁酉": "仓库门房内北",
  "7-丙戌": "厨灶栖外西北",
  "8-戊戌": "房床栖房内南",
  "8-己亥": "占门床房内南",
  "8-庚子": "占碓磨房内南",
  "8-辛丑": "厨灶厕房内南",
  "8-壬寅": "仓库炉房内南",
  "8-癸卯": "房床门房内南",
  "8-甲辰": "门鸡栖房内东",
  "8-乙巳": "碓磨床房内东",
  "8-丙午": "厨灶碓房内东",
  "8-丁未": "仓库厕房内东",
  "8-戊申": "房床炉房内东",
  "8-己酉": "占大门外东北",
  "8-庚戌": "碓磨栖外东北",
  "8-辛亥": "厨灶床外东北",
  "8-壬子": "仓库碓外东北",
  "8-癸丑": "房床厕外东北",
  "8-甲寅": "占门炉外东北",
  "8-乙卯": "碓磨门外正东",
  "8-丙辰": "厨灶栖外正东",
  "8-丁巳": "仓库床外正东",
  "8-戊午": "房床碓外正东",
  "8-己未": "占门厕外正东",
  "8-庚申": "碓磨炉外东南",
  "8-辛酉": "厨灶门外东南",
  "8-壬戌": "仓库栖外东南",
  "8-癸亥": "占房床外东南",
  "9-甲子": "占门碓外东南",
  "9-乙丑": "碓磨厕外东南",
  "9-丙寅": "厨灶炉外正南",
  "9-丁卯": "仓库门外正南",
  "9-戊辰": "房床栖外正南",
  "9-己巳": "占门床外正南",
  "9-庚午": "占碓磨外正南",
  "9-辛未": "厨灶厕外西南",
  "9-壬申": "仓库炉外西南",
  "9-癸酉": "房床门外西南",
  "9-甲戌": "门鸡栖外西南",
  "9-乙亥": "碓磨床外西南",
  "9-丙子": "厨灶碓外西南",
  "9-丁丑": "仓库厕外西南",
  "9-戊寅": "房床厕外正南",
  "9-己卯": "占门厕外正南",
  "9-庚辰": "碓磨栖外正西",
  "9-辛巳": "厨灶床外正西",
  "9-壬午": "仓库碓外西北",
  "9-癸未": "房床厕外西北",
  "9-甲申": "占门炉外西北",
  "9-乙酉": "碓磨门外西北",
  "9-丙戌": "厨灶栖外西北",
  "9-丁亥": "仓库床外西北",
  "9-戊子": "房床碓外正北",
  "9-己丑": "占门厕外正北",
  "9-庚寅": "碓磨炉外正北",
  "9-辛卯": "厨灶门外正北",
  "9-壬辰": "仓库栖外正北",
  "9-癸巳": "占房床房内北",
  "9-甲午": "占门碓房内北",
  "9-乙未": "碓磨厕房内北",
  "9-丙申": "厨灶炉房内北",
  "9-丁酉": "仓库门房内北",
  "9-戊戌": "房床栖房内南",
  "9-己亥": "占门床房内南",
  "9-庚子": "占碓磨房内南",
  "9-辛丑": "厨灶厕房内南",
  "9-壬寅": "仓库炉房内南",
  "9-癸卯": "房床门房内南",
  "9-甲辰": "门鸡栖房内东",
  "9-乙巳": "碓磨床房内东",
  "9-丙午": "厨灶碓房内东",
  "9-丁未": "仓库厕房内东",
  "9-戊申": "房床炉房内东",
  "9-己酉": "占大门外东北",
  "9-庚戌": "碓磨栖外东北",
  "9-辛亥": "厨灶床外东北",
  "9-壬子": "仓库碓外东北",
  "9-癸丑": "房床厕外东北",
  "9-甲寅": "占门炉外东北",
  "9-乙卯": "碓磨门外正东",
  "9-丙辰": "厨灶栖外正东",
  "9-丁巳": "仓库床外正东",
  "9-戊午": "房床碓外正东",
  "9-己未": "占门厕外正东",
  "9-庚申": "碓磨炉外东南",
  "9-辛酉": "厨灶门外东南",
  "9-壬戌": "仓库栖外东南",
  "9-癸亥": "占房床外东南",
  "10-甲子": "占门碓外东南",
  "10-乙丑": "碓磨厕外东南",
  "10-丙寅": "厨灶炉外正南",
  "10-丁卯": "仓库门外正南",
  "10-戊辰": "房床栖外正南",
  "10-己巳": "占门床外正南",
  "10-庚午": "占碓磨外正南",
  "10-辛未": "厨灶厕外西南",
  "10-壬申": "仓库炉外西南",
  "10-癸酉": "房床门外西南",
  "10-甲戌": "门鸡栖外西南",
  "10-乙亥": "碓磨床外西南",
  "10-丙子": "厨灶碓外西南",
  "10-丁丑": "仓库厕外西南",
  "10-戊寅": "房床厕外正南",
  "10-己卯": "占门厕外正南",
  "10-庚辰": "碓磨栖外正西",
  "10-辛巳": "厨灶床外正西",
  "10-壬午": "仓库碓外西北",
  "10-癸未": "房床厕外西北",
  "10-甲申": "占门炉外西北",
  "10-乙酉": "碓磨门外西北",
  "10-丙戌": "厨灶栖外西北",
  "10-丁亥": "仓库床外西北",
  "10-戊子": "房床碓外正北",
  "10-己丑": "占门厕外正北",
  "10-庚寅": "碓磨炉外正北",
  "10-辛卯": "厨灶门外正北",
  "10-壬辰": "仓库栖外正北",
  "10-癸巳": "占房床房内北",
  "10-甲午": "占门碓房内北",
  "10-乙未": "碓磨厕房内北",
  "10-丙申": "厨灶炉房内北",
  "10-丁酉": "仓库门房内北",
  "10-戊戌": "房床栖房内南",
  "10-己亥": "占门床房内南",
  "10-庚子": "占碓磨房内南",
  "10-辛丑": "厨灶厕房内南",
  "10-壬寅": "仓库炉房内南",
  "10-癸卯": "房床门房内南",
  "10-甲辰": "门鸡栖房内东",
  "10-乙巳": "碓磨床房内东",
  "10-丙午": "厨灶碓房内东",
  "10-丁未": "仓库厕房内东",
  "10-戊申": "房床炉房内东",
  "10-己酉": "占大门外东北",
  "10-庚戌": "碓磨栖外东北",
  "10-辛亥": "厨灶床外东北",
  "10-壬子": "仓库碓外东北",
  "10-癸丑": "房床厕外东北",
  "10-甲寅": "占门炉外东北",
  "10-乙卯": "碓磨门外正东",
  "10-丙辰": "厨灶栖外正东",
  "10-丁巳": "仓库床外正东",
  "10-戊午": "房床碓外正东",
  "10-己未": "占门厕外正东",
  "10-庚申": "碓磨炉外东南",
  "10-辛酉": "厨灶门外东南",
  "10-壬戌": "仓库栖外东南",
  "10-癸亥": "占房床外东南",
  "11-甲子": "占门碓外东南",
  "11-乙丑": "碓磨厕外东南",
  "11-丙寅": "厨灶炉外正南",
  "11-丁卯": "仓库门外正南",
  "11-戊辰": "房床栖外正南",
  "11-己巳": "占门床外正南",
  "11-庚午": "占碓磨外正南",
  "11-辛未": "厨灶厕外西南",
  "11-壬申": "仓库炉外西南",
  "11-癸酉": "房床门外西南",
  "11-甲戌": "门鸡栖外西南",
  "11-乙亥": "碓磨床外西南",
  "11-丙子": "厨灶碓外西南",
  "11-丁丑": "仓库厕外西南",
  "11-戊寅": "房床厕外正南",
  "11-己卯": "占门厕外正南",
  "11-庚辰": "碓磨栖外正西",
  "11-辛巳": "厨灶床外正西",
  "11-壬午": "仓库碓外西北",
  "11-癸未": "房床厕外西北",
  "11-甲申": "占门炉外西北",
  "11-乙酉": "碓磨门外西北",
  "11-丙戌": "厨灶栖外西北",
  "11-丁亥": "仓库床外西北",
  "11-戊子": "房床碓外正北",
  "11-己丑": "占门厕外正北",
  "11-庚寅": "碓磨炉外正北",
  "11-辛卯": "厨灶门外正北",
  "11-壬辰": "仓库栖外正北",
  "11-癸巳": "占房床房内北",
  "11-甲午": "占门碓房内北",
  "11-乙未": "碓磨厕房内北",
  "11-丙申": "厨灶炉房内北",
  "11-丁酉": "仓库门房内北",
  "11-戊戌": "房床栖房内南",
  "11-己亥": "占门床房内南",
  "11-庚子": "占碓磨房内南",
  "11-辛丑": "厨灶厕房内南",
  "11-壬寅": "仓库炉房内南",
  "11-癸卯": "房床门房内南",
  "11-甲辰": "门鸡栖房内东",
  "11-乙巳": "碓磨床房内东",
  "11-丙午": "厨灶碓房内东",
  "11-丁未": "仓库厕房内东",
  "11-戊申": "房床炉房内东",
  "11-己酉": "占大门外东北",
  "11-庚戌": "碓磨栖外东北",
  "11-辛亥": "厨灶床外东北",
  "11-壬子": "仓库碓外东北",
  "11-癸丑": "房床厕外东北",
  "11-甲寅": "占门炉外东北",
  "11-乙卯": "碓磨门外正东",
  "11-丙辰": "厨灶栖外正东",
  "11-丁巳": "仓库床外正东",
  "11-戊午": "房床碓外正东",
  "11-己未": "占门厕外正东",
  "11-庚申": "碓磨炉外东南",
  "11-辛酉": "厨灶门外东南",
  "11-壬戌": "仓库栖外东南",
  "11-癸亥": "占房床外东南",
  "12-甲子": "占门碓外东南",
  "12-乙丑": "碓磨厕外东南",
  "12-丙寅": "厨灶炉外正南",
  "12-丁卯": "仓库门外正南",
  "12-戊辰": "房床栖外正南",
  "12-己巳": "占门床外正南",
  "12-庚午": "占碓磨外正南",
  "12-辛未": "厨灶厕外西南",
  "12-壬申": "仓库炉外西南",
  "12-癸酉": "房床门外西南",
  "12-甲戌": "门鸡栖外西南",
  "12-乙亥": "碓磨床外西南",
  "12-丙子": "厨灶碓外西南",
  "12-丁丑": "仓库厕外西南",
  "12-戊寅": "房床厕外正南",
  "12-己卯": "占门厕外正南",
  "12-庚辰": "碓磨栖外正西",
  "12-辛巳": "厨灶床外正西",
  "12-壬午": "仓库碓外西北",
  "12-癸未": "房床厕外西北",
  "12-甲申": "占门炉外西北",
  "12-乙酉": "碓磨门外西北",
  "12-丙戌": "厨灶栖外西北",
  "12-丁亥": "仓库床外西北",
  "12-戊子": "房床碓外正北",
  "12-己丑": "占门厕外正北",
  "12-庚寅": "碓磨炉外正北",
  "12-辛卯": "厨灶门外正北",
  "12-壬辰": "仓库栖外正北",
  "12-癸巳": "占房床房内北",
  "12-甲午": "占门碓房内北",
  "12-乙未": "碓磨厕房内北",
  "12-丙申": "厨灶炉房内北",
  "12-丁酉": "仓库门房内北",
  "12-戊戌": "房床栖房内南",
  "12-己亥": "占门床房内南",
  "12-庚子": "占碓磨房内南",
  "12-辛丑": "厨灶厕房内南",
  "12-壬寅": "仓库炉房内南",
  "12-癸卯": "房床门房内南",
  "12-甲辰": "门鸡栖房内东",
  "12-乙巳": "碓磨床房内东",
  "12-丙午": "厨灶碓房内东",
  "12-丁未": "仓库厕房内东",
  "12-戊申": "房床炉房内东",
  "12-己酉": "占大门外东北",
  "12-庚戌": "碓磨栖外东北",
  "12-辛亥": "厨灶床外东北",
  "12-壬子": "仓库碓外东北",
  "12-癸丑": "房床厕外东北",
  "12-甲寅": "占门炉外东北",
  "12-乙卯": "碓磨门外正东",
  "12-丙辰": "厨灶栖外正东",
  "12-丁巳": "仓库床外正东",
  "12-戊午": "房床碓外正东",
  "12-己未": "占门厕外正东",
  "12-庚申": "碓磨炉外东南",
  "12-辛酉": "厨灶门外东南",
  "12-壬戌": "仓库栖外东南",
  "12-癸亥": "占房床外东南"
};
exports.l = l;

/***/ }),

/***/ 67:
/*!********************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data1/C2.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C = void 0;
var C = {
  "0-0": {
    j: "搬新房 纳畜 安葬 造畜稠 作灶 伐木 作梁",
    y: "结婚 会亲友 出行 签订合同 交易 纳财 开业 动土 祈福 祭祀 掘井 开光 求子"
  },
  "0-1": {
    j: "栽种 安葬",
    y: "结婚 打扫 搬家 合婚订婚 搬新房 买衣服 订盟 动土 祈福 纳畜 盖屋 安门 祭祀 牧养 修造 拆卸 起基 安香 酬神 出火 伐木 开光 求子 上梁 竖柱 塑绘 斋醮 定磉"
  },
  "0-10": {
    j: "结婚 出行 搬家 搬新房 开业 赴任 安葬 入殓 出火 收养子女",
    y: "打扫 合婚订婚 买房 订盟 动土 祈福 栽种 安床 纳畜 安门 祭祀 修造 造畜稠 拆卸 移柩 掘井 开池 立碑 破土 求子 上梁 竖柱 塑绘"
  },
  "0-11": {
    j: "结婚 栽种 安葬 入殓",
    y: "出行 合婚订婚 签订合同 开业 买衣服 订盟 祈福 安机械 沐浴 纳畜 祭祀 安装器具 斋醮"
  },
  "0-12": {
    j: "搬家 搬新房 安葬 安门 出火",
    y: "结婚 会亲友 出行 合婚订婚 开业 动土 祈福 祭祀 破土 迁坟"
  },
  "0-13": {
    j: "开业 盖屋 安葬 作灶",
    y: "出行 打扫 求职入学 合婚订婚 搬新房 习艺 订盟 动土 祈福 沐浴 祭祀 修造 拆卸 起基 移柩 安香 成服 除服 伐木 掘井 求子 上梁 竖柱 塑绘 谢土 造庙 斋醮"
  },
  "0-14": {
    j: "动土 祈福 安葬 入殓 破土",
    y: "结婚 出行 搬家 合婚订婚 签订合同 搬新房 开业 纳畜 牧养 出火"
  },
  "0-15": {
    j: "搬家 搬新房 动土 纳畜 安葬 安门 入殓 探病 伐木 上梁",
    y: "结婚 出行 签订合同 交易 开业 祈福 安床 祭祀 拆卸 开光 求子"
  },
  "0-16": {
    j: "买车 安葬 入殓 上梁 合帐",
    y: "会亲友 打扫 搬家 搬新房 动土 祈福 祭祀 求医 治病 合寿木 开生坟 安香 破土 求子 斋醮"
  },
  "0-17": {
    j: "结婚 出行 搬新房 安葬 作灶 入殓 成人礼 上梁",
    y: "理发 开业 祈福 祭祀 牧养 开光 求子"
  },
  "0-18": {
    j: "搬新房 盖屋 安葬 安门 出火",
    y: "结婚 会亲友 出行 打扫 合婚订婚 纳财 开业 出货财 订盟 动土 开仓 纳畜 祭祀 牧养 修造 开池 开光 破土 普渡 迁坟 上梁 竖柱 斋醮"
  },
  "0-19": {
    j: "馀事勿取",
    y: "祭祀 修坟 成服 除服 立碑 迁坟"
  },
  "0-2": {
    j: "安葬 祭祀 作灶 入殓",
    y: "结婚 出行 打扫 合婚订婚 签订合同 交易 买房 开业 订盟 动土 栽种 安床 挂匾 修造 拆卸 安香 出火 开光"
  },
  "0-20": {
    j: "开业 出货财 安床 开仓 安葬 安门",
    y: "结婚 出行 搬家 合婚订婚 搬新房 订盟 祈福 祭祀 求医 治病 出火"
  },
  "0-21": {
    j: "馀事勿取",
    y: "打扫"
  },
  "0-22": {
    j: "搬家 搬新房 开业 安葬",
    y: "打扫 合婚订婚 订盟 动土 祈福 栽种 盖屋 归岫 架马 修造 起基 成服 除服 合嵴 掘井 开柱眼 破土 上梁 斋醮"
  },
  "0-23": {
    j: "结婚 理发 栽种 安葬 作灶 入殓 行丧 造庙 造桥",
    y: "搬家 签订合同 交易 搬新房 纳财 开业 动土 祈福 安床 纳畜 造畜稠 开光 求子"
  },
  "0-24": {
    j: "搬新房 安葬 作灶 上梁",
    y: "结婚 出行 合婚订婚 签订合同 交易 开业 买衣服 订盟 动土 祈福 沐浴 祭祀 放水 移柩 成人礼 安装器具 成服 除服 开光 破土 迁坟 求子 塑绘"
  },
  "0-25": {
    j: "开业 安葬 入殓 合帐",
    y: "结婚 搬家 搬新房 动土 祈福 安床 祭祀 拆卸 出火 开光 破土 求子 谢土"
  },
  "0-26": {
    j: "搬新房 安床 安葬 入殓",
    y: "结婚 会亲友 出行 合婚订婚 签订合同 交易 纳财 开业 赴任 订盟 动土 栽种 移柩 除服 收养子女 破土 迁坟 谢土"
  },
  "0-27": {
    j: "搬家 搬新房 盖屋 安葬 安门 修造 入殓 伐木",
    y: "出行 签订合同 交易 买房 开业 动土 祈福 栽种 安床 纳畜 祭祀 造仓 起基 修坟 开光 破土 迁坟 求子 定磉"
  },
  "0-28": {
    j: "开业 安门",
    y: "结婚 出行 搬家 合婚订婚 搬新房 动土 祈福 祭祀 求医 治病"
  },
  "0-29": {
    j: "出行 搬家 诉讼 栽种 安葬 行丧 破土",
    y: "结婚 合婚订婚 买衣服 订盟 动土 祈福 安床 纳畜 盖屋 祭祀 牧养 修造 作灶 起基 成人礼 开光 求子 上梁 作梁"
  },
  "0-3": {
    j: "结婚 安葬",
    y: "合婚订婚 签订合同 交易 订盟 动土 祭祀 破土"
  },
  "0-30": {
    j: "-",
    y: "结婚 出行 合婚订婚 签订合同 交易 开业 买衣服 订盟 动土 祈福 栽种 安床 放水 移柩 成服 除服 掘井 开渠 破土"
  },
  "0-31": {
    j: "结婚 搬新房 开业 动土 安葬 破土",
    y: "祭祀 修坟 移柩 馀事勿取 成服 除服 迁坟"
  },
  "0-32": {
    j: "安床 安葬 作灶 入殓",
    y: "结婚 合婚订婚 搬新房 赴任 订盟 祈福 沐浴 纳畜 祭祀 拆卸 移柩 出火 迁坟 竖柱 谢土 斋醮"
  },
  "0-33": {
    j: "会亲友 理发 搬新房 安葬 安门 修造 作灶 入殓 伐木 上梁",
    y: "结婚 出行 打扫 签订合同 交易 开业 动土 祈福 挂匾 祭祀 拆卸 成人礼 开光 破土 求子 斋醮"
  },
  "0-34": {
    j: "结婚 作灶",
    y: "合婚订婚 订盟 动土 祈福 祭祀 修造 破土 上梁"
  },
  "0-35": {
    j: "结婚 搬新房 安葬 行丧 合帐",
    y: "会亲友 求职入学 合婚订婚 订盟 祈福 沐浴 纳畜 祭祀 牧养 造畜稠 治病 安装器具 收养子女 掘井 开池 求子 斋醮"
  },
  "0-36": {
    j: "搬新房 安葬 作灶 入殓",
    y: "出行 合婚订婚 签订合同 交易 纳财 开业 买衣服 订盟 祈福 沐浴 祭祀 移柩 成人礼 除服 求子 谢土 斋醮"
  },
  "0-37": {
    j: "交易 开业 安葬 合帐",
    y: "结婚 出行 搬家 合婚订婚 搬新房 订盟 动土 祈福 安床 安门 祭祀 修造 移柩 出火 立碑 破土 上梁"
  },
  "0-38": {
    j: "祈福 安葬 祭祀 作灶 入殓 探病",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 栽种 安床 挂匾 拆卸 出火 收养子女 开光"
  },
  "0-39": {
    j: "搬新房 安葬 安门",
    y: "结婚 会亲友 出行 合婚订婚 签订合同 交易 开业 习艺 订盟 动土 祈福 栽种 祭祀 造仓 拆卸 放水 起基 修坟 安装器具 开池 开光 开渠 立碑 破土 迁坟 求子 谢土"
  },
  "0-4": {
    j: "买房 搬新房 安葬 行丧",
    y: "结婚 出行 打扫 合婚订婚 订盟 动土 祈福 栽种 安床 造车器 祭祀 修造 拆卸 成人礼 出火 伐木 开光 破土 求子 上梁"
  },
  "0-40": {
    j: "签订合同 交易 开业 安葬",
    y: "结婚 出行 打扫 搬家 搬新房 祈福 栽种 安床 祭祀 修造 拆卸 移柩 出火 伐木 开光 求子 上梁"
  },
  "0-41": {
    j: "出行 安葬 造桥",
    y: "结婚 合婚订婚 习艺 订盟 安床 沐浴 纳畜 盖屋 挂匾 祭祀 治病 作灶 安装器具 出火 伐木 掘井 开光 上梁 竖柱 塑绘"
  },
  "0-42": {
    j: "搬新房 盖屋 安门 修造 入殓 伐木 上梁 作梁",
    y: "结婚 出行 动土 祈福 安床 祭祀 掘井 破土 迁坟 求子"
  },
  "0-43": {
    j: "开业 动土 祈福 安葬 入殓 破土 造船",
    y: "会亲友 打扫 求职入学 祭祀 打鱼 移柩 成服 除服 结网 迁坟 打猎"
  },
  "0-44": {
    j: "结婚 搬新房 安床 安葬 安门 作灶 修坟 立碑",
    y: "出行 打扫 买房 开业 动土 祈福 栽种 祭祀 起基 开光 求子"
  },
  "0-45": {
    j: "搬家 搬新房 安葬 入殓 出火",
    y: "出行 求职入学 买房 纳财 开业 动土 祈福 栽种 纳畜 祭祀 牧养 拆卸 起基 问名 掘井 开渠 破土 迁坟 求子 斋醮 定磉"
  },
  "0-46": {
    j: "结婚 出行 搬家 搬新房 赴任 盖屋 安葬 入殓 出火 收养子女",
    y: "打扫 动土 祈福 栽种 安床 纳畜 祭祀 移柩 掘井 开光 破土 作梁"
  },
  "0-47": {
    j: "结婚 出行 动土 安葬 行丧 造庙",
    y: "会亲友 合婚订婚 签订合同 交易 开业 订盟 安床 沐浴 架马 安门 祭祀 牧养 造畜稠 拆卸 出火 伐木 掘井 开光 开柱眼 上梁 竖柱 塑绘 斋醮 作梁"
  },
  "0-48": {
    j: "出行 搬新房 纳畜 安葬 作灶 出火 伐木",
    y: "结婚 打扫 动土 祈福 栽种 安床 祭祀 掘井 开池 开光 破土 迁坟 求子"
  },
  "0-49": {
    j: "合婚订婚 交易 开业 动土 安门",
    y: "出行 打扫 搬家 搬新房 祈福 纳畜 盖屋 架马 牧养 修造 起基 移柩 成服 除服 伐木 开光 求子 谢土 造庙"
  },
  "0-5": {
    j: "安葬 造庙",
    y: "结婚 搬家 签订合同 搬新房 开业 动土 祈福 祭祀"
  },
  "0-50": {
    j: "安葬 祭祀 入殓 探病",
    y: "结婚 出行 打扫 搬家 签订合同 交易 搬新房 开业 动土 祈福 安床 拆卸 出火 开光 破土 求子 谢土"
  },
  "0-51": {
    j: "搬新房 开业 盖屋 探病 出火",
    y: "结婚 会亲友 出行 打扫 理发 合婚订婚 习艺 订盟 动土 祈福 安床 纳畜 祭祀 牧养 修造 拆卸 放水 起基 修坟 成服 除服 立碑 破土 求子 竖柱 斋醮 针灸 定磉"
  },
  "0-52": {
    j: "诸事不宜",
    y: "打扫 馀事勿取 坏垣"
  },
  "0-53": {
    j: "求职入学 搬新房 盖屋 安葬 作灶 行丧",
    y: "结婚 会亲友 纳畜 祭祀 牧养 求医 治病 放水 安装器具 掘井 开光 开渠 塑绘"
  },
  "0-54": {
    j: "搬家 买房 搬新房 纳畜 盖屋 安葬 入殓 伐木",
    y: "结婚 会亲友 出行 打扫 祈福 栽种 安床 祭祀 移柩 成服 除服 收养子女 开光 求子"
  },
  "0-55": {
    j: "结婚 开业 动土 安葬 掘井 开池",
    y: "会亲友 打扫 祭祀 移柩 除虫 成服 除服 普渡 迁坟 打猎"
  },
  "0-56": {
    j: "安床 安葬",
    y: "结婚 出行 打扫 搬家 签订合同 交易 搬新房 纳财 开业 祈福 栽种 挂匾 祭祀 出火 收养子女 开光 破土 求子 谢土"
  },
  "0-57": {
    j: "搬家 搬新房 安葬 安门 作梁",
    y: "出行 打扫 房屋清洁 理发 动土 祈福 沐浴 祭祀 拆卸 起基 移柩 成人礼 安装器具 成服 除服 掘井 开池 立碑 迁坟 求子 谢土 斋醮 定磉"
  },
  "0-58": {
    j: "结婚 出行 搬家 搬新房 赴任 安葬 入殓 收养子女 开渠",
    y: "买房 动土 祈福 栽种 安床 祭祀 修造 拆卸 开光 破土 求子 上梁"
  },
  "0-59": {
    j: "结婚 出行 安葬 入殓",
    y: "会亲友 沐浴 造畜稠 作灶 放水 成人礼 开光 塑绘"
  },
  "0-6": {
    j: "搬新房 纳畜 盖屋 安葬 安门 作灶 入殓 探病 伐木 上梁",
    y: "结婚 出行 理发 合婚订婚 订盟 动土 栽种 安床 祭祀 放水 收养子女 开光 开渠"
  },
  "0-7": {
    j: "交易 开业 安葬 入殓",
    y: "诸事不宜"
  },
  "0-8": {
    j: "搬新房 买衣服 安床 安葬 安门",
    y: "结婚 出行 房屋清洁 求职入学 买房 出货财 动土 祈福 栽种 开仓 祭祀 牧养 求医 治病 开生坟 起基 开光 立碑 破土 求子 上梁 竖柱 谢土 斋醮"
  },
  "0-9": {
    j: "诸事不宜",
    y: "-"
  },
  "1-0": {
    j: "结婚 搬家 搬新房 开仓",
    y: "出行 合婚订婚 买衣服 订盟 祈福 安床 沐浴 挂匾 祭祀 造畜稠 拆卸 起基 入殓 移柩 成服 除服 迁坟 求子 上梁 竖柱 斋醮 合帐"
  },
  "1-1": {
    j: "结婚 出行 搬新房 动土 栽种 开光 破土 针灸",
    y: "祈福 纳畜 祭祀 入殓 成服 除服 迁坟 求子 谢土"
  },
  "1-10": {
    j: "搬新房 作灶",
    y: "出行 合婚订婚 订盟 祈福 安葬 入殓 移柩 结网 立碑 破土 斋醮"
  },
  "1-11": {
    j: "结婚 开业 祈福 栽种 安床 安葬 掘井 开光",
    y: "出行 搬家 搬新房 动土 安门 修造 造仓 造畜稠 起基 补垣 收养子女 塞穴 上梁"
  },
  "1-12": {
    j: "结婚 搬新房 作灶 掘井",
    y: "交易 买车 祈福 安床 安机械 沐浴 造车器 安葬 祭祀 入殓 移柩 立碑 迁坟 斋醮 合帐"
  },
  "1-13": {
    j: "结婚 动土 盖屋 开光 破土",
    y: "祈福 安葬 祭祀 入殓 移柩 成服 除服 迁坟 求子 斋醮"
  },
  "1-14": {
    j: "结婚 搬新房 祭祀 开光",
    y: "合婚订婚 签订合同 交易 纳财 买衣服 订盟 买车 安床 安机械 纳畜 架马 安葬 造仓 拆卸 入殓 修坟 移柩 成人礼 补垣 成服 除服 伐木 立碑 破土 迁坟 塞穴 筑堤 合帐"
  },
  "1-15": {
    j: "结婚 安葬 安门 探病 掘井 开光",
    y: "交易 纳财 祈福 祭祀 作灶 成人礼 求子 斋醮"
  },
  "1-16": {
    j: "开仓 掘井 开光",
    y: "结婚 出行 搬家 搬新房 动土 祈福 栽种 安床 安葬 祭祀 修造 作灶 拆卸 出火 破土 求子 塞穴"
  },
  "1-17": {
    j: "开业 祈福 安葬 掘井 开光",
    y: "结婚 搬家 搬新房 动土 纳畜 架马 牧养 修造 作灶 起基 成人礼 补垣 开池 塞穴 造船 定磉"
  },
  "1-18": {
    j: "馀事勿取",
    y: "安葬 祭祀 入殓 移柩 成服 除服 破土 迁坟 谢土"
  },
  "1-19": {
    j: "动土 诉讼 掘井 开光 破土 上梁",
    y: "结婚 祈福 安葬 祭祀 入殓 补垣 成服 除服 断蚁 普渡 塞穴 筑堤"
  },
  "1-2": {
    j: "结婚 搬新房 开业 作灶 开光",
    y: "合婚订婚 订盟 动土 安床 安葬 修造 造仓 拆卸 入殓 移柩 成人礼 成服 除服 破土 迁坟"
  },
  "1-20": {
    j: "搬新房 开业 祈福 安床 挂匾 掘井 开光",
    y: "结婚 出行 搬家 动土 安葬 修造 拆卸 修坟 伐木 立碑 破土"
  },
  "1-21": {
    j: "结婚 会亲友 栽种 安葬 开光 针灸",
    y: "房屋清洁 美甲浴足 理发 沐浴 祭祀 作灶 入殓 成人礼 补垣 破土 迁坟 塞穴"
  },
  "1-22": {
    j: "结婚 搬家 搬新房 开业 作灶 出火 收养子女 掘井 开光",
    y: "安床 祭祀 入殓 移柩 补垣 开池 破土 迁坟"
  },
  "1-23": {
    j: "结婚 祈福 安葬 行丧 掘井 开光",
    y: "搬家 合婚订婚 搬新房 买衣服 订盟 动土 栽种 开仓 沐浴 纳畜 开厕 安门 祭祀 修造 拆卸 成人礼 补垣 塞穴 筑堤 合帐"
  },
  "1-24": {
    j: "结婚 出行 买房 搬新房 动土 栽种 治病 开光 破土",
    y: "签订合同 交易 买衣服 安床 安葬 入殓 移柩 成服 除服"
  },
  "1-25": {
    j: "结婚 出行 搬新房 动土",
    y: "签订合同 交易 买衣服 祈福 安床 祭祀 入殓 移柩 成服 酬神 除服 迁坟 求子 谢土"
  },
  "1-26": {
    j: "结婚 出行 搬家 搬新房 安门 祭祀 出火 开光",
    y: "签订合同 交易 动土 栽种 安床 纳畜 安葬 牧养 修造 拆卸 入殓 伐木 上梁"
  },
  "1-27": {
    j: "结婚 合婚订婚 安门 掘井",
    y: "买衣服 祈福 安床 安葬 祭祀 造畜稠 入殓 移柩 成服 除服 立碑 破土 迁坟 谢土 合帐"
  },
  "1-28": {
    j: "搬家 搬新房 开业 安床 修造 开光 开渠 上梁",
    y: "结婚 签订合同 交易 开厕 打鱼 开生坟 补垣 塞穴 打猎"
  },
  "1-29": {
    j: "结婚 安葬",
    y: "搬家 搬新房 买衣服 纳畜 作灶"
  },
  "1-3": {
    j: "搬家 理发 搬新房 安门 作灶 开光",
    y: "出行 动土 安床 安葬 祭祀 修造 造畜稠 合寿木 开生坟 入殓 移柩 补垣 破土 迁坟 塞穴 合帐"
  },
  "1-30": {
    j: "结婚 安葬 治病 掘井 开光 破土",
    y: "买车 沐浴 祭祀 入殓 移柩 补垣 成服 除服 立碑 迁坟 塞穴"
  },
  "1-31": {
    j: "动土 破土",
    y: "结婚 搬家 搬新房 祈福 祭祀 作灶 斋醮"
  },
  "1-32": {
    j: "搬新房 开业 动土 祈福 开光",
    y: "结婚 打扫 房屋清洁 安机械 沐浴 纳畜 架马 安葬 安门 牧养 合寿木 修坟 成人礼 伐木 立碑 迁坟 作梁"
  },
  "1-33": {
    j: "动土 上梁",
    y: "结婚 安机械 安葬 祭祀 入殓 破土"
  },
  "1-34": {
    j: "买房 作灶 掘井 开光 造船",
    y: "结婚 买衣服 安床 造畜稠 入殓 移柩 破土 合帐"
  },
  "1-35": {
    j: "搬新房 安葬",
    y: "出行 理发 沐浴 补垣 塞穴"
  },
  "1-36": {
    j: "结婚 买房 搬新房 开业 动土 栽种 开光 破土",
    y: "交易 纳财 祈福 沐浴 安葬 祭祀 造畜稠 入殓 修坟 移柩 问名 教牛马 立碑 求子 谢土"
  },
  "1-37": {
    j: "结婚 出行 搬家 搬新房 动土 作灶 掘井 开光 针灸",
    y: "祈福 安葬 祭祀 入殓 移柩 迁坟 求子"
  },
  "1-38": {
    j: "结婚 搬新房 祈福 出火",
    y: "签订合同 交易 动土 安机械 安葬 修造 入殓 成人礼 破土"
  },
  "1-39": {
    j: "开业 诉讼 开光",
    y: "结婚 出行 签订合同 交易 安床 安葬 作灶 入殓 移柩 成人礼 成服 除服 破土 合帐"
  },
  "1-4": {
    j: "赴任 除虫",
    y: "结婚 出行 搬家 搬新房 买衣服 安床 安葬 祭祀 作灶 破土"
  },
  "1-40": {
    j: "搬新房 盖屋 安葬 安门 上梁 造桥",
    y: "结婚 出行 搬家 造车器 开厕 祭祀 作灶 入殓 成人礼 补垣 成服 除服 破土 迁坟 塞穴"
  },
  "1-41": {
    j: "出行 祈福 栽种 安葬",
    y: "结婚 合婚订婚 买衣服 动土 安门 修造 造畜稠 作灶 起基 成人礼 伐木 求子 上梁 竖柱 筑堤 作梁 合帐"
  },
  "1-42": {
    j: "结婚 搬新房 开业 盖屋 开光",
    y: "安葬 祭祀 入殓 移柩 成服 除服 断蚁 结网 破土 迁坟 塞穴"
  },
  "1-43": {
    j: "理发 盖屋 作灶 掘井 开光 造船",
    y: "结婚 出行 搬家 动土 祈福 安床 安葬 祭祀 修造 拆卸 入殓 出火 破土 迁坟 求子"
  },
  "1-44": {
    j: "结婚 合婚订婚 开业 祈福 祭祀 修坟 斋醮",
    y: "出行 搬家 搬新房 动土 沐浴 安葬 修造 成人礼 破土"
  },
  "1-45": {
    j: "结婚 会亲友 栽种 安门 掘井 开光",
    y: "打扫 房屋清洁 美甲浴足 理发 买衣服 安床 祭祀 造畜稠 作灶 放水 补垣 塞穴 筑堤"
  },
  "1-46": {
    j: "结婚 搬新房 安床 掘井 开光",
    y: "理发 买房 安葬 祭祀 入殓 移柩 成服 除服 破土 塞穴"
  },
  "1-47": {
    j: "结婚 祈福 安床 安葬 行丧 掘井",
    y: "动土 栽种 开厕 安门 修造 作灶 补垣 开池 塞穴 筑堤 作梁"
  },
  "1-48": {
    j: "结婚 开业 动土 开光 破土",
    y: "签订合同 交易 纳财 买衣服 安床 安葬 造畜稠 入殓 修坟 移柩 成服 除服 立碑 迁坟 谢土"
  },
  "1-49": {
    j: "搬新房 诉讼 出火",
    y: "买衣服 买车 安床 安葬 祭祀 作灶 入殓 移柩 伐木 迁坟 作梁 合帐"
  },
  "1-5": {
    j: "出行 祈福 安床 安葬 行丧 开光",
    y: "结婚 搬家 纳财 买衣服 动土 栽种 安门 修造 拆卸 成人礼 出火 伐木 塞穴 上梁 筑堤 合帐"
  },
  "1-50": {
    j: "结婚 出行 祭祀 掘井 上梁",
    y: "买衣服 动土 买车 安葬 修造 拆卸 合寿木 入殓 修坟 移柩 成服 除服 伐木 合嵴 开柱眼 立碑 破土 迁坟"
  },
  "1-51": {
    j: "结婚 开业 栽种 探病 掘井 开光",
    y: "签订合同 交易 买衣服 安床 安葬 祭祀 入殓 成人礼 补垣 成服 除服 开池 破土 迁坟 塞穴 谢土"
  },
  "1-52": {
    j: "馀事勿取",
    y: "-"
  },
  "1-53": {
    j: "结婚 出行 搬家 理发 搬新房 安葬 行丧 出火 收养子女 掘井 开光",
    y: "动土 栽种 安床 安门 修造 造畜稠 起基 补垣 筑堤"
  },
  "1-54": {
    j: "结婚 搬家 搬新房 开业 安门 开光",
    y: "祭祀 馀事勿取 结网 塞穴 打猎"
  },
  "1-55": {
    j: "出行 搬新房 买衣服 安门 修造 作灶 开光 上梁",
    y: "会亲友 动土 安葬 祭祀 入殓 移柩 开池 破土 塞穴 筑堤"
  },
  "1-56": {
    j: "开业 祈福 安床 祭祀 开光",
    y: "结婚 出行 打扫 搬家 搬新房 动土 架马 安葬 修造 合寿木 开生坟 入殓 修坟 移柩 成人礼 伐木 开柱眼 破土"
  },
  "1-57": {
    j: "栽种 开光",
    y: "结婚 房屋清洁 美甲浴足 动土 祈福 安床 安葬 祭祀 作灶 入殓 移柩 补垣 成服 除服 破土 迁坟 求子"
  },
  "1-58": {
    j: "安葬 修坟 掘井 开光 谢土",
    y: "结婚 会亲友 合婚订婚 买房 安床 造畜稠 成人礼 除虫 塞穴"
  },
  "1-59": {
    j: "结婚 搬家 搬新房 祈福 掘井 开光",
    y: "买衣服 沐浴 开厕 修造 成人礼 安装器具 补垣 断蚁 开柱眼 塞穴 筑堤 作梁"
  },
  "1-6": {
    j: "诸事不宜",
    y: "安葬 入殓 移柩 馀事勿取 补垣 成服 除服 结网 迁坟 塞穴"
  },
  "1-7": {
    j: "结婚 搬新房 掘井 开光 斋醮 针灸",
    y: "出行 动土 安床 安葬 祭祀 修造 造畜稠 拆卸 起基 入殓 移柩 补垣 出火 破土 塞穴 作梁"
  },
  "1-8": {
    j: "交易 开业 安床 开光",
    y: "结婚 搬家 搬新房 买衣服 动土 买车 安机械 安葬 祭祀 造仓 拆卸 起基 入殓 成人礼 迁坟"
  },
  "1-9": {
    j: "出行 买房 开业 诉讼 栽种 安门 掘井 开光",
    y: "结婚 搬家 买衣服 安床 安葬 祭祀 入殓 移柩 成人礼 破土 塞穴 合帐"
  },
  "10-0": {
    j: "结婚 合婚订婚 搬新房 订盟 动土 开仓 纳畜 问名 出火 伐木 破土",
    y: "打扫 签订合同 交易 开业 祈福 安床 安葬 挂匾 祭祀 修造 开光 求子"
  },
  "10-1": {
    j: "结婚 安葬",
    y: "合婚订婚 开业 动土 祈福 纳畜 祭祀 求医 治病"
  },
  "10-10": {
    j: "结婚 搬家 搬新房 安葬 安门",
    y: "打鱼 结网 塞穴 打猎"
  },
  "10-11": {
    j: "结婚 栽种 安葬 伐木",
    y: "出行 搬家 合婚订婚 签订合同 搬新房 开业 买衣服 动土 安床 沐浴 安门 挂匾 祭祀 拆卸 起基 安香 开光 求子 上梁 竖柱 塑绘"
  },
  "10-12": {
    j: "结婚 开业 出火",
    y: "合婚订婚 出货财 订盟 祈福 开仓 盖屋 安门 祭祀 起基 入殓 开光 破土 迁坟 求子 上梁 竖柱 谢土 斋醮 定磉"
  },
  "10-13": {
    j: "结婚 出行 搬家 理发 搬新房 出火",
    y: "签订合同 交易 开业 动土 祈福 栽种 安床 安葬 祭祀 修造 拆卸 移柩 伐木 收养子女 开光 破土"
  },
  "10-14": {
    j: "结婚 搬家 搬新房 祭祀 上梁 斋醮",
    y: "合婚订婚 签订合同 开业 动土 安机械 安葬 求医 修造 治病 成人礼 破土"
  },
  "10-15": {
    j: "-",
    y: "结婚 出行 打扫 搬家 签订合同 交易 搬新房 开业 动土 祈福 栽种 安床 纳畜 安葬 挂匾 修造 拆卸 入殓 移柩 收养子女 开光 求子"
  },
  "10-16": {
    j: "合婚订婚 订盟 买车 安葬 行丧 探病",
    y: "结婚 搬家 签订合同 交易 搬新房 开业 动土 祈福 安床 造车器 祭祀 修造 治病 安香 除虫 结网 开光 普渡 斋醮 打猎"
  },
  "10-17": {
    j: "结婚 出行 搬家 纳畜 安葬 行丧 伐木 立碑",
    y: "签订合同 交易 搬新房 开业 动土 栽种 安床 挂匾 祭祀 修造 拆卸 出火 收养子女 开光"
  },
  "10-18": {
    j: "盖屋 架马 合寿木 开光 上梁",
    y: "结婚 会亲友 出行 搬家 合婚订婚 签订合同 搬新房 开业 订盟 造车器 安葬 祭祀 破土"
  },
  "10-19": {
    j: "出行 搬家 搬新房 赴任 诉讼 作灶",
    y: "会亲友 打扫 理发 祈福 栽种 纳畜 安葬 祭祀 牧养 修坟 开光 立碑 迁坟 求子"
  },
  "10-2": {
    j: "结婚 搬新房 祭祀 作灶 出火",
    y: "打扫 签订合同 交易 买房 开业 动土 栽种 安床 安葬 挂匾 修造 拆卸 开光 破土 上梁"
  },
  "10-20": {
    j: "结婚 动土 安床 掘井 造桥",
    y: "会亲友 出行 打扫 搬家 合婚订婚 搬新房 订盟 祈福 安机械 纳畜 盖屋 安门 祭祀 牧养 求医 修造 治病 起基 入殓 修坟 移柩 安香 出火 开光 立碑 迁坟 谢土 造船 斋醮 针灸"
  },
  "10-21": {
    j: "馀事勿取",
    y: "安葬 祭祀 入殓 修坟 成服 除服 立碑 破土 迁坟"
  },
  "10-22": {
    j: "馀事勿取",
    y: "安葬 祭祀 入殓 移柩 成服 除服 结网 破土"
  },
  "10-23": {
    j: "结婚 理发 纳畜 架马 安葬 牧养 行丧 伐木 作梁",
    y: "搬家 签订合同 交易 搬新房 开业 动土 祈福 安床 挂匾 祭祀 拆卸 收养子女 开光 上梁"
  },
  "10-24": {
    j: "搬新房 安葬 出火 伐木",
    y: "合婚订婚 开业 买衣服 订盟 动土 买车 安床 安机械 祭祀 修造 拆卸 成人礼 开光 塑绘"
  },
  "10-25": {
    j: "结婚 搬家 搬新房 安葬 掘井",
    y: "出行 打扫 签订合同 交易 开业 动土 祈福 栽种 安床 纳畜 祭祀 牧养 开光 破土 上梁 竖柱"
  },
  "10-26": {
    j: "-",
    y: "会亲友 合婚订婚 开业 订盟 动土 栽种 纳畜 安葬 牧养 修造 拆卸 起基 入殓 移柩 成服 除服 雕刻 收养子女 破土"
  },
  "10-27": {
    j: "纳畜 合寿木 伐木 掘井",
    y: "结婚 出行 搬家 合婚订婚 签订合同 交易 搬新房 开业 订盟 动土 祈福 栽种 安床 安葬 挂匾 祭祀 修造 拆卸 入殓 出火 收养子女 开光 破土 求子 谢土"
  },
  "10-28": {
    j: "-",
    y: "打扫 合婚订婚 开业 订盟 动土 祈福 纳畜 安葬 牧养 造仓 放水 开生坟 起基 入殓 移柩 成服 除服 破土 求子"
  },
  "10-29": {
    j: "结婚 出行 搬家 搬新房 诉讼 纳畜 安葬 出火 收养子女 破土",
    y: "签订合同 交易 纳财 开业 动土 祈福 栽种 安床 挂匾 祭祀 拆卸 开光"
  },
  "10-3": {
    j: "赴任",
    y: "结婚 出行 搬家 合婚订婚 搬新房 开业 动土 安葬 破土 上梁"
  },
  "10-30": {
    j: "开仓 成人礼 伐木 作梁",
    y: "结婚 会亲友 出行 搬家 合婚订婚 签订合同 交易 搬新房 纳财 开业 赴任 买衣服 订盟 买车 祈福 安床 安葬 祭祀 修造 拆卸 入殓 安香 收养子女 开光 迁坟 上梁 塑绘 谢土 斋醮"
  },
  "10-31": {
    j: "结婚 出行 搬家 搬新房 出火 收养子女",
    y: "打扫 祈福 栽种 纳畜 安葬 祭祀 修造 拆卸 修坟 伐木 开光 立碑 求子"
  },
  "10-32": {
    j: "-",
    y: "出行 打扫 搬家 修造 拆卸 入殓 修坟 移柩 成服 除服 立碑 迁坟 塑绘 谢土 造船 斋醮"
  },
  "10-33": {
    j: "结婚 合婚订婚 搬新房 订盟 作灶",
    y: "安葬 祭祀 入殓 修坟 成服 除服 立碑 破土 迁坟 斋醮"
  },
  "10-34": {
    j: "结婚 搬新房 作灶 上梁",
    y: "安葬 打鱼 入殓 移柩 成服 除服 立碑 破土"
  },
  "10-35": {
    j: "结婚 安葬 合寿木 行丧 定磉",
    y: "打扫 理发 买车 祈福 栽种 沐浴 祭祀 牧养 治病 掘井 开池 开光 立碑 求子 斋醮"
  },
  "10-36": {
    j: "诸事不宜",
    y: "-"
  },
  "10-37": {
    j: "结婚 搬新房 买衣服 安床 上梁",
    y: "打扫 合婚订婚 签订合同 交易 纳财 开业 订盟 动土 祈福 栽种 纳畜 安葬 祭祀 造仓 起基 收养子女 开池 开光 破土 求子"
  },
  "10-38": {
    j: "结婚 开光",
    y: "动土 安葬 求医 治病 入殓 破土 上梁"
  },
  "10-39": {
    j: "搬新房 开业 诉讼 合寿木 掘井",
    y: "结婚 会亲友 合婚订婚 订盟 祈福 盖屋 安葬 安门 祭祀 求医 治病 起基 安装器具 成服 除服 开池 开光 破土 上梁 竖柱 斋醮 筑堤"
  },
  "10-4": {
    j: "结婚 搬新房 牧养 掘井",
    y: "出行 搬家 合婚订婚 签订合同 交易 开业 订盟 动土 祈福 栽种 安床 安机械 纳畜 安葬 祭祀 修造 拆卸 移柩 出火 收养子女 开光 破土 普渡 求子 上梁"
  },
  "10-40": {
    j: "开光 针灸",
    y: "结婚 搬家 合婚订婚 搬新房 订盟 动土 祈福 安葬 祭祀 求医 治病 破土"
  },
  "10-41": {
    j: "出行 栽种 纳畜 安葬 行丧 伐木 造庙 造桥",
    y: "结婚 打扫 搬家 合婚订婚 签订合同 交易 搬新房 开业 订盟 祈福 安床 挂匾 祭祀 出火 收养子女 开光 求子"
  },
  "10-42": {
    j: "安门 斋醮",
    y: "结婚 出行 搬家 合婚订婚 搬新房 开业 订盟 动土 祈福 安葬 祭祀 破土"
  },
  "10-43": {
    j: "结婚 搬家 搬新房 开业 出火",
    y: "会亲友 合婚订婚 订盟 动土 祈福 安机械 安葬 祭祀 修造 破土"
  },
  "10-44": {
    j: "诸事不宜",
    y: "打扫 馀事勿取 坏垣"
  },
  "10-45": {
    j: "结婚 搬新房 安葬 修造 行丧 造庙",
    y: "打扫 沐浴 祭祀 馀事勿取 补垣 断蚁 塞穴"
  },
  "10-46": {
    j: "诸事不宜",
    y: "安葬 入殓 移柩 成服 除服 结网 破土"
  },
  "10-47": {
    j: "结婚 祈福 安葬 破土",
    y: "出行 搬家 合婚订婚 签订合同 交易 纳财 开业 动土 修造 拆卸 起基 成人礼 出火 开光 求子 上梁 造船"
  },
  "10-48": {
    j: "-",
    y: "打扫 合婚订婚 动土 祈福 安床 安葬 祭祀 拆卸 入殓 移柩 成人礼 出火 收养子女 掘井 开池 开光 破土 求子 上梁 造庙"
  },
  "10-49": {
    j: "结婚 搬家 搬新房 出火",
    y: "会亲友 签订合同 交易 开业 动土 栽种 安机械 盖屋 开厕 安葬 安门 牧养 求医 修造 造畜稠 治病 作灶 放水 起基 开池 开光 立碑 破土 上梁 竖柱 定磉"
  },
  "10-5": {
    j: "安葬 定磉",
    y: "会亲友 签订合同 开业 赴任 动土 买车 安床 祭祀 拆卸 起基 成人礼 收养子女 开光 上梁 塑绘"
  },
  "10-50": {
    j: "结婚 搬家 搬新房 纳畜 祭祀 探病 出火 伐木",
    y: "签订合同 交易 纳财 开业 动土 栽种 安床 安葬 修造 拆卸 入殓 成服 除服 破土 上梁"
  },
  "10-51": {
    j: "结婚 开业 栽种 合寿木",
    y: "出行 搬家 合婚订婚 搬新房 订盟 动土 祈福 安机械 安葬 祭祀 修造 拆卸 起基 入殓 移柩 成服 出火 除服 破土 谢土 造庙 斋醮"
  },
  "10-52": {
    j: "出行 栽种 作灶 针灸",
    y: "结婚 搬家 签订合同 交易 搬新房 开业 动土 祈福 安床 纳畜 安葬 祭祀 拆卸 入殓 出火 伐木 开光"
  },
  "10-53": {
    j: "安葬 合寿木 行丧",
    y: "结婚 搬家 合婚订婚 搬新房 开业 订盟 动土 纳畜 挂匾 牧养 修造 造仓 拆卸 放水 起基 出火 雕刻 开池 开光 求子 上梁 造船"
  },
  "10-54": {
    j: "买房 纳畜 安葬 修坟 行丧 伐木 立碑 作梁",
    y: "结婚 出行 搬家 搬新房 开业 安床 祭祀 修造 拆卸 出火 开光"
  },
  "10-55": {
    j: "结婚 搬家 搬新房 开业 出火",
    y: "会亲友 打扫 求职入学 合婚订婚 签订合同 交易 纳财 订盟 动土 买车 祈福 栽种 纳畜 安葬 祭祀 牧养 起基 入殓 开池 开光 立碑 破土 求子 斋醮 定磉"
  },
  "10-56": {
    j: "诸事不宜",
    y: "打扫 房屋清洁 馀事勿取"
  },
  "10-57": {
    j: "结婚 开业 伐木 作梁",
    y: "安葬 入殓 修坟 移柩 成服 除服 立碑 迁坟"
  },
  "10-58": {
    j: "结婚 搬新房",
    y: "安葬 祭祀 移柩 馀事勿取 成服 除服 结网 破土 塞穴 谢土"
  },
  "10-59": {
    j: "结婚 安葬 伐木 造庙",
    y: "合婚订婚 签订合同 搬新房 纳财 开业 订盟 动土 沐浴 安门 祭祀 拆卸 起基 成人礼 安香 出火 开光 求子 上梁 竖柱 塑绘 合帐"
  },
  "10-6": {
    j: "纳畜 盖屋 起基 探病 伐木 作梁",
    y: "结婚 出行 搬家 合婚订婚 签订合同 交易 搬新房 开业 订盟 动土 祈福 栽种 安床 造车器 安葬 安门 挂匾 祭祀 修造 拆卸 入殓 成服 除服 开光 立碑 破土 迁坟"
  },
  "10-7": {
    j: "结婚 搬新房 赴任 治病",
    y: "会亲友 合婚订婚 签订合同 交易 纳财 开业 买衣服 订盟 买车 祈福 安床 安机械 纳畜 安葬 祭祀 造畜稠 入殓 移柩 成人礼 成服 除服 迁坟 上梁 竖柱 谢土 筑堤 合帐"
  },
  "10-8": {
    j: "动土 栽种 安床 伐木 破土 造桥 作梁",
    y: "结婚 出行 打扫 搬家 搬新房 祈福 纳畜 祭祀 入殓 修坟 开光 立碑 求子"
  },
  "10-9": {
    j: "伐木 破土",
    y: "安葬 入殓 移柩 馀事勿取 成服 除服 立碑 迁坟"
  },
  "11-0": {
    j: "结婚 搬家 搬新房 安葬 作灶",
    y: "栽种 沐浴 祭祀 除虫"
  },
  "11-1": {
    j: "结婚 搬新房",
    y: "纳财 纳畜 安门 祭祀 打鱼 馀事勿取"
  },
  "11-10": {
    j: "安床 开仓 盖屋 安葬",
    y: "结婚 纳财 祈福 祭祀 作灶 入殓 除虫 成服 除服 开光 塑绘 斋醮 打猎"
  },
  "11-11": {
    j: "结婚 开业 安葬 破土",
    y: "会亲友 出行 搬家 合婚订婚 搬新房 动土 祈福 祭祀 修造"
  },
  "11-12": {
    j: "开业 安葬 作灶 作梁",
    y: "结婚 纳财 买衣服 安床 入殓 成人礼 纳婿 合帐"
  },
  "11-13": {
    j: "结婚 安葬",
    y: "打扫 祭祀 馀事勿取 除虫"
  },
  "11-14": {
    j: "诸事不宜",
    y: "打扫 馀事勿取 结网"
  },
  "11-15": {
    j: "开业 安葬 修坟 掘井 破土",
    y: "祭祀 作灶 馀事勿取"
  },
  "11-16": {
    j: "开业 买车 安床 安葬 修坟 立碑 破土 迁坟",
    y: "纳财 栽种 纳畜 祭祀 作灶 收养子女"
  },
  "11-17": {
    j: "出行 安葬 行丧 掘井 破土",
    y: "结婚 会亲友 合婚订婚 签订合同 纳财 开业 买衣服 订盟 安床 安机械 纳畜 牧养 作灶 成人礼"
  },
  "11-18": {
    j: "搬新房 安葬 作灶 探病 伐木 开渠",
    y: "结婚 会亲友 理发 祭祀 入殓 移柩 收养子女 针灸"
  },
  "11-19": {
    j: "开业 动土 安葬 破土",
    y: "纳财 祭祀 作灶 馀事勿取 除虫 打猎"
  },
  "11-2": {
    j: "动土 安葬 破土",
    y: "结婚 出行 搬家 合婚订婚 搬新房"
  },
  "11-20": {
    j: "结婚 交易 开业 出货财 安床 安葬 作灶 修坟",
    y: "沐浴 祭祀 入殓 移柩 成服 除服 结网"
  },
  "11-21": {
    j: "开业 安葬 破土 斋醮",
    y: "房屋清洁 纳财 安床 沐浴 祭祀 作灶 除虫 打猎"
  },
  "11-22": {
    j: "诸事不宜",
    y: "打扫 祭祀 馀事勿取"
  },
  "11-23": {
    j: "搬新房 安葬 打鱼 作灶 伐木",
    y: "搬家 合婚订婚 买衣服 订盟 动土 祈福 安床 纳畜 安门 修造 造仓 拆卸 起基 成人礼 结网 开光 求子 塑绘"
  },
  "11-24": {
    j: "买房 纳畜 安葬 造畜稠 作灶 开生坟 伐木 破土 作梁",
    y: "结婚 理发 成人礼 收养子女"
  },
  "11-25": {
    j: "结婚 安床 馀事勿取 造庙",
    y: "祭祀"
  },
  "11-26": {
    j: "动土 安床 架马 安葬 祭祀 修造 修坟 伐木 破土",
    y: "出行 打扫 搬家 合婚订婚 搬新房 纳畜 牧养 作灶 成人礼 收养子女 上梁 竖柱"
  },
  "11-27": {
    j: "诸事不宜",
    y: "装修 祭祀 打鱼 馀事勿取 除虫"
  },
  "11-28": {
    j: "出行 开业 安床 安葬 开生坟 修坟 掘井 开渠 破土 造船",
    y: "交易 纳财 栽种 纳畜 祭祀 牧养 作灶 成人礼 结网 收养子女"
  },
  "11-29": {
    j: "-",
    y: "结婚 打扫 搬家 合婚订婚 签订合同 交易 搬新房 纳财 开业 订盟 动土 纳畜 安门 分居 牧养 修造 拆卸 起基 出火 开光 塑绘"
  },
  "11-3": {
    j: "出行 搬新房 安葬 掘井",
    y: "祭祀 馀事勿取 结网"
  },
  "11-30": {
    j: "开业 出货财 栽种 开仓 纳畜 盖屋 伐木 破土 迁坟 上梁",
    y: "结婚 会亲友 理发 祭祀 作灶 移柩 成人礼 收养子女"
  },
  "11-31": {
    j: "开业 动土 栽种 安葬",
    y: "祭祀 作灶 入殓 成服 除服 打猎"
  },
  "11-32": {
    j: "结婚 搬新房 开业 安床 修坟 破土",
    y: "打扫 房屋清洁 沐浴 馀事勿取 除虫 塞穴 打猎"
  },
  "11-33": {
    j: "开业 破土",
    y: "纳财 安床 沐浴 祭祀 除虫 打猎"
  },
  "11-34": {
    j: "结婚 搬新房 开业 安床 安葬 破土",
    y: "纳财 祭祀 除虫 斋醮 打猎"
  },
  "11-35": {
    j: "安葬 作灶 伐木 作梁",
    y: "合婚订婚 签订合同 交易 纳财 开业 买衣服 订盟 买车 安床 安机械 沐浴 纳畜 祭祀 打鱼 造仓 成人礼 除虫 酬神 结网 开池 求子 合帐"
  },
  "11-36": {
    j: "搬新房 盖屋 安葬 竖柱",
    y: "理发 签订合同 交易 纳财 栽种 打鱼 除虫 教牛马 结网 收养子女"
  },
  "11-37": {
    j: "诸事不宜",
    y: "打扫 馀事勿取 坏垣"
  },
  "11-38": {
    j: "结婚 开业 探病",
    y: "祭祀 馀事勿取 除虫 结网"
  },
  "11-39": {
    j: "诸事不宜",
    y: "栽种 祭祀 馀事勿取"
  },
  "11-4": {
    j: "开业 破土",
    y: "纳财 祭祀 作灶 除虫"
  },
  "11-40": {
    j: "开业 出货财 开仓 安葬 破土 迁坟",
    y: "结婚 会亲友 出行 打扫 搬家 求职入学 合婚订婚 搬新房 订盟 祈福 栽种 纳畜 盖屋 祭祀 牧养 拆卸 起基 安香 出火 开光 上梁 竖柱 塑绘 斋醮"
  },
  "11-41": {
    j: "动土 安葬",
    y: "合婚订婚 订盟 祈福 安机械 纳畜 祭祀 作灶"
  },
  "11-42": {
    j: "结婚 开业 盖屋 合寿木 作梁",
    y: "祭祀 成人礼 馀事勿取 除虫"
  },
  "11-43": {
    j: "诸事不宜",
    y: "祭祀 馀事勿取 塞穴"
  },
  "11-44": {
    j: "结婚 合婚订婚 订盟 动土 安床 安葬 破土",
    y: "房屋清洁 沐浴 祭祀 除虫 结网 打猎"
  },
  "11-45": {
    j: "结婚 搬新房 纳畜 安葬 安门 造畜稠 作灶 伐木 上梁 造船 作梁",
    y: "房屋清洁 理发 沐浴"
  },
  "11-46": {
    j: "开业 安床 安葬 修坟",
    y: "结婚 会亲友 合婚订婚 纳财 买衣服 订盟 祭祀 作灶 成人礼 问名 除虫 收养子女"
  },
  "11-47": {
    j: "结婚 纳畜 安葬 牧养 作灶 行丧 破土 作梁",
    y: "出行 打扫 搬家 雇庸 动土 祈福 安床 安门 祭祀 起基 收养子女 开光 上梁"
  },
  "11-48": {
    j: "纳财 开业 安葬 破土",
    y: "结婚 理发 栽种 成人礼 除虫 收养子女 针灸"
  },
  "11-49": {
    j: "诸事不宜",
    y: "打扫 破屋 馀事勿取"
  },
  "11-5": {
    j: "出行 纳畜 安葬 行丧 伐木 造桥 作梁",
    y: "结婚 会亲友 搬家 签订合同 交易 买衣服 动土 买车 祈福 栽种 安床 祭祀 修造 成人礼 收养子女 求子 上梁 竖柱"
  },
  "11-50": {
    j: "开业 动土 安葬 祭祀 探病 斋醮",
    y: "栽种 馀事勿取 除虫 打猎"
  },
  "11-51": {
    j: "诸事不宜",
    y: "祭祀 作灶 馀事勿取"
  },
  "11-52": {
    j: "搬新房 开业 动土 安床 安葬",
    y: "纳财 纳畜 祭祀 牧养 馀事勿取 除虫 收养子女"
  },
  "11-53": {
    j: "结婚 出行 搬家 理发 搬新房 动土 分居 安香 出火 破土",
    y: "打扫 签订合同 交易 纳财 纳畜 祭祀 收养子女 开光"
  },
  "11-54": {
    j: "搬新房 开业 动土 安门 修造 开光 破土",
    y: "结婚 祭祀 除虫"
  },
  "11-55": {
    j: "开业 安葬 修坟 立碑",
    y: "结婚 纳财 祭祀 作灶"
  },
  "11-56": {
    j: "安床 安葬 安门 修坟 破土",
    y: "会亲友 打扫 入殓 移柩 馀事勿取 除虫 成服 除服 打猎"
  },
  "11-57": {
    j: "结婚 交易 开业 动土 纳畜 安葬 开生坟 伐木 破土 作梁",
    y: "房屋清洁 美甲浴足 理发 安床 祭祀 作灶 教牛马 开光"
  },
  "11-58": {
    j: "开业 安床",
    y: "祭祀 作灶 入殓 馀事勿取 除服"
  },
  "11-59": {
    j: "结婚 开业 诉讼 纳畜 安葬 牧养 造畜稠 行丧 伐木 作梁",
    y: "理发 栽种 沐浴 祭祀 作灶 结网"
  },
  "11-6": {
    j: "搬家 搬新房 作灶",
    y: "结婚 会亲友 买衣服 祭祀 入殓 移柩 成人礼 除虫 成服 除服 收养子女 纳婿"
  },
  "11-7": {
    j: "结婚 开业 开厕 开池 破土",
    y: "会亲友 搬家 理发 纳财 祭祀 成人礼 除虫"
  },
  "11-8": {
    j: "诸事不宜",
    y: "房屋清洁 沐浴 馀事勿取"
  },
  "11-9": {
    j: "会亲友 搬家 搬新房 开业 安床 安葬 安门 作灶 行丧 出火",
    y: "房屋清洁 理发 纳财 栽种 沐浴 祭祀 除虫 结网 收养子女 打猎"
  },
  "2-0": {
    j: "搬新房 动土 修造 破土 斋醮",
    y: "交易 沐浴 安葬 祭祀 入殓 修坟 除虫 成服 除服 收养子女 迁坟 谢土"
  },
  "2-1": {
    j: "诸事不宜",
    y: "打扫 祭祀 馀事勿取"
  },
  "2-10": {
    j: "出货财 动土 栽种 开仓 安葬 行丧 伐木 开渠 破土",
    y: "出行 安床 造车器 盖屋 安门 祭祀 修造 造畜稠 教牛马 上梁"
  },
  "2-11": {
    j: "结婚 动土 安葬 作灶",
    y: "出行 沐浴 祭祀 成人礼 馀事勿取 收养子女"
  },
  "2-12": {
    j: "结婚 房屋清洁 搬家 搬新房 动土 分居 作灶 安香 出火 掘井 造桥",
    y: "造畜稠 教牛马"
  },
  "2-13": {
    j: "馀事勿取",
    y: "打扫 房屋清洁 祭祀 教牛马"
  },
  "2-14": {
    j: "搬家 搬新房 动土 祭祀 破土",
    y: "会亲友 合婚订婚 签订合同 安葬 入殓 移柩 迁坟 上梁 竖柱"
  },
  "2-15": {
    j: "动土 栽种 作灶 掘井",
    y: "结婚 出行 安床 安葬 祭祀 入殓 移柩 成人礼"
  },
  "2-16": {
    j: "动土 安葬 行丧 探病 开光 破土 作梁",
    y: "出行 打扫 祭祀 馀事勿取 教牛马"
  },
  "2-17": {
    j: "诸事不宜",
    y: "打扫 房屋清洁 馀事勿取"
  },
  "2-18": {
    j: "动土 开渠 破土 上梁 斋醮",
    y: "交易 纳财 祭祀"
  },
  "2-19": {
    j: "结婚 搬家 动土 诉讼 安葬 作灶 伐木 掘井 破土 作梁",
    y: "出行 交易 祭祀 造畜稠 割蜜"
  },
  "2-2": {
    j: "结婚 出行 搬家 搬新房 动土 祭祀 作灶 破土",
    y: "打扫 签订合同 交易 纳畜 安葬 入殓 移柩 伐木 开光 上梁 竖柱"
  },
  "2-20": {
    j: "开业 动土 安床 开仓 破土 上梁",
    y: "结婚 出行 房屋清洁 纳财 赴任 沐浴 纳畜 祭祀 成人礼 普渡"
  },
  "2-21": {
    j: "诸事不宜",
    y: "出行 房屋清洁 祭祀 馀事勿取"
  },
  "2-22": {
    j: "动土 安葬 破土 造船 造庙",
    y: "结婚 会亲友 搬家 合婚订婚 签订合同 交易 买房 开业 订盟 祈福 纳畜 盖屋 安门 祭祀 求医 治病 放水 除虫 合嵴 求子 上梁 竖柱"
  },
  "2-23": {
    j: "馀事勿取",
    y: "沐浴 祭祀"
  },
  "2-24": {
    j: "结婚 搬新房 动土 作灶 破土 造船",
    y: "买衣服 馀事勿取 教牛马 合帐"
  },
  "2-25": {
    j: "结婚 动土 安葬 开池",
    y: "打扫 祭祀 造畜稠 馀事勿取 教牛马 针灸"
  },
  "2-26": {
    j: "结婚 搬家 搬新房 祈福 祭祀",
    y: "会亲友 纳财 买衣服 入殓 成服 除服 合帐"
  },
  "2-27": {
    j: "搬家 搬新房 动土 祈福",
    y: "结婚 会亲友 出行 交易 开业 安葬 祭祀 移柩 成人礼 成服 除服 教牛马 迁坟 求子 斋醮"
  },
  "2-28": {
    j: "动土 安葬 掘井 开光 破土",
    y: "结婚 出行 打扫 房屋清洁 买衣服 安床 祭祀 成人礼 收养子女"
  },
  "2-29": {
    j: "结婚 出行 搬新房 动土 诉讼 安葬",
    y: "馀事勿取 断蚁 结网 塞穴 打猎"
  },
  "2-3": {
    j: "动土 栽种 作灶 掘井",
    y: "会亲友 出行 合婚订婚 签订合同 交易 开业 赴任 买衣服 订盟 祈福 安床 安葬 入殓 移柩 成服 酬神 除服 开光 立碑 迁坟 竖柱 塑绘"
  },
  "2-30": {
    j: "动土 破土 上梁",
    y: "安葬 祭祀 入殓 移柩 迁坟"
  },
  "2-31": {
    j: "搬家 搬新房 动土 栽种 安葬 作灶 行丧 伐木 破土 上梁",
    y: "结婚 出行 交易 纳财 买衣服 造车器 祭祀 造畜稠 成人礼 雕刻 教牛马"
  },
  "2-32": {
    j: "动土 作灶 破土",
    y: "结婚 出行 纳畜 安葬 祭祀 入殓 迁坟"
  },
  "2-33": {
    j: "买房 动土 掘井 破土",
    y: "出行 房屋清洁 沐浴 安葬 祭祀 馀事勿取"
  },
  "2-34": {
    j: "安葬 行丧",
    y: "造畜稠 作灶"
  },
  "2-35": {
    j: "结婚 开业 动土 安葬 破土",
    y: "出行 打扫 装修 成人礼 馀事勿取"
  },
  "2-36": {
    j: "搬新房 动土 馀事勿取 破土",
    y: "教牛马"
  },
  "2-37": {
    j: "结婚 出行 搬新房 动土 安葬 行丧 破土",
    y: "会亲友 打扫 祭祀 造畜稠 馀事勿取 教牛马"
  },
  "2-38": {
    j: "结婚 出行 搬新房 动土 祭祀 掘井 开渠",
    y: "打扫 签订合同 交易 纳财 买衣服 安床 纳畜 安葬 牧养 入殓 移柩 迁坟 上梁 竖柱"
  },
  "2-39": {
    j: "结婚 动土 起基 掘井 破土 定磉",
    y: "会亲友 出行 签订合同 交易 纳财 祭祀 成人礼"
  },
  "2-4": {
    j: "动土 修造 开光 破土",
    y: "装修 祭祀 馀事勿取"
  },
  "2-40": {
    j: "诸事不宜",
    y: "出行 装修 造畜稠 馀事勿取 教牛马"
  },
  "2-41": {
    j: "结婚 安葬",
    y: "会亲友 打扫 祭祀 馀事勿取 断蚁"
  },
  "2-42": {
    j: "诸事不宜",
    y: "打扫 祭祀 馀事勿取"
  },
  "2-43": {
    j: "动土 安葬 掘井 破土",
    y: "出行 造车器 盖屋 祭祀 修造 造畜稠 割蜜 教牛马 竖柱"
  },
  "2-44": {
    j: "买房 动土 安床 掘井 破土",
    y: "出行 打扫 搬家 纳财 祈福 纳畜 盖屋 安葬 安门 祭祀 牧养 入殓 开光 迁坟 求子 上梁"
  },
  "2-45": {
    j: "结婚 会亲友 搬新房 动土 修造 破土",
    y: "出行 祭祀"
  },
  "2-46": {
    j: "动土 安葬 开生坟 行丧 伐木 作梁",
    y: "结婚 会亲友 出行 搬家 纳财 买衣服 纳畜 祭祀 造畜稠 成人礼 上梁 竖柱"
  },
  "2-47": {
    j: "开业 动土 安葬 行丧 破土",
    y: "出行 沐浴 祭祀 馀事勿取"
  },
  "2-48": {
    j: "馀事勿取",
    y: "安葬 入殓 移柩 成服 除服 迁坟"
  },
  "2-49": {
    j: "动土 安葬 破土",
    y: "会亲友 打扫 祭祀 馀事勿取 教牛马"
  },
  "2-5": {
    j: "诸事不宜",
    y: "馀事勿取 结网 塞穴"
  },
  "2-50": {
    j: "诸事不宜",
    y: "签订合同 交易 纳财 买衣服 伐木 作梁"
  },
  "2-51": {
    j: "动土 栽种 安葬 修坟 探病 掘井",
    y: "结婚 会亲友 签订合同 交易 买衣服 祭祀 成人礼 收养子女 合帐"
  },
  "2-52": {
    j: "安葬 伐木 开光 破土",
    y: "出行 房屋清洁 祭祀 馀事勿取 教牛马"
  },
  "2-53": {
    j: "安葬 破土",
    y: "馀事勿取 断蚁 结网 塞穴"
  },
  "2-54": {
    j: "搬家 搬新房 动土 斋醮",
    y: "祭祀 馀事勿取 断蚁 教牛马"
  },
  "2-55": {
    j: "动土 安葬 治病 破土",
    y: "会亲友 纳财 开业 买衣服 买车 开仓 安机械 纳畜 祭祀 牧养 造畜稠 成人礼 教牛马 塑绘"
  },
  "2-56": {
    j: "动土 安床 安葬 合寿木 开生坟",
    y: "出行 房屋清洁 纳财 买衣服 纳畜 安门 祭祀 造畜稠 作灶 收养子女"
  },
  "2-57": {
    j: "动土 安葬 作灶 修坟 行丧",
    y: "出行 房屋清洁 交易 祈福 沐浴 祭祀 教牛马 求子"
  },
  "2-58": {
    j: "结婚 安葬 行丧 伐木 开渠 破土",
    y: "出行 打扫 搬家 搬新房 纳财 祈福 安床 纳畜 安门 祭祀 造畜稠 开光 求子 上梁"
  },
  "2-59": {
    j: "诸事不宜",
    y: "沐浴 祭祀 馀事勿取"
  },
  "2-6": {
    j: "动土 盖屋 破土 斋醮",
    y: "出行 馀事勿取 割蜜 教牛马"
  },
  "2-7": {
    j: "动土 安葬",
    y: "结婚 出行 打扫 搬家 合婚订婚 搬新房 祈福 祭祀"
  },
  "2-8": {
    j: "买房 动土 栽种 安床 掘井 破土",
    y: "结婚 出行 打扫 搬家 合婚订婚 搬新房 纳财 订盟 祈福 纳畜 安葬 祭祀 入殓 迁坟 求子 上梁 竖柱"
  },
  "2-9": {
    j: "搬家 搬新房 开业 动土 成人礼 上梁 竖柱",
    y: "出行 沐浴 祭祀 入殓 成服 除服"
  },
  "3-0": {
    j: "搬新房 安床 开仓 作灶",
    y: "结婚 会亲友 出行 房屋清洁 合婚订婚 纳财 赴任 买衣服 订盟 动土 祈福 栽种 沐浴 纳畜 祭祀 修造 入殓 移柩 成服 除服 伐木 开光 迁坟 上梁 竖柱 塑绘"
  },
  "3-1": {
    j: "安葬 行丧 伐木 斋醮 作梁",
    y: "结婚 出行 求职入学 合婚订婚 签订合同 交易 搬新房 订盟 动土 祈福 造车器 盖屋 归宁 安门 祭祀 求医 修造 治病 起基 安香 出火 上梁 竖柱 造庙"
  },
  "3-10": {
    j: "诸事不宜",
    y: "出行 赴任 沐浴 祭祀 馀事勿取"
  },
  "3-11": {
    j: "结婚 动土 栽种 作灶 掘井 造庙 造桥",
    y: "出行 打扫 房屋清洁 搬家 搬新房 安床 祭祀 修造 造畜稠 拆卸 出火 伐木 开光 作梁"
  },
  "3-12": {
    j: "开业",
    y: "结婚 搬家 美甲浴足 理发 求职入学 合婚订婚 搬新房 赴任 买衣服 订盟 祈福 沐浴 安葬 祭祀 治病 拆卸 入殓 修坟 移柩 成人礼 安香 开光 破土 迁坟 塑绘 谢土 斋醮 作梁"
  },
  "3-13": {
    j: "安葬 开生坟 行丧 破土",
    y: "会亲友 出行 搬家 合婚订婚 签订合同 交易 搬新房 开业 订盟 动土 祈福 栽种 安床 安机械 纳畜 造车器 盖屋 祭祀 修造 造畜稠 起基 安香 上梁"
  },
  "3-14": {
    j: "结婚 出行 买房 祭祀",
    y: "打扫 搬家 签订合同 交易 搬新房 开业 动土 栽种 安床 纳畜 安葬 挂匾 拆卸 出火 伐木 开光 上梁 作梁"
  },
  "3-15": {
    j: "结婚 纳畜 作灶 掘井 开光",
    y: "出行 搬家 签订合同 搬新房 开业 动土 祈福 安葬 祭祀 破土 斋醮"
  },
  "3-16": {
    j: "结婚 安葬 安门 作灶",
    y: "塞穴"
  },
  "3-17": {
    j: "结婚 搬家 搬新房 开业 安葬 掘井",
    y: "会亲友 打扫 房屋清洁 理发 栽种 沐浴 求医 造畜稠 治病 斋醮"
  },
  "3-18": {
    j: "结婚 安床 作灶 探病",
    y: "出行 签订合同 交易 搬新房 开业 动土 栽种 安葬 安门 挂匾 拆卸 修坟 移柩 收养子女 开光 破土 上梁"
  },
  "3-19": {
    j: "作灶 行丧 伐木 作梁",
    y: "结婚 会亲友 出行 求职入学 合婚订婚 搬新房 纳财 订盟 动土 栽种 安机械 造车器 开厕 安门 祭祀 牧养 修造 拆卸 起基 成人礼 安香 出火 开光 塑绘"
  },
  "3-2": {
    j: "出行 祭祀 作灶 上梁",
    y: "打扫 房屋清洁 搬家 合婚订婚 签订合同 交易 搬新房 纳财 买衣服 订盟 动土 沐浴 安葬 修造 拆卸 修坟 移柩 成人礼 成服 除服 伐木 破土 迁坟"
  },
  "3-20": {
    j: "-",
    y: "结婚 搬家 签订合同 交易 搬新房 开业 动土 祈福 栽种 纳畜 挂匾 祭祀 修造 拆卸 入殓 成服 出火 除服 收养子女 开光 迁坟 求子"
  },
  "3-21": {
    j: "结婚 出行 搬新房 开业 安门",
    y: "打扫 美甲浴足 理发 沐浴 安葬 祭祀 入殓 移柩 成人礼 破土 迁坟"
  },
  "3-22": {
    j: "安葬 作灶 行丧 伐木 作梁",
    y: "结婚 出行 打扫 房屋清洁 美甲浴足 理发 动土 安床 祭祀 放水 开池 开光 塑绘"
  },
  "3-23": {
    j: "结婚 动土 修坟 破土",
    y: "会亲友 出行 打扫 房屋清洁 搬家 搬新房 开业 买衣服 安机械 造车器 造畜稠 成人礼 雕刻 作梁"
  },
  "3-24": {
    j: "买房 安床",
    y: "结婚 出行 打扫 搬家 搬新房 动土 栽种 纳畜 安葬 修造 拆卸 成服 出火 除服 收养子女 掘井 开光"
  },
  "3-25": {
    j: "安葬 行丧 掘井 斋醮 作梁",
    y: "结婚 会亲友 出行 打扫 房屋清洁 合婚订婚 订盟 动土 买车 祈福 栽种 祭祀 牧养 求医 修造 造畜稠 治病 拆卸 起基 安香 出火 定磉"
  },
  "3-26": {
    j: "搬新房 安门 祭祀 谢土",
    y: "合婚订婚 签订合同 交易 纳财 开业 订盟 动土 沐浴 安葬 放水 起基 修坟 移柩 开光 立碑 破土 迁坟 塑绘 定磉"
  },
  "3-27": {
    j: "掘井",
    y: "结婚 会亲友 出行 合婚订婚 搬新房 买衣服 订盟 祈福 祭祀 放水 入殓 移柩 成人礼 安香 立碑 破土 求子 上梁 谢土 斋醮 合帐"
  },
  "3-28": {
    j: "结婚 安葬 作灶 掘井",
    y: "打扫 美甲浴足 馀事勿取 除虫 结网 塞穴 打猎"
  },
  "3-29": {
    j: "结婚 开业 安葬",
    y: "搬家 合婚订婚 搬新房 动土 求医 治病 开光 上梁"
  },
  "3-3": {
    j: "搬家 搬新房 作灶 出火 掘井",
    y: "结婚 出行 打扫 动土 祈福 栽种 安床 纳畜 安葬 祭祀 拆卸 起基 伐木 收养子女 开光 破土 迁坟 求子 上梁 谢土"
  },
  "3-30": {
    j: "动土 安床 开仓 盖屋 安葬 作灶",
    y: "结婚 出行 打扫 搬家 合婚订婚 搬新房 订盟 祈福 栽种 纳畜 祭祀 牧养 入殓 出火 开光 破土 求子"
  },
  "3-31": {
    j: "搬家 搬新房 安葬",
    y: "会亲友 出行 合婚订婚 订盟 祈福 安床 斋醮"
  },
  "3-32": {
    j: "出行 搬新房 开业 安床 作灶",
    y: "打扫 房屋清洁 动土 安机械 沐浴 盖屋 安葬 祭祀 修造 造畜稠 治病 拆卸 合寿木 开生坟 起基 入殓 移柩 开池 立碑 破土 迁坟"
  },
  "3-33": {
    j: "结婚 开业",
    y: "合婚订婚 订盟 动土 祈福 安葬 祭祀 修造 破土 上梁"
  },
  "3-34": {
    j: "安葬 作灶 行丧 伐木 造船 造庙",
    y: "结婚 出行 打扫 房屋清洁 美甲浴足 合婚订婚 开业 动土 安床 盖屋 祭祀 求医 修造 治病 起基 合嵴 上梁 定磉"
  },
  "3-35": {
    j: "结婚 搬新房",
    y: "理发 求职入学 习艺 沐浴 收养子女"
  },
  "3-36": {
    j: "买车 安床 作灶",
    y: "结婚 会亲友 出行 打扫 搬家 合婚订婚 签订合同 搬新房 开业 订盟 动土 祈福 栽种 盖屋 安葬 安门 挂匾 祭祀 求医 修造 治病 起基 收养子女 开光 求子"
  },
  "3-37": {
    j: "开业 安葬",
    y: "结婚 出行 祈福 纳畜 祭祀 求医 治病 上梁"
  },
  "3-38": {
    j: "出行 合婚订婚 开业 订盟 纳畜 安葬 祭祀 作灶 探病 谢土",
    y: "结婚 打扫 搬家 搬新房 动土 栽种 安床 修造 拆卸 入殓 修坟 成服 出火 除服 收养子女 开光"
  },
  "3-39": {
    j: "诉讼 掘井",
    y: "结婚 会亲友 出行 打扫 搬家 签订合同 交易 搬新房 开业 动土 安床 安葬 挂匾 祭祀 拆卸 出火 开光 破土 迁坟"
  },
  "3-4": {
    j: "结婚 栽种 安葬 作灶",
    y: "房屋清洁 祭祀 塞穴"
  },
  "3-40": {
    j: "结婚 安葬 安门 行丧",
    y: "打扫 房屋清洁 沐浴 祭祀 牧养 塞穴"
  },
  "3-41": {
    j: "结婚 出行 签订合同 纳财 开业 栽种 安葬 作灶",
    y: "打扫 搬家 搬新房 动土 祈福 安床 祭祀 修造 造畜稠 拆卸 出火 伐木 开光 求子"
  },
  "3-42": {
    j: "出行 开业 安床 安葬 作灶",
    y: "结婚 搬家 合婚订婚 搬新房 订盟 动土 祈福 造车器 祭祀 修造 治病"
  },
  "3-43": {
    j: "安葬 行丧 伐木 作梁",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 动土 祈福 栽种 安床 挂匾 祭祀 拆卸 出火 开光 求子"
  },
  "3-44": {
    j: "结婚 出行 合婚订婚 搬新房 作灶",
    y: "打扫 房屋清洁 求职入学 沐浴 祭祀 牧养 治病 开池 开光 塑绘"
  },
  "3-45": {
    j: "结婚 会亲友 出行 搬家 搬新房 赴任 作灶 收养子女",
    y: "打扫 房屋清洁 美甲浴足 理发 沐浴 安葬 祭祀 入殓 移柩 破土"
  },
  "3-46": {
    j: "安葬 行丧 伐木 造庙 针灸 作梁",
    y: "结婚 出行 搬家 合婚订婚 搬新房 订盟 动土 祈福 祭祀 修造"
  },
  "3-47": {
    j: "结婚 合婚订婚 动土 安葬 作灶 修坟 破土 造庙",
    y: "出行 打扫 搬家 祈福 安床 纳畜 祭祀 拆卸 出火 伐木 开光 求子"
  },
  "3-48": {
    j: "合婚订婚 开业 安床 安葬 开渠 造庙",
    y: "结婚 会亲友 出行 房屋清洁 搬家 理发 搬新房 动土 栽种 造车器 盖屋 归岫 安门 修造 造畜稠 拆卸 起基 安香 出火 雕刻 合嵴 开光"
  },
  "3-49": {
    j: "诉讼 安葬 作灶 行丧 伐木 塑绘",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 祈福 栽种 安床 挂匾 祭祀 拆卸 出火 求子"
  },
  "3-5": {
    j: "出行 合婚订婚 签订合同 开业 安葬 作灶 修坟",
    y: "结婚 会亲友 搬家 搬新房 祈福 造车器 盖屋 安门 祭祀 治病 起基 出火 掘井 开池 开光 求子 上梁 竖柱 斋醮"
  },
  "3-50": {
    j: "出行 盖屋 安葬 祭祀 探病 上梁 谢土",
    y: "会亲友 打扫 房屋清洁 搬家 求职入学 合婚订婚 签订合同 交易 搬新房 纳财 开业 订盟 安床 安门 挂匾 求医 治病 拆卸 合寿木 开生坟 入殓 修坟 安香 出火 破土 迁坟"
  },
  "3-51": {
    j: "-",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 动土 祈福 安床 安葬 挂匾 祭祀 拆卸 入殓 成服 出火 除服 收养子女 开光 破土 迁坟 求子 上梁"
  },
  "3-52": {
    j: "诸事不宜",
    y: "房屋清洁 馀事勿取 塞穴"
  },
  "3-53": {
    j: "出行 搬新房 盖屋 安葬 作灶 修坟 造桥",
    y: "打扫 房屋清洁 合婚订婚 订盟 祈福 栽种 纳畜 祭祀 牧养 收养子女 开光 求子"
  },
  "3-54": {
    j: "-",
    y: "结婚 出行 搬家 合婚订婚 搬新房 开业 架马 安葬 造畜稠 拆卸 入殓 移柩 成服 出火 除服 伐木 开光 造船 造庙 造桥"
  },
  "3-55": {
    j: "安葬 作灶 行丧 伐木 破土 斋醮",
    y: "结婚 出行 房屋清洁 搬家 合婚订婚 签订合同 纳财 开业 订盟 动土 祈福 栽种 安床 祭祀 修造 造畜稠 拆卸 放水 起基 安香 掘井 开池 竖柱 造船 定磉"
  },
  "3-56": {
    j: "出行 开业 买车 安床 斋醮",
    y: "结婚 会亲友 搬家 搬新房 祈福 盖屋 祭祀 治病 起基 安香"
  },
  "3-57": {
    j: "结婚 出行 搬家 搬新房 赴任 栽种 作灶 收养子女",
    y: "打扫 动土 安床 安门 祭祀 修造 拆卸 起基 入殓 开池 开渠 破土 迁坟 上梁"
  },
  "3-58": {
    j: "安葬 安门 行丧 造庙",
    y: "出行 打扫 搬家 合婚订婚 搬新房 开业 动土 栽种 安床 开厕 修造 起基 成人礼 雕刻 合嵴 上梁"
  },
  "3-59": {
    j: "结婚 动土 诉讼 安葬 作灶 行丧 破土 造桥",
    y: "出行 打扫 理发 安床 祭祀 造畜稠 拆卸 出火 伐木 合嵴 开光 上梁"
  },
  "3-6": {
    j: "搬家 搬新房",
    y: "结婚 出行 合婚订婚 订盟 动土 祈福 安葬 祭祀 破土 上梁 斋醮"
  },
  "3-7": {
    j: "安葬 开生坟 行丧",
    y: "结婚 出行 打扫 搬家 签订合同 交易 搬新房 纳财 动土 祈福 栽种 安床 纳畜 挂匾 祭祀 修造 造畜稠 拆卸 出火 收养子女 开光 求子"
  },
  "3-8": {
    j: "搬新房 开业",
    y: "结婚 祈福 安葬 祭祀 治病 破土 斋醮"
  },
  "3-9": {
    j: "结婚 出行 搬家 搬新房 开业 赴任 诉讼 出火 收养子女 开光",
    y: "打扫 动土 祈福 安床 纳畜 盖屋 安葬 祭祀 修造 起基 入殓 合嵴 破土 求子 上梁 竖柱"
  },
  "4-0": {
    j: "结婚 出行 搬新房 开业 动土 祈福 安门 修坟 上梁 谢土",
    y: "会亲友 理发 合婚订婚 买衣服 订盟 安床 沐浴 安葬 开生坟 移柩 成人礼 成服 除服 迁坟"
  },
  "4-1": {
    j: "结婚 搬家 搬新房 安门",
    y: "会亲友 理发 补垣 结网 塞穴"
  },
  "4-10": {
    j: "搬新房 开业 动土 祈福 安床 开仓 安葬 作灶 破土 上梁",
    y: "结婚 会亲友 理发 买车 栽种 沐浴 牧养 补垣 开光 塞穴 塑绘"
  },
  "4-11": {
    j: "诸事不宜",
    y: "-"
  },
  "4-12": {
    j: "搬新房 出火 上梁 谢土 斋醮",
    y: "会亲友 打扫 搬家 求职入学 合婚订婚 签订合同 交易 开业 出货财 订盟 安床 开仓 纳畜 开厕 安葬 牧养 起基 入殓 问名 成服 除服 迁坟"
  },
  "4-13": {
    j: "诸事不宜",
    y: "-"
  },
  "4-14": {
    j: "结婚 搬新房 开业 动土 祈福 出火 破土",
    y: "会亲友 合婚订婚 订盟 栽种 安机械 纳畜 盖屋 安葬 修造 造畜稠 起基 入殓 修坟 移柩 开光 立碑 迁坟 上梁 竖柱 造桥"
  },
  "4-15": {
    j: "搬新房 动土 祈福 安葬 安门 修造 作灶 探病 掘井 上梁",
    y: "结婚 合婚订婚 签订合同 交易 纳财 开业 安床 纳畜 打鱼 补垣 开池"
  },
  "4-16": {
    j: "开业 动土 安葬 破土",
    y: "会亲友 理发 成人礼 除虫 结网 开光 求子"
  },
  "4-17": {
    j: "结婚 出行 安葬 斋醮",
    y: "会亲友 理发 求职入学 合婚订婚 签订合同 交易 纳财 开业 买衣服 买车 祈福 安床 安机械 架马 安门 祭祀 造仓 成人礼 开光 开柱眼 求子 塑绘 作梁 合帐"
  },
  "4-18": {
    j: "开业 动土 祈福 修造 破土 谢土",
    y: "结婚 会亲友 出行 打扫 合婚订婚 交易 订盟 安床 纳畜 安葬 牧养 入殓 移柩 成服 除服 收养子女 迁坟 求子"
  },
  "4-19": {
    j: "动土 诉讼 安葬 伐木 塞穴 上梁",
    y: "会亲友 收养子女"
  },
  "4-2": {
    j: "结婚 搬新房 动土 祈福 出火 破土",
    y: "会亲友 出行 打扫 合婚订婚 签订合同 交易 开业 订盟 安床 安机械 盖屋 安葬 安门 拆卸 起基 入殓 修坟 移柩 成服 除服 伐木 立碑 铺路 迁坟 上梁 竖柱"
  },
  "4-20": {
    j: "出货财 动土 安床 作灶 破土",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 架马 安葬 挂匾 修造 合寿木 开生坟 起基 入殓 移柩 成人礼 安香 成服 出火 除服 伐木 开光 开柱眼 求子"
  },
  "4-21": {
    j: "搬家 搬新房 动土 祈福 栽种 修造 作灶 上梁",
    y: "结婚 打扫 房屋清洁 理发 开业 安床 安葬 牧养 入殓 移柩 开光 迁坟"
  },
  "4-22": {
    j: "开业 动土 祈福 安葬 行丧",
    y: "结婚 会亲友 买衣服 买车 栽种 纳畜 牧养 成人礼 补垣 除虫 收养子女 塞穴 塑绘"
  },
  "4-23": {
    j: "结婚 理发 乘船 安葬 作灶 行丧",
    y: "出行 搬家 签订合同 交易 搬新房 开业 安床 挂匾 出火 开光 上梁"
  },
  "4-24": {
    j: "结婚 出行 搬家 搬新房 祈福",
    y: "会亲友 理发 签订合同 交易 纳财 开业 安床 沐浴 成人礼 教牛马 结网"
  },
  "4-25": {
    j: "结婚 出行 搬家 搬新房 动土 祈福 栽种 安葬 成人礼 出火 伐木 上梁",
    y: "会亲友 理发 买衣服 安床 安门 结网 开光"
  },
  "4-26": {
    j: "结婚 搬家 搬新房 祈福 出火",
    y: "会亲友 房屋清洁 签订合同 交易 纳财 开业 动土 买车 栽种 安床 安葬 祭祀 牧养 求医 修造 治病 拆卸 合寿木 开生坟 入殓 安香 收养子女 迁坟"
  },
  "4-27": {
    j: "搬新房 动土 祈福 修造 作灶 掘井 上梁 谢土",
    y: "结婚 出行 理发 签订合同 交易 纳财 开业 安床 安葬 牧养 修坟 开池 迁坟"
  },
  "4-28": {
    j: "安床 安葬 作灶 斋醮",
    y: "合婚订婚 搬新房 开仓 祭祀 问名 求子 合帐"
  },
  "4-29": {
    j: "结婚 出行 搬家 搬新房 赴任 动土 诉讼 安葬 行丧 破土 谢土",
    y: "签订合同 交易 纳财 开业 安床 盖屋 修造 起基 开光 上梁"
  },
  "4-3": {
    j: "-",
    y: "结婚 会亲友 出行 合婚订婚 买衣服 订盟 安床 安葬 祭祀 入殓 收养子女 迁坟"
  },
  "4-30": {
    j: "结婚 动土 破土",
    y: "会亲友 开业 安床 安葬 祭祀 迁坟"
  },
  "4-31": {
    j: "结婚 出行 动土 栽种 安葬 修造 伐木 谢土 作梁",
    y: "合婚订婚 买衣服 安床 造仓 作灶 成人礼 收养子女 开光 塞穴"
  },
  "4-32": {
    j: "动土 破土",
    y: "结婚 出行 搬家 合婚订婚 搬新房 开业 安葬 求医 治病 迁坟"
  },
  "4-33": {
    j: "搬新房 动土 祈福 祭祀 修造 破土 上梁 斋醮",
    y: "结婚 出行 合婚订婚 签订合同 交易 开业 订盟 栽种 安床 造车器 牧养 拆卸 起基 入殓 移柩 成服 除服 开光 迁坟"
  },
  "4-34": {
    j: "开业 安葬",
    y: "会亲友 出行 搬家 合婚订婚 搬新房 订盟 修造 上梁"
  },
  "4-35": {
    j: "结婚 动土 安葬 作灶 行丧 破土 斋醮",
    y: "搬家 合婚订婚 签订合同 交易 搬新房 纳财 开业 订盟 栽种 安床 安门 挂匾 修造 拆卸 出火 收养子女 开光"
  },
  "4-36": {
    j: "开业 动土 破土",
    y: "会亲友 安葬 开光 迁坟 针灸"
  },
  "4-37": {
    j: "结婚 出行 搬新房 开业 动土 祈福 安葬 作灶 上梁 谢土",
    y: "会亲友 理发 祭祀 牧养 造畜稠 结网 开池 塑绘 打猎"
  },
  "4-38": {
    j: "结婚 祈福",
    y: "打扫 签订合同 开业 安机械 安葬 开光 迁坟 上梁"
  },
  "4-39": {
    j: "搬新房 动土 诉讼 祈福 安门 挂匾 作灶 掘井 开池 破土 上梁 作梁",
    y: "结婚 出行 签订合同 交易 纳财 栽种 安床 安葬 起基 入殓 移柩"
  },
  "4-4": {
    j: "结婚 开业 动土 安葬 作灶",
    y: "会亲友 买车 祈福 安床 安机械 祭祀 成人礼 求子"
  },
  "4-40": {
    j: "搬家 签订合同 交易 搬新房 开业 动土 安葬 分居 作灶 安香 出火 伐木",
    y: "结婚 会亲友 安床 牧养 开光 求子 塑绘 针灸"
  },
  "4-41": {
    j: "搬家 搬新房 栽种",
    y: "会亲友 理发 签订合同 交易 纳财 开业 安床 造仓 结网 开光 针灸"
  },
  "4-42": {
    j: "搬新房 祈福 安门 修造 作灶 上梁 谢土 斋醮",
    y: "结婚 会亲友 出行 理发 合婚订婚 开业 栽种 安床 牧养 入殓 移柩 开光 迁坟"
  },
  "4-43": {
    j: "开业 动土 安葬 作灶 行丧",
    y: "结婚 会亲友 合婚订婚 订盟 买车 安机械 祭祀 成人礼 结网 收养子女 求子"
  },
  "4-44": {
    j: "买房 安床",
    y: "出行 打扫 搬家 签订合同 交易 搬新房 开业 栽种 安葬 牧养 修造 拆卸 起基 入殓 成服 出火 除服 伐木 开光 求子 上梁"
  },
  "4-45": {
    j: "搬新房 安葬 安门 行丧 破土 斋醮",
    y: "出行 打扫 房屋清洁 搬家 签订合同 交易 纳财 开业 出货财 祈福 栽种 安床 开仓 纳畜 祭祀 牧养 起基 补垣 开光 求子 塞穴 竖柱"
  },
  "4-46": {
    j: "结婚 签订合同 交易 纳财 开业 动土 祈福 安葬 修造 上梁",
    y: "栽种 纳畜 牧养 补垣 收养子女 开光 塞穴 塑绘"
  },
  "4-47": {
    j: "结婚 动土 安葬 造桥",
    y: "出行 搬家 签订合同 交易 开业 安机械 出火 上梁"
  },
  "4-48": {
    j: "结婚 出行 搬家 搬新房 祈福 安床 作灶 出火 上梁",
    y: "会亲友 理发 签订合同 交易 纳财 开业 安葬 入殓 移柩 开光 迁坟"
  },
  "4-49": {
    j: "结婚 开业 祈福 安葬 斋醮",
    y: "会亲友 买衣服 买车 安机械 结网 塞穴 塑绘"
  },
  "4-5": {
    j: "结婚 出行 搬新房 安葬",
    y: "会亲友 打扫 签订合同 交易 纳财 开业 买衣服 开仓 安机械 盖屋 造仓 拆卸 成人礼 伐木 开光 上梁 竖柱 塑绘"
  },
  "4-50": {
    j: "结婚 搬家 搬新房 祈福 盖屋 祭祀 作灶 探病 掘井 谢土",
    y: "打扫 理发 签订合同 交易 开业 栽种 安床 安葬 挂匾 修造 拆卸 开光"
  },
  "4-51": {
    j: "搬新房 开业 动土 开光",
    y: "结婚 会亲友 出行 打扫 求职入学 合婚订婚 签订合同 交易 纳财 习艺 出货财 订盟 买车 祈福 安床 开仓 纳畜 安葬 祭祀 入殓 修坟 迁坟 求子"
  },
  "4-52": {
    j: "搬家 搬新房 安葬 治病 作灶",
    y: "结婚 会亲友 出行 合婚订婚 祈福 安床 安机械 盖屋 安门 祭祀 牧养 修造 起基 成人礼 开光 上梁 打猎"
  },
  "4-53": {
    j: "出行 搬新房 安葬 作灶",
    y: "会亲友 打扫 合婚订婚 签订合同 交易 纳财 开业 买衣服 订盟 买车 栽种 安床 安机械 成人礼 结网 开光 上梁 竖柱 塑绘 合帐"
  },
  "4-54": {
    j: "买房 搬新房 动土 祈福 安葬 修造 出火 破土 上梁",
    y: "结婚 出行 理发 交易 开业 安床 开光 塞穴"
  },
  "4-55": {
    j: "诸事不宜",
    y: "买房 牧养 馀事勿取 结网 收养子女 塞穴"
  },
  "4-56": {
    j: "合婚订婚 订盟 动土 安床 破土 谢土",
    y: "结婚 出行 打扫 房屋清洁 搬家 搬新房 纳财 开业 祈福 栽种 盖屋 安葬 祭祀 修造 造仓 作灶 拆卸 放水 起基 安香 补垣 出火 开光 塞穴 上梁 竖柱 造船"
  },
  "4-57": {
    j: "-",
    y: "结婚 出行 签订合同 交易 买衣服 安葬 牧养 造畜稠 开生坟 入殓 移柩 成人礼 成服 除服 收养子女 纳婿 迁坟 塑绘"
  },
  "4-58": {
    j: "动土 祈福 安葬 祭祀 作灶 行丧 伐木 破土 谢土",
    y: "会亲友 出行 打扫 搬家 合婚订婚 搬新房 订盟 买车 栽种 安床 安机械 纳畜 修造 拆卸 安香 出火 开光 上梁"
  },
  "4-59": {
    j: "-",
    y: "出行 打扫 开业 买衣服 开厕 挂匾 作灶 成人礼 补垣 开池 开光 塞穴 塑绘"
  },
  "4-6": {
    j: "搬新房 动土 祈福 盖屋 探病 破土",
    y: "结婚 会亲友 出行 合婚订婚 开业 安床 安葬 祭祀 移柩 成服 除服 结网 开光 迁坟 塑绘"
  },
  "4-7": {
    j: "开业 安葬",
    y: "会亲友 合婚订婚 订盟 安床 造畜稠 作灶"
  },
  "4-8": {
    j: "结婚 动土 安床 作灶 破土 造船",
    y: "打扫 房屋清洁 合婚订婚 开业 祈福 安机械 沐浴 归岫 安葬 祭祀 修造 拆卸 放水 合寿木 开生坟 安装器具 补垣 成服 出火 除服 开柱眼 迁坟 求子 塞穴 上梁 竖柱 谢土"
  },
  "4-9": {
    j: "动土 祈福 破土",
    y: "结婚 出行 开业 安床 安葬 入殓 迁坟"
  },
  "5-0": {
    j: "结婚 搬新房 安门 上梁",
    y: "装修 祈福 祭祀 入殓 移柩 铺路"
  },
  "5-1": {
    j: "结婚 求职入学 交易 搬新房 开业 安葬",
    y: "打扫 装修 祭祀 造畜稠 馀事勿取 铺路"
  },
  "5-10": {
    j: "买房 出货财 动土 栽种 开仓 安葬 掘井 破土",
    y: "结婚 买衣服 沐浴 祭祀 成人礼 结网"
  },
  "5-11": {
    j: "结婚 祈福 栽种 安葬 安门 伐木 造桥 作梁",
    y: "理发 装修 沐浴 祭祀 作灶 铺路"
  },
  "5-12": {
    j: "结婚 搬家 搬新房 开业",
    y: "沐浴 入殓 移柩 成服 除服 铺路 破土"
  },
  "5-13": {
    j: "结婚 开业",
    y: "祭祀 馀事勿取 铺路"
  },
  "5-14": {
    j: "结婚 买房 动土 祈福 栽种 祭祀 作灶 破土",
    y: "出行 搬家 签订合同 交易 搬新房 纳财 开业 安床 纳畜 安葬 挂匾 入殓 移柩 开光"
  },
  "5-15": {
    j: "结婚 搬家 搬新房 安葬 掘井",
    y: "祭祀 修坟 馀事勿取 成服 除服 铺路"
  },
  "5-16": {
    j: "馀事勿取",
    y: "打扫 装修 祭祀 铺路"
  },
  "5-17": {
    j: "结婚 祈福 安葬 掘井",
    y: "祭祀 馀事勿取 铺路"
  },
  "5-18": {
    j: "搬新房 栽种 盖屋 作灶",
    y: "结婚 安葬 祭祀 纳婿"
  },
  "5-19": {
    j: "结婚 动土 安床 安葬 治病",
    y: "祭祀 作灶 馀事勿取 铺路"
  },
  "5-2": {
    j: "治病 作灶 伐木 作梁",
    y: "会亲友 出行 搬家 合婚订婚 签订合同 交易 搬新房 纳财 开业 赴任 买衣服 订盟 动土 买车 祈福 安床 开仓 安葬 祭祀 修造 拆卸 起基 入殓 移柩 安香 成服 除服 收养子女 上梁 竖柱 谢土"
  },
  "5-20": {
    j: "结婚 搬家 祈福 安床 盖屋 祭祀 伐木 作梁",
    y: "房屋清洁 沐浴 安葬 入殓 成服 除服 铺路 破土"
  },
  "5-21": {
    j: "出行 治病 合寿木 斋醮",
    y: "结婚 房屋清洁 美甲浴足 理发 装修 沐浴 祭祀 作灶 铺路"
  },
  "5-22": {
    j: "诸事不宜",
    y: "打扫 祭祀 馀事勿取"
  },
  "5-23": {
    j: "结婚 动土 安葬 安门",
    y: "出行 搬家 合婚订婚 买衣服 订盟 沐浴 纳畜 牧养 上梁 竖柱"
  },
  "5-24": {
    j: "诸事不宜",
    y: "装修 沐浴 祭祀 馀事勿取 铺路"
  },
  "5-25": {
    j: "结婚 开业 安床 掘井",
    y: "装修 祭祀 造畜稠 馀事勿取 铺路"
  },
  "5-26": {
    j: "祈福 祭祀 作灶 伐木 掘井 谢土",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 动土 栽种 安床 修造 拆卸 出火 开光 上梁"
  },
  "5-27": {
    j: "搬新房 动土 安门 修造 破土 上梁",
    y: "祭祀 入殓 移柩 馀事勿取"
  },
  "5-28": {
    j: "搬家 搬新房 栽种 治病 掘井 开池 造庙 针灸",
    y: "打扫 馀事勿取 铺路"
  },
  "5-29": {
    j: "祈福 安葬 安门 祭祀 馀事勿取",
    y: "作灶 铺路"
  },
  "5-3": {
    j: "结婚 合婚订婚 搬新房 订盟 掘井",
    y: "安葬 祭祀 馀事勿取 成服 除服 铺路"
  },
  "5-30": {
    j: "签订合同 交易 开业 出货财 栽种 开仓 盖屋 作灶",
    y: "结婚 买房 装修 祈福 祭祀 成人礼 铺路"
  },
  "5-31": {
    j: "结婚 安葬",
    y: "祭祀 作灶 掘井 铺路"
  },
  "5-32": {
    j: "祈福 安床 安葬 祭祀 伐木",
    y: "结婚 出行 搬家 理发 合婚订婚 签订合同 交易 开业 买衣服 动土 栽种 纳畜 挂匾 修造 收养子女 上梁"
  },
  "5-33": {
    j: "安葬 行丧",
    y: "结婚 房屋清洁 装修 沐浴 祭祀"
  },
  "5-34": {
    j: "动土 治病 开渠 破土",
    y: "结婚 祭祀 结网 打猎"
  },
  "5-35": {
    j: "结婚 祈福 馀事勿取",
    y: "装修 沐浴 铺路"
  },
  "5-36": {
    j: "结婚 出行 搬新房 安床",
    y: "装修 沐浴 祭祀 馀事勿取 铺路"
  },
  "5-37": {
    j: "馀事勿取",
    y: "祭祀 造畜稠 结网"
  },
  "5-38": {
    j: "安葬 作灶 修坟 行丧 探病 伐木 谢土 造庙 作梁",
    y: "会亲友 出行 搬家 签订合同 交易 装修 搬新房 纳财 开业 出货财 买衣服 动土 买车 拆卸 安香 收养子女 铺路"
  },
  "5-39": {
    j: "诸事不宜",
    y: "馀事勿取 铺路"
  },
  "5-4": {
    j: "结婚 搬家 搬新房 开光",
    y: "装修 入殓 移柩 馀事勿取 铺路"
  },
  "5-40": {
    j: "结婚 出货财 开仓 安葬 探病 开光 造船",
    y: "馀事勿取 铺路"
  },
  "5-41": {
    j: "出行 祈福 栽种 纳畜 安葬 安门 牧养 行丧 伐木 作梁",
    y: "打扫 作灶 铺路"
  },
  "5-42": {
    j: "开业 盖屋 治病 作灶",
    y: "结婚 会亲友 签订合同 交易 买房 纳财 安机械 成人礼"
  },
  "5-43": {
    j: "诸事不宜",
    y: "打扫 装修 祭祀 馀事勿取 铺路"
  },
  "5-44": {
    j: "结婚 搬新房 祈福 安床 作灶",
    y: "房屋清洁 搬家 沐浴 安葬 祭祀 铺路 破土"
  },
  "5-45": {
    j: "结婚 出行 搬新房 安门 修造 上梁",
    y: "房屋清洁 美甲浴足 理发 装修 沐浴 祭祀 铺路"
  },
  "5-46": {
    j: "结婚 开业 动土 安葬 修造 破土",
    y: "装修 祭祀 铺路"
  },
  "5-47": {
    j: "诸事不宜",
    y: "装修 沐浴 作灶 馀事勿取 铺路"
  },
  "5-48": {
    j: "结婚 出行 搬家 搬新房 上梁 斋醮",
    y: "装修 沐浴 祭祀 馀事勿取 铺路"
  },
  "5-49": {
    j: "诸事不宜",
    y: "造畜稠 馀事勿取 铺路"
  },
  "5-5": {
    j: "祈福 安葬 安门 祭祀",
    y: "打扫 作灶 馀事勿取 铺路"
  },
  "5-50": {
    j: "开仓 盖屋 祭祀 造桥",
    y: "会亲友 出行 搬家 合婚订婚 签订合同 交易 装修 搬新房 纳财 开业 动土 开厕 修造 起基 安香 出火 开池 铺路 竖柱 造庙 定磉"
  },
  "5-51": {
    j: "诸事不宜",
    y: "装修 祭祀 馀事勿取"
  },
  "5-52": {
    j: "搬家 搬新房 安葬 治病 作灶 造庙",
    y: "结婚 会亲友 买衣服 祭祀 成人礼 结网 收养子女 铺路"
  },
  "5-53": {
    j: "诸事不宜",
    y: "装修 祭祀 馀事勿取 铺路"
  },
  "5-54": {
    j: "搬新房 动土 安床 作灶 开光",
    y: "结婚 祭祀 入殓 移柩 成服 除服 纳婿"
  },
  "5-55": {
    j: "结婚 安床 治病",
    y: "装修 祭祀 作灶 馀事勿取 结网 铺路 打猎"
  },
  "5-56": {
    j: "会亲友 搬家 开业 动土 纳畜 安葬 修造 起基 入殓 修坟 移柩 成服 除服 收养子女 立碑 破土",
    y: "结婚 出行 开光"
  },
  "5-57": {
    j: "出行 栽种 破土",
    y: "结婚 美甲浴足 理发 装修 沐浴 祭祀 作灶 成人礼 铺路"
  },
  "5-58": {
    j: "馀事勿取",
    y: "结婚 祭祀 打鱼 成人礼 除虫 结网 打猎"
  },
  "5-59": {
    j: "结婚 买房 诉讼 祈福 栽种 安葬 安门 治病 伐木 作梁",
    y: "装修 沐浴 祭祀 作灶 铺路"
  },
  "5-6": {
    j: "盖屋 治病 作灶 探病",
    y: "装修 入殓 移柩 成人礼 成服 除服 铺路"
  },
  "5-7": {
    j: "搬新房 栽种 安床 安装器具",
    y: "祭祀 作灶 馀事勿取 铺路"
  },
  "5-8": {
    j: "诸事不宜",
    y: "房屋清洁 沐浴 安葬 入殓 移柩 馀事勿取 铺路 破土 迁坟"
  },
  "5-9": {
    j: "出行 搬新房 开业 诉讼 修造",
    y: "美甲浴足 理发 装修 沐浴 祭祀 馀事勿取 铺路"
  },
  "6-0": {
    j: "开业 开仓 作灶 造船 斋醮",
    y: "结婚 出行 打扫 搬家 签订合同 交易 搬新房 动土 祈福 安床 安葬 祭祀 修造 拆卸 入殓 安香 成服 出火 除服 收养子女 开光 破土 求子 谢土"
  },
  "6-1": {
    j: "搬新房 伐木",
    y: "结婚 会亲友 出行 合婚订婚 签订合同 交易 开业 赴任 买衣服 动土 买车 安葬 祭祀 修造 入殓 移柩 安香 成服 除服 收养子女 开光 上梁 塑绘 斋醮"
  },
  "6-10": {
    j: "开仓 盖屋 架马 作灶 开光",
    y: "结婚 出行 搬家 合婚订婚 签订合同 搬新房 动土 祈福 安葬 祭祀 破土"
  },
  "6-11": {
    j: "结婚 买房 栽种 安葬 修坟 行丧 破土",
    y: "搬家 签订合同 交易 搬新房 开业 动土 祈福 安床 修造 拆卸 出火 收养子女 开光 求子"
  },
  "6-12": {
    j: "签订合同 买房 开业 作灶 造桥",
    y: "结婚 出行 搬家 合婚订婚 搬新房 订盟 动土 祈福 安机械 盖屋 安葬 安门 祭祀 修造 起基 开光 破土 普渡 上梁 竖柱 斋醮 定磉"
  },
  "6-13": {
    j: "-",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 动土 祈福 栽种 安床 沐浴 纳畜 安葬 祭祀 修造 拆卸 入殓 成服 出火 除服 收养子女 迁坟 求子"
  },
  "6-14": {
    j: "交易 搬新房 开业 安葬 祭祀",
    y: "馀事勿取 除虫 打猎"
  },
  "6-15": {
    j: "-",
    y: "结婚 出行 打扫 搬家 搬新房 动土 祈福 栽种 安床 纳畜 安葬 祭祀 修造 拆卸 入殓 成服 出火 除服 收养子女 开光 立碑 求子"
  },
  "6-16": {
    j: "合婚订婚 开业 订盟 买车 作灶 造船 造庙",
    y: "结婚 出行 搬家 求职入学 搬新房 动土 祈福 盖屋 安葬 安门 祭祀 修造 造畜稠 起基 成人礼 安香 成服 出火 除服 雕刻 掘井 开光 破土 求子 上梁 竖柱"
  },
  "6-17": {
    j: "出行 搬新房 开业 栽种 安葬 安门 作灶 掘井",
    y: "结婚 会亲友 动土 祈福 纳畜 开厕 祭祀 牧养 造仓 起基 收养子女 求子"
  },
  "6-18": {
    j: "买房 盖屋 安门 作灶 探病 合嵴 开光",
    y: "结婚 搬家 合婚订婚 搬新房 开业 动土 祈福 安机械 安葬 修造 入殓 移柩 成服 除服 伐木 破土 求子 谢土 造庙 斋醮"
  },
  "6-19": {
    j: "伐木 作梁",
    y: "会亲友 出行 搬家 求职入学 签订合同 搬新房 买衣服 订盟 买车 安机械 安葬 安门 祭祀 拆卸 放水 起基 入殓 移柩 成服 除服 开光 立碑 迁坟 上梁 竖柱 塑绘 定磉 合帐"
  },
  "6-2": {
    j: "买房 搬新房 开业 祭祀 补垣 塞穴",
    y: "安葬 入殓 馀事勿取 成服 除服 破土 迁坟"
  },
  "6-20": {
    j: "搬新房 出货财 动土 开仓",
    y: "交易 开业 祈福 安机械 纳畜 造车器 盖屋 安葬 安门 祭祀 开生坟 起基 雕刻 合嵴 开光 立碑 求子 谢土 斋醮 定磉"
  },
  "6-21": {
    j: "-",
    y: "结婚 出行 打扫 搬家 签订合同 交易 搬新房 开业 动土 祈福 安床 安葬 安门 挂匾 祭祀 拆卸 出火 收养子女 开光 破土 求子 上梁 谢土"
  },
  "6-22": {
    j: "开业 作灶 伐木 作梁",
    y: "会亲友 出行 打扫 搬家 合婚订婚 搬新房 订盟 动土 祈福 安床 安机械 盖屋 安葬 祭祀 修造 拆卸 起基 入殓 安香 出火 立碑 破土 斋醮 定磉"
  },
  "6-23": {
    j: "结婚 理发 栽种 作灶 修坟 行丧",
    y: "搬新房 动土 祈福 安床 纳畜 挂匾 祭祀 修造 拆卸 出火 伐木 开光 求子 上梁"
  },
  "6-24": {
    j: "签订合同 纳财 开业 作灶",
    y: "结婚 搬家 合婚订婚 搬新房 订盟 动土 祈福 盖屋 安葬 安门 祭祀 修造 起基 安香 出火 开光 破土 普渡 迁坟 上梁 竖柱 造庙 造桥"
  },
  "6-25": {
    j: "-",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 动土 祈福 栽种 安床 纳畜 安葬 挂匾 祭祀 修造 拆卸 入殓 成服 出火 除服 收养子女 开光 求子"
  },
  "6-26": {
    j: "结婚 搬家 搬新房 盖屋 祭祀",
    y: "安葬 入殓 移柩 除虫 成服 除服 结网 立碑 破土 迁坟"
  },
  "6-27": {
    j: "买房 栽种 掘井",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 祈福 安床 安葬 挂匾 祭祀 拆卸 出火 伐木 开光 求子"
  },
  "6-28": {
    j: "作灶 伐木 掘井 斋醮",
    y: "合婚订婚 搬新房 赴任 买衣服 订盟 安床 安葬 修造 拆卸 成人礼 出火 开光 塑绘 谢土"
  },
  "6-29": {
    j: "出行 买房 开业 出货财 诉讼 栽种 安葬 治病 行丧",
    y: "结婚 搬家 搬新房 动土 安床 纳畜 祭祀 修造 拆卸 出火 伐木 开光 上梁"
  },
  "6-3": {
    j: "治病 作灶",
    y: "会亲友 搬家 合婚订婚 搬新房 赴任 买衣服 订盟 动土 祈福 安床 安葬 祭祀 修造 拆卸 起基 入殓 移柩 安香 收养子女 谢土"
  },
  "6-30": {
    j: "栽种 盖屋 安葬 作灶",
    y: "会亲友 出行 合婚订婚 纳财 买衣服 订盟 动土 安床 沐浴 纳畜 安门 挂匾 修造 拆卸 放水 安香 酬神 出火 伐木 收养子女 开光 上梁 塑绘 造庙 斋醮 合帐"
  },
  "6-31": {
    j: "动土 安葬 行丧 伐木",
    y: "结婚 出行 房屋清洁 搬家 搬新房 纳财 祈福 安床 安门 挂匾 祭祀 修造 拆卸 出火 收养子女 开光 求子"
  },
  "6-32": {
    j: "结婚 搬家 搬新房",
    y: "开业 动土 安葬 祭祀 入殓 破土 斋醮"
  },
  "6-33": {
    j: "结婚 搬家 理发 搬新房 作灶",
    y: "出行 签订合同 交易 开业 动土 祈福 安床 安机械 盖屋 安葬 挂匾 祭祀 修造 起基 成服 除服 立碑 破土 迁坟 斋醮 定磉"
  },
  "6-34": {
    j: "作灶",
    y: "结婚 出行 搬家 合婚订婚 搬新房 开业 订盟 动土 祈福 安葬 祭祀 破土"
  },
  "6-35": {
    j: "结婚 买房 搬新房 安葬 作灶 出火",
    y: "会亲友 出行 打扫 理发 求职入学 合婚订婚 签订合同 交易 纳财 开业 订盟 动土 祈福 栽种 纳畜 祭祀 牧养 造仓 起基 开光 求子"
  },
  "6-36": {
    j: "开业 安葬",
    y: "结婚 搬家 搬新房 动土 祈福 祭祀 斋醮"
  },
  "6-37": {
    j: "搬家 搬新房 祭祀 作灶 出火 收养子女 开渠",
    y: "会亲友 纳财 动土 祈福 栽种 开厕 牧养 修造 造仓 开光 求子 斋醮"
  },
  "6-38": {
    j: "搬家 搬新房",
    y: "安葬 入殓 移柩 成服 除服 破土 迁坟"
  },
  "6-39": {
    j: "买房 诉讼 栽种 掘井",
    y: "结婚 出行 搬家 合婚订婚 签订合同 交易 纳财 订盟 动土 祈福 安床 安葬 祭祀 修造 拆卸 安香 成服 出火 除服 收养子女 开光 斋醮"
  },
  "6-4": {
    j: "买房 开业 掘井 造庙",
    y: "会亲友 出行 搬家 合婚订婚 订盟 动土 祈福 安床 安机械 盖屋 安葬 安门 祭祀 修造 拆卸 起基 入殓 安香 出火 开光 破土 上梁 竖柱 造船 造桥 定磉"
  },
  "6-40": {
    j: "结婚 开业",
    y: "合婚订婚 订盟 动土 栽种 安机械 纳畜 安葬 牧养 修造 拆卸 入殓 移柩 成服 出火 除服 破土 求子 塑绘 造桥 斋醮"
  },
  "6-41": {
    j: "出行 开业 安葬 行丧",
    y: "结婚 会亲友 搬家 合婚订婚 买房 搬新房 订盟 安床 安机械 盖屋 挂匾 祭祀 拆卸 起基 安香 出火 定磉"
  },
  "6-42": {
    j: "诸事不宜",
    y: "打扫 沐浴"
  },
  "6-43": {
    j: "理发 纳畜 合寿木",
    y: "结婚 搬家 合婚订婚 签订合同 搬新房 开业 订盟 祈福 安机械 造车器 安葬 祭祀 破土"
  },
  "6-44": {
    j: "结婚 出行 买房 赴任 安床 安葬 作灶 收养子女",
    y: "打扫 房屋清洁 交易 纳财 动土 祈福 纳畜 祭祀 开光"
  },
  "6-45": {
    j: "结婚 动土 破土",
    y: "搬家 搬新房 祈福 安机械 纳畜 盖屋 安葬 安门 祭祀 作灶 起基 安香 出火 开光 迁坟 求子 上梁 竖柱 塑绘 斋醮"
  },
  "6-46": {
    j: "-",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 动土 祈福 栽种 安床 纳畜 安葬 挂匾 祭祀 修造 拆卸 入殓 出火 收养子女 开光 破土 迁坟 求子"
  },
  "6-47": {
    j: "结婚 安葬 修坟 行丧 破土",
    y: "会亲友 搬家 合婚订婚 签订合同 搬新房 订盟 祈福 安床 安机械 挂匾 祭祀 牧养 拆卸 安香 出火 教牛马 开光 上梁 竖柱"
  },
  "6-48": {
    j: "结婚 搬家",
    y: "出行 打扫 动土 栽种 安床 纳畜 安葬 祭祀 修造 拆卸 起基 入殓 成服 出火 除服 伐木 收养子女 开光 破土 求子 作梁"
  },
  "6-49": {
    j: "合婚订婚 订盟 诉讼 架马 开渠",
    y: "结婚 出行 搬家 签订合同 搬新房 开业 动土 祈福 安机械 造车器 安葬 祭祀 修造 安香 出火 开光 破土"
  },
  "6-5": {
    j: "出行 开业 安葬 治病",
    y: "结婚 会亲友 搬家 合婚订婚 搬新房 动土 祈福 安床 纳畜 祭祀 修造 安香 收养子女 开光 上梁 竖柱 塑绘 斋醮"
  },
  "6-50": {
    j: "馀事勿取",
    y: "安葬 入殓 成服 除服 破土 迁坟"
  },
  "6-51": {
    j: "结婚 买房 安葬 掘井 造船",
    y: "会亲友 出行 搬家 合婚订婚 签订合同 搬新房 纳财 开业 订盟 动土 祈福 盖屋 安门 祭祀 修造 起基 安香 出火 教牛马 破土 上梁 竖柱"
  },
  "6-52": {
    j: "结婚 买房 开业 作灶 伐木 作梁",
    y: "搬新房 动土 安床 纳畜 安葬 挂匾 祭祀 拆卸 入殓 出火 开光 破土"
  },
  "6-53": {
    j: "结婚 安葬",
    y: "祭祀 馀事勿取 安装器具 结网"
  },
  "6-54": {
    j: "动土 栽种 盖屋 作灶 开光",
    y: "出行 搬家 合婚订婚 签订合同 交易 搬新房 开业 订盟 祈福 安床 造车器 安葬 安门 祭祀 出火 求子 谢土"
  },
  "6-55": {
    j: "赴任",
    y: "结婚 打扫 搬家 合婚订婚 搬新房 买衣服 订盟 动土 祈福 栽种 安床 安葬 修造 拆卸 放水 修坟 移柩 成人礼 安香 开光 立碑 迁坟 求子 竖柱 塑绘 谢土 斋醮"
  },
  "6-56": {
    j: "结婚 搬新房 开光 上梁 斋醮",
    y: "打扫 沐浴 安葬 祭祀 移柩 馀事勿取 破土 谢土"
  },
  "6-57": {
    j: "安门",
    y: "结婚 出行 搬家 合婚订婚 搬新房 开业 动土 祈福 安葬 祭祀 破土"
  },
  "6-58": {
    j: "动土 掘井 破土",
    y: "结婚 出行 搬家 合婚订婚 签订合同 交易 搬新房 纳财 订盟 祈福 安床 安葬 挂匾 祭祀 修造 拆卸 入殓 成服 出火 除服 收养子女 开光 迁坟 求子"
  },
  "6-59": {
    j: "诸事不宜",
    y: "房屋清洁 沐浴 馀事勿取"
  },
  "6-6": {
    j: "动土 买车 盖屋 作灶 探病",
    y: "结婚 买房 装修 祭祀 成人礼"
  },
  "6-7": {
    j: "栽种 伐木",
    y: "结婚 会亲友 合婚订婚 签订合同 交易 搬新房 纳财 买衣服 祈福 安床 安葬 挂匾 祭祀 修造 造仓 放水 入殓 移柩 安装器具 安香 求子 谢土 合帐"
  },
  "6-8": {
    j: "结婚 出行 搬家 搬新房 安床",
    y: "祈福 沐浴 纳畜 安葬 祭祀 入殓 破土 求子 斋醮"
  },
  "6-9": {
    j: "-",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 动土 祈福 栽种 安床 安葬 安门 挂匾 祭祀 拆卸 出火 收养子女 开光 破土 求子 上梁"
  },
  "7-0": {
    j: "结婚 搬家 搬新房",
    y: "打扫 合婚订婚 动土 祈福 安葬 祭祀 破土"
  },
  "7-1": {
    j: "结婚 交易 搬新房 开业",
    y: "安葬 祭祀 入殓 移柩 馀事勿取 除虫 成服 除服 破土"
  },
  "7-10": {
    j: "结婚 搬新房 动土 架马 修造 拆卸 出火 伐木 开柱眼 上梁",
    y: "出行 打扫 买衣服 安葬 祭祀 入殓 移柩 成服 除服 开光 破土 迁坟 塑绘"
  },
  "7-11": {
    j: "结婚 开业 安葬 合寿木",
    y: "出行 搬家 合婚订婚 搬新房 订盟 动土 祈福 盖屋 安门 祭祀 修造 拆卸 起基 成人礼 安香 出火 开池 上梁 竖柱 斋醮 定磉"
  },
  "7-12": {
    j: "结婚 搬家 交易 搬新房 开业 栽种 安门 作灶",
    y: "打扫 美甲浴足 沐浴 安葬 祭祀 入殓 移柩 破土 迁坟"
  },
  "7-13": {
    j: "结婚 交易 搬新房 开业",
    y: "打扫 安葬 祭祀 入殓 除虫 结网 破土 普渡 打猎"
  },
  "7-14": {
    j: "结婚 出行 搬家 买房 搬新房 安床 祭祀 作灶 出火 收养子女",
    y: "打扫 动土 安葬 拆卸 起基 修坟 移柩 开光 立碑 破土 迁坟 上梁"
  },
  "7-15": {
    j: "开业 合寿木 掘井 破土",
    y: "结婚 出行 搬家 合婚订婚 搬新房 订盟 祈福 安床 纳畜 安葬 祭祀 起基 安香 除虫 出火 开光 纳婿 求子 上梁 竖柱 造庙 斋醮"
  },
  "7-16": {
    j: "结婚 搬家 搬新房 开业 动土 栽种 分居 作灶 安香 出火 掘井 破土",
    y: "打扫 安床 纳畜 安葬 修造 拆卸 入殓 开光 迁坟"
  },
  "7-17": {
    j: "出行 安葬 行丧 掘井 破土",
    y: "结婚 搬家 合婚订婚 搬新房 订盟 动土 祈福 盖屋 安门 祭祀 修造 起基 安装器具 安香 出火 合嵴 求子 上梁 斋醮"
  },
  "7-18": {
    j: "出行 搬新房 开业 栽种 安葬 安门 作灶 掘井",
    y: "结婚 搬家 动土 祈福 安床 祭祀 修造 收养子女 开光 求子"
  },
  "7-19": {
    j: "搬新房 开业 动土 盖屋 开光",
    y: "结婚 会亲友 出行 求职入学 合婚订婚 习艺 订盟 安葬 牧养 入殓 移柩 除虫 收养子女 迁坟"
  },
  "7-2": {
    j: "结婚 搬新房 祭祀 作灶",
    y: "会亲友 沐浴 安葬 拆卸 起基 移柩 成人礼 除虫 成服 除服 开光 迁坟 塑绘"
  },
  "7-20": {
    j: "搬新房 安门",
    y: "结婚 搬家 理发 求职入学 赴任 买衣服 动土 祈福 架马 安葬 祭祀 修造 拆卸 放水 起基 入殓 移柩 成人礼 出火 伐木 开光 求子 塑绘 谢土 斋醮 作梁 定磉 合帐"
  },
  "7-21": {
    j: "开业 动土 掘井 开池",
    y: "打扫 合婚订婚 订盟 祈福 安葬 祭祀 求医 打鱼 治病 起基 入殓 开光 迁坟 求子 谢土 造船 斋醮 定磉"
  },
  "7-22": {
    j: "-",
    y: "结婚 会亲友 打扫 买衣服 动土 祈福 安床 架马 祭祀 修造 放水 起基 成人礼 伐木 收养子女 开光 求子 上梁 竖柱 作梁 合帐"
  },
  "7-23": {
    j: "结婚 交易 开业 安葬 行丧",
    y: "沐浴 祭祀 打鱼 馀事勿取 除虫 结网 打猎"
  },
  "7-24": {
    j: "结婚 搬家 买房 搬新房 开业 安门 作灶 出火 斋醮",
    y: "打扫 理发 安葬 祭祀 入殓 破土"
  },
  "7-25": {
    j: "结婚 合婚订婚 搬新房 开业 订盟",
    y: "纳畜 安葬 祭祀 牧养 入殓 移柩 除虫 成服 除服 破土 迁坟 打猎"
  },
  "7-26": {
    j: "诸事不宜",
    y: "打扫 馀事勿取 坏垣"
  },
  "7-27": {
    j: "结婚 伐木 掘井 开光 作梁",
    y: "会亲友 签订合同 交易 纳财 开业 习艺 买车 祈福 栽种 安机械 开厕 安葬 祭祀 牧养 求医 治病 出火 结网 开池 破土 迁坟 求子 造庙 斋醮 打猎"
  },
  "7-28": {
    j: "结婚 出行 搬家 搬新房 开业 动土 安葬 修造 作灶 掘井 开池 破土 上梁 造船",
    y: "打扫 美甲浴足 理发 祭祀 收养子女 针灸"
  },
  "7-29": {
    j: "出行 开业 安葬 修坟",
    y: "结婚 搬家 合婚订婚 搬新房 买衣服 动土 安床 祭祀 修造 拆卸 放水 成人礼 安香 除虫 伐木 结网 收养子女 开光 上梁 竖柱 塑绘 打猎"
  },
  "7-3": {
    j: "搬家 理发 交易 搬新房 开业 作灶 伐木 掘井",
    y: "结婚 出行 动土 祈福 安床 纳畜 祭祀 修造 拆卸 入殓 开光 破土 求子 上梁"
  },
  "7-30": {
    j: "交易 开业 盖屋 安门 作灶 伐木 上梁",
    y: "结婚 出行 打扫 搬家 合婚订婚 搬新房 订盟 动土 祈福 安床 纳畜 安葬 祭祀 拆卸 出火 开光 破土 谢土"
  },
  "7-31": {
    j: "开业 动土 栽种 作灶",
    y: "结婚 打扫 搬家 合婚订婚 搬新房 买衣服 订盟 祈福 安床 安葬 安门 祭祀 打鱼 入殓 移柩 成人礼 安香 除虫 酬神 出火 伐木 迁坟 合帐"
  },
  "7-32": {
    j: "交易 纳财 开业 安床 盖屋 作灶 上梁 造船",
    y: "结婚 出行 打扫 搬家 搬新房 祈福 栽种 安葬 祭祀 出火 伐木 开光 破土 求子 谢土"
  },
  "7-33": {
    j: "开业 动土 破土",
    y: "结婚 出行 搬家 合婚订婚 祈福 祭祀 求医"
  },
  "7-34": {
    j: "签订合同 开业 合寿木 造船",
    y: "结婚 出行 打扫 搬家 合婚订婚 搬新房 订盟 动土 祈福 栽种 安床 安葬 挂匾 祭祀 修造 拆卸 入殓 移柩 出火 收养子女 开光 破土 求子 谢土"
  },
  "7-35": {
    j: "开业 安葬",
    y: "出行 搬家 合婚订婚 搬新房 订盟 动土 祈福 祭祀 修造"
  },
  "7-36": {
    j: "结婚 出行 搬家 搬新房 开业 安门 作灶 出火 伐木 斋醮",
    y: "打扫 美甲浴足 祈福 安床 沐浴 安葬 祭祀 入殓 移柩 破土 迁坟 谢土"
  },
  "7-37": {
    j: "结婚 搬新房",
    y: "安葬 入殓 除虫 结网 破土"
  },
  "7-38": {
    j: "结婚 搬家 搬新房 开业 祈福 安床 祭祀 探病 出火",
    y: "打扫 动土 安葬 安门 牧养 修造 拆卸 修坟 移柩 开光 破土 竖柱"
  },
  "7-39": {
    j: "开业 赴任",
    y: "结婚 出行 搬家 合婚订婚 搬新房 订盟 动土 祈福 安葬 祭祀 破土"
  },
  "7-4": {
    j: "交易 开业 作灶 破土",
    y: "结婚 合婚订婚 订盟 安床 安葬 祭祀 入殓 移柩 成服 除服 收养子女 开光 立碑 迁坟 塑绘"
  },
  "7-40": {
    j: "交易 开业 动土 安门 作灶 破土",
    y: "结婚 出行 打扫 搬家 合婚订婚 搬新房 订盟 栽种 安葬 祭祀 修造 拆卸 入殓 出火 伐木 开光"
  },
  "7-41": {
    j: "开业 安葬",
    y: "结婚 搬家 合婚订婚 搬新房 订盟 动土 祈福 祭祀 修造"
  },
  "7-42": {
    j: "结婚 合婚订婚 开业 订盟 盖屋 安门 上梁 斋醮",
    y: "美甲浴足 理发 沐浴 安葬 入殓 修坟 除虫 成服 除服 立碑 破土 迁坟 谢土 打猎"
  },
  "7-43": {
    j: "理发 签订合同 开业 作灶",
    y: "结婚 出行 打扫 搬家 搬新房 动土 祈福 栽种 安床 纳畜 安葬 祭祀 拆卸 出火 破土 迁坟 上梁"
  },
  "7-44": {
    j: "结婚 合婚订婚 开业 安床 开光",
    y: "出行 搬家 搬新房 动土 祈福 安葬 修造 破土 斋醮"
  },
  "7-45": {
    j: "交易 纳财 开业 动土 挂匾 伐木 掘井 破土",
    y: "打扫 搬新房 祈福 安床 纳畜 安葬 安门 祭祀 修造 拆卸 出火 开光 迁坟 求子"
  },
  "7-46": {
    j: "搬家 搬新房 盖屋 架马",
    y: "结婚 会亲友 打扫 合婚订婚 订盟 动土 祈福 纳畜 安葬 祭祀 牧养 求医 治病 入殓 除虫 开光 破土 斋醮"
  },
  "7-47": {
    j: "结婚 交易 开业 安葬 修坟 行丧",
    y: "出行 搬家 搬新房 动土 祈福 安床 祭祀 修造 拆卸 起基 出火 伐木 开光 求子"
  },
  "7-48": {
    j: "结婚 搬新房 动土 作灶 出火 破土 上梁",
    y: "理发 沐浴 安葬 入殓 移柩 除虫 迁坟"
  },
  "7-49": {
    j: "诸事不宜",
    y: "安葬 祭祀 入殓 移柩 馀事勿取 破土 塞穴"
  },
  "7-5": {
    j: "安葬 开生坟 行丧 破土",
    y: "结婚 会亲友 祈福 安床 祭祀 成人礼 除虫 伐木 收养子女 掘井 开柱眼 求子 斋醮 作梁 打猎"
  },
  "7-50": {
    j: "结婚 搬新房 开业 安床 祭祀 探病 上梁",
    y: "沐浴 安葬 入殓 除虫 成服 除服 破土 迁坟"
  },
  "7-51": {
    j: "馀事勿取",
    y: "安葬 祭祀 开生坟 入殓 移柩 成服 除服 破土 迁坟"
  },
  "7-52": {
    j: "开业 动土 破土 造庙",
    y: "结婚 打扫 搬家 合婚订婚 订盟 祈福 安床 安葬 祭祀 求医 治病 入殓 移柩 除虫 成服 除服 伐木 结网 开光 立碑 塑绘 谢土 作梁 打猎"
  },
  "7-53": {
    j: "诸事不宜",
    y: "打扫 祭祀 馀事勿取"
  },
  "7-54": {
    j: "开业 动土 盖屋 破土",
    y: "结婚 出行 搬家 理发 搬新房 买衣服 沐浴 安葬 祭祀 放水 入殓 移柩 除虫 成服 除服 迁坟 打猎"
  },
  "7-55": {
    j: "搬新房 开业 买衣服 安床 作灶 上梁",
    y: "结婚 动土 安葬 入殓 移柩 破土"
  },
  "7-56": {
    j: "结婚 搬新房 安床 作灶",
    y: "打扫 房屋清洁 理发 沐浴 安葬 祭祀 打鱼 入殓 修坟 移柩 除虫 成服 除服 结网 立碑 迁坟 谢土 打猎"
  },
  "7-57": {
    j: "动土 破土",
    y: "打扫 房屋清洁 美甲浴足 安葬 祭祀 打鱼 入殓 移柩 除虫 成服 除服 迁坟 谢土 斋醮 打猎"
  },
  "7-58": {
    j: "开业 开光",
    y: "结婚 搬家 合婚订婚 搬新房 动土 安葬 求医 修造 治病 破土"
  },
  "7-59": {
    j: "结婚 开业 安葬 行丧 迁坟",
    y: "沐浴 祭祀 打鱼 馀事勿取 除虫 结网 打猎"
  },
  "7-6": {
    j: "搬新房 开业 盖屋 作灶",
    y: "结婚 会亲友 出行 合婚订婚 赴任 买衣服 订盟 动土 祈福 栽种 安床 沐浴 安葬 安门 祭祀 修造 拆卸 入殓 移柩 除虫 伐木 破土 上梁 竖柱 谢土 斋醮"
  },
  "7-7": {
    j: "搬新房 开业 斋醮",
    y: "结婚 出行 搬家 合婚订婚 动土 祈福 安葬 祭祀 修造 破土"
  },
  "7-8": {
    j: "签订合同 开业 安床 作灶",
    y: "房屋清洁 合婚订婚 买衣服 订盟 动土 祈福 沐浴 安葬 祭祀 修造 拆卸 起基 移柩 出火 伐木 开柱眼 上梁 谢土 斋醮 合帐"
  },
  "7-9": {
    j: "结婚 纳财 开业 出火",
    y: "出行 合婚订婚 祈福 盖屋 安葬 安门 祭祀 起基 入殓 求子 斋醮 定磉"
  },
  "8-0": {
    j: "搬家 搬新房 出货财 开仓",
    y: "破屋 祭祀 馀事勿取 坏垣"
  },
  "8-1": {
    j: "诸事不宜",
    y: "破屋 祭祀 馀事勿取 坏垣"
  },
  "8-10": {
    j: "开业 祈福 安葬 斋醮",
    y: "打扫 沐浴 破屋 祭祀 求医 治病 馀事勿取 坏垣"
  },
  "8-11": {
    j: "诸事不宜",
    y: "打扫 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-12": {
    j: "结婚 搬家 搬新房",
    y: "沐浴 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-13": {
    j: "诸事不宜",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-14": {
    j: "开业 斋醮",
    y: "沐浴 破屋 馀事勿取 坏垣"
  },
  "8-15": {
    j: "诸事不宜",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-16": {
    j: "结婚 开业",
    y: "打扫 沐浴 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-17": {
    j: "诸事不宜",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-18": {
    j: "结婚 出行 搬家 搬新房 盖屋 探病",
    y: "沐浴 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-19": {
    j: "诸事不宜",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-2": {
    j: "结婚 合婚订婚 搬新房 订盟 祈福 安葬",
    y: "破屋 治病 馀事勿取 坏垣"
  },
  "8-20": {
    j: "搬新房 开业 安葬",
    y: "打扫 房屋清洁 沐浴 破屋 祭祀 求医 治病 馀事勿取 坏垣"
  },
  "8-21": {
    j: "诸事不宜",
    y: "破屋 祭祀 治病 馀事勿取 坏垣"
  },
  "8-22": {
    j: "结婚 交易 搬新房 开业 安葬",
    y: "打扫 沐浴 破屋 祭祀 求医 治病 馀事勿取 坏垣"
  },
  "8-23": {
    j: "诸事不宜",
    y: "打扫 沐浴 破屋 馀事勿取 坏垣"
  },
  "8-24": {
    j: "结婚 搬新房",
    y: "破屋 求医 治病 馀事勿取 坏垣 打猎"
  },
  "8-25": {
    j: "诸事不宜",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-26": {
    j: "安葬 行丧",
    y: "破屋 治病 馀事勿取 坏垣"
  },
  "8-27": {
    j: "诸事不宜",
    y: "破屋 祭祀 治病 馀事勿取 坏垣"
  },
  "8-28": {
    j: "诸事不宜",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-29": {
    j: "结婚 安葬",
    y: "破屋 求医 治病 馀事勿取 坏垣"
  },
  "8-3": {
    j: "出行 搬家 搬新房 栽种",
    y: "沐浴 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-30": {
    j: "诸事不宜",
    y: "破屋 祭祀 求医 馀事勿取 坏垣"
  },
  "8-31": {
    j: "开业 动土 破土",
    y: "打扫 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-32": {
    j: "诸事不宜",
    y: "破屋 求医"
  },
  "8-33": {
    j: "结婚 开光",
    y: "破屋 求医 治病 馀事勿取 坏垣"
  },
  "8-34": {
    j: "诸事不宜",
    y: "打扫 祭祀 求医 治病 馀事勿取"
  },
  "8-35": {
    j: "安葬 开光",
    y: "打扫 沐浴 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-36": {
    j: "诸事不宜",
    y: "-"
  },
  "8-37": {
    j: "结婚 安葬",
    y: "打扫 破屋 馀事勿取 坏垣"
  },
  "8-38": {
    j: "诸事不宜",
    y: "沐浴 破屋 治病 馀事勿取 坏垣"
  },
  "8-39": {
    j: "搬家 搬新房",
    y: "破屋 求医 治病 馀事勿取 坏垣"
  },
  "8-4": {
    j: "结婚 出行 搬新房 安葬 上梁",
    y: "沐浴 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-40": {
    j: "馀事勿取",
    y: "打扫 破屋 祭祀 坏垣"
  },
  "8-41": {
    j: "结婚 安葬",
    y: "打扫 破屋 祭祀 求医 治病 馀事勿取 坏垣"
  },
  "8-42": {
    j: "诸事不宜",
    y: "破屋 治病 馀事勿取 坏垣"
  },
  "8-43": {
    j: "结婚 开业 斋醮",
    y: "破屋 祭祀 馀事勿取 坏垣"
  },
  "8-44": {
    j: "馀事勿取",
    y: "打扫 房屋清洁 破屋 祭祀 治病 坏垣"
  },
  "8-45": {
    j: "结婚 搬家 搬新房 开业",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-46": {
    j: "诸事不宜",
    y: "打扫 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-47": {
    j: "安葬 行丧",
    y: "打扫 沐浴 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-48": {
    j: "诸事不宜",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-49": {
    j: "结婚 出行",
    y: "破屋 求医 治病 馀事勿取 坏垣"
  },
  "8-5": {
    j: "诸事不宜",
    y: "打扫 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-50": {
    j: "诸事不宜",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-51": {
    j: "探病 馀事勿取",
    y: "-"
  },
  "8-52": {
    j: "诸事不宜",
    y: "打扫 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-53": {
    j: "结婚 安葬",
    y: "破屋 祭祀 馀事勿取 坏垣"
  },
  "8-54": {
    j: "诸事不宜",
    y: "沐浴 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-55": {
    j: "结婚 开业 安葬",
    y: "破屋 馀事勿取 坏垣"
  },
  "8-56": {
    j: "结婚 开业",
    y: "破屋 求医 治病 馀事勿取 坏垣"
  },
  "8-57": {
    j: "诸事不宜",
    y: "破屋 坏垣"
  },
  "8-58": {
    j: "结婚 开业",
    y: "打扫 沐浴 破屋 祭祀 求医 治病 馀事勿取 坏垣"
  },
  "8-59": {
    j: "诸事不宜",
    y: "破屋 祭祀 馀事勿取 坏垣"
  },
  "8-6": {
    j: "搬家 搬新房",
    y: "破屋 治病 馀事勿取 坏垣"
  },
  "8-7": {
    j: "诸事不宜",
    y: "打扫 破屋 馀事勿取 坏垣"
  },
  "8-8": {
    j: "结婚 安葬",
    y: "打扫 房屋清洁 理发 沐浴 破屋 祭祀 馀事勿取 坏垣"
  },
  "8-9": {
    j: "诸事不宜",
    y: "破屋 求医 治病 坏垣"
  },
  "9-0": {
    j: "祈福 斋醮",
    y: "结婚 出行 搬家 合婚订婚 搬新房 动土 安葬 祭祀 破土 上梁"
  },
  "9-1": {
    j: "搬新房 出火",
    y: "出行 动土 安床 开厕 祭祀 修造 造畜稠 放水 结网 掘井 开池 开光 破土 塑绘 斋醮"
  },
  "9-10": {
    j: "出货财 开光",
    y: "结婚 出行 打扫 搬家 合婚订婚 搬新房 赴任 订盟 动土 祈福 安床 安机械 安葬 祭祀 造仓 拆卸 入殓 移柩 安香 收养子女 立碑 破土 求子 上梁 谢土"
  },
  "9-11": {
    j: "结婚 搬新房 安葬 祭祀 作灶",
    y: "沐浴 打鱼 除虫 结网 打猎"
  },
  "9-12": {
    j: "-",
    y: "结婚 会亲友 出行 打扫 搬家 搬新房 动土 祈福 栽种 安床 纳畜 安门 祭祀 牧养 修造 拆卸 出火 收养子女 开光 求子 上梁 竖柱"
  },
  "9-13": {
    j: "理发 安葬 作灶 行丧 造桥",
    y: "结婚 出行 交易 买衣服 祈福 安机械 祭祀 放水 掘井 开池 开光 求子 塑绘 斋醮 合帐"
  },
  "9-14": {
    j: "纳畜 祭祀 伐木",
    y: "结婚 出行 搬家 理发 签订合同 交易 搬新房 开业 动土 栽种 安床 挂匾 修造 拆卸 出火 开光 作梁"
  },
  "9-15": {
    j: "结婚 动土 安床 掘井 破土",
    y: "合婚订婚 签订合同 搬新房 开业 订盟 祈福 安葬 挂匾 祭祀 安香 出火 迁坟 造桥"
  },
  "9-16": {
    j: "-",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 动土 祈福 栽种 安床 挂匾 修造 拆卸 入殓 成服 出火 除服 伐木 收养子女 开光 破土 求子 上梁"
  },
  "9-17": {
    j: "结婚 搬新房 开业 祈福 安葬",
    y: "会亲友 合婚订婚 签订合同 交易 纳财 订盟 栽种 纳畜 牧养"
  },
  "9-18": {
    j: "安葬 探病",
    y: "结婚 出行 打扫 搬家 签订合同 交易 搬新房 纳财 开业 动土 栽种 安床 纳畜 挂匾 祭祀 修造 拆卸 出火 开光"
  },
  "9-19": {
    j: "动土 安葬 安门 行丧 成服 破土",
    y: "理发 签订合同 交易 纳财 安床 放水 成人礼 出火 结网 掘井 开池 打猎"
  },
  "9-2": {
    j: "祈福 祭祀",
    y: "结婚 出行 搬家 合婚订婚 搬新房 开业 动土 安葬 破土 上梁"
  },
  "9-20": {
    j: "祈福 安床 纳畜 伐木",
    y: "结婚 出行 搬家 签订合同 交易 搬新房 开业 动土 安葬 修造 拆卸 移柩 成服 出火 除服 开光 破土 迁坟"
  },
  "9-21": {
    j: "栽种 安床 治病 作灶",
    y: "结婚 搬新房 开业 动土 盖屋 安葬 祭祀 修造 拆卸 起基 入殓 移柩 成人礼 成服 除服 开池 破土 塞穴 上梁"
  },
  "9-22": {
    j: "安葬 作灶 开光 斋醮",
    y: "结婚 出行 搬家 签订合同 交易 开业 动土 安床 祭祀 修造 入殓 移柩 成人礼 收养子女 破土"
  },
  "9-23": {
    j: "诸事不宜",
    y: "-"
  },
  "9-24": {
    j: "签订合同 开业",
    y: "结婚 搬家 合婚订婚 搬新房 订盟 动土 祈福 栽种 安床 造车器 安葬 挂匾 祭祀 修造 拆卸 入殓 成服 出火 除服 收养子女 开光 破土 求子"
  },
  "9-25": {
    j: "开业 安门 作灶 掘井",
    y: "结婚 出行 买车 安床 安机械 祭祀 治病 入殓 结网 开光 破土 塞穴 塑绘"
  },
  "9-26": {
    j: "搬家 搬新房 祭祀 作灶 谢土",
    y: "结婚 出行 求职入学 合婚订婚 签订合同 交易 纳财 开业 出货财 订盟 动土 栽种 开仓 纳畜 安葬 牧养 开光 立碑 破土 迁坟"
  },
  "9-27": {
    j: "订盟 动土 安床 开池 破土",
    y: "结婚 出行 签订合同 交易 搬新房 纳财 开业 祈福 安葬 入殓 移柩 成人礼 成服 除服 雕刻 开柱眼 迁坟 造桥 斋醮"
  },
  "9-28": {
    j: "开业 掘井 开渠 造船 造桥",
    y: "结婚 出行 搬家 理发 合婚订婚 搬新房 订盟 动土 栽种 安床 纳畜 安葬 挂匾 祭祀 修造 拆卸 入殓 成服 出火 除服 收养子女 开光 破土 作梁"
  },
  "9-29": {
    j: "出行 祈福 安葬 作灶",
    y: "结婚 会亲友 合婚订婚 纳财 订盟 动土 安床 修造 拆卸 起基 纳婿 上梁 竖柱"
  },
  "9-3": {
    j: "理发 动土 作灶 掘井 开池 破土",
    y: "结婚 出行 打扫 搬家 签订合同 交易 搬新房 开业 祈福 栽种 安床 安葬 祭祀 安香 出火 伐木 开光 求子"
  },
  "9-30": {
    j: "出货财 开仓 盖屋 上梁 造船",
    y: "结婚 会亲友 出行 打扫 搬家 求职入学 合婚订婚 搬新房 纳财 开业 订盟 动土 祈福 安床 安门 祭祀 牧养 修造 造畜稠 起基 雕刻 开池 造庙"
  },
  "9-31": {
    j: "栽种 安门 治病 作灶 开光",
    y: "出行 搬家 搬新房 祈福 安床 安机械 祭祀 移柩 成人礼 安香 成服 除服 迁坟 斋醮"
  },
  "9-32": {
    j: "祈福 安床 祭祀 谢土 造庙",
    y: "结婚 搬家 合婚订婚 签订合同 交易 搬新房 纳财 开业 买衣服 订盟 动土 栽种 盖屋 安葬 安门 牧养 修造 起基 入殓 安香 成服 出火 除服 掘井 开池 开光 立碑 破土 打猎"
  },
  "9-33": {
    j: "安床 作灶",
    y: "结婚 出行 打扫 合婚订婚 搬新房 纳财 订盟 动土 祈福 沐浴 安葬 安门 修造 放水 移柩 安香 开光 破土 求子 上梁 竖柱 塑绘 谢土 斋醮"
  },
  "9-34": {
    j: "结婚 作灶 开光",
    y: "合婚订婚 签订合同 交易 动土 安床 安机械 安葬 移柩 立碑 破土"
  },
  "9-35": {
    j: "结婚 搬新房 安葬",
    y: "沐浴 打鱼 结网"
  },
  "9-36": {
    j: "开业 买车 作灶",
    y: "结婚 出行 打扫 搬家 合婚订婚 搬新房 订盟 动土 祈福 栽种 安床 纳畜 安葬 祭祀 拆卸 修坟 出火 开光 破土 求子 谢土"
  },
  "9-37": {
    j: "开业 开光",
    y: "结婚 合婚订婚 订盟 祈福 安葬 祭祀 入殓 破土"
  },
  "9-38": {
    j: "祈福 祭祀 探病 谢土 造桥",
    y: "结婚 会亲友 搬家 签订合同 搬新房 开业 出货财 买车 栽种 安床 开仓 安机械 纳畜 安葬 安门 挂匾 牧养 拆卸 入殓 移柩 开池 立碑 破土 迁坟"
  },
  "9-39": {
    j: "动土 破土",
    y: "结婚 出行 搬家 合婚订婚 搬新房 开业 订盟 祈福 安葬 祭祀 迁坟"
  },
  "9-4": {
    j: "盖屋 成人礼 掘井 造桥",
    y: "结婚 出行 打扫 交易 搬新房 开业 订盟 安床 挂匾 祭祀 拆卸 起基 入殓 移柩 成服 除服 开光 开柱眼 破土 塑绘 谢土"
  },
  "9-40": {
    j: "开业 开仓 安葬 安门",
    y: "结婚 出行 搬家 合婚订婚 搬新房 订盟 动土 祈福 安床 祭祀 修造 拆卸 放水 移柩 成服 出火 除服 合嵴 收养子女 掘井 开光 破土 求子 上梁 谢土"
  },
  "9-41": {
    j: "祈福 安葬",
    y: "会亲友 合婚订婚 纳财 订盟 安机械 牧养"
  },
  "9-42": {
    j: "结婚 搬新房 动土 祭祀 修造",
    y: "房屋清洁 安葬 入殓 移柩 馀事勿取 成服 除服 立碑 破土 迁坟"
  },
  "9-43": {
    j: "理发 栽种 安门 作灶 造庙 造桥",
    y: "求职入学 交易 订盟 动土 祈福 祭祀 修造 放水 起基 成人礼 伐木 开池 开光 求子 斋醮"
  },
  "9-44": {
    j: "结婚 搬新房 祈福 安床 造船",
    y: "签订合同 交易 纳财 开业 出货财 栽种 开仓 沐浴 纳畜 安葬 牧养 入殓 破土 打猎"
  },
  "9-45": {
    j: "结婚 安床 作灶",
    y: "出行 搬家 搬新房 动土 祈福 安葬 挂匾 祭祀 修造 拆卸 入殓 出火 开池 开光 破土 迁坟 求子 上梁"
  },
  "9-46": {
    j: "成服 除服 开光 塑绘 造桥",
    y: "结婚 会亲友 出行 动土 祭祀 修造 入殓 成人礼 破土"
  },
  "9-47": {
    j: "诸事不宜",
    y: "房屋清洁 馀事勿取 塞穴"
  },
  "9-48": {
    j: "结婚 开业 作灶 斋醮",
    y: "房屋清洁 沐浴 馀事勿取"
  },
  "9-49": {
    j: "结婚 搬家 诉讼 栽种 安门 作灶 造桥",
    y: "签订合同 交易 纳财 开业 动土 买车 安床 开厕 祭祀 修造 放水 结网 开池 破土"
  },
  "9-5": {
    j: "结婚 合婚订婚 搬新房 订盟 祈福 安葬 斋醮",
    y: "会亲友 纳财 买车 安床 安门 祭祀 牧养 放水 成人礼 割蜜 收养子女 求子 打猎"
  },
  "9-50": {
    j: "祈福 开仓 牧养 掘井 上梁",
    y: "结婚 会亲友 出行 搬家 合婚订婚 签订合同 交易 搬新房 纳财 开业 订盟 安床 盖屋 安葬 挂匾 作灶 拆卸 起基 入殓 移柩 安香 出火 立碑 破土 迁坟"
  },
  "9-51": {
    j: "诸事不宜",
    y: "安葬 祭祀 入殓 移柩 馀事勿取 成服 除服 结网 迁坟"
  },
  "9-52": {
    j: "结婚 安葬 作灶 造船 造庙 造桥",
    y: "搬家 合婚订婚 签订合同 搬新房 订盟 动土 祈福 安门 祭祀 修造 起基 安香 出火 开池 破土 上梁 竖柱 定磉"
  },
  "9-53": {
    j: "出行 理发 安葬 安门 作灶 伐木 上梁",
    y: "结婚 会亲友 合婚订婚 纳财 纳畜 牧养 结网 收养子女 求子"
  },
  "9-54": {
    j: "动土 盖屋 破土 造船",
    y: "结婚 搬家 合婚订婚 买衣服 订盟 安床 架马 开厕 安葬 祭祀 作灶 入殓 移柩 成人礼 成服 除服 伐木 结网 开池 开柱眼 迁坟 作梁 定磉 打猎"
  },
  "9-55": {
    j: "栽种 安门 治病 作灶",
    y: "动土 祈福 安床 架马 开厕 祭祀 入殓 成人礼 成服 除服 伐木 结网 开池 求子"
  },
  "9-56": {
    j: "结婚 祈福 安床 谢土 造庙",
    y: "会亲友 房屋清洁 求职入学 合婚订婚 买衣服 订盟 栽种 纳畜 安葬 挂匾 祭祀 造仓 拆卸 入殓 修坟 出火 结网 掘井 开池 立碑 破土 求子 塑绘"
  },
  "9-57": {
    j: "结婚 会亲友 搬新房 开业 安床 作灶 上梁",
    y: "沐浴 安葬 祭祀 合寿木 开生坟 入殓 移柩 成服 除服 破土 斋醮"
  },
  "9-58": {
    j: "造庙 作梁",
    y: "出行 合婚订婚 买衣服 订盟 动土 安床 安葬 祭祀 打鱼 作灶 入殓 移柩 成人礼 结网 收养子女 破土 合帐 打猎"
  },
  "9-59": {
    j: "祈福 安葬",
    y: "房屋清洁 沐浴 打鱼 馀事勿取 结网 塞穴 打猎"
  },
  "9-6": {
    j: "盖屋 治病",
    y: "出行 打扫 搬家 合婚订婚 赴任 买衣服 订盟 动土 祈福 栽种 安床 纳畜 安葬 祭祀 修造 拆卸 入殓 移柩 成人礼 成服 除服 伐木 开光 破土 迁坟 上梁 竖柱 塑绘 斋醮"
  },
  "9-7": {
    j: "开业 安葬 安门 作灶 造桥",
    y: "出行 理发 安床 架马 开厕 祭祀 入殓 修坟 移柩 成服 除服 伐木 开光 开柱眼 立碑 破土 迁坟 塑绘 作梁 打猎"
  },
  "9-8": {
    j: "搬新房 安床",
    y: "结婚 出行 合婚订婚 订盟 安葬 入殓 移柩 成服 除服 开光 立碑 纳婿 迁坟 塑绘"
  },
  "9-9": {
    j: "会亲友 安床 作灶 造船",
    y: "出行 搬家 合婚订婚 搬新房 开业 订盟 动土 祈福 安葬 祭祀 修造 安香 出火 破土"
  }
};
exports.C = C;

/***/ }),

/***/ 68:
/*!************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data1/mWxMap.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mWxMap = void 0;
var mWxMap = {
  "甲子": "海中金",
  "乙丑": "海中金",
  "丙寅": "炉中火",
  "丁卯": "炉中火",
  "戊辰": "大林木",
  "己巳": "大林木",
  "庚午": "路旁土",
  "辛未": "路旁土",
  "壬申": "剑锋金",
  "癸酉": "剑锋金",
  "甲戌": "山头火",
  "乙亥": "山头火",
  "丙子": "涧下水",
  "丁丑": "涧下水",
  "戊寅": "城头土",
  "己卯": "城头土",
  "庚辰": "白腊金",
  "辛巳": "白腊金",
  "壬午": "杨柳木",
  "癸未": "杨柳木",
  "甲申": "泉中水",
  "乙酉": "泉中水",
  "丙戌": "屋上土",
  "丁亥": "屋上土",
  "戊子": "霹雳火",
  "己丑": "霹雳火",
  "庚寅": "松柏木",
  "辛卯": "松柏木",
  "壬辰": "长流水",
  "癸巳": "长流水",
  "甲午": "沙中金",
  "乙未": "沙中金",
  "丙申": "山下火",
  "丁酉": "山下火",
  "戊戌": "平地木",
  "己亥": "平地木",
  "庚子": "壁上土",
  "辛丑": "壁上土",
  "壬寅": "金箔金",
  "癸卯": "金箔金",
  "甲辰": "覆灯火",
  "乙巳": "覆灯火",
  "丙午": "天河水",
  "丁未": "天河水",
  "戊申": "大驿土",
  "己酉": "大驿土",
  "庚戌": "钗钏金",
  "辛亥": "钗钏金",
  "壬子": "桑拓木",
  "癸丑": "桑拓木",
  "甲寅": "大溪水",
  "乙卯": "大溪水",
  "丙辰": "沙中土",
  "丁巳": "沙中土",
  "戊午": "天上火",
  "己未": "天上火",
  "庚申": "石榴木",
  "辛酉": "石榴木",
  "壬戌": "大海水",
  "癸亥": "大海水"
};
exports.mWxMap = mWxMap;

/***/ }),

/***/ 69:
/*!************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data/explain.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var explain = {
  "立碑": "为去世的人立墓碑，为后人所铭记。",
  "祭祀": "指祠堂之祭祀、即拜祭祖先或庙寺的祭拜、神明等事。",
  "起基": "建造房屋定地基石。",
  "朱雀": "四象之一，其形象鸟，位于南方，属火，色赤，总称朱雀。此处代表口舌，争吵。该时辰容易发生争吵、意见较难统一，或东西容易引起噪音。",
  "祀灶": "亦称 祭灶 送灶 即祭拜灶神。",
  "搬家": '老黄历中"移徙"。指搬家，搬迁入二手房、租房。',
  "辰不哭泣必主重丧": "逢辰日或逢辰时不能哭泣，如违之将有不祥之灾。",
  "恩赦": "指帝王登极等大庆时，下诏赦免罪犯。",
  "开仓": "指打开粮仓货仓，取粮，出货。",
  "破屋": "拆屋或者局部改造。",
  "和讼": "解决争议。",
  "合帐": "缝制新郎及新娘要用的蚊帐，安床与设帐通常合而为一，有时亦并称安床设帐。",
  "求职入学": '老黄历中"入学"。古时指入学堂，现代可用于应聘中的报名，开学典礼。',
  "送礼": "赠送礼物。",
  "交易": "订立各种契约互相买卖之事，古时候做买卖都要写字据的，如买房有房契，买地有地契，把自己的权利通过契约这种方式写下来就叫做立券。",
  "挂匾": "指悬挂招牌或各种匾额。",
  "造仓": "建筑仓库或修理仓库。",
  "破土": "仅指埋葬用的破土，与一般建筑房屋的[动土]不同。即[破土]属阴宅，[动土]指阳宅也。现今社会上多已滥用，择日时，须辨别之。",
  "乙不栽植千株不长": "逢乙日或逢乙时不能进行农务方面的栽种。",
  "辛不合酱主人不尝": "逢辛日或逢辛时酿造行业的不能进行发酵和勾兑等事。",
  "求人": "请求别人为自己办事或收罗人才。",
  "子不问卜自惹祸殃": "逢子日或逢子时不能求神问卜起卦之事，违之将自惹缠身之祸殃。",
  "斋醮": "庙宇建醮前需举行的斋戒仪式。",
  "除虫": '老黄历中"捕捉"。即扑灭农作物害虫或生物。',
  "教牛马": "训练牛马之工作。",
  "安葬": "举行埋葬等仪式。",
  "月破": "与月支对冲。凶日，百事忌。",
  "馀事勿取": "宜：无所谓好也无所谓不好。忌：除了特别提出的以外的任何事情，都不应该做。",
  "寅不祭祀神鬼不尝": "逢寅日或逢寅时不能祭祀神鬼，违之将自惹神鬼缠身之祸。",
  "上官": "新工作入职或新职位到任。",
  "安香": "上香添香安牌位。",
  "合寿木": "指人未死，先行作棺木之事。",
  "安门": "新建房屋装置正门门框，旧屋改门。",
  "上梁": "修建房屋承柱子，结构梁柱，砌承重墙",
  "行丧": "办理丧事，比如出殡。",
  "丙不修灶必见灾殃": "逢丙日或逢丙时不能进行新建或维修厨房、灶台、炉具等。",
  "订盟": "鉴定联盟协议。",
  "买车": '老黄历中"经络"。古时指安纺车、织布机，现泛指买车交车、安机器等事项。',
  "结网": "作结鱼网之事。",
  "求财": "祈求通过投资等活动赚取博得未属于自己的财富。",
  "造桥": "建造桥梁。",
  "安床": "指安置睡床卧铺之意。古时安床后，要请生肖属龙的孩童在床上翻转，俗称[翻床、翻铺]，为[早生贵子]的象征。并于晚间祭拜[床母]。安床后不能安房，亦忌单人独睡，所以大喜之前，准新郎睡觉时，需由一伴郎陪伴。",
  "沐浴": "祈福、许愿而沐浴斋戒，洗澡。",
  "打鱼": '老黄历中"取渔"，亦作“取鱼”。指把养好的鱼取出来卖。',
  "移柩": "举行葬仪时、将棺木移出屋外之事。",
  "酬神": "祭谢神灵。",
  "收养子女": '老黄历中"进人口"。指收纳养子养女。',
  "开生坟": "开造坟墓的破土动工。",
  "大耗": "忌起造、安床、百事凶。",
  "戌不吃犬作怪上床": "逢戌日或逢戌时不能吃狗肉。",
  "栽种": "指种植植物、接枝等农事。",
  "作梁": "砍伐树木作屋梁。",
  "普渡": "广释法力，超度众生。",
  "招赘": "招女婿。",
  "吉时良辰百无禁忌": "好日子没有什么需要忌讳。",
  "藏宝": "收纳整理贵重物品。",
  "掘井": "开凿水井，安装取水设备。",
  "日破大凶诸事不宜": "做什么都无所谓好也无所谓坏。",
  "盖屋": "装盖房屋的屋顶等工作。",
  "谢土": "建筑物完工后所举行的祭祀。",
  "申不安床鬼祟入房": "逢申日或逢申时不能移动床位或新装床铺。",
  "见贵": "遇见贵神(命中贵人)，则可求富贵。",
  "签订合同": '老黄历中"立券"。签订合同，订立契约、签约合同等商业、法律行为。',
  "行船": "驾驶船只。",
  "掘渠": "挖掘、疏通水渠。",
  "割蜜": "取蜂蜜。",
  "乘船": "坐船出行。",
  "造畜稠": "建造家禽及家畜住的小屋。",
  "迁坟": '老黄历中"启鑽"。指[洗骨]之事，俗谓[拾金]也。',
  "酉不宴客醉坐颠狂": "逢酉日或逢酉时不能宴请客人或去赴宴。",
  "搬新房": '老黄历中"入宅"。指搬入新房子而非二手房。一般会举行庆祝活动，宴请亲朋好友祝贺新居落成。',
  "甲不开仓财物耗散": "逢甲日或逢甲时不能开仓开库，违之将会带来破财之果。",
  "分居": "指大家庭分家，各自另起炉灶之意。",
  "架马": "装上建筑物屋顶的梁。",
  "归宁": "新娘出嫁三天便回门。",
  "安装器具": '老黄历中"安碓磑"。指安放磨具、榨油机器等用具。',
  "穿井": "开凿水井。",
  "雕刻": "雕刻神像、画雕人像等。",
  "塑绘": "寺庙之绘尽或雕刻神像、画雕人像等。",
  "合嵴": "修筑堤坝或桥梁等从两端施工，最后在中间接合。",
  "开光": "用经咒对吉祥物进行加持。",
  "卯不穿井水泉不香": "逢卯日或逢卯时不能挖井。",
  "断蚁": "指断蚁路。",
  "出火": "移动神位，火指香火。",
  "入殓": "将尸体放入棺材之意。",
  "巳不远行财物伏藏": "逢巳日或逢巳时不能远行并将自已重要财物隐蔽地藏起来，以防损失。",
  "认养": "领养人或物。",
  "装修": '老黄历中"修饰垣墙"。装修、粉刷房屋或围墙。',
  "月虚": "忌造成门、开张、开店。",
  "造车器": "制造水路交通工具，现亦指新车交车。",
  "出行": "外出旅行，观光游览。",
  "丑不冠带主不还乡": "逢丑日或逢丑时不能举行戴冠之礼，违之将可能有客死他乡之祸。",
  "月刑": "忌修造、词讼、出阵、行军、嫁娶、移徒、犯之主损人丁、六畜，凶日。",
  "买衣服": '老黄历中"裁衣"。古时临近婚期前一个月，男方还要备酒、蓝布和金银钗环交给媒人送到女方家，谓之“裁衣”。现指逛街买新衣服。',
  "出货": "借贷财物或货物。",
  "设醮": "建立道场祈求福祉。",
  "美甲浴足": '老黄历中"整手足甲"。古时指初生婴儿第一次修剪手足甲，现代可用于美甲或足浴的好日子。',
  "造船": "建造或制造船只。",
  "铺路": '老黄历中"平治道涂"。指铺平道路等工事。',
  "归岫": "房梁升上屋顶处接合完成。",
  "受封": "封官、封地，用现在的官员任用。",
  "纳婿": "指男方入赘于女方为婿之意。同招赘。",
  "交驰": "交相奔走，往来。",
  "庚不经络织机虚张": "逢庚日或逢庚时不能进行量体裁衣和缝补衣物。",
  "鸣鼓": "动身出发。",
  "问名": "男方遣媒人到女家询问女方姓名，生辰八字。",
  "戊不受田田主不祥": "逢戊日或逢戊时不能买田地或房产，违之将会给买主带来不祥之兆。",
  "开柱眼": "指作桩木之事。",
  "成人礼": '老黄历中"冠笄"。指举行男女成人的仪式。',
  "雇庸": "请工人。",
  "午不苫盖屋主更张": "逢午日或逢午时不能搭盖庐舍、草屋、修房顶之事。",
  "理发": "古时指初生婴儿剃胎头或削发出嫁。现代可用于日常的理发、做发型。",
  "天贼": "忌动土、竖造、入宅、开仓、埋葬、主招盗贼。",
  "习艺": "学艺，学新技术或新技能。",
  "纳畜": "指买入家畜家禽，收养宠物之事。",
  "死神": "忌绘塑、动土。",
  "开渠": "开挖水渠，兴修水利。",
  "纳财": "指购置产业、进货、收账、收租、讨债、五谷入仓等。",
  "买房": '老黄历中"置产"。指购买建成的房子。',
  "安机械": "安装机械及试车，安纺车。",
  "九空": "忌种植、出行、求财、开仓。",
  "拆卸": "拆掉建筑物。",
  "出货财": "商家之发货、出货、销货的意思。",
  "壬不汲水更难提防": "逢壬日或逢壬时不能进水放水近水，容易发溺淹之灾。",
  "合婚订婚": '老黄历中"纳采"。古时指缔结婚姻的仪式、受授聘金，现代可用于合婚订婚。',
  "开厕": "建造厕所。",
  "出师": "技艺已成，可自立门户了。",
  "房屋清洁": '老黄历中"扫舍"。指打扫屋内外清洁，消除厄运。',
  "修坟": "修理坟墓。",
  "求子": '老黄历中"求嗣"。指向神明祈求后嗣（子孙）之意。',
  "放水": "建筑、清理池塘或水族箱后，将水注入蓄池。",
  "补垣": "修补围墙。",
  "探病": "黄历中的“探病”，看望病人的意思。",
  "癸不词讼理弱敌强": "逢癸日或逢癸时不能诉讼之事，违之将可能引起败诉之果。",
  "求医": "仅指求医治疗慢性痼疾或动手术",
  "针灸": "针灸治疗。",
  "竖柱": "竖立建筑物的柱子。",
  "丁不剃头头必生疮": "逢丁日或逢丁时不能理发，违之可能会引发头疾。",
  "成服": "穿丧服。",
  "开池": "开凿水井，挖掘池塘。",
  "伐木": "指砍伐树木，修剪花木花枝。",
  "服药": "服用药物。",
  "诉讼": '老黄历中"词讼"。诉讼，打官司的意思。',
  "作灶": "安修厨灶、厨炉移位。",
  "赴任": "官吏去到某地担任职务。",
  "四击": "忌上官、远行、出军、嫁娶、进人口、迁移。",
  "己不破券二比并亡": "逢己日或逢己时不能去调动钱财，更不能进行风险投资，违之将钱财两空。",
  "坏垣": "拆除围墙。",
  "造床": "制作床。",
  "亥不嫁娶不利新郎": "逢亥日或逢亥时不能进行婚姻嫁娶之事。",
  "塞穴": "补修破墙后，堵塞蚁穴鼠洞及其他洞穴。",
  "筑堤": "修筑或加固河堤或海堤。",
  "会亲友": "与亲戚朋友联络交往。",
  "牧养": "牛羊或家禽放牧。",
  "诸事不宜": "“宜：诸事不宜”：是指这一天没有特别合适做得事。不吉不凶，平。“忌：诸事不宜”：是指这一天做事犯忌，凶。",
  "起鼓": "古代击鼓报更，也是指第一次打更。",
  "治道": "修筑道路。",
  "造庙": "建造宫，观，堂，寺，庙。",
  "月煞": "忌造成门、开张、开店。",
  "打扫": '老黄历中"解除"。打扫卫生，指冲洗、清扫宅舍、消除灾厄等事。',
  "除服": "除去丧礼之服。",
  "治病": "治疗疾病。",
  "打猎": '老黄历中"畋猎"。指打猎或捕捉禽兽。',
  "定磉": "平建基，固定石磉。",
  "开业": '老黄历中"开市"。开业之意。商店行号开张做生意。同“开幕礼”“开工”。包括：年头初开始营业或开工等事；新设店铺商行或新厂开幕等事。',
  "动土": "指阳宅（即住房）之建造与修理。",
  "结婚": '老黄历中"嫁娶"。男娶女嫁，举行结婚大典的吉日。',
  "未不服药毒气入肠": "逢未日或逢未时不能服药。",
  "修造": "指阳宅之建造与修理。",
  "百无禁忌": "做什么都不会犯忌讳。",
  "四耗": "四季休干所临春分、秋分、夏至、冬至的时日。",
  "归忌": "归忌:忌远回、入宅、归火、嫁娶。",
  "天牢": "指设置在京由朝廷直接掌管的牢狱，也指北斗中的贯索星。泛指易入难出的地方。该时辰容易落入陷阱、圈套等困局的事。",
  "大时": "日聚殃，往来其下，必致死门。",
  "大败": "忌出行、营谋、求婚、百事凶。",
  "咸池": "忌淫乱，嫁娶，和合、口舌是非，家宅不宁。",
  "五离": "忌嫁娶、定亲。",
  "天吏": "凶日，百事忌。",
  "四忌": "忌上官、远行、出军、嫁娶、进人口、迁移、百事忌。",
  "五虚": "忌闻张、闻库、闻铺、闻店。",
  "复日": "忌安葬、修坟、破土、启攒、入殓、移柩、成除服。",
  "白虎": "四象之一，其形象虎，位于西方，属金，色白，总称白虎。此处代表凶杀，血光。该时辰容易发生车祸等较严重的意外，购物则容易破损。",
  "触水龙": "忌造船、修船、行船。",
  "大煞": "忌出行、移居、词讼。",
  "劫煞": "劫煞别名年夜耗，古歌云：劫煞为灾弗成当，枉然驱驰名利场，须防祖业尽灭亡，老婆若何得悠久。",
  "八风": "忌行船。犯之翻船损财。",
  "勾陈": "为紫微垣中星座名，古代传说五帝中即有勾陈大帝统御万雷。因形弯曲如钩，引申为曲折、缓慢。该时辰容易发生阻滞不前之事。",
  "天刑": "指上天的法则，天降的刑罚，也特指古代的宫刑。引申为意外之灾。该时辰容易发生意外、带来身体伤害，或东西发生破损等。",
  "元武": "即玄武，是北方七宿的总称。",
  "九焦": "忌种植、修造、破土之事。",
  "九坎": "忌种植、修造、破土之事。",
  "土府": "忌种植、起造、动土等事。",
  "小耗": "忌栽种、五谷、及百果。小耗、百事忌。",
  "五墓": ":凶日，百事忌。",
  "灾煞": "忌出行、移居、词讼。",
  "天火": "忌盖屋、入宅、起造、修房。",
  "血忌": "忌针灸、刺血、阉割、六畜、穿牛鼻。",
  "月厌": "忌嫁娶、造酒、出行。",
  "地火": "忌栽种、五谷、及百果。",
  "河魁": "忌起造、安门。",
  "重日": "忌订婚、嫁娶、治病、词讼。",
  "八专": "忌行军、出阵、安营。",
  "厌对": "对冲为厌对。主鬼神、妨婚姻。",
  "招摇": "忌出行、移居、词讼。",
  "四废": "忌修造、交易、安床。",
  "游祸": "忌求医、祭祀。官历宜服药。",
  "血支": "忌针灸、刺血、阉割、六畜、穿牛鼻。",
  "地曩": "忌栽种、五谷、及百果。",
  "月建": "不宜修造、起工、动土极凶，宜避之。",
  "小时": "犯之令小儿肚胀，泻痢。",
  "土符": "忌种植、起造、动土等事。",
  "天德": "指天之福德，即自然界养育万物的生机之所。天德所在的方位和时间适宜兴举各种事务。该时辰各类事情都较合适，特别适合结婚典礼。",
  "月德": "月德者，月之德神，当月所吉之日，以月支之三合，取其五行之阳干为用。月德日利于起基动土、出行赴任、求官求职、行善淑世、自积福荫，事半而功倍。",
  "天恩": "天恩日为上天施恩德泽予民之日。施恩者，予人而不思回报之关怀也，故天恩日最宜择人任事、奖赏部属、救济贫困、布施政事为民与利除害。",
  "母仓": "太岁神煞出去游历日，适宜祈福、许愿、开光等。",
  "天医": "天医是掌管疾病之事的星神。天医日可以求医、治病，服药、针灸比较有效。可以作为方向论，例如五月天医在戌，则可向西北偏西的方向去看医生，如果医生又属狗，则更妙。",
  "三合": "为五行合之简称，即亥、卯、未合木局，寅、午、戌合火局，巳、酉、丑合金局，申、子、辰合水局，三合者如聚结群力，众志成城，故宜订亲、嫁娶、结盟、会友、立券交易、开市、纳财。",
  "天喜": "天喜神乃四库，春木旺而火归戌库，夏火旺而金归丑库，秋金旺而水归辰库，冬水旺而木归未库，命中带天喜神主平生快乐欢欣。",
  "鸣犬对": "鸣犬时的对日，即鸣犬时后的第六日，作用与鸣犬同，适合开光。",
  "四相": "宜祭祀、上官、订婚、嫁娶、修作等。",
  "官日": "上官赴任的好日子。",
  "吉期": "指婚期。《醒世恒言·大树坡义虎送亲》：“吉期将到， 梁大伯 假説某日与儿子完婚，特迎取姐夫一家到家中去接亲。” 明 叶宪祖 《鸾鎞记·圆成》：“今何夕，是吉期，称良会。”",
  "圣心": "宜敬拜、祈福、嫁娶，有虔城之意。",
  "青龙": "四象之一，其形象龙，位于东方，属木，色青，总称青龙。此处代表贵人，也即能帮助你的人。该时辰各类事情都较合适，特别利于向他人求助。",
  "时阴": "秋冬之时；薛综 注：“阳，谓春夏。阴，谓秋冬。”这里指时辰的阴神。",
  "民日": "月神中吉神的一种，能增强普通百姓的运势。",
  "要安": "宜嫁娶、订婚、求财、造葬等。",
  "除神": "适合打扫卫生、理发、沐浴等。",
  "鸣犬": "鸡鸣犬吠之意，民间鸡叫和狗叫有避邪的意思，特别适合开光。",
  "天巫": "天巫象征地位提升。",
  "福德": "福德为月令生旺之气，阴阳解凶之神。命带福德秀气者，赋性聪明，温原和气。",
  "五合": "宜嫁娶、开光、开市等。",
  "天仓": "有收纳储蓄的含义，宜订婚、嫁娶、牧养、纳财等。",
  "不将": "指宜于婚嫁的吉日。阴阳家谓:“阳将伤夫，阴将伤妇;阴阳俱将，夫妇俱伤;阴阳不将，夫妇荣昌。”见《协纪辨方书．义例．阴阳不将》。",
  "玉堂": "玉饰的殿堂，亦为宫殿的美称，宋以后翰林院亦称为玉堂。引申为豪华、高档住宅、贵人居所。该时辰宜见贵、装修、观光旅游等。",
  "天德合": "与天德相合的日子。天德，即自然界（造物主）养育万物的生机。也是宇宙星辰放射给地球的阳能。“上天有好生之德”，德者、生之能也。",
  "天马": "宜出行、移居、入宅等事，有走动变动之意。",
  "月德合": "所谓月德合日，就是与月德日干相合之日，日为阳，月为阴，故取相合之日干皆为阴。月德合日，百福并集，诸事皆宜，是个好日子，宜多加参考运用，尤利于由内而外拓展所图。",
  "敬安": "敬安者，敬重、端肃、安定、逸心乐之意。人与人之间互相恭敬则必安，敬安之日乃为恭顺之神当值，故宜召开有关家族、企业、组织等相关会议，亦宜拜访长辈，推荐朋友、求职、赴任等。",
  "宝光": "全名宝光黄道，宜祈福、搬家等。",
  "临日": "以正月午日、二月亥日、三月申日、四月丑日等为临日，宜祭祀、上册、上表章、入学、出行、上官赴任等。",
  "阳德": "德者得也，得到天地间最适宜、和谐之气化。阳德，为月中之德神，阳德日为德神当值之日，气化调合，诸事顺遂，故宜立券交易、开市、纳财、纳采、订盟等。",
  "相日": "五行之衰旺，得令则为旺为相，不得令则相反。四相日为四季之干支所生，修造、起基动土、移徙、出行，均可取用之。",
  "司命": "文昌宫的第四星，掌管生命的神，亦指关系生命的者。引申为负重大责任，发号司令的人。该时辰宜晋升、见贵、看病等。",
  "益后": "对子孙后代有补益的神。",
  "金堂": "是指适合兴土木、筑房的日子。",
  "天愿": "天愿日，以月之干支为依据，择与之和合之日为是，故为月之喜神，宜求财、出行、嫁娶、祈福。因为六十甲子循环一周为六十日，一个月仅三十日，所以未必每月会逢天愿日，所以，若逢天愿日可多参用。",
  "六合": "古代以年月日时十二地支，选择吉日良时，考虑月和日的“冲（不利）”或“合（有利）”，“合”指子与丑合，寅与亥合，卯与戌合，辰与酉合，巳与申合，午与未合，称十二地支六合。",
  "金匮": '亦作""金柜""，铜制的柜，古时用以收藏文献或文物。引申为久远、博学，富贵。该时辰宜物品收藏、文书合同签订、订婚、购物等。',
  "阴德": "阴德者，月内阴德之神，阴德日为阴德之神当值之日。天地间之气化有阴就有阳，互而为用，正所谓孤阳不生，独阴不长。德之神，扬善嫉恶，明察功过之神，凡有冤情待平复，或行善积德、惠泽贫困之举，选用阴德日其愿顺遂。",
  "月空": "宜上表、修造、动土。",
  "玉宇": "宜修宅、造宅、搬家。",
  "解神": "月中善神。《协纪辨方书·义例三·解神》：“《总要历》曰，解神者月中善神也，所值之日，宜上词章雪寃枉。” 唐 戴叔伦 《和李相公勉晦日蓬池游宴》：“高会吹台中，新年月桂空……微文复看猎，宁与解神同。”",
  "续世": "为人子女，能继志述事为孝亲。续世者，月之善神，亦有日新月异、绵延永续之意，故续世日最宜婚嫁、祭祀、求子，甚至受孕。",
  "月恩": "月恩日，以当月五行之干支为依据，受月之干支所生的就是月恩日，如人之母恩于子之意。月恩日一样是适宜由内而外，拓展所图，如修造、起基动土、祭祀、嫁娶、求财、赴任等。",
  "五富": "富者，财物丰饶之意。五富日均择亥、寅、巳、申长生之日为用，又具丰饶富强之意，故是日宜举办隆重的会议、产品展示会、促销活动、作品发表会、及各类庆祝会、运动会等团体活动。",
  "时阳": "春夏之时；温暖之时。《文选·张衡＜西京赋＞》：“人在阳时则舒，在阴时则惨。” 薛综 注：“阳，谓春夏。阴，谓秋冬。” 南朝 宋 孔宁子 《櫂歌行》：“君子乐和节，品物待阳时。”这里指时辰的阳神。",
  "生气": "代表生命力、活动、生机之意。",
  "守日": "上官赴任的好日子。",
  "驿马": "驿马为发动之要神，岁、月、日、时之中有之。俗云：三合头冲为驿马。即谓驿马所居之处为三合首一字之冲神，例如：寅、午、戌月，逢与寅相冲之日支为申，申日则为驿马日。驿马是奔波、外求，进而不已之神，所以是日逢出行、赴任、移徙、谒贵等事均可选用。",
  "天后": "宜求医、疗病、针灸、服药之类的事情。",
  "时德": "德者得也，得天地之所生也（即天地之舒畅气化也）。时德日以季论，春季逢午日、夏季逢辰日、秋季逢子日、冬季逢寅日为时德日。既为四时所生，祈福、宴请、求职、谒贵均适宜。",
  "桑拓木": "壬与子及癸属水，水多则生木，则有木，丑属土，土克水生金，金克木，木受损则有伤，故名桑拓木。 此木是供蚕的食用，用途许多。喜爱砂土，以沙土为根基又以辰巳为蚕食之地不宜刑冲互破，路傍大驿二土次吉佘土无益。水喜银河为雨露之滋，长流溪涧井泉诸水皆可相依，亦须先得土为基愈加禄贵为妙，沦海水漂泛无定，无土主夭。诸火不宜叠见。以金言之砂中首，剑锋能修整此木为次，钗泊二金须得土为基，如逢动破又凶，木喜庚寅辛卯为以弱就强以小变高文贵格论，纵无砂土亦吉平地柏榴无土则凶，大林是东南蚕食之位有土资生主大贵，遇柳树为桑柳成林亦是贵格老生春夏方吉。壬子年出世：性情杂乱，终身崎岖多见！双亲缘浅，其人独立心强旺，为人顽固，干事最怕有欠一直，夫妻缘差，兄弟、兄弟助力少。癸丑年出生：有学识、专技、艺术方面特长；性情杂乱，终身崎岖多！大都学、技、艺上得见成果。女命：可贵良缘，终身须防有共夫景象；特性多顽强。",
  "天上火": "天上火者温暖山河，辉光宇宙，阳德丽天之照阴精离海之明，戊午为太阳则刚己未为太阴则柔，或以为夏日则刚，冬日则温，诬也，俱要戌亥为天门，卯酉为出入之门，东南为行陆之地则吉。此火见木谓之震折，要日时有风兴水方得。大林木有辰巳松柏石榴有卯酉惟此三木主贵。午见木多犹可，未三四木劳苦之命也。见金且能照耀不能克济。钗金有戌亥泊金有寅卯主吉。剑金为耀日月之光必主少年及第。佘金则殃。水亦润下，须戊午见丁丑，己未见丙子阴阳交互方为福贵，柱中更有木滋生，富贵双全。大溪有乙卯井泉有己酉出入得门皆吉。天河雨露相济，不以就位相克论。戊午见丁未亦吉丙午则不明，火爱灯头再有别火则燥。霹雳带云雨则日月无光主昏蒙。炉中午忌丙寅以午为刚火见丙寅便为火生之地，若无水解救主犯刑凶死，丁卯稍可。土见砂中有巽风相假，路旁城屋皆吉。柱中更有金木资助尤吉，考妙选戊午遇卯，己未遇酉为日月分秀格，而卯以乙卯辛卯为正，己卯丁卯次之。酉以乙酉癸酉为正己酉丁酉次之。有日出扶桑格，即日分秀，再见巳午日时。有日轮当表格，以戊午生于午月再见巳午日，又以戊午见戊子为坎离正位，有月生沧海格，即月分秀，而酉得乙癸是也，有月照寒潭格，是取壬癸亥子纳音属水为潭然必秋生为贵。有月桂芬芳格，是己未生人柱有三四木拱集与桂林一枝同，桂林以少为贵，芬芳以多为贵，义各有所取也。再考凶格中太阳损明，戊午不禁于水溢是嫌水盛，太阴薄食己未岂堪于土多是嫌土重也，须如是并参方尽其理。",
  "剑锋金": "剑锋金如利剑之锋，已受过千锤百炼，剑光万丈、剑气逼人，特性：刚毅、果断、沉稳、才能卓越，能人所不能，有自我突破、自创局面的本事有鸿?之志，志气大，口气也大。为目的不念感情，为激进不怕招怨缺点是无情冷酷，锋芒外露，要注意侧面的袭击。硬物虽坚，亦有其脆弱的一面最怕丙寅丁卯炉中火、戌午己未天上火、戌子己丑霹雳火建议，利能断金，忌锋芒毕露，易惹小人怨，恐招沟陷。要知利剑不能轻易出鞘之理，韬光养晦，逸不露，要眼观四方，耳听八方，不要一味激进，赶尽杀绝，而忌了背后及侧面，座右铭是：毋毁众人之名，以成一已之善 毋埋天下之理，以护一已之过，事当快意处须转言到快意处须住物忌全胜事忌全美人忌全盛 行运。",
  "炉中火": "丁卯日辛丑时，辰巳未年月，富贵，妻子迟。寅卯印助，戌库身旺，刑。丑丁，得倚托，大贵。丁卯日壬寅时，贵化吉。寅卯年月，行金水运，大贵。亥子月，行西运，贵。丁卯日甲辰时，辰戌丑未月，孤克，运通发财。丑月，南方运，贵。卯月，金水运，近侍权贵，不利建白。丁卯日丁未时，刑中发。寅卯月，印绶，发财敦厚。辰戌申午，俱吉。丁卯日戊申时，春，伤官用印;秋，伤官用财，俱吉。夏，比肩;冬，伤官见官，平常。四季月，吉。丁卯日己酉时，时日并冲，忧伤妻子，通火气吉。忌乙卯字。年月有亥未、巳丑，但一字两合，不以冲论。丁卯日庚戌时，生亥未年月，三合会印，贵。子月，煞印，吉。年月建禄，僧道，主贵。柱无救助，见癸旺，多患目疾，酉月无贵;纯酉戌年月，天干透己甲者贵，中带凶。丁卯日辛亥时，时上财官印三奇，再得年月印助财生，皆主大贵。纯子，行木火运，官可六品，巳酉丑月，辛财得局，方有倚旺，富贵双全。",
  "涧下水": "涧下水者，山环细浪，雪涌飞端，相连南北之流，对峙坎离之脉。此水清澄，喜见金养，砂中、剑锋二金最宜。钗钏庚戌丁丑不宜，以丑戌相刑，辛亥见丙子则丙辛化水，尤贵；余金以禄贵参之，取其资生，恶其冲破。见木一位不妨，二三则主劳苦，亦以贵人禄马参之。命中见土，主人多浊天元，若木或化水，则主清吉；砂中、屋上二土，其气稍清，路旁、大驿则浊甚矣，主财散祸生，如辰、戌、丑、未土局，其凶尤甚，以水浊土浑故也。火见太阳，虽炎，中间有既济未济之论；霹雳就位相争，最所不宜。",
  "井泉水": "井泉水者，寒泉清冽，取养不穷，八家凿之以同饮，万民资之以生活。此水生于金而出于木，故喜见金为福，砂中有土，性与之最宜，钗钏清秀次之，蜡金与钗金相冲，故不宜再见；剑锋申酉太旺，恐有泛滥之灾；海金无取，乙丑为艮，山下出泉，亦吉。此非木不能出，譬之桶论，故见木皆吉，如见平地、大林，须假剑金削之，方可取用；桑拓、杨柳无用；松柏则互换归禄，此其最吉。诸火阴阳互见则吉，霹雳名为入圣，太阳号为显照，二火相见最吉，但不宜并有则凶。诸土路旁、砂中最吉，屋上有天门生水之源，亦吉；城头，壁上与此水则无干涉；大驿就位相克，水为土掩则井不食，须有木去之方可。水喜大海，为引凡入圣；天上、涧下、长流亦不为在灾；大溪甲寅乙卯为吉，如甲申见乙酉，乙酉见甲申，官星互换，最吉；如二水在年时，二木在月日，谓之水绕花堤，乃贵格也。",
  "城头土": "城头土者天京玉垒，帝里金城，龙盘千里之形，虎居四维之势。此土有成未成作两般论，凡遇见路傍为巳成之土不必用火，若无路傍为未成之土，须用火。大都城土皆须资木杨柳癸未最佳，壬午则忌，桑柘癸丑为上，壬子次之。庚寅辛卯就位相克，则城崩不宁何以安人也。",
  "白蜡金": "白蜡金者，昆山片玉，洛浦遗金，交栖日月之光，凝聚阴阳之气，形明体洁，乃金之正色也。此金惟喜火炼，须炉中炎火。然庚辰见之，若无水济，主贫夭，辛巳却以贵论，缘巳是金生之地，见丙寅化水逢贵故也；山下火生早，主荣贵，亦须水助方得。井泉、大溪俱为贵格。庚官在丁，辛官在丙，故庚见丁丑，官贵俱全；辛见丙子，不如癸巳更清，不贵即富。论中见木，逢多无益，以此金不能相克。若柱遇无气之火，却要木生，有禄马贵人方吉。见土只宜磨砌，方成器物，则吉，别土无用。金忌海砂，为汨没，日时逢火则荣。若见清金，加水相助，火亦不爱，只怕冲刑。妙选有哨风猛虎格，以此金日时遇辛巳或乙巳是也。",
  "霹雳火": "霹雳火者一娄毫光，九天号令，电掣金蛇之势，云驱铁马之奔。此火须资风雷方为变化，若五行得此一件皆主享通。如日时见大海癸亥引凡入圣己丑为上戊子次之。见大溪乙为雷火变化己丑吉戊子次之。辰巳为风运中遇之尤佳。天上水名为既济主吉遇之者禀性含灵聪明特异。长流无用。涧下虽就位相克，此神火也是不忌，有风亦显。五行见木辛卯有雷，大林有风平地有天门，与此火相资，佘无用。土见路旁加巽则吉，砂中丁巳有风己卯有雷得泉助之亦主贵显。剑金加水海金遇风蜡金逢涧皆吉。佘金无用。见炉中丁卯为吉，戊子逢丙寅太燥性凶主夭。己丑见丙申却得，戊子忌之。灯火东南巽地有风最宜，戊午己未天上火日时遇之防刑克，再考妙选有烈风雷雨格，既霹雳见天河是也。有天地中分格既戊子见戊午是也。有雷霆得门格，既戊子己丑日时遇卯是也。三格纯戊午与前说不同。 　霹雳火者，一缕毫光，九天号令，电掣金蛇之势，云驱铁马之奔。此火须资风水雷方为变化，若五行得值一件，皆主亨通。如日时见大海，癸亥为引凡入圣，己丑为上，戊子次之；见大溪，乙卯为雷火变化，己丑为吉，戊子忌之；辰巳为风运中，遇之尤佳；天上水名为既济，主吉，遇之者禀性含灵，聪明特异，长流无用，涧下虽就位相克，此神火也，不忌，有风亦显。五行见木，辛卯有雷，大林有风，平地有天门，与此火相资，余木无用。土见路旁，加巽则吉，砂中，丁巳有风，己卯有雷，得泉助之，亦主贵显。剑金加水，海金遇风，蜡金逢涧，皆吉，余金无用。见炉中丁卯为吉，戊子逢丙寅，太燥性凶，主夭。己丑见丙申却得，戊子忌之；灯火，东南巽地，有风最宜；戊午己未天上火，日时遇之，防刑克。再考妙选，有烈风雷雨格，即霹雳见天河是也，有天地中分格，即戊子见戊午是也，有雷霆得门格，即戊子己丑日时遇卯是也。",
  "山下火": "山下火者草间熠耀，花裹荧煌，寒林缀叶之光，隔幔点衣之彩，方朔以萤火名之。故妙选有萤火照水格，遇秋生则贵为卿监，是以此火喜水地支逢亥子或纳音水更遇申酉月是也，或以山下之火最喜木与山更得风来增辉为贵又不以萤火论矣。大林有辰巳为风桑柘木有癸丑为山松柏平地最吉更得风助主贵，若风多吹散主夭。水爱井泉涧下有木相资主爵位崇显，大海水不宜，然有山亦应贵格，寅卯为东方木旺火生之地只甲寅水吉，乙卯为震有风见之不佳若无火无山更加霹火主夭，天上水为骤雨此火不宜相见，若先得山水滋助亦无大害。命裹有金，以清秀为吉无木多逢以穷气论之，乙丑为山主贵，佘金若无克破遇贵人禄马只以财论。土见砂中辰巳有风若有木有山加助主大贵，无则虚名。火忌霹雳太阳，灯头是巽主显，大都五行有火须资木则吉，限数喜忌俱依此断。",
  "大溪水": "大溪水者，惊涛薄岸，骇浪浮天，光涵万里之宽，碧倒千山之影，最喜有归有养，遇坎则为有归，得金则为有养，所嫌者，日月时中，有申酉冲动，或辰已风吹，主飘流；井泉水净而止，涧下有丑为艮，天河沾润，大海朝宗，此四水皆吉；长流有风，独不宜见。此水以清金为助养，唯钗、砂最宜，蜡金亦清，若有钗金对冲则不宜；海中虽无造化，甲子属坎，乙丑为艮，乃归源之地，亦吉；泊金最微，不能相生，岂有超显之理？剑金虽化于大溪，却忌卯雷巽风，主性不定。五行有土，皆为无益，屋上、城头壅阻此水，路旁稍可，亦不为奇；壁上独辛丑为山，大驿唯己酉有合，戊申则冲，庚子则刑，皆不为吉。火见太阳，虽假照耀，霹雳尤忌相逢，若二火互见，主贫，单见别论。木见此水，徒被漂荡，唯桑拓木壬子有坎，癸丑为山，为水绕山环之贵，内甲寅人见壬子吉，乙卯人见癸丑吉；余木以禄贵参之，尤忌冲破。",
  "屋上土": "实际上应是砖瓦，戌亥一水一土，和而成泥，再加上火以烧烤，就成为砖瓦。修屋造房各有所用，既是屋上土，则需要有木的支撑和金的刻削装点，屋上土方显金碧辉煌，大富大贵之象。大怕火灾，遇火则凶，但天上火（即太阳之火）除外。屋上土和壁上土都是算命的一种术语，是60纳音里的。60纳音就是10个天干和12地支轮换相配合得出的，两个都是土命是相比和的。如果一个是木命就成木克土了就不好了； 如果一个是水命形成土克水也不好 ；两个都是土命婚姻可以了，只不过是谁都不服气谁 。",
  "松柏木": "松柏木者，泼雪凑霜，参天覆地，风撼笙篁之奏，雨佘旌旆之张。此木藏居金下，位列正东，乃为极旺，最喜山为根基，水为滋润。天河雨露之水可以滋润，涧下丁丑属山，可为根基。丙子不如大溪，有乙卯为雷，可以发荣，却嫌风霹，有损折之凶；大海水有山则吉，癸亥清净无山，亦吉。若柱有平地，得屋土，则为已成栋梁，无用山水；无此二件，乃山间之茂木也，须要山水。命中有火，最忌炉中；就位相生，再加风木，灰飞烟灭。五行无水，主夭折，山头、山下、太阳、佛灯，皆不可犯；寅人尤忌戊午、丙寅，以木不南奔，寅午三合火局故也。辛卯无害，霹火虽可滋生，运加凡火，主凶。土见路傍，似无足贵，若无死木，其福还真。驿土无山，贫夭；更加海水，尤凶。金逢乙丑，为印为山，泊金就位，自旺主吉。剑锋能削能斫，更得壁土相成，松柏相资，主贵。大林有风，杨柳会火，二木最忌；桑有癸丑，为山可以相助；石榴是辛酉金，反化死木，有造化，却吉。妙选有苍松冬秀格，是以此木生人，月日时属三冬为贵，有日合辛卯、月值庚寅二格，虽取戊午己未，生居夏秋，然专论此二木为贵。",
  "石榴木": "石榴木者性如姜，花红似火，数棵枝头，累累多子，房内莹莹，干支纯金而纳音属木，乃木之变者也，可以移盆内而妆做山故喜成器之土，以为根基，城头为上，屋上次之，然必阴阳交见，则丙辛丁庚互官，戊辛己寅互印主吉。路、壁、驿、砂四土有山助之亦吉，若无何用，见砂中最吉，泊金干支有水木而纳音金，榴木干支金而纳音木皆脱去本性而互换归旺，以木旺寅卯，金旺申酉，各得其位，谓之功侔造化格，主大贵。海中乙丑为山，更逢水助则吉，或壁上、城头亦得剑锋，就位相克，最凶，若先有砂金能制其毒，亦不为害。水见天河雨露相滋，井泉溪涧，清水浇灌，大海太泛滥非贫则夭，有艮土稍得。太阳、霹雳二火虽喜，不宜并见。炉中寅卯旺位，本吉，再加别火则凶。若此木生于五月，日时只带一火，谓之石榴喷火，主贵。桑柘、大林、杨柳三木皆喜见之，见桑柘癸丑为山，见大林戊辰脱体，见杨柳花红柳绿，皆主功名，见松柏则强，见平地则大，若无别物夹杂，则绿绕红围，亦主富贵。如得城土为基，水运为助，享福优游最为长久。",
  "长流水": "长流水命者，混混无穷，滔滔不竭，就下必纳于东南，顺流自归于辰巳。此水喜金生养，金要白蜡、钗钏，以天干有庚辛真金，地支辰巳就位相生，戌亥为归源之地；剑锋纯是金水，泊金水木居东，皆以吉论；海中，砂中无取。嫌土蹇涸，而土有堤防之用，六土之中，取庚辛丙丁为吉，戊己无用。遇火则相刑，而有既济之妙，内壬辰喜见丁卯、丁酉，癸巳喜见戊子、戊午，以天干合化故也；灯头癸巳尤喜见甲辰，山头壬辰尤喜遇乙亥，化龙归禄，取义更佳。逢木虽漂泛，而桑拓癸丑为山，杨柳癸未为园，年时得此水围之，为水绕花堤，大贵格也；松柏、石榴，天干有金相生；大林、平地，虽嫌有土，而癸巳见戊辰，壬辰见己亥，俱吉。水为同类，涧下则丁壬合化，天上则雨露相资；井泉、大溪无益；海乃众流所归，而壬辰之龙得癸亥则龙跃天门，春夏秋生为吉，或龙潜大海，则冬生乃宜，柱中须先得金为妙。又壬辰为自印之水，再见壬辰则刑，刑则自害，见戊戌则冲，冲则泛滥，主凶；癸巳，自绝之水，名为涸流，若遇丙戌、丁亥、庚子、辛丑之土，其涸可待，柱中如得三合生旺之金生之则吉。",
  "沙石金": "甲午乙未沙中金，午为火势最旺之地，火旺则金衰，未为火衰之地，火衰败而金冠带，败而方冠带，未能作伐，故曰砂中金也。 砂中金初形成而未能有用，所以需火炼，但火过盛则〈火旺金败〉了，同时要有木制，使不随心所欲的盛衰，同时以火炼之，如山头火、山下火和覆灯火等性温和的火与它相遇，命书认为是少年荣华富贵的命局，另外，沙中陶金也是一种采金的方法，但水要净水如长流水、大海水则则把金沙一起淹没了，用井泉、涧下、天河等水也吉。沙中金怕遇见沙中土、大驿土和路旁土，是害怕被土覆盖的缘故。",
  "大海水": "水冠带在戌，临官在亥，水则力厚矣。兼亥为江，非他水之比，故曰大海水。   注释：   大海水汪洋一片，无人能知，就其汹涌澎拜则无人能抵。   因此以大海水为命的人，则有吉有凶。  万河归海，所以天河、长流、大溪等水遇之则吉；   如是壬辰与大海水相配则称为〈龙归大海〉；   如阴阳各支相配得当，则一生富贵无比，喜与见上火，因为日出东海；   金中喜海中金；   木中喜见桑柘木、杨柳木；   土中喜见路旁土、大驿土，吉；   明者皆承受不了大海水，相遇则凶；   如遇霹雳火相遇，海水汹涌，电闪雷鸣，这就是海上风暴的景象，人命如此，自然意味着其人一生颠簸。",
  "路旁土": "未中之木而生午位之旺火，火旺则土焦，未能育物，犹路傍土若也，故曰路傍土也。路傍土是土局中最有爱心、最具才艺、桃花最旺的五行局。路傍土坐命者爱心广被，有一颗怜悯之心，容易动情，稍稍拿捏不稳，就会擦枪走火，路傍土人若能甩开感情的包袱，事业成就是很大的。",
  "海中金": "海中金者，宝藏龙宫，珠孕蛟室，出现虽假于空动，成器无藉乎火力，故东方朔以蛤蚌名之，良有理也，妙选有珠藏渊海格。以甲子见癸亥，是不用火，逢空有蚌珠照月格。以甲子见己未是欲合化互贵，盖以海金无形，非空动则不能出现。而乙丑金库，非旺火则不能陶铸故也。如甲子见戊寅庚午是土生金，乙丑见丙寅丁卯是火制金，又天干逢三奇，此等格局，无有不贵。",
  "沙中土": "沙中土的意象：属相是黄龙和黄蛇、河谷、冲积平原、堤岸、湿泥、砂土、煲汤、海滩、阳光浴、沙浴，沙雕、紫沙壶、好喝茶、沙漠、穿山甲、古文物、埋没人才、埋没前程。日主为丙辰丁巳沙中土：不合群，孤独无助。",
  "大林木": "大林木者枝干撼风，柯条撑月，耸壑昂霄之德，凌云蔽日之功。此木生居东南春夏之交，长养成林，全假艮土为源癸丑为山，三命无破陷最为福厚权贵。戊辰为上己巳次之，土遇路傍为负载，戊辰见辛未为贵，己巳见庚午为禄主福，壁屋二土再得剑金，则大林之木取为栋梁，成格最吉。无此乃山间茂林之木，无论死活皆欲见土，如己人见甲虽云化土，然不如辰戌丑未土局纯全为妙。若此木以死，在山之下见甲戌乙亥烧之主凶夭。灯火就位相生乙巳不如甲辰更吉，霹雳太阳二火皆能长育，运中遇之亦吉。然二火嫌并见，持胜须有土为根基方可。水见天河，戊辰见丁未为带贵虽无土与山亦主有衣食即灵槎入天河格也，生秋冬死绝方是。溪海二水重见主贫夭，有山稍得。妙选有苍龙驾海格，是戊辰见癸亥为贵，涧下丁丑最吉丙子不如。诸金俱不宜见海中有乙丑为山剑锋得屋壁为本，佘无用逢之主夭贱。木喜桑柘惟癸丑最妙，平地还须得路傍土谓之平林在野，松柏东方生旺之地柱有癸丑，而得松柏为密阴最佳。",
  "山头火": "山头火者野焚燎原延烧极目，依稀天际斜辉彷拂山头落日，此乃九月烧荒，衰草尽热之火也。大既宜山木与风，木喜大林与松柏以辰巳有风，寅卯归禄，更得癸丑为上土木主贵，无山则木无所依火无所见，纵有风亦不光显佘木无用，只以禄马看，水宜涧下名为交泰主吉。井泉清水有木助之亦吉大溪甲戌见甲寅乙亥见乙卯却真禄俱吉。天上须有雨露，而火到午未得地，再得清水济之，不至于燥主福，不然则夭。大海就位相克最凶，有山逢之稍得日时见金为财须有山木助之则吉，无则凶，见土惟砂中有巽能扬此火别土无益，大凡此火无木见土，多是下贱之命，见火炉中太炎霹火凶害，太阳昏蒙，山下战刑皆所不宜。命带二三火如限数逢木主祸生不测或夭，大都此火大怕刑冲。",
  "金箔金": "金泊金是古代用金箔装修房屋，以显现富丽堂皇，金箔来源于其他金，长脸宫室，打薄须藉乎别金，描彩必假乎水力。此金甚微非木则无所依，木以平地为上，有此不宜见火，有火主夭。溪水大海水浊，见溪水主漂荡，见大海无木为基主凶横。可塑性高，可經由磨練而適應於各種職場。個性柔順，自我意識不高。有趨炎附勢的傾向，具攀交及潤飾特質，以添加自个的光荣及声望。金遇剑钗能够装修有辅成造化之理故喜见。砂海地蜡无益有火济之亦吉无则终凶。城头壁上二土有靠安身，城头多主寄人，壁上加木则贵再遇灯光辉光照射主权贵。丙戌土中藏火干支却不宜太炎亦为贵格。壬午年出世：军中之马。为人节俭，爸爸妈妈有刑伤，灾危可折，早年资产有紧，晚年旺相有余；女命，主兴家也，为贤能之妇。癸卯年出世：树木之兔。酒食不欠，福寿有余，绝处逢生，终身安全、兴隆一世；女射中末命运欠佳，需辛劳操持家务。",
  "杨柳木": "杨柳木者隋堤袅娜，汉苑轻盈，万缕不蚕之丝，千条不针之带。午未木之死墓壬癸木之滋润，此木根基惟喜砂土，见艮则依倚摇金，遇寅卯则东方得地，辛丑有山庚子不如，戊寅虽吉己卯尤胜，丙辰丁巳却嫌戌亥对冲，若见大驿有丑为山边之驿稍可，无土独见此土主夭贱。路傍就位复值死墓日时遇之主人卑弱，屋土壬午见丁亥丁壬合化则吉丙戌不如，水见井泉长流大溪涧下皆吉，中间又分合化旺位尤吉。丙午丁未丙丁真火午未亦火此木至午未巳死，壬午见之大凶，癸庶几有别水济之无害，此木午巳自有火更见别火恐引起伤寿，灯头乙巳有风木折主凶，炉中寅卯本位木旺反吉，霹火如壬午见己丑，癸未见戊子阴阳交遇更有砂土为基主贵，若子午丑未对冲则不为吉。金见本无造化，钗泊却喜成功，海蜡剑砂虽忌见之，其间轻重当以禄贵德煞参详，见松柏木为脱体化神之格也主贵，桑柘癸丑为山作倚傍成林主吉，庚申辛酉木既死绝又逢金克以弱遇小其人必贱，妙选有花红柳绿格，是以此木遇石榴生于春夏不以贱论。",
  "天河水": "天河水者乱洒六野，密沛千郊，淋淋泻下银河，细细飞来碧落，此乃天上雨露，发生万物无不赖之银汉之水。土不能克，故见土不忌，而且有滋润之益，天上之水地金难生，故见金难益，而亦有涵秀之情。生旺太过则为淫潦反伤于物，死绝太多则为旱乾，又不能生物，要生三秋得时为贵也。水喜长流大海，内丙午宜癸巳癸亥，丁未宜壬辰壬戌，阴阳互见尤吉。大溪乙卯为雷，井泉己酉为贵俱以吉论。火喜霹雳为神龙之火，与此水相济，而悠忽变化，云行雨施岂有不贵。炉中火旺，大海水旺，如柱中得二火二水上下相济，谓之精神俱足大贵格。灯头有风山头有贵，皆以吉论。又须别水济之方吉。天上就位相克则忌见之。木石榴杨柳俱吉，大林有巽，平地有亥亦吉，松柏石榴遇丙辛合化亦吉论，妙选有灵槎入天河格，是取死绝无根之木，柱无土培则漂流天河是也。土虽不能克而柱逢庚午辛未就位相克，土壅水滞，或水又冬生则水结池塘必主浊滥。佘土如砂中屋上皆吉。城头大驿无用。壁上地支对冲亦坏造化。水金虽不能生，独辛亥钗金属乾天，水在天上只此最吉。佘金亦取天干有庚辛壬癸者为用。甲乙无益再以禄马贵人参之，始得。妙选又以水生人得庚子壬子为云腾雨施，生春则旱，夏则潦，冬则寒，独三秋最吉。遇甲辰乙巳庚辰辛巳柱中有壬为云有辰为龙，为风雨作霖，若生冬月是为霜凝薄露，日时喜遇寅卯温和之气可解其冻俱贵格也。",
  "大驿土": "大驿土者堂堂大道坦坦平途，九州无所不通，万国无行不至，此乃位属坤方，德乃厚载，轮天转日负海乘山之土，发生万物，以木为基，戊申长生之土，德厚无疆，见三四木皆能滋生，己酉自败之土，木多则窃气，大林合中逢冲主夭，别木则吉，更以禄贵参之，井泉涧下二水清贵不燥，如戊申见丁丑或乙酉见丙子或甲申谓之官贵主吉。天河丙午而己酉得之，丁未而戊申得之亦为贵禄主福长流。戊申见癸巳，己酉见壬辰亦吉，多逢则不宁静，大溪乙卯为东震发生之义单见亦吉。海水对穿土不能胜，日时遇主夭，得山稍轻，内戊申见癸亥戊癸合，申亥为地天交泰反吉。火见太阳霹雳谓之圣火最能发生此土，如逢水助主显达。其余凡火再逢木生之更燥，主凶夭。五行见土惟路傍最宜屋上壁上砂中纵先得木亦为泯绝，城头有水稍吉。命若有金，清秀吉，钗钏得辛亥金泊得壬寅，戊申遇之，柱中更加水助乃天地交泰，水绕山环大格主贵。己酉见庚戌癸卯稍次。砂金造化，亦同剑金须候木得用不然无益。",
  "平地木": "平地木者，初生萌蘖，始发枝条，唯资雨露之功，不喜雪霜之积，此乃地上之茂材，人间之屋木。戊戌为栋，已亥为梁，最宜互换见之，须以土为基，土爱路旁，为正格，更逢子午，尤贵，以子午为天地正柱故也；屋、壁、城头三土以此木相资，中间有升化，尤吉；砂、驿无用，日时见之，主灾；太阳、霹雳，最为显耀，炉中遇水则福，灯头无风则固，余火无水则凶；此已成之木，不宜剑金，有木相资则可；泊金增饰光辉，又天干合，地支旺，更有旁土为基，主大贵。余金无用。水见天河，为润泽，主吉；溪、海无山俱凶；井泉、涧下虽吉，内甲申合丁丑为山，遇之尤吉。木见大林，有风摇动，主寿促；桑柘癸丑最吉，壬子己亥人见之为贵，戊戌人不堪；松柏木倚辅平地为栋梁，更有土助，主贵。大抵此木恶金而喜水、土，若生三冬时，得寅卯为寒谷回春，亦贵论也。",
  "壁上土": "壁上土者，恃栋依梁，兴门立户，却暴寒之德，遮霜护雪之功。此乃人间壁土，非平地何以为靠？子午天地正柱，逢之尤为吉庆。凡见木皆可为主。庚寅辛卯亦是栋梁，只辛酉冲破，子卯相刑；大林有风，若无承载之土，加凡火，主作事难成，贫贱而夭。土爱路旁，谓之负载，屋上城头，可以护身，皆吉。见火，全无造化，太阳霹雳，虽云照耀，到底蹇危。若命先见木遇火，助鬼焚克，运再逢之，主祸患夭折。柱有水救济，稍得；水见甲申为最吉，乙酉次之，天上雨露亦吉，大海漂泛，此土何安？纵有根基，亦凶。诸金惟爱泊金，命里先有木神则贵，以其成宫室而金碧辉煌，非朝廷不敢用也；剑金伤害，余金无用。",
  "覆灯火": "覆灯火者，金盏光，玉台吐艳，照日月不照之处，明天地未明之时。此火乃人间夜明之火，以木为心，以水为油，遇阴则吉，遇阳则不利。凡日时最忌再见辰已，地支有冲，恐风吹灯灭，主夭。或以戌亥，子丑为阴，或以自未至亥为阴。五行见木为根本，凡木皆好，更得官星、禄贵相扶，干头化水，尤吉；限运遇相助，主大贵。水以井泉、涧下为真油，长流假油，妙选有暗灯添油格，即此理也；大海、河水则不可以为油，遇者主寻常。大凡此火，见水须资木，不喜长生旺气，水太泛，反凶。命值泊金照耀，最为清贵，亦须水木相资，方能显达；砂中、钗钏二金皆吉；剑锋一金，谓之灯花拂剑，尤吉；蜡金不宜。五行见土，须防克破。若壁土可以安身，屋土可以覆庇，日时并见，主福贵，砂土有木，亦主衣食，余土无用。火爱同类，却怕风吹。霹雳为龙神变化之火，必带风来，此火难存；天上、炉中二火相见，最凶。再考妙选，有魁星格、指南格，以甲辰生人，日时遇午未为是；有火土入堂格，以此火怕风，日时遇丙戌丁亥屋上土，则灯在屋中，更得添油，尤贵。",
  "钗钏金": "钗钏金者，美容首饰，增光腻肌，偎红倚翠之珍，枕玉眠香之宝。此金藏之闺阁，惟宜静水井涧溪流见之皆吉多见则泛。海水贫夭，天河辛亥见之无妨，丙午真火庚戌凑成火局有伤此金也，太阳火，日生显耀。佛灯火夜间显耀皆宜见。但甲辰乙巳与庚戌辛亥相冲，阴阳互见为妙。戊子己丑与丙午丁未相持二火忌叠见，非贫则夭。炉中火庚戌最忌，辛亥见之有丙辛合化水稍吉。山下山头俱不宜见，若有水济亦可。柱中有木此金入于匣中有福贵方吉。土见砂中相生相养更有涧下水助荣华富贵。金喜剑锋则成造化。泊金增光钗钏须假微火济之。别金无用。若命中只有金水更无夹杂，为金白水清在活法推之。",
  "砂石金": "甲午乙未沙中金，午为火势最旺之地，火旺则金衰，未为火衰之地，火衰败而金冠带，败而方冠带，未能作伐，故曰砂中金也。 砂中金初形成而未能有用，所以需火炼，但火过盛则〈火旺金败〉了，同时要有木制，使不随心所欲的盛衰，同时以火炼之，如山头火、山下火和覆灯火等性温和的火与它相遇，命书认为是少年荣华富贵的命局，另外，沙中陶金也是一种采金的方法，但水要净水如长流水、大海水则则把金沙一起淹没了，用井泉、涧下、天河等水也吉。沙中金怕遇见沙中土、大驿土和路旁土，是害怕被土覆盖的缘故。",
  "往亡": "忌行兵、嫁娶、出行、求财凶。",
  "月害": "忌修造、词讼、出阵、行军、嫁娶、移徒、犯之主损人丁、六畜、凶日。",
  "四穷": "忌分居、入宅、安门。犯之不遂，损财不宁。",
  "阴错": "忌出行、移居、嫁娶、诸事大凶。",
  "阳错": "用阳建的地址搭配当方的天干，阴阳自相配合是日，以当值所冲的月宿作为阳错。",
  "天狗": "不适合嫁娶。",
  "三丧": "忌婚姻、埋葬、犯之退人口。",
  "四离": "忌上官、远行、出军、嫁娶、进人口、迁移、百事忌。",
  "天罡": "代表充满阳性的正气。",
  "死气": "表示所行之运陷入死穴，对事不吉利。",
  "玄武": "四象之一，其形为龟，或龟蛇合体，位于北方，属水，色黑。此处代表欺诈、不实。该时辰容易被骗、易买到假货等。",
  "地囊": "四时三合卦的纳甲。",
  "鬼哭": "旧俗中每月看病、针灸、服药之凶日。",
  "大退": "忌修方、开光、造葬。合格局，可汇气进补制化。",
  "不成": "忌偃武、习艺、结义、作染、打井、作灶。",
  "地贼": "忌入宅、开市、兴造、祭祀、出火（宜用明星或丙时制化）凶。",
  "受死": "俗忌诸事凶。惟畋猎、取鱼、入殓、移柩、成服、除服、破土、启攒、安葬吉。",
  "重丧": "忌安葬、修坟、破土、启攒、入殓、移柩、成除服、开生坟、合寿木、修齐凶勿用。",
  "官符": "忌赴举、修置产室、偃武、医病、断乳、栽种凶。",
  "木马": "忌伐木、架马、做梁、合寿木凶。",
  "破败": "忌立向、修作。宜取三德、帝星、太阳、三奇、贵人制化。",
  "杨公忌": "忌入宅、移徒、出火、分居大凶。",
  "荒芜": "凡事皆忌，如日课逢生旺吉多可用。",
  "五鬼": "忌立向、修作。宜取三德、帝星、太阳、三奇、贵人制化。",
  "财离": "忌开市、交易、纳财、求财、立券。",
  "刀砧": "忌伐木、做梁、纳畜、牧养、造畜栏凶。",
  "横天": "初一忌嫁娶，初九忌上梁，十七日忌安葬、开池塘凶。",
  "神号": "忌祈福、斋醮，逢天喜则吉、鬼哭忌成服、除服。",
  "八座": "忌破土、安葬、修坟、开生坟凶，不忌修宅、造宅。",
  "瓦陷": "忌造船、造桥、盖屋、合脊、穿井、放水凶。",
  "龙虎": "忌伐木凶，取鱼、纳畜则吉。",
  "卧尸": "只忌安床。",
  "朱雀中": "忌嫁娶、移徒、入宅、安香。以麒麟符、凤凰符制化。",
  "地转": "忌修作厕所、池塘、开凿池塘、安置产室凶。",
  "翻弓": "忌嫁娶、纳婿、进人口凶，尤忌翻弓人隔双全。",
  "天瘟": "忌造畜栏、纳畜、牧养、治病。",
  "真灭没": "忌修方、造葬、入宅、开市凶勿用。",
  "土瘟": "忌动土、破土、修宅、修坟、修造仓库、修筑堤防、修置产室、开渠井、安堆磨硙、修饰垣墙、栽种凶。",
  "天兵": "忌上梁、合脊、盖屋、入殓凶。余事不忌。",
  "正红纱": "忌季月凶孟仲月合吉多可用。",
  "帝酷杀": "忌祈福、建醮，其余之事不忌。",
  "休废": "忌上官、入学、应试、赴举、雕刻、作染、开池塘凶。",
  "四绝": "忌求嗣、上官、出行、入学、会亲友、嫁娶、订婚、订盟、安床、六礼、入宅、开市、竖造、作灶、医病、牧养、纳畜皆凶。",
  "正四废": "百事皆忌，惟入殓、移柩、安葬不忌。",
  "倒家煞": "俗忌上梁大凶，而其余之事于忌。",
  "正绝烟": "忌移徒、入宅、出火、作窑、作灶凶。",
  "白虎中": "忌嫁娶、移徒、入宅、安香。以麒麟符、凤凰符制化。",
  "死符": "忌开市、交易、纳财、立券、造仓库凶。",
  "殃败": "忌立向、修作。宜取三德、帝星、太阳、三奇、贵人制化。",
  "天狱": "忌上官、赴任、词讼、公众事务。余吉多可用。",
  "独火": "忌修方动土，不忌开山立向，忌正卦不忌旁山，有制无妨。",
  "飞廉": "忌动土、移徙、嫁娶。",
  "普护": "吉神的一种，普渡维护之意，适宜求医避病。",
  "六仪": "六仪，是为小节。一曰祀祭之容，二曰宾客之容，三曰朝廷之容，四曰丧纪之容，五曰军旅之容，六曰车马之容。适宜各类仪式。",
  "福生": "适合祭祀、祈福等。",
  "天赦": "天赦日就是上天赦罪释放有过者之日，百无禁忌，当然为一年之中所少有，因为选择吉日的参考因素相当的多，除了所谓已厘订的吉日外，还与每个人的出生八字，流年气运之吉、凶、侮、吝等条件有直接的关系，因之很多人在能配合的状况下，多选天赦日行事。",
  "王日": "吉神的一种，适合新官上任、拜访官员等。",
  "益後": "对子孙后代有补益的神。",
  "明堂": "古代帝王宣明政教的地方。凡朝会、祭祀、庆赏、选士、养老、教学等大典，都在此举行。引申为公开活动的地方。该时辰宜开会、集会等公开活动。",
  "鸣吠对": "鸣犬时的对日，即鸣犬时后的第六日，作用与鸣犬同，适合开光。",
  "鸣吠": "鸡鸣犬吠之意，民间鸡叫和狗叫有避邪的意思，特别适合开光。",
  "天贵": "宜上官赴任，并受封袭爵吉利。",
  "天富": "宜求财、纳财、开市、造葬、造仓库吉。",
  "天福": "宜上官、祈福、订婚、纳采、送礼、入宅、开市，百事皆吉。",
  "七圣": "宜祭祀、斋醮、祈福、许愿大吉。",
  "喜神": "宜祈福、求嗣、嫁娶、订婚、六礼、出行、开市、交易、求财、安床吉。",
  "岁德合": "天德合并月德合，有宜无忌，宜修方、造葬，百事皆吉。",
  "活曜": "万通四吉，忌受死同日。",
  "季分": "宜嫁娶、订婚、招赘、纳婿吉利。",
  "天岳": "宜造葬、兴修，百事皆吉。",
  "不守塚": "宜破土、启攒、修坟、改墓、造拜坛、安葬吉。",
  "大明": "天地开通之神，宜安葬，百事皆吉。",
  "吉庆": "诸事大吉，忌受死同日。",
  "岁德": "宜上官、赴任、移居、祈福、嫁娶、订婚、修方、动土、造葬吉。",
  "月财": "宜移徒、出行、开市、开仓、求财、造葬吉。",
  "福厚": "宜祈福、设斋醮、入宅、求财，百事皆吉。",
  "傅星": "即斗转帝星，能转凶召吉，宜订婚、嫁娶、入宅、百事皆吉。",
  "致死": "又称天吏，为月中凶神，指的是三合五行的死气之辰。其方位以正月起酉，一次逆行子、酉、午、卯四仲。五行至死而无气，所以天吏主凶，所值之日忌临官、赴任、司讼。",
  "大会": "所谓阴阳大会，是月内阴阳正会之辰，由月建和月厌的干支推导而来。",
  "三阴": "三阴由月破、月厌推导而来，一岁中共有两日。",
  "小会": "所谓阴阳小会，为月内阴阳偶会之辰，由月建和月厌的干支推导而来的。",
  "阴道冲阳": "阴道冲阳指阴阳二建分出二支且相互冲击，这种情况在一年中共有两次，即两日。二月阳建在卯而冲击酉，阴建在酉而冲击卯，因此，二月己卯月宿在卯，己卯日为阴道冲阳。同样的，八月阳建在酉而冲击卯，阴建在卯而冲击酉，因此，八月己酉月宿在酉，己酉日为阴道阳冲。",
  "单阴": "三月厌干为戊，阳建为辰，卦象为五阳一阴的夬卦，因此，三月的戊辰日为单阴，主不吉。",
  "孤辰": "在十二个月中，三月、四月、九月、十月这四个月没有阴阳大会日，因此古代术数家按照天干方位与月建的对照规则，将相隔更远而与阳建不合的天干与月厌地支相配，成为孤辰。",
  "阴位": "阴位由阴阳二建推导而来，一岁中共有两日。三月阳建在辰，阴建在申，因此三月庚辰日为阴位，月宿在辰，同样的，九月阳建在戌，阴建在寅，因此九月甲戌日为阴位，月宿在戌。",
  "行狠": "在十二个月中，三月、四月、九月、十月这四个月没有阴阳大会日，因此古代术数家按照天干方位与月建的对照规则，将阳建方己错过的天干与月厌地支相配，成为行狠。",
  "了戾": "在十二个月中，三月、四月、九月、十月这四个月没有阴阳大会日，因此古代术数家按照天干方位与月建的对照规则，将阳建前方尚不及的天干与月厌地支相配，称为了戾。",
  "绝阴": "所谓绝阴，指三月、四月阴气灭绝的过程，是单阴的进一步发展。具体日辰从三月小会之日，即戊辰日期，延伸至四月。",
  "纯阳": "四月厌干为己，阳建为巳，卦象为纯阳无阴的乾卦，因此四月的巳己日为纯阳，主不吉。",
  "岁薄": "薄含有迫近的意思。岁薄指阴阳二建相向而行，交相迫近。",
  "阴阳交破": "阴阳交破在一岁中共有两日。四月阳建在己，破于亥，亥为阴，被阳所破；阴建在未，破于癸，癸为阳，被阴所破。因此，四月的癸亥日被称为阴阳交破。同理，十月的丁巳日也被称为阴阳交破。",
  "阴阳俱错": "指阴阳同建且又叠同建之干。这种情况在一年之中共有两日。五月阴阳二建合于午，对应天干是丙，干支相配为丙午日，因此，五月的丙午日即为阴阳俱错。同样的，十一月阴阳二建合于子，对应天干是壬，干支相配为壬子日，因此，十一月的壬子日即为阴阳俱错。",
  "阴阳击冲": "阴阳击冲在一岁中共有两日。五月阴间、阳建均相会与午，阳建挟丙而冲击壬，阴建居午而冲击子，因此五月的壬子日被称为阴阳击冲。同样的情况出现在十一月。十一月阴建、阳建均相会于子，阳建挟壬而冲击丙，阴建居子而冲击午，因此十一月的丙午日也被称为阴阳击冲。",
  "逐阵": "逐阵指阴阳二建背道而驰，各随其阵。",
  "孤阳": "九月厌干为戊，阳建为戌，卦象为五阴对一阳的剥卦，因此，九月的戊戌日为孤阳，主不吉。",
  "绝阳": "所谓绝阳，指九月、十月阳气灭绝的过程，是孤阳的进一步发展。具体日辰从九月小会之日，即戊戌日起，延伸至十月。",
  "纯阴": "十月厌干为己，阳建为亥，卦象为纯阴无阳的坤卦，因此，十月的己亥日为纯阴，主不吉。",
  "阳破阴冲": "阳破阴冲是阴阳二建分别冲破的干支的合称，这种情况在一年中共有两次，即两日。六月阳建在未而冲破丑，阴建在己而冲破癸，因此，六月的癸丑日被称为阳破阴冲。同样的，十二月的阳建在丑而冲破未，阴建在亥而冲破丁，因此，十二月的丁未日也被称为阳破阴冲。",
  "建日": "健旺之气。行军、外出、求财、谒贵、上书都是好日子，如寄履历表求职，或到上司家拜访，找亲朋好友周转一下，选此建日即对了。建日为该月最吉祥的日子。本日不可动土、开仓。",
  "除日": "为除旧布新之象。除服、疗病、避邪、出行、嫁娶都是好日子，如有久病想找个日子换医生试试不妨选择除日，效果甚佳。不可求官、上任、开张、搬家。逢除日不到上司家，以免吃力不讨好，新官上任更不可选在除日，以免官运受阻，断送前程。",
  "满日": "为丰收圆满之意。祈福、结亲、开市都是好日子，如好友想结拜成兄弟，或准备替小孩认干爹，选择满日最好。不可服药、栽种、下葬、求医疗病、上官赴任。",
  "平日": "平者平常也，无凶无吉之日。一般修屋、求福、外出、求财、嫁娶都可以用平日。",
  "定日": "按定为不动，不动则为死气。因此定日诸事不宜，只可做计划性的工作，尤其打官司如逢定日必不妙。",
  "执日": "为固执之意，执持操守也。司法警察人员，选择执日抓人最好不过了，十拿九稳。一般执日宜祈福、祭祀、求子、结婚、立约。忌搬家、远行。",
  "破日": "为刚旺破败之日，万事皆忘，婚姻不谐。惟宜求医疗病及赴考求名。逢破日，不宜多管闲事。",
  "危日": "为危险之意。最忌登高、冒险，喜登山踏青的朋友，逢危日就应该特别小心。",
  "成日": "为成功、成就、结果之意。凡事皆有成，祈福、入学、开市、嫁娶、求医、远行、移徙、上任都是好日子。但不宜打官司，否则必定赢不了。",
  "收日": "为收成之意。经商开市、外出求财，买屋签约、嫁娶订盟诸事吉利。",
  "开日": "为开放、开心之意。除了埋葬主大凶外，凡事求财、求子、求缘、求职、求名都是好日子。",
  "闭日": "坚固之意。最宜埋葬，代表能富贵大吉大利。逢闭日不宜看眼睛及求医 问学。外出经商，上任就职，逢闭日也不理想。",
  "心月狐宿星": "心星造作大为凶，更遭刑讼狱囚中，忤逆官非宅产退，埋葬卒暴死相从。婚姻若是用此日，子死儿亡泪满胸，三年之内连遭祸，事事教君没始终。",
  "尾火虎宿星": "尾星造作主天恩，富贵荣华福禄增，招财进宝兴家宅，和合婚姻贵子孙，埋葬若能依此日，男清女正子孙兴，开门放水招田宅，代代公侯远播名。",
  "箕水豹宿星": "箕星造作主高强，岁岁年年大吉昌，埋葬修坟大吉利，田蚕牛马遍山岗，开门放水招田宅，箧满金银谷满仓，福荫高官加禄位，六亲丰荣乐安康。",
  "斗木獬宿星": "斗星造作主招财，文武官员位鼎台，田宅家财千万进，坟堂修筑贵富来，开门放水招牛马，旺蚕男女主和谐，遇此吉宿来照护，时支福庆永无灾。",
  "牛金牛宿星": "牛星造作主灾危，九横三灾不可推，家宅不安人口退，田蚕不利主人衰，嫁娶婚姻皆自损，金银财谷渐无之，若是开门并放水，牛猪羊马亦伤悲。",
  "女土蝠宿星": "女星造作损婆娘，兄弟相嫌似虎狼，埋葬生灾逢鬼怪，颠邪疾病主瘟惶，为事遭官财失散，泻利留连不可当，开门放水用此日，全家财散主离乡。",
  "虚日鼠宿星": "虚星造作主灾殃，男女孤眠不一双，内乱风声无礼节，儿孙媳妇伴人床，开门放水遭灾祸，虎咬蛇伤又卒亡，三三五五连年病，家破人亡不可当。",
  "危月燕宿星": "危星不可造高楼，自遭刑吊见血光，三年孩子遭水厄，后生出外永不还，埋葬若还逢此日，周年百日取高堂，三年两载一悲伤，开门放水到官堂。",
  "室火猪宿星": "室星修造进田牛，儿孙代代近王侯，家贵荣华天上至，寿如彭祖八千秋，开门放水招财帛，和合婚姻生贵儿，埋葬若能依此日，门庭兴旺福无休。",
  "壁水貐宿星": "壁星造作主增财，丝蚕大熟福滔天，奴婢自来人口进，开门放水出英贤，埋葬招财官品进，家中诸事乐陶然，婚姻吉利主贵子，早播名誉着祖鞭。",
  "奎木狼宿星": "奎星造作得祯祥，家内荣和大吉昌，若是埋葬阴卒死，当年定主两三伤，看看军令刑伤到，重重官事主瘟惶，开门放水遭灾祸，三年两次损儿郎。",
  "娄金狗宿星": "娄星修造起门庭，财旺家和事事兴，外进钱财百日进，一家兄弟播高名，婚姻进益生贵子，玉帛金银箱满盈，放水开门皆吉利，男荣女贵寿康宁。",
  "胃土雉宿星": "胃星造作事如何，家贵荣华喜气多，埋葬贵临官禄位，夫妇齐眉永保康，婚姻遇此家富贵，三灾九祸不逢他，从此门前多吉庆，儿孙代代拜金阶。",
  "昴日鸡宿星": "昴星造作进田牛，埋葬官灾不得休，重丧二日三人死，尽卖田园不记增，开门放水招灾祸，三岁孩儿白了头，婚姻不可逢此日，死别生离是可愁。",
  "毕月乌宿星": "毕星造作主光前，买得田园有余钱，埋葬此日添官职，田蚕大熟永丰年，开门放水多吉庆，合家人口得安然，婚姻若得逢此日，生得孩儿福寿全。",
  "觜火猴宿星": "觜星造作有徒刑，三年必定主伶丁，埋葬卒死多因此，取定寅年使杀人，三丧不止皆由此，一人药毒二人身，家门田地皆退败，仓库金银化作尘。",
  "参水猿宿星": "参星造作旺人家，文星照耀大光华，只因造作田财旺，埋葬招疾哭黄沙，开门放水加官职，房房子孙见田加，婚姻许遁遭刑克，男女朝开幕落花。",
  "井木犴宿星": "井星造作旺蚕田，金榜题名第一光，埋葬须防惊卒死，狂颠风疾入黄泉，开门放水招财帛，牛马猪羊旺莫言，贵人田塘来入宅，儿孙兴旺有余钱。",
  "鬼金羊宿星": "鬼星起造卒人亡，堂前不见主人郎，埋葬此日官禄至，儿孙代代近君王，开门放水须伤死，嫁娶夫妻不久长，修土筑墙伤产女，手扶双女泪汪汪。",
  "柳土獐宿星": "柳星造作主遭官，昼夜偷闭不暂安，埋葬瘟惶多疾病，田园退尽守冬寒，开门放水遭聋瞎，腰佗背曲似弓弯，更有捧刑宜谨慎，妇人随客走盘桓，",
  "星日马宿星": "星宿日好造新房，进职加官近帝王，不可埋葬并放水，凶星临位女人亡，生离死别无心恋，要自归休别嫁郎，孔子九曲殊难度，放水开门天命伤。",
  "张月鹿宿星": "张星日好造龙轩，年年并见进庄田，埋葬不久升官职，代代为官近帝前，开门放水招财帛，婚姻和合福绵绵，田蚕人满仓库满，百般顺意自安然。",
  "翼火蛇宿星": "翼星不利架高堂，三年二载见瘟惶，埋葬若还逢此日，子孙必定走他乡，婚姻此日不宜利，归家定是不相当，开门放水家须破，少女恋花贪外郎。",
  "轸水蚓宿星": "轸星临水造龙宫，代代为官受皇封，富贵荣华增受禄，库满仓盈自昌隆，埋葬文昌来照助，宅舍安宁不见凶，更有为官沾帝宠，婚姻龙子入龙宫。",
  "角木蛟宿星": "角星造作主荣昌，外进田财及女郎，嫁娶婚姻出贵子，文人及第见君王，惟有埋葬不可用，三年之后主瘟疫，起工修筑坟基地，当前立见主人凶。",
  "亢金龙宿星": "亢星造作长房当，十日之中主有殃，田地消磨官失职，接运定是虎狼伤，嫁娶婚姻用此日，儿孙新妇守空房，埋葬若还用此日，当时害祸主重伤。",
  "氐土貉宿星": "氐星造作主灾凶，费尽田园仓库空，埋葬不可用此日，悬绳吊颈祸重重，若是婚姻离别散，夜招浪子入房中，行船必定遭沉没，更生聋哑子孙穷。",
  "房日兔宿星": "房星造作田园进，钱财牛马遍山岗，更招外处田庄宅，荣华富贵福禄康，埋葬若然用此日，高官进职拜君王，嫁娶嫦娥至月殿，三年抱子至朝堂。",
  "仓库厕外西南": "本日胎神在仓库和厕所之外的西南方位，在这些方位不可随意敲打或移动物件，以免对孕妇和胎儿不利。",
  "仓库厕房内东": "本日胎神在仓库和厕所之内的东面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库床外正东": "本日胎神在仓库和睡床之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库床外正北": "本日胎神在仓库和睡床之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库床外西北": "本日胎神在仓库和睡床之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库栖外东南": "本日胎神在仓库和家禽宠物栖息处之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库栖外正北": "本日胎神在仓库和家禽宠物栖息处之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库炉外西南": "本日胎神在仓库和炉灶之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库炉房内南": "本日胎神在仓库和厨房之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库碓外东北": "本日胎神在仓库和盛米处之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库碓外西北": "本日胎神在仓库和盛米处之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库门外正南": "本日胎神在仓库和孕妇房门之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "仓库门房内北": "本日胎神在仓库和孕妇房门之内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占大门外东北": "本日胎神在整栋楼房大门之外的东北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占房床外东南": "本日胎神在孕妇房间和睡床之外的东南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占房床房内北": "本日胎神在孕妇卧室之内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占碓磨外正南": "本日胎神在盛米处和石磨之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占碓磨房内南": "本日胎神在盛米处和石磨所在房间之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占门厕外正东": "本日胎神在孕妇房门和厕所之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占门厕外正北": "本日胎神在孕妇房门和厕所之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占门厕外正南": "本日胎神在孕妇房门和厕所之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占门床外正南": "本日胎神在孕妇房门和睡床之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占门床房内南": "本日胎神在孕妇卧室之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占门炉外东北": "本日胎神在孕妇房门和炉灶之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占门炉外西北": "本日胎神在孕妇房门和炉灶之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占门碓外东南": "本日胎神在孕妇房门和盛米处之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "占门碓房内北": "本日胎神在孕妇房门和盛米处房内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶厕外西南": "本日胎神在厨房和厕所之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶厕房内南": "本日胎神在厨房和厕所之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶床外东北": "本日胎神在厨房和孕妇睡床之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶床外正东": "本日胎神在厨房和孕妇睡床之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶床外正西": "本日胎神在厨房和孕妇睡床之外的正西方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶栖外正东": "本日胎神在厨房和家禽宠物栖息处之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶栖外西北": "本日胎神在厨房和家禽宠物栖息处之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶炉外正南": "本日胎神在厨房和炉灶之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶炉房内北": "本日胎神在厨房和炉灶所在房间之内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶碓外西南": "本日胎神在厨房和盛米处所在房间之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶碓房内东": "本日胎神在厨房和盛米处所在房间之内的东南，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶门外东南": "本日胎神在厨房和孕妇房门之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "厨灶门外正北": "本日胎神在厨房和孕妇房门之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床厕外东北": "本日胎神在孕妇卧室和厕所之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床厕外正南": "本日胎神在孕妇卧室和厕所之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床厕外西北": "本日胎神在孕妇卧室和厕所之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床栖外正南": "本日胎神在孕妇卧室和家禽宠物栖息处之外的正南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床栖房内南": "本日胎神在孕妇卧室和家禽宠物栖息处所在房间之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床炉房内东": "本日胎神在孕妇卧室和厨房之内的东面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床碓外正东": "本日胎神在孕妇卧室和盛米所在房间之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床碓外正北": "本日胎神在孕妇卧室和盛米所在房间之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床门外西南": "本日胎神在孕妇卧室之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "房床门房内南": "本日胎神在孕妇卧室之内的南面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨厕外东南": "本日胎神在盛米处石磨处和厕所之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨厕房内北": "本日胎神在盛米处石磨处和厕所之内的北面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨床外西南": "本日胎神在盛米处石磨处和孕妇睡床之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨床房内东": "本日胎神在盛米处石磨处和孕妇卧室之内的东面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨栖外东北": "本日胎神在盛米处石磨处和家禽宠物栖息处之外的东北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨栖外正西": "本日胎神在盛米处石磨处和家禽宠物栖息处之外的正西方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨炉外东南": "本日胎神在盛米处石磨处和炉灶之外的东南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨炉外正北": "本日胎神在盛米处石磨处和炉灶之外的正北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨门外正东": "本日胎神在盛米处石磨处和孕妇房门之外的正东方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "碓磨门外西北": "本日胎神在盛米处石磨处和孕妇房门之外的西北方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "门鸡栖外西南": "本日胎神在孕妇房门和家禽宠物栖息处之外的西南方位，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "门鸡栖房内东": "本日胎神在孕妇房门和家禽宠物栖息处房间内的东面，在这些方位不可随意敲打、动刀剪或移动物件，以免对孕妇和胎儿不利。",
  "酿酒": '老黄历中“酝酿"。指酿酒、造酱料等事',
  "打铁": "老黄历中“鼓铸”。古时指鼓风扇火，冶炼金属、铸造钱币或器物，现指打铁、电焊作业等",
  "基层视察": "老黄历中”临政亲民“，现指官员视察人民生活情况，上级视察下属工作情况",
  "策划提案": "老黄历中“上表章”。指下属呈表章、提案、企划书给上司",
  "任职表彰": "老黄历中的“上册受封”。现指接受职务任命安排、表章",
  "契约买卖": "建立买卖契约、定约交易",
  "就职典礼": "老黄历中袭爵受封，旧时指举行世袭爵位封底的仪式，现指官员任用就职仪式",
  "祈福": "祈求神明降福或设醮还愿之事",
  "-": "-"
};
var _default = {
  explainJson: explain
};
exports.default = _default;

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) {
        ;
      }
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 86:
/*!**************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/data/luckyList.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.luckyList = void 0;
var luckyList = ["结婚", "搬新房", "安床", "合婚订婚", "理发", "开业", "出行", "动土", "搬家", "买房", "会亲友", "房屋清洁", "打扫", "求医", "美甲浴足", "求职入学", "收养子女", "买车", "习艺", "雇庸", "买衣服", "搬新房", "诉讼", "栽种", "乘船", "纳畜", "牧养", "打鱼", "安装器具", "除虫", "伐木", "针灸", "打猎", "签订合同", "交易", "纳财", "赴任", "出货财", "开仓", "装修", "动土", "破屋", "修造", "造仓", "补垣", "掘井", "铺路", "破土", "塞穴", "上梁", "筑堤", "沐浴", "祈福", "安葬", "祭祀", "成人礼", "迁坟", "求子"];
exports.luckyList = luckyList;

/***/ }),

/***/ 87:
/*!**************************************************************************!*\
  !*** /Users/morning/Documents/小程序/交好运/luckyday/assets/jiri/getJiDays.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map