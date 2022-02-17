import h, { Fragment } from '@kuba/h'
import Select from '@kuba/select'
import Back from './back'
import Header from './header'
import Shelf from './shelf'
import style from './style'
import Tag from './tag'

export default (tamanho) =>
  <>
    <Tag onClick={() => tamanho.open()} len={tamanho.len} />
    <Select className={style.tamanho__select} onClose={() => tamanho.close()} opened={tamanho.opened}>
      <Back onClick={() => tamanho.close()} />
      <Header />
      <Shelf />
    </Select>
  </>
