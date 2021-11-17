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

const VuePlausible: PluginFunction<PlausibleModuleOptions> = (Vue, options) => {
  const plausible = Plausible(options)

  if (options?.enableAutoPageviews === true) {
    plausible.enableAutoPageviews()
  }
  if (options?.enableAutoOutboundTracking === true) {
    plausible.enableAutoOutboundTracking()
  }

  Vue.$plausible = plausible
  Vue.prototype.$plausible = plausible
}

export default VuePlausible
