import { Plugin } from '@nuxt/types'
import Plausible, { PlausibleOptions } from 'plausible-tracker'

const PlausiblePlugin: Plugin = (context, inject) => {
  const optionsDomain = '<%= options.domain %>'
  const optionsHashMode = '<%= options.hashMode %>' as any
  const optionsTrackLocalhost = '<%= options.trackLocalhost %>' as any
  const optionsApiHost = '<%= options.apiHost %>'

  const options = {
    domain: optionsDomain.length ? optionsDomain : null,
    hashMode: optionsHashMode === 'true',
    trackLocalhost: optionsTrackLocalhost === 'true',
    apiHost: optionsApiHost.length ? optionsApiHost : 'https://plausible.io',
    ...context.$config?.plausible
  } as PlausibleOptions

  if (options.domain !== null) {
    const plausible = Plausible(options)
    plausible.enableAutoPageviews()
    inject('plausible', plausible)
  }
}

export default PlausiblePlugin
