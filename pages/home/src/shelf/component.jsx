import container from '@kuba/container'
import h from '@kuba/h'
import Metro from '@kuba/metro'
import style from './style'
import text from '@kuba/text'

export default (shelf) =>
  <container.Section className={style.shelf} empty:isTruthy={shelf.isEmpty}>
    <text.H2 className={style.shelf__h2} master darker md bold>{shelf.title}</text.H2>
    <Metro className={style.shelf__metro}>
      {shelf.shapes}
    </Metro>
  </container.Section>
