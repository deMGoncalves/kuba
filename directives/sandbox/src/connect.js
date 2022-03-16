import middleware from '@kuba/middleware'
import render from './render'

function connect (sandbox) {
  const worker = sandbox.require()

  worker.addEventListener('message', render(sandbox))
}

export default middleware(connect)
