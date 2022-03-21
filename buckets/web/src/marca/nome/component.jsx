import container from '@kuba/container'
import h from '@kuba/h'
import Origem from './origem'
import Site from './site'
import style from './style'
import text from '@kuba/text'
import View from './view'

export default (title) =>
  <container.Section className={style.title}>
    <text.H1 className={style.title__h1} master darker md bold>{title.valor}</text.H1>
    <div className={style.title__div}>
      <Origem />
      <Site />
      <View />
    </div>
  </container.Section>
