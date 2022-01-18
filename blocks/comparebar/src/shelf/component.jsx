import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import style from './style'

export default (shelf) =>
  <container.Section className={style.shelf}>
    {shelf.shapes}
  </container.Section>
