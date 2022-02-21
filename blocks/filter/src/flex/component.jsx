import h, { Fragment } from '@kuba/h'
import Select from '@kuba/select'
import Back from './back'
import Header from './header'
import Shelf from './shelf'
import style from './style'
import Tag from './tag'

export default (flex) =>
  <>
    <Tag onClick={() => flex.open()} len={flex.len} />
    <Select className={style.flex__select} onClose={() => flex.close()} opened={flex.opened}>
      <Back onClick={() => flex.close()} />
      <Header />
      <Shelf className={style.flex__shelf} />
    </Select>
  </>
