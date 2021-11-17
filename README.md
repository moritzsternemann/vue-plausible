# Plausible Analytics for Vue.js and NuxtJS

[![NPM](https://badgen.net/npm/v/vue-plausible)](https://www.npmjs.com/package/vue-plausible)

*Vue.js plugin and NuxtJS module for Plausible Analytics*

## Installation
Using [npm](https://docs.npmjs.com/cli/v6/commands/npm):
```
npm install vue-plausible
```

Using [yarn](https://yarnpkg.com/):
```
yarn add vue-plausible
```

### Vue.js Plugin
```js
import Vue from 'vue'
import { VuePlausible } from 'vue-plausible'

Vue.use(VuePlausible, {
  // see configuration section
})
```
To enable automatic page view tracking for SPAs, call the `enableAutoPageviews()` method.
To enable automatic outbound link tracking, call the `enableAutoOutboundTracking()` method.

### NuxtJS Module
```ts
// nuxt.config.js

// optional when using nuxt.config.ts
/// <reference types="vue-plausible" />

export default {
  modules: [
    'vue-plausible'
  ]
}
```

#### Module Options

Add a `plausible` section to `nuxt.config.js` to set the module options:
```ts
// nuxt.config.js

export default {
  plausible: {
    // see configuration section
  }
}
```

#### Runtime Config

To use dynamic environment variables in production, use [`publicRuntimeConfig`](https://nuxtjs.org/guide/runtime-config).
Otherwise, the configuration options passed in `nuxt.config.js` will be read once and bundled during the build only.
See the [configuration section](#configuration) for all available options.

```ts
// nuxt.config.js

export default {
  buildModules: [
    'vue-plausible'
  ],
  plausible: { // Use as fallback if no runtime config is available at runtime
    domain: process.env.PLAUSIBLE_DOMAIN
  },
  publicRuntimeConfig: {
    plausible: {
      domain: process.env.PLAUSIBLE_DOMAIN,
      apiHost: process.env.PLAUSIBLE_API_HOST
    }
  }
}
```

## Usage
`vue-plausible` is based on the official [`plausible-tracker`](https://github.com/plausible/plausible-tracker) package.

### Configuration
Configuration options are inherited from `plausible-tracker`:
| Option | Type | Description | Default |
| ------ | ---- | ----------- | ------- |
| domain | `string` | Your site's domain name, as declared by you in Plausible's settings. | `location.hostname` |
| hashMode | `boolean` | Enables tracking based on URL hash changes. | `false` |
| trackLocalhost | `boolean` | Enables tracking on *localhost*. | `false` |
| apiHost | `string` | Plausible's API host to use. Change this if you are self-hosting. | `https://plausible.io` |
|||||
| enableAutoPageviews | `boolean` | Enables automatic pageview tracking in SPAs. [Learn more](https://github.com/plausible/plausible-tracker#automatically-tracking-page-views) | `true` |
| enableAutoOutboundTracking | `boolean` | Enables automatic outbound link click tracking. [Learn more](https://github.com/plausible/plausible-tracker#outbound-link-click-tracking) | `false` |

### Integration
The `plausible-tracker` package provides various methods to track specific events, for example [`trackPageview()`](https://github.com/plausible/plausible-tracker/blob/master/README.md#automatically-tracking-page-views) and [`trackEvent()`](https://github.com/plausible/plausible-tracker/blob/master/README.md#tracking-custom-events-and-goals). You can find all the available methods and options in [the plausible-tracker documentation](https://github.com/plausible/plausible-tracker/blob/master/README.md).
The `Plausible` instance is exposed to your Vue.js or NuxtJS app in the following ways:
- `Vue.$plausible` (Vue.js only)
- `this.$plausible` inside Vue components
- `context.app.$plausible` inside asyncData, fetch, plugins, middleware, nuxtServerInit (NuxtJS only)
- `this.$plausible` inside Vuex stores (NuxtJS only)

### Proxying
To use proxying as described in the [Plausible 'Using a proxy' documentation](https://plausible.io/docs/proxy/introduction), you need to adjust the `apiHost` configuration option accordingly.
Using vue-plausible only requires to proxy the `/api/event` endpoint since the frontend code is already bundled from `plausible-tracker`.

Please note that event endpoint path always ends with `/api/event`. See the following example:
```ts
plausible: {
  apiHost: 'https://<yourdomain.com>/stats' // Reports events to https://<yourdomain.com>/stats/api/event
}
```

### Opt out

To exclude yourself from the analytics, `plausible-tracker` offers an opt-out mechanism that can be activated by setting the `localStorage.plausible_ignore` value to `true`.

More information can be found in the [Plausible documentation](https://plausible.io/docs/excluding-localstorage).

## Author
I'm [Moritz Sternemann](https://github.com/moritzsternemann), a computer-science student at [Technical University of Munich](https://www.tum.de/).
- GitHub: [@moritzsternemann](https://github.com/moritzsternemann)
- Email: [opensource@moritzsternemann.de](mailto:opensource@moritzsternemann.de)
- Twitter: [@strnmn](https://twitter.com/strnmn)

## License
This project is available under the MIT license. See the [LICENSE](LICENSE) file for more information.
