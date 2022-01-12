import h from '@kuba/h'
import container from '@kuba/container'
import style from './style'

export default (shapes) =>
  <container.Div className={style.shapes__grid}>
    {shapes.snapshot}
  </container.Div>
