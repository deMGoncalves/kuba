import h from '@kuba/h'

export default (url) =>
  fetch(url)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(href => h('a', { href, download: url }).paint().click())
