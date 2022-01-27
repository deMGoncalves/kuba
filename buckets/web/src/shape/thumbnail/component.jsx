import h from '@kuba/h'
import container from '@kuba/container'
import Compare from './compare'
import Picture from './picture'
import Site from './site'
import style from './style'

export default () =>
  <container.Section className={style.thumbnail}>
    <Picture />
    <div className={style.thumbnail__div}>
      <Compare />
      <Site />
    </div>
  </container.Section>
