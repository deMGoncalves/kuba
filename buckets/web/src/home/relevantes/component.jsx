import container from '@kuba/container'
import h from '@kuba/h'
import Metro from '@kuba/metro'
import style from './style'
import text from '@kuba/text'

export default (relevantes) =>
  <container.Section className={style.relevantes}>
    <hgroup className={style.relevantes__hgroup}>
      <text.Span className={style.relevantes__span} master xxxs darker medium>Seja bem vindo!</text.Span>
      <text.H1 className={style.relevantes__h1} master darker md bold>Descubra novas possibilidades para o seu role</text.H1>
    </hgroup>
    <Metro className={style.relevantes__metro}>
      {relevantes.shapes}
    </Metro>
  </container.Section>
