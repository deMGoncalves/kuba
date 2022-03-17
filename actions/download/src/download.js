import * as f from '@kuba/f'
import evalutate from './evalutate'
import h from '@kuba/h'

export default (url, name) =>
  fetch(url)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
    .then(href => h('a', { href, download: f.or(name, evalutate(url)) }))
    .then(tag => tag.paint())
    .then(element => element.click())
