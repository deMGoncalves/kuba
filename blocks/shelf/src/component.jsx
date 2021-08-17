import h, { Repeat } from '@kuba/h'
import Story from '@kuba/story'
import Service from './service'
import style from './style'

export default (shelf) =>
  <Story className={[style.shelf, shelf.className]}>
    <div className={style.shelf__main} >
      <Repeat iterator={shelf.services} component={Service} />
    </div>
  </Story>
