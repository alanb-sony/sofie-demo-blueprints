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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function literal(o) { return o; }
exports.literal = literal;
function createVirtualPiece(layer, enable, mainPiece) {
    return {
        _id: '', name: '',
        externalId: (mainPiece ? mainPiece.externalId : '-'),
        enable: typeof enable === 'number' ? {
            start: enable,
            duration: 0
        } : enable,
        sourceLayerId: layer,
        outputLayerId: 'pgm0',
        virtual: true,
        content: {
            timelineObjects: []
        }
    };
}
exports.createVirtualPiece = createVirtualPiece;
/**
 * Returs true if the piece is interface IBlueprintAdLibPiece
 * @param {IBlueprintPiece | IBlueprintAdLibPiece} piece Piece to check
 */
function isAdLibPiece(piece) {
    return '_rank' in piece;
}
exports.isAdLibPiece = isAdLibPiece;


/***/ }),
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
var SourceLayer;
(function (SourceLayer) {
    // Graphics
    SourceLayer["PgmGraphicsSuper"] = "studio0_graphics_super";
    // Pgm
    SourceLayer["PgmTransition"] = "studio0_transition0";
    SourceLayer["PgmClip"] = "studio0_clip0";
    SourceLayer["PgmCam"] = "studio0_camera0";
    SourceLayer["PgmSplit"] = "studio0_split0";
    SourceLayer["PgmRemote"] = "studio0_remote0";
    SourceLayer["PgmHyperdeck"] = "studio0_hyperdeck0";
    SourceLayer["PgmAudioBed"] = "studio0_audio_bed";
    SourceLayer["PgmScript"] = "studio0_script";
})(SourceLayer = exports.SourceLayer || (exports.SourceLayer = {}));
/** Get all the Real LLayers (map to devices). Note: Does not include some which are dynamically generated */
function RealLLayers() {
    return _.values(AtemLLayer)
        .concat(_.values(CasparLLayer))
        .concat(_.values(LawoLLayer));
}
exports.RealLLayers = RealLLayers;
function VirtualLLayers() {
    return _.values(VirtualAbstractLLayer);
}
exports.VirtualLLayers = VirtualLLayers;
var VirtualAbstractLLayer;
(function (VirtualAbstractLLayer) {
    VirtualAbstractLLayer["RecordControl"] = "record_control";
})(VirtualAbstractLLayer = exports.VirtualAbstractLLayer || (exports.VirtualAbstractLLayer = {}));
var AtemLLayer;
(function (AtemLLayer) {
    AtemLLayer["AtemMEProgram"] = "atem_me_program";
    AtemLLayer["AtemDSKGraphics"] = "atem_dsk_graphics";
    AtemLLayer["AtemDSKEffect"] = "atem_dsk_effect";
    AtemLLayer["AtemAuxLookahead"] = "atem_aux_lookahead";
    AtemLLayer["AtemAuxSSrc"] = "atem_aux_ssrc";
    AtemLLayer["AtemAuxClean"] = "atem_aux_clean";
    AtemLLayer["AtemAuxScreen"] = "atem_aux_screen";
    AtemLLayer["AtemSSrcArt"] = "atem_supersource_art";
    AtemLLayer["AtemSSrcDefault"] = "atem_supersource_default";
    AtemLLayer["AtemSSrcOverride"] = "atem_supersource_override";
})(AtemLLayer = exports.AtemLLayer || (exports.AtemLLayer = {}));
var CasparLLayer;
(function (CasparLLayer) {
    CasparLLayer["CasparPlayerClip"] = "casparcg_player_clip";
    CasparLLayer["CasparPlayerClipNext"] = "casparcg_player_clip_next";
    CasparLLayer["CasparPlayerClipNextWarning"] = "casparcg_player_clip_next_warning";
    CasparLLayer["CasparPlayerClipNextCustom"] = "casparcg_player_clip_next_custom";
    CasparLLayer["CasparPlayerWipe"] = "casparcg_player_wipe";
    CasparLLayer["CasparPlayerSoundEffect"] = "casparcg_player_soundeffect";
    CasparLLayer["CasparCGGraphics"] = "casparcg_cg_graphics";
    CasparLLayer["CasparCGEffects"] = "casparcg_cg_effects";
    CasparLLayer["CasparCountdown"] = "casparcg_cg_countdown";
})(CasparLLayer = exports.CasparLLayer || (exports.CasparLLayer = {}));
function HyperdeckLLayer(index) {
    return `hyperdeck${index}`;
}
exports.HyperdeckLLayer = HyperdeckLLayer;
var LawoLLayer;
(function (LawoLLayer) {
    LawoLLayer["LawoSourceAutomix"] = "lawo_source_automix";
    LawoLLayer["LawoSourceClipStk"] = "lawo_source_clip_stk";
})(LawoLLayer = exports.LawoLLayer || (exports.LawoLLayer = {}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
exports.CoreInjectedKeys = ['SofieHostURL'];
var LightingControlType;
(function (LightingControlType) {
    LightingControlType["None"] = "None";
    LightingControlType["Hog4PC"] = "Hog4PC";
    LightingControlType["Pharos"] = "Pharos";
})(LightingControlType = exports.LightingControlType || (exports.LightingControlType = {}));
exports.StudioConfigManifest = [{
        id: 'MediaFlowId',
        name: 'Media Flow Id',
        description: '',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.STRING,
        required: false,
        defaultVal: 'flow0'
    }, {
        id: 'SourcesCam',
        name: 'Camera Mapping',
        description: 'Camera number to ATEM input (eg 1:1,9:2)',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.STRING,
        required: false,
        defaultVal: '1:1,2:2,3:3,4:4,5:5'
    }, {
        id: 'SourcesRM',
        name: 'RM Mapping',
        description: 'RM number to ATEM input (eg 1:6,2:7)',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.STRING,
        required: false,
        defaultVal: '1:6,2:7,3:8,4:9,5:10,6:11,7:12'
    }, {
        id: 'HyperdeckCount',
        name: 'Hyperdeck Count',
        description: 'Number of Hyperdecks used for recordings',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 1
    }, {
        id: 'AtemSource.DSK1F',
        name: 'ATEM DSK1 Fill',
        description: 'ATEM vision mixer input for DSK1 Fill',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 13
    }, {
        id: 'AtemSource.DSK1K',
        name: 'ATEM DSK1 Key',
        description: 'ATEM vision mixer input for DSK1 Key',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 14
    }, {
        id: 'AtemSource.DSK2F',
        name: 'ATEM DSK2 Fill',
        description: 'ATEM vision mixer input for DSK2 Fill',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 15
    }, {
        id: 'AtemSource.DSK2K',
        name: 'ATEM DSK2 Key',
        description: 'ATEM vision mixer input for DSK2 Key',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 16
    }, {
        id: 'AtemSource.Server1',
        name: 'ATEM Server1',
        description: 'ATEM vision mixer input for Server1',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 17
    }, {
        id: 'AtemSource.Server1Next',
        name: 'ATEM Server1-Next',
        description: 'ATEM vision mixer input for Server1-Next',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 18
    }, {
        id: 'AtemSource.Server2',
        name: 'ATEM Server2',
        description: 'ATEM vision mixer input for Server2',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 19
    }, {
        id: 'AtemSource.Server3',
        name: 'ATEM Server3',
        description: 'ATEM vision mixer input for Server3',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 20
    }, {
        id: 'AtemSource.SplitArtF',
        name: 'ATEM Split Screen Art Fill',
        description: 'ATEM vision mixer input for Split Screen Art Fill',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 3010
    }, {
        id: 'AtemSource.SplitArtK',
        name: 'ATEM Split Screen Art Key',
        description: 'ATEM vision mixer input for Split Screen Art Key',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 3011
    }, {
        id: 'AtemSource.Default',
        name: 'ATEM Default source',
        description: 'ATEM vision mixer default source',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 2001
    }, {
        id: 'LawoFadeInDuration',
        name: 'Default Lawo fade in duration',
        description: 'in ms',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 500 // 12,5 frames (minimum Lawo fade duration)
    }, {
        id: 'CasparOutputDelay',
        name: 'CasparCG Output latency',
        description: 'Delay between playback and output on SDI (ms)',
        type: tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER,
        required: false,
        defaultVal: 320 // 8 frames (5 in decklinks + casparcg)
    }];
exports.ShowStyleConfigManifest = [];


/***/ }),
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
const util_1 = __webpack_require__(0);
const classes_1 = __webpack_require__(31);
var Attributes;
(function (Attributes) {
    Attributes["CAMERA"] = "name";
    Attributes["TRANSITION"] = "type";
    Attributes["REMOTE"] = "source";
})(Attributes = exports.Attributes || (exports.Attributes = {}));
function parseMapStr(context, str, canBeStrings) {
    str = str.trim();
    const res = [];
    const inputs = str.split(',');
    inputs.forEach(i => {
        if (i === '')
            return;
        try {
            const p = i.split(':');
            if (p.length === 2) {
                const ind = parseInt(p[0], 10);
                const val = parseInt(p[1], 10);
                if (isNaN(ind))
                    throw new Error();
                if (!canBeStrings && !isNaN(val)) {
                    res.push({ id: ind, val: parseInt(p[1], 10) });
                    return;
                }
                else if (canBeStrings && p[1]) {
                    res.push({ id: ind, val: p[1] });
                    return;
                }
            }
        }
        catch (e) {
            // Ignore?
        }
        if (context) {
            context.warning('Invalid input map chunk: ' + i);
        }
    });
    return res;
}
exports.parseMapStr = parseMapStr;
function parseSources(context, config) {
    const rmInputMap = parseMapStr(context, config.studio.SourcesRM, false);
    const kamInputMap = parseMapStr(context, config.studio.SourcesCam, false);
    const res = [];
    _.each(rmInputMap, rm => {
        res.push({
            type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.REMOTE,
            id: rm.id,
            port: rm.val
        });
    });
    _.each(kamInputMap, kam => {
        res.push({
            type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.CAMERA,
            id: kam.id,
            port: kam.val
        });
    });
    return res;
}
exports.parseSources = parseSources;
function FindSourceInfo(sources, type, id) {
    if (typeof id !== 'number') {
        id = (id + '').toLowerCase();
        id = parseInt(id.replace(/\D/g, ''), 10) || 1;
    }
    return _.find(sources, s => s.type === type && s.id === id);
}
exports.FindSourceInfo = FindSourceInfo;
function FindSourceInfoStrict(context, sources, type, id) {
    const source = FindSourceInfo(sources, type, id);
    if (!source) {
        context.warning(`Invalid source "${id}" of type "${type}"`);
    }
    return source;
}
exports.FindSourceInfoStrict = FindSourceInfoStrict;
function FindSourceByName(context, sources, name) {
    name = (name + '').toLowerCase();
    if (name.indexOf('k') === 0 || name.indexOf('c') === 0) {
        return FindSourceInfoStrict(context, sources, tv_automation_sofie_blueprints_integration_1.SourceLayerType.CAMERA, name);
    }
    if (name.indexOf('r') === 0) {
        return FindSourceInfoStrict(context, sources, tv_automation_sofie_blueprints_integration_1.SourceLayerType.REMOTE, name);
    }
    context.warning(`Invalid source name "${name}"`);
    return undefined;
}
exports.FindSourceByName = FindSourceByName;
function GetInputValue(context, sources, name) {
    let input = 1000;
    let source = FindSourceByName(context, sources, name);
    if (source !== undefined) {
        input = util_1.literal(source).port;
    }
    return input;
}
exports.GetInputValue = GetInputValue;
/**
 * Gets The input number from a piece.
 * @param params Segment parameters.
 * @param piece Piece to get input from.
 */
