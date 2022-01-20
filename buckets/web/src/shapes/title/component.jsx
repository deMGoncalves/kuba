import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import style from './style'

export default () =>
  <container.Section className={style.title}>
    <text.Span className={style.title__span} master xxxs darker medium>Seja bem vindo!</text.Span>
    <text.H1 className={style.title__h1} master darker md bold>Escolha o melhor shape para seu setup</text.H1>
  </container.Section>
