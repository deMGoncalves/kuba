import * as f from '@kuba/f'
import h, { render } from '@kuba/h'

export default (strings, ...expressions) => {
  const textContent = f.zip(strings, expressions).flat(Infinity).join('').replace(/[\n ]+/g, ' ').trim()
  render(
    document.head,
    <style>{textContent}</style>
  )
}