function GetInputValueFromPiece(params, piece) {
    let name = '';
    switch (piece.objectType) {
        case classes_1.ObjectType.VIDEO:
        case classes_1.ObjectType.GRAPHIC:
            return params.config.studio.AtemSource.Server1;
        case classes_1.ObjectType.CAMERA:
            name = piece.attributes[Attributes.CAMERA];
            break;
        case classes_1.ObjectType.REMOTE:
            name = piece.attributes[Attributes.REMOTE];
            break;
    }
    return GetInputValue(params.context, params.sourceConfig, name);
}
exports.GetInputValueFromPiece = GetInputValueFromPiece;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AtemSourceIndex;
(function (AtemSourceIndex) {
    AtemSourceIndex[AtemSourceIndex["Blk"] = 0] = "Blk";
    AtemSourceIndex[AtemSourceIndex["Bars"] = 1000] = "Bars";
    AtemSourceIndex[AtemSourceIndex["Col1"] = 2001] = "Col1";
    AtemSourceIndex[AtemSourceIndex["Col2"] = 2002] = "Col2";
    AtemSourceIndex[AtemSourceIndex["MP1"] = 3010] = "MP1";
    AtemSourceIndex[AtemSourceIndex["MP1K"] = 3011] = "MP1K";
    AtemSourceIndex[AtemSourceIndex["MP2"] = 3020] = "MP2";
    AtemSourceIndex[AtemSourceIndex["MP2K"] = 3021] = "MP2K";
    AtemSourceIndex[AtemSourceIndex["SSrc"] = 6000] = "SSrc";
    AtemSourceIndex[AtemSourceIndex["Cfd1"] = 7001] = "Cfd1";
    AtemSourceIndex[AtemSourceIndex["Cfd2"] = 7002] = "Cfd2";
    AtemSourceIndex[AtemSourceIndex["Aux1"] = 8001] = "Aux1";
    AtemSourceIndex[AtemSourceIndex["Aux2"] = 8002] = "Aux2";
    AtemSourceIndex[AtemSourceIndex["Aux3"] = 8003] = "Aux3";
    AtemSourceIndex[AtemSourceIndex["Aux4"] = 8004] = "Aux4";
    AtemSourceIndex[AtemSourceIndex["Aux5"] = 8005] = "Aux5";
    AtemSourceIndex[AtemSourceIndex["Aux6"] = 8006] = "Aux6";
    AtemSourceIndex[AtemSourceIndex["Prg1"] = 10010] = "Prg1";
    AtemSourceIndex[AtemSourceIndex["Prv1"] = 10011] = "Prv1";
    AtemSourceIndex[AtemSourceIndex["Prg2"] = 10020] = "Prg2";
    AtemSourceIndex[AtemSourceIndex["Prv2"] = 10021] = "Prv2";
})(AtemSourceIndex = exports.AtemSourceIndex || (exports.AtemSourceIndex = {}));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectType;
(function (ObjectType) {
    ObjectType["GRAPHIC"] = "graphic";
    ObjectType["VIDEO"] = "video";
    ObjectType["CAMERA"] = "camera";
    ObjectType["SPLIT"] = "split";
    ObjectType["OVERLAY"] = "overlay";
    ObjectType["LIGHTS"] = "lights";
    ObjectType["TRANSITION"] = "transition";
    ObjectType["REMOTE"] = "remote";
    ObjectType["PIP"] = "pip";
    ObjectType["VOICEOVER"] = "voiceover";
    ObjectType["SCRIPT"] = "script";
})(ObjectType = exports.ObjectType || (exports.ObjectType = {}));


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(0);
const util_2 = __webpack_require__(33);
const devices_1 = __webpack_require__(38);
const variants_defaults_1 = __webpack_require__(39);
/**
 * Versions:
 * 0.1.0: Core 0.24.0
 */
