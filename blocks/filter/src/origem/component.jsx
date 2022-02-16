import h, { Fragment } from '@kuba/h'
import Select from '@kuba/select'
import Back from './back'
import Header from './header'
import Shelf from './shelf'
import style from './style'
import Tag from './tag'

export default (origem) =>
  <>
    <Tag onClick={() => origem.open()} len={origem.len} />
    <Select className={style.origem__select} onClose={() => origem.close()} opened={origem.opened}>
      <Back onClick={() => origem.close()} />
      <Header />
      <Shelf />
    </Select>
  </>
