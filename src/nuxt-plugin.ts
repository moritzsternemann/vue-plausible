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
  const optionsDomain = '<%= options.domain %>'
  const optionsHashMode = '<%= options.hashMode %>' as any
  const optionsTrackLocalhost = '<%= options.trackLocalhost %>' as any
  const optionsApiHost = '<%= options.apiHost %>'

  const options = {
    domain: optionsDomain.length ? optionsDomain : null,
    hashMode: optionsHashMode === 'true',
    trackLocalhost: optionsTrackLocalhost === 'true',
    apiHost: optionsApiHost.length ? optionsApiHost : null
  } as PlausibleOptions

  const plausible = Plausible(options)
  plausible.enableAutoPageviews()
  inject('plausible', plausible)
}

export default PlausiblePlugin
