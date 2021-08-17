export default () =>
  window.addEventListener('load', () =>
    navigator
      .serviceWorker
      .register(new URL('./sw', import.meta.url /* webpackChunkName: "sw" */)))
