import h from '@kuba/h'
import container from '@kuba/container'
import Compare from './compare'
import Site from './site'
import Thumbnail from './thumbnail'
import style from './style'

export default () =>
  <container.Section className={style.hero}>
    <div className={style.hero__div}>
      <Thumbnail />
      <menu className={style.hero__menu}>
        <Site />
        <Compare />
      </menu>
    </div>
  </container.Section>
