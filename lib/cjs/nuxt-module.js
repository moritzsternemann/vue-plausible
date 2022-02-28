"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.meta = void 0;
const path_1 = __importDefault(require("path"));
// default options, fallback to plausible-tracker defaults
const defaultOptions = {
    domain: undefined,
    hashMode: undefined,
    trackLocalhost: undefined,
    apiHost: undefined,
    enableAutoPageviews: true,
    enableAutoOutboundTracking: false
};
const PlausibleModule = function (moduleOptions) {
    if (!this)
        return;
    const options = Object.assign(Object.assign(Object.assign({}, defaultOptions), this.options.plausible), moduleOptions);
    this.addPlugin({
        src: path_1.default.resolve(__dirname, '../esm/nuxt-plugin.js'),
        mode: 'client',
        ssr: false,
        fileName: 'vue-plausible.client.js',
        options
    });
};
exports.default = PlausibleModule;
exports.meta = require('../../package.json');
