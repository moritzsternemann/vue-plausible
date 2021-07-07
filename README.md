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

Vue.$plausible.enableAutoPageviews() // optional
```
To enable automatic page view tracking for SPAs, call the `enableAutoPageviews()` method.

### NuxtJS Module
```ts
// nuxt.config.js

// optional when using nuxt.config.ts
/// <reference types="vue-plausible" />

export default {
  // ...
  modules: [
    'vue-plausible'
  ],
  plausible: {
    // see configuration section
  }
  // ...
}
```

## Usage
`vue-plausible` uses the [`plausible-tracker`](https://github.com/plausible/plausible-tracker) package in the background.

### Configuration
Configuration options are inherited from `plausible-tracker`:
| Option | Type | Description | Default |
| ------ | ---- | ----------- | ------- |
| domain | `string` | Your site's domain, as declared by you in Plausible's settings. | `location.hostname` |
| hashMode | `boolean` | Enables tracking based on URL hash changes. | `false` |
| trackLocalhost | `boolean` | Enables tracking on *localhost*. | `false` |
| apiHost | `string` | Plausible's API host to use. Change this if you are self-hosting. | `https://plausible.io` |

### Integration
The `plausible-tracker` package provides various methods to track specific events, for example [`trackPageview()`](https://github.com/plausible/plausible-tracker/blob/master/README.md#automatically-tracking-page-views) and [`trackEvent()`](https://github.com/plausible/plausible-tracker/blob/master/README.md#tracking-custom-events-and-goals). You can find all the available methods and options in [the plausible-tracker documentation](https://github.com/plausible/plausible-tracker/blob/master/README.md).
The `Plausible` instance is exposed to your Vue.js or NuxtJS app in the following ways:
- `Vue.$plausible` (Vue.js only)
- `this.$plausible` inside Vue components
- `context.app.$plausible` inside asyncData, fetch, plugins, middleware, nuxtServerInit (NuxtJS only)
- `this.$plausible` inside Vuex stores (NuxtJS only)

### Proxying
To use proxying as described in the [Plausible 'Using a proxy' documentation](https://plausible.io/docs/proxy/introduction), you need to adjust the `apiHost` configuration option accordingly. Using vue-plausible only requires to proxy the `/api/event` endpoint since the frontend code is already bundled from `plausible-tracker`.
Please note that event endpoint path always ends with `/api/event`. See the following example:
```ts
plausible: {
  // ...
  apiHost: 'https://<yourdomain.com>/stats' // Reports events to https://<yourdomain.com>/stats/api/event
}
```

## Author
I'm [Moritz Sternemann](https://github.com/moritzsternemann), a computer-science student at [Technical University of Munich](https://www.tum.de/).
- GitHub: [@moritzsternemann](https://github.com/moritzsternemann)
- Email: [opensource@moritzsternemann.de](mailto:opensource@moritzsternemann.de)
- Twitter: [@strnmn](https://twitter.com/strnmn)

## License
This project is available under the MIT license. See the [LICENSE](LICENSE) file for more information.
