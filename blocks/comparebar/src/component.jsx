import h from '@kuba/h'
import Side from '@kuba/side'
import style from './style'

export default (comparebar) =>
  <Side className={style.comparebar} onClose={() => comparebar.close()} opened={comparebar.opened} />
