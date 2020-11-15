import { PluginFunction } from 'vue'
import Plausible, { PlausibleOptions } from 'plausible-tracker'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $plausible: ReturnType<typeof Plausible>
  }

  interface Vue {
    $plausible: ReturnType<typeof Plausible>
  }
}

const VuePlausible: PluginFunction<PlausibleOptions> = (Vue, options) => {
  const plausible = Plausible(options)

  Vue.$plausible = plausible
  Vue.prototype.$plausible = plausible
}

export default VuePlausible
