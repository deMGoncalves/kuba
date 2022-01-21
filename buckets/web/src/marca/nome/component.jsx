import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import Origem from './origem'
import style from './style'

export default (title) =>
  <container.Section className={style.title}>
    <text.H1 className={style.title__h1} master darker md bold>{title.valor}</text.H1>
    <div className={style.title__div}>
      <Origem />
    </div>
  </container.Section>
