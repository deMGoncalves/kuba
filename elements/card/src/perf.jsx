import h, { render } from '@kuba/h'
import middleware from '@kuba/middleware'

const perf = (target) => (
  render(
    document.head,
    <link rel='preload' href={target.thumbnail} as='image' />
  )
)

export default middleware(perf)