exports.studioMigrations = util_1.literal([
    util_2.ensureStudioConfig('0.1.0', 'SourcesCam', null, 'text', 'Studio config: Camera mappings', 'Enter the Camera input mapping (example: "1:1,2:2,3:3,4:4"'),
    ...devices_1.deviceMigrations,
    // Fill in any mappings that did not exist before
    // Note: These should only be run as the very final step of all migrations. otherwise they will add items too early, and confuse old migrations
    ...util_2.getMappingsDefaultsMigrationSteps("0.1.0-0.1.0-5-gc5c89e3")
]);
exports.showStyleMigrations = util_1.literal([
    // Fill in any layers that did not exist before
    // Note: These should only be run as the very final step of all migrations. otherwise they will add items too early, and confuse old migrations
    ...variants_defaults_1.getCreateVariantMigrationSteps(),
    ...util_2.getSourceLayerDefaultsMigrationSteps("0.1.0-0.1.0-5-gc5c89e3"),
    ...util_2.getOutputLayerDefaultsMigrationSteps("0.1.0-0.1.0-5-gc5c89e3"),
    ...util_2.getRuntimeArgumentsDefaultsMigrationSteps("0.1.0-0.1.0-5-gc5c89e3")
]);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
const util_1 = __webpack_require__(0);
const mappings_defaults_1 = __webpack_require__(34);
const sourcelayer_defaults_1 = __webpack_require__(35);
const outputlayer_defaults_1 = __webpack_require__(36);
const runtime_arguments_defaults_1 = __webpack_require__(37);
const config_manifests_1 = __webpack_require__(6);
function ensureStudioConfig(version, configName, value, // null if manual
inputType, // EditAttribute types
label, description, defaultValue, oldConfigName, dropdownOptions) {
    return {
        id: `studioConfig.${configName}`,
        version: version,
        canBeRunAutomatically: (_.isNull(value) ? false : true),
        validate: (context) => {
            let configVal = context.getConfig(configName);
            let oldConfigVal = oldConfigName && context.getConfig(oldConfigName);
            if (configVal === undefined && oldConfigVal === undefined) {
                return `${configName} is missing`;
            }
            return false;
        },
        input: (context) => {
            let inputs = [];
            let configVal = context.getConfig(configName);
            if (inputType && configVal === undefined) {
                inputs.push({
                    label: label,
                    description: description,
                    inputType: inputType,
                    attribute: 'value',
                    defaultValue: defaultValue,
                    dropdownOptions: dropdownOptions
                });
            }
            return inputs;
        },
        migrate: (context, input) => {
            context.setConfig(configName, _.isNull(value) ? input.value : value);
        }
    };
}
exports.ensureStudioConfig = ensureStudioConfig;
function renameStudioConfig(version, oldConfigName, newConfigName, updateValue) {
    return {
        id: `studioConfig.${oldConfigName}`,
        version: version,
        canBeRunAutomatically: true,
        validate: (context) => {
            const configVal = context.getConfig(oldConfigName);
            if (configVal !== undefined) {
                return `${oldConfigName} is defined`;
            }
            return false;
        },
        migrate: (context) => {
            let configVal = context.getConfig(oldConfigName);
            if (configVal !== undefined) {
                context.setConfig(newConfigName, updateValue ? updateValue(configVal) : configVal);
                context.removeConfig(oldConfigName);
            }
        }
    };
}
exports.renameStudioConfig = renameStudioConfig;
function renameMapping(version, oldMappingName, newMappingName) {
    return {
        id: `studioMapping.${oldMappingName}`,
        version: version,
        canBeRunAutomatically: true,
        validate: (context) => {
            const mapping = context.getMapping(oldMappingName);
            if (mapping !== undefined) {
                return `${oldMappingName} is defined`;
            }
            return false;
        },
        migrate: (context) => {
            const mapping = context.getMapping(oldMappingName);
            if (mapping) {
                context.insertMapping(newMappingName, mapping);
                context.removeMapping(oldMappingName);
            }
        }
    };
}
exports.renameMapping = renameMapping;
function removeMapping(version, oldMappingName) {
    return {
        id: `studioMapping.${oldMappingName}`,
        version: version,
        canBeRunAutomatically: true,
        validate: (context) => {
            const mapping = context.getMapping(oldMappingName);
            if (mapping) {
                return `${oldMappingName} is defined`;
            }
            return false;
        },
        migrate: (context) => {
            const mapping = context.getMapping(oldMappingName);
            if (mapping) {
                context.removeMapping(oldMappingName);
            }
        }
    };
}
exports.removeMapping = removeMapping;
function getMappingsDefaultsMigrationSteps(versionStr) {
    const res = _.compact(_.map(mappings_defaults_1.default, (defaultVal, id) => {
        return util_1.literal({
            id: `mappings.defaults.${id}`,
            version: versionStr,
            canBeRunAutomatically: true,
            validate: (context) => {
                // Optional mappings based on studio settings can be dropped here
                if (!context.getMapping(id))
                    return `Mapping "${id}" doesn't exist on ShowBaseStyle`;
                return false;
            },
            migrate: (context) => {
                if (!context.getMapping(id)) {
                    context.insertMapping(id, defaultVal);
                }
            }
        });
    }));
    let hyperdeckCount = (context) => {
        const configCount = context.getConfig('HyperdeckCount');
        if (typeof configCount === 'number') {
            return configCount;
        }
        else {
            const defaultVal = config_manifests_1.StudioConfigManifest.find(c => c.id === 'HyperdeckCount');
            if (defaultVal === undefined) {
                throw new Error('Expected HyperdeckCount to be defined in StudioConfigManifest');
            }
            else {
                return defaultVal.defaultVal;
            }
        }
    };
    res.push(util_1.literal({
        id: `mappings.defaults._all_hyperdeck_`,
        version: versionStr,
        canBeRunAutomatically: true,
        dependOnResultFrom: 'studioConfig.HyperdeckCount',
        validate: (context) => {
            const expected = _.keys(mappings_defaults_1.getHyperdeckMappings(hyperdeckCount(context)));
            let mappingMissing = false;
            _.each(expected, f => {
                if (!context.getMapping(f)) {
                    mappingMissing = `${f} is missing`;
                }
            });
            return mappingMissing;
        },
        migrate: (context) => {
            const expected = mappings_defaults_1.getHyperdeckMappings(hyperdeckCount(context));
            _.each(expected, (v, k) => {
                if (!context.getMapping(k)) {
                    context.insertMapping(k, v);
                }
            });
        }
    }));
    return res;
}
exports.getMappingsDefaultsMigrationSteps = getMappingsDefaultsMigrationSteps;
function getSourceLayerDefaultsMigrationSteps(versionStr) {
    return _.compact(_.map(sourcelayer_defaults_1.default, (defaultVal) => {
        return util_1.literal({
            id: `sourcelayer.defaults.${defaultVal._id}`,
            version: versionStr,
            canBeRunAutomatically: true,
            validate: (context) => {
                if (!context.getSourceLayer(defaultVal._id))
                    return `SourceLayer "${defaultVal._id}" doesn't exist on ShowBaseStyle`;
                return false;
            },
            migrate: (context) => {
                if (!context.getSourceLayer(defaultVal._id)) {
                    context.insertSourceLayer(defaultVal._id, defaultVal);
                }
            }
        });
    }));
}
exports.getSourceLayerDefaultsMigrationSteps = getSourceLayerDefaultsMigrationSteps;
function getOutputLayerDefaultsMigrationSteps(versionStr) {
    return _.compact(_.map(outputlayer_defaults_1.default, (defaultVal) => {
        return util_1.literal({
            id: `outputlayer.defaults.${defaultVal._id}`,
            version: versionStr,
            canBeRunAutomatically: true,
            validate: (context) => {
                if (!context.getOutputLayer(defaultVal._id))
                    return `OutputLayer "${defaultVal._id}" doesn't exist on ShowBaseStyle`;
                return false;
            },
            migrate: (context) => {
                if (!context.getOutputLayer(defaultVal._id)) {
                    context.insertOutputLayer(defaultVal._id, defaultVal);
                }
            }
        });
    }));
}
exports.getOutputLayerDefaultsMigrationSteps = getOutputLayerDefaultsMigrationSteps;
function getRuntimeArgumentsDefaultsMigrationSteps(versionStr) {
    return _.compact(_.map(runtime_arguments_defaults_1.default, (defaultVal) => {
        return util_1.literal({
            id: `runtimeArguments.defaults.${defaultVal._id}`,
            version: versionStr,
            canBeRunAutomatically: true,
            validate: (context) => {
                if (!context.getRuntimeArgument(defaultVal._id))
                    return `RuntimeArgument "${defaultVal._id}" doesn't exist on ShowBaseStyle`;
                return false;
            },
            migrate: (context) => {
                if (!context.getRuntimeArgument(defaultVal._id)) {
                    context.insertRuntimeArgument(defaultVal._id, defaultVal);
                }
            }
        });
    }));
}
exports.getRuntimeArgumentsDefaultsMigrationSteps = getRuntimeArgumentsDefaultsMigrationSteps;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const timeline_state_resolver_types_1 = __webpack_require__(2);
const util_1 = __webpack_require__(0);
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
const layers_1 = __webpack_require__(5);
exports.default = util_1.literal({
    'core_abstract': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ABSTRACT,
        deviceId: 'abstract0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE
    }),
    'casparcg_player_wipe': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        deviceId: 'caspar01',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        channel: 3,
        layer: 199
    }),
    'casparcg_player_soundeffect': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        deviceId: 'caspar01',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        channel: 3,
        layer: 130
    }),
    'casparcg_player_clip_next_warning': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        deviceId: 'caspar01',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        channel: 4,
        layer: 99
    }),
    'casparcg_player_clip': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        deviceId: 'caspar01',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.PRELOAD,
        channel: 1,
        layer: 111
    }),
    'casparcg_player_clip_next': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        deviceId: 'caspar01',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        channel: 4,
        layer: 101
    }),
    'casparcg_player_clip_next_custom': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        deviceId: 'caspar01',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        channel: 4,
        layer: 110
    }),
    'casparcg_cg_graphics': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        deviceId: 'caspar02',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        channel: 2,
        layer: 120
    }),
    'casparcg_cg_countdown': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        deviceId: 'caspar02',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        channel: 1,
        layer: 120
    }),
    'casparcg_cg_effects': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        deviceId: 'caspar01',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        channel: 3,
        layer: 120
    }),
    'atem_me_program': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.MixEffect,
        index: 0 // 0 = ME1
    }),
    'atem_aux_lookahead': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.WHEN_CLEAR,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.Auxilliary,
        index: 1
    }),
    'atem_aux_ssrc': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.Auxilliary,
        index: 2
    }),
    'atem_aux_clean': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.Auxilliary,
        index: 5
    }),
    'atem_aux_screen': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.Auxilliary,
        index: 3
    }),
    'atem_dsk_graphics': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.DownStreamKeyer,
        index: 0 // 0 = DSK1
    }),
    'atem_dsk_effect': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.DownStreamKeyer,
        index: 1 // 1 = DSK2
    }),
    'atem_supersource_art': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.SuperSourceProperties,
        index: 0 // 0 = SS
    }),
    'atem_supersource_default': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.SuperSourceBox,
        index: 0 // 0 = SS
    }),
    'atem_supersource_override': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.ATEM,
        deviceId: 'atem0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.WHEN_CLEAR,
        mappingType: timeline_state_resolver_types_1.MappingAtemType.SuperSourceBox,
        index: 0 // 0 = SS
    }),
    'lawo_source_automix': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.LAWO,
        deviceId: 'lawo0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingLawoType.SOURCE,
        identifier: 'AMix'
    }),
    'lawo_source_clip_stk': util_1.literal({
        device: timeline_state_resolver_types_1.DeviceType.LAWO,
        deviceId: 'lawo0',
        lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE,
        mappingType: timeline_state_resolver_types_1.MappingLawoType.SOURCE,
        identifier: 'STK'
    })
});
function getHyperdeckMappings(count) {
    const res = {};
    for (let i = 0; i < count; i++) {
        const id = layers_1.HyperdeckLLayer(i);
        res[id] = util_1.literal({
            device: timeline_state_resolver_types_1.DeviceType.HYPERDECK,
            deviceId: id,
            mappingType: timeline_state_resolver_types_1.MappingHyperdeckType.TRANSPORT,
            lookahead: tv_automation_sofie_blueprints_integration_1.LookaheadMode.NONE
        });
    }
    return res;
}
exports.getHyperdeckMappings = getHyperdeckMappings;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
const util_1 = __webpack_require__(0);
const layers_1 = __webpack_require__(5);
exports.default = util_1.literal([
    {
        _id: layers_1.SourceLayer.PgmClip,
        _rank: 9000,
        name: 'VT',
        abbreviation: 'VT',
        type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.VT,
        activateKeyboardHotkeys: 'f7,f8',
        onPresenterScreen: true,
        exclusiveGroup: 'fullscreen_pgm'
    },
    {
        _id: layers_1.SourceLayer.PgmGraphicsSuper,
        _rank: 1000,
        name: 'Super',
        type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.GRAPHICS,
        activateKeyboardHotkeys: 'q,w,e,r,t,y',
        clearKeyboardHotkey: 'u,alt+j,alt+u',
        allowDisable: true
    },
    {
        _id: layers_1.SourceLayer.PgmSplit,
        _rank: 11000,
        name: 'Split',
        abbreviation: 'DVE',
        type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.SPLITS,
        isSticky: true,
        activateStickyKeyboardHotkey: 'f6',
        onPresenterScreen: true,
        exclusiveGroup: 'fullscreen_pgm'
    },
    {
        _id: layers_1.SourceLayer.PgmRemote,
        _rank: 10000,
        name: 'DIR',
        abbreviation: 'DIR',
        type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.REMOTE,
        activateKeyboardHotkeys: '1,2,3,4,5,6',
        isRemoteInput: true,
        assignHotkeysToGlobalAdlibs: true,
        isSticky: true,
        activateStickyKeyboardHotkey: 'f5',
        onPresenterScreen: true,
        exclusiveGroup: 'fullscreen_pgm'
    },
    {
        _id: layers_1.SourceLayer.PgmScript,
        _rank: 14000,
        name: 'Manus',
        type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.SCRIPT
    },
    {
        _id: layers_1.SourceLayer.PgmCam,
        _rank: 13000,
        name: 'Cam',
        abbreviation: 'C ',
        type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.CAMERA,
        activateKeyboardHotkeys: 'f1,f2,f3,f4,8,9',
        assignHotkeysToGlobalAdlibs: true,
        onPresenterScreen: true,
        exclusiveGroup: 'fullscreen_pgm'
    },
    {
        _id: layers_1.SourceLayer.PgmTransition,
        _rank: 0,
        name: 'Transition',
        type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.TRANSITION,
        activateKeyboardHotkeys: '',
        assignHotkeysToGlobalAdlibs: false
    },
    {
        _id: layers_1.SourceLayer.PgmHyperdeck,
        _rank: 0,
        name: 'Hyperdeck',
        type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.UNKNOWN,
        activateKeyboardHotkeys: '',
        assignHotkeysToGlobalAdlibs: false,
        isHidden: true
    },
    {
        _id: layers_1.SourceLayer.PgmAudioBed,
        _rank: 0,
        name: 'Bed',
        type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.AUDIO,
        activateKeyboardHotkeys: '',
        assignHotkeysToGlobalAdlibs: false,
        isHidden: true
    }
]);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(0);
exports.default = util_1.literal([
    {
        _id: 'pgm0',
        name: 'PGM',
        isPGM: true,
        _rank: 0
    },
    {
        _id: 'monitor0',
        name: 'BAK',
        isPGM: false,
        _rank: 1
    },
    {
        _id: 'screen1',
        name: 'Screen 1',
        isPGM: false,
        _rank: 2
    },
    {
        _id: 'screen2',
        name: 'Screen 2',
        isPGM: false,
        _rank: 2
    },
    {
        _id: 'screen3',
        name: 'Screen 3',
        isPGM: false,
        _rank: 2
    }
]);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(0);
exports.default = util_1.literal([
    {
        _id: 'x-mix-10',
        label: 'Dissolve 10f',
        hotkeys: 'x',
        property: 'transition-mix',
        value: '10'
    }
]);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
const timeline_state_resolver_types_1 = __webpack_require__(2);
const util_1 = __webpack_require__(0);
function validateDevice(spec) {
    return {
        id: `Playout-gateway.${spec.id}.validate`,
        version: "0.1.0-0.1.0-5-gc5c89e3",
        canBeRunAutomatically: false,
        validate: (context) => {
            const dev = context.getDevice(spec.id); // Device Default Value ( PlayoutDeviceOptions ) is a device's context
            if (!dev)
                return false;
            if (dev.type !== spec.type)
                return `Type is not "${timeline_state_resolver_types_1.DeviceType[spec.type]}"`;
            if (spec.validate) {
                return spec.validate(dev); // We check our Device from Context.
                // Confirms properties needed to connect to device
            }
            return false;
        },
        input: [{
                label: `Playout-gateway: device "${spec.id}" misconfigured`,
                description: `Go into the settings of the Playout-gateway and setup the device "${spec.id}". ($validation)`,
                inputType: null,
                attribute: null
            }]
    };
}
function createDevice(spec) {
    return {
        id: `Playout-gateway.${spec.id}.create`,
        version: spec.firstVersion,
        canBeRunAutomatically: spec.input === undefined,
        validate: (context) => {
            if (spec.createCondition && !spec.createCondition(context))
                return false;
            const dev = context.getDevice(spec.id);
            if (!dev)
                return `"${spec.id}" missing`;
            return false;
        },
        migrate: (context, input) => {
            if (spec.createCondition && !spec.createCondition(context))
                return;
            const dev = context.getDevice(spec.id);
            if (!dev) {
                let options = spec.defaultValue(input, context);
                if (options) {
                    context.insertDevice(spec.id, options);
                }
            }
        },
        input: spec.input,
        dependOnResultFrom: spec.createDependsOn
    };
}
const devices = [
    {
        id: 'abstract0',
        firstVersion: '0.1.0',
        type: timeline_state_resolver_types_1.DeviceType.ABSTRACT,
        defaultValue: () => ({
            type: timeline_state_resolver_types_1.DeviceType.ABSTRACT,
            options: {}
        })
    },
    {
        id: 'caspar01',
        firstVersion: '0.1.0',
        type: timeline_state_resolver_types_1.DeviceType.CASPARCG,
        defaultValue: (input) => ({
            type: timeline_state_resolver_types_1.DeviceType.CASPARCG,
            options: {
                host: input.host,
                port: 5250,
                launcherHost: input.host,
                launcherPort: 8005
            }
        }),
        input: [{
                label: 'Device config caspar01: Host',
                description: 'Enter the Host paramter, example: "127.0.0.1"',
                inputType: 'text',
                attribute: 'host',
                defaultValue: undefined
            }],
        validate: device => {
            if (!device.options)
                return 'Missing options';
            const opts = device.options;
            if (!opts.host)
                return 'Host is not set';
            if (!opts.launcherHost)
                return 'Launcher host is not set';
            return false;
        },
        createDependsOn: 'studioConfig.DevicePrefix'
    },
    {
        id: 'caspar01-launcher',
        firstVersion: '0.1.0',
        type: timeline_state_resolver_types_1.DeviceType.HTTPWATCHER,
        defaultValue: (_input, context) => {
            const mainDev = context.getDevice('caspar01');
            if (mainDev && mainDev.options) {
                const mainOpts = mainDev.options;
                if (mainOpts.launcherHost) {
                    return {
                        type: timeline_state_resolver_types_1.DeviceType.HTTPWATCHER,
                        options: {
                            uri: `http://${mainOpts.launcherHost}:${mainOpts.launcherPort || 8005}/processes`,
                            httpMethod: 'GET',
                            expectedHttpResponse: 200,
                            interval: 30000
                        }
                    };
                }
            }
            return undefined;
        },
        validate: device => {
            if (!device.options)
                return 'Missing options';
            const opts = device.options;
            if (!opts.uri)
                return 'URI is not set';
            if (!opts.httpMethod)
                return 'HTTP Method is not set';
            if (!opts.expectedHttpResponse)
                return 'Expected response is not set';
            if (!opts.interval)
                return 'Inteval is not set';
            return false;
        },
        createDependsOn: 'Playout-gateway.caspar01.create'
    },
    {
        id: 'caspar01-scanner',
        firstVersion: '0.1.0',
        type: timeline_state_resolver_types_1.DeviceType.HTTPWATCHER,
        defaultValue: (_input, context) => {
            const mainDev = context.getDevice('caspar01');
            if (mainDev && mainDev.options) {
                const mainOpts = mainDev.options;
                if (mainOpts.launcherHost) {
                    return {
                        type: timeline_state_resolver_types_1.DeviceType.HTTPWATCHER,
                        options: {
                            uri: `http://${mainOpts.host}:8000/stat/seq`,
                            httpMethod: 'GET',
                            expectedHttpResponse: 200,
                            interval: 30000
                        }
                    };
                }
            }
            return undefined;
        },
        validate: device => {
            if (!device.options)
                return 'Missing options';
            const opts = device.options;
            if (!opts.uri)
                return 'URI is not set';
            if (!opts.httpMethod)
                return 'HTTP Method is not set';
            if (!opts.expectedHttpResponse)
                return 'Expected response is not set';
            if (!opts.interval)
                return 'Inteval is not set';
            return false;
        },
        createDependsOn: 'Playout-gateway.caspar01.create'
    },
    {
        id: 'atem0',
        firstVersion: '0.1.0',
        type: timeline_state_resolver_types_1.DeviceType.ATEM,
        defaultValue: (input) => ({
            type: timeline_state_resolver_types_1.DeviceType.ATEM,
            options: {
                host: input.host,
                port: 9910
            }
        }),
        input: [{
                label: 'Device config atem0: Host',
                description: 'Enter the Host paramter, example: "127.0.0.1"',
                inputType: 'text',
                attribute: 'host',
                defaultValue: undefined
            }],
        validate: device => {
            if (!device.options)
                return 'Missing options';
            const opts = device.options;
            if (!opts.host)
                return 'Host is not set';
            return false;
        }
    },
    {
        id: 'http0',
        firstVersion: '0.1.0',
        type: timeline_state_resolver_types_1.DeviceType.HTTPSEND,
        defaultValue: () => ({
            type: timeline_state_resolver_types_1.DeviceType.HTTPSEND,
            options: {
                makeReadyCommands: []
            }
        })
    },
    {
        id: 'hyperdeck0',
        firstVersion: '0.1.0',
        type: timeline_state_resolver_types_1.DeviceType.HYPERDECK,
        defaultValue: (input) => ({
            type: timeline_state_resolver_types_1.DeviceType.HYPERDECK,
            options: {
                host: input.host,
                port: 9993
            }
        }),
        input: [{
                label: 'Device config hyperdeck0: Host',
                description: 'Enter the Host paramter, example: "127.0.0.1"',
                inputType: 'text',
                attribute: 'host',
                defaultValue: undefined
            }],
        validate: device => {
            if (!device.options)
                return 'Missing options';
            const opts = device.options;
            if (!opts.host)
                return 'Host is not set';
            return false;
        }
    }
];
exports.deviceMigrations = util_1.literal([
    // create all devices
    ..._.map(devices, createDevice),
    // ensureMakeReadyIsUpToDate('http0', 'nora-reset-stage', () => ({})),
    // ensure all devices still look valid
    ..._.map(devices, validateDevice)
]);
// function ensureMakeReadyIsUpToDate (deviceId: string, cmdId: string, getExpectedCommand: (context: MigrationContextStudio, deviceId: string, cmdId: string) => any) {
// 	return literal<MigrationStepStudio>({
// 		id: `Playout-gateway.${deviceId}.make-ready.${cmdId}`,
// 		version: VERSION, // Always run to ensure up-to-date
// 		dependOnResultFrom: `Playout-gateway.${deviceId}.create`,
// 		canBeRunAutomatically: true,
// 		validate: (context: MigrationContextStudio) => {
// 			const expected = getExpectedCommand(context, deviceId, cmdId)
// 			if (!expected) return false
// 			const dev = context.getDevice(deviceId)
// 			if (!dev) return `"${deviceId}" missing`
// 			const opts = dev.options as any
// 			if (!opts || !opts.makeReadyCommands || opts.makeReadyCommands.length === 0) return `"${deviceId}" missing ${cmdId}`
// 			const cmd = opts.makeReadyCommands.find((c: any) => c.id === cmdId)
// 			if (!cmd) return `"${deviceId}" missing ${cmdId}`
// 			if (!_.isEqual(cmd, expected)) return `"${deviceId}" ${cmdId}: current value does not match expected`
// 			return false
// 		},
// 		migrate: (context: MigrationContextStudio) => {
// 			const dev = context.getDevice(deviceId)
// 			const expected = getExpectedCommand(context, deviceId, cmdId)
// 			if (dev && expected) {
// 				const opts = dev.options as any
// 				if (!opts.makeReadyCommands) opts.makeReadyCommands = []
// 				const i = opts.makeReadyCommands.findIndex((c: any) => c.id === cmdId)
// 				if (i === -1) {
// 					opts.makeReadyCommands.push(expected)
// 				} else {
// 					opts.makeReadyCommands[i] = expected
// 				}
// 				context.updateDevice(deviceId, { options: opts })
// 			}
// 		}
// 	})
// }


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
const util_1 = __webpack_require__(0);
exports.showVariants = util_1.literal({
    oddasat: {
        name: 'Main'
    }
});
function getCreateVariantMigrationSteps() {
    return _.keys(exports.showVariants).map((key) => {
        return util_1.literal({
            id: `variant.${key}`,
            version: "0.1.0-0.1.0-5-gc5c89e3",
            canBeRunAutomatically: true,
            validate: (context) => {
                const variant = context.getVariant(key);
                if (!variant)
                    return `Variant "${key}" doesn't exist`;
                return false;
            },
            migrate: (context) => {
                const variant = context.getVariant(key);
                if (!variant) {
                    const region = exports.showVariants[key];
                    context.insertVariant(key, {
                        name: region.name
                    });
                    // Set/update config fields here
                    // context.setVariantConfig(key, 'RegionCode', region.regionCode)
                }
            }
        });
    });
}
exports.getCreateVariantMigrationSteps = getCreateVariantMigrationSteps;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
const objectPath = __webpack_require__(41);
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
const config_manifests_1 = __webpack_require__(6);
function parseConfig(context) {
    const applyToConfig = (config, manifest, sourceName, overrides) => {
        _.each(manifest, (val) => {
            let newVal = val.defaultVal;
            const overrideVal = overrides[val.id];
            if (overrideVal !== undefined) {
                switch (val.type) {
                    case tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.BOOLEAN:
                        newVal = overrideVal;
                        break;
                    case tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.NUMBER:
                        newVal = overrideVal;
                        break;
                    case tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.STRING:
                        newVal = overrideVal;
                        break;
                    case tv_automation_sofie_blueprints_integration_1.ConfigManifestEntryType.ENUM:
                        newVal = overrideVal;
                        break;
                    default:
                        context.warning('Unknown config field type: ' + val.type);
                        break;
                }
            }
            else if (val.required) {
                context.warning(`Required config not defined in ${sourceName}: "${val.name}"`);
            }
            objectPath.set(config, val.id, newVal);
        });
    };
    const config = {
        studio: {},
        showStyle: {}
    };
    // Load values injected by core, not via manifest
    const studioConfig = context.getStudioConfig();
    _.each(config_manifests_1.CoreInjectedKeys, (id) => {
        objectPath.set(config.studio, id, studioConfig[id]);
    });
    // Load the config
    applyToConfig(config.studio, config_manifests_1.StudioConfigManifest, 'Studio', studioConfig);
    applyToConfig(config.showStyle, config_manifests_1.ShowStyleConfigManifest, 'ShowStyle', context.getShowStyleConfig());
    return config;
}
exports.parseConfig = parseConfig;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    function hasShallowProperty(obj, prop) {
      return (options.includeInheritedProps || (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop))
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
const classes_1 = __webpack_require__(31);
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
const util_1 = __webpack_require__(0);
const layers_1 = __webpack_require__(5);
const timeline_state_resolver_types_1 = __webpack_require__(2);
const content_1 = __webpack_require__(43);
const sources_1 = __webpack_require__(29);
const timeline_1 = __webpack_require__(45);
/**
 * Creates a generic adLib piece.
 * @param {Piece} piece Piece properties.
 */
function CreatePieceGenericAdLib(piece) {
    let p = util_1.literal({
        externalId: piece.id,
        name: piece.clipName,
        outputLayerId: 'pgm0',
        sourceLayerId: layers_1.SourceLayer.PgmCam,
        metaData: piece.attributes,
        _rank: 0
    });
    if (!piece.duration) {
        p.expectedDuration = piece.duration;
    }
    return p;
}
exports.CreatePieceGenericAdLib = CreatePieceGenericAdLib;
/**
 * Creates a generic IBlueprintPiece.
 * @param {Piece} piece Piece properties.
 */
function CreatePieceGenericEnable(piece) {
    let enable = {
        start: piece.objectTime || 0
    };
    let p = util_1.literal({
        _id: '',
        externalId: piece.id,
        name: piece.clipName,
        enable: enable,
        outputLayerId: 'pgm0',
        sourceLayerId: layers_1.SourceLayer.PgmCam,
        metaData: piece.attributes
    });
    if (piece.duration) {
        enable.duration = piece.duration;
        p.enable = enable;
    }
    return p;
}
exports.CreatePieceGenericEnable = CreatePieceGenericEnable;
/**
 * Creates a generic piece. Will return an Adlib piece if suitable.
 * @param {Piece} piece Piece to evaluate.
 * @returns {IBlueprintPieceGeneric} A possibly infinite, possibly Adlib piece.
 */
function CreatePieceGeneric(piece) {
    let p;
    if ('adlib' in piece.attributes && piece.attributes['adlib'] === 'true') {
        p = CreatePieceGenericAdLib(piece);
    }
    else {
        p = CreatePieceGenericEnable(piece);
    }
    // TODO: This may become context-specific
    if (!piece.duration) {
        p.infiniteMode = tv_automation_sofie_blueprints_integration_1.PieceLifespan.OutOnNextPart;
    }
    return p;
}
exports.CreatePieceGeneric = CreatePieceGeneric;
function createPieceTransitionGeneric(piece, duration) {
    let p = util_1.literal({
        _id: '',
        externalId: 'T' + piece.id,
        name: 'T' + duration,
        enable: {
            start: 0,
            duration: duration
        },
        outputLayerId: 'pgm0',
        sourceLayerId: layers_1.SourceLayer.PgmTransition,
        isTransition: true,
        content: util_1.literal({
            timelineObjects: _.compact([])
        })
    });
    return p;
}
/**
 * Creates a transition piece.
 * @param {Piece} piece Piece to generate.
 * @param {AtemTransitionStyle} transition Transition style.
 * @param {number} duration Length of transition.
 */
function CreatePieceInTransition(piece, transition, duration, input) {
    let p = createPieceTransitionGeneric(piece, duration);
    let content = util_1.literal({
        timelineObjects: _.compact([
            timeline_1.CreateTransitionAtemTimelineObject({ start: 0, duration: duration }, transition, input)
        ])
    });
    p.content = content;
    p.enable.start = 0;
    return p;
}
exports.CreatePieceInTransition = CreatePieceInTransition;
/**
 * Creates an out transition of given duration.
 * @param {Piece} piece Piece to transition.
 * @param {AtemTransitionStyle} transition Transition type.
 * @param {number} duration Length of transition.
 */
function CreatePieceOutTransition(piece, transition, duration, input) {
    let p = createPieceTransitionGeneric(piece, duration);
    let content = util_1.literal({
        timelineObjects: _.compact([
            timeline_1.CreateTransitionAtemTimelineObject({ start: piece.duration - duration, duration: duration }, transition, input)
        ])
    });
    p.content = content;
    p.enable.start = piece.duration - duration;
    return p;
}
exports.CreatePieceOutTransition = CreatePieceOutTransition;
/**
 * Creates a breaker piece.
 * @param piece Piece to create.
 * @param duration Transition duraation.
 */
function CreatePieceBreaker(piece, duration) {
    let p = util_1.literal({
        _id: '',
        externalId: piece.id,
        name: 'Breaker: ' + (piece.clipName || duration),
        enable: {
            start: 0,
            duration: duration
        },
        outputLayerId: 'pgm0',
        sourceLayerId: layers_1.SourceLayer.PgmTransition,
        isTransition: true,
        content: util_1.literal({
            timelineObjects: _.compact([
                timeline_1.CreateCCGMediaTimelineObject({ start: 0, duration: duration }, layers_1.CasparLLayer.CasparPlayerWipe, piece.clipName),
                timeline_1.CreateAtemTimelineObject({ start: 0 }, layers_1.AtemLLayer.AtemMEProgram, 1000, timeline_state_resolver_types_1.AtemTransitionStyle.WIPE) // TODO: Get input from Sofie
            ])
        })
    });
    return p;
}
exports.CreatePieceBreaker = CreatePieceBreaker;
/**
 * Creates a cam piece.
 * @param {PieceParams} params Piece to create.
 */
function CreatePieceCam(params, transition) {
    let p = CreatePieceGeneric(params.piece);
    p.sourceLayerId = layers_1.SourceLayer.PgmCam;
    p.name = params.piece.attributes[sources_1.Attributes.CAMERA];
    let content = content_1.CreateContentCam(params.config, params.piece);
    if (checkAndPlaceOnScreen(p, params.piece.attributes)) {
        content.timelineObjects = _.compact([
            util_1.literal({
                id: '',
                enable: timeline_1.CreateEnableForTimelineObject(params.piece),
                priority: 1,
                layer: layers_1.AtemLLayer.AtemAuxScreen,
                content: {
                    deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                    type: timeline_state_resolver_types_1.TimelineContentTypeAtem.ME,
                    me: {
                        input: sources_1.GetInputValue(params.config.context, params.config.sourceConfig, params.piece.attributes[sources_1.Attributes.CAMERA]),
                        transition: transition
                    }
                }
            })
        ]);
    }
    else {
        switch (params.context) {
            default:
                content.timelineObjects = _.compact([
                    util_1.literal({
                        id: '',
                        enable: timeline_1.CreateEnableForTimelineObject(params.piece),
                        priority: 1,
                        layer: layers_1.AtemLLayer.AtemMEProgram,
                        content: {
                            deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                            type: timeline_state_resolver_types_1.TimelineContentTypeAtem.ME,
                            me: {
                                input: sources_1.GetInputValue(params.config.context, params.config.sourceConfig, params.piece.attributes[sources_1.Attributes.CAMERA]),
                                transition: transition
                            }
                        }
                    }),
                    timeline_1.CreateLawoAutomixTimelineObject({ start: 0 })
                ]);
                break;
        }
    }
    p.content = content;
    return p;
}
exports.CreatePieceCam = CreatePieceCam;
/**
 * Creates a cam piece.
 * @param {PieceParams} params Piece to create.
 */
function CreatePieceVideo(params, transition) {
    let p = CreatePieceGeneric(params.piece);
    p.sourceLayerId = layers_1.SourceLayer.PgmClip;
    let content = content_1.CreateContentVT(params.piece);
    switch (params.context) {
        default:
            content.timelineObjects = _.compact([
                timeline_1.CreateCCGMediaTimelineObject(timeline_1.CreateEnableForTimelineObject(params.piece), layers_1.CasparLLayer.CasparPlayerClip, params.piece.clipName)
            ]);
            break;
    }
    // TODO: if it should be placed on a screen, it should probably go out over an aux.
    if (!checkAndPlaceOnScreen(p, params.piece.attributes)) {
        content.timelineObjects.push(timeline_1.CreateAtemTimelineObject(timeline_1.CreateEnableForTimelineObject(params.piece), layers_1.AtemLLayer.AtemMEProgram, params.config.config.studio.AtemSource.Server1, transition));
        content.timelineObjects.push(timeline_1.CreateLawoAutomixTimelineObject({ start: 0 }));
        content.timelineObjects.push(util_1.literal({
            id: '',
            enable: { start: 0 },
            priority: 1,
            layer: layers_1.LawoLLayer.LawoSourceClipStk,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.LAWO,
                type: timeline_state_resolver_types_1.TimelineContentTypeLawo.SOURCE,
                'Fader/Motor dB Value': {
                    value: 0,
                    transitionDuration: 10
                }
            }
        }));
    }
    p.content = content;
    return p;
}
exports.CreatePieceVideo = CreatePieceVideo;
/**
 * Creates a cam piece.
 * @param {PieceParams} params Piece to create.
 */
