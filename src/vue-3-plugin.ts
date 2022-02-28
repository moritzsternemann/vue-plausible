import { PluginFunction } from 'vue'
import Plausible from 'plausible-tracker'
import { PlausibleModuleOptions } from './module-options'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $plausible: ReturnType<typeof Plausible>
  }

  interface Vue {
    $plausible: ReturnType<typeof Plausible>
  }
}

//@ts-ignore
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $plausible: ReturnType<typeof Plausible>
    }
}

const Vue3Plausible: PluginFunction<PlausibleModuleOptions> = (Vue, options) => {
  const plausible = Plausible(options)

  if (options?.enableAutoPageviews === true) {
    plausible.enableAutoPageviews()
  }
  if (options?.enableAutoOutboundTracking === true) {
    plausible.enableAutoOutboundTracking()
  }

  //@ts-ignore This throws error because we're still using Vue 2.x typings. But it runs fine.
  Vue.config.globalProperties.$plausible = plausible
}

export default Vue3Plausible
