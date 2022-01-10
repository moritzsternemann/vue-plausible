import Plausible from 'plausible-tracker';
import { PlausibleModuleOptions } from './module-options';
declare module 'vue/types/vue' {
    interface Vue {
        $plausible: ReturnType<typeof Plausible>;
    }
}
declare module '@nuxt/types' {
    interface NuxtOptions {
        plausible?: PlausibleModuleOptions;
    }
    interface NuxtAppOptions {
        readonly $plausible: ReturnType<typeof Plausible>;
    }
    interface Context {
        readonly $plausible: ReturnType<typeof Plausible>;
    }
}
declare module '@nuxt/types/config/runtime' {
    interface NuxtRuntimeConfig {
        plausible?: PlausibleModuleOptions;
    }
}
declare module 'vuex/types/index' {
    interface Store<S> {
        readonly $plausible: ReturnType<typeof Plausible>;
    }
}
//# sourceMappingURL=extend.d.ts.map