import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'

export default (title) =>
  <container.Section>
    <text.H1 master darker md bold>{title.valor}</text.H1>
  </container.Section>
