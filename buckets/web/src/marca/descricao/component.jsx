import h from '@kuba/h'
import text from '@kuba/text'
import Hide from '@kuba/hide'
import style from './style'

export default (data) =>
  <article className={style.descricao__text} opened:isTruthy={data.opened} onClick={() => data.open()}>
    <text.P className={style.descricao__paragraph} xxs>{data.descricao}</text.P>
    <Hide when={data.opened}>
      <text.Strong master darkest xxxs>Ver mais...</text.Strong>
    </Hide>
  </article>
