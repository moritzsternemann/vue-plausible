"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Vue3Plausible = exports.VuePlausible = void 0;
require("./extend");
var vue_plugin_1 = require("./vue-plugin");
Object.defineProperty(exports, "VuePlausible", { enumerable: true, get: function () { return __importDefault(vue_plugin_1).default; } });
var vue_3_plugin_1 = require("./vue-3-plugin");
Object.defineProperty(exports, "Vue3Plausible", { enumerable: true, get: function () { return __importDefault(vue_3_plugin_1).default; } });
var nuxt_module_1 = require("./nuxt-module");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return __importDefault(nuxt_module_1).default; } });
