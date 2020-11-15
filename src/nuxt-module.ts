import { Module } from '@nuxt/types'
import path from 'path'
import { PlausibleOptions } from 'plausible-tracker'

const PlausibleModule: Module<PlausibleOptions> = function (moduleOptions) {
  this.addPlugin({
    src: path.resolve(__dirname, './nuxt-plugin.js'),
    options: moduleOptions
  })
}

export default PlausibleModule

export const meta = require('../package.json')