function CreatePieceGraphic(params, transition) {
    let p = CreatePieceGeneric(params.piece);
    p.sourceLayerId = layers_1.SourceLayer.PgmGraphicsSuper;
    let content = content_1.CreateContentGraphics(params.piece);
    switch (params.context) {
        case 'HEAD':
            content.timelineObjects = _.compact([
                timeline_1.CreateCCGMediaTimelineObject(timeline_1.CreateEnableForTimelineObject(params.piece), layers_1.CasparLLayer.CasparCGGraphics, params.piece.clipName)
            ]);
            if (checkAndPlaceOnScreen(p, params.piece.attributes)) {
                content.timelineObjects.push(
                // TODO: input should be aux?
                timeline_1.CreateAtemTimelineObject(timeline_1.CreateEnableForTimelineObject(params.piece), layers_1.AtemLLayer.AtemMEProgram, params.config.config.studio.AtemSource.Server1, transition, { mix: { rate: 100 } }));
            }
            else {
                content.timelineObjects.push(timeline_1.CreateAtemTimelineObject(timeline_1.CreateEnableForTimelineObject(params.piece), layers_1.AtemLLayer.AtemMEProgram, params.config.config.studio.AtemSource.Server1, timeline_state_resolver_types_1.AtemTransitionStyle.WIPE));
            }
            break;
        default:
            content.timelineObjects = _.compact([
                timeline_1.CreateCCGMediaTimelineObject(timeline_1.CreateEnableForTimelineObject(params.piece), layers_1.CasparLLayer.CasparCGGraphics, params.piece.clipName)
            ]);
            if (!checkAndPlaceOnScreen(p, params.piece.attributes)) {
                timeline_1.CreateAtemTimelineObject(timeline_1.CreateEnableForTimelineObject(params.piece), layers_1.AtemLLayer.AtemMEProgram, params.config.config.studio.AtemSource.Server1, timeline_state_resolver_types_1.AtemTransitionStyle.CUT);
            }
            break;
    }
    p.content = content;
    return p;
}
exports.CreatePieceGraphic = CreatePieceGraphic;
/**
 * Creates a remote source.
 * @param params Piece to create.
 * @param transition In transition.
 */
