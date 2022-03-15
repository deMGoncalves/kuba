import h, { Fragment } from '@kuba/h'
import middleware from '@kuba/middleware'
import render from './render'

const connect = function (sandbox) {
  const worker = sandbox.require()

  worker.addEventListener('message', render(sandbox))
}

export default middleware(connect)
