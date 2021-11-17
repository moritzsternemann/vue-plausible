import Plausible from 'plausible-tracker'
import { PlausibleModuleOptions } from './nuxt-module'

declare module 'vue/types/vue' {
  // this.$plausible inside Vue components
  interface Vue {
    $plausible: ReturnType<typeof Plausible>
  }
}

declare module '@nuxt/types' {
  // module configuration in nuxt.config.ts
  interface NuxtOptions {
    plausible?: PlausibleModuleOptions
  }

  // nuxtContext.app.$plausible inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    readonly $plausible: ReturnType<typeof Plausible>
  }

  // nuxtContext.$plausible
  interface Context {
    readonly $plausible: ReturnType<typeof Plausible>
  }
}

declare module '@nuxt/types/config/runtime' {
  // runtime config in nuxt.config.ts
  interface NuxtRuntimeConfig {
    plausible?: PlausibleModuleOptions
  }
}

declare module 'vuex/types/index' {
  // this.$plausible inside Vuex stores
  interface Store<S> {
    readonly $plausible: ReturnType<typeof Plausible>
  }
}
