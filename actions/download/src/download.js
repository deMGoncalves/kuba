import * as f from '@kuba/f'
import evaluate from './evaluate'
import h from '@kuba/h'
import http from '@kuba/http'

export default (url, name) =>
  http
    .get(url)
    .blob(blob => URL.createObjectURL(blob))
    .then(href => h('a', { href, download: f.or(name, evaluate(url)) }))
    .then(tag => tag.paint())
    .then(element => element.click())
