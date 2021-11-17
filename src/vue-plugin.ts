import { PluginFunction } from 'vue'
import Plausible from 'plausible-tracker'
import { PlausibleInitOptions } from 'plausible-tracker/build/module/lib/tracker'

declare module 'vue/types/vue' {
  interface VueConstructor {
    $plausible: ReturnType<typeof Plausible>
  }

  interface Vue {
    $plausible: ReturnType<typeof Plausible>
  }
}

const VuePlausible: PluginFunction<PlausibleInitOptions> = (Vue, options) => {
  const plausible = Plausible(options)

  Vue.$plausible = plausible
  Vue.prototype.$plausible = plausible
}

export default VuePlausible
