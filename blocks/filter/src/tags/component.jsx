import * as f from '@kuba/f'
import h from '@kuba/h'
import style from './style'

const len = f.dunder('len')
const component = (tags) =>
  <div className={style.tags} len:isTruthy={len(tags)}>
    {tags.filters}
  </div>

f.assign(component, {
  len: f.dunder.len
})

export default component
