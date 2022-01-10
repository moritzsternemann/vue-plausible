"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const plausible_tracker_1 = __importDefault(require("plausible-tracker"));
const Vue3Plausible = (Vue, options) => {
    const plausible = (0, plausible_tracker_1.default)(options);
    if ((options === null || options === void 0 ? void 0 : options.enableAutoPageviews) === true) {
        plausible.enableAutoPageviews();
    }
    if ((options === null || options === void 0 ? void 0 : options.enableAutoOutboundTracking) === true) {
        plausible.enableAutoOutboundTracking();
    }
    //@ts-ignore This throws error because we're still using Vue 2.x typings. But it runs fine.
    Vue.config.globalProperties.$plausible = plausible;
};
exports.default = Vue3Plausible;
