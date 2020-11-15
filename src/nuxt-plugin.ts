import { Plugin } from '@nuxt/types'
import Plausible, { PlausibleOptions } from 'plausible-tracker'

declare module 'vue/types/vue' {
  // this.$plausible inside Vue components
  interface Vue {
    $plausible: ReturnType<typeof Plausible>
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$plausible inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $plausible: ReturnType<typeof Plausible>
  }

  // nuxtContext.$plausible
  interface Context {
    $plausible: ReturnType<typeof Plausible>
  }
}

declare module 'vuex/types/index' {
  // this.$plausible inside Vuex stores
  interface Store<S> {
    $plausible: ReturnType<typeof Plausible>
  }
}

const PlausiblePlugin: Plugin = (context, inject) => {
  const plausible = Plausible('<% options %>' as PlausibleOptions)
  plausible.enableAutoPageviews()
  inject('plausible', plausible)
}

export default PlausiblePlugin
