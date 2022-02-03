import h from '@kuba/h'
import container from '@kuba/container'
import Compare from './compare'
import Picture from './picture'
import Site from './site'
import style from './style'

export default () =>
  <container.Section className={style.hero}>
    <div className={style.hero__div}>
      <Picture />
      <menu className={style.hero__menu}>
        <Site />
        <Compare />
      </menu>
    </div>
  </container.Section>
