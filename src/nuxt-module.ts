import path from 'path'
import { Module } from '@nuxt/types'
import { PlausibleOptions } from 'plausible-tracker'

// default options, fallback to plausible-tracker defaults
const defaultOptions: PlausibleOptions = {
  domain: undefined,
  hashMode: undefined,
  trackLocalhost: undefined,
  apiHost: undefined
}

const PlausibleModule: Module<PlausibleOptions> = function (moduleOptions) {
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
