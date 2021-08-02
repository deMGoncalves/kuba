export default function (sandbox) {
  const worker = sandbox.connect()
  worker.addEventListener('message', console.log)
}
