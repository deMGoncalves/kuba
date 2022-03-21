import Compare from './compare'
import container from '@kuba/container'
import h from '@kuba/h'
import Preco from './preco'
import Site from './site'
import style from './style'
import Thumbnail from './thumbnail'

export default () =>
  <container.Section className={style.hero}>
    <div className={style.hero__div}>
      <Thumbnail />
      <Preco />
      <menu className={style.hero__menu}>
        <Site />
        <Compare />
      </menu>
    </div>
  </container.Section>
