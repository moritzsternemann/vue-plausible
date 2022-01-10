import Plausible from 'plausible-tracker';
const Vue3Plausible = (Vue, options) => {
    const plausible = Plausible(options);
    if ((options === null || options === void 0 ? void 0 : options.enableAutoPageviews) === true) {
        plausible.enableAutoPageviews();
    }
    if ((options === null || options === void 0 ? void 0 : options.enableAutoOutboundTracking) === true) {
        plausible.enableAutoOutboundTracking();
    }
    //@ts-ignore This throws error because we're still using Vue 2.x typings. But it runs fine.
    Vue.config.globalProperties.$plausible = plausible;
};
export default Vue3Plausible;
