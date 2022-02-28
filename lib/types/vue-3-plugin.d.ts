import { PluginFunction } from 'vue';
import Plausible from 'plausible-tracker';
import { PlausibleModuleOptions } from './module-options';
declare module 'vue/types/vue' {
    interface VueConstructor {
        $plausible: ReturnType<typeof Plausible>;
    }
    interface Vue {
        $plausible: ReturnType<typeof Plausible>;
    }
}
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $plausible: ReturnType<typeof Plausible>;
    }
}
declare const Vue3Plausible: PluginFunction<PlausibleModuleOptions>;
export default Vue3Plausible;
//# sourceMappingURL=vue-3-plugin.d.ts.map