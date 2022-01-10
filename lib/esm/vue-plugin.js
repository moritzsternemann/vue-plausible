import Plausible from 'plausible-tracker';
const VuePlausible = (Vue, options) => {
    const plausible = Plausible(options);
    if ((options === null || options === void 0 ? void 0 : options.enableAutoPageviews) === true) {
        plausible.enableAutoPageviews();
    }
    if ((options === null || options === void 0 ? void 0 : options.enableAutoOutboundTracking) === true) {
        plausible.enableAutoOutboundTracking();
    }
    Vue.$plausible = plausible;
    Vue.prototype.$plausible = plausible;
};
export default VuePlausible;
