import worker from './worker'

function emit (channel, message) {
  worker.postMessage({ channel, message })
}

export default emit