function CreatePieceRemote(params, transition) {
    let p = CreatePieceGeneric(params.piece);
    p.sourceLayerId = layers_1.SourceLayer.PgmRemote;
    p.name = params.piece.attributes[sources_1.Attributes.REMOTE];
    let content = content_1.CreateContentRemote(params.config, params.piece);
    switch (params.context) {
        default:
            content.timelineObjects = _.compact([
                timeline_1.CreateAtemTimelineObject(timeline_1.CreateEnableForTimelineObject(params.piece), layers_1.AtemLLayer.AtemMEProgram, sources_1.GetInputValue(params.config.context, params.config.sourceConfig, params.piece.attributes[sources_1.Attributes.REMOTE]), transition),
                timeline_1.CreateLawoAutomixTimelineObject({ start: 0 })
            ]);
            break;
    }
    p.content = content;
    return p;
}
exports.CreatePieceRemote = CreatePieceRemote;
/**
 * Creates a graphics overlay.
 * @param {PieceParams} params Piece to create.
 */
function CreatePieceGraphicOverlay(params, transition) {
    let p = CreatePieceGeneric(params.piece);
    p.sourceLayerId = layers_1.SourceLayer.PgmGraphicsSuper;
    let content = content_1.CreateContentGraphics(params.piece);
    content.timelineObjects = _.compact([
        timeline_1.CreateCCGMediaTimelineObject(timeline_1.CreateEnableForTimelineObject(params.piece), layers_1.CasparLLayer.CasparCGGraphics, params.piece.clipName),
        util_1.literal({
            id: '',
            enable: timeline_1.CreateEnableForTimelineObject(params.piece),
            priority: 1,
            layer: layers_1.AtemLLayer.AtemDSKGraphics,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                type: timeline_state_resolver_types_1.TimelineContentTypeAtem.ME,
                me: {
                    transition: transition,
                    transitionSettings: {
                        mix: {
                            rate: 100
                        }
                    },
                    upstreamKeyers: [
                        {
                            upstreamKeyerId: 0,
                            onAir: true
                        }
                    ]
                }
            }
        })
    ]);
    p.content = content;
    return p;
}
exports.CreatePieceGraphicOverlay = CreatePieceGraphicOverlay;
/**
 * Creates a script piece.
 * @param {PieceParams} params Piece to create.
 */
function CreatePieceScript(params) {
    let p = CreatePieceGenericEnable(params.piece);
    p.sourceLayerId = layers_1.SourceLayer.PgmScript;
    let scriptWords = [];
    if (params.piece.script) {
        scriptWords = params.piece.script.replace('\n', ' ').split(' ');
    }
    let duration = 3000;
    if (p.enable.duration) {
        duration = Number(p.enable.duration);
        if (isNaN(duration)) {
            duration = 3000;
        }
    }
    let firstWords = scriptWords.slice(0, Math.min(4, scriptWords.length)).join(' ');
    let lastWords = scriptWords.slice(scriptWords.length - (Math.min(4, scriptWords.length)), (Math.min(4, scriptWords.length))).join(' ');
    let scriptParent = '';
    switch (params.piece.objectType) {
        case classes_1.ObjectType.CAMERA:
            scriptParent = params.piece.attributes[sources_1.Attributes.CAMERA];
            break;
        case classes_1.ObjectType.GRAPHIC:
            scriptParent = 'Super';
            break;
        case classes_1.ObjectType.VIDEO:
            scriptParent = 'VT';
            break;
        case classes_1.ObjectType.REMOTE:
            scriptParent = params.piece.attributes[sources_1.Attributes.REMOTE];
            break;
    }
    p.name = (firstWords ? firstWords + '\u2026' : '') + '||' + (lastWords ? '\u2026' + lastWords : '');
    let content = {
        firstWords: firstWords,
        lastWords: lastWords,
        fullScript: scriptParent ? `/${scriptParent}/ ${(params.piece.script || '')} /end-${scriptParent}/` : (params.piece.script || ''),
        sourceDuration: duration,
        lastModified: Date.now() // TODO: pull from gateway
    };
    p.content = content;
    return p;
}
exports.CreatePieceScript = CreatePieceScript;
/**
 * Creates a voiceover piece.
 * @param {PieceParams} params Piece to create.
 */
function CreatePieceVoiceover(params) {
    let p = CreatePieceGenericEnable(params.piece);
    p.sourceLayerId = layers_1.SourceLayer.PgmScript;
    let scriptWords = [];
    if (params.piece.script) {
        scriptWords = params.piece.script.replace('\n', ' ').split(' ');
    }
    let firstWords = scriptWords.slice(0, Math.min(4, scriptWords.length)).join(' ');
    let lastWords = scriptWords.slice(scriptWords.length - (Math.min(4, scriptWords.length)), (Math.min(4, scriptWords.length))).join(' ');
    p.name = (firstWords ? firstWords + '\u2026' : '') + '||' + (lastWords ? '\u2026' + lastWords : '');
    let duration = 3000;
    if (p.enable.duration) {
        duration = Number(p.enable.duration);
        if (isNaN(duration)) {
            duration = 3000;
        }
    }
    let content = {
        firstWords: firstWords,
        lastWords: lastWords,
        fullScript: params.piece.script,
        sourceDuration: duration,
        mixConfiguration: {},
        timelineObjects: _.compact([
            timeline_1.CreateLawoAutomixTimelineObject({ start: 0 })
        ])
    };
    p.content = content;
    return p;
}
exports.CreatePieceVoiceover = CreatePieceVoiceover;
/**
 * Checks whether a piece should be placed on a screen, if so, it places it on the corresponding screen.
 * @param {IBlueprintPiece} p The Piece blueprint to modify.
 * @param {any} attr Attributes of the piece.
 */
function checkAndPlaceOnScreen(p, attr) {
    if ('screen' in attr) {
        if (attr['screen'] !== '') {
            p.outputLayerId = attr['screen'];
            return true;
        }
    }
    return false;
}


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
const sources_1 = __webpack_require__(29);
const studio_1 = __webpack_require__(44);
/**
 * Creates a base camera content.
 */
function CreateContentCam(config, piece) {
    let content = {
        studioLabel: studio_1.getStudioName(config.context),
        switcherInput: sources_1.GetInputValue(config.context, config.sourceConfig, piece.attributes[sources_1.Attributes.CAMERA]),
        timelineObjects: _.compact([])
    };
    return content;
}
exports.CreateContentCam = CreateContentCam;
/**
 * Creates a base VT content.
 * @param piece Piece used to create content.
 */
function CreateContentVT(piece) {
    let content = {
        fileName: piece.clipName,
        path: piece.clipName,
        firstWords: '',
        lastWords: '',
        sourceDuration: piece.duration ? piece.duration : 0,
        timelineObjects: _.compact([])
    };
    return content;
}
exports.CreateContentVT = CreateContentVT;
/**
 * Creates a base graphics content.
 * @param piece Piece used to create content.
 */
function CreateContentGraphics(piece) {
    let content = {
        fileName: piece.clipName,
        path: piece.clipName,
        timelineObjects: _.compact([])
    };
    return content;
}
exports.CreateContentGraphics = CreateContentGraphics;
/**
 * Creates a base remote content.
 * @param config Segment config.
 * @param piece Piece used to create content.
 */
