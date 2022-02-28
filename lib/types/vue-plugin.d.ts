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
declare const VuePlausible: PluginFunction<PlausibleModuleOptions>;
export default VuePlausible;
//# sourceMappingURL=vue-plugin.d.ts.map