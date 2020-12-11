export default (url) =>
  new Blob([`importScripts('${url}')`], { type: 'application/javascript' })
