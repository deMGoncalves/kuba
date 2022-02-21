import h, { Fragment } from '@kuba/h'
import Select from '@kuba/select'
import Back from './back'
import Header from './header'
import Shelf from './shelf'
import style from './style'
import Tag from './tag'

export default (montagem) =>
  <>
    <Tag onClick={() => montagem.open()} len={montagem.len} />
    <Select className={style.montagem__select} onClose={() => montagem.close()} opened={montagem.opened}>
      <Back onClick={() => montagem.close()} />
      <Header />
      <Shelf className={style.montagem__shelf} />
    </Select>
  </>
