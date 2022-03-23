import { args } from '@kuba/router'
import container from '@kuba/container'
import h from '@kuba/h'
import style from './style'
import text from '@kuba/text'

export default () =>
  <container.Section className={style.title}>
    <text.Span className={style.title__span} master xxxs darker medium>Resultado de busca</text.Span>
    <text.H1 className={style.title__h1} master darker md bold>{args.q}</text.H1>
  </container.Section>