function CreateContentRemote(config, piece) {
    let content = {
        studioLabel: studio_1.getStudioName(config.context),
        switcherInput: sources_1.GetInputValue(config.context, config.sourceConfig, piece.attributes[sources_1.Attributes.REMOTE]),
        timelineObjects: _.compact([])
    };
    return content;
}
exports.CreateContentRemote = CreateContentRemote;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Gets the name of the studio this context belongs to.
 * @param {SegmentContext} context Context to find the studio name for.
 */
function getStudioName(context) {
    let studio = context['studio'];
    if (studio) {
        return studio['name'];
    }
    return '';
}
exports.getStudioName = getStudioName;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __webpack_require__(0);
const timeline_state_resolver_types_1 = __webpack_require__(2);
const layers_1 = __webpack_require__(5);
/**
 * Creates an enable object for a timeline object.
 * @param {Piece} piece Piece to create enable for.
 */
function CreateEnableForTimelineObject(piece, delay) {
    let enable = {
        start: delay ? delay : 0
    };
    if (piece.duration) {
        enable.duration = piece.duration;
    }
    return enable;
}
exports.CreateEnableForTimelineObject = CreateEnableForTimelineObject;
/**
 * Creates a timeline object for switching ATEM sources.
 * @param {TimelineEnable} enable Timeline object enable.
 * @param {AtemLLayer} layer Layer to place content onto.
 * @param {number} input Input to switch to.
 * @param {AtemTransitionStyle} transition Transition to use.
 * @param {AtemTransitionSettings} transitionSettings Transition settings.
 */
function CreateAtemTimelineObject(enable, layer, input, transition, transitionSettings) {
    return util_1.literal({
        id: '',
        enable: enable,
        priority: 1,
        layer: layer,
        content: {
            deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
            type: timeline_state_resolver_types_1.TimelineContentTypeAtem.ME,
            me: {
                input: input,
                transition: transition,
                transitionSettings: transitionSettings
            }
        }
    });
}
exports.CreateAtemTimelineObject = CreateAtemTimelineObject;
/**
 * Creates a timeline object for an ATEM transition.
 * @param {TimelineEnable} enable Timeline object enable.
 * @param {AtemTransitionStyle} transition Transition to use.
 */
function CreateTransitionAtemTimelineObject(enable, transition, input) {
    return util_1.literal({
        id: '',
        enable: enable,
        priority: 5,
        layer: layers_1.AtemLLayer.AtemMEProgram,
        content: {
            deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
            type: timeline_state_resolver_types_1.TimelineContentTypeAtem.ME,
            me: {
                input: input,
                transition: transition,
                transitionSettings: {
                    mix: {
                        rate: 0
                    }
                }
            }
        }
    });
}
exports.CreateTransitionAtemTimelineObject = CreateTransitionAtemTimelineObject;
/**
 * Creates a timeline object for a LAWO automix.
 * @param {TimelineEnable} enable Timeline object enable.
 */
function CreateLawoAutomixTimelineObject(enable) {
    return util_1.literal({
        id: '',
        enable: enable,
        priority: 1,
        layer: layers_1.LawoLLayer.LawoSourceAutomix,
        content: {
            deviceType: timeline_state_resolver_types_1.DeviceType.LAWO,
            type: timeline_state_resolver_types_1.TimelineContentTypeLawo.SOURCE,
            'Fader/Motor dB Value': {
                value: 0,
                transitionDuration: 1
            }
        }
    });
}
exports.CreateLawoAutomixTimelineObject = CreateLawoAutomixTimelineObject;
/**
 * Creates a timeline object for a CCG media item
 * @param {TimelineEnable} enable Timeline object enable.
 * @param {CasparLLayer} layer Output layer.
 * @param {string} file File to play.
 */
function CreateCCGMediaTimelineObject(enable, layer, file) {
    return util_1.literal({
        id: '',
        enable: enable,
        priority: 1,
        layer: layer,
        content: {
            deviceType: timeline_state_resolver_types_1.DeviceType.CASPARCG,
            type: timeline_state_resolver_types_1.TimelineContentTypeCasparCg.MEDIA,
            file: file
        }
    });
}
exports.CreateCCGMediaTimelineObject = CreateCCGMediaTimelineObject;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
const config_manifests_1 = __webpack_require__(6);
const migrations_1 = __webpack_require__(32);
const getRundown_1 = __webpack_require__(47);
const getSegment_1 = __webpack_require__(49);
const onAsRunEvent_1 = __webpack_require__(51);
const manifest = {
    blueprintType: tv_automation_sofie_blueprints_integration_1.BlueprintManifestType.SHOWSTYLE,
    blueprintVersion: "0.1.0-0.1.0-5-gc5c89e3",
    integrationVersion: "1.10.0",
    TSRVersion: "3.18.0",
    minimumCoreVersion: '^1.0.0',
    getShowStyleVariantId: getRundown_1.getShowStyleVariantId,
    getRundown: getRundown_1.getRundown,
    getSegment: getSegment_1.getSegment,
    onAsRunEvent: onAsRunEvent_1.default,
    showStyleConfigManifest: config_manifests_1.ShowStyleConfigManifest,
    showStyleMigrations: migrations_1.showStyleMigrations
};
exports.default = manifest;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
const atem_1 = __webpack_require__(30);
const timeline_state_resolver_types_1 = __webpack_require__(2);
const util_1 = __webpack_require__(0);
const layers_1 = __webpack_require__(5);
const constants_1 = __webpack_require__(48);
const config_1 = __webpack_require__(40);
const sources_1 = __webpack_require__(29);
function getShowStyleVariantId(_context, showStyleVariants, _ingestRundown) {
    const variant = _.first(showStyleVariants);
    if (variant) {
        return variant._id;
    }
    return null;
}
exports.getShowStyleVariantId = getShowStyleVariantId;
function getRundown(context, ingestRundown) {
    const config = config_1.parseConfig(context);
    let startTime = 0;
    let endTime = 0;
    // Set start / end times
    if ('payload' in ingestRundown) {
        if (ingestRundown['payload'].expectedStart) {
            startTime = Number(ingestRundown['payload'].expectedStart);
        }
        if (ingestRundown['payload'].expectedEnd) {
            endTime = Number(ingestRundown['payload'].expectedEnd);
        }
    }
    // Can't end before we begin
    if (endTime < startTime) {
        endTime = startTime;
    }
    return {
        rundown: util_1.literal({
            externalId: ingestRundown.externalId,
            name: ingestRundown.name,
            expectedStart: startTime,
            expectedDuration: endTime - startTime
        }),
        globalAdLibPieces: getGlobalAdLibPieces(context, config),
        baseline: getBaseline(config)
    };
}
exports.getRundown = getRundown;
function getGlobalAdLibPieces(context, config) {
    const sources = sources_1.parseSources(context, config);
    function makeCameraAdLib(info, rank) {
        return {
            externalId: 'cam',
            name: info.id + '',
            _rank: rank || 0,
            sourceLayerId: layers_1.SourceLayer.PgmCam,
            outputLayerId: 'pgm0',
            expectedDuration: 0,
            infiniteMode: tv_automation_sofie_blueprints_integration_1.PieceLifespan.OutOnNextPart,
            content: {
                timelineObjects: _.compact([
                    util_1.literal({
                        id: '',
                        enable: { while: 0, duration: 0 },
                        priority: 1,
                        layer: layers_1.AtemLLayer.AtemMEProgram,
                        content: {
                            deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                            type: timeline_state_resolver_types_1.TimelineContentTypeAtem.ME,
                            me: {
                                input: info.port,
                                transition: timeline_state_resolver_types_1.AtemTransitionStyle.CUT
                            }
                        }
                    })
                ])
            }
        };
    }
    let adlibItems = [];
    _.each(sources, v => {
        if (v.type === tv_automation_sofie_blueprints_integration_1.SourceLayerType.CAMERA) {
            adlibItems.push(makeCameraAdLib(v, (100 + v.id)));
        }
    });
    return adlibItems;
}
function getBaseline(config) {
    return [
        // Default timeline
        util_1.literal({
            id: '',
            enable: { while: 1, duration: 0 },
            priority: 0,
            layer: layers_1.AtemLLayer.AtemMEProgram,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                type: timeline_state_resolver_types_1.TimelineContentTypeAtem.ME,
                me: {
                    input: config.studio.AtemSource.Default,
                    transition: timeline_state_resolver_types_1.AtemTransitionStyle.CUT
                }
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.AtemLLayer.AtemAuxLookahead,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                type: timeline_state_resolver_types_1.TimelineContentTypeAtem.AUX,
                aux: {
                    input: config.studio.AtemSource.Default
                }
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.AtemLLayer.AtemAuxSSrc,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                type: timeline_state_resolver_types_1.TimelineContentTypeAtem.AUX,
                aux: {
                    input: atem_1.AtemSourceIndex.SSrc
                }
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.AtemLLayer.AtemAuxClean,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                type: timeline_state_resolver_types_1.TimelineContentTypeAtem.AUX,
                aux: {
                    input: atem_1.AtemSourceIndex.Cfd1
                }
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.AtemLLayer.AtemDSKGraphics,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                type: timeline_state_resolver_types_1.TimelineContentTypeAtem.DSK,
                dsk: {
                    onAir: true,
                    sources: {
                        fillSource: config.studio.AtemSource.DSK1F,
                        cutSource: config.studio.AtemSource.DSK1K
                    },
                    properties: {
                        tie: false,
                        preMultiply: true,
                        mask: {
                            enabled: false
                        }
                    }
                }
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.AtemLLayer.AtemDSKEffect,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                type: timeline_state_resolver_types_1.TimelineContentTypeAtem.DSK,
                dsk: {
                    onAir: true,
                    sources: {
                        fillSource: config.studio.AtemSource.DSK2F,
                        cutSource: config.studio.AtemSource.DSK2K
                    },
                    properties: {
                        tie: false,
                        preMultiply: true,
                        mask: {
                            enabled: false
                        }
                    }
                }
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.AtemLLayer.AtemSSrcArt,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                type: timeline_state_resolver_types_1.TimelineContentTypeAtem.SSRCPROPS,
                ssrcProps: {
                    artFillSource: config.studio.AtemSource.SplitArtF,
                    artCutSource: config.studio.AtemSource.SplitArtK,
                    artOption: 1,
                    artPreMultiplied: true
                }
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.AtemLLayer.AtemSSrcDefault,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                type: timeline_state_resolver_types_1.TimelineContentTypeAtem.SSRC,
                ssrc: {
                    boxes: [
                        {
                            enabled: true,
                            source: atem_1.AtemSourceIndex.Bars,
                            size: 580,
                            x: -800,
                            y: 50,
                            cropped: true,
                            cropRight: 2000
                        },
                        {
                            enabled: true,
                            source: atem_1.AtemSourceIndex.Bars,
                            size: 580,
                            x: 800,
                            y: 50
                            // note: this sits behind box1, so don't crop it to ensure there is no gap between
                        },
                        {
                            enabled: false
                        },
                        {
                            enabled: false
                        }
                    ]
                }
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.CasparLLayer.CasparPlayerClip,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.CASPARCG,
                type: timeline_state_resolver_types_1.TimelineContentTypeCasparCg.MEDIA,
                file: 'EMPTY',
                mixer: {
                    opacity: 0
                },
                transitions: {
                    inTransition: {
                        type: timeline_state_resolver_types_1.Transition.CUT,
                        duration: constants_1.Constants.DefaultClipFadeOut
                    }
                }
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.CasparLLayer.CasparPlayerClipNext,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.CASPARCG,
                type: timeline_state_resolver_types_1.TimelineContentTypeCasparCg.ROUTE,
                mappedLayer: layers_1.CasparLLayer.CasparPlayerClip,
                mode: 'BACKGROUND'
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.CasparLLayer.CasparPlayerClipNextWarning,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.CASPARCG,
                type: timeline_state_resolver_types_1.TimelineContentTypeCasparCg.MEDIA,
                file: 'assets/no_clip_spinner_loop',
                loop: true
            }
        }),
        util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.CasparLLayer.CasparCountdown,
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.CASPARCG,
                type: timeline_state_resolver_types_1.TimelineContentTypeCasparCg.HTMLPAGE,
                url: config.studio.SofieHostURL + '/countdowns/studio0/presenter'
            }
        }),
        ..._.range(config.studio.HyperdeckCount).map(i => util_1.literal({
            id: '',
            enable: { while: '1', duration: 0 },
            priority: 0,
            layer: layers_1.HyperdeckLLayer(i),
            content: {
                deviceType: timeline_state_resolver_types_1.DeviceType.HYPERDECK,
                type: timeline_state_resolver_types_1.TimelineContentTypeHyperdeck.TRANSPORT,
                status: timeline_state_resolver_types_1.TransportStatus.PREVIEW
            }
        }))
    ];
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants;
(function (Constants) {
    Constants.DefaultClipFadeOut = 35 * 40; // 35 frames
})(Constants = exports.Constants || (exports.Constants = {}));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const objectPath = __webpack_require__(41);
const util_1 = __webpack_require__(0);
const layers_1 = __webpack_require__(5);
const classes_1 = __webpack_require__(31);
const timeline_state_resolver_types_1 = __webpack_require__(2);
const config_1 = __webpack_require__(40);
const sources_1 = __webpack_require__(29);
const pieces_1 = __webpack_require__(42);
const dve_1 = __webpack_require__(50);
function getSegment(context, ingestSegment) {
    const config = {
        context: context,
        config: config_1.parseConfig(context),
        sourceConfig: sources_1.parseSources(context, config_1.parseConfig(context)),
        frameHeight: 1920,
        frameWidth: 1080,
        framesPerSecond: 50
    };
    const segment = util_1.literal({
        name: ingestSegment.name,
        metaData: {}
    });
    const parts = [];
    if (ingestSegment.payload['float']) {
        return {
            segment,
            parts
        };
    }
    let currentPartIndex = 0;
    for (const part of ingestSegment.parts) {
        if (!part.payload) {
            context.warning(`Missing payload for part: '${part.name || part.externalId}'`);
        }
        else if (part.payload['float']) {
            continue;
        }
        else {
            const type = objectPath.get(part.payload, 'type', '') + '';
            if (!type) {
                context.warning(`Missing type for part: '${part.name || part.externalId}'`);
                parts.push(createGeneric(part));
            }
            else {
                let pieces = [];
                let adLibPieces = [];
                if ('pieces' in part.payload) {
                    let pieceList = part.payload['pieces'];
                    // Generate script
                    let script = '';
                    if ('script' in part.payload) {
                        script += part.payload['script'];
                    }
                    pieceList.forEach(piece => {
                        if (piece.script) {
                            script += `\n${piece.script}`;
                        }
                    });
                    if (type.match(/dve/i)) {
                        let length = 0;
                        for (let i = 0; i < pieceList.length; i++) {
                            if (!pieceList[i].objectType.match(/(transition)|(split)/i)) {
                                length++;
                            }
                        }
                        if (length > 5) {
                            // TODO: Report this to spreadsheet
                            context.warning('Maximum number of elements in DVE is 4');
                        }
                        else if (length < 2) {
                            context.warning('Minimum number of elements in DVE is 2');
                        }
                        else {
                            let sources = Math.min(length, 4);
                            let p = dve_1.CreateDVE(config, pieceList, sources, config.frameHeight, config.frameWidth);
                            if (p) {
                                if (util_1.isAdLibPiece(p)) {
                                    adLibPieces.push(p);
                                }
                                else {
                                    pieces.push(p);
                                }
                            }
                        }
                    }
                    else if (type.match(/breaker/i)) {
                        // Validate breaker.
                        // Don't allow any other pieces to be specified, and don't allow transition type to be changed (for now).
                        if (pieceList.length > 1) {
                            for (let i = 1; i < pieceList.length; i++) {
                                if (pieceList[i].objectType.match(/transition/i)) {
                                    context.warning(`Cannot change transition type of Breaker. Wipe transition will be used.`);
                                }
                                else {
                                    context.warning(`Only 1 item allowed in Breaker. Move ${pieceList[i].clipName || pieceList[i].id} to new item.`);
                                }
                            }
                        }
                        pieces.push(pieces_1.CreatePieceBreaker(pieceList[0], pieceList[0].duration || 1000));
                    }
                    else {
                        let transitionType = timeline_state_resolver_types_1.AtemTransitionStyle.CUT;
                        if (type.match(/head/)) {
                            if (parts[currentPartIndex - 1] && (objectPath.get(parts[currentPartIndex - 1], 'type', '') + '').match(/head/)) {
                                // Rest of clips in head wipes in/out.
                                transitionType = timeline_state_resolver_types_1.AtemTransitionStyle.WIPE;
                            }
                            else {
                                // First clip in head cuts.
                                transitionType = timeline_state_resolver_types_1.AtemTransitionStyle.CUT;
                            }
                        }
                        for (let i = 0; i < pieceList.length; i++) {
                            if (pieceList[i].objectType.match(/transition/i)) {
                                let pieceTransition = pieceList[i].transition;
                                if (pieceTransition)
                                    transitionType = transitionTypeFromString(pieceTransition);
                            }
                        }
                        // Iterate over pieces + generate.
                        for (let i = 0; i < pieceList.length; i++) {
                            let params = {
                                config: config,
                                piece: pieceList[i],
                                context: type
                            };
                            switch (params.piece.objectType) {
                                case classes_1.ObjectType.VIDEO:
                                    if (params.piece.clipName) {
                                        createPieceByType(params, pieces_1.CreatePieceVideo, pieces, adLibPieces, transitionType);
                                    }
                                    else {
                                        context.warning(`Missing clip for video: ${params.piece.id}`);
                                    }
                                    break;
                                case classes_1.ObjectType.CAMERA:
                                    if (params.piece.attributes[sources_1.Attributes.CAMERA]) {
                                        createPieceByType(params, pieces_1.CreatePieceCam, pieces, adLibPieces, transitionType);
                                    }
                                    else {
                                        context.warning(`Missing camera for camera: ${params.piece.id}`);
                                    }
                                    break;
                                case classes_1.ObjectType.GRAPHIC:
                                    if (params.piece.clipName) {
                                        createPieceByType(params, pieces_1.CreatePieceGraphic, pieces, adLibPieces, transitionType);
                                    }
                                    else {
                                        context.warning(`Missing clip for graphic: ${params.piece.id}`);
                                    }
                                    break;
                                case classes_1.ObjectType.OVERLAY:
                                    if (params.piece.clipName) {
                                        createPieceByType(params, pieces_1.CreatePieceGraphicOverlay, pieces, adLibPieces, transitionType);
                                    }
                                    else {
                                        context.warning(`Missing clip for overlay: ${params.piece.id}`);
                                    }
                                    break;
                                case classes_1.ObjectType.TRANSITION:
                                    if (params.piece.transition) {
                                        pieces.push(pieces_1.CreatePieceInTransition(params.piece, transitionType, params.piece.duration || 1000, sources_1.GetInputValueFromPiece(params.config, params.piece)));
                                    }
                                    else {
                                        context.warning(`Missing transition for transition: ${params.piece.id}`);
                                    }
                                    break;
                                case classes_1.ObjectType.VOICEOVER:
                                    if (params.piece.script) {
                                        createPieceByType(params, pieces_1.CreatePieceVoiceover, pieces, adLibPieces, transitionType);
                                    }
                                    else {
                                        context.warning(`Missing script for voiceover: ${params.piece.id}`);
                                    }
                                    break;
                                case classes_1.ObjectType.REMOTE:
                                    if (params.piece.attributes[sources_1.Attributes.REMOTE]) {
                                        createPieceByType(params, pieces_1.CreatePieceRemote, pieces, adLibPieces, transitionType);
                                    }
                                    else {
                                        context.warning(`Missing remote source for remote: ${params.piece.id}`);
                                    }
                                    break;
                                case classes_1.ObjectType.SCRIPT:
                                    break;
                                default:
                                    context.warning(`Missing objectType '${params.piece.objectType}' for piece: '${params.piece.clipName || params.piece.id}'`);
                                    break;
                            }
                            if (i === 0 && script) {
                                params.piece.script = script;
                                pieces.push(pieces_1.CreatePieceScript(params));
                            }
                        }
                    }
                }
                parts.push(createPart(part, pieces, adLibPieces));
            }
        }
        currentPartIndex++;
    }
    return {
        segment,
        parts
    };
}
exports.getSegment = getSegment;
/**
 * Returns the AtemTransitionStyle represented by a string.
 * If no match is found, CUT is returned.
 * @param {string} str Transtion style to match.
 */
