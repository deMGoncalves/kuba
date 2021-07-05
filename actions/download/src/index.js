import h from '@kuba/h'
import * as f from '@kuba/f'

export default (url) =>
  fetch(url)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(href => h('a', { href, download: url })[f.magic('paint')]().click())
