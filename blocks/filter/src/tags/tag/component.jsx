import h from '@kuba/h'
import icon from '@kuba/icon'
import text from '@kuba/text'
import style from './style'

export default (tag) =>
  <text.Span className={style.tag} master lightest xxxs>
    {tag.value}
    <icon.Close className={style.tag__icon} onClick={() => tag.remove()} onColor small />
  </text.Span>
