import h, { render } from '@kuba/h'
import { after } from '@kuba/middleware'

function perf (output) {
  render(
    document.head,
    <link rel='preload' href={this.src} as='image' />
  )

  return output
}

export default after(perf)
