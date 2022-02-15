import h, { Fragment } from '@kuba/h'
import Select from '@kuba/select'
import tag from '@kuba/tag'
import Back from './back'
import Header from './header'
import Shelf from './shelf'
import style from './style'

export default (origem) =>
  <>
    <tag.Master className={style.origem} onClick={() => origem.open()} darker medium>Origem</tag.Master>
    <Select className={style.origem__select} onClose={() => origem.close()} opened={origem.opened}>
      <Back onClick={() => origem.close()} />
      <Header />
      <Shelf />
    </Select>
  </>
