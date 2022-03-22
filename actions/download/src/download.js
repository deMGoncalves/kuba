import * as f from '@kuba/f'
import evalutate from './evalutate'
import h from '@kuba/h'
import http from '@kuba/http'

export default (url, name) =>
  http
    .get(url)
    .blob(blob => URL.createObjectURL(blob))
    .then(href => h('a', { href, download: f.or(name, evalutate(url)) }))
    .then(tag => tag.paint())
    .then(element => element.click())
