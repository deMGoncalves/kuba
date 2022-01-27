import h from '@kuba/h'
import container from '@kuba/container'
import Compare from './compare'
import Picture from './picture'
import style from './style'

export default () =>
  <container.Section className={style.thumbnail}>
    <Picture />
    <Compare />
  </container.Section>
