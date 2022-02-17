import h, { Fragment } from '@kuba/h'
import Select from '@kuba/select'
import Back from './back'
import Header from './header'
import Shelf from './shelf'
import style from './style'
import Tag from './tag'

export default (material) =>
  <>
    <Tag onClick={() => material.open()} len={material.len} />
    <Select className={style.material__select} onClose={() => material.close()} opened={material.opened}>
      <Back onClick={() => material.close()} />
      <Header />
      <Shelf className={style.material__shelf} />
    </Select>
  </>
