import h from '@kuba/h'
import icon from '@kuba/icon'
import style from './style'
import text from '@kuba/text'

export default (tag) =>
  <text.Span className={style.tag} master lightest xxxs>
    {tag.value}
    <icon.Close className={style.tag__icon} onClick={() => tag.remove()} onColor small />
  </text.Span>
