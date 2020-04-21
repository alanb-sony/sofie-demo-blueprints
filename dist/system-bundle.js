/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = _;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);
tslib_1.__exportStar(__webpack_require__(20), exports);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(23), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
const Timeline = __webpack_require__(27);
exports.Timeline = Timeline;
var DeviceType;
(function (DeviceType) {
    DeviceType[DeviceType["ABSTRACT"] = 0] = "ABSTRACT";
    DeviceType[DeviceType["CASPARCG"] = 1] = "CASPARCG";
    DeviceType[DeviceType["ATEM"] = 2] = "ATEM";
    DeviceType[DeviceType["LAWO"] = 3] = "LAWO";
    DeviceType[DeviceType["HTTPSEND"] = 4] = "HTTPSEND";
    DeviceType[DeviceType["PANASONIC_PTZ"] = 5] = "PANASONIC_PTZ";
    DeviceType[DeviceType["TCPSEND"] = 6] = "TCPSEND";
    DeviceType[DeviceType["HYPERDECK"] = 7] = "HYPERDECK";
    DeviceType[DeviceType["PHAROS"] = 8] = "PHAROS";
    DeviceType[DeviceType["OSC"] = 9] = "OSC";
    DeviceType[DeviceType["HTTPWATCHER"] = 10] = "HTTPWATCHER";
    DeviceType[DeviceType["SISYFOS"] = 11] = "SISYFOS";
    DeviceType[DeviceType["QUANTEL"] = 12] = "QUANTEL";
    DeviceType[DeviceType["SINGULAR_LIVE"] = 14] = "SINGULAR_LIVE";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
//# sourceMappingURL=index.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(7), exports);
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(9), exports);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(13), exports);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BlueprintManifestType;
(function (BlueprintManifestType) {
    BlueprintManifestType["SYSTEM"] = "system";
    BlueprintManifestType["STUDIO"] = "studio";
    BlueprintManifestType["SHOWSTYLE"] = "showstyle";
})(BlueprintManifestType = exports.BlueprintManifestType || (exports.BlueprintManifestType = {}));
//# sourceMappingURL=api.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IBlueprintAsRunLogEventContent;
(function (IBlueprintAsRunLogEventContent) {
    IBlueprintAsRunLogEventContent["STARTEDPLAYBACK"] = "startedPlayback";
    IBlueprintAsRunLogEventContent["STOPPEDPLAYBACK"] = "stoppedPlayback";
})(IBlueprintAsRunLogEventContent = exports.IBlueprintAsRunLogEventContent || (exports.IBlueprintAsRunLogEventContent = {}));
//# sourceMappingURL=asRunLog.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigManifestEntryType;
(function (ConfigManifestEntryType) {
    ConfigManifestEntryType["STRING"] = "string";
    ConfigManifestEntryType["NUMBER"] = "number";
    ConfigManifestEntryType["BOOLEAN"] = "boolean";
    ConfigManifestEntryType["ENUM"] = "enum";
    ConfigManifestEntryType["TABLE"] = "table";
})(ConfigManifestEntryType = exports.ConfigManifestEntryType || (exports.ConfigManifestEntryType = {}));
//# sourceMappingURL=config.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/** The type of the source layer, used to enable specific functions for special-type layers */
var SourceLayerType;
(function (SourceLayerType) {
    SourceLayerType[SourceLayerType["UNKNOWN"] = 0] = "UNKNOWN";
    SourceLayerType[SourceLayerType["CAMERA"] = 1] = "CAMERA";
    SourceLayerType[SourceLayerType["VT"] = 2] = "VT";
    SourceLayerType[SourceLayerType["REMOTE"] = 3] = "REMOTE";
    SourceLayerType[SourceLayerType["SCRIPT"] = 4] = "SCRIPT";
    SourceLayerType[SourceLayerType["GRAPHICS"] = 5] = "GRAPHICS";
    SourceLayerType[SourceLayerType["SPLITS"] = 6] = "SPLITS";
    SourceLayerType[SourceLayerType["AUDIO"] = 7] = "AUDIO";
    SourceLayerType[SourceLayerType["CAMERA_MOVEMENT"] = 8] = "CAMERA_MOVEMENT";
    SourceLayerType[SourceLayerType["METADATA"] = 9] = "METADATA";
    SourceLayerType[SourceLayerType["LOWER_THIRD"] = 10] = "LOWER_THIRD";
    SourceLayerType[SourceLayerType["LIVE_SPEAK"] = 11] = "LIVE_SPEAK";
    SourceLayerType[SourceLayerType["MIC"] = 12] = "MIC";
    SourceLayerType[SourceLayerType["TRANSITION"] = 13] = "TRANSITION";
    SourceLayerType[SourceLayerType["LIGHTS"] = 14] = "LIGHTS";
})(SourceLayerType = exports.SourceLayerType || (exports.SourceLayerType = {}));
//# sourceMappingURL=content.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IBlueprintExternalMessageQueueType;
(function (IBlueprintExternalMessageQueueType) {
    IBlueprintExternalMessageQueueType["SOAP"] = "soap";
    IBlueprintExternalMessageQueueType["SLACK"] = "slack";
    IBlueprintExternalMessageQueueType["RABBIT_MQ"] = "rabbitmq";
})(IBlueprintExternalMessageQueueType = exports.IBlueprintExternalMessageQueueType || (exports.IBlueprintExternalMessageQueueType = {}));
//# sourceMappingURL=message.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PartHoldMode;
(function (PartHoldMode) {
    PartHoldMode[PartHoldMode["NONE"] = 0] = "NONE";
    PartHoldMode[PartHoldMode["FROM"] = 1] = "FROM";
    PartHoldMode[PartHoldMode["TO"] = 2] = "TO";
})(PartHoldMode = exports.PartHoldMode || (exports.PartHoldMode = {}));
var PieceLifespan;
(function (PieceLifespan) {
    PieceLifespan[PieceLifespan["Normal"] = 0] = "Normal";
    PieceLifespan[PieceLifespan["OutOnNextPart"] = 1] = "OutOnNextPart";
    PieceLifespan[PieceLifespan["OutOnNextSegment"] = 2] = "OutOnNextSegment";
    PieceLifespan[PieceLifespan["Infinite"] = 3] = "Infinite";
})(PieceLifespan = exports.PieceLifespan || (exports.PieceLifespan = {}));
//# sourceMappingURL=rundown.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LookaheadMode;
(function (LookaheadMode) {
    LookaheadMode[LookaheadMode["NONE"] = 0] = "NONE";
    LookaheadMode[LookaheadMode["PRELOAD"] = 1] = "PRELOAD";
    // RETAIN = 2, // Removed due to complexity and it being possible to emulate with WHEN_CLEAR and infinites
    LookaheadMode[LookaheadMode["WHEN_CLEAR"] = 3] = "WHEN_CLEAR";
})(LookaheadMode = exports.LookaheadMode || (exports.LookaheadMode = {}));
//# sourceMappingURL=studio.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const TSR = __webpack_require__(2);
exports.TSR = TSR;
var timeline_state_resolver_types_1 = __webpack_require__(2);
exports.Timeline = timeline_state_resolver_types_1.Timeline;
var PlayoutTimelinePrefixes;
(function (PlayoutTimelinePrefixes) {
    PlayoutTimelinePrefixes["PART_GROUP_PREFIX"] = "part_group_";
    PlayoutTimelinePrefixes["PART_GROUP_FIRST_ITEM_PREFIX"] = "part_group_firstobject_";
    PlayoutTimelinePrefixes["PIECE_GROUP_PREFIX"] = "piece_group_";
    PlayoutTimelinePrefixes["PIECE_GROUP_FIRST_ITEM_PREFIX"] = "piece_group_firstobject_";
})(PlayoutTimelinePrefixes = exports.PlayoutTimelinePrefixes || (exports.PlayoutTimelinePrefixes = {}));
function getPartGroupId(part) {
    if (typeof part === 'string') {
        return PlayoutTimelinePrefixes.PART_GROUP_PREFIX + part;
    }
    return PlayoutTimelinePrefixes.PART_GROUP_PREFIX + part._id;
}
exports.getPartGroupId = getPartGroupId;
function getPieceGroupId(piece) {
    if (typeof piece === 'string') {
        return PlayoutTimelinePrefixes.PIECE_GROUP_PREFIX + piece;
    }
    return PlayoutTimelinePrefixes.PIECE_GROUP_PREFIX + piece._id;
}
exports.getPieceGroupId = getPieceGroupId;
function getPartFirstObjectId(part) {
    if (typeof part === 'string') {
        return PlayoutTimelinePrefixes.PART_GROUP_FIRST_ITEM_PREFIX + part;
    }
    return PlayoutTimelinePrefixes.PART_GROUP_FIRST_ITEM_PREFIX + part._id;
}
exports.getPartFirstObjectId = getPartFirstObjectId;
function getPieceFirstObjectId(piece) {
    if (typeof piece === 'string') {
        return PlayoutTimelinePrefixes.PIECE_GROUP_FIRST_ITEM_PREFIX + piece;
    }
    return PlayoutTimelinePrefixes.PIECE_GROUP_FIRST_ITEM_PREFIX + piece._id;
}
exports.getPieceFirstObjectId = getPieceFirstObjectId;
var TimelineObjHoldMode;
(function (TimelineObjHoldMode) {
    TimelineObjHoldMode[TimelineObjHoldMode["NORMAL"] = 0] = "NORMAL";
    TimelineObjHoldMode[TimelineObjHoldMode["ONLY"] = 1] = "ONLY";
    TimelineObjHoldMode[TimelineObjHoldMode["EXCEPT"] = 2] = "EXCEPT"; // Only use when not in HOLD
})(TimelineObjHoldMode = exports.TimelineObjHoldMode || (exports.TimelineObjHoldMode = {}));
//# sourceMappingURL=timeline.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MappingAtemType;
(function (MappingAtemType) {
    MappingAtemType[MappingAtemType["MixEffect"] = 0] = "MixEffect";
    MappingAtemType[MappingAtemType["DownStreamKeyer"] = 1] = "DownStreamKeyer";
    MappingAtemType[MappingAtemType["SuperSourceBox"] = 2] = "SuperSourceBox";
    MappingAtemType[MappingAtemType["Auxilliary"] = 3] = "Auxilliary";
    MappingAtemType[MappingAtemType["MediaPlayer"] = 4] = "MediaPlayer";
    MappingAtemType[MappingAtemType["SuperSourceProperties"] = 5] = "SuperSourceProperties";
    MappingAtemType[MappingAtemType["AudioChannel"] = 6] = "AudioChannel";
    MappingAtemType[MappingAtemType["MacroPlayer"] = 7] = "MacroPlayer";
})(MappingAtemType = exports.MappingAtemType || (exports.MappingAtemType = {}));
var AtemMediaPoolType;
(function (AtemMediaPoolType) {
    AtemMediaPoolType["Still"] = "still";
    AtemMediaPoolType["Clip"] = "clip";
    AtemMediaPoolType["Audio"] = "audio";
})(AtemMediaPoolType = exports.AtemMediaPoolType || (exports.AtemMediaPoolType = {}));
var TimelineContentTypeAtem;
(function (TimelineContentTypeAtem) {
    TimelineContentTypeAtem["ME"] = "me";
    TimelineContentTypeAtem["DSK"] = "dsk";
    TimelineContentTypeAtem["AUX"] = "aux";
    TimelineContentTypeAtem["SSRC"] = "ssrc";
    TimelineContentTypeAtem["SSRCPROPS"] = "ssrcProps";
    TimelineContentTypeAtem["MEDIAPLAYER"] = "mp";
    TimelineContentTypeAtem["AUDIOCHANNEL"] = "audioChan";
    TimelineContentTypeAtem["MACROPLAYER"] = "macroPlayer";
})(TimelineContentTypeAtem = exports.TimelineContentTypeAtem || (exports.TimelineContentTypeAtem = {}));
var AtemTransitionStyle;
(function (AtemTransitionStyle) {
    AtemTransitionStyle[AtemTransitionStyle["MIX"] = 0] = "MIX";
    AtemTransitionStyle[AtemTransitionStyle["DIP"] = 1] = "DIP";
    AtemTransitionStyle[AtemTransitionStyle["WIPE"] = 2] = "WIPE";
    AtemTransitionStyle[AtemTransitionStyle["DVE"] = 3] = "DVE";
    AtemTransitionStyle[AtemTransitionStyle["STING"] = 4] = "STING";
    AtemTransitionStyle[AtemTransitionStyle["CUT"] = 5] = "CUT";
    AtemTransitionStyle[AtemTransitionStyle["DUMMY"] = 6] = "DUMMY";
})(AtemTransitionStyle = exports.AtemTransitionStyle || (exports.AtemTransitionStyle = {}));
var MediaSourceType;
(function (MediaSourceType) {
    MediaSourceType[MediaSourceType["Still"] = 1] = "Still";
    MediaSourceType[MediaSourceType["Clip"] = 2] = "Clip";
})(MediaSourceType = exports.MediaSourceType || (exports.MediaSourceType = {}));
//# sourceMappingURL=atem.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimelineContentTypeCasparCg;
(function (TimelineContentTypeCasparCg) {
    TimelineContentTypeCasparCg["MEDIA"] = "media";
    TimelineContentTypeCasparCg["IP"] = "ip";
    TimelineContentTypeCasparCg["INPUT"] = "input";
    TimelineContentTypeCasparCg["TEMPLATE"] = "template";
    TimelineContentTypeCasparCg["HTMLPAGE"] = "htmlpage";
    TimelineContentTypeCasparCg["ROUTE"] = "route";
    TimelineContentTypeCasparCg["RECORD"] = "record";
})(TimelineContentTypeCasparCg = exports.TimelineContentTypeCasparCg || (exports.TimelineContentTypeCasparCg = {}));
// Note: enums copied from casparcg-connection
var Transition;
(function (Transition) {
    Transition["MIX"] = "MIX";
    Transition["CUT"] = "CUT";
    Transition["PUSH"] = "PUSH";
    Transition["WIPE"] = "WIPE";
    Transition["SLIDE"] = "SLIDE";
    Transition["STING"] = "STING";
})(Transition = exports.Transition || (exports.Transition = {}));
var Ease;
(function (Ease) {
    Ease["LINEAR"] = "LINEAR";
    Ease["NONE"] = "NONE";
    Ease["EASEINBACK"] = "EASEINBACK";
    Ease["EASEINBOUNCE"] = "EASEINBOUNCE";
    Ease["EASEINCIRC"] = "EASEINCIRC";
    Ease["EASEINCUBIC"] = "EASEINCUBIC";
    Ease["EASEINELASTIC"] = "EASEINELASTIC";
    Ease["EASEINEXPO"] = "EASEINEXPO";
    Ease["EASEINOUTBACK"] = "EASEINOUTBACK";
    Ease["EASEINOUTBOUNCE"] = "EASEINOUTBOUNCE";
    Ease["EASEINOUTCIRC"] = "EASEINOUTCIRC";
    Ease["EASEINOUTCUBIC"] = "EASEINOUTCUBIC";
    Ease["EASEINOUTELASTIC"] = "EASEINOUTELASTIC";
    Ease["EASEINOUTEXPO"] = "EASEINOUTEXPO";
    Ease["EASEINOUTQUAD"] = "EASEINOUTQUAD";
    Ease["EASEINOUTQUART"] = "EASEINOUTQUART";
    Ease["EASEINOUTQUINT"] = "EASEINOUTQUINT";
    Ease["EASEINOUTSINE"] = "EASEINOUTSINE";
    Ease["EASEINQUAD"] = "EASEINQUAD";
    Ease["EASEINQUART"] = "EASEINQUART";
    Ease["EASEINQUINT"] = "EASEINQUINT";
    Ease["EASEINSINE"] = "EASEINSINE";
    Ease["EASELINEAR"] = "EASELINEAR";
    Ease["EASENONE"] = "EASENONE";
    Ease["EASEOUTBACK"] = "EASEOUTBACK";
    Ease["EASEOUTBOUNCE"] = "EASEOUTBOUNCE";
    Ease["EASEOUTCIRC"] = "EASEOUTCIRC";
    Ease["EASEOUTCUBIC"] = "EASEOUTCUBIC";
    Ease["EASEOUTELASTIC"] = "EASEOUTELASTIC";
    Ease["EASEOUTEXPO"] = "EASEOUTEXPO";
    Ease["EASEOUTINBACK"] = "EASEOUTINBACK";
    Ease["EASEOUTINBOUNCE"] = "EASEOUTINBOUNCE";
    Ease["EASEOUTINCIRC"] = "EASEOUTINCIRC";
    Ease["EASEOUTINCUBIC"] = "EASEOUTINCUBIC";
    Ease["EASEOUTINELASTIC"] = "EASEOUTINELASTIC";
    Ease["EASEOUTINEXPO"] = "EASEOUTINEXPO";
    Ease["EASEOUTINQUAD"] = "EASEOUTINQUAD";
    Ease["EASEOUTINQUART"] = "EASEOUTINQUART";
    Ease["EASEOUTINQUINT"] = "EASEOUTINQUINT";
    Ease["EASEOUTINSINE"] = "EASEOUTINSINE";
    Ease["EASEOUTQUAD"] = "EASEOUTQUAD";
    Ease["EASEOUTQUART"] = "EASEOUTQUART";
    Ease["EASEOUTQUINT"] = "EASEOUTQUINT";
    Ease["EASEOUTSINE"] = "EASEOUTSINE";
    Ease["IN_BACK"] = "IN_BACK";
    Ease["IN_BOUNCE"] = "IN_BOUNCE";
    Ease["IN_CIRC"] = "IN_CIRC";
    Ease["IN_CUBIC"] = "IN_CUBIC";
    Ease["IN_ELASTIC"] = "IN_ELASTIC";
    Ease["IN_EXPO"] = "IN_EXPO";
    Ease["IN_OUT_BACK"] = "IN_OUT_BACK";
    Ease["IN_OUT_BOUNCE"] = "IN_OUT_BOUNCE";
    Ease["IN_OUT_CIRC"] = "IN_OUT_CIRC";
    Ease["IN_OUT_CUBIC"] = "IN_OUT_CUBIC";
    Ease["IN_OUT_ELASTIC"] = "IN_OUT_ELASTIC";
    Ease["IN_OUT_EXPO"] = "IN_OUT_EXPO";
    Ease["IN_OUT_QUAD"] = "IN_OUT_QUAD";
    Ease["IN_OUT_QUART"] = "IN_OUT_QUART";
    Ease["IN_OUT_QUINT"] = "IN_OUT_QUINT";
    Ease["IN_OUT_SINE"] = "IN_OUT_SINE";
    Ease["IN_QUAD"] = "IN_QUAD";
    Ease["IN_QUART"] = "IN_QUART";
    Ease["IN_QUINT"] = "IN_QUINT";
    Ease["IN_SINE"] = "IN_SINE";
    Ease["OUT_BACK"] = "OUT_BACK";
    Ease["OUT_BOUNCE"] = "OUT_BOUNCE";
    Ease["OUT_CIRC"] = "OUT_CIRC";
    Ease["OUT_CUBIC"] = "OUT_CUBIC";
    Ease["OUT_ELASTIC"] = "OUT_ELASTIC";
    Ease["OUT_EXPO"] = "OUT_EXPO";
    Ease["OUT_IN_BACK"] = "OUT_IN_BACK";
    Ease["OUT_IN_BOUNCE"] = "OUT_IN_BOUNCE";
    Ease["OUT_IN_CIRC"] = "OUT_IN_CIRC";
    Ease["OUT_IN_CUBIC"] = "OUT_IN_CUBIC";
    Ease["OUT_IN_ELASTIC"] = "OUT_IN_ELASTIC";
    Ease["OUT_IN_EXPO"] = "OUT_IN_EXPO";
    Ease["OUT_IN_QUAD"] = "OUT_IN_QUAD";
    Ease["OUT_IN_QUART"] = "OUT_IN_QUART";
    Ease["OUT_IN_QUINT"] = "OUT_IN_QUINT";
    Ease["OUT_IN_SINE"] = "OUT_IN_SINE";
    Ease["OUT_QUAD"] = "OUT_QUAD";
    Ease["OUT_QUART"] = "OUT_QUART";
    Ease["OUT_QUINT"] = "OUT_QUINT";
})(Ease = exports.Ease || (exports.Ease = {}));
var Direction;
(function (Direction) {
    Direction["LEFT"] = "LEFT";
    Direction["RIGHT"] = "RIGHT";
})(Direction = exports.Direction || (exports.Direction = {}));
var BlendMode;
(function (BlendMode) {
    BlendMode["ADD"] = "ADD";
    BlendMode["AVERAGE"] = "AVERAGE";
    BlendMode["COLOR"] = "COLOR";
    BlendMode["COLOR_BURN"] = "COLOR_BURN";
    BlendMode["COLOR_DODGE"] = "COLOR_DODGE";
    BlendMode["CONTRAST"] = "CONTRAST";
    BlendMode["DARKEN"] = "DARKEN";
    BlendMode["DIFFERENCE"] = "DIFFERENCE";
    BlendMode["EXCLUSION"] = "EXCLUSION";
    BlendMode["GLOW"] = "GLOW";
    BlendMode["HARD_LIGHT"] = "HARD_LIGHT";
    BlendMode["HARD_MIX"] = "HARD_MIX";
    BlendMode["LIGHTEN"] = "LIGHTEN";
    BlendMode["LINEAR_BURN"] = "LINEAR_BURN";
    BlendMode["LINEAR_DODGE"] = "LINEAR_DODGE";
    BlendMode["LINEAR_LIGHT"] = "LINEAR_LIGHT";
    BlendMode["LUMINOSITY"] = "LUMINOSITY";
    BlendMode["MULTIPLY"] = "MULTIPLY";
    BlendMode["NEGATION"] = "NEGATION";
    BlendMode["NORMAL"] = "NORMAL";
    BlendMode["OVERLAY"] = "OVERLAY";
    BlendMode["PHOENIX"] = "PHOENIX";
    BlendMode["PIN_LIGHT"] = "PIN_LIGHT";
    BlendMode["REFLECT"] = "REFLECT";
    BlendMode["SATURATION"] = "SATURATION";
    BlendMode["SCREEN"] = "SCREEN";
    BlendMode["SOFT_LIGHT"] = "SOFT_LIGHT";
    BlendMode["SUBTRACT"] = "SUBTRACT";
    BlendMode["VIVID_LIGHT"] = "VIVID_LIGHT";
})(BlendMode = exports.BlendMode || (exports.BlendMode = {}));
var ChannelFormat;
(function (ChannelFormat) {
    ChannelFormat["PAL"] = "PAL";
    ChannelFormat["NTSC"] = "NTSC";
    ChannelFormat["SD_576P2500"] = "SD_576P2500";
    ChannelFormat["HD_720P2398"] = "HD_720P2398";
    ChannelFormat["HD_720P2400"] = "HD_720P2400";
    ChannelFormat["HD_720P2500"] = "HD_720P2500";
    ChannelFormat["HD_720P2997"] = "HD_720P2997";
    ChannelFormat["HD_720P3000"] = "HD_720P3000";
    ChannelFormat["HD_720P5000"] = "HD_720P5000";
    ChannelFormat["HD_720P5994"] = "HD_720P5994";
    ChannelFormat["HD_720P6000"] = "HD_720P6000";
    ChannelFormat["HD_1080I5000"] = "HD_1080I5000";
    ChannelFormat["HD_1080I5994"] = "HD_1080I5994";
    ChannelFormat["HD_1080I6000"] = "HD_1080I6000";
    ChannelFormat["HD_1080P2398"] = "HD_1080P2398";
    ChannelFormat["HD_1080P2400"] = "HD_1080P2400";
    ChannelFormat["HD_1080P2500"] = "HD_1080P2500";
    ChannelFormat["HD_1080P2997"] = "HD_1080P2997";
    ChannelFormat["HD_1080P3000"] = "HD_1080P3000";
    ChannelFormat["HD_1080P5000"] = "HD_1080P5000";
    ChannelFormat["HD_1080P5994"] = "HD_1080P5994";
    ChannelFormat["HD_1080P6000"] = "HD_1080P6000";
    ChannelFormat["DCI_1080P2398"] = "DCI_1080P2398";
    ChannelFormat["DCI_1080P2400"] = "DCI_1080P2400";
    ChannelFormat["DCI_1080P2500"] = "DCI_1080P2500";
    ChannelFormat["DCI_2160P2398"] = "DCI_2160P2398";
    ChannelFormat["DCI_2160P2400"] = "DCI_2160P2400";
    ChannelFormat["DCI_2160P2500"] = "DCI_2160P2500";
    ChannelFormat["UCH_2160P2400"] = "UCH_2160P2400";
    ChannelFormat["UHD_1556P2398"] = "UHD_1556P2398";
    ChannelFormat["UHD_1556P2400"] = "UHD_1556P2400";
    ChannelFormat["UHD_1556P2500"] = "UHD_1556P2500";
    ChannelFormat["UHD_2160P2398"] = "UHD_2160P2398";
    ChannelFormat["UHD_2160P2500"] = "UHD_2160P2500";
    ChannelFormat["UHD_2160P2997"] = "UHD_2160P2997";
    ChannelFormat["UHD_2160P3000"] = "UHD_2160P3000";
    ChannelFormat["UHD_2160P5000"] = "UHD_2160P5000";
    ChannelFormat["UHD_2160P5994"] = "UHD_2160P5994";
    ChannelFormat["INVALID"] = "INVALID";
})(ChannelFormat = exports.ChannelFormat || (exports.ChannelFormat = {}));
var Chroma;
(function (Chroma) {
    Chroma["BLUE"] = "BLUE";
    Chroma["GREEN"] = "GREEN";
    Chroma["NONE"] = "NONE";
})(Chroma = exports.Chroma || (exports.Chroma = {}));
//# sourceMappingURL=casparcg.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimelineContentTypeHTTP;
(function (TimelineContentTypeHTTP) {
    TimelineContentTypeHTTP["GET"] = "get";
    TimelineContentTypeHTTP["POST"] = "post";
    TimelineContentTypeHTTP["PUT"] = "put";
    TimelineContentTypeHTTP["DELETE"] = "delete";
})(TimelineContentTypeHTTP = exports.TimelineContentTypeHTTP || (exports.TimelineContentTypeHTTP = {}));
//# sourceMappingURL=httpSend.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MappingHyperdeckType;
(function (MappingHyperdeckType) {
    MappingHyperdeckType["TRANSPORT"] = "transport";
})(MappingHyperdeckType = exports.MappingHyperdeckType || (exports.MappingHyperdeckType = {}));
var TimelineContentTypeHyperdeck;
(function (TimelineContentTypeHyperdeck) {
    TimelineContentTypeHyperdeck["TRANSPORT"] = "transport";
})(TimelineContentTypeHyperdeck = exports.TimelineContentTypeHyperdeck || (exports.TimelineContentTypeHyperdeck = {}));
// Note: These are copied from hyperdeck-connection -----------
var TransportStatus;
(function (TransportStatus) {
    TransportStatus["PREVIEW"] = "preview";
    TransportStatus["STOPPED"] = "stopped";
    TransportStatus["PLAY"] = "play";
    TransportStatus["FORWARD"] = "forward";
    TransportStatus["REWIND"] = "rewind";
    TransportStatus["JOG"] = "jog";
    TransportStatus["SHUTTLE"] = "shuttle";
    TransportStatus["RECORD"] = "record";
})(TransportStatus = exports.TransportStatus || (exports.TransportStatus = {}));
var SlotId;
(function (SlotId) {
    SlotId[SlotId["ONE"] = 1] = "ONE";
    SlotId[SlotId["TWO"] = 2] = "TWO";
})(SlotId = exports.SlotId || (exports.SlotId = {}));
var SlotStatus;
(function (SlotStatus) {
    SlotStatus["EMPTY"] = "empty";
    SlotStatus["MOUNTING"] = "mounting";
    SlotStatus["ERROR"] = "error";
    SlotStatus["MOUNTED"] = "mounted";
})(SlotStatus = exports.SlotStatus || (exports.SlotStatus = {}));
var VideoFormat;
(function (VideoFormat) {
    VideoFormat["NTSC"] = "NTSC";
    VideoFormat["PAL"] = "PAL";
    VideoFormat["NTSCp"] = "NTSCp";
    VideoFormat["PALp"] = "PALp";
    VideoFormat["_720p50"] = "720p50";
    VideoFormat["_720p5994"] = "720p5994";
    VideoFormat["_720p60"] = "720p60";
    VideoFormat["_1080p23976"] = "1080p23976";
    VideoFormat["_1080p24"] = "1080p24";
    VideoFormat["_1080p25"] = "1080p25";
    VideoFormat["_1080p2997"] = "1080p2997";
    VideoFormat["_1080p30"] = "1080p30";
    VideoFormat["_1080i50"] = "1080i50";
    VideoFormat["_1080i5994"] = "1080i5994";
    VideoFormat["_1080i60"] = "1080i60";
    VideoFormat["_4Kp23976"] = "4Kp23976";
    VideoFormat["_4Kp24"] = "4Kp24";
    VideoFormat["_4Kp25"] = "4Kp25";
    VideoFormat["_4Kp2997"] = "4Kp2997";
    VideoFormat["_4Kp30"] = "4Kp30";
    VideoFormat["_4Kp50"] = "4Kp50";
    VideoFormat["_4Kp5994"] = "4Kp5994";
    VideoFormat["_4Kp60"] = "4Kp60";
})(VideoFormat = exports.VideoFormat || (exports.VideoFormat = {}));
//# sourceMappingURL=hyperdeck.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MappingLawoType;
(function (MappingLawoType) {
    MappingLawoType["SOURCE"] = "source";
    MappingLawoType["FULL_PATH"] = "fullpath";
    MappingLawoType["TRIGGER_VALUE"] = "triggerValue";
})(MappingLawoType = exports.MappingLawoType || (exports.MappingLawoType = {}));
var TimelineContentTypeLawo;
(function (TimelineContentTypeLawo) {
    TimelineContentTypeLawo["SOURCE"] = "lawosource";
    TimelineContentTypeLawo["EMBER_PROPERTY"] = "lawofullpathemberproperty";
    TimelineContentTypeLawo["TRIGGER_VALUE"] = "triggervalue";
})(TimelineContentTypeLawo = exports.TimelineContentTypeLawo || (exports.TimelineContentTypeLawo = {}));
var EmberTypes;
(function (EmberTypes) {
    EmberTypes["STRING"] = "string";
    EmberTypes["INTEGER"] = "integer";
    EmberTypes["REAL"] = "real";
    EmberTypes["BOOLEAN"] = "bool";
})(EmberTypes = exports.EmberTypes || (exports.EmberTypes = {}));
//# sourceMappingURL=lawo.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimelineContentTypeOSC;
(function (TimelineContentTypeOSC) {
    TimelineContentTypeOSC["OSC"] = "osc";
})(TimelineContentTypeOSC = exports.TimelineContentTypeOSC || (exports.TimelineContentTypeOSC = {}));
var OSCValueType;
(function (OSCValueType) {
    OSCValueType["INT"] = "i";
    OSCValueType["FLOAT"] = "f";
    OSCValueType["STRING"] = "s";
    OSCValueType["BLOB"] = "b";
})(OSCValueType = exports.OSCValueType || (exports.OSCValueType = {}));
//# sourceMappingURL=osc.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimelineContentTypePharos;
(function (TimelineContentTypePharos) {
    TimelineContentTypePharos["SCENE"] = "scene";
    TimelineContentTypePharos["TIMELINE"] = "timeline";
})(TimelineContentTypePharos = exports.TimelineContentTypePharos || (exports.TimelineContentTypePharos = {}));
//# sourceMappingURL=pharos.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MappingPanasonicPtzType;
(function (MappingPanasonicPtzType) {
    MappingPanasonicPtzType[MappingPanasonicPtzType["PRESET_SPEED"] = 0] = "PRESET_SPEED";
    MappingPanasonicPtzType[MappingPanasonicPtzType["PRESET"] = 1] = "PRESET";
    MappingPanasonicPtzType[MappingPanasonicPtzType["ZOOM"] = 2] = "ZOOM";
    MappingPanasonicPtzType[MappingPanasonicPtzType["ZOOM_SPEED"] = 3] = "ZOOM_SPEED";
})(MappingPanasonicPtzType = exports.MappingPanasonicPtzType || (exports.MappingPanasonicPtzType = {}));
var TimelineContentTypePanasonicPtz;
(function (TimelineContentTypePanasonicPtz) {
    TimelineContentTypePanasonicPtz["PRESET"] = "presetMem";
    TimelineContentTypePanasonicPtz["SPEED"] = "presetSpeed";
    TimelineContentTypePanasonicPtz["ZOOM_SPEED"] = "zoomSpeed";
    TimelineContentTypePanasonicPtz["ZOOM"] = "zoom";
})(TimelineContentTypePanasonicPtz = exports.TimelineContentTypePanasonicPtz || (exports.TimelineContentTypePanasonicPtz = {}));
//# sourceMappingURL=panasonicPTZ.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimelineContentTypeSisyfos;
(function (TimelineContentTypeSisyfos) {
    TimelineContentTypeSisyfos["SISYFOS"] = "sisyfos";
})(TimelineContentTypeSisyfos = exports.TimelineContentTypeSisyfos || (exports.TimelineContentTypeSisyfos = {}));
var Commands;
(function (Commands) {
    Commands["TOGGLE_PGM"] = "togglePgm";
    Commands["TOGGLE_PST"] = "togglePst";
    Commands["SET_FADER"] = "setFader";
    Commands["TAKE"] = "take";
})(Commands = exports.Commands || (exports.Commands = {}));
// ------------------------------------------------------
//# sourceMappingURL=sisyfos.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QuantelControlMode;
(function (QuantelControlMode) {
    /** Try to avoid freeze-frames when playing */
    QuantelControlMode["QUALITY"] = "quality";
    /** Try to play as fast as possible */
    QuantelControlMode["SPEED"] = "speed";
})(QuantelControlMode = exports.QuantelControlMode || (exports.QuantelControlMode = {}));
var QuantelTransitionType;
(function (QuantelTransitionType) {
    QuantelTransitionType[QuantelTransitionType["DELAY"] = 0] = "DELAY";
})(QuantelTransitionType = exports.QuantelTransitionType || (exports.QuantelTransitionType = {}));
//# sourceMappingURL=quantel.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimelineContentTypeTcp;
(function (TimelineContentTypeTcp) {
    TimelineContentTypeTcp["GET"] = "get";
    TimelineContentTypeTcp["POST"] = "post";
    TimelineContentTypeTcp["PUT"] = "put";
    TimelineContentTypeTcp["DELETE"] = "delete";
})(TimelineContentTypeTcp = exports.TimelineContentTypeTcp || (exports.TimelineContentTypeTcp = {}));
//# sourceMappingURL=tcpSend.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TimelineContentTypeSingularLive;
(function (TimelineContentTypeSingularLive) {
    TimelineContentTypeSingularLive["COMPOSITION"] = "composition";
})(TimelineContentTypeSingularLive = exports.TimelineContentTypeSingularLive || (exports.TimelineContentTypeSingularLive = {}));
//# sourceMappingURL=singularLive.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Note: These types are copies from superfly-timeline
Object.defineProperty(exports, "__esModule", { value: true });
// Enums ------------------------------------------------------------
var EventType;
(function (EventType) {
    EventType[EventType["START"] = 0] = "START";
    EventType[EventType["END"] = 1] = "END";
    EventType[EventType["KEYFRAME"] = 2] = "KEYFRAME";
})(EventType = exports.EventType || (exports.EventType = {}));
//# sourceMappingURL=superfly-timeline.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(4);
const _ = __webpack_require__(1);
var iterateDeeplyEnum;
(function (iterateDeeplyEnum) {
    iterateDeeplyEnum["CONTINUE"] = "$continue";
})(iterateDeeplyEnum = exports.iterateDeeplyEnum || (exports.iterateDeeplyEnum = {}));
/**
 * Iterates deeply through object or array
 * @param obj the object or array to iterate through
 * @param iteratee function to apply on every attribute
 */
