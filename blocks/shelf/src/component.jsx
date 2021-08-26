import h from '@kuba/h'
import Repeat from '@kuba/repeat'
import Story from '@kuba/story'
import Box from './box'
import style from './style'

export default (shelf) =>
  <Story className={[style.shelf, shelf.className]}>
    <div className={style.shelf__main} >
      <Repeat iterator={shelf.services} component={Box} />
    </div>
  </Story>
