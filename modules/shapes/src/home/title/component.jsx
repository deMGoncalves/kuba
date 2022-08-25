import h from '@kuba/h'
import container from '@kuba/container'
import style from './style'
import text from '@kuba/text'
import i18n from './i18n'

export default () =>
  <container.Section className={style.title}>
    <text.Span className={style.title__span} master xxxs darker medium>{i18n.title}</text.Span>
    <text.H1 className={style.title__h1} master darker md bold>{i18n.description}</text.H1>
  </container.Section>
