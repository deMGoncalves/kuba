import h, { Fragment } from '@kuba/h'
import Select from '@kuba/select'
import Back from './back'
import Header from './header'
import Shelf from './shelf'
import style from './style'
import Tag from './tag'

export default (tipo) =>
  <>
    <Tag onClick={() => tipo.open()} len={tipo.len} />
    <Select className={style.tipo__select} onClose={() => tipo.close()} opened={tipo.opened}>
      <Back onClick={() => tipo.close()} />
      <Header />
      <Shelf className={style.tipo__shelf} />
    </Select>
  </>
