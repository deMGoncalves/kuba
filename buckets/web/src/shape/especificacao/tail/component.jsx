import h, { Fragment } from '@kuba/h'
import Hide from '@kuba/hide'
import Show from '@kuba/show'
import text from '@kuba/text'
import style from './style'

export default (tail) =>
  <>
    <Show when={tail.valor}>
      <div className={style.tail}>
        <text.Strong master darker md medium>Tail</text.Strong>
        <text.Span master xxxs>Sim</text.Span>
      </div>
    </Show>
    <Hide when={tail.valor}>
      <div className={style.tail}>
        <text.Strong master light md medium>Tail</text.Strong>
        <text.Span master light xxxs>Não</text.Span>
      </div>
    </Hide>
  </>