function transitionTypeFromString(str) {
    if (str.match(/mix/i)) {
        return timeline_state_resolver_types_1.AtemTransitionStyle.MIX;
    }
    else if (str.match(/dip/i)) {
        return timeline_state_resolver_types_1.AtemTransitionStyle.DIP;
    }
    else if (str.match(/wipe/i)) {
        return timeline_state_resolver_types_1.AtemTransitionStyle.WIPE;
    }
    else if (str.match(/dve/i)) {
        return timeline_state_resolver_types_1.AtemTransitionStyle.DVE;
    }
    else if (str.match(/sting/i)) {
        return timeline_state_resolver_types_1.AtemTransitionStyle.STING;
    }
    else {
        return timeline_state_resolver_types_1.AtemTransitionStyle.CUT;
    }
}
/**
 * Creates a piece using a given function.
 * @param {Piece} piece Piece to create.
 * @param {(config: SegmentConf, p: Piece, context: string, transition: AtemTransitionStyle) => IBlueprintPiece | IBlueprintAdLibPiece} creator Function for creating the piece.
 * @param {IBlueprintPiece[]} pieces Array of IBlueprintPiece to add regular pieces to.
 * @param {IBlueprintAdLibPiece[]} adLibPieces Array of IBlueprintAdLibPiece to add adLib pieces to.
 * @param {string} context The part type the piece belogs to e.g. 'HEAD'
 * @param {AtemTransitionsStyle} transitionType Type of transition to use.
 */
function createPieceByType(params, creator, pieces, adLibPieces, transitionType) {
    let transition = transitionType;
    if (params.piece.attributes['transition'])
        transition = transitionFromString(params.piece.attributes['transition'], transitionType || timeline_state_resolver_types_1.AtemTransitionStyle.CUT);
    let p = creator(params, transition || timeline_state_resolver_types_1.AtemTransitionStyle.CUT);
    if (p.content) {
        if (util_1.isAdLibPiece(p)) {
            adLibPieces.push(p);
        }
        else {
            pieces.push(p);
            if (params.context.match(/titles/i) && params.piece.objectType.match(/(graphic)|(video)/i)) {
                let input = params.config.config.studio.AtemSource.Server1;
                pieces.push(pieces_1.CreatePieceOutTransition(params.piece, transition || timeline_state_resolver_types_1.AtemTransitionStyle.DIP, (1 / params.config.framesPerSecond) * 150 * 1000, input)); // TODO: Use actual framerate
            }
            if (params.context.match(/breaker/i) && params.piece.objectType.match(/(graphic)|(video)/i)) {
                let input = params.config.config.studio.AtemSource.Server1;
                pieces.push(pieces_1.CreatePieceOutTransition(params.piece, transition || timeline_state_resolver_types_1.AtemTransitionStyle.DIP, (1 / params.config.framesPerSecond) * 50 * 1000, input)); // TODO: Use actual framerate
            }
            if (params.context.match(/package/i) && params.piece.objectType.match(/video/i)) {
                let input = params.config.config.studio.AtemSource.Server1;
                pieces.push(pieces_1.CreatePieceInTransition(params.piece, transition || timeline_state_resolver_types_1.AtemTransitionStyle.MIX, (1 / params.config.framesPerSecond) * 150 * 1000, input));
                pieces.push(pieces_1.CreatePieceOutTransition(params.piece, transition || timeline_state_resolver_types_1.AtemTransitionStyle.DIP, (1 / params.config.framesPerSecond) * 50 * 1000, input)); // TODO: Use actual framerate
            }
        }
    }
}
/**
 * Creates a generic part. Only used as a placeholder for part types that have not been implemented yet.
 * @param {Piece} piece Piece to evaluate.
 */
function createGeneric(ingestPart) {
    const part = util_1.literal({
        externalId: ingestPart.externalId,
        title: ingestPart.name || 'Unknown',
        metaData: {},
        typeVariant: '',
        expectedDuration: 5000
    });
    const piece = util_1.literal({
        _id: '',
        externalId: ingestPart.externalId,
        name: part.title,
        enable: { start: 0, duration: 100 },
        outputLayerId: 'pgm0',
        sourceLayerId: layers_1.SourceLayer.PgmCam
    });
    return {
        part,
        adLibPieces: [],
        pieces: [piece]
    };
}
/**
 * Creates a part from an ingest part and associated pieces.
 * @param {IngestPart} ingestPart Ingest part.
 * @param {IBlueprintPiece[]} pieces Array of pieces.
 */
