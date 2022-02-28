import { PlausibleInitOptions } from 'plausible-tracker/build/module/lib/tracker';
export declare type PlausibleModuleOptions = PlausibleInitOptions & {
    /**
     * If true, pageviews of SPAs that use JS-based routing will be automatically tracked.
     */
    readonly enableAutoPageviews?: boolean;
    /**
     * If true, outbound link clicks will be automatically tracked.
     */
    readonly enableAutoOutboundTracking?: boolean;
};
//# sourceMappingURL=module-options.d.ts.map