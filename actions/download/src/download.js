import h from '@kuba/h'
import * as f from '@kuba/f'

export default (url, name) =>
  fetch(url)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(href => h('a', { href, download: f.or(name, href) }))
    .then(tag => tag.paint())
    .then(element => element.click())
