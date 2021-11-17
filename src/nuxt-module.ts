import path from 'path'
import { Module } from '@nuxt/types'
import { PlausibleInitOptions } from 'plausible-tracker/build/module/lib/tracker'

export declare type PlausibleModuleOptions = PlausibleInitOptions & {
  /**
   * If true, pageviews of SPAs that use JS-based routing will be automatically tracked.
   */
  readonly enableAutoPageviews?: boolean
  /**
   * If true, outbound link clicks will be automatically tracked.
   */
  readonly enableAutoOutboundTracking?: boolean
}

// default options, fallback to plausible-tracker defaults
const defaultOptions: PlausibleModuleOptions = {
  domain: undefined,
  hashMode: undefined,
  trackLocalhost: undefined,
  apiHost: undefined,
  enableAutoPageviews: true,
  enableAutoOutboundTracking: false
}

const PlausibleModule: Module<PlausibleModuleOptions> = function (moduleOptions) {
  const options = {
    ...defaultOptions,
    ...this.options.plausible,
    ...moduleOptions
  }

  this.addPlugin({
    src: path.resolve(__dirname, '../esm/nuxt-plugin.js'),
    mode: 'client',
    ssr: false,
    fileName: 'vue-plausible.client.js',
    options
  })
}

export default PlausibleModule

export const meta = require('../../package.json')