function createPart(ingestPart, pieces, adLibPieces) {
    const part = util_1.literal({
        externalId: ingestPart.externalId,
        title: ingestPart.name || 'Unknown',
        metaData: {},
        typeVariant: '',
        expectedDuration: calculateExpectedDuration(pieces)
    });
    return {
        part,
        adLibPieces: adLibPieces,
        pieces: pieces
    };
}
/**
 * Calculates the expected duration of a part from component pieces.
 * @param {IBlueprintPiece[]} pieces Pieces to calculate duration for.
 */
function calculateExpectedDuration(pieces) {
    if (pieces.length) {
        let start = 0;
        let end = 0;
        pieces.forEach(piece => {
            if (!piece.isTransition) {
                let st = piece.enable.start;
                let en = piece.enable.start;
                if (piece.enable.duration) {
                    en = piece.enable.start + piece.enable.duration;
                }
                else if (piece.enable.end) {
                    en = piece.enable.end;
                }
                if (piece.infiniteMode) {
                    en = en + 1000;
                }
                if (st < start) {
                    start = st;
                }
                if (en > end) {
                    end = en;
                }
                if (st > end) {
                    end = st;
                }
            }
        });
        return end - start;
    }
    return 0;
}
/**
 * Translates the string representation of a transition to an AtemTransitionStyle.
 * @param transition Transition as string.
 * @param defaultTransition AtemTransitionStyle.
 */
function transitionFromString(transition, defaultTransition) {
    switch (transition) {
        case 'mix':
            return timeline_state_resolver_types_1.AtemTransitionStyle.MIX;
        case 'cut':
            return timeline_state_resolver_types_1.AtemTransitionStyle.CUT;
        case 'dip':
            return timeline_state_resolver_types_1.AtemTransitionStyle.DIP;
        case 'sting':
            return timeline_state_resolver_types_1.AtemTransitionStyle.STING;
        case 'wipe':
            return timeline_state_resolver_types_1.AtemTransitionStyle.WIPE;
        default:
            return defaultTransition;
    }
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const _ = __webpack_require__(1);
const classes_1 = __webpack_require__(31);
const tv_automation_sofie_blueprints_integration_1 = __webpack_require__(3);
const timeline_state_resolver_types_1 = __webpack_require__(2);
const util_1 = __webpack_require__(0);
const content_1 = __webpack_require__(43);
const studio_1 = __webpack_require__(44);
const timeline_1 = __webpack_require__(45);
const layers_1 = __webpack_require__(5);
const sources_1 = __webpack_require__(29);
const pieces_1 = __webpack_require__(42);
const atem_1 = __webpack_require__(30);
/**
 * Creates a DVE Piece.
 * @param {SegmentConf} config Segment config.
 * @param {Piece[]} pieces Pieces to insert into the DVE.
 * @param {number} sources Number of sources to display.
 * @param {number} width Screen width.
 * @param {number} height Screen height.
 */
function CreateDVE(config, pieces, sources, width, height) {
    let dvePiece = pieces[0];
    if (dvePiece.objectType === 'split') {
        return createSplit(config, pieces, sources, width, height);
    }
    else {
        return createPIP(config, pieces, width, height);
    }
}
exports.CreateDVE = CreateDVE;
/**
 * Creates DVE source configurations.
 * @param {SegmentConf} config Segment config.
 * @param {Piece[]} pieces Pieces to create.
 * @param {SuperSourceBox[]} sourceBoxes Array of boxes to create.
 */
function createDVESourceConfigurations(config, pieces, sourceBoxes) {
    let sourceConfigurations = [];
    let index = 0;
    pieces.forEach(piece => {
        let newContent;
        switch (piece.objectType) {
            case classes_1.ObjectType.GRAPHIC:
                newContent = util_1.literal(Object.assign(Object.assign({}, content_1.CreateContentGraphics(piece)), {
                    type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.GRAPHICS,
                    studioLabel: studio_1.getStudioName(config.context),
                    switcherInput: config.config.studio.AtemSource.Server2 // TODO: Get from Sofie.
                }));
                newContent.timelineObjects = _.compact([
                    timeline_1.CreateCCGMediaTimelineObject(timeline_1.CreateEnableForTimelineObject(piece), layers_1.CasparLLayer.CasparCGGraphics, piece.clipName)
                ]),
                    sourceConfigurations.push(newContent);
                sourceBoxes[index].source = newContent.switcherInput;
                break;
            case classes_1.ObjectType.VIDEO:
                newContent = util_1.literal(Object.assign(Object.assign({}, content_1.CreateContentVT(piece)), {
                    type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.VT,
                    studioLabel: studio_1.getStudioName(config.context),
                    switcherInput: config.config.studio.AtemSource.Server1
                }));
                newContent.timelineObjects = _.compact([
                    timeline_1.CreateCCGMediaTimelineObject(timeline_1.CreateEnableForTimelineObject(piece), layers_1.CasparLLayer.CasparPlayerClip, piece.clipName),
                    util_1.literal({
                        id: '',
                        enable: { start: 0 },
                        priority: 1,
                        layer: layers_1.LawoLLayer.LawoSourceClipStk,
                        content: {
                            deviceType: timeline_state_resolver_types_1.DeviceType.LAWO,
                            type: timeline_state_resolver_types_1.TimelineContentTypeLawo.SOURCE,
                            'Fader/Motor dB Value': {
                                value: 0,
                                transitionDuration: 10
                            }
                        }
                    })
                ]), // TODO
                    sourceConfigurations.push(newContent);
                sourceBoxes[index].source = newContent.switcherInput;
                break;
            case classes_1.ObjectType.CAMERA:
                newContent = util_1.literal(Object.assign(Object.assign({}, content_1.CreateContentCam(config, piece)), {
                    type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.CAMERA,
                    studioLabel: studio_1.getStudioName(config.context),
                    switcherInput: sources_1.GetInputValue(config.context, config.sourceConfig, piece.attributes[sources_1.Attributes.CAMERA])
                }));
                newContent.timelineObjects = [
                    timeline_1.CreateLawoAutomixTimelineObject({ start: 0 })
                ], // TODO
                    sourceConfigurations.push(newContent);
                sourceBoxes[index].source = newContent.switcherInput;
                break;
            case classes_1.ObjectType.REMOTE:
                newContent = util_1.literal({
                    timelineObjects: [
                        timeline_1.CreateLawoAutomixTimelineObject({ start: 0 })
                    ],
                    type: tv_automation_sofie_blueprints_integration_1.SourceLayerType.REMOTE,
                    studioLabel: studio_1.getStudioName(config.context),
                    switcherInput: sources_1.GetInputValue(config.context, config.sourceConfig, piece.attributes[sources_1.Attributes.REMOTE])
                });
                sourceConfigurations.push(newContent);
                sourceBoxes[index].source = newContent.switcherInput;
                break;
            default:
                config.context.warning(`DVE does not support objectType '${piece.objectType}' for piece: '${piece.clipName || piece.id}'`);
                break;
        }
        index++;
    });
    return sourceConfigurations;
}
/**
 * Creates a PIP.
 * @param {SegmentConf} config Segment config.
 * @param {Piece[]} pieces Pieces to create.
 * @param {number} width Frame width.
 * @param {number} height Frame height.
 */
function createPIP(config, pieces, width, height) {
    let dvePiece = pieces[0];
    pieces = pieces.slice(1, 3);
    if (pieces.length !== 2) {
        config.context.warning(`Wrong number of sources in DVE for PIP. Need exactly two sources.`);
        return;
    }
    let boxes = [
        {
            x: width,
            y: height,
            size: width
        },
        {
            x: width / 5,
            y: height / 5,
            size: width / 5
        }
    ];
    let sourceBoxes = [];
    for (let i = 0; i < 2; i++) {
        let input = 1000;
        switch (pieces[i].objectType) {
            case 'camera':
                input = sources_1.GetInputValue(config.context, config.sourceConfig, pieces[i].attributes[sources_1.Attributes.CAMERA]);
                break;
            case 'remote':
                input = sources_1.GetInputValue(config.context, config.sourceConfig, pieces[i].attributes[sources_1.Attributes.REMOTE]);
                break;
            default:
                input = config.config.studio.AtemSource.Server1;
                break;
        }
        sourceBoxes.push(util_1.literal({
            enabled: true,
            source: input,
            x: boxes[i].x,
            y: boxes[i].y,
            size: boxes[i].size
        }));
    }
    let p = pieces_1.CreatePieceGeneric(dvePiece);
    p.sourceLayerId = layers_1.SourceLayer.PgmSplit;
    let content = {
        dveConfiguration: {},
        boxSourceConfiguration: createDVESourceConfigurations(config, pieces, sourceBoxes),
        timelineObjects: _.compact([
            util_1.literal({
                id: '',
                enable: { start: 0 },
                priority: 1,
                layer: layers_1.AtemLLayer.AtemSSrcOverride,
                content: {
                    deviceType: timeline_state_resolver_types_1.DeviceType.ATEM,
                    type: timeline_state_resolver_types_1.TimelineContentTypeAtem.SSRC,
                    ssrc: {
                        boxes: sourceBoxes.map(box => { return { enabled: true, source: box.source }; })
                    }
                }
            }),
            timeline_1.CreateAtemTimelineObject({ start: 0 }, layers_1.AtemLLayer.AtemMEProgram, atem_1.AtemSourceIndex.SSrc, timeline_state_resolver_types_1.AtemTransitionStyle.CUT)
        ])
    };
    p.content = content;
    p.name = `PIP`;
    return p;
}
/**
 * Creates a DVE Split.
 * @param {SegmentConf} config Segment config.
 * @param {Piece[]} pieces Pieces to create.
 * @param {number} sources Number of sources.
 * @param {number} width Frame width.
 * @param {number} height Frame height.
 */
function createSplit(config, pieces, sources, width, height) {
    let dvePiece = pieces[0]; // First piece is always assumed to be the DVE.
    pieces = pieces.slice(1, sources + 1);
    let boxes = [];
    // Right now there are always half the width/height, but could change!
    let boxWidth = 0;
    let boxHeight = 0;
    switch (sources) {
        case 2:
            boxWidth = width / 2;
            boxHeight = height / 2;
            boxes = [
                {
                    x: -boxWidth,
                    y: boxHeight,
                    size: boxWidth
                },
                {
                    x: 0,
                    y: boxHeight,
                    size: boxWidth
                }
            ];
            break;
        case 3:
            boxWidth = width / 2;
            boxHeight = height / 2;
            boxes = [
                {
                    x: -(boxWidth / 2),
                    y: boxHeight,
                    size: boxWidth
                },
                {
                    x: -boxWidth,
                    y: 0,
                    size: boxWidth
                },
                {
                    x: 0,
                    y: 0,
                    size: boxWidth
                }
            ];
            break;
        case 4:
            boxWidth = width / 2;
            boxHeight = height / 2;
            boxes = [
                {
                    x: -boxWidth,
                    y: boxHeight,
                    size: boxWidth
                },
                {
                    x: 0,
                    y: boxHeight,
                    size: boxWidth
                },
                {
                    x: -boxWidth,
                    y: 0,
                    size: boxWidth
                },
                {
                    x: 0,
                    y: 0,
                    size: boxWidth
                }
            ];
            break;
    }
    let sourceBoxes = [];
    for (let i = 0; i < sources; i++) {
        sourceBoxes.push(util_1.literal({
            enabled: true,
            source: 1000,
            x: boxes[i].x,
            y: boxes[i].y,
            size: boxes[i].size
        }));
    }
    let p = pieces_1.CreatePieceGeneric(dvePiece);
    p.sourceLayerId = layers_1.SourceLayer.PgmSplit;
    let content = {
        dveConfiguration: {},
        boxSourceConfiguration: createDVESourceConfigurations(config, pieces, sourceBoxes),
        timelineObjects: _.compact([])
    };
    p.content = content;
    p.name = `DVE: ${sources} split`;
    return p;
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This function is called whenever an item in the as-run-log is created
 */
function default_1(_context) {
    return Promise.resolve([]);
}
exports.default = default_1;


/***/ })
/******/ ]);