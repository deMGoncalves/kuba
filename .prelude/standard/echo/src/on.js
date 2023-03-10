import worker from './worker'

function on (channel, funcitonRef) {
  worker.addEventListener('message', (event) => (
    (channel === event.data?.channel) && funcitonRef(event.data?.message))
  )
}

export default on
