import h, { Hide, Repeat } from '@kuba/h'
import * as f from '@kuba/f'
import Story from '@kuba/story'
import Sampling from './sampling'
import style from './style'

export default (shelf, children) =>
  <Story className={[style.shelf, shelf.className]}>
    <Hide if={f.isEmpty(children.title)}>
      {children.title}
    </Hide>
    <div className={style.shelf__main} >
      <Repeat iterator={shelf.feeds} component={Sampling} />
    </div>
  </Story>