function iterateDeeply(obj, iteratee, key) {
    const newValue = iteratee(obj, key);
    if (newValue === iterateDeeplyEnum.CONTINUE) {
        // Continue iterate deeper if possible
        if (_.isObject(obj)) {
            // object or array
            _.each(obj, (v, k) => {
                obj[k] = iterateDeeply(v, iteratee, k);
            });
        }
        else {
            // don't change anything
        }
        return obj;
    }
    else {
        return newValue;
    }
}
exports.iterateDeeply = iterateDeeply;
/**
 * Iterates deeply through object or array, using an asynchronous iteratee
 * @param obj the object or array to iterate through
 * @param iteratee function to apply on every attribute
 */
function iterateDeeplyAsync(obj, iteratee, key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const newValue = yield iteratee(obj, key);
        if (newValue === iterateDeeplyEnum.CONTINUE) {
            // Continue iterate deeper if possible
            if (_.isObject(obj)) {
                // object or array
                yield Promise.all(_.map(obj, (v, k) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    obj[k] = yield iterateDeeplyAsync(v, iteratee, k);
                })));
            }
            else {
                // don't change anything
            }
            return obj;
        }
        else {
            return newValue;
        }
    });
}
exports.iterateDeeplyAsync = iterateDeeplyAsync;
//# sourceMappingURL=util.js.map

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
const manifest = {
    blueprintType: tv_automation_sofie_blueprints_integration_1.BlueprintManifestType.SYSTEM,
    blueprintVersion: "0.1.0-0.1.0-5-gc5c89e3",
    integrationVersion: "1.10.0",
    TSRVersion: "3.18.0",
    minimumCoreVersion: '^1.0.0'
};
exports.default = manifest;


/***/ })
/******/ ]);