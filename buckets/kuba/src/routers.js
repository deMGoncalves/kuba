import router from '@rex/router'

router(/^\/$/, async () => await import('@home' /* webpackChunkName: "home" */))
