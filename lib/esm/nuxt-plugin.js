import Plausible from 'plausible-tracker';
const PlausiblePlugin = (context, inject) => {
    var _a;
    const optionsDomain = '<%= options.domain %>';
    const optionsHashMode = '<%= options.hashMode %>';
    const optionsTrackLocalhost = '<%= options.trackLocalhost %>';
    const optionsApiHost = '<%= options.apiHost %>';
    const optionsEnableAutoPageviews = '<%= options.enableAutoPageviews %>';
    const optionsEnableAutoOutboundTracking = '<%= options.enableAutoOutboundTracking %>';
    const options = Object.assign({ domain: optionsDomain.length ? optionsDomain : null, hashMode: optionsHashMode === 'true', trackLocalhost: optionsTrackLocalhost === 'true', apiHost: optionsApiHost.length ? optionsApiHost : 'https://plausible.io', enableAutoPageviews: optionsEnableAutoPageviews === 'true', enableAutoOutboundTracking: optionsEnableAutoOutboundTracking === 'true' }, (_a = context.$config) === null || _a === void 0 ? void 0 : _a.plausible);
    if (options.domain !== null) {
        const plausible = Plausible(options);
        if (options.enableAutoPageviews === true) {
            plausible.enableAutoPageviews();
        }
        if (options.enableAutoOutboundTracking === true) {
            plausible.enableAutoOutboundTracking();
        }
        inject('plausible', plausible);
    }
};
export default PlausiblePlugin;
